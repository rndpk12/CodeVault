import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <div className="h-screen bg-zinc-900 p-4">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Start coding securely..."
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}
