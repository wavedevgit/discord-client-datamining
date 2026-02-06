package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements ne.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final ne.n0 f12502d;

    /* renamed from: e  reason: collision with root package name */
    private final a f12503e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f12504i;

    /* renamed from: o  reason: collision with root package name */
    private ne.a0 f12505o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12506p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12507q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, ne.e eVar) {
        this.f12503e = aVar;
        this.f12502d = new ne.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f12504i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f12504i.isReady()) {
                if (!z10 && !this.f12504i.h()) {
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
            this.f12506p = true;
            if (this.f12507q) {
                this.f12502d.b();
                return;
            }
            return;
        }
        ne.a0 a0Var = (ne.a0) ne.a.e(this.f12505o);
        long v10 = a0Var.v();
        if (this.f12506p) {
            if (v10 < this.f12502d.v()) {
                this.f12502d.d();
                return;
            }
            this.f12506p = false;
            if (this.f12507q) {
                this.f12502d.b();
            }
        }
        this.f12502d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f12502d.c())) {
            this.f12502d.f(c10);
            this.f12503e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f12504i) {
            this.f12505o = null;
            this.f12504i = null;
            this.f12506p = true;
        }
    }

    public void b(v1 v1Var) {
        ne.a0 a0Var;
        ne.a0 D = v1Var.D();
        if (D != null && D != (a0Var = this.f12505o)) {
            if (a0Var == null) {
                this.f12505o = D;
                this.f12504i = v1Var;
                D.f(this.f12502d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        ne.a0 a0Var = this.f12505o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f12502d.c();
    }

    public void d(long j10) {
        this.f12502d.a(j10);
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        ne.a0 a0Var = this.f12505o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f12505o.c();
        }
        this.f12502d.f(playbackParameters);
    }

    public void g() {
        this.f12507q = true;
        this.f12502d.b();
    }

    public void h() {
        this.f12507q = false;
        this.f12502d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // ne.a0
    public long v() {
        if (this.f12506p) {
            return this.f12502d.v();
        }
        return ((ne.a0) ne.a.e(this.f12505o)).v();
    }
}
