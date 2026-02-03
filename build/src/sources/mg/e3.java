package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f38157a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f38159c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f38161e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f38162f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f38163g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f38158b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f38160d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f38157a = c3.i(c3Var);
        this.f38159c = c3.k(c3Var);
        this.f38161e = c3.j(c3Var);
        this.f38162f = c3.a(c3Var);
        this.f38163g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f38162f;
    }

    public final i1 b() {
        return this.f38163g;
    }

    public final xe c() {
        return this.f38157a;
    }

    public final wj d() {
        return this.f38161e;
    }

    public final Boolean e() {
        return this.f38159c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (gf.o.a(this.f38157a, e3Var.f38157a) && gf.o.a(null, null) && gf.o.a(this.f38159c, e3Var.f38159c) && gf.o.a(null, null) && gf.o.a(this.f38161e, e3Var.f38161e) && gf.o.a(this.f38162f, e3Var.f38162f) && gf.o.a(this.f38163g, e3Var.f38163g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38157a, null, this.f38159c, null, this.f38161e, this.f38162f, this.f38163g);
    }
}
