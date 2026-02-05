package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f37645a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f37646b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f37647c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f37648d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f37588a;
        this.f37645a = deVar;
        num = ceVar.f37589b;
        this.f37646b = num;
        this.f37647c = null;
        this.f37648d = null;
    }

    public final de a() {
        return this.f37645a;
    }

    public final Integer b() {
        return this.f37646b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f37645a, feVar.f37645a) && gf.o.a(this.f37646b, feVar.f37646b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f37645a, this.f37646b, null, null);
    }
}
