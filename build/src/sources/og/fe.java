package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f39207a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f39208b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f39209c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f39210d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f39150a;
        this.f39207a = deVar;
        num = ceVar.f39151b;
        this.f39208b = num;
        this.f39209c = null;
        this.f39210d = null;
    }

    public final de a() {
        return this.f39207a;
    }

    public final Integer b() {
        return this.f39208b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (hf.o.a(this.f39207a, feVar.f39207a) && hf.o.a(this.f39208b, feVar.f39208b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39207a, this.f39208b, null, null);
    }
}
