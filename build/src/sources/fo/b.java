package fo;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f23983a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f23984b;

    public b(Object obj, boolean z10) {
        this.f23983a = obj;
        this.f23984b = z10;
    }

    public final Object a() {
        return this.f23983a;
    }

    public final boolean b() {
        return this.f23984b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f23983a, bVar.f23983a) && this.f23984b == bVar.f23984b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f23983a) * 31) + Boolean.hashCode(this.f23984b);
    }

    public String toString() {
        String i10 = Result.i(this.f23983a);
        boolean z10 = this.f23984b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
