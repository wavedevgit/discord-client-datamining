package lo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37418a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37419b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f37420c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f37418a = z10;
        this.f37419b = z11;
        this.f37420c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f37418a == cVar.f37418a && this.f37419b == cVar.f37419b && this.f37420c == cVar.f37420c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f37418a) * 31) + Boolean.hashCode(this.f37419b)) * 31) + Boolean.hashCode(this.f37420c);
    }

    public String toString() {
        boolean z10 = this.f37418a;
        boolean z11 = this.f37419b;
        boolean z12 = this.f37420c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
