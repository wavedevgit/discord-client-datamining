package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f46178a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f46179b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f46180c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f46181d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f46182e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f46183f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f46178a = o2.h(o2Var);
        this.f46179b = o2.i(o2Var);
        this.f46181d = o2.g(o2Var);
        this.f46182e = o2.j(o2Var);
        this.f46183f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f46181d;
    }

    public final ca b() {
        return this.f46178a;
    }

    public final Boolean c() {
        return this.f46179b;
    }

    public final Integer d() {
        return this.f46182e;
    }

    public final Integer e() {
        return this.f46183f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (hf.o.a(this.f46178a, q2Var.f46178a) && hf.o.a(this.f46179b, q2Var.f46179b) && hf.o.a(null, null) && hf.o.a(this.f46181d, q2Var.f46181d) && hf.o.a(this.f46182e, q2Var.f46182e) && hf.o.a(this.f46183f, q2Var.f46183f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f46178a, this.f46179b, null, this.f46181d, this.f46182e, this.f46183f);
    }
}
