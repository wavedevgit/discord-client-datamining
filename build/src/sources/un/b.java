package un;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f51680a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51681b;

    public b(Object obj, boolean z10) {
        this.f51680a = obj;
        this.f51681b = z10;
    }

    public final Object a() {
        return this.f51680a;
    }

    public final boolean b() {
        return this.f51681b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f51680a, bVar.f51680a) && this.f51681b == bVar.f51681b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f51680a) * 31) + Boolean.hashCode(this.f51681b);
    }

    public String toString() {
        String i10 = Result.i(this.f51680a);
        boolean z10 = this.f51681b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
