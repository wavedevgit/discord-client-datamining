package co.discord.media_engine;

import android.content.Context;
import androidx.annotation.NonNull;
import org.webrtc.CapturerObserver;
import org.webrtc.SurfaceTextureHelper;
import org.webrtc.VideoCapturer;
import org.webrtc.VideoFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class NativeCapturerObserver implements CapturerObserver {
    private long nativeHandle_;
    private boolean startCaptureOnReconfigure_;
    private SurfaceTextureHelper surfaceTextureHelper_;
    private VideoCapturer videoCapturer_;

    static {
        System.loadLibrary("discord");
    }

    public NativeCapturerObserver(long j10, @NonNull Context context, @NonNull String str) {
        this(j10, context, CameraEnumeratorProvider.createCapturer(str));
    }

    private native void nativeOnFrame(long j10, @NonNull VideoFrame.Buffer buffer, int i10, int i11, int i12, long j11);

    public synchronized void dispose() {
        try {
            VideoCapturer videoCapturer = this.videoCapturer_;
            if (videoCapturer != null) {
                try {
                    videoCapturer.stopCapture();
                    this.videoCapturer_.dispose();
                    this.videoCapturer_ = null;
                } catch (InterruptedException e10) {
                    throw new RuntimeException(e10);
                }
            }
            SurfaceTextureHelper surfaceTextureHelper = this.surfaceTextureHelper_;
            if (surfaceTextureHelper != null) {
                surfaceTextureHelper.dispose();
                this.surfaceTextureHelper_ = null;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // org.webrtc.CapturerObserver
    public void onCapturerStarted(boolean z10) {
    }

    @Override // org.webrtc.CapturerObserver
    public void onCapturerStopped() {
    }

    @Override // org.webrtc.CapturerObserver
    public void onFrameCaptured(@NonNull VideoFrame videoFrame) {
        nativeOnFrame(this.nativeHandle_, videoFrame.getBuffer(), videoFrame.getRotatedWidth(), videoFrame.getRotatedHeight(), videoFrame.getRotation(), videoFrame.getTimestampNs());
    }

    public synchronized void reconfigure(int i10, int i11, int i12) {
        try {
            VideoCapturer videoCapturer = this.videoCapturer_;
            if (videoCapturer == null) {
                return;
            }
            if (this.startCaptureOnReconfigure_) {
                this.startCaptureOnReconfigure_ = false;
                videoCapturer.startCapture(i10, i11, i12);
            } else {
                videoCapturer.changeCaptureFormat(i10, i11, i12);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void repeatLastFrame() {
        this.surfaceTextureHelper_.forceFrame();
    }

    public NativeCapturerObserver(long j10, @NonNull Context context, @NonNull VideoCapturer videoCapturer) {
        SurfaceTextureHelper create = SurfaceTextureHelper.create("DiscordTextureCapture", SharedEglBaseContext.getEglContext());
        this.surfaceTextureHelper_ = create;
        this.startCaptureOnReconfigure_ = true;
        this.nativeHandle_ = j10;
        this.videoCapturer_ = videoCapturer;
        videoCapturer.initialize(create, context, this);
    }
}
