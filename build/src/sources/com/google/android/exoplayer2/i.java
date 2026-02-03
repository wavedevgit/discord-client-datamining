package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements ne.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final ne.n0 f13188d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13189e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f13190i;

    /* renamed from: o  reason: collision with root package name */
    private ne.a0 f13191o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13192p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13193q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, ne.e eVar) {
        this.f13189e = aVar;
        this.f13188d = new ne.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f13190i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f13190i.isReady()) {
                if (!z10 && !this.f13190i.h()) {
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
            this.f13192p = true;
            if (this.f13193q) {
                this.f13188d.b();
                return;
            }
            return;
        }
        ne.a0 a0Var = (ne.a0) ne.a.e(this.f13191o);
        long v10 = a0Var.v();
        if (this.f13192p) {
            if (v10 < this.f13188d.v()) {
                this.f13188d.d();
                return;
            }
            this.f13192p = false;
            if (this.f13193q) {
                this.f13188d.b();
            }
        }
        this.f13188d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f13188d.c())) {
            this.f13188d.f(c10);
            this.f13189e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f13190i) {
            this.f13191o = null;
            this.f13190i = null;
            this.f13192p = true;
        }
    }

    public void b(v1 v1Var) {
        ne.a0 a0Var;
        ne.a0 D = v1Var.D();
        if (D != null && D != (a0Var = this.f13191o)) {
            if (a0Var == null) {
                this.f13191o = D;
                this.f13190i = v1Var;
                D.f(this.f13188d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        ne.a0 a0Var = this.f13191o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f13188d.c();
    }

    public void d(long j10) {
        this.f13188d.a(j10);
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        ne.a0 a0Var = this.f13191o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f13191o.c();
        }
        this.f13188d.f(playbackParameters);
    }

    public void g() {
        this.f13193q = true;
        this.f13188d.b();
    }

    public void h() {
        this.f13193q = false;
        this.f13188d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // ne.a0
    public long v() {
        if (this.f13192p) {
            return this.f13188d.v();
        }
        return ((ne.a0) ne.a.e(this.f13191o)).v();
    }
}
