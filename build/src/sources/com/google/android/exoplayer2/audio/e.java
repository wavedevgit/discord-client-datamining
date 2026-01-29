package com.google.android.exoplayer2.audio;

import android.os.Handler;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.audio.e;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Handler f13243a;

        /* renamed from: b  reason: collision with root package name */
        private final e f13244b;

        public a(Handler handler, e eVar) {
            Handler handler2;
            if (eVar != null) {
                handler2 = (Handler) ne.a.e(handler);
            } else {
                handler2 = null;
            }
            this.f13243a = handler2;
            this.f13244b = eVar;
        }

        public static /* synthetic */ void d(a aVar, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            ((e) w0.j(aVar.f13244b)).C(format);
            ((e) w0.j(aVar.f13244b)).n(format, decoderReuseEvaluation);
        }

        public static /* synthetic */ void i(a aVar, DecoderCounters decoderCounters) {
            aVar.getClass();
            decoderCounters.c();
            ((e) w0.j(aVar.f13244b)).l(decoderCounters);
        }

        public void k(final Exception exc) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).q(exc);
                    }
                });
            }
        }

        public void l(final Exception exc) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).a(exc);
                    }
                });
            }
        }

        public void m(final String str, final long j10, final long j11) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).f(str, j10, j11);
                    }
                });
            }
        }

        public void n(final String str) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).e(str);
                    }
                });
            }
        }

        public void o(final DecoderCounters decoderCounters) {
            decoderCounters.c();
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.m
                    @Override // java.lang.Runnable
                    public final void run() {
                        e.a.i(e.a.this, decoderCounters);
                    }
                });
            }
        }

        public void p(final DecoderCounters decoderCounters) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.l
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).c(decoderCounters);
                    }
                });
            }
        }

        public void q(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.n
                    @Override // java.lang.Runnable
                    public final void run() {
                        e.a.d(e.a.this, format, decoderReuseEvaluation);
                    }
                });
            }
        }

        public void r(final long j10) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).i(j10);
                    }
                });
            }
        }

        public void s(final boolean z10) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).onSkipSilenceEnabledChanged(z10);
                    }
                });
            }
        }

        public void t(final int i10, final long j10, final long j11) {
            Handler handler = this.f13243a;
            if (handler != null) {
                handler.post(new Runnable() { // from class: nc.g
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((com.google.android.exoplayer2.audio.e) w0.j(e.a.this.f13244b)).r(i10, j10, j11);
                    }
                });
            }
        }
    }

    default void C(Format format) {
    }

    void a(Exception exc);

    void c(DecoderCounters decoderCounters);

    void e(String str);

    void f(String str, long j10, long j11);

    void i(long j10);

    void l(DecoderCounters decoderCounters);

    void n(Format format, DecoderReuseEvaluation decoderReuseEvaluation);

    void onSkipSilenceEnabledChanged(boolean z10);

    void q(Exception exc);

    void r(int i10, long j10, long j11);
}
