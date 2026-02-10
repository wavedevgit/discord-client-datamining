package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import rl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f45457a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45458b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45459c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f45460d = new MediaCodec.BufferInfo();

    private void h() {
        this.f45457a.start();
        this.f45458b = true;
    }

    @Override // ql.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f45457a.getInputBuffer(i10), null);
    }

    @Override // ql.a
    public int b(long j10) {
        return this.f45457a.dequeueOutputBuffer(this.f45460d, j10);
    }

    @Override // ql.a
    public int c(long j10) {
        return this.f45457a.dequeueInputBuffer(j10);
    }

    @Override // ql.a
    public void d(c cVar) {
        MediaCodec mediaCodec = this.f45457a;
        int i10 = cVar.f45454a;
        MediaCodec.BufferInfo bufferInfo = cVar.f45456c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ql.a
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f45457a.getOutputBuffer(i10), this.f45460d);
        }
        return null;
    }

    @Override // ql.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = zl.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f45457a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f45459c = z10;
    }

    @Override // ql.a
    public void g(int i10, boolean z10) {
        this.f45457a.releaseOutputBuffer(i10, z10);
    }

    @Override // ql.a
    public String getName() {
        try {
            return this.f45457a.getName();
        } catch (IllegalStateException e10) {
            throw new rl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ql.a
    public MediaFormat getOutputFormat() {
        return this.f45457a.getOutputFormat();
    }

    @Override // ql.a
    public boolean isRunning() {
        return this.f45458b;
    }

    @Override // ql.a
    public void release() {
        if (!this.f45459c) {
            this.f45457a.release();
            this.f45459c = true;
        }
    }

    @Override // ql.a
    public void start() {
        if (this.f45457a != null) {
            if (!this.f45458b) {
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
        if (this.f45458b) {
            this.f45457a.stop();
            this.f45458b = false;
        }
    }
}
