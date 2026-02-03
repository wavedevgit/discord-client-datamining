package il;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import jl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f28242a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28243b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f28244c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f28245d = new MediaCodec.BufferInfo();

    private void h() {
        this.f28242a.start();
        this.f28243b = true;
    }

    @Override // il.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f28242a.getInputBuffer(i10), null);
    }

    @Override // il.a
    public int b(long j10) {
        return this.f28242a.dequeueOutputBuffer(this.f28245d, j10);
    }

    @Override // il.a
    public void c(c cVar) {
        MediaCodec mediaCodec = this.f28242a;
        int i10 = cVar.f28239a;
        MediaCodec.BufferInfo bufferInfo = cVar.f28241c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // il.a
    public int d(long j10) {
        return this.f28242a.dequeueInputBuffer(j10);
    }

    @Override // il.a
    public c e(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f28242a.getOutputBuffer(i10), this.f28245d);
        }
        return null;
    }

    @Override // il.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = rl.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f28242a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f28244c = z10;
    }

    @Override // il.a
    public void g(int i10, boolean z10) {
        this.f28242a.releaseOutputBuffer(i10, z10);
    }

    @Override // il.a
    public String getName() {
        try {
            return this.f28242a.getName();
        } catch (IllegalStateException e10) {
            throw new jl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // il.a
    public MediaFormat getOutputFormat() {
        return this.f28242a.getOutputFormat();
    }

    @Override // il.a
    public boolean isRunning() {
        return this.f28243b;
    }

    @Override // il.a
    public void release() {
        if (!this.f28244c) {
            this.f28242a.release();
            this.f28244c = true;
        }
    }

    @Override // il.a
    public void start() {
        if (this.f28242a != null) {
            if (!this.f28243b) {
                try {
                    h();
                    return;
                } catch (Exception e10) {
                    throw new jl.e(e.a.INTERNAL_CODEC_ERROR, e10);
                }
            }
            return;
        }
        throw new IllegalStateException("Codec is not initialized");
    }

    @Override // il.a
    public void stop() {
        if (this.f28243b) {
            this.f28242a.stop();
            this.f28243b = false;
        }
    }
}
