function Counter() {

const [count, setCount] = useState(4)

function plus() {
  setCount(count+1);
}

function minus() {
   if (count === 0) {
    return
  }
  setCount(count-1);  
}

const [isExpanded, setIsExpanded] = useState(false);

return (
  <div>
    <p>I am some content</p>
<button onClick={() => setIsExpanded(!isExpanded)}>
  Show some more content
</button>
{isExpanded && 
<p>This is your extra hidden content</p>
}
</div>
);

}

export default Counter