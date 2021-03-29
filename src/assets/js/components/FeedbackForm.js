import * as React from 'react';

const FeedbackForm = ({ add ,send}) => {
  return (
    <form 
    className="page-d__feedback-body feedback-form"
    action="mail.php"
    method="post"
    id="form"
    autoComplete="off"
    onSubmit={send}>
      <h3 className="feedback-form__head">Связаться со мной</h3>
      <div className="feedback-form__contacts">
        <input 
        className="feedback-form__contacts-name" 
        type="text"
        placeholder="Как к вам обращаться"
        name="name"
        required
        minLength="3"
        maxLength="30"
        pattern="^[^\s]+(\s.*)?$"
        title="Допускаются только буквы"
        onChange={event => add(event.target.value, event.target.name)}/>
        <input 
        className="feedback-form__contacts-email" 
        type="email"
        placeholder="Ваша почта"
        name="email"
        required
        maxLength="40"
        onChange={event => add(event.target.value, event.target.name)}/>
      </div>
      <div className="feedback-form__subject">
        <input 
        className="feedback-form__subject-input" 
        type="text"
        placeholder="Тема:"
        title="Пожалуйста кратко опишите тему обращения/вопроса"
        name="subject"
        required
        minLength="4"
        maxLength="40"
        pattern="^[^\s]+(\s.*)?$"
        onChange={event => add(event.target.value, event.target.name)}/>
        <textarea 
        className="feedback-form__subject-textarea" 
        type="text"
        placeholder="Текст:"
        title="Пожалуйста кратко опишите суть обращения/вопроса"
        name="subject-body"
        required
        minLength="3"
        maxLength="100"
        onChange={event => add(event.target.value, event.target.name)}></textarea>
      </div>
      <div className="feedback-form__submit">
        <input className="feedback-form__submit-btn" value="Отправить" type="submit"/>
      </div>
    </form>
  )
}

export default FeedbackForm;