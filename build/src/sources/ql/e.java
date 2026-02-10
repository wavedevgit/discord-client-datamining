package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import org.webrtc.MediaStreamTrack;
import rl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f45461a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45463c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45462b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f45464d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f45463c) {
            this.f45461a.start();
            this.f45463c = true;
        }
    }

    @Override // ql.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f45461a.getInputBuffer(i10), null);
    }

    @Override // ql.b
    public int b(long j10) {
        return this.f45461a.dequeueOutputBuffer(this.f45464d, j10);
    }

    @Override // ql.b
    public int c(long j10) {
        return this.f45461a.dequeueInputBuffer(j10);
    }

    @Override // ql.b
    public Surface createInputSurface() {
        return this.f45461a.createInputSurface();
    }

    @Override // ql.b
    public void d(c cVar) {
        MediaCodec mediaCodec = this.f45461a;
        int i10 = cVar.f45454a;
        MediaCodec.BufferInfo bufferInfo = cVar.f45456c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ql.b
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f45461a.getOutputBuffer(i10), this.f45464d);
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
        this.f45461a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f45462b = z10;
    }

    @Override // ql.b
    public void g() {
        this.f45461a.signalEndOfInputStream();
    }

    @Override // ql.b
    public String getName() {
        try {
            return this.f45461a.getName();
        } catch (IllegalStateException e10) {
            throw new rl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ql.b
    public MediaFormat getOutputFormat() {
        return this.f45461a.getOutputFormat();
    }

    @Override // ql.b
    public void h(int i10) {
        this.f45461a.releaseOutputBuffer(i10, false);
    }

    @Override // ql.b
    public boolean isRunning() {
        return this.f45463c;
    }

    @Override // ql.b
    public void release() {
        if (!this.f45462b) {
            this.f45461a.release();
            this.f45462b = true;
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
        if (this.f45463c) {
            this.f45461a.stop();
            this.f45463c = false;
        }
    }
}
