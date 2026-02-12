package fo;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f23984a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f23985b;

    public b(Object obj, boolean z10) {
        this.f23984a = obj;
        this.f23985b = z10;
    }

    public final Object a() {
        return this.f23984a;
    }

    public final boolean b() {
        return this.f23985b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f23984a, bVar.f23984a) && this.f23985b == bVar.f23985b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f23984a) * 31) + Boolean.hashCode(this.f23985b);
    }

    public String toString() {
        String i10 = Result.i(this.f23984a);
        boolean z10 = this.f23985b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
