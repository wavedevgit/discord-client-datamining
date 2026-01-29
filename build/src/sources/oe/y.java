package oe;

import android.os.Handler;
import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.video.VideoSize;
import ne.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Handler f42695a;

        /* renamed from: b  reason: collision with root package name */
        private final y f42696b;

        public a(Handler handler, y yVar) {
            Handler handler2;
            if (yVar != null) {
                handler2 = (Handler) ne.a.e(handler);
            } else {
                handler2 = null;
            }
            this.f42695a = handler2;
            this.f42696b = yVar;
        }

        public static /* synthetic */ void c(a aVar, DecoderCounters decoderCounters) {
            aVar.getClass();
            decoderCounters.c();
            ((y) w0.j(aVar.f42696b)).k(decoderCounters);
        }

        public static /* synthetic */ void i(a aVar, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            ((y) w0.j(aVar.f42696b)).x(format);
            ((y) w0.j(aVar.f42696b)).h(format, decoderReuseEvaluation);
        }

        public void k(final String str, final long j10, final long j11) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.u
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).d(str, j10, j11);
                    }
                });
            }
        }

        public void l(final String str) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).b(str);
                    }
                });
            }
        }

        public void m(final DecoderCounters decoderCounters) {
            decoderCounters.c();
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        y.a.c(y.a.this, decoderCounters);
                    }
                });
            }
        }

        public void n(final int i10, final long j10) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).m(i10, j10);
                    }
                });
            }
        }

        public void o(final DecoderCounters decoderCounters) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.v
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).p(decoderCounters);
                    }
                });
            }
        }

        public void p(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        y.a.i(y.a.this, format, decoderReuseEvaluation);
                    }
                });
            }
        }

        public void q(final Object obj) {
            if (this.f42695a != null) {
                final long elapsedRealtime = SystemClock.elapsedRealtime();
                this.f42695a.post(new Runnable() { // from class: oe.q
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).o(obj, elapsedRealtime);
                    }
                });
            }
        }

        public void r(final long j10, final int i10) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.x
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).s(j10, i10);
                    }
                });
            }
        }

        public void s(final Exception exc) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).j(exc);
                    }
                });
            }
        }

        public void t(final VideoSize videoSize) {
            Handler handler = this.f42695a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: oe.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((y) w0.j(y.a.this.f42696b)).onVideoSizeChanged(videoSize);
                    }
                });
            }
        }
    }

    void b(String str);

    void d(String str, long j10, long j11);

    void h(Format format, DecoderReuseEvaluation decoderReuseEvaluation);

    void j(Exception exc);

    void k(DecoderCounters decoderCounters);

    void m(int i10, long j10);

    void o(Object obj, long j10);

    void onVideoSizeChanged(VideoSize videoSize);

    void p(DecoderCounters decoderCounters);

    void s(long j10, int i10);

    default void x(Format format) {
    }
}
