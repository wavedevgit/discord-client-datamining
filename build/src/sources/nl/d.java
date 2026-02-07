package nl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import ol.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f40944a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40945b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f40946c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f40947d = new MediaCodec.BufferInfo();

    private void h() {
        this.f40944a.start();
        this.f40945b = true;
    }

    @Override // nl.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f40944a.getInputBuffer(i10), null);
    }

    @Override // nl.a
    public int b(long j10) {
        return this.f40944a.dequeueOutputBuffer(this.f40947d, j10);
    }

    @Override // nl.a
    public int c(long j10) {
        return this.f40944a.dequeueInputBuffer(j10);
    }

    @Override // nl.a
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f40944a.getOutputBuffer(i10), this.f40947d);
        }
        return null;
    }

    @Override // nl.a
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f40944a;
        int i10 = cVar.f40941a;
        MediaCodec.BufferInfo bufferInfo = cVar.f40943c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // nl.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = wl.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f40944a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f40946c = z10;
    }

    @Override // nl.a
    public void g(int i10, boolean z10) {
        this.f40944a.releaseOutputBuffer(i10, z10);
    }

    @Override // nl.a
    public String getName() {
        try {
            return this.f40944a.getName();
        } catch (IllegalStateException e10) {
            throw new ol.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // nl.a
    public MediaFormat getOutputFormat() {
        return this.f40944a.getOutputFormat();
    }

    @Override // nl.a
    public boolean isRunning() {
        return this.f40945b;
    }

    @Override // nl.a
    public void release() {
        if (!this.f40946c) {
            this.f40944a.release();
            this.f40946c = true;
        }
    }

    @Override // nl.a
    public void start() {
        if (this.f40944a != null) {
            if (!this.f40945b) {
                try {
                    h();
                    return;
                } catch (Exception e10) {
                    throw new ol.e(e.a.INTERNAL_CODEC_ERROR, e10);
                }
            }
            return;
        }
        throw new IllegalStateException("Codec is not initialized");
    }

    @Override // nl.a
    public void stop() {
        if (this.f40945b) {
            this.f40944a.stop();
            this.f40945b = false;
        }
    }
}
