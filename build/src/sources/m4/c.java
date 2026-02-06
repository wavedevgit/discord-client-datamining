package m4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36849a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36850b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36851c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36852d;

    public c(boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f36849a = z10;
        this.f36850b = z11;
        this.f36851c = z12;
        this.f36852d = z13;
    }

    public final boolean a() {
        return this.f36849a;
    }

    public final boolean b() {
        return this.f36851c;
    }

    public final boolean c() {
        return this.f36852d;
    }

    public final boolean d() {
        return this.f36850b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f36849a == cVar.f36849a && this.f36850b == cVar.f36850b && this.f36851c == cVar.f36851c && this.f36852d == cVar.f36852d) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v1, types: [int] */
    /* JADX WARN: Type inference failed for: r0v8 */
    /* JADX WARN: Type inference failed for: r0v9 */
    /* JADX WARN: Type inference failed for: r2v0, types: [boolean] */
    /* JADX WARN: Type inference failed for: r2v2, types: [boolean] */
    public int hashCode() {
        boolean z10 = this.f36849a;
        int i10 = 1;
        ?? r02 = z10;
        if (z10) {
            r02 = 1;
        }
        int i11 = r02 * 31;
        ?? r22 = this.f36850b;
        int i12 = r22;
        if (r22 != 0) {
            i12 = 1;
        }
        int i13 = (i11 + i12) * 31;
        ?? r23 = this.f36851c;
        int i14 = r23;
        if (r23 != 0) {
            i14 = 1;
        }
        int i15 = (i13 + i14) * 31;
        boolean z11 = this.f36852d;
        if (!z11) {
            i10 = z11 ? 1 : 0;
        }
        return i15 + i10;
    }

    public String toString() {
        return "NetworkState(isConnected=" + this.f36849a + ", isValidated=" + this.f36850b + ", isMetered=" + this.f36851c + ", isNotRoaming=" + this.f36852d + ')';
    }
}
