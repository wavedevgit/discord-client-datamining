package gd;

import android.media.MediaCodec;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.view.Surface;
import gd.b;
import gd.l;
import java.nio.ByteBuffer;
import oe.t0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final MediaCodec f24136a;

    /* renamed from: b  reason: collision with root package name */
    private final g f24137b;

    /* renamed from: c  reason: collision with root package name */
    private final e f24138c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24139d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f24140e;

    /* renamed from: f  reason: collision with root package name */
    private int f24141f;

    /* renamed from: gd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0374b implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final ni.r f24142a;

        /* renamed from: b  reason: collision with root package name */
        private final ni.r f24143b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f24144c;

        public C0374b(final int i10, boolean z10) {
            this(new ni.r() { // from class: gd.c
                @Override // ni.r
                public final Object get() {
                    return b.C0374b.b(i10);
                }
            }, new ni.r() { // from class: gd.d
                @Override // ni.r
                public final Object get() {
                    return b.C0374b.c(i10);
                }
            }, z10);
        }

        public static /* synthetic */ HandlerThread b(int i10) {
            return new HandlerThread(b.m(i10));
        }

        public static /* synthetic */ HandlerThread c(int i10) {
            return new HandlerThread(b.n(i10));
        }

        @Override // gd.l.b
        /* renamed from: d */
        public b a(l.a aVar) {
            Exception exc;
            MediaCodec mediaCodec;
            b bVar;
            String str = aVar.f24189a.f24197a;
            b bVar2 = null;
            try {
                t0.a("createCodec:" + str);
                mediaCodec = MediaCodec.createByCodecName(str);
                try {
                    bVar = new b(mediaCodec, (HandlerThread) this.f24142a.get(), (HandlerThread) this.f24143b.get(), this.f24144c);
                } catch (Exception e10) {
                    exc = e10;
                }
            } catch (Exception e11) {
                exc = e11;
                mediaCodec = null;
            }
            try {
                t0.c();
                bVar.p(aVar.f24190b, aVar.f24192d, aVar.f24193e, aVar.f24194f);
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

        C0374b(ni.r rVar, ni.r rVar2, boolean z10) {
            this.f24142a = rVar;
            this.f24143b = rVar2;
            this.f24144c = z10;
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
        this.f24137b.h(this.f24136a);
        t0.a("configureCodec");
        this.f24136a.configure(mediaFormat, surface, mediaCrypto, i10);
        t0.c();
        this.f24138c.q();
        t0.a("startCodec");
        this.f24136a.start();
        t0.c();
        this.f24141f = 1;
    }

    private void q() {
        if (this.f24139d) {
            try {
                this.f24138c.r();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    @Override // gd.l
    public void a(int i10, int i11, rc.c cVar, long j10, int i12) {
        this.f24138c.n(i10, i11, cVar, j10, i12);
    }

    @Override // gd.l
    public void b(int i10) {
        q();
        this.f24136a.setVideoScalingMode(i10);
    }

    @Override // gd.l
    public void c(Surface surface) {
        q();
        this.f24136a.setOutputSurface(surface);
    }

    @Override // gd.l
    public boolean d() {
        return false;
    }

    @Override // gd.l
    public void e(final l.c cVar, Handler handler) {
        q();
        this.f24136a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: gd.a
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                b.i(b.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // gd.l
    public void f(int i10, long j10) {
        this.f24136a.releaseOutputBuffer(i10, j10);
    }

    @Override // gd.l
    public void flush() {
        this.f24138c.i();
        this.f24136a.flush();
        this.f24137b.e();
        this.f24136a.start();
    }

    @Override // gd.l
    public int g() {
        this.f24138c.l();
        return this.f24137b.c();
    }

    @Override // gd.l
    public ByteBuffer getInputBuffer(int i10) {
        return this.f24136a.getInputBuffer(i10);
    }

    @Override // gd.l
    public ByteBuffer getOutputBuffer(int i10) {
        return this.f24136a.getOutputBuffer(i10);
    }

    @Override // gd.l
    public MediaFormat getOutputFormat() {
        return this.f24137b.g();
    }

    @Override // gd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        this.f24138c.l();
        return this.f24137b.d(bufferInfo);
    }

    @Override // gd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f24138c.m(i10, i11, i12, j10, i13);
    }

    @Override // gd.l
    public void release() {
        try {
            if (this.f24141f == 1) {
                this.f24138c.p();
                this.f24137b.o();
            }
            this.f24141f = 2;
            if (!this.f24140e) {
                this.f24136a.release();
                this.f24140e = true;
            }
        } catch (Throwable th2) {
            if (!this.f24140e) {
                this.f24136a.release();
                this.f24140e = true;
            }
            throw th2;
        }
    }

    @Override // gd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f24136a.releaseOutputBuffer(i10, z10);
    }

    @Override // gd.l
    public void setParameters(Bundle bundle) {
        q();
        this.f24136a.setParameters(bundle);
    }

    private b(MediaCodec mediaCodec, HandlerThread handlerThread, HandlerThread handlerThread2, boolean z10) {
        this.f24136a = mediaCodec;
        this.f24137b = new g(handlerThread);
        this.f24138c = new e(mediaCodec, handlerThread2);
        this.f24139d = z10;
        this.f24141f = 0;
    }
}
