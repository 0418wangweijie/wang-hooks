import './App.css';

import useUpdateEffect from "@/hooks/useUpdateEffect";

const App = () => {
    useUpdateEffect(()=>{},[])
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
