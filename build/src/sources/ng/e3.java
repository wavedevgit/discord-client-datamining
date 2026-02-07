package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f39827a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f39829c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f39831e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f39832f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f39833g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f39828b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f39830d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f39827a = c3.i(c3Var);
        this.f39829c = c3.k(c3Var);
        this.f39831e = c3.j(c3Var);
        this.f39832f = c3.a(c3Var);
        this.f39833g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f39832f;
    }

    public final i1 b() {
        return this.f39833g;
    }

    public final xe c() {
        return this.f39827a;
    }

    public final wj d() {
        return this.f39831e;
    }

    public final Boolean e() {
        return this.f39829c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f39827a, e3Var.f39827a) && gf.o.a(null, null) && gf.o.a(this.f39829c, e3Var.f39829c) && gf.o.a(null, null) && gf.o.a(this.f39831e, e3Var.f39831e) && gf.o.a(this.f39832f, e3Var.f39832f) && gf.o.a(this.f39833g, e3Var.f39833g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f39827a, null, this.f39829c, null, this.f39831e, this.f39832f, this.f39833g);
    }
}
