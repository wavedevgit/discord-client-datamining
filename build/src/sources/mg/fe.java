package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f38190a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f38191b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f38192c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f38193d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f38133a;
        this.f38190a = deVar;
        num = ceVar.f38134b;
        this.f38191b = num;
        this.f38192c = null;
        this.f38193d = null;
    }

    public final de a() {
        return this.f38190a;
    }

    public final Integer b() {
        return this.f38191b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f38190a, feVar.f38190a) && gf.o.a(this.f38191b, feVar.f38191b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38190a, this.f38191b, null, null);
    }
}
