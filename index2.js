            function gross_calculator() {
            let basic_pay = document.getElementById("basic_pay").value || 0; 
            let deductions = document.getElementById("deductions").value || 0;
            let non_tax_allowance = document.getElementById("non_tax_allowance").value || 0;
            let other_allowances = document.getElementById("other_allowances").value || 0;
            let add_basic = document.getElementById("add_basic").value || 0;
            let thirteen = document.getElementById("thirteen").value || 0;
            let bonus = document.getElementById("bonus").value || 0;
            let leave = document.getElementById("leave").value || 0;
            let gross_pay = parseFloat(basic_pay) - parseFloat(deductions) + parseFloat(add_basic) + parseFloat(leave) + parseFloat(thirteen) + parseFloat(non_tax_allowance) + parseFloat(other_allowances) + parseFloat(bonus);
            document.getElementById("gc").value = gross_pay;
            }
            basic_pay.addEventListener("input", gross_calculator);
            deductions.addEventListener("input", gross_calculator);
            non_tax_allowance.addEventListener("input", gross_calculator);
            other_allowances.addEventListener("input", gross_calculator);
            add_basic.addEventListener("input", gross_calculator);
            thirteen.addEventListener("input", gross_calculator);
            bonus.addEventListener("input", gross_calculator);
            leave.addEventListener("input", gross_calculator);
            



            function sss_calc() {
               let sss_n_base = document.getElementById("basic_pay").value || 0;
               let contri = 0;
               if (sss_n_base >= 24750) {
                  contri = 1125;
               }
               else if (sss_n_base >= 24250) {
                   contri = 1102.50;
                }
                else if (sss_n_base >= 23750) {
                   contri = 1080;
                }
                else if (sss_n_base >= 23250) {
                   contri = 1057.5;
                }
                else if (sss_n_base >= 22750) {
                   contri = 1035;
                }
                else if (sss_n_base >= 22250) {
                   contri = 1012.50;
                }
                else if (sss_n_base >= 21750) {
                   contri = 990;
                }
                else if (sss_n_base >= 21250) {
                   contri = 967.50;
                }
                else if (sss_n_base >= 20750) {
                   contri = 945;
                }
                else if (sss_n_base >= 20250) {
                   contri = 922.50;
                }
                else if (sss_n_base >= 19750) {
                   contri = 900;
                }
                else if (sss_n_base >= 19250) {
                   contri = 877.50;
                }
                else if (sss_n_base >= 18750) {
                   contri = 855;
                }
                else if (sss_n_base >= 18250) {
                   contri = 832.50;
                }
                else if (sss_n_base >= 17750) {
                   contri = 810;
                }
                else if (sss_n_base >= 17250) {
                   contri = 787.50;
                }
                else if (sss_n_base >= 16750) {
                   contri = 765;
                }
                else if (sss_n_base >= 16250) {
                   contri = 742.50;
                }
                else if (sss_n_base >= 15750) {
                   contri = 720;
                }
                else if (sss_n_base >= 15250) {
                   contri = 697.50;
                }
                else if (sss_n_base >= 14750) {
                   contri = 675;
                }
                else if (sss_n_base >= 14250) {
                   contri = 652.50;
                }
                else if (sss_n_base >= 13750) {
                   contri = 630;
                }
                else if (sss_n_base >= 13250) {
                   contri = 607.5;
                }
                else if (sss_n_base >= 12750) {
                   contri = 585;
                }
                else if (sss_n_base >= 12250) {
                   contri = 562.50;
                }
                else if (sss_n_base >= 11750) {
                   contri = 540;
                }
                else if (sss_n_base >= 11250) {
                   contri = 517.50;
                }
                else if (sss_n_base >= 10750) {
                   contri = 495;
                }
                else if (sss_n_base >= 10250) {
                   contri = 472.50;
                }
                else if (sss_n_base >= 9750) {
                   contri = 450;
                }
                else if (sss_n_base >= 9250) {
                   contri = 427.50;
                }
                else if (sss_n_base >= 8750) {
                   contri = 405;
                }
                else if (sss_n_base >= 8250) {
                   contri = 382.50;
                }
                else if (sss_n_base >= 7750) {
                   contri = 360;
                }
                else if (sss_n_base >= 7250) {
                   contri = 337.50;
                }
                else if (sss_n_base >= 6750) {
                   contri = 315;
                }
                else if (sss_n_base >= 6250) {
                   contri = 292.50;
                }
                else if (sss_n_base >= 5750) {
                   contri = 270;
                }
                else if (sss_n_base >= 5250) {
                   contri = 247.50;
                }
                else if (sss_n_base >= 4750) {
                   contri = 225;
                }
                else if (sss_n_base >= 4250) {
                   contri = 202.50;
                }
                else if (sss_n_base >= 3750) {
                   contri = 180;
                }
                else if (sss_n_base >= 3250) {
                   contri = 157.50;
                }
                else {
                    contri = 135;
                }
               document.getElementById("sss_emp_contri").value = contri;
           }

              //sss.addEventListener("mouseover", sss_calc);
              //sss_cb.addEventListener("mouseover", sss_calc);
              //basic_pay.addEventListener("input", sss_calc);
              basic_pay.addEventListener("input", sss_calc);
              



            function philhealth_calculator() {
               let philh_base = document.getElementById("basic_pay").value || 0;
               let philh_contri = 0;
               if (philh_base >= 80000) {
                   philh_contri = 3200;
               }
               else if (philh_base >= 10000) {
                   philh_contri = (.04) * (philh_base);
               }
               else {
                   philh_contri = 400;
               }
               document.getElementById("phil_health").value = philh_contri;
           }
           //philh_cb.addEventListener("mouseover", philhealth_calculator);
           //philh.addEventListener("mouseover", philhealth_calculator);
           //basic_pay.addEventListener("input", philhealth_calculator);
           basic_pay.addEventListener("input", philhealth_calculator);


   

            
            function hdmf_calculator() {
               let hdmf_base = document.getElementById("basic_pay").value || 0;
               let hdmf_contri = 0;
               if (hdmf_base >= 5000) {
                   hdmf_contri = 100    
               }
               else {
                   hdmf_contri = 0;
               }
               document.getElementById("hdmf").value = hdmf_contri;
           }
           basic_pay.addEventListener("input", hdmf_calculator);
           //hdmf_cb.addEventListener("mouseover", hdmf_calculator);
           //hdmf_max.addEventListener("mouseover", hdmf_calculator);
           //basic_pay.addEventListener("input", hdmf_calculator);


            function taxable_calculator() {
            let basic_pay = document.getElementById("basic_pay").value || 0;
            let deductions = document.getElementById("deductions").value || 0;
            let salary_adju = document.getElementById("add_basic").value || 0;    
            let sss_emp_contri = document.getElementById("sss_emp_contri").value || 0;
            let phil_health = document.getElementById("phil_health").value || 0;
            let hdmf = document.getElementById("hdmf").value || 0;
            let over_thirteen = document.getElementById("over_thirteen").value || 0;
            let over_bonus = document.getElementById("over_bonus").value || 0;
            let taxable_pay = parseFloat(basic_pay) - parseFloat(deductions) - parseFloat(sss_emp_contri) - parseFloat(phil_health) - parseFloat(hdmf) + parseFloat(over_thirteen) + parseFloat(over_bonus) + parseFloat(salary_adju);
            document.getElementById("tc").value = taxable_pay;
            }
            basic_pay.addEventListener("input", taxable_calculator);
            deductions.addEventListener("input", taxable_calculator);
            add_basic.addEventListener("input", taxable_calculator);
            sss_emp_contri.addEventListener("input", taxable_calculator);
            phil_health.addEventListener("input", taxable_calculator);
            hdmf.addEventListener("input", taxable_calculator);
            over_thirteen.addEventListener("input", taxable_calculator);
            over_bonus.addEventListener("input", taxable_calculator);
      





            function tax() {
                let tax_base = document.getElementById("tc").value || 0;
                let tax = 0;    
                if (tax_base >= 333333) {
                tax = ((tax_base - 333333) * 0.35) + 100416.67;
                }
                else if (tax_base >= 83333) {
                tax = ((tax_base - 83333) * 0.32) + 20416.67;
                }
                else if (tax_base >= 33333) {
                tax = ((tax_base - 33333) * 0.30) + 5416.67;
                }
                else if (tax_base >= 16667) {
                tax = ((tax_base - 16667) * 0.25) + 1250;
                }
                else if (tax_base >= 10417) {
                tax = ((tax_base - 10417) * 0.20) + 0;
                }
                else {
                tax = 0;
                }
               document.getElementById("t").value = tax;
            }
            basic_pay.addEventListener("input", tax);
            deductions.addEventListener("input", tax);
            add_basic.addEventListener("input", tax);
            sss_emp_contri.addEventListener("input", tax);
            phil_health.addEventListener("input", tax);
            hdmf.addEventListener("input", tax);
            over_thirteen.addEventListener("input", tax);
            over_bonus.addEventListener("input", tax);
      
            
            
        
            function net() {
                let gross = document.getElementById("gc").value || 0;
                let tax_withheld = document.getElementById("t").value || 0; 
                let sss_emp_contri = document.getElementById("sss_emp_contri").value || 0;
                let phil_health = document.getElementById("phil_health").value || 0;
                let hdmf = document.getElementById("hdmf").value || 0;
                let sss_loan = document.getElementById("sss_loan").value || 0;
                let hdmf_loan = document.getElementById("hdmf_loan").value || 0;
                let deficit = document.getElementById("deficit").value || 0;
                let refund = document.getElementById("refund").value || 0;
                let contri_adju = document.getElementById("contri_adju").value || 0;
                let net_pay = parseFloat(gross) - parseFloat(tax_withheld) - parseFloat(sss_emp_contri) - parseFloat(phil_health) - parseFloat(hdmf) - parseFloat(deficit) + parseFloat(refund) - parseFloat(sss_loan) - parseFloat(hdmf_loan) - parseFloat(contri_adju);
                document.getElementById("n").value = net_pay;
            }     
            basic_pay.addEventListener("input", net);
            deductions.addEventListener("input", net);
            non_tax_allowance.addEventListener("input", net);
            other_allowances.addEventListener("input", net);
            add_basic.addEventListener("input", net);
            thirteen.addEventListener("input", net);
            bonus.addEventListener("input", net);
            leave.addEventListener("input", net);
            sss_emp_contri.addEventListener("input", net);
            phil_health.addEventListener("input", net);
            hdmf.addEventListener("input", net);
            over_thirteen.addEventListener("input", net);
            over_bonus.addEventListener("input", net);
            sss_loan.addEventListener("input", net);
            hdmf_loan.addEventListener("input", net);
            deficit.addEventListener("input", net);
            refund.addEventListener("input", net);
            contri_adju.addEventListener("input", net);
   
            
