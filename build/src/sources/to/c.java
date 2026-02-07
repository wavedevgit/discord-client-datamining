package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50833a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50834b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50835c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f50833a = z10;
        this.f50834b = z11;
        this.f50835c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f50833a == cVar.f50833a && this.f50834b == cVar.f50834b && this.f50835c == cVar.f50835c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f50833a) * 31) + Boolean.hashCode(this.f50834b)) * 31) + Boolean.hashCode(this.f50835c);
    }

    public String toString() {
        boolean z10 = this.f50833a;
        boolean z11 = this.f50834b;
        boolean z12 = this.f50835c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
