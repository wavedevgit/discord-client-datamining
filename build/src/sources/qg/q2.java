package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f45415a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45416b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f45417c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f45418d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f45419e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f45420f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f45415a = o2.h(o2Var);
        this.f45416b = o2.i(o2Var);
        this.f45418d = o2.g(o2Var);
        this.f45419e = o2.j(o2Var);
        this.f45420f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f45418d;
    }

    public final ca b() {
        return this.f45415a;
    }

    public final Boolean c() {
        return this.f45416b;
    }

    public final Integer d() {
        return this.f45419e;
    }

    public final Integer e() {
        return this.f45420f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (hf.o.a(this.f45415a, q2Var.f45415a) && hf.o.a(this.f45416b, q2Var.f45416b) && hf.o.a(null, null) && hf.o.a(this.f45418d, q2Var.f45418d) && hf.o.a(this.f45419e, q2Var.f45419e) && hf.o.a(this.f45420f, q2Var.f45420f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f45415a, this.f45416b, null, this.f45418d, this.f45419e, this.f45420f);
    }
}
