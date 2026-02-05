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
    private final i0 f11962b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h f11963c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final k f11964a;

        public a(Context context, lc.s0 s0Var) {
            this.f11964a = new k(context, s0Var);
        }

        public SimpleExoPlayer a() {
            return this.f11964a.h();
        }

        public a b(le.e eVar) {
            this.f11964a.i(eVar);
            return this;
        }

        public a c(lc.a0 a0Var) {
            this.f11964a.j(a0Var);
            return this;
        }

        public a d(je.q qVar) {
            this.f11964a.k(qVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleExoPlayer(k kVar) {
        ne.h hVar = new ne.h();
        this.f11963c = hVar;
        try {
            this.f11962b = new i0(kVar, this);
            hVar.e();
        } catch (Throwable th2) {
            this.f11963c.e();
            throw th2;
        }
    }

    private void s0() {
        this.f11963c.b();
    }

    @Override // com.google.android.exoplayer2.Player
    public Player.Commands A() {
        s0();
        return this.f11962b.A();
    }

    public void A0(qd.r rVar, boolean z10, boolean z11) {
        s0();
        this.f11962b.W1(rVar, z10, z11);
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        s0();
        return this.f11962b.B();
    }

    public void B0() {
        s0();
        this.f11962b.X1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(boolean z10) {
        s0();
        this.f11962b.C(z10);
    }

    public void C0(qd.r rVar) {
        s0();
        this.f11962b.d2(rVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        s0();
        return this.f11962b.D();
    }

    public void D0(PlaybackParameters playbackParameters) {
        s0();
        this.f11962b.j2(playbackParameters);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        s0();
        return this.f11962b.E();
    }

    public void E0(int i10) {
        s0();
        this.f11962b.m2(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void F(TextureView textureView) {
        s0();
        this.f11962b.F(textureView);
    }

    public void F0(float f10) {
        s0();
        this.f11962b.o2(f10);
    }

    @Override // com.google.android.exoplayer2.Player
    public VideoSize G() {
        s0();
        return this.f11962b.G();
    }

    public void G0() {
        s0();
        this.f11962b.p2();
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        s0();
        return this.f11962b.I();
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        s0();
        return this.f11962b.J();
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        s0();
        return this.f11962b.K();
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        s0();
        this.f11962b.L(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        s0();
        return this.f11962b.M();
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        s0();
        return this.f11962b.O();
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        s0();
        return this.f11962b.Q();
    }

    @Override // com.google.android.exoplayer2.Player
    public void R(int i10) {
        s0();
        this.f11962b.R(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void S(SurfaceView surfaceView) {
        s0();
        this.f11962b.S(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public int T() {
        s0();
        return this.f11962b.T();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean U() {
        s0();
        return this.f11962b.U();
    }

    @Override // com.google.android.exoplayer2.Player
    public long V() {
        s0();
        return this.f11962b.V();
    }

    @Override // com.google.android.exoplayer2.Player
    public MediaMetadata Y() {
        s0();
        return this.f11962b.Y();
    }

    @Override // com.google.android.exoplayer2.Player
    public long Z() {
        s0();
        return this.f11962b.Z();
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        s0();
        return this.f11962b.a0();
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        s0();
        return this.f11962b.c();
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        s0();
        this.f11962b.d();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean f() {
        s0();
        return this.f11962b.f();
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        s0();
        return this.f11962b.g();
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        s0();
        return this.f11962b.getDuration();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        s0();
        this.f11962b.h(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public void j(SurfaceView surfaceView) {
        s0();
        this.f11962b.j(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public void k(int i10, int i11) {
        s0();
        this.f11962b.k(i10, i11);
    }

    @Override // com.google.android.exoplayer2.e
    public void k0(int i10, long j10, int i11, boolean z10) {
        s0();
        this.f11962b.k0(i10, j10, i11, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void n(boolean z10) {
        s0();
        this.f11962b.n(z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public Tracks o() {
        s0();
        return this.f11962b.o();
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        s0();
        return this.f11962b.q();
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        s0();
        return this.f11962b.r();
    }

    public void r0(AnalyticsListener analyticsListener) {
        s0();
        this.f11962b.q1(analyticsListener);
    }

    public je.m t0() {
        s0();
        return this.f11962b.D1();
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        s0();
        return this.f11962b.u();
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: u0 */
    public j m() {
        s0();
        return this.f11962b.m();
    }

    @Override // com.google.android.exoplayer2.Player
    public Timeline v() {
        s0();
        return this.f11962b.v();
    }

    public int v0() {
        s0();
        return this.f11962b.K1();
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        s0();
        return this.f11962b.w();
    }

    public int w0(int i10) {
        s0();
        return this.f11962b.L1(i10);
    }

    public je.q x0() {
        s0();
        return this.f11962b.N1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void y(TextureView textureView) {
        s0();
        this.f11962b.y(textureView);
    }

    public Format y0() {
        s0();
        return this.f11962b.O1();
    }

    public float z0() {
        s0();
        return this.f11962b.P1();
    }
}
