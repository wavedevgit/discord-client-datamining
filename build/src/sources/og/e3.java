package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private final xe f39178a;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f39180c;

    /* renamed from: e  reason: collision with root package name */
    private final wj f39182e;

    /* renamed from: f  reason: collision with root package name */
    private final i1 f39183f;

    /* renamed from: g  reason: collision with root package name */
    private final i1 f39184g;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f39179b = null;

    /* renamed from: d  reason: collision with root package name */
    private final fe f39181d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e3(c3 c3Var, d3 d3Var) {
        this.f39178a = c3.i(c3Var);
        this.f39180c = c3.k(c3Var);
        this.f39182e = c3.j(c3Var);
        this.f39183f = c3.a(c3Var);
        this.f39184g = c3.b(c3Var);
    }

    public final i1 a() {
        return this.f39183f;
    }

    public final i1 b() {
        return this.f39184g;
    }

    public final xe c() {
        return this.f39178a;
    }

    public final wj d() {
        return this.f39182e;
    }

    public final Boolean e() {
        return this.f39180c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e3)) {
            return false;
        }
        e3 e3Var = (e3) obj;
        if (hf.o.a(this.f39178a, e3Var.f39178a) && hf.o.a(null, null) && hf.o.a(this.f39180c, e3Var.f39180c) && hf.o.a(null, null) && hf.o.a(this.f39182e, e3Var.f39182e) && hf.o.a(this.f39183f, e3Var.f39183f) && hf.o.a(this.f39184g, e3Var.f39184g)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39178a, null, this.f39180c, null, this.f39182e, this.f39183f, this.f39184g);
    }
}
