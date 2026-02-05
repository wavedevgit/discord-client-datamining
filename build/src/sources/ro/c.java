package ro;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f48922a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48923b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48924c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f48922a = z10;
        this.f48923b = z11;
        this.f48924c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f48922a == cVar.f48922a && this.f48923b == cVar.f48923b && this.f48924c == cVar.f48924c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f48922a) * 31) + Boolean.hashCode(this.f48923b)) * 31) + Boolean.hashCode(this.f48924c);
    }

    public String toString() {
        boolean z10 = this.f48922a;
        boolean z11 = this.f48923b;
        boolean z12 = this.f48924c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
