package lo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37402a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37403b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f37404c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f37402a = z10;
        this.f37403b = z11;
        this.f37404c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f37402a == cVar.f37402a && this.f37403b == cVar.f37403b && this.f37404c == cVar.f37404c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f37402a) * 31) + Boolean.hashCode(this.f37403b)) * 31) + Boolean.hashCode(this.f37404c);
    }

    public String toString() {
        boolean z10 = this.f37402a;
        boolean z11 = this.f37403b;
        boolean z12 = this.f37404c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
