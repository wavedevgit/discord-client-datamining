package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import org.webrtc.MediaStreamTrack;
import rl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f46030a;

    /* renamed from: c  reason: collision with root package name */
    private boolean f46032c;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46031b = true;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f46033d = new MediaCodec.BufferInfo();

    private void i() {
        if (!this.f46032c) {
            this.f46030a.start();
            this.f46032c = true;
        }
    }

    @Override // ql.b
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f46030a.getInputBuffer(i10), null);
    }

    @Override // ql.b
    public int b(long j10) {
        return this.f46030a.dequeueOutputBuffer(this.f46033d, j10);
    }

    @Override // ql.b
    public int c(long j10) {
        return this.f46030a.dequeueInputBuffer(j10);
    }

    @Override // ql.b
    public Surface createInputSurface() {
        return this.f46030a.createInputSurface();
    }

    @Override // ql.b
    public void d(c cVar) {
        MediaCodec mediaCodec = this.f46030a;
        int i10 = cVar.f46023a;
        MediaCodec.BufferInfo bufferInfo = cVar.f46025c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ql.b
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f46030a.getOutputBuffer(i10), this.f46033d);
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
        this.f46030a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f46031b = z10;
    }

    @Override // ql.b
    public void g() {
        this.f46030a.signalEndOfInputStream();
    }

    @Override // ql.b
    public String getName() {
        try {
            return this.f46030a.getName();
        } catch (IllegalStateException e10) {
            throw new rl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ql.b
    public MediaFormat getOutputFormat() {
        return this.f46030a.getOutputFormat();
    }

    @Override // ql.b
    public void h(int i10) {
        this.f46030a.releaseOutputBuffer(i10, false);
    }

    @Override // ql.b
    public boolean isRunning() {
        return this.f46032c;
    }

    @Override // ql.b
    public void release() {
        if (!this.f46031b) {
            this.f46030a.release();
            this.f46031b = true;
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
        if (this.f46032c) {
            this.f46030a.stop();
            this.f46032c = false;
        }
    }
}
