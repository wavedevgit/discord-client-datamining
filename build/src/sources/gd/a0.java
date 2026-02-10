package gd;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.view.Surface;
import gd.l;
import java.io.IOException;
import java.nio.ByteBuffer;
import oe.t0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f25433a;

    /* renamed from: b  reason: collision with root package name */
    private ByteBuffer[] f25434b;

    /* renamed from: c  reason: collision with root package name */
    private ByteBuffer[] f25435c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements l.b {
        @Override // gd.l.b
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
                b10.configure(aVar.f25490b, aVar.f25492d, aVar.f25493e, aVar.f25494f);
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
            oe.a.e(aVar.f25489a);
            String str = aVar.f25489a.f25497a;
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

    @Override // gd.l
    public void a(int i10, int i11, rc.c cVar, long j10, int i12) {
        this.f25433a.queueSecureInputBuffer(i10, i11, cVar.a(), j10, i12);
    }

    @Override // gd.l
    public void b(int i10) {
        this.f25433a.setVideoScalingMode(i10);
    }

    @Override // gd.l
    public void c(Surface surface) {
        this.f25433a.setOutputSurface(surface);
    }

    @Override // gd.l
    public boolean d() {
        return false;
    }

    @Override // gd.l
    public void e(final l.c cVar, Handler handler) {
        this.f25433a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: gd.z
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                a0.i(a0.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // gd.l
    public void f(int i10, long j10) {
        this.f25433a.releaseOutputBuffer(i10, j10);
    }

    @Override // gd.l
    public void flush() {
        this.f25433a.flush();
    }

    @Override // gd.l
    public int g() {
        return this.f25433a.dequeueInputBuffer(0L);
    }

    @Override // gd.l
    public ByteBuffer getInputBuffer(int i10) {
        if (w0.f39037a >= 21) {
            return this.f25433a.getInputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f25434b))[i10];
    }

    @Override // gd.l
    public ByteBuffer getOutputBuffer(int i10) {
        if (w0.f39037a >= 21) {
            return this.f25433a.getOutputBuffer(i10);
        }
        return ((ByteBuffer[]) w0.j(this.f25435c))[i10];
    }

    @Override // gd.l
    public MediaFormat getOutputFormat() {
        return this.f25433a.getOutputFormat();
    }

    @Override // gd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        int dequeueOutputBuffer;
        do {
            dequeueOutputBuffer = this.f25433a.dequeueOutputBuffer(bufferInfo, 0L);
            if (dequeueOutputBuffer == -3 && w0.f39037a < 21) {
                this.f25435c = this.f25433a.getOutputBuffers();
                continue;
            }
        } while (dequeueOutputBuffer == -3);
        return dequeueOutputBuffer;
    }

    @Override // gd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f25433a.queueInputBuffer(i10, i11, i12, j10, i13);
    }

    @Override // gd.l
    public void release() {
        this.f25434b = null;
        this.f25435c = null;
        this.f25433a.release();
    }

    @Override // gd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f25433a.releaseOutputBuffer(i10, z10);
    }

    @Override // gd.l
    public void setParameters(Bundle bundle) {
        this.f25433a.setParameters(bundle);
    }

    private a0(MediaCodec mediaCodec) {
        this.f25433a = mediaCodec;
        if (w0.f39037a < 21) {
            this.f25434b = mediaCodec.getInputBuffers();
            this.f25435c = mediaCodec.getOutputBuffers();
        }
    }
}
