package sn;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49834a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f49835b;

    public b(Object obj, boolean z10) {
        this.f49834a = obj;
        this.f49835b = z10;
    }

    public final Object a() {
        return this.f49834a;
    }

    public final boolean b() {
        return this.f49835b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Result.d(this.f49834a, bVar.f49834a) && this.f49835b == bVar.f49835b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Result.f(this.f49834a) * 31) + Boolean.hashCode(this.f49835b);
    }

    public String toString() {
        String i10 = Result.i(this.f49834a);
        boolean z10 = this.f49835b;
        return "AnalyzerResult(result=" + i10 + ", isActiveAnalyzer=" + z10 + ")";
    }
}
