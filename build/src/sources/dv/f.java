package dv;

import gv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements jv.b {

    /* renamed from: a  reason: collision with root package name */
    public final w f21102a;

    /* renamed from: b  reason: collision with root package name */
    public final char f21103b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f21104c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f21105d;

    /* renamed from: e  reason: collision with root package name */
    public f f21106e;

    /* renamed from: f  reason: collision with root package name */
    public f f21107f;

    /* renamed from: g  reason: collision with root package name */
    public int f21108g = 1;

    /* renamed from: h  reason: collision with root package name */
    public int f21109h = 1;

    public f(w wVar, char c10, boolean z10, boolean z11, f fVar) {
        this.f21102a = wVar;
        this.f21103b = c10;
        this.f21104c = z10;
        this.f21105d = z11;
        this.f21106e = fVar;
    }

    @Override // jv.b
    public boolean a() {
        return this.f21105d;
    }

    @Override // jv.b
    public int b() {
        return this.f21109h;
    }

    @Override // jv.b
    public boolean c() {
        return this.f21104c;
    }

    @Override // jv.b
    public int length() {
        return this.f21108g;
    }
}
