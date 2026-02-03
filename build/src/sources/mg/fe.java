package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f38186a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f38187b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f38188c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f38189d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f38129a;
        this.f38186a = deVar;
        num = ceVar.f38130b;
        this.f38187b = num;
        this.f38188c = null;
        this.f38189d = null;
    }

    public final de a() {
        return this.f38186a;
    }

    public final Integer b() {
        return this.f38187b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f38186a, feVar.f38186a) && gf.o.a(this.f38187b, feVar.f38187b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f38186a, this.f38187b, null, null);
    }
}
