const axios = require("axios");
const router = require("express").Router();


router.get("/jobs", (req, res) => {
  axios
    .get(`https://jobs.github.com/positions.json?description=${keyword}&location=${location}`)
    .then((jobs) => {
        jobRecords =jobs.data;
        return jobRecords.map(job => {
            var cleanJobData = {
                api_id: 'GitHub',
                api_num: true,
                api_job_id: job.id,
                title: job.title,
                date_created: job.created_at,
                job_type: job.type,
                description: job.description,
                company_name: job.company,
                has_company_logo: true,
                company_logo: job.company_logo,
                company_url: job.company_url,
                location: job.location,
                apply_url: job.how_to_apply,
                api_logo: 'https://crossbrowsertesting.com/design/images/github-logo.png'
              }
              return cleanJobData;

            })
        })
    .catch(err => res.status(422).json(err));
  });
//   let router = {};

//   router.index = (req, res) => {
//     const keyword = req.params.keyword;
//     const location = req.params.location;
//     Promise.all([gitHubApi(keyword, location), authenticApi(keyword, location)])
//     .then((values) => {
//       const combinedResponse = values[0].concat(values[1]);
//       res
//       .status(200)
//       .json(combinedResponse);
//     })
//     .catch((err) => {
//       res
//       .status(422)
//       .json(err);
//     });
//   }
// });


module.exports = router;
