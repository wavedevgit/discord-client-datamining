package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f39808a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f39809b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f39810c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f39811d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f39751a;
        this.f39808a = deVar;
        num = ceVar.f39752b;
        this.f39809b = num;
        this.f39810c = null;
        this.f39811d = null;
    }

    public final de a() {
        return this.f39808a;
    }

    public final Integer b() {
        return this.f39809b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (gf.o.a(this.f39808a, feVar.f39808a) && gf.o.a(this.f39809b, feVar.f39809b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f39808a, this.f39809b, null, null);
    }
}
