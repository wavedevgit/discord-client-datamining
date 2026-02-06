package to;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50785a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50786b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50787c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f50785a = z10;
        this.f50786b = z11;
        this.f50787c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f50785a == cVar.f50785a && this.f50786b == cVar.f50786b && this.f50787c == cVar.f50787c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f50785a) * 31) + Boolean.hashCode(this.f50786b)) * 31) + Boolean.hashCode(this.f50787c);
    }

    public String toString() {
        boolean z10 = this.f50785a;
        boolean z11 = this.f50786b;
        boolean z12 = this.f50787c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
