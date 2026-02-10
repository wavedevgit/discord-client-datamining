package com.google.android.exoplayer2;

import com.google.android.exoplayer2.s1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface v1 extends s1.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a();

        void b();
    }

    long A();

    void B(long j10);

    oe.a0 C();

    void E(mc.r0 r0Var, Format[] formatArr, rd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12);

    boolean d();

    void disable();

    int e();

    String getName();

    int getState();

    boolean h();

    boolean isReady();

    void j(Format[] formatArr, rd.m0 m0Var, long j10, long j11);

    void k();

    void p(int i10, nc.t1 t1Var);

    void q();

    boolean r();

    void release();

    void reset();

    void start();

    void stop();

    w1 t();

    default void w(float f10, float f11) {
    }

    void y(long j10, long j11);

    rd.m0 z();
}
