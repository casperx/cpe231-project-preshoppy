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

    return (
        <div className='container'>
            <h1>แก้ไขอีเวนท์</h1>
            <div className='card'>
                <div className='row'>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='full-name' className='required'>
                            Full name
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='full-name'
                            placeholder='Full name'
                            required
                        />
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_location' className='required'>
                            event_location
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='full-name'
                            placeholder='Full name'
                            required
                        />
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='full-name' className='required'>
                            Full name
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='full-name'
                            placeholder='Full name'
                            required
                        />
                    </div>
                    <div className='col form-group'>
                        <label htmlFor='full-name' className='required'>
                            Full name
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='full-name'
                            placeholder='Full name'
                            required
                        />
                    </div>
                </div>
            </div>

            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={editorChange}
            />
        </div>
    );
};

export default EditEvent;
