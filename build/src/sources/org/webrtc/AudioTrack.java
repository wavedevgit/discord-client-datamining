package org.webrtc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AudioTrack extends MediaStreamTrack {
    public AudioTrack(long j10) {
        super(j10);
    }

    private static native void nativeSetVolume(long j10, double d10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public long getNativeAudioTrack() {
        return getNativeMediaStreamTrack();
    }

    public void setVolume(double d10) {
        nativeSetVolume(getNativeAudioTrack(), d10);
    }
}
