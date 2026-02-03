package pn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f46218a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46219b;

    public b(Object obj, boolean z10) {
        this.f46218a = obj;
        this.f46219b = z10;
    }

    public final Object a() {
        return this.f46218a;
    }

    public final boolean b() {
        return this.f46219b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f46218a, bVar.f46218a) && this.f46219b == bVar.f46219b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f46218a) * 31) + Boolean.hashCode(this.f46219b);
    }

    public String toString() {
        String i10 = Result.i(this.f46218a);
        boolean z10 = this.f46219b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
