import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import { 
  BtnBold, BtnBulletList, BtnItalic, BtnLink, 
  BtnNumberedList, BtnStrikeThrough, BtnUnderline, 
  Editor, EditorProvider, Separator, Toolbar 
} from 'react-simple-wysiwyg';
import { AIchatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';

const PROMPT = 'Position title: {positionTitle}, give me 5-7 bullet points for my experience in resume (in HTML format using <ul> and <li> tags, no JSON or quotation marks).';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo?.Experience[index]?.title) {
      toast('Please Add Position Title');
      return;
    }

    setLoading(true);
    const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);

    try {
      const result = await AIchatSession.sendMessage(prompt);
      const resp = await result.response.text();

      // Format response to ensure it contains valid HTML for bullet points
      const formatted = resp.includes('<ul>')
        ? resp
        : `<ul>${resp
            .split('\n')
            .map(line => `<li>${line.trim()}</li>`)
            .join('')}</ul>`;

      setValue(formatted);
    } catch (error) {
      console.error('AI Generation Error:', error);
      toast('Failed to generate summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="border-primary text-primary flex gap-2 bg-pink-500 text-gray-100 rounded-md hover:bg-gray-100 hover:text-black"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (onRichTextEditorChange) {
              onRichTextEditorChange({ target: { value: e.target.value } });
            }
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
