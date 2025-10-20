/*
function OnDocument_Open() {
  ComboBox1.InsertString("운영비", 0);
  ComboBox1.InsertString("사업비", 1);
  ComboBox1.InsertString("예비비", 2);

  if (ComboBox1.Text === " ") {
    ComboBox1.Text = " ";
    ComboBox2.Text = " ";
    ComboBox3.Text = " ";
  } else {
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
*/

//배열변경
/*
function OnDocument_Open() {
  ComboBox1.InsertString("운영비", 0);
  ComboBox1.InsertString("사업비", 1);
  ComboBox1.InsertString("예비비", 2);

  if (ComboBox1.Text === " ") {
    ComboBox1.Text = " ";
    ComboBox2.Text = " ";
    ComboBox3.Text = " ";
  } else {
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
*/

//배열변경
var DATA = {
  combo1: ["운영비", "사업비", "예비비"],
  combo2: {
    0: ["유지비", "업무추진비"],
    1: ["여비", "회의비", "수련회비", "부서사업비", "연대사업비", "집회행사비"],
    2: ["예비비"]
  },
  combo3: {
    "0_0": ["신문도서비", "소모품비", "비품비", "복리후생비", "통신비"],
    "0_1": ["직무활동비"],
    "1_0": ["출장비"],
    "1_1": ["총회비", "대의원대회", "확대간부회의", "기타회의"],
    "1_2": ["간부수련회"],
    "1_3": ["조직사업비", "노안사업비", "교육사업비", "선전사업비", "법률사업비"],
    "1_4": ["연대사업비"],
    "1_5": ["집회행사비"],
    "2_0": ["예비비"]
  }
};

function OnDocument_New() {
  ComboBox1.Enabled = 1;
  ComboBox2.Enabled = 1;
  ComboBox3.Enabled = 1;
  clearCombo(ComboBox1);
  clearCombo(ComboBox2);
  clearCombo(ComboBox3);
}

function OnDocument_Open() {
  setOptions(ComboBox1, DATA.combo1);
}

function OnComboBox1_Click() {
  setOptions(ComboBox1, DATA.combo1);
  clearCombo(ComboBox2);
  clearCombo(ComboBox3);
}

function clearCombo(cb) {
  cb.ResetContent();
  cb.Text = " ";
}

function setOptions(cb, items) {
  if (!items || items.length === 0) return;
  for (var i = 0; i < items.length; i++) {
    cb.InsertString(items[i], i);
  }
}

function safeCurSel(cb) {
  return typeof cb.CurSel === "number" && cb.CurSel >= 0 ? cb.CurSel : -1;
}

function keyOf(a, b) {
  return a + "_" + b;
}

function OnComboBox1_Change() {
  clearCombo(ComboBox2);
  clearCombo(ComboBox3);

  var sel1 = safeCurSel(ComboBox1);
  if (sel1 === -1) return;

  setOptions(ComboBox2, DATA.combo2[sel1]);
}

function OnComboBox2_Change() {
  clearCombo(ComboBox3);

   var sel1 = safeCurSel(ComboBox1);
  var sel2 = safeCurSel(ComboBox2);
  if (sel1 === -1 || sel2 === -1) return;

  var key = keyOf(sel1, sel2);
  setOptions(ComboBox3, DATA.combo3[key]);
}

