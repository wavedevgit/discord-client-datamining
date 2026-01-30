package mn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f39183a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39184b;

    public b(Object obj, boolean z10) {
        this.f39183a = obj;
        this.f39184b = z10;
    }

    public final Object a() {
        return this.f39183a;
    }

    public final boolean b() {
        return this.f39184b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f39183a, bVar.f39183a) && this.f39184b == bVar.f39184b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f39183a) * 31) + Boolean.hashCode(this.f39184b);
    }

    public String toString() {
        String i10 = Result.i(this.f39183a);
        boolean z10 = this.f39184b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
