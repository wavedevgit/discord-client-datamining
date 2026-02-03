package mo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f39118a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39119b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f39120c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f39118a = z10;
        this.f39119b = z11;
        this.f39120c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f39118a == cVar.f39118a && this.f39119b == cVar.f39119b && this.f39120c == cVar.f39120c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f39118a) * 31) + Boolean.hashCode(this.f39119b)) * 31) + Boolean.hashCode(this.f39120c);
    }

    public String toString() {
        boolean z10 = this.f39118a;
        boolean z11 = this.f39119b;
        boolean z12 = this.f39120c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
