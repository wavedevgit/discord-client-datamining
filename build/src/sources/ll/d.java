package ll;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.view.Surface;
import ml.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private MediaCodec f36940a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36941b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36942c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaCodec.BufferInfo f36943d = new MediaCodec.BufferInfo();

    private void h() {
        this.f36940a.start();
        this.f36941b = true;
    }

    @Override // ll.a
    public c a(int i10) {
        if (i10 < 0) {
            return null;
        }
        return new c(i10, this.f36940a.getInputBuffer(i10), null);
    }

    @Override // ll.a
    public int b(long j10) {
        return this.f36940a.dequeueOutputBuffer(this.f36943d, j10);
    }

    @Override // ll.a
    public int c(long j10) {
        return this.f36940a.dequeueInputBuffer(j10);
    }

    @Override // ll.a
    public c d(int i10) {
        if (i10 >= 0) {
            return new c(i10, this.f36940a.getOutputBuffer(i10), this.f36943d);
        }
        return null;
    }

    @Override // ll.a
    public void e(c cVar) {
        MediaCodec mediaCodec = this.f36940a;
        int i10 = cVar.f36937a;
        MediaCodec.BufferInfo bufferInfo = cVar.f36939c;
        mediaCodec.queueInputBuffer(i10, bufferInfo.offset, bufferInfo.size, bufferInfo.presentationTimeUs, bufferInfo.flags);
    }

    @Override // ll.a
    public void f(MediaFormat mediaFormat, Surface surface) {
        boolean z10;
        MediaCodec e10 = ul.c.e(mediaFormat, surface, false, e.a.DECODER_NOT_FOUND, e.a.DECODER_FORMAT_NOT_FOUND, e.a.DECODER_CONFIGURATION_ERROR);
        this.f36940a = e10;
        if (e10 == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36942c = z10;
    }

    @Override // ll.a
    public void g(int i10, boolean z10) {
        this.f36940a.releaseOutputBuffer(i10, z10);
    }

    @Override // ll.a
    public String getName() {
        try {
            return this.f36940a.getName();
        } catch (IllegalStateException e10) {
            throw new ml.e(e.a.CODEC_IN_RELEASED_STATE, e10);
        }
    }

    @Override // ll.a
    public MediaFormat getOutputFormat() {
        return this.f36940a.getOutputFormat();
    }

    @Override // ll.a
    public boolean isRunning() {
        return this.f36941b;
    }

    @Override // ll.a
    public void release() {
        if (!this.f36942c) {
            this.f36940a.release();
            this.f36942c = true;
        }
    }

    @Override // ll.a
    public void start() {
        if (this.f36940a != null) {
            if (!this.f36941b) {
                try {
                    h();
                    return;
                } catch (Exception e10) {
                    throw new ml.e(e.a.INTERNAL_CODEC_ERROR, e10);
                }
            }
            return;
        }
        throw new IllegalStateException("Codec is not initialized");
    }

    @Override // ll.a
    public void stop() {
        if (this.f36941b) {
            this.f36940a.stop();
            this.f36941b = false;
        }
    }
}
