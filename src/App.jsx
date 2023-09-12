import './App.css';
import ParagraphEdit from './components/ParagraphEdit';

export default function App({ children }) {
  return (
    <div className="App">
      <ParagraphEdit editMode>
        Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators. Source: https://react.dev/learn/conditional-rendering
      </ParagraphEdit>
    </div>
  );
}
