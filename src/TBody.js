import React from 'react';
let imgstyles={
  'maxWidth':'10%'
}
export default (props) => {
  return (
    <tbody>
      {props.statex.current?props.statex.top30days.map((user,i)=>( 
        <tr key={i}>
          <td>{i+1}</td>
          <td>
            <a href={`https://www.freecodecamp.org/${user.username}`}>
            <img src={user.img} className="rounded-circle" style={imgstyles}/>
            <span>{user.username}</span>
            </a>
          </td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      )) : props.statex.topAllTime.map((user,i)=>(
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <a href={`https://www.freecodecamp.org/${user.username}`}>
                <img src={user.img} className="rounded-circle" style={imgstyles} />
                <span>{user.username}</span>
              </a>
            </td>
            <td>{user.recent}</td>
            <td>{user.alltime}</td>
          </tr>
      ))}
    </tbody>
  )
}
