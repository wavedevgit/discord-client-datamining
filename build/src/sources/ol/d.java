package ol;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import pl.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f42371a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42372b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f42373c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f42374d = new MediaCodec.BufferInfo();

    private void h() {
        this.f42371a.start();
        this.f42372b = true;
    }

    @Override // ol.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f42371a.getInputBuffer(i10), null);
    }

    @Override // ol.a
    public int b(long j10) {
        return this.f42371a.dequeueOutputBuffer(this.f42374d, j10);
    }

    @Override // ol.a
    public int c(long j10) {
        return this.f42371a.dequeueInputBuffer(j10);
    }

    @Override // ol.a
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f42371a.getOutputBuffer(i10), this.f42374d);
        }
        return null;
    }

    @Override // ol.a
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f42371a;
        int i10 = cVar.f42368a;
        MediaCodec.BufferInfo bufferInfo = cVar.f42370c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ol.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = xl.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f42371a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f42373c = z10;
    }

    @Override // ol.a
    public void g(int i10, boolean z10) {
        this.f42371a.releaseOutputBuffer(i10, z10);
    }

    @Override // ol.a
    public String getName() {
        try {
            return this.f42371a.getName();
        } catch (IllegalStateException e10) {
            throw new pl.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ol.a
    public MediaFormat getOutputFormat() {
        return this.f42371a.getOutputFormat();
    }

    @Override // ol.a
    public boolean isRunning() {
        return this.f42372b;
    }

    @Override // ol.a
    public void release() {
        if (!this.f42373c) {
            this.f42371a.release();
            this.f42373c = true;
        }
    }

    @Override // ol.a
    public void start() {
        if (this.f42371a != null) {
            if (!this.f42372b) {
                try {
                    h();
                    return;
                } catch (Exception e10) {
                    throw new pl.e(e.a.INTERNAL_CODEC_ERROR, e10);
                }
            }
            return;
        }
        throw new IllegalStateException("Codec is not initialized");
    }

    @Override // ol.a
    public void stop() {
        if (this.f42372b) {
            this.f42371a.stop();
            this.f42372b = false;
        }
    }
}
