package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 {

    /* renamed from: c  reason: collision with root package name */
    public static final l0 f38942c = new l0(-1, -1);

    /* renamed from: d  reason: collision with root package name */
    public static final l0 f38943d = new l0(0, 0);

    /* renamed from: a  reason: collision with root package name */
    private final int f38944a;

    /* renamed from: b  reason: collision with root package name */
    private final int f38945b;

    public l0(int i10, int i11) {
        boolean z10;
        if ((i10 != -1 && i10 < 0) || (i11 != -1 && i11 < 0)) {
            z10 = false;
        } else {
            z10 = true;
        }
        a.a(z10);
        this.f38944a = i10;
        this.f38945b = i11;
    }

    public int a() {
        return this.f38945b;
    }

    public int b() {
        return this.f38944a;
    }

    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        if (obj instanceof l0) {
            l0 l0Var = (l0) obj;
            if (this.f38944a == l0Var.f38944a && this.f38945b == l0Var.f38945b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f38945b;
        int i11 = this.f38944a;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return this.f38944a + "x" + this.f38945b;
    }
}
