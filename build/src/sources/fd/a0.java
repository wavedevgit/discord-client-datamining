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
    private final MediaCodec f23722a;

    /* renamed from: b  reason: collision with root package name */
    private ByteBuffer[] f23723b;

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f23724c;

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
                b10.configure(aVar.f23779b, aVar.f23781d, aVar.f23782e, aVar.f23783f);
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
            ne.a.e(aVar.f23778a);
            String str = aVar.f23778a.f23786a;
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
        this.f23722a.queueSecureInputBuffer(i10, i11, cVar.a(), j10, i12);
    }

    @Override // fd.l
    public void b(final l.c cVar, Handler handler) {
        this.f23722a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: fd.z
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                a0.i(a0.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // fd.l
    public void c(int i10) {
        this.f23722a.setVideoScalingMode(i10);
    }

    @Override // fd.l
    public void d(Surface surface) {
        this.f23722a.setOutputSurface(surface);
    }

    @Override // fd.l
    public boolean e() {
        return false;
    }

    @Override // fd.l
    public void f(int i10, long j10) {
        this.f23722a.releaseOutputBuffer(i10, j10);
    }

    @Override // fd.l
    public void flush() {
        this.f23722a.flush();
    }

    @Override // fd.l
    public int g() {
        return this.f23722a.dequeueInputBuffer(0L);
    }

    @Override // fd.l
    public ByteBuffer getInputBuffer(int i10) {
        if (w0.f40197a >= 21) {
            return this.f23722a.getInputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f23723b))[i10];
    }

    @Override // fd.l
    public ByteBuffer getOutputBuffer(int i10) {
        if (w0.f40197a >= 21) {
            return this.f23722a.getOutputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f23724c))[i10];
    }

    @Override // fd.l
    public MediaFormat getOutputFormat() {
        return this.f23722a.getOutputFormat();
    }

    @Override // fd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        int dequeueOutputBuffer;
        do {
            dequeueOutputBuffer = this.f23722a.dequeueOutputBuffer(bufferInfo, 0L);
            if (dequeueOutputBuffer == -3 && w0.f40197a < 21) {
                this.f23724c = this.f23722a.getOutputBuffers();
                continue;
            }
        } while (dequeueOutputBuffer == -3);
        return dequeueOutputBuffer;
    }

    @Override // fd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f23722a.queueInputBuffer(i10, i11, i12, j10, i13);
    }

    @Override // fd.l
    public void release() {
        this.f23723b = null;
        this.f23724c = null;
        this.f23722a.release();
    }

    @Override // fd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f23722a.releaseOutputBuffer(i10, z10);
    }

    @Override // fd.l
    public void setParameters(Bundle bundle) {
        this.f23722a.setParameters(bundle);
    }

    private a0(MediaCodec mediaCodec) {
        this.f23722a = mediaCodec;
        if (w0.f40197a < 21) {
            this.f23723b = mediaCodec.getInputBuffers();
            this.f23724c = mediaCodec.getOutputBuffers();
        }
    }
}
