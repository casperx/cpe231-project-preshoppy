import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import API, { EventDetail } from 'API';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const CreateEvent = () => {
    const history = useHistory();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [detailChange, setDetailChange] = useState(false);
    const editorChange = (editorState: EditorState) => {
        setEditorState(editorState);
        setDetailChange(true);
    };
    const handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            editorChange(newState);
            return 'handled';
        }

        return 'not-handled';
    };
    const editorButtonClick = (type: string) => {
        editorChange(RichUtils.toggleInlineStyle(editorState, type));
    };

    const [name, setName] = useState('');
    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => void setName(e.target.value);

    const [location, setLocation] = useState('');
    const locationHandler = (e: ChangeEvent<HTMLInputElement>) => void setLocation(e.target.value);

    const [startDateTime, setStartDateTime] = useState('');
    const startDateTimeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        void setStartDateTime(e.target.value);

    const [endDateTime, setEndDateTime] = useState('');
    const endDateTimeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        void setEndDateTime(e.target.value);

    const [eventPic, setEventPic] = useState<File | undefined>();
    const eventPicHandler = (e: ChangeEvent<HTMLInputElement>) =>
        void setEventPic(e.target.files?.[0]);

    const formHandler = (e: any) => {
        e.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('detail', event_contents);
        data.append('startDateTime', startDateTime);
        data.append('endDateTime', endDateTime);
        data.append('location', location);
        data.append('contact', '0102002');

        if (eventPic) data.append('eventPic', eventPic);

        API.post(`/event/add`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                Swal.fire('เพิ่มสำเร็จ', 'ข้อมูลของท่านถูกเพิ่มแล้ว', 'success').then(() =>
                    history.push('/admin/dashboard')
                );
            })
            .catch((e) => {
                Swal.fire('เกิดข้อผิดพลาด', 'เกิดข้อผิดพลาด กรุณาลองใหม่', 'error');
            });
    };

    // Event content
    const event_contents = useMemo(() => stateToHTML(editorState.getCurrentContent()), [
        editorState
    ]);

    return (
        <div className='container'>
            <h1>เพิ่มอีเวนท์</h1>
            <div className='card'>
                <div className='form-group'>
                    <label htmlFor='event_name' className='required'>
                        ชื่ออีเวนท์
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='event_name'
                        required
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div className='row'>
                    <div className='col mr-10 form-group'>
                        <label className='required'>ภาพโปสเตอร์</label>
                        <div className='custom-file'>
                            <input type='file' id='event_poster' onChange={eventPicHandler} />
                            <label htmlFor='event_poster' style={{ width: '100%' }}>
                                เลือกไฟล์
                            </label>
                        </div>
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_location' className='required'>
                            สถานที่
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='event_location'
                            required
                            value={location}
                            onChange={locationHandler}
                        />
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_startDate' className='required'>
                            วันเริ่มต้น
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='event_startDate'
                            required
                            value={startDateTime}
                            onChange={startDateTimeHandler}
                        />
                    </div>
                    <div className='col form-group'>
                        <label htmlFor='event_endDate' className='required'>
                            วันสิ้นสุด
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='event_endDate'
                            required
                            value={endDateTime}
                            onChange={endDateTimeHandler}
                        />
                    </div>
                </div>
                <section className='d-flex'>
                    <section>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('BOLD')}>
                            <i className='fas fa-bold'></i>
                        </button>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('ITALIC')}>
                            <i className='fas fa-italic'></i>
                        </button>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('UNDERLINE')}>
                            <i className='fas fa-underline'></i>
                        </button>
                        <button
                            className='btn'
                            type='button'
                            onClick={() => editorButtonClick('CODE')}>
                            <i className='fas fa-code'></i>
                        </button>
                    </section>
                    <section className='ml-auto'>
                        <button className='btn btn-primary' onClick={formHandler}>
                            บันทึก
                        </button>
                    </section>
                </section>
                <div className='card mx-0'>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={editorChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
