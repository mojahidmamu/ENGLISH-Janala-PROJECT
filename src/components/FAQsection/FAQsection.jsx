import SideImg from "../../assets/assets/hero-student.png";

const FAQsection = () => {
  return (
    <div className="flex justify-around items-center ml-36 mt-3 gap-10">
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            The difference between var, let, and const ?
          </div>
          <div className="collapse-content">
            <p>
              In JavaScript, var, let, and const are used for variable
              declaration, but they differ in scope and mutability: var is
              function-scoped and can be re-declared and updated, let is
              block-scoped and can be updated but not re-declared, and const is
              block-scoped and cannot be re-declared or updated
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            The difference between map(), forEach(), <br /> and filter() ?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Explain arrow functions and how they are different from regular
            functions ?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How JavaScript Promises work ?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How closures work in JavaScript ?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div>
        <img className="h-auto w-1/2 ml-7" src={SideImg} alt="" />
      </div>
    </div>
  );
};

export default FAQsection;
