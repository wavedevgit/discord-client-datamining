package com.google.android.exoplayer2;

import android.content.Context;
import android.os.Looper;
import android.view.SurfaceView;
import android.view.TextureView;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.video.VideoSize;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SimpleExoPlayer extends e implements Player {

    /* renamed from: b  reason: collision with root package name */
    private final i0 f12579b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h f12580c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final k f12581a;

        public a(Context context, mc.s0 s0Var) {
            this.f12581a = new k(context, s0Var);
        }

        public SimpleExoPlayer a() {
            return this.f12581a.h();
        }

        public a b(me.e eVar) {
            this.f12581a.i(eVar);
            return this;
        }

        public a c(mc.a0 a0Var) {
            this.f12581a.j(a0Var);
            return this;
        }

        public a d(ke.q qVar) {
            this.f12581a.k(qVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleExoPlayer(k kVar) {
        oe.h hVar = new oe.h();
        this.f12580c = hVar;
        try {
            this.f12579b = new i0(kVar, this);
            hVar.f();
        } catch (Throwable th2) {
            this.f12580c.f();
            throw th2;
        }
    }

    private void s0() {
        this.f12580c.c();
    }

    @Override // com.google.android.exoplayer2.Player
    public Player.Commands A() {
        s0();
        return this.f12579b.A();
    }

    public void A0(rd.r rVar, boolean z10, boolean z11) {
        s0();
        this.f12579b.W1(rVar, z10, z11);
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        s0();
        return this.f12579b.B();
    }

    public void B0() {
        s0();
        this.f12579b.X1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(boolean z10) {
        s0();
        this.f12579b.C(z10);
    }

    public void C0(rd.r rVar) {
        s0();
        this.f12579b.d2(rVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        s0();
        return this.f12579b.D();
    }

    public void D0(PlaybackParameters playbackParameters) {
        s0();
        this.f12579b.j2(playbackParameters);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        s0();
        return this.f12579b.E();
    }

    public void E0(int i10) {
        s0();
        this.f12579b.m2(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void F(TextureView textureView) {
        s0();
        this.f12579b.F(textureView);
    }

    public void F0(float f10) {
        s0();
        this.f12579b.o2(f10);
    }

    @Override // com.google.android.exoplayer2.Player
    public VideoSize G() {
        s0();
        return this.f12579b.G();
    }

    public void G0() {
        s0();
        this.f12579b.p2();
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        s0();
        return this.f12579b.I();
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        s0();
        return this.f12579b.J();
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        s0();
        return this.f12579b.K();
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        s0();
        this.f12579b.L(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        s0();
        return this.f12579b.M();
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        s0();
        return this.f12579b.O();
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        s0();
        return this.f12579b.Q();
    }

    @Override // com.google.android.exoplayer2.Player
    public void R(int i10) {
        s0();
        this.f12579b.R(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void S(SurfaceView surfaceView) {
        s0();
        this.f12579b.S(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public int T() {
        s0();
        return this.f12579b.T();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean U() {
        s0();
        return this.f12579b.U();
    }

    @Override // com.google.android.exoplayer2.Player
    public long V() {
        s0();
        return this.f12579b.V();
    }

    @Override // com.google.android.exoplayer2.Player
    public MediaMetadata Y() {
        s0();
        return this.f12579b.Y();
    }

    @Override // com.google.android.exoplayer2.Player
    public long Z() {
        s0();
        return this.f12579b.Z();
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        s0();
        return this.f12579b.a0();
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        s0();
        return this.f12579b.c();
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        s0();
        this.f12579b.d();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean f() {
        s0();
        return this.f12579b.f();
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        s0();
        return this.f12579b.g();
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        s0();
        return this.f12579b.getDuration();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        s0();
        this.f12579b.h(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public void j(SurfaceView surfaceView) {
        s0();
        this.f12579b.j(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public void k(int i10, int i11) {
        s0();
        this.f12579b.k(i10, i11);
    }

    @Override // com.google.android.exoplayer2.e
    public void k0(int i10, long j10, int i11, boolean z10) {
        s0();
        this.f12579b.k0(i10, j10, i11, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void n(boolean z10) {
        s0();
        this.f12579b.n(z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public Tracks o() {
        s0();
        return this.f12579b.o();
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        s0();
        return this.f12579b.q();
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        s0();
        return this.f12579b.r();
    }

    public void r0(AnalyticsListener analyticsListener) {
        s0();
        this.f12579b.q1(analyticsListener);
    }

    public ke.m t0() {
        s0();
        return this.f12579b.D1();
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        s0();
        return this.f12579b.u();
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: u0 */
    public j m() {
        s0();
        return this.f12579b.m();
    }

    @Override // com.google.android.exoplayer2.Player
    public Timeline v() {
        s0();
        return this.f12579b.v();
    }

    public int v0() {
        s0();
        return this.f12579b.K1();
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        s0();
        return this.f12579b.w();
    }

    public int w0(int i10) {
        s0();
        return this.f12579b.L1(i10);
    }

    public ke.q x0() {
        s0();
        return this.f12579b.N1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void y(TextureView textureView) {
        s0();
        this.f12579b.y(textureView);
    }

    public Format y0() {
        s0();
        return this.f12579b.O1();
    }

    public float z0() {
        s0();
        return this.f12579b.P1();
    }
}
