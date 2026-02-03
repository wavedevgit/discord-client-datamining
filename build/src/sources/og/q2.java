package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q2 {

    /* renamed from: a  reason: collision with root package name */
    private final ca f43368a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f43369b;

    /* renamed from: c  reason: collision with root package name */
    private final r9 f43370c = null;

    /* renamed from: d  reason: collision with root package name */
    private final n9 f43371d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f43372e;

    /* renamed from: f  reason: collision with root package name */
    private final Integer f43373f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ q2(o2 o2Var, p2 p2Var) {
        this.f43368a = o2.h(o2Var);
        this.f43369b = o2.i(o2Var);
        this.f43371d = o2.g(o2Var);
        this.f43372e = o2.j(o2Var);
        this.f43373f = o2.k(o2Var);
    }

    public final n9 a() {
        return this.f43371d;
    }

    public final ca b() {
        return this.f43368a;
    }

    public final Boolean c() {
        return this.f43369b;
    }

    public final Integer d() {
        return this.f43372e;
    }

    public final Integer e() {
        return this.f43373f;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof q2)) {
            return false;
        }
        q2 q2Var = (q2) obj;
        if (gf.o.a(this.f43368a, q2Var.f43368a) && gf.o.a(this.f43369b, q2Var.f43369b) && gf.o.a(null, null) && gf.o.a(this.f43371d, q2Var.f43371d) && gf.o.a(this.f43372e, q2Var.f43372e) && gf.o.a(this.f43373f, q2Var.f43373f)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43368a, this.f43369b, null, this.f43371d, this.f43372e, this.f43373f);
    }
}
