/**
 * Copyright(c) dtysky<dtysky@outlook.com>
 * Created: 25 Nov 2017
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from '../../config';
import MultiLangMarkdown from 'demo/MultiLangMarkdown';
import {Link} from 'hana-ui';
import './base.scss';

import cn from './cn.md';
import en from './en.md';

const Contribution = () => (
  <MultiLangMarkdown
    className={cx('demo-contribution', 'demo-with-fade-head-tail')}
    text={`
@cn
${cn}

@en
${en}
    `}
  >
    <ul className={'author-list'}>
      {
        [
          {
            name: 'dtysky（H光）',
            avater: config.authors.dtysky,
            email: 'dtysky@outlook.com',
            github: 'https://github.com/dtysky',
            blog: 'http://dtysky.moe'
          },
          {
            name: 'rhyme',
            avater: config.authors.rhyme,
            email: 'lovelyrhyme@gmail.com',
            github: 'https://github.com/missrhyme',
            blog: 'https://www.pixiv.net/member.php?id=3674134'
          },
          {
            name: 'lanz',
            avater: config.authors.lanz,
            email: 'lanz@bilibili.com',
            github: 'https://github.com/hanaarena'
          }
        ].map(({name, avater, email, github, blog}) => (
          <li
            key={name}
            className={'author-item'}
          >
            <a
              className={'author-avater'}
              href={blog || github}
              target={'_blank'}
            >
              <img src={avater} alt={name} />
            </a>
            <div className={'author-info'}>
              <p>{name}</p>
              {blog && <Link href={blog} icon={'users'}>{blog}</Link>}
              <Link href={github} icon={'github'}>{github}</Link>
              <Link href={email} icon={'draft'}>{email}</Link>
            </div>
          </li>
        ))
      }
    </ul>
  </MultiLangMarkdown>
);

Contribution.propTypes = {
  match: PropTypes.object
};

export default Contribution;
