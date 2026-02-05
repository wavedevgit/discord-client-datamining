package m4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37267a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37268b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f37269c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f37270d;

    public c(boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f37267a = z10;
        this.f37268b = z11;
        this.f37269c = z12;
        this.f37270d = z13;
    }

    public final boolean a() {
        return this.f37267a;
    }

    public final boolean b() {
        return this.f37269c;
    }

    public final boolean c() {
        return this.f37270d;
    }

    public final boolean d() {
        return this.f37268b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f37267a == cVar.f37267a && this.f37268b == cVar.f37268b && this.f37269c == cVar.f37269c && this.f37270d == cVar.f37270d) {
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
        boolean z10 = this.f37267a;
        int i10 = 1;
        ?? r02 = z10;
        if (z10) {
            r02 = 1;
        }
        int i11 = r02 * 31;
        ?? r22 = this.f37268b;
        int i12 = r22;
        if (r22 != 0) {
            i12 = 1;
        }
        int i13 = (i11 + i12) * 31;
        ?? r23 = this.f37269c;
        int i14 = r23;
        if (r23 != 0) {
            i14 = 1;
        }
        int i15 = (i13 + i14) * 31;
        boolean z11 = this.f37270d;
        if (!z11) {
            i10 = z11 ? 1 : 0;
        }
        return i15 + i10;
    }

    public String toString() {
        return "NetworkState(isConnected=" + this.f37267a + ", isValidated=" + this.f37268b + ", isMetered=" + this.f37269c + ", isNotRoaming=" + this.f37270d + ')';
    }
}
