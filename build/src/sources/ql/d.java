package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import rl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f46026a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46027b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f46028c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f46029d = new MediaCodec.BufferInfo();

    private void h() {
        this.f46026a.start();
        this.f46027b = true;
    }

    @Override // ql.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f46026a.getInputBuffer(i10), null);
    }

    @Override // ql.a
    public int b(long j10) {
        return this.f46026a.dequeueOutputBuffer(this.f46029d, j10);
    }

    @Override // ql.a
    public int c(long j10) {
        return this.f46026a.dequeueInputBuffer(j10);
    }

    @Override // ql.a
    public void d(c cVar) {
        MediaCodec mediaCodec = this.f46026a;
        int i10 = cVar.f46023a;
        MediaCodec.BufferInfo bufferInfo = cVar.f46025c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ql.a
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f46026a.getOutputBuffer(i10), this.f46029d);
        }
        return null;
    }

    @Override // ql.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = zl.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f46026a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f46028c = z10;
    }

    @Override // ql.a
    public void g(int i10, boolean z10) {
        this.f46026a.releaseOutputBuffer(i10, z10);
    }

    @Override // ql.a
    public String getName() {
        try {
            return this.f46026a.getName();
        } catch (IllegalStateException e10) {
            throw new rl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ql.a
    public MediaFormat getOutputFormat() {
        return this.f46026a.getOutputFormat();
    }

    @Override // ql.a
    public boolean isRunning() {
        return this.f46027b;
    }

    @Override // ql.a
    public void release() {
        if (!this.f46028c) {
            this.f46026a.release();
            this.f46028c = true;
        }
    }

    @Override // ql.a
    public void start() {
        if (this.f46026a != null) {
            if (!this.f46027b) {
                try {
                    h();
                    return;
                } catch (Exception e10) {
                    throw new rl.e(e.a.INTERNAL_CODEC_ERROR, e10);
                }
            }
            return;
        }
        throw new IllegalStateException("Codec is not initialized");
    }

    @Override // ql.a
    public void stop() {
        if (this.f46027b) {
            this.f46026a.stop();
            this.f46027b = false;
        }
    }
}
