package fd;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.view.Surface;
import fd.l;
import java.io.IOException;
import java.nio.ByteBuffer;
import ne.t0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f24919a;

    /* renamed from: b  reason: collision with root package name */
    private ByteBuffer[] f24920b;

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f24921c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements l.b {
        @Override // fd.l.b
        public l a(l.a aVar) {
            MediaCodec b10;
            MediaCodec mediaCodec = null;
            try {
                b10 = b(aVar);
            } catch (IOException e10) {
                e = e10;
            } catch (RuntimeException e11) {
                e = e11;
            }
            try {
                t0.a("configureCodec");
                b10.configure(aVar.f24976b, aVar.f24978d, aVar.f24979e, aVar.f24980f);
                t0.c();
                t0.a("startCodec");
                b10.start();
                t0.c();
                return new a0(b10);
            } catch (IOException | RuntimeException e12) {
                e = e12;
                mediaCodec = b10;
                if (mediaCodec != null) {
                    mediaCodec.release();
                }
                throw e;
            }
        }

        protected MediaCodec b(l.a aVar) {
            ne.a.e(aVar.f24975a);
            String str = aVar.f24975a.f24983a;
            t0.a("createCodec:" + str);
            MediaCodec createByCodecName = MediaCodec.createByCodecName(str);
            t0.c();
            return createByCodecName;
        }
    }

    public static /* synthetic */ void i(a0 a0Var, l.c cVar, MediaCodec mediaCodec, long j10, long j11) {
        a0Var.getClass();
        cVar.a(a0Var, j10, j11);
    }

    @Override // fd.l
    public void a(int i10, int i11, qc.c cVar, long j10, int i12) {
        this.f24919a.queueSecureInputBuffer(i10, i11, cVar.a(), j10, i12);
    }

    @Override // fd.l
    public void b(final l.c cVar, Handler handler) {
        this.f24919a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: fd.z
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                a0.i(a0.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // fd.l
    public void c(int i10) {
        this.f24919a.setVideoScalingMode(i10);
    }

    @Override // fd.l
    public void d(Surface surface) {
        this.f24919a.setOutputSurface(surface);
    }

    @Override // fd.l
    public boolean e() {
        return false;
    }

    @Override // fd.l
    public void f(int i10, long j10) {
        this.f24919a.releaseOutputBuffer(i10, j10);
    }

    @Override // fd.l
    public void flush() {
        this.f24919a.flush();
    }

    @Override // fd.l
    public int g() {
        return this.f24919a.dequeueInputBuffer(0L);
    }

    @Override // fd.l
    public ByteBuffer getInputBuffer(int i10) {
        if (w0.f40279a >= 21) {
            return this.f24919a.getInputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f24920b))[i10];
    }

    @Override // fd.l
    public ByteBuffer getOutputBuffer(int i10) {
        if (w0.f40279a >= 21) {
            return this.f24919a.getOutputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f24921c))[i10];
    }

    @Override // fd.l
    public MediaFormat getOutputFormat() {
        return this.f24919a.getOutputFormat();
    }

    @Override // fd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        int dequeueOutputBuffer;
        do {
            dequeueOutputBuffer = this.f24919a.dequeueOutputBuffer(bufferInfo, 0L);
            if (dequeueOutputBuffer == -3 && w0.f40279a < 21) {
                this.f24921c = this.f24919a.getOutputBuffers();
                continue;
            }
        } while (dequeueOutputBuffer == -3);
        return dequeueOutputBuffer;
    }

    @Override // fd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f24919a.queueInputBuffer(i10, i11, i12, j10, i13);
    }

    @Override // fd.l
    public void release() {
        this.f24920b = null;
        this.f24921c = null;
        this.f24919a.release();
    }

    @Override // fd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f24919a.releaseOutputBuffer(i10, z10);
    }

    @Override // fd.l
    public void setParameters(Bundle bundle) {
        this.f24919a.setParameters(bundle);
    }

    private a0(MediaCodec mediaCodec) {
        this.f24919a = mediaCodec;
        if (w0.f40279a < 21) {
            this.f24920b = mediaCodec.getInputBuffers();
            this.f24921c = mediaCodec.getOutputBuffers();
        }
    }
}
