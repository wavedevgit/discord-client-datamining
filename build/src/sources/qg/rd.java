package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f47488a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f47489b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f47490c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f47491d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f47426a;
        this.f47488a = pdVar;
        num = odVar.f47427b;
        this.f47489b = num;
        this.f47490c = null;
        this.f47491d = null;
    }

    public final pd a() {
        return this.f47488a;
    }

    public final Integer b() {
        return this.f47489b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f47488a, rdVar.f47488a) && gf.o.a(this.f47489b, rdVar.f47489b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47488a, this.f47489b, null, null);
    }
}
