package fd;

import android.media.MediaCodec;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.view.Surface;
import fd.b;
import fd.l;
import java.nio.ByteBuffer;
import ne.t0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f23725a;

    /* renamed from: b  reason: collision with root package name */
    private final g f23726b;

    /* renamed from: c  reason: collision with root package name */
    private final e f23727c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23728d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23729e;

    /* renamed from: f  reason: collision with root package name */
    private int f23730f;

    /* renamed from: fd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0314b implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final ii.r f23731a;

        /* renamed from: b  reason: collision with root package name */
        private final ii.r f23732b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f23733c;

        public C0314b(final int i10, boolean z10) {
            this(new ii.r() { // from class: fd.c
                @Override // ii.r
                public final Object get() {
                    return b.C0314b.b(i10);
                }
            }, new ii.r() { // from class: fd.d
                @Override // ii.r
                public final Object get() {
                    return b.C0314b.c(i10);
                }
            }, z10);
        }

        public static /* synthetic */ HandlerThread b(int i10) {
            return new HandlerThread(b.m(i10));
        }

        public static /* synthetic */ HandlerThread c(int i10) {
            return new HandlerThread(b.n(i10));
        }

        @Override // fd.l.b
        /* renamed from: d */
        public b a(l.a aVar) {
            Exception exc;
            MediaCodec mediaCodec;
            b bVar;
            String str = aVar.f23778a.f23786a;
            b bVar2 = null;
            try {
                t0.a("createCodec:" + str);
                mediaCodec = MediaCodec.createByCodecName(str);
                try {
                    bVar = new b(mediaCodec, (HandlerThread) this.f23731a.get(), (HandlerThread) this.f23732b.get(), this.f23733c);
                } catch (Exception e10) {
                    exc = e10;
                }
            } catch (Exception e11) {
                exc = e11;
                mediaCodec = null;
            }
            try {
                t0.c();
                bVar.p(aVar.f23779b, aVar.f23781d, aVar.f23782e, aVar.f23783f);
                return bVar;
            } catch (Exception e12) {
                exc = e12;
                bVar2 = bVar;
                if (bVar2 == null) {
                    if (mediaCodec != null) {
                        mediaCodec.release();
                    }
                } else {
                    bVar2.release();
                }
                throw exc;
            }
        }

        C0314b(ii.r rVar, ii.r rVar2, boolean z10) {
            this.f23731a = rVar;
            this.f23732b = rVar2;
            this.f23733c = z10;
        }
    }

    public static /* synthetic */ void i(b bVar, l.c cVar, MediaCodec mediaCodec, long j10, long j11) {
        bVar.getClass();
        cVar.a(bVar, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String m(int i10) {
        return o(i10, "ExoPlayer:MediaCodecAsyncAdapter:");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n(int i10) {
        return o(i10, "ExoPlayer:MediaCodecQueueingThread:");
    }

    private static String o(int i10, String str) {
        StringBuilder sb2 = new StringBuilder(str);
        if (i10 == 1) {
            sb2.append("Audio");
        } else if (i10 == 2) {
            sb2.append("Video");
        } else {
            sb2.append("Unknown(");
            sb2.append(i10);
            sb2.append(")");
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(MediaFormat mediaFormat, Surface surface, MediaCrypto mediaCrypto, int i10) {
        this.f23726b.h(this.f23725a);
        t0.a("configureCodec");
        this.f23725a.configure(mediaFormat, surface, mediaCrypto, i10);
        t0.c();
        this.f23727c.q();
        t0.a("startCodec");
        this.f23725a.start();
        t0.c();
        this.f23730f = 1;
    }

    private void q() {
        if (this.f23728d) {
            try {
                this.f23727c.r();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    @Override // fd.l
    public void a(int i10, int i11, qc.c cVar, long j10, int i12) {
        this.f23727c.n(i10, i11, cVar, j10, i12);
    }

    @Override // fd.l
    public void b(final l.c cVar, Handler handler) {
        q();
        this.f23725a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: fd.a
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                b.i(b.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // fd.l
    public void c(int i10) {
        q();
        this.f23725a.setVideoScalingMode(i10);
    }

    @Override // fd.l
    public void d(Surface surface) {
        q();
        this.f23725a.setOutputSurface(surface);
    }

    @Override // fd.l
    public boolean e() {
        return false;
    }

    @Override // fd.l
    public void f(int i10, long j10) {
        this.f23725a.releaseOutputBuffer(i10, j10);
    }

    @Override // fd.l
    public void flush() {
        this.f23727c.i();
        this.f23725a.flush();
        this.f23726b.e();
        this.f23725a.start();
    }

    @Override // fd.l
    public int g() {
        this.f23727c.l();
        return this.f23726b.c();
    }

    @Override // fd.l
    public ByteBuffer getInputBuffer(int i10) {
        return this.f23725a.getInputBuffer(i10);
    }

    @Override // fd.l
    public ByteBuffer getOutputBuffer(int i10) {
        return this.f23725a.getOutputBuffer(i10);
    }

    @Override // fd.l
    public MediaFormat getOutputFormat() {
        return this.f23726b.g();
    }

    @Override // fd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        this.f23727c.l();
        return this.f23726b.d(bufferInfo);
    }

    @Override // fd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f23727c.m(i10, i11, i12, j10, i13);
    }

    @Override // fd.l
    public void release() {
        try {
            if (this.f23730f == 1) {
                this.f23727c.p();
                this.f23726b.o();
            }
            this.f23730f = 2;
            if (!this.f23729e) {
                this.f23725a.release();
                this.f23729e = true;
            }
        } catch (Throwable th2) {
            if (!this.f23729e) {
                this.f23725a.release();
                this.f23729e = true;
            }
            throw th2;
        }
    }

    @Override // fd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f23725a.releaseOutputBuffer(i10, z10);
    }

    @Override // fd.l
    public void setParameters(Bundle bundle) {
        q();
        this.f23725a.setParameters(bundle);
    }

    private b(MediaCodec mediaCodec, HandlerThread handlerThread, HandlerThread handlerThread2, boolean z10) {
        this.f23725a = mediaCodec;
        this.f23726b = new g(handlerThread);
        this.f23727c = new e(mediaCodec, handlerThread2);
        this.f23728d = z10;
        this.f23730f = 0;
    }
}
