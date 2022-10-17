import React from "react";

const CrystalReport = () => {
    return (
		<div className="container">
			<form className="canvas" action="#" method="post">
				<h2>ดูรายงาน</h2>
				<select name="po_id" id="po_id">
					<option value="">Select</option>
					<option value="PO001">PO001</option>
					<option value="PO002">PO002</option>
					<option value="PO003">PO003</option>
					<option value="PO004">PO004</option>
					<option value="">ทั้งหมด</option>
				</select>
				<button onClick={()=>{showMe()}} type="button">ค้นหา</button>
			</form>
		</div>
	);	
	function showMe(){
        var po_id = document.getElementById('po_id');
		window.open('http://localhost:8080/reportexample/frmPo.aspx?po_id=' + po_id.value, '_blank', 'location=no,height=570,width=800,scrollbars=yes,status=yes');
		console.log(po_id.value);
    }
}

export default CrystalReport;