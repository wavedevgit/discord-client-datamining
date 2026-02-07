package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f44664a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f44665b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f44666c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f44667d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f44668e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f44669f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f44664a = o2.h(o2Var);
        this.f44665b = o2.i(o2Var);
        this.f44667d = o2.g(o2Var);
        this.f44668e = o2.j(o2Var);
        this.f44669f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f44667d;
    }

    public final ca b() {
        return this.f44664a;
    }

    public final Boolean c() {
        return this.f44665b;
    }

    public final Integer d() {
        return this.f44668e;
    }

    public final Integer e() {
        return this.f44669f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f44664a, q2Var.f44664a) && gf.o.a(this.f44665b, q2Var.f44665b) && gf.o.a(null, null) && gf.o.a(this.f44667d, q2Var.f44667d) && gf.o.a(this.f44668e, q2Var.f44668e) && gf.o.a(this.f44669f, q2Var.f44669f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f44664a, this.f44665b, null, this.f44667d, this.f44668e, this.f44669f);
    }
}
