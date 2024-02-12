import { EventType, Form, datasource } from "forms42core";
import { Employees } from "../../datasources/Employees";

datasource("employees", Employees);

export class  M8 extends Form
{
	constructor(page:HTMLElement)
	{
		super(page);

		//let detail:Key = new Key("employees","department_id");
		//let master:Key = new Key("departments","department_id");

		//this.link(master,detail);

        this.addEventListener(this.init, {type:EventType.PostViewInit});
        console.log("Hello");
	}

	/*public async sort(block:string, column:string) : Promise<boolean>
	{
		let blk:Block = this.getBlock(block);
 
		if (!blk.empty())
		{
			blk.datasource.sorting = column;
			await blk.reQuery();
		}

		return(true);
	}*/
    public async init() :Promise<boolean>
    {
        console.log("Hello2");
        this.executeQuery("employees");
        console.log("Hello3");
        
        return (true);
    }
}