package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f47677a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f47678b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f47679c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f47680d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f47615a;
        this.f47677a = pdVar;
        num = odVar.f47616b;
        this.f47678b = num;
        this.f47679c = null;
        this.f47680d = null;
    }

    public final pd a() {
        return this.f47677a;
    }

    public final Integer b() {
        return this.f47678b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (hf.o.a(this.f47677a, rdVar.f47677a) && hf.o.a(this.f47678b, rdVar.f47678b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47677a, this.f47678b, null, null);
    }
}
