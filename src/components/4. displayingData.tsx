const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1 className='text-3xl italic font-bold text-orange-600'>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

//"{}"" is a regular object inside JSX curly braces "style={}
