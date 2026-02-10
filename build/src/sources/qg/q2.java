package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f44846a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f44847b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f44848c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f44849d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f44850e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f44851f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f44846a = o2.h(o2Var);
        this.f44847b = o2.i(o2Var);
        this.f44849d = o2.g(o2Var);
        this.f44850e = o2.j(o2Var);
        this.f44851f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f44849d;
    }

    public final ca b() {
        return this.f44846a;
    }

    public final Boolean c() {
        return this.f44847b;
    }

    public final Integer d() {
        return this.f44850e;
    }

    public final Integer e() {
        return this.f44851f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (hf.o.a(this.f44846a, q2Var.f44846a) && hf.o.a(this.f44847b, q2Var.f44847b) && hf.o.a(null, null) && hf.o.a(this.f44849d, q2Var.f44849d) && hf.o.a(this.f44850e, q2Var.f44850e) && hf.o.a(this.f44851f, q2Var.f44851f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f44846a, this.f44847b, null, this.f44849d, this.f44850e, this.f44851f);
    }
}
