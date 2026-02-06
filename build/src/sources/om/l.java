package om;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f43269a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43270b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43271c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f43272d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f43269a = i10;
        this.f43270b = i11;
        this.f43271c = i12;
        this.f43272d = z10;
    }

    public final int a() {
        return this.f43270b;
    }

    public final int b() {
        return this.f43271c;
    }

    public final boolean c() {
        return this.f43272d;
    }

    public final int d() {
        return this.f43269a;
    }

    public final void e(boolean z10) {
        this.f43272d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f43269a == lVar.f43269a && this.f43270b == lVar.f43270b && this.f43271c == lVar.f43271c && this.f43272d == lVar.f43272d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f43269a) * 31) + Integer.hashCode(this.f43270b)) * 31) + Integer.hashCode(this.f43271c)) * 31) + Boolean.hashCode(this.f43272d);
    }

    public String toString() {
        int i10 = this.f43269a;
        int i11 = this.f43270b;
        int i12 = this.f43271c;
        boolean z10 = this.f43272d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
