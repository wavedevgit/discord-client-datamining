package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f43441a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f43442b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f43443c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f43444d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f43318a;
        this.f43441a = p9Var;
        num = o9Var.f43319b;
        this.f43442b = num;
        this.f43443c = null;
        this.f43444d = null;
    }

    public final p9 a() {
        return this.f43441a;
    }

    public final Integer b() {
        return this.f43442b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (gf.o.a(this.f43441a, r9Var.f43441a) && gf.o.a(this.f43442b, r9Var.f43442b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43441a, this.f43442b, null, null);
    }
}
