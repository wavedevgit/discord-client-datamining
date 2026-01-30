package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f38206a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f38207b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f38208c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f38209d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f38149a;
        this.f38206a = deVar;
        num = ceVar.f38150b;
        this.f38207b = num;
        this.f38208c = null;
        this.f38209d = null;
    }

    public final de a() {
        return this.f38206a;
    }

    public final Integer b() {
        return this.f38207b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f38206a, feVar.f38206a) && gf.o.a(this.f38207b, feVar.f38207b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38206a, this.f38207b, null, null);
    }
}
