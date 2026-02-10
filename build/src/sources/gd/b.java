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
    private final MediaCodec f25436a;

    /* renamed from: b  reason: collision with root package name */
    private final g f25437b;

    /* renamed from: c  reason: collision with root package name */
    private final e f25438c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25439d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25440e;

    /* renamed from: f  reason: collision with root package name */
    private int f25441f;

    /* renamed from: gd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0345b implements l.b {

        /* renamed from: a  reason: collision with root package name */
        private final pi.r f25442a;

        /* renamed from: b  reason: collision with root package name */
        private final pi.r f25443b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f25444c;

        public C0345b(final int i10, boolean z10) {
            this(new pi.r() { // from class: gd.c
                @Override // pi.r
                public final Object get() {
                    return b.C0345b.b(i10);
                }
            }, new pi.r() { // from class: gd.d
                @Override // pi.r
                public final Object get() {
                    return b.C0345b.c(i10);
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
            String str = aVar.f25489a.f25497a;
            b bVar2 = null;
            try {
                t0.a("createCodec:" + str);
                mediaCodec = MediaCodec.createByCodecName(str);
                try {
                    bVar = new b(mediaCodec, (HandlerThread) this.f25442a.get(), (HandlerThread) this.f25443b.get(), this.f25444c);
                } catch (Exception e10) {
                    exc = e10;
                }
            } catch (Exception e11) {
                exc = e11;
                mediaCodec = null;
            }
            try {
                t0.c();
                bVar.p(aVar.f25490b, aVar.f25492d, aVar.f25493e, aVar.f25494f);
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

        C0345b(pi.r rVar, pi.r rVar2, boolean z10) {
            this.f25442a = rVar;
            this.f25443b = rVar2;
            this.f25444c = z10;
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
        this.f25437b.h(this.f25436a);
        t0.a("configureCodec");
        this.f25436a.configure(mediaFormat, surface, mediaCrypto, i10);
        t0.c();
        this.f25438c.q();
        t0.a("startCodec");
        this.f25436a.start();
        t0.c();
        this.f25441f = 1;
    }

    private void q() {
        if (this.f25439d) {
            try {
                this.f25438c.r();
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                throw new IllegalStateException(e10);
            }
        }
    }

    @Override // gd.l
    public void a(int i10, int i11, rc.c cVar, long j10, int i12) {
        this.f25438c.n(i10, i11, cVar, j10, i12);
    }

    @Override // gd.l
    public void b(int i10) {
        q();
        this.f25436a.setVideoScalingMode(i10);
    }

    @Override // gd.l
    public void c(Surface surface) {
        q();
        this.f25436a.setOutputSurface(surface);
    }

    @Override // gd.l
    public boolean d() {
        return false;
    }

    @Override // gd.l
    public void e(final l.c cVar, Handler handler) {
        q();
        this.f25436a.setOnFrameRenderedListener(new MediaCodec.OnFrameRenderedListener() { // from class: gd.a
            @Override // android.media.MediaCodec.OnFrameRenderedListener
            public final void onFrameRendered(MediaCodec mediaCodec, long j10, long j11) {
                b.i(b.this, cVar, mediaCodec, j10, j11);
            }
        }, handler);
    }

    @Override // gd.l
    public void f(int i10, long j10) {
        this.f25436a.releaseOutputBuffer(i10, j10);
    }

    @Override // gd.l
    public void flush() {
        this.f25438c.i();
        this.f25436a.flush();
        this.f25437b.e();
        this.f25436a.start();
    }

    @Override // gd.l
    public int g() {
        this.f25438c.l();
        return this.f25437b.c();
    }

    @Override // gd.l
    public ByteBuffer getInputBuffer(int i10) {
        return this.f25436a.getInputBuffer(i10);
    }

    @Override // gd.l
    public ByteBuffer getOutputBuffer(int i10) {
        return this.f25436a.getOutputBuffer(i10);
    }

    @Override // gd.l
    public MediaFormat getOutputFormat() {
        return this.f25437b.g();
    }

    @Override // gd.l
    public int h(MediaCodec.BufferInfo bufferInfo) {
        this.f25438c.l();
        return this.f25437b.d(bufferInfo);
    }

    @Override // gd.l
    public void queueInputBuffer(int i10, int i11, int i12, long j10, int i13) {
        this.f25438c.m(i10, i11, i12, j10, i13);
    }

    @Override // gd.l
    public void release() {
        try {
            if (this.f25441f == 1) {
                this.f25438c.p();
                this.f25437b.o();
            }
            this.f25441f = 2;
            if (!this.f25440e) {
                this.f25436a.release();
                this.f25440e = true;
            }
        } catch (Throwable th2) {
            if (!this.f25440e) {
                this.f25436a.release();
                this.f25440e = true;
            }
            throw th2;
        }
    }

    @Override // gd.l
    public void releaseOutputBuffer(int i10, boolean z10) {
        this.f25436a.releaseOutputBuffer(i10, z10);
    }

    @Override // gd.l
    public void setParameters(Bundle bundle) {
        q();
        this.f25436a.setParameters(bundle);
    }

    private b(MediaCodec mediaCodec, HandlerThread handlerThread, HandlerThread handlerThread2, boolean z10) {
        this.f25436a = mediaCodec;
        this.f25437b = new g(handlerThread);
        this.f25438c = new e(mediaCodec, handlerThread2);
        this.f25439d = z10;
        this.f25441f = 0;
    }
}
