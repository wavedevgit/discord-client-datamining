package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f37983a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f37984b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f37985c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f37986d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f37926a;
        this.f37983a = deVar;
        num = ceVar.f37927b;
        this.f37984b = num;
        this.f37985c = null;
        this.f37986d = null;
    }

    public final de a() {
        return this.f37983a;
    }

    public final Integer b() {
        return this.f37984b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f37983a, feVar.f37983a) && gf.o.a(this.f37984b, feVar.f37984b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f37983a, this.f37984b, null, null);
    }
}
