package mn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f39167a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39168b;

    public b(Object obj, boolean z10) {
        this.f39167a = obj;
        this.f39168b = z10;
    }

    public final Object a() {
        return this.f39167a;
    }

    public final boolean b() {
        return this.f39168b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f39167a, bVar.f39167a) && this.f39168b == bVar.f39168b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f39167a) * 31) + Boolean.hashCode(this.f39168b);
    }

    public String toString() {
        String i10 = Result.i(this.f39167a);
        boolean z10 = this.f39168b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
