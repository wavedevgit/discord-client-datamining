package jo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f30378a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30379b;

    public i4(int i10, int i11) {
        this.f30378a = i10;
        this.f30379b = i11;
    }

    public final int a() {
        return this.f30379b;
    }

    public final int b() {
        return this.f30378a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f30378a == i4Var.f30378a && this.f30379b == i4Var.f30379b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f30378a) * 31) + Integer.hashCode(this.f30379b);
    }

    public String toString() {
        int i10 = this.f30378a;
        int i11 = this.f30379b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
