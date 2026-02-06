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
    private final i0 f11861b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h f11862c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final k f11863a;

        public a(Context context, lc.s0 s0Var) {
            this.f11863a = new k(context, s0Var);
        }

        public SimpleExoPlayer a() {
            return this.f11863a.h();
        }

        public a b(le.e eVar) {
            this.f11863a.i(eVar);
            return this;
        }

        public a c(lc.a0 a0Var) {
            this.f11863a.j(a0Var);
            return this;
        }

        public a d(je.q qVar) {
            this.f11863a.k(qVar);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleExoPlayer(k kVar) {
        ne.h hVar = new ne.h();
        this.f11862c = hVar;
        try {
            this.f11861b = new i0(kVar, this);
            hVar.f();
        } catch (Throwable th2) {
            this.f11862c.f();
            throw th2;
        }
    }

    private void s0() {
        this.f11862c.c();
    }

    @Override // com.google.android.exoplayer2.Player
    public Player.Commands A() {
        s0();
        return this.f11861b.A();
    }

    public void A0(qd.r rVar, boolean z10, boolean z11) {
        s0();
        this.f11861b.W1(rVar, z10, z11);
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        s0();
        return this.f11861b.B();
    }

    public void B0() {
        s0();
        this.f11861b.X1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(boolean z10) {
        s0();
        this.f11861b.C(z10);
    }

    public void C0(qd.r rVar) {
        s0();
        this.f11861b.d2(rVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        s0();
        return this.f11861b.D();
    }

    public void D0(PlaybackParameters playbackParameters) {
        s0();
        this.f11861b.j2(playbackParameters);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        s0();
        return this.f11861b.E();
    }

    public void E0(int i10) {
        s0();
        this.f11861b.m2(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void F(TextureView textureView) {
        s0();
        this.f11861b.F(textureView);
    }

    public void F0(float f10) {
        s0();
        this.f11861b.o2(f10);
    }

    @Override // com.google.android.exoplayer2.Player
    public VideoSize G() {
        s0();
        return this.f11861b.G();
    }

    public void G0() {
        s0();
        this.f11861b.p2();
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        s0();
        return this.f11861b.I();
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        s0();
        return this.f11861b.J();
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        s0();
        return this.f11861b.K();
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        s0();
        this.f11861b.L(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        s0();
        return this.f11861b.M();
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        s0();
        return this.f11861b.O();
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        s0();
        return this.f11861b.Q();
    }

    @Override // com.google.android.exoplayer2.Player
    public void R(int i10) {
        s0();
        this.f11861b.R(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void S(SurfaceView surfaceView) {
        s0();
        this.f11861b.S(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public int T() {
        s0();
        return this.f11861b.T();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean U() {
        s0();
        return this.f11861b.U();
    }

    @Override // com.google.android.exoplayer2.Player
    public long V() {
        s0();
        return this.f11861b.V();
    }

    @Override // com.google.android.exoplayer2.Player
    public MediaMetadata Y() {
        s0();
        return this.f11861b.Y();
    }

    @Override // com.google.android.exoplayer2.Player
    public long Z() {
        s0();
        return this.f11861b.Z();
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        s0();
        return this.f11861b.a0();
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        s0();
        return this.f11861b.c();
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        s0();
        this.f11861b.d();
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean f() {
        s0();
        return this.f11861b.f();
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        s0();
        return this.f11861b.g();
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        s0();
        return this.f11861b.getDuration();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        s0();
        this.f11861b.h(bVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public void j(SurfaceView surfaceView) {
        s0();
        this.f11861b.j(surfaceView);
    }

    @Override // com.google.android.exoplayer2.Player
    public void k(int i10, int i11) {
        s0();
        this.f11861b.k(i10, i11);
    }

    @Override // com.google.android.exoplayer2.e
    public void k0(int i10, long j10, int i11, boolean z10) {
        s0();
        this.f11861b.k0(i10, j10, i11, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public void n(boolean z10) {
        s0();
        this.f11861b.n(z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public Tracks o() {
        s0();
        return this.f11861b.o();
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        s0();
        return this.f11861b.q();
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        s0();
        return this.f11861b.r();
    }

    public void r0(AnalyticsListener analyticsListener) {
        s0();
        this.f11861b.q1(analyticsListener);
    }

    public je.m t0() {
        s0();
        return this.f11861b.D1();
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        s0();
        return this.f11861b.u();
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: u0 */
    public j m() {
        s0();
        return this.f11861b.m();
    }

    @Override // com.google.android.exoplayer2.Player
    public Timeline v() {
        s0();
        return this.f11861b.v();
    }

    public int v0() {
        s0();
        return this.f11861b.K1();
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        s0();
        return this.f11861b.w();
    }

    public int w0(int i10) {
        s0();
        return this.f11861b.L1(i10);
    }

    public je.q x0() {
        s0();
        return this.f11861b.N1();
    }

    @Override // com.google.android.exoplayer2.Player
    public void y(TextureView textureView) {
        s0();
        this.f11861b.y(textureView);
    }

    public Format y0() {
        s0();
        return this.f11861b.O1();
    }

    public float z0() {
        s0();
        return this.f11861b.P1();
    }
}
