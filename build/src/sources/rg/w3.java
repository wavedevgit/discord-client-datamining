package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f48777a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f48778b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f48779c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f48780d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f48781e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f48724a;
        this.f48777a = ieVar;
        this.f48778b = null;
        bool = u3Var.f48725b;
        this.f48779c = bool;
        this.f48780d = null;
        whVar = u3Var.f48726c;
        this.f48781e = whVar;
    }

    public final ie a() {
        return this.f48777a;
    }

    public final wh b() {
        return this.f48781e;
    }

    public final Boolean c() {
        return this.f48779c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (hf.o.a(this.f48777a, w3Var.f48777a) && hf.o.a(null, null) && hf.o.a(this.f48779c, w3Var.f48779c) && hf.o.a(null, null) && hf.o.a(this.f48781e, w3Var.f48781e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f48777a, null, this.f48779c, null, this.f48781e);
    }
}
