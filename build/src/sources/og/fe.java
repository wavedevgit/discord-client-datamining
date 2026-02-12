package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fe {

    /* renamed from: a  reason: collision with root package name */
    private final de f39208a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f39209b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f39210c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f39211d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ fe(ce ceVar, ee eeVar) {
        de deVar;
        Integer num;
        deVar = ceVar.f39151a;
        this.f39208a = deVar;
        num = ceVar.f39152b;
        this.f39209b = num;
        this.f39210c = null;
        this.f39211d = null;
    }

    public final de a() {
        return this.f39208a;
    }

    public final Integer b() {
        return this.f39209b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof fe)) {
            return false;
        }
        fe feVar = (fe) obj;
        if (hf.o.a(this.f39208a, feVar.f39208a) && hf.o.a(this.f39209b, feVar.f39209b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f39208a, this.f39209b, null, null);
    }
}
