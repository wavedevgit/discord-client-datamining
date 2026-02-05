package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements ne.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final ne.n0 f12541d;

    /* renamed from: e  reason: collision with root package name */
    private final a f12542e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f12543i;

    /* renamed from: o  reason: collision with root package name */
    private ne.a0 f12544o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12545p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12546q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, ne.e eVar) {
        this.f12542e = aVar;
        this.f12541d = new ne.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f12543i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f12543i.isReady()) {
                if (!z10 && !this.f12543i.h()) {
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
            this.f12545p = true;
            if (this.f12546q) {
                this.f12541d.b();
                return;
            }
            return;
        }
        ne.a0 a0Var = (ne.a0) ne.a.e(this.f12544o);
        long v10 = a0Var.v();
        if (this.f12545p) {
            if (v10 < this.f12541d.v()) {
                this.f12541d.d();
                return;
            }
            this.f12545p = false;
            if (this.f12546q) {
                this.f12541d.b();
            }
        }
        this.f12541d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f12541d.c())) {
            this.f12541d.f(c10);
            this.f12542e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f12543i) {
            this.f12544o = null;
            this.f12543i = null;
            this.f12545p = true;
        }
    }

    public void b(v1 v1Var) {
        ne.a0 a0Var;
        ne.a0 D = v1Var.D();
        if (D != null && D != (a0Var = this.f12544o)) {
            if (a0Var == null) {
                this.f12544o = D;
                this.f12543i = v1Var;
                D.f(this.f12541d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        ne.a0 a0Var = this.f12544o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f12541d.c();
    }

    public void d(long j10) {
        this.f12541d.a(j10);
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        ne.a0 a0Var = this.f12544o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f12544o.c();
        }
        this.f12541d.f(playbackParameters);
    }

    public void g() {
        this.f12546q = true;
        this.f12541d.b();
    }

    public void h() {
        this.f12546q = false;
        this.f12541d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // ne.a0
    public long v() {
        if (this.f12545p) {
            return this.f12541d.v();
        }
        return ((ne.a0) ne.a.e(this.f12544o)).v();
    }
}
