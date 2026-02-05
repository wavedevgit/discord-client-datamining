package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f37616a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f37618c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f37620e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f37621f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f37622g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f37617b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f37619d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f37616a = c3.i(c3Var);
        this.f37618c = c3.k(c3Var);
        this.f37620e = c3.j(c3Var);
        this.f37621f = c3.a(c3Var);
        this.f37622g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f37621f;
    }

    public final i1 b() {
        return this.f37622g;
    }

    public final xe c() {
        return this.f37616a;
    }

    public final wj d() {
        return this.f37620e;
    }

    public final Boolean e() {
        return this.f37618c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f37616a, e3Var.f37616a) && gf.o.a(null, null) && gf.o.a(this.f37618c, e3Var.f37618c) && gf.o.a(null, null) && gf.o.a(this.f37620e, e3Var.f37620e) && gf.o.a(this.f37621f, e3Var.f37621f) && gf.o.a(this.f37622g, e3Var.f37622g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f37616a, null, this.f37618c, null, this.f37620e, this.f37621f, this.f37622g);
    }
}
