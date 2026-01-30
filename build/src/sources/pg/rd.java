package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f45696a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45697b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45698c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45699d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f45634a;
        this.f45696a = pdVar;
        num = odVar.f45635b;
        this.f45697b = num;
        this.f45698c = null;
        this.f45699d = null;
    }

    public final pd a() {
        return this.f45696a;
    }

    public final Integer b() {
        return this.f45697b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f45696a, rdVar.f45696a) && gf.o.a(this.f45697b, rdVar.f45697b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45696a, this.f45697b, null, null);
    }
}
