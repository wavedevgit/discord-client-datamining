package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f45728a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45729b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45730c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45731d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f45666a;
        this.f45728a = pdVar;
        num = odVar.f45667b;
        this.f45729b = num;
        this.f45730c = null;
        this.f45731d = null;
    }

    public final pd a() {
        return this.f45728a;
    }

    public final Integer b() {
        return this.f45729b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f45728a, rdVar.f45728a) && gf.o.a(this.f45729b, rdVar.f45729b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45728a, this.f45729b, null, null);
    }
}
