package eo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f22022a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22023b;

    public i4(int i10, int i11) {
        this.f22022a = i10;
        this.f22023b = i11;
    }

    public final int a() {
        return this.f22023b;
    }

    public final int b() {
        return this.f22022a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i4)) {
            return false;
        }
        i4 i4Var = (i4) obj;
        if (this.f22022a == i4Var.f22022a && this.f22023b == i4Var.f22023b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f22022a) * 31) + Integer.hashCode(this.f22023b);
    }

    public String toString() {
        int i10 = this.f22022a;
        int i11 = this.f22023b;
        return "OverlayAssets(hintAnimation=" + i10 + ", guideDrawable=" + i11 + ")";
    }
}
