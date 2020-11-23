import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { jobStyle } from '../styles';

const JobItem = ({ item, onSelect }) => {
    return (
        <TouchableOpacity
            style={jobStyle.container}
            onPress={() => onSelect(item)}
        >
            <Text style={jobStyle.title}>{item.title}</Text>
            <Text style={jobStyle.type}>{item.type} / {item.location}</Text>
            <Text style={jobStyle.company}>{item.company}</Text>
        </TouchableOpacity>
    )
};

export { JobItem };


// {
//     "id": "5dd449ae-452f-45d2-8c34-dcf8cca3a118",
//     "type": "Full Time",
//     "url": "https://jobs.github.com/positions/5dd449ae-452f-45d2-8c34-dcf8cca3a118",
//     "created_at": "Sun Nov 22 09:40:47 UTC 2020",
//     "company": "Piktochart",
//     "company_url": "http:",
//     "location": "Remote",
//     "title": "Frontend Software Engineer Tech Lead (Europe/Asia)",
//     "description": "<p>Besides having technical expertise and knowledge in the Frontend domain, you are someone who is keen in leading and developing a team, as well as ensuring their execution and quality towards achieving the goals collectively.\nYou have the confidence and experience to make key decisions when it comes to technical direction or choices, and not afraid to take calculated risks. Following that, you are then able to plan, communicate, align, lead, and coach the Frontend team towards the direction.</p>\n<p><strong>What you’ll do</strong></p>\n<p><em>Team and Culture</em></p>\n<ul>\n<li>Mentor and grow the team members to be both technically strong and culturally aligned</li>\n<li>Recruit talents who are excited and motivated about our mission and share our HOPEFUL values</li>\n<li>Bi-weekly 1:1s and feedback to ensure mastery, purpose and autonomy as a true human development</li>\n<li>Driving agile get it done discipline towards planning and shipping increments</li>\n<li>Set goals and foster continuous development of skills</li>\n<li>Work with CTO to craft and execute the technical vision to support company goals.</li>\n<li>Help the team to understand the business impact and value of their work.</li>\n<li>Help the team with estimation, planning and communication with stakeholders.</li>\n<li>Improve code quality and robustness.</li>\n<li>Institute best practices and proper coding standards across the team through processes like code review, pair programming etc.</li>\n<li>Work with the team to solve technical debt and issues.</li>\n<li>Work with the team to improve the observability of the system (monitoring, alerting, dashboards).</li>\n<li>Collaborate with other leads on improving the process and implement best practices (CI/CD, testing, code reviews, retrospectives).</li>\n<li>Ensure proper documentation of the frontend codebase to ease onboarding and knowledge transfer between developers.</li>\n</ul>\n<p><strong>You Offer</strong></p>\n<ul>\n<li>5+ years front end development experience with Javascript/HTML/SCSS.</li>\n<li>Proven history of mentoring and developing others.</li>\n<li>Able to work in a distributed team environment.</li>\n<li>You understand that behind any technical decision there is a business need to be fulfilled.</li>\n<li>You think critically about your work and ask questions in order to improve the product, not only in its technical implementation but also in how well it’s serving the needs of our users.</li>\n<li>You have built products and UI using modern web technologies and can point to your prior work.</li>\n<li>You have the ability to understand the business impact of team’s decision and then rally the team to execute on them.</li>\n<li>You have strong communication skills and are able to explain complex technical topics to the entire team in a clear and concise way.</li>\n<li>You love front-end technologies but also eager and able to dig into other areas of the product as needed.</li>\n<li>You care about your team and their growth. You are focused on developing and growing the people to excel in their role.</li>\n<li>You have a strong desire to continuously improve.</li>\n<li>You love to be challenged.</li>\n<li>You care about the code you leave behind.</li>\n</ul>\n<p><strong>Location</strong>\nRemote in Asia / Europe</p>\n",
//     "how_to_apply": "<p><a href=\"https://piktochart-jobs.personio.de/job/275795?_pc=262332#apply\">https://piktochart-jobs.personio.de/job/275795?_pc=262332#apply</a></p>\n",
//     "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTJPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b2915c26f7d47ceb4a236fdce9f491a338b2ead5/vertical-fullcolor.png"
//   }

