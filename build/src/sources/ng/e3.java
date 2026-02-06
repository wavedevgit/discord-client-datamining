package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f39779a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f39781c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f39783e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f39784f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f39785g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f39780b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f39782d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f39779a = c3.i(c3Var);
        this.f39781c = c3.k(c3Var);
        this.f39783e = c3.j(c3Var);
        this.f39784f = c3.a(c3Var);
        this.f39785g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f39784f;
    }

    public final i1 b() {
        return this.f39785g;
    }

    public final xe c() {
        return this.f39779a;
    }

    public final wj d() {
        return this.f39783e;
    }

    public final Boolean e() {
        return this.f39781c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f39779a, e3Var.f39779a) && gf.o.a(null, null) && gf.o.a(this.f39781c, e3Var.f39781c) && gf.o.a(null, null) && gf.o.a(this.f39783e, e3Var.f39783e) && gf.o.a(this.f39784f, e3Var.f39784f) && gf.o.a(this.f39785g, e3Var.f39785g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f39779a, null, this.f39781c, null, this.f39783e, this.f39784f, this.f39785g);
    }
}
