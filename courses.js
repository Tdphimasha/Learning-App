const courseContent = [
    {
      time: '5:35 mins',
      title: 'Welcome to the Course',
    },
    {time: '7:35 mins', title: 'HTML'},
    {time: '10:35 mins', title: 'CSS'},
    {time: '5:35 mins', title: 'JavaScript'},
    {time: '1:35 mins', title: 'PHP'},
    {time: '1:35 mins', title: 'Vue js'},
    {time: '1:35 mins', title: 'Bootstrap'},
  ];
  const courseContent1 = [
    {
      time: '5:35 mins',
      title: 'Welcome to the Course',
    },
    {time: '7:35 mins', title: 'Kotlin'},
    {time: '10:35 mins', title: 'Flutter'},
    {time: '5:35 mins', title: 'React Native'},
    {time: '5:35 mins', title: 'Java'},
  ];


  const courseContent2 = [
    {
      time: '5:35 mins',
      title: 'Welcome to the Course',
    },
    {time: '7:35 mins', title: 'Artificial Intelligence'},
    {time: '10:35 mins', title: 'CAD software DEvelopment'},
    {time: '5:35 mins', title: 'Digital Transformation'},
    {time: '5:35 mins', title: 'Ubiquituos Computing'},
  ];
  const courseContent3 = [
    {
      time: '5:35 mins',
      title: 'Welcome to the Course',
    },
    {time: '7:35 mins', title: 'C-Programming '},
    {time: '10:35 mins', title: 'Encapsulation'},
    {time: '5:35 mins', title: 'Polymorphism'},
    {time: '5:35 mins', title: 'Java'},
  ];
  
  
  const courses = [
    {
      name: 'Web Application Development',
      totalCourse: '25',
      image: require('../assets/l.png'),
      price: '50',
      star: '4.3',
      students: '10',
      courseContent,
    },
    {
      name: 'Mobile Application Development',
      totalCourse: '20',
      image: require('../assets/o.png'),
      price: '50',
      star: '4.1',
      students: '55',
      courseContent1,
    },
    {
      name: 'Standalone Application Development',
      totalCourse: '10',
      image: require('../assets/q.png'),
      price: '50',
      star: '4.3',
      students: '10',
      courseContent2,
      Video:require('../assets/we.mp4')
  
    },
    {
      name: 'Software development',
      totalCourse: '7',
      image: require('../assets/u.png'),
      price: '50',
      star: '4.2',
      students: '35',
      courseContent3,
    },
  ];
  
  export default courses;