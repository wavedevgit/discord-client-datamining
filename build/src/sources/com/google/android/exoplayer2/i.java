package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements oe.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final oe.n0 f12642d;

    /* renamed from: e  reason: collision with root package name */
    private final a f12643e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f12644i;

    /* renamed from: o  reason: collision with root package name */
    private oe.a0 f12645o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12646p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12647q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, oe.e eVar) {
        this.f12643e = aVar;
        this.f12642d = new oe.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f12644i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f12644i.isReady()) {
                if (!z10 && !this.f12644i.h()) {
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
            this.f12646p = true;
            if (this.f12647q) {
                this.f12642d.b();
                return;
            }
            return;
        }
        oe.a0 a0Var = (oe.a0) oe.a.e(this.f12645o);
        long v10 = a0Var.v();
        if (this.f12646p) {
            if (v10 < this.f12642d.v()) {
                this.f12642d.d();
                return;
            }
            this.f12646p = false;
            if (this.f12647q) {
                this.f12642d.b();
            }
        }
        this.f12642d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f12642d.c())) {
            this.f12642d.f(c10);
            this.f12643e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f12644i) {
            this.f12645o = null;
            this.f12644i = null;
            this.f12646p = true;
        }
    }

    public void b(v1 v1Var) {
        oe.a0 a0Var;
        oe.a0 C = v1Var.C();
        if (C != null && C != (a0Var = this.f12645o)) {
            if (a0Var == null) {
                this.f12645o = C;
                this.f12644i = v1Var;
                C.f(this.f12642d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // oe.a0
    public PlaybackParameters c() {
        oe.a0 a0Var = this.f12645o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f12642d.c();
    }

    public void d(long j10) {
        this.f12642d.a(j10);
    }

    @Override // oe.a0
    public void f(PlaybackParameters playbackParameters) {
        oe.a0 a0Var = this.f12645o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f12645o.c();
        }
        this.f12642d.f(playbackParameters);
    }

    public void g() {
        this.f12647q = true;
        this.f12642d.b();
    }

    public void h() {
        this.f12647q = false;
        this.f12642d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // oe.a0
    public long v() {
        if (this.f12646p) {
            return this.f12642d.v();
        }
        return ((oe.a0) oe.a.e(this.f12645o)).v();
    }
}
