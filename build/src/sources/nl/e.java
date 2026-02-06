package nl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import ol.e;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f40900a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f40902c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40901b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f40903d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f40902c) {
            this.f40900a.start();
            this.f40902c = true;
        }
    }

    @Override // nl.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f40900a.getInputBuffer(i10), null);
    }

    @Override // nl.b
    public int b(long j10) {
        return this.f40900a.dequeueOutputBuffer(this.f40903d, j10);
    }

    @Override // nl.b
    public int c(long j10) {
        return this.f40900a.dequeueInputBuffer(j10);
    }

    @Override // nl.b
    public Surface createInputSurface() {
        return this.f40900a.createInputSurface();
    }

    @Override // nl.b
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f40900a.getOutputBuffer(i10), this.f40903d);
        }
        return null;
    }

    @Override // nl.b
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f40900a;
        int i10 = cVar.f40893a;
        MediaCodec.BufferInfo bufferInfo = cVar.f40895c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // nl.b
    public void f(MediaFormat mediaFormat) {
        boolean z10;
        if (mediaFormat.containsKey("mime") && mediaFormat.getString("mime").startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
            if (!mediaFormat.containsKey("color-format")) {
                mediaFormat.setInteger("color-format", 2130708361);
            }
            if (!mediaFormat.containsKey("frame-rate")) {
                mediaFormat.setInteger("frame-rate", 30);
            }
        }
        MediaCodec e10 = wl.c.e(mediaFormat, null, true, e.a.ENCODER_NOT_FOUND, e.a.ENCODER_FORMAT_NOT_FOUND, e.a.ENCODER_CONFIGURATION_ERROR);
        this.f40900a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f40901b = z10;
    }

    @Override // nl.b
    public void g() {
        this.f40900a.signalEndOfInputStream();
    }

    @Override // nl.b
    public String getName() {
        try {
            return this.f40900a.getName();
        } catch (IllegalStateException e10) {
            throw new ol.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // nl.b
    public MediaFormat getOutputFormat() {
        return this.f40900a.getOutputFormat();
    }

    @Override // nl.b
    public void h(int i10) {
        this.f40900a.releaseOutputBuffer(i10, false);
    }

    @Override // nl.b
    public boolean isRunning() {
        return this.f40902c;
    }

    @Override // nl.b
    public void release() {
        if (!this.f40901b) {
            this.f40900a.release();
            this.f40901b = true;
        }
    }

    @Override // nl.b
    public void start() {
        try {
            i();
        } catch (Exception e10) {
            throw new ol.e(e.a.INTERNAL_CODEC_ERROR, e10);
        }
    }

    @Override // nl.b
    public void stop() {
        if (this.f40902c) {
            this.f40900a.stop();
            this.f40902c = false;
        }
    }
}
