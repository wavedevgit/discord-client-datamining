package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f45658a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45659b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45660c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45661d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f45596a;
        this.f45658a = pdVar;
        num = odVar.f45597b;
        this.f45659b = num;
        this.f45660c = null;
        this.f45661d = null;
    }

    public final pd a() {
        return this.f45658a;
    }

    public final Integer b() {
        return this.f45659b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f45658a, rdVar.f45658a) && gf.o.a(this.f45659b, rdVar.f45659b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45658a, this.f45659b, null, null);
    }
}
