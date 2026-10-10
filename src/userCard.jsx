import Users from "./users.jsx";

function UserCard(){
  let users=[{
    id:1,
    name:"Twinkle",
    profile:"Developer",
    status:true
  },
  {
    id:2,
    name:"Kunal",
    profile:"Network Enginer",
    status:false
  },
  {
    id:3,
    name:"sonali",
    profile:"software enginers",
    status:true

  },
  {
    id:4,
    name:"Satyam",
    profile:"Data Analyst",
    status:false

  }
];
let styles={
  display: "flex",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems:"center"

}
  return(
    <div style={styles}>
        {users.map((user)=>(
          <Users
          key={user.id}
          name={user.name}
          profile={user.profile}
          status={user.status}
          />
        ))}
        </div>
    );
}
export default UserCard;;