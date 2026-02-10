package vn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52588a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f52589b;

    public b(Object obj, boolean z10) {
        this.f52588a = obj;
        this.f52589b = z10;
    }

    public final Object a() {
        return this.f52588a;
    }

    public final boolean b() {
        return this.f52589b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f52588a, bVar.f52588a) && this.f52589b == bVar.f52589b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f52588a) * 31) + Boolean.hashCode(this.f52589b);
    }

    public String toString() {
        String i10 = Result.i(this.f52588a);
        boolean z10 = this.f52589b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
