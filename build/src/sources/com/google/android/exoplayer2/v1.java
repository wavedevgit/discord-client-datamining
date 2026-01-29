package com.google.android.exoplayer2;

import com.google.android.exoplayer2.s1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface v1 extends s1.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a();

        void b();
    }

    void A(lc.r0 r0Var, Format[] formatArr, qd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12);

    long B();

    void C(long j10);

    ne.a0 D();

    boolean d();

    void disable();

    int e();

    String getName();

    int getState();

    boolean h();

    boolean isReady();

    void j();

    void o();

    boolean p();

    void q(int i10, mc.t1 t1Var);

    void release();

    void reset();

    void s(Format[] formatArr, qd.m0 m0Var, long j10, long j11);

    void start();

    void stop();

    w1 t();

    default void w(float f10, float f11) {
    }

    void y(long j10, long j11);

    qd.m0 z();
}
