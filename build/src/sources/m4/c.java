package m4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36897a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36898b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36899c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36900d;

    public c(boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f36897a = z10;
        this.f36898b = z11;
        this.f36899c = z12;
        this.f36900d = z13;
    }

    public final boolean a() {
        return this.f36897a;
    }

    public final boolean b() {
        return this.f36899c;
    }

    public final boolean c() {
        return this.f36900d;
    }

    public final boolean d() {
        return this.f36898b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f36897a == cVar.f36897a && this.f36898b == cVar.f36898b && this.f36899c == cVar.f36899c && this.f36900d == cVar.f36900d) {
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
        boolean z10 = this.f36897a;
        int i10 = 1;
        ?? r02 = z10;
        if (z10) {
            r02 = 1;
        }
        int i11 = r02 * 31;
        ?? r22 = this.f36898b;
        int i12 = r22;
        if (r22 != 0) {
            i12 = 1;
        }
        int i13 = (i11 + i12) * 31;
        ?? r23 = this.f36899c;
        int i14 = r23;
        if (r23 != 0) {
            i14 = 1;
        }
        int i15 = (i13 + i14) * 31;
        boolean z11 = this.f36900d;
        if (!z11) {
            i10 = z11 ? 1 : 0;
        }
        return i15 + i10;
    }

    public String toString() {
        return "NetworkState(isConnected=" + this.f36897a + ", isValidated=" + this.f36898b + ", isMetered=" + this.f36899c + ", isNotRoaming=" + this.f36900d + ')';
    }
}
