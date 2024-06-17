//
//  ViewController.swift
//  SunnyDay
//
//  Created by 정기백 on 6/16/24.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var weatherImageView: UIImageView!
    
    @IBOutlet weak var statusLabel: UILabel!
    
    @IBOutlet weak var temperatureLabel: UILabel!
    
    @IBOutlet weak var desciptionLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let weather = "맑음"
        let temperature = -11

        switch weather {
        case "맑음":
            weatherImageView.image = UIImage(named: "016-sun")
        case "흐림":
            weatherImageView.image = UIImage(named: "001-cloud")
        case "눈":
            weatherImageView.image = UIImage(named: "004-cloud")
        case "비":
            weatherImageView.image = UIImage(named: "002-cloud")
        default :
            break
        }



        statusLabel.text = weather
        temperatureLabel.text = "\(temperature)"

        switch temperature {
        case ..<(-10):
            desciptionLabel.text = "이불 밖은 위험해요"
        case -10 ... 10:
            desciptionLabel.text = "두툼한 패딩을 챙기세요"
        case 11 ... 20:
            desciptionLabel.text = "일교차 조심하세요"
        case 21 ... 30:
            desciptionLabel.text = "여름이 다가오고 있어요"
        case 31... :
            desciptionLabel.text = "씨발 존나 더워요"
        default :
            break
        }
    }


}

