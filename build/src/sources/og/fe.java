package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f39776a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f39777b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f39778c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f39779d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f39719a;
        this.f39776a = deVar;
        num = ceVar.f39720b;
        this.f39777b = num;
        this.f39778c = null;
        this.f39779d = null;
    }

    public final de a() {
        return this.f39776a;
    }

    public final Integer b() {
        return this.f39777b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (hf.o.a(this.f39776a, feVar.f39776a) && hf.o.a(this.f39777b, feVar.f39777b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39776a, this.f39777b, null, null);
    }
}
