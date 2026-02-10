package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements oe.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final oe.n0 f13219d;

    /* renamed from: e  reason: collision with root package name */
    private final a f13220e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f13221i;

    /* renamed from: o  reason: collision with root package name */
    private oe.a0 f13222o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13223p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13224q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, oe.e eVar) {
        this.f13220e = aVar;
        this.f13219d = new oe.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f13221i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f13221i.isReady()) {
                if (!z10 && !this.f13221i.h()) {
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
            this.f13223p = true;
            if (this.f13224q) {
                this.f13219d.b();
                return;
            }
            return;
        }
        oe.a0 a0Var = (oe.a0) oe.a.e(this.f13222o);
        long v10 = a0Var.v();
        if (this.f13223p) {
            if (v10 < this.f13219d.v()) {
                this.f13219d.d();
                return;
            }
            this.f13223p = false;
            if (this.f13224q) {
                this.f13219d.b();
            }
        }
        this.f13219d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f13219d.c())) {
            this.f13219d.f(c10);
            this.f13220e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f13221i) {
            this.f13222o = null;
            this.f13221i = null;
            this.f13223p = true;
        }
    }

    public void b(v1 v1Var) {
        oe.a0 a0Var;
        oe.a0 C = v1Var.C();
        if (C != null && C != (a0Var = this.f13222o)) {
            if (a0Var == null) {
                this.f13222o = C;
                this.f13221i = v1Var;
                C.f(this.f13219d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        oe.a0 a0Var = this.f13222o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f13219d.c();
    }

    public void d(long j10) {
        this.f13219d.a(j10);
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        oe.a0 a0Var = this.f13222o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f13222o.c();
        }
        this.f13219d.f(playbackParameters);
    }

    public void g() {
        this.f13224q = true;
        this.f13219d.b();
    }

    public void h() {
        this.f13224q = false;
        this.f13219d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // oe.a0
    public long v() {
        if (this.f13223p) {
            return this.f13219d.v();
        }
        return ((oe.a0) oe.a.e(this.f13222o)).v();
    }
}
