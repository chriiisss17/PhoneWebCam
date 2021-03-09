import React, { Component } from 'react'
import {Button, PermissionsAndroid} from 'react-native';
import {  NodeCameraView, NodePlayerView } from 'react-native-nodemediaclient';

export default class Camera extends Component {
    constructor(props){
        super(props);

        this.state={
            publishBtnTitle: '',
        }

    }

    requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Cool Photo App Camera And Microphone Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          console.log(PermissionsAndroid.RESULTS);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

    render() {
        return (
            <>
            <NodeCameraView 
            style={{ height: 200, }}
            ref={(vb) => { this.vb = vb }}
            outputUrl = {"rtmp://192.168.0.10/live/stream"}
            camera={{ cameraId: 0, cameraFrontMirror: false }}
            audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
            video={{ preset: 12, bitrate: 400000, profile: 1, fps: 30, videoFrontMirror: false }}
            autopreview={true}
        />
        <NodePlayerView 
  style={{ height: 200 }}
  ref={(vp) => { this.vp = vp }}
  inputUrl={"rtmp://192.168.0.10/live/stream"}
  scaleMode={"ScaleAspectFit"}
  bufferTime={300}
  maxBufferTime={1000}
  autoplay={true}
/>

    <Button title="request permissions" onPress={this.requestCameraPermission} />
    <Button
    onPress={() => {
        if (this.state.isPublish) {
        this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
        this.vb.stop();
        } else {
        this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
        this.vb.start();
        }
    }}
    title={this.state.publishBtnTitle}
    color="#841584"
    />
            </>
        )
    }
}
