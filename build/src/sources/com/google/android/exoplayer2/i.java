package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements ne.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final ne.n0 f13559d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13560e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f13561i;

    /* renamed from: o  reason: collision with root package name */
    private ne.a0 f13562o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13563p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13564q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, ne.e eVar) {
        this.f13560e = aVar;
        this.f13559d = new ne.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f13561i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f13561i.isReady()) {
                if (!z10 && !this.f13561i.h()) {
                    return false;
                }
                return true;
            }
            return false;
        }
        return true;
    }

    private void j(boolean z10) {
        if (e(z10)) {
            this.f13563p = true;
            if (this.f13564q) {
                this.f13559d.b();
                return;
            }
            return;
        }
        ne.a0 a0Var = (ne.a0) ne.a.e(this.f13562o);
        long v10 = a0Var.v();
        if (this.f13563p) {
            if (v10 < this.f13559d.v()) {
                this.f13559d.d();
                return;
            }
            this.f13563p = false;
            if (this.f13564q) {
                this.f13559d.b();
            }
        }
        this.f13559d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f13559d.c())) {
            this.f13559d.f(c10);
            this.f13560e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f13561i) {
            this.f13562o = null;
            this.f13561i = null;
            this.f13563p = true;
        }
    }

    public void b(v1 v1Var) {
        ne.a0 a0Var;
        ne.a0 D = v1Var.D();
        if (D != null && D != (a0Var = this.f13562o)) {
            if (a0Var == null) {
                this.f13562o = D;
                this.f13561i = v1Var;
                D.f(this.f13559d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        ne.a0 a0Var = this.f13562o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f13559d.c();
    }

    public void d(long j10) {
        this.f13559d.a(j10);
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        ne.a0 a0Var = this.f13562o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f13562o.c();
        }
        this.f13559d.f(playbackParameters);
    }

    public void g() {
        this.f13564q = true;
        this.f13559d.b();
    }

    public void h() {
        this.f13564q = false;
        this.f13559d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // ne.a0
    public long v() {
        if (this.f13563p) {
            return this.f13559d.v();
        }
        return ((ne.a0) ne.a.e(this.f13562o)).v();
    }
}
