import React from 'react';
import { createRoot } from 'react-dom/client';

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <p>{title}</p>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acquires BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxtb2Rlcm58ZW58MHx8fHwxNjMzNTM5MzE0&ixlib=rb-1.2.1&q=80&w=1080',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxtb2Rlcm58ZW58MHx8fHwxNjMzNTM5MzE0&ixlib=rb-1.2.1&q=80&w=1080',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxtb2Rlcm58ZW58MHx8fHwxNjMzNTM5MzE0&ixlib=rb-1.2.1&q=80&w=1080',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {/* <Card
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      /> */}
      <Card {...someNews[0]} />
      <Card {...someNews[1]} />
      <Card {...someNews[2]} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<News />);
