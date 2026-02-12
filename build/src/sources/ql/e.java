package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import org.webrtc.MediaStreamTrack;
import rl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f45462a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45464c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45463b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f45465d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f45464c) {
            this.f45462a.start();
            this.f45464c = true;
        }
    }

    @Override // ql.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f45462a.getInputBuffer(i10), null);
    }

    @Override // ql.b
    public int b(long j10) {
        return this.f45462a.dequeueOutputBuffer(this.f45465d, j10);
    }

    @Override // ql.b
    public int c(long j10) {
        return this.f45462a.dequeueInputBuffer(j10);
    }

    @Override // ql.b
    public Surface createInputSurface() {
        return this.f45462a.createInputSurface();
    }

    @Override // ql.b
    public void d(c cVar) {
        MediaCodec mediaCodec = this.f45462a;
        int i10 = cVar.f45455a;
        MediaCodec.BufferInfo bufferInfo = cVar.f45457c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ql.b
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f45462a.getOutputBuffer(i10), this.f45465d);
        }
        return null;
    }

    @Override // ql.b
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
        MediaCodec e10 = zl.c.e(mediaFormat, null, true, e.a.ENCODER_NOT_FOUND, e.a.ENCODER_FORMAT_NOT_FOUND, e.a.ENCODER_CONFIGURATION_ERROR);
        this.f45462a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f45463b = z10;
    }

    @Override // ql.b
    public void g() {
        this.f45462a.signalEndOfInputStream();
    }

    @Override // ql.b
    public String getName() {
        try {
            return this.f45462a.getName();
        } catch (IllegalStateException e10) {
            throw new rl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ql.b
    public MediaFormat getOutputFormat() {
        return this.f45462a.getOutputFormat();
    }

    @Override // ql.b
    public void h(int i10) {
        this.f45462a.releaseOutputBuffer(i10, false);
    }

    @Override // ql.b
    public boolean isRunning() {
        return this.f45464c;
    }

    @Override // ql.b
    public void release() {
        if (!this.f45463b) {
            this.f45462a.release();
            this.f45463b = true;
        }
    }

    @Override // ql.b
    public void start() {
        try {
            i();
        } catch (Exception e10) {
            throw new rl.e(e.a.INTERNAL_CODEC_ERROR, e10);
        }
    }

    @Override // ql.b
    public void stop() {
        if (this.f45464c) {
            this.f45462a.stop();
            this.f45464c = false;
        }
    }
}
