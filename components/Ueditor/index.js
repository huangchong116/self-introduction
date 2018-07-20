import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import $ from "jquery";
import "jquery.cookie";
import './index.less'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import units from "../../units";


const rawContentState = {
    "entityMap":{
        "0":{"type":"IMAGE","mutability":"MUTABLE","data":
                {"src":"http://i.imgur.com/aMtBIep.png","height":"auto","width":"100%"}
            }
    },
    "blocks":[
        {"key":"9unl6","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},
        {"key":"95kn","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},
        {"key":"7rjes","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}
    }
]};

export default class Ueditor extends Component {
    constructor(props){
        super(props);
        let editorState = '';
        if(this.props.content){
            const contentBlock = htmlToDraft(this.props.content);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            editorState = EditorState.createWithContent(contentState);
        }
        this.state = {
            editorContent: undefined,
            contentState: rawContentState,
            editorState: editorState,
        };
    }


    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
        this.props.getContent(draftToHtml(editorContent))
    };

    clearContent = () => {
        this.setState({
            contentState: '',
        });
    };

    onContentStateChange = (contentState) => {
        console.log('contentState', contentState);
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    imageUploadCallBack = file => new Promise(
        (resolve, reject) => {
            if(!units.checkFileSizeCommon(file,this))
            {
              reject("");
              return;
            }
            const data = new FormData(); // eslint-disable-line no-undef
            data.append('file', file);
            const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
            xhr.open('PUT', '/file/commonUpload');
            // xhr.setRequestHeader('Content-type', 'multipart/form-data');
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve({data: {link: response.data.filePath,fileName:response.data.fileName}});
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
    render() {
        const { editorContent, editorState } = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <div className="cloud-box">
                            {/*<Card bordered={true} >*/}
                                <Editor
                                    editorState={editorState}
                                    toolbarClassName="home-toolbar"
                                    wrapperClassName="home-wrapper"
                                    editorClassName="home-editor"
                                    onEditorStateChange={this.onEditorStateChange}
                                    toolbar={{
                                        options: ['inline', 'blockType', 'textAlign', 'fontSize', 'fontFamily', 'link', 'image'],
                                        history: { inDropdown: true },
                                        list: { inDropdown: true },
                                        textAlign: { inDropdown: true },
                                        image: { uploadCallback: this.imageUploadCallBack },
                                    }}
                                    onContentStateChange={this.onEditorChange}
                                    spellCheck
                                    onTab={() => {console.log('tab'); return true;}}
                                    localization={{ locale: 'zh', translations: {'generic.add': '添加'} }}
                                    mention={{
                                        separator: ' ',
                                        trigger: '@',
                                        caseSensitive: true,
                                        suggestions: [
                                            { text: 'A', value: 'AB', url: 'href-a' },
                                            { text: 'AB', value: 'ABC', url: 'href-ab' },
                                            { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                                            { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                                            { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                                            { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                                            { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                                        ],
                                    }}
                                />
                            {/*</Card>*/}
                        </div>
                    </Col>
                    {/*<Col span={8}>*/}
                        {/*<Card title="同步转换HTML" bordered={true}>*/}
                           {/*/!* <pre>{draftToHtml(editorContent)}</pre>*!/*/}
                        {/*</Card>*/}
                    {/*</Col>*/}
                    {/*<Col span={8}>*/}
                        {/*<Card title="同步转换MarkDown" bordered={true}>*/}
                          {/*/!*  <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(editorContent)}</pre>*!/*/}
                        {/*</Card>*/}
                    {/*</Col>*/}
                    {/*<Col span={8}>*/}
                        {/*<Card title="同步转换JSON" bordered={true}>*/}
                           {/*/!* <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(editorContent)}</pre>*!/*/}
                        {/*</Card>*/}
                    {/*</Col>*/}
                </Row>
            </div>
        );
    }
}