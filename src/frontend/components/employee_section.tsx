interface EmployeeSectionType {
  name: string;
  background?: string;
  imageRef?: string;
}

const EmployeeSection = ({ name, background, imageRef }: EmployeeSectionType) => {
  return (
    <div className='d-flex flex-column m-5'>
      <h1 className='header2 mr-auto p-3'>{name}</h1>
      <hr className='divider-line' />
      <div className='d-flex flex-row'>
        <p className='text-justify pl-3 pr-5'>{background}</p>
        <p>image placeholder</p>
      </div>
    </div>
  );
};

export default EmployeeSection;
