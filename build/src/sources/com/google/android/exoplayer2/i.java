package com.google.android.exoplayer2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i implements ne.a0 {

    /* renamed from: d  reason: collision with root package name */
    private final ne.n0 f12156d;

    /* renamed from: e  reason: collision with root package name */
    private final a f12157e;

    /* renamed from: i  reason: collision with root package name */
    private v1 f12158i;

    /* renamed from: o  reason: collision with root package name */
    private ne.a0 f12159o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12160p = true;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12161q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void onPlaybackParametersChanged(PlaybackParameters playbackParameters);
    }

    public i(a aVar, ne.e eVar) {
        this.f12157e = aVar;
        this.f12156d = new ne.n0(eVar);
    }

    private boolean e(boolean z10) {
        v1 v1Var = this.f12158i;
        if (v1Var != null && !v1Var.d()) {
            if (!this.f12158i.isReady()) {
                if (!z10 && !this.f12158i.h()) {
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
            this.f12160p = true;
            if (this.f12161q) {
                this.f12156d.b();
                return;
            }
            return;
        }
        ne.a0 a0Var = (ne.a0) ne.a.e(this.f12159o);
        long v10 = a0Var.v();
        if (this.f12160p) {
            if (v10 < this.f12156d.v()) {
                this.f12156d.d();
                return;
            }
            this.f12160p = false;
            if (this.f12161q) {
                this.f12156d.b();
            }
        }
        this.f12156d.a(v10);
        PlaybackParameters c10 = a0Var.c();
        if (!c10.equals(this.f12156d.c())) {
            this.f12156d.f(c10);
            this.f12157e.onPlaybackParametersChanged(c10);
        }
    }

    public void a(v1 v1Var) {
        if (v1Var == this.f12158i) {
            this.f12159o = null;
            this.f12158i = null;
            this.f12160p = true;
        }
    }

    public void b(v1 v1Var) {
        ne.a0 a0Var;
        ne.a0 D = v1Var.D();
        if (D != null && D != (a0Var = this.f12159o)) {
            if (a0Var == null) {
                this.f12159o = D;
                this.f12158i = v1Var;
                D.f(this.f12156d.c());
                return;
            }
            throw j.h(new IllegalStateException("Multiple renderer media clocks enabled."));
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        ne.a0 a0Var = this.f12159o;
        if (a0Var != null) {
            return a0Var.c();
        }
        return this.f12156d.c();
    }

    public void d(long j10) {
        this.f12156d.a(j10);
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        ne.a0 a0Var = this.f12159o;
        if (a0Var != null) {
            a0Var.f(playbackParameters);
            playbackParameters = this.f12159o.c();
        }
        this.f12156d.f(playbackParameters);
    }

    public void g() {
        this.f12161q = true;
        this.f12156d.b();
    }

    public void h() {
        this.f12161q = false;
        this.f12156d.d();
    }

    public long i(boolean z10) {
        j(z10);
        return v();
    }

    @Override // ne.a0
    public long v() {
        if (this.f12160p) {
            return this.f12156d.v();
        }
        return ((ne.a0) ne.a.e(this.f12159o)).v();
    }
}
