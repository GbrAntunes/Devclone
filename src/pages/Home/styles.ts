import styled from 'styled-components';

export const Container = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #b5bdc4;
    padding-left: 8px;

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }

      button {
        border-radius: 50%;
        border-radius: 5px;
        border: 0px solid;
        padding: 2px 5px;
        color: #4D5760;
        background: rgba(0, 0, 0, 0);
        margin: 0px 5px;
      }
    }

    input {
      height: 36px;
      flex: 0.95;
      font-weight: 400;
      font-size: 16px;
      padding: 0px 7px;
      border-radius: 3px;
      background: #F9FAFA;
      border: 1px solid #b5bdc4;
    }
  }

  header.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    background: #EEF0F1;

    h2 {
      flex: 0.9;
      color: #202428;
      font-size: 18px;
    }

    button {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #363d44;
      transition: 0.2s;
      border: 0px solid;
      border-radius: 5px;
      outline: none;

      &:hover {
        color: #08090a;
        background: rgba(0, 0, 0, 0.04);
      }
    }

    button#left-menu-btn {
      margin-right: 8px;
    }

    select {
      padding: 7px 32px 7px 8px;
      border: 1px solid #b5bdc4;
      margin-left: 8px;
      outline: none;
      font-size: 1rem;
      line-height: 1.5;
      background: #F9FAFA;
      border-radius: 5px;
      transition: cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
    }
  }

  article {
    img {
      width: 100%;
      height: auto;
    }
    
    div.article-wrapper {
      padding: 8px;
      padding-top: 12px;
      box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
      
      header {
        display: flex;
        margin-bottom: 8px;
  
  
        & > div > small {
          color: #64707d;
          font-size: 0.75rem;
          cursor: pointer;
          font-weight: normal;
        }
  
        a.user-pic {
          margin-right: 8px;
          
          img {
            border-radius: 50%;
            width: 32px;
            height: 32px;
          }
        }
  
        div p {
          color: #4d5760;
          font-weight: 500;
          cursor: pointer;
          line-height: 1.25;
          font-size: 0.875rem;
        }
      }
    }

    div.article-content {
      padding-left: 40px;

      h2 {
        margin-bottom: 8px;
        color: #08090a;
        line-height: 1.25;
        font-size: 1.25rem;  
      }

      .tags {
        margin-bottom: 8px;
        
        a {
          color: #64707d;
          line-height: 1.3;
          padding: 0.25rem;
          text-decoration: none;
          font-weight: normal;
          font-size: 0.875rem;

          &::before {
            content: '#';
            color: #b5bdc4;
          }
        }
        
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      
      .details {
        display: flex;

        & > a {
          padding: 4px 12px 4px 8px;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #64707d;
          font-weight: normal;

          svg {
            margin-right: 4px;
          }
        }
      }

      .save {
        color: #64707d;

        small {
          font-weight: 300;
          font-size: 80%;
          margin-right: 8px;
          line-height: 1.25rem;
        }

        button {
          border: 0px solid;
          border-radius: 5px;
          background: #d2d6db;
          color: #F9FAFA;
          font-weight: normal;
          font-size: 0.875rem;
          padding: 4px 12px 4px 12px;
          line-height: 1.5rem;
          transition: 0.2s ease;

          &:hover {
            background: #b5bdc4;
            color: #08090a;
          }
        }
      }
    }
  }
`;
