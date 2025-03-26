import SideImg from '../../assets/assets/hero-student.png'

const FAQsection = () => {
  return (
    <div className='flex justify-around items-center ml-36 mt-3 gap-10'>
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          The difference between var, let, and const ?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          The difference between map(), forEach(), and filter() ? 
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div>
        <img className='h-auto w-1/2 ml-7' src={SideImg} alt="" />
      </div>
    </div>
  );
};

export default FAQsection;
