package dp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f21841a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21842b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21843c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f21841a = z10;
        this.f21842b = z11;
        this.f21843c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f21841a == cVar.f21841a && this.f21842b == cVar.f21842b && this.f21843c == cVar.f21843c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f21841a) * 31) + Boolean.hashCode(this.f21842b)) * 31) + Boolean.hashCode(this.f21843c);
    }

    public String toString() {
        boolean z10 = this.f21841a;
        boolean z11 = this.f21842b;
        boolean z12 = this.f21843c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
