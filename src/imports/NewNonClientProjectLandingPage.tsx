import svgPaths from "./svg-m590sprq1z";

function ProgressBar() {
  return (
    <div className="bg-[#e4e4e4] relative rounded-[240px] shrink-0 w-full" data-name="Progress Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[800px] py-0 relative w-full">
          <div className="bg-[#498e2b] h-[8px] rounded-[240px] shrink-0 w-full" data-name="Completion" />
        </div>
      </div>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#28292c] text-[23px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Setup
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none min-w-full relative shrink-0 text-[#727272] text-[15px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This process could take a few minutes
      </p>
      <ProgressBar />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#727272] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20% completed
      </p>
    </div>
  );
}

function ProjectSetup() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Project Setup">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ProgressBar1 />
        </div>
      </div>
    </div>
  );
}

function DetailsInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Details Info">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#4a4a4a] text-[17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Details
      </p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#727272] text-[15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Define project scope, timeline, and requirements
      </p>
    </div>
  );
}

function IconsCommunicationAlert() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icons/communication/alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons/communication/alert">
          <path d={svgPaths.p341e8200} fill="var(--fill-0, #CE7309)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAlert() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="icon-alert">
      <IconsCommunicationAlert />
      <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#b86a0f] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19px]">You are creating a new project. Enter project details.</p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#fffcf8] relative rounded-[8px] shrink-0 w-full" data-name="Banner">
      <div aria-hidden="true" className="absolute border border-[#ffd0a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-start flex flex-wrap items-start justify-between p-[12px] relative w-full">
          <IconAlert />
        </div>
      </div>
    </div>
  );
}

function DetailsHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Details Header">
      <DetailsInfo />
      <Banner />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-none relative shrink-0 text-[#b2b2b2] text-[14px] text-nowrap w-full" data-name="Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ERTM Project ID
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            PRJ-8YV03FK
          </p>
        </div>
      </div>
    </div>
  );
}

function Additional() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Additional">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px relative shrink-0 text-[#b2b2b2] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Auto Generated by ServiceNow
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[6px] items-start place-self-stretch relative shrink-0" data-name="Input">
      <Label />
      <Content />
      <Additional />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        SAP Project ID
      </p>
    </div>
  );
}

function IconsActionExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/expand-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/expand-more">
          <path d={svgPaths.p15d61c00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select SAP project ID
          </p>
          <IconsActionExpandMore />
        </div>
      </div>
    </div>
  );
}

function Additional1() {
  return (
    <div className="content-stretch flex h-[12px] items-start justify-between relative shrink-0 w-full" data-name="Additional">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px relative shrink-0 text-[#727272] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Update ASAP if SAP project ID is unavailable.
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input">
      <Label1 />
      <Content1 />
      <Additional1 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Dropdown">
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-none relative shrink-0 text-[14px] text-nowrap w-full" data-name="Label">
      <p className="relative shrink-0 text-[#4a4a4a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Code Name
      </p>
      <p className="relative shrink-0 text-[#cb282e]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function IconsActionExpandMore1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/expand-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/expand-more">
          <path d={svgPaths.p15d61c00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select project code name
          </p>
          <IconsActionExpandMore1 />
        </div>
      </div>
    </div>
  );
}

function Additional2() {
  return (
    <div className="content-stretch flex h-[12px] items-start justify-between relative shrink-0 w-full" data-name="Additional">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px relative shrink-0 text-[#727272] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select dynamically generated words.
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input">
      <Label2 />
      <Content2 />
      <Additional2 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Dropdown">
      <Input2 />
    </div>
  );
}

function DetailsInput() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[72px] relative shrink-0 w-full" data-name="Details Input">
      <Input />
      <Dropdown />
      <Dropdown1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        What Type of Project it is?
      </p>
    </div>
  );
}

function IconsActionExpandMore2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/expand-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/expand-more">
          <path d={svgPaths.p15d61c00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select type of project
          </p>
          <IconsActionExpandMore2 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input">
      <Label3 />
      <Content3 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown">
      <Input3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estimated Start Date
      </p>
    </div>
  );
}

function IconsObjectDate() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icons/object/date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icons/object/date">
          <path d={svgPaths.p24a05d00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <IconsObjectDate />
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pick a date
          </p>
        </div>
      </div>
    </div>
  );
}

function Datepicker() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[6px] h-[52px] items-start justify-self-stretch relative shrink-0" data-name="Datepicker">
      <Label4 />
      <Content4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estimated End Date
      </p>
    </div>
  );
}

function IconsObjectDate1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icons/object/date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icons/object/date">
          <path d={svgPaths.p24a05d00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <IconsObjectDate1 />
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pick a date
          </p>
        </div>
      </div>
    </div>
  );
}

function Datepicker1() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[6px] h-[52px] items-start justify-self-stretch relative shrink-0" data-name="Datepicker">
      <Label5 />
      <Content5 />
    </div>
  );
}

function DetailsInput1() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="Details Input">
      <Dropdown2 />
      <Datepicker />
      <Datepicker1 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Will you use Personal or Protected data?
      </p>
    </div>
  );
}

function IconsActionExpandMore3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/expand-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/expand-more">
          <path d={svgPaths.p15d61c00} fill="var(--fill-0, #4A4A4A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[19px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select option
          </p>
          <IconsActionExpandMore3 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input">
      <Label6 />
      <Content6 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown">
      <Input4 />
    </div>
  );
}

function DetailsInput2() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="Details Input">
      <Dropdown3 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#4a4a4a] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Describe your project and its goals.
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[12px] py-[6px] relative size-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-full leading-[16px] min-h-px min-w-px relative shrink-0 text-[#878787] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Describe your project objectives and scope
          </p>
        </div>
      </div>
    </div>
  );
}

function WordCounter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Word Counter">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px relative shrink-0 text-[#878787] text-[12px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
            7/80
          </p>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content7 />
      <WordCounter />
    </div>
  );
}

function Input5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
      <Label7 />
      <Content8 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-start relative shrink-0 w-full" data-name="Textarea">
      <Input5 />
    </div>
  );
}

function DetailsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Details Content">
      <DetailsHeader />
      <DetailsInput />
      <DetailsInput1 />
      <DetailsInput2 />
      <Textarea />
    </div>
  );
}

function ProjectDetails() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Project Details">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <DetailsContent />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center min-w-[94px] px-[12px] py-0 relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#498e2b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[#498e2b] text-[15px] text-center text-nowrap tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Discard
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#8dca7e] content-stretch flex h-[32px] items-center justify-center min-w-[94px] px-[12px] py-0 relative rounded-[2px] shrink-0" data-name="Button">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Continue
      </p>
    </div>
  );
}

function ContinueButtonWrapper() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-[960px]" data-name="Continue Button Wrapper">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[300px] overflow-x-clip overflow-y-auto pb-[24px] pt-0 px-0 rounded-[8px] top-[68px] w-[960px]" data-name="Main Content">
      <ProjectSetup />
      <ProjectDetails />
      <ContinueButtonWrapper />
    </div>
  );
}

function AlixLogo() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18.897px]" data-name="Alix Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8967 21">
        <g id="Alix Logo">
          <path clipRule="evenodd" d={svgPaths.pa93f100} fill="var(--fill-0, white)" fillRule="evenodd" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="content-stretch flex h-[13px] items-start relative shrink-0" data-name="Project Name">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[18px] text-nowrap text-white tracking-[0.9846px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ETRM
      </p>
    </div>
  );
}

function NavLogoAndProjectName() {
  return (
    <div className="content-stretch flex gap-[15px] h-[26px] items-center relative shrink-0" data-name="Nav/Logo and Project Name">
      <AlixLogo />
      <div className="bg-[#5cb335] h-[26px] shrink-0 w-[1.989px]" />
      <ProjectName />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex gap-[5px] h-[48px] items-center justify-center pb-[17px] pt-[18px] px-0 relative shrink-0" data-name="Nav/Item">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[15px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function IconsActionExpandMore4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/expand-more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/expand-more">
          <path d={svgPaths.p15d61c00} fill="var(--fill-0, white)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex gap-[5px] h-[48px] items-center justify-center pb-[17px] pt-[18px] px-0 relative shrink-0" data-name="Nav/Item">
      <div aria-hidden="true" className="absolute border-[#5cb335] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[15px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        New Request
      </p>
      <IconsActionExpandMore4 />
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex gap-[5px] h-[48px] items-center justify-center pb-[17px] pt-[18px] px-0 relative shrink-0" data-name="Nav/Item">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[15px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Offboarding
      </p>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex gap-[5px] h-[48px] items-center justify-center pb-[17px] pt-[18px] px-0 relative shrink-0" data-name="Nav/Item">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[13px] relative shrink-0 text-[15px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tools BOM
      </p>
    </div>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-start relative shrink-0" data-name="Nav/# items">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
    </div>
  );
}

function IconsNotification() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/Notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_4033)" id="Icons/Notification">
          <g id="Vector"></g>
          <path d={svgPaths.p342e1200} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4033">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconsHelpFilled() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Icons/Help filled">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p11e5c600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[28.153px] ml-0 mt-0 relative w-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.1532">
          <ellipse cx="14" cy="14.0766" fill="var(--fill-0, #5CB335)" id="Ellipse 1" rx="14" ry="14.0766" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[13px] ml-[14px] mt-[8px] relative text-[15px] text-center text-white translate-x-[-50%] w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JB
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-14.21%_60.96%_43.17%_25.34%]">
      <div className="absolute inset-[-14.21%_60.96%_43.17%_25.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #5CB335)" id="Ellipse 7" r="10" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[-2.93%_60.96%_51.63%_25.34%] leading-[13px] text-[12px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        24
      </p>
    </div>
  );
}

function NavAdditionalSidebar() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Nav/Additional Sidebar">
      <div className="bg-[#727272] h-[26px] shrink-0 w-[2px]" />
      <IconsNotification />
      <IconsHelpFilled />
      <Group />
      <Group1 />
    </div>
  );
}

function NavMenuAndNotifications() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="nav menu and notifications">
      <NavItems />
      <NavAdditionalSidebar />
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute bg-[#333] content-stretch flex h-[48px] items-center justify-between left-0 px-[20px] py-0 top-0 w-[1280px]" data-name="Top Navigation">
      <NavLogoAndProjectName />
      <NavMenuAndNotifications />
    </div>
  );
}

function IconsActionFilterAdvanced() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/filter-advanced">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/filter-advanced">
          <path d={svgPaths.p2423ab00} fill="var(--fill-0, white)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#498e2b] content-stretch flex items-center p-[6px] relative rounded-[6px] shrink-0">
      <IconsActionFilterAdvanced />
    </div>
  );
}

function StepStatus() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[212px]" data-name="Step status">
      <Frame />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4a4a4a] text-[15px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Setup
      </p>
    </div>
  );
}

function IconsPeoplePersonGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/people/person-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/people/person-group">
          <g id="vector">
            <path d={svgPaths.p31517680} fill="var(--fill-0, #B2B2B2)" />
            <path d={svgPaths.p144d7500} fill="var(--fill-0, #B2B2B2)" />
            <path d={svgPaths.p2201a480} fill="var(--fill-0, #B2B2B2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center p-[6px] relative rounded-[6px] shrink-0">
      <IconsPeoplePersonGroup />
    </div>
  );
}

function StepStatus1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[212px]" data-name="Step status">
      <Frame1 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b2b2b2] text-[15px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tool Configuration
      </p>
    </div>
  );
}

function Agreements() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Agreements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Agreements">
          <path d={svgPaths.p2fc53f00} fill="var(--fill-0, #B2B2B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center p-[6px] relative rounded-[6px] shrink-0">
      <Agreements />
    </div>
  );
}

function StepStatus2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[212px]" data-name="Step status">
      <Frame2 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b2b2b2] text-[15px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Access & Approval`}</p>
    </div>
  );
}

function IconsActionAddOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons/action/add-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons/action/add-outlined">
          <path d={svgPaths.p3f471080} fill="var(--fill-0, #B2B2B2)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center p-[6px] relative rounded-[6px] shrink-0">
      <IconsActionAddOutlined />
    </div>
  );
}

function StepStatus3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[212px]" data-name="Step status">
      <Frame3 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#b2b2b2] text-[15px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Review & Submit`}</p>
    </div>
  );
}

function StepsWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Steps wrapper">
      <StepStatus />
      <StepStatus1 />
      <StepStatus2 />
      <StepStatus3 />
    </div>
  );
}

function TitleAndSteps() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[24px] w-[212px]" data-name="Title and steps">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#28292c] text-[23px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New Non-Client Project
      </p>
      <StepsWrapper />
    </div>
  );
}

function LeftNavigation() {
  return (
    <div className="absolute bg-white h-[632px] left-[20px] rounded-[8px] top-[68px] w-[260px]" data-name="Left Navigation">
      <TitleAndSteps />
    </div>
  );
}

export default function NewNonClientProjectLandingPage() {
  return (
    <div className="bg-[#f1f1f1] relative size-full" data-name="New Non-Client Project Landing page">
      <LeftNavigation />
      <MainContent />
      <TopNavigation />
    </div>
  );
}