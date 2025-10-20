function OnDocument_Open() {
  ComboBox1.InsertString("운영비", 0);
  ComboBox1.InsertString("사업비", 1);
  ComboBox1.InsertString("예비비", 2);

  if (ComboBox1.Text === "운영비") {
  } else if (ComboBox1.Text === "사업비") {
  } else if (ComboBox1.Text === "예비비") {
  } else {
    ComboBox1.Text = " ";
    ComboBox2.Text = " ";
    ComboBox3.Text = " ";
  }
}

function OnComboBox1_Change() {
  ComboBox2.ResetContent();
  ComboBox3.ResetContent();
  ComboBox2.Text = " ";
  ComboBox3.Text = " ";

  //[관]운영비
  if (ComboBox1.CurSel == 0) {
    ComboBox2.InsertString("유지비", 0);
    ComboBox2.InsertString("업무추진비", 1);
  }
  //[관]사업비
  else if (ComboBox1.CurSel == 1) {
    ComboBox2.InsertString("여비", 0);
    ComboBox2.InsertString("회의비", 1);
    ComboBox2.InsertString("수련회비", 2);
    ComboBox2.InsertString("부서사업비", 3);
    ComboBox2.InsertString("연대사업비", 4);
    ComboBox2.InsertString("집회행사비", 5);
  }
  //[관]예비비
  else if (ComboBox1.CurSel == 2) {
    ComboBox2.InsertString("예비비", 0);
  }
}

function OnComboBox2_Change() {
  ComboBox3.ResetContent();
  ComboBox3.Text = " ";
  //[관]운영비
  if (ComboBox1.CurSel == 0) {
    //[항]유지비
    if (ComboBox2.CurSel == 0) {
      ComboBox3.InsertString("신문도서비", 0);
      ComboBox3.InsertString("소모품비", 1);
      ComboBox3.InsertString("비품비", 2);
      ComboBox3.InsertString("복리후생비", 3);
      ComboBox3.InsertString("통신비", 4);
    }
    //[항]업무추진비
    else if (ComboBox2.CurSel == 1) {
      ComboBox3.InsertString("직무활동비", 0);
    }
  }
  //[관]사업비
  else if (ComboBox1.CurSel == 1) {
    //[항]여비
    if (ComboBox2.CurSel == 0) {
      ComboBox3.InsertString("출장비", 0);
    }
    //[항]회의비
    else if (ComboBox2.CurSel == 1) {
      ComboBox3.InsertString("총회비", 0);
      ComboBox3.InsertString("대의원대회", 1);
      ComboBox3.InsertString("확대간부회의", 2);
      ComboBox3.InsertString("기타회의", 3);
    }
    //[항]수련회비
    else if (ComboBox2.CurSel == 2) {
      ComboBox3.InsertString("간부수련회", 0);
    }
    //[항]부서사업비
    else if (ComboBox2.CurSel == 3) {
      ComboBox3.InsertString("조직사업비", 0);
      ComboBox3.InsertString("노안사업비", 1);
      ComboBox3.InsertString("교육사업비", 2);
      ComboBox3.InsertString("선전사업비", 3);
      ComboBox3.InsertString("법률사업비", 4);
    }
    //[항]연대사업비
    else if (ComboBox2.CurSel == 4) {
      ComboBox3.InsertString("연대사업비", 0);
    }
    //[항]집회행사비
    else if (ComboBox2.CurSel == 5) {
      ComboBox3.InsertString("집회행사비", 0);
    }
  }
  //[관]예비비
  else if (ComboBox1.CurSel == 2) {
    ComboBox3.InsertString("예비비", 0);
  }
}

function OnDocument_New() {
  ComboBox1.Enabled = 1;
  ComboBox2.Enabled = 1;
  ComboBox3.Enabled = 1;
  ComboBox1.Text = " ";
  ComboBox2.Text = " ";
  ComboBox3.Text = " ";
}

function OnComboBox1_Click() {
  ComboBox1.ResetContent();
  ComboBox1.Text = " ";
  ComboBox1.InsertString("운영비", 0);
  ComboBox1.InsertString("사업비", 1);
  ComboBox1.InsertString("예비비", 2);
}
