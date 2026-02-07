package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f39856a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f39857b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f39858c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f39859d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f39799a;
        this.f39856a = deVar;
        num = ceVar.f39800b;
        this.f39857b = num;
        this.f39858c = null;
        this.f39859d = null;
    }

    public final de a() {
        return this.f39856a;
    }

    public final Integer b() {
        return this.f39857b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f39856a, feVar.f39856a) && gf.o.a(this.f39857b, feVar.f39857b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f39856a, this.f39857b, null, null);
    }
}
