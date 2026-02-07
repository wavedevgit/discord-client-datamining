package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f44737a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f44738b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f44739c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f44740d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f44614a;
        this.f44737a = p9Var;
        num = o9Var.f44615b;
        this.f44738b = num;
        this.f44739c = null;
        this.f44740d = null;
    }

    public final p9 a() {
        return this.f44737a;
    }

    public final Integer b() {
        return this.f44738b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (gf.o.a(this.f44737a, r9Var.f44737a) && gf.o.a(this.f44738b, r9Var.f44738b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f44737a, this.f44738b, null, null);
    }
}
