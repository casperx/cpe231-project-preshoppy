import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';

const EditEvent = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const editorChange = (editorState: EditorState) => setEditorState(editorState);
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

    return (
        <div className='container'>
            <h1>แก้ไขอีเวนท์</h1>
            <div className='card'>
                <div className='form-group'>
                    <label htmlFor='event_name' className='required'>
                        ชื่ออีเวนท์
                    </label>
                    <input type='text' className='form-control' id='event_name' required />
                </div>
                <div className='row'>
                    <div className='col mr-10 form-group'>
                        <label className='required'>ภาพโปสเตอร์</label>
                        <div className='custom-file'>
                            <input type='file' id='event_poster' />
                            <label htmlFor='event_poster' style={{ width: '100%' }}>
                                เลือกไฟล์
                            </label>
                        </div>
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_location' className='required'>
                            สถานที่
                        </label>
                        <input type='text' className='form-control' id='event_location' required />
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_startDate' className='required'>
                            วันเริ่มต้น
                        </label>
                        <input type='date' className='form-control' id='event_startDate' required />
                    </div>
                    <div className='col form-group'>
                        <label htmlFor='event_endDate' className='required'>
                            วันสิ้นสุด
                        </label>
                        <input type='date' className='form-control' id='event_endDate' required />
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
                        <button className='btn btn-primary'>บันทึก</button>
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

export default EditEvent;
