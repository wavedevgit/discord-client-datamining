package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f43347a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f43348b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f43349c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f43350d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f43224a;
        this.f43347a = p9Var;
        num = o9Var.f43225b;
        this.f43348b = num;
        this.f43349c = null;
        this.f43350d = null;
    }

    public final p9 a() {
        return this.f43347a;
    }

    public final Integer b() {
        return this.f43348b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (gf.o.a(this.f43347a, r9Var.f43347a) && gf.o.a(this.f43348b, r9Var.f43348b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43347a, this.f43348b, null, null);
    }
}
