package un;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f51728a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51729b;

    public b(Object obj, boolean z10) {
        this.f51728a = obj;
        this.f51729b = z10;
    }

    public final Object a() {
        return this.f51728a;
    }

    public final boolean b() {
        return this.f51729b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f51728a, bVar.f51728a) && this.f51729b == bVar.f51729b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f51728a) * 31) + Boolean.hashCode(this.f51729b);
    }

    public String toString() {
        String i10 = Result.i(this.f51728a);
        boolean z10 = this.f51729b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
