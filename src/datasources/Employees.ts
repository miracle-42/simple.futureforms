/*
  MIT License

  Copyright © 2023 Alex Høffner

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
  and associated documentation files (the “Software”), to deal in the Software without
  restriction, including without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { DatabaseTable } from "forms42core";
import { DataLoader } from "../DataLoader";
import { FormsModule } from "../FormsModule";

export class Employees extends DatabaseTable
{
/*	public static columns:string[] =
	[
		"employee_id", "first_name", "last_name","email","phone_number",
		"hire_date","job_id","salary","commission_pct","manager_id","department_id"
	];
*/
	constructor()
	{
		//super(Employees.columns,DataLoader.employees);
    super(FormsModule.DATABASE, "employees");
		//this.sorting = "last_name, first_name";
    this.primaryKey=["employees_id"];
    console.log(this)
	}
}