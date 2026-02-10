package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f47108a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f47109b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f47110c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f47111d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f47046a;
        this.f47108a = pdVar;
        num = odVar.f47047b;
        this.f47109b = num;
        this.f47110c = null;
        this.f47111d = null;
    }

    public final pd a() {
        return this.f47108a;
    }

    public final Integer b() {
        return this.f47109b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (hf.o.a(this.f47108a, rdVar.f47108a) && hf.o.a(this.f47109b, rdVar.f47109b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47108a, this.f47109b, null, null);
    }
}
