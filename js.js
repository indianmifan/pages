 $(document).ready(function() {
    $.(ajax)({
                      dataType: "JSONP",
                    url: "http://api.heclouds.com/cmds",
                    type: 'POST',
                    device_id=20464942 ;
                    qos=1,
                    timeout=3000,
                    type=0,
                    async: true,
                    api-key: MZznfnbVssdX8olnB4q1yM=d6jo=,
                    Content-Type: application/json,
           //         {"cmd":"07030001000295AD"},
                    jsonp: 'callback',
                    success: function (result) {
                       alert("success")
  }
 })
})
 