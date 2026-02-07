package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f47536a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f47537b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f47538c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f47539d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f47474a;
        this.f47536a = pdVar;
        num = odVar.f47475b;
        this.f47537b = num;
        this.f47538c = null;
        this.f47539d = null;
    }

    public final pd a() {
        return this.f47536a;
    }

    public final Integer b() {
        return this.f47537b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (gf.o.a(this.f47536a, rdVar.f47536a) && gf.o.a(this.f47537b, rdVar.f47537b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47536a, this.f47537b, null, null);
    }
}
