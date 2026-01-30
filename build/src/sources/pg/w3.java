package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f45819a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45820b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f45821c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f45822d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f45823e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f45766a;
        this.f45819a = ieVar;
        this.f45820b = null;
        bool = u3Var.f45767b;
        this.f45821c = bool;
        this.f45822d = null;
        whVar = u3Var.f45768c;
        this.f45823e = whVar;
    }

    public final ie a() {
        return this.f45819a;
    }

    public final wh b() {
        return this.f45823e;
    }

    public final Boolean c() {
        return this.f45821c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f45819a, w3Var.f45819a) && gf.o.a(null, null) && gf.o.a(this.f45821c, w3Var.f45821c) && gf.o.a(null, null) && gf.o.a(this.f45823e, w3Var.f45823e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45819a, null, this.f45821c, null, this.f45823e);
    }
}
