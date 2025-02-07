//
//  ViewController.swift
//  Login
//
//  Created by 정기백 on 6/15/24.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var idField: UITextField!
    
    @IBOutlet weak var passwordField: UITextField!
    
    @IBAction func login(_ sender: Any) {
        let id = idField.text!
        let password = passwordField.text!

        if id.isEmpty || password.isEmpty {
            print("계정을 입력하세요")
            return
        }


        if id == "admin" && password == "1234" {
                resultLable.text = "로그인 성공"
            } else {
                resultLable.text = "로그인 실패"
        }

//        resultLable.text = id == "admin" && password == "1234" ? "로그인 성공" : "로그인 실패"

    }
    
    @IBOutlet weak var resultLable: UILabel!
    




    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

