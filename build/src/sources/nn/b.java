package nn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f41926a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41927b;

    public b(Object obj, boolean z10) {
        this.f41926a = obj;
        this.f41927b = z10;
    }

    public final Object a() {
        return this.f41926a;
    }

    public final boolean b() {
        return this.f41927b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f41926a, bVar.f41926a) && this.f41927b == bVar.f41927b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f41926a) * 31) + Boolean.hashCode(this.f41927b);
    }

    public String toString() {
        String i10 = Result.i(this.f41926a);
        boolean z10 = this.f41927b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
