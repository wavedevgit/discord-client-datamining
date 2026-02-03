package oo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44382a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44383b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f44384c;

    public c(boolean z10, boolean z11, boolean z12) {
        this.f44382a = z10;
        this.f44383b = z11;
        this.f44384c = z12;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f44382a == cVar.f44382a && this.f44383b == cVar.f44383b && this.f44384c == cVar.f44384c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((Boolean.hashCode(this.f44382a) * 31) + Boolean.hashCode(this.f44383b)) * 31) + Boolean.hashCode(this.f44384c);
    }

    public String toString() {
        boolean z10 = this.f44382a;
        boolean z11 = this.f44383b;
        boolean z12 = this.f44384c;
        return "ScreenState(shouldShowBackButton=" + z10 + ", shouldShowCancelButton=" + z11 + ", isNavigationEnabled=" + z12 + ")";
    }
}
