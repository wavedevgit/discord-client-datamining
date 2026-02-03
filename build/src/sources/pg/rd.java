package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f45770a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45771b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45772c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45773d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f45708a;
        this.f45770a = pdVar;
        num = odVar.f45709b;
        this.f45771b = num;
        this.f45772c = null;
        this.f45773d = null;
    }

    public final pd a() {
        return this.f45770a;
    }

    public final Integer b() {
        return this.f45771b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f45770a, rdVar.f45770a) && gf.o.a(this.f45771b, rdVar.f45771b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45770a, this.f45771b, null, null);
    }
}
