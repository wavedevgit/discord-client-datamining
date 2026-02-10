package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rd {

    /* renamed from: a  reason: collision with root package name */
    private final pd f48654a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f48655b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f48656c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f48657d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ rd(od odVar, qd qdVar) {
        pd pdVar;
        Integer num;
        pdVar = odVar.f48592a;
        this.f48654a = pdVar;
        num = odVar.f48593b;
        this.f48655b = num;
        this.f48656c = null;
        this.f48657d = null;
    }

    public final pd a() {
        return this.f48654a;
    }

    public final Integer b() {
        return this.f48655b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof rd)) {
            return false;
        }
        rd rdVar = (rd) obj;
        if (hf.o.a(this.f48654a, rdVar.f48654a) && hf.o.a(this.f48655b, rdVar.f48655b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f48654a, this.f48655b, null, null);
    }
}
