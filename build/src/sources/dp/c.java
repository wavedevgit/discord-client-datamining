package dp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f21840a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21841b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21842c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f21840a = z10;
        this.f21841b = z11;
        this.f21842c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f21840a == cVar.f21840a && this.f21841b == cVar.f21841b && this.f21842c == cVar.f21842c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f21840a) * 31) + Boolean.hashCode(this.f21841b)) * 31) + Boolean.hashCode(this.f21842c);
    }

    public String toString() {
        boolean z10 = this.f21840a;
        boolean z11 = this.f21841b;
        boolean z12 = this.f21842c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
