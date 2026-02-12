package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f47109a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f47110b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f47111c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f47112d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f47047a;
        this.f47109a = pdVar;
        num = odVar.f47048b;
        this.f47110b = num;
        this.f47111c = null;
        this.f47112d = null;
    }

    public final pd a() {
        return this.f47109a;
    }

    public final Integer b() {
        return this.f47110b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (hf.o.a(this.f47109a, rdVar.f47109a) && hf.o.a(this.f47110b, rdVar.f47110b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47109a, this.f47110b, null, null);
    }
}
