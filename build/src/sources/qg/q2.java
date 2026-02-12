package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f44847a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f44848b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f44849c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f44850d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f44851e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f44852f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f44847a = o2.h(o2Var);
        this.f44848b = o2.i(o2Var);
        this.f44850d = o2.g(o2Var);
        this.f44851e = o2.j(o2Var);
        this.f44852f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f44850d;
    }

    public final ca b() {
        return this.f44847a;
    }

    public final Boolean c() {
        return this.f44848b;
    }

    public final Integer d() {
        return this.f44851e;
    }

    public final Integer e() {
        return this.f44852f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (hf.o.a(this.f44847a, q2Var.f44847a) && hf.o.a(this.f44848b, q2Var.f44848b) && hf.o.a(null, null) && hf.o.a(this.f44850d, q2Var.f44850d) && hf.o.a(this.f44851e, q2Var.f44851e) && hf.o.a(this.f44852f, q2Var.f44852f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f44847a, this.f44848b, null, this.f44850d, this.f44851e, this.f44852f);
    }
}
