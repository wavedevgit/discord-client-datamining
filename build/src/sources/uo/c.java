package uo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51738a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51739b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51740c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f51738a = z10;
        this.f51739b = z11;
        this.f51740c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f51738a == cVar.f51738a && this.f51739b == cVar.f51739b && this.f51740c == cVar.f51740c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f51738a) * 31) + Boolean.hashCode(this.f51739b)) * 31) + Boolean.hashCode(this.f51740c);
    }

    public String toString() {
        boolean z10 = this.f51738a;
        boolean z11 = this.f51739b;
        boolean z12 = this.f51740c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
