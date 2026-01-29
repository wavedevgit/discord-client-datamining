package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f45680a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45681b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45682c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45683d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f45618a;
        this.f45680a = pdVar;
        num = odVar.f45619b;
        this.f45681b = num;
        this.f45682c = null;
        this.f45683d = null;
    }

    public final pd a() {
        return this.f45680a;
    }

    public final Integer b() {
        return this.f45681b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f45680a, rdVar.f45680a) && gf.o.a(this.f45681b, rdVar.f45681b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45680a, this.f45681b, null, null);
    }
}
