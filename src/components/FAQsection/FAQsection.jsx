import SideImg from "../../assets/assets/hero-student.png";

const FAQsection = () => {
  return (
    <div className="flex justify-around items-center ml-36 mt-3 gap-10">
      <div className="w-4/5">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is the difference between var, let, and const ?
          </div>
          <div className="collapse-content">
            <p>
              In JavaScript, var, let, and const are used for variable
              declaration, but they differ in scope and mutability: var is
              function-scoped and can be re-declared and updated, let is
              block-scoped and can be updated but not re-declared, and const is
              block-scoped and cannot be re-declared or updated .
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the difference between map(), forEach(), <br /> and filter()
            ?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              forEach() will not return anything. forEach() returns undefined.
              filter() method will return an array of matching elements else
              will return an empty array if no matching happens.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Explain arrow functions and how they are different from regular
            functions ?
          </div>
          <div className="collapse-content">
            <p>
              Arrow functions, introduced in ES6, provide a concise syntax for
              writing functions in JavaScript, often used for simple
              expressions, while regular functions offer more flexibility and
              traditional syntax, including the ability to use this and
              arguments in a dynamic way.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How JavaScript Promises work ?
          </div>
          <div className="collapse-content">
            <p>
              A promise is an object returned by an asynchronous function, which
              represents the current state of the operation. At the time the
              promise is returned to the caller, the operation often isn't
              finished, but the promise object provides methods to handle the
              eventual success or failure of the operation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How closures work in JavaScript ?
          </div>
          <div className="collapse-content">
            <p>
              Each closure references a different version of the privateCounter
              variable through its own closure.
            </p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div>
        <img className="h-auto w-1/2 ml-20 " src={SideImg} alt="" />
      </div>
    </div>
  );
};

export default FAQsection;
