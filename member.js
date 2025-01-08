function skillsMember()
{
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsOptions = document.getElementById("memberSkills").options;
    
    if (memberValue == "")
    {
        memberSkillsOptions.length = 0;
        memberSkillsOptions[0] = new Option("Select Member", "");
        return;
    }
    
    var skills = new Array();
    
    if (memberValue == "1")
    {
        skills[0] = "Skill 1";
        skills[1] = "Skill 2";
        skills[2] = "Skill 3";
        skills[3] = "Skill 4";
        skills[4] = "Skill 5";
    }
    else if (memberValue == "2")
    {
        skills[0] = "Skill 6";
        skills[1] = "Skill 7";
        skills[2] = "Skill 8";
        skills[3] = "Skill 9";
        skills[4] = "Skill 10";
    }
    else if (memberValue == "3")
    {
        skills[0] = "Skill 11";
        skills[1] = "Skill 12";
        skills[2] = "Skill 13";
        skills[3] = "Skill 14";
        skills[4] = "Skill 15";
    }
    
    memberSkillsOptions.length = 0;
    memberSkillsOptions[0] = new Option("Select Skill", "");
    
    for (var i = 0; i < skills.length; i++)
    {
        memberSkillsOptions[i + 1] = new Option(skills[i], skills[i]);
    }
}