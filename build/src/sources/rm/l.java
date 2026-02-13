package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f48072a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48073b;

    /* renamed from: c  reason: collision with root package name */
    private final int f48074c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f48075d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f48072a = i10;
        this.f48073b = i11;
        this.f48074c = i12;
        this.f48075d = z10;
    }

    public final int a() {
        return this.f48073b;
    }

    public final int b() {
        return this.f48074c;
    }

    public final boolean c() {
        return this.f48075d;
    }

    public final int d() {
        return this.f48072a;
    }

    public final void e(boolean z10) {
        this.f48075d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f48072a == lVar.f48072a && this.f48073b == lVar.f48073b && this.f48074c == lVar.f48074c && this.f48075d == lVar.f48075d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f48072a) * 31) + Integer.hashCode(this.f48073b)) * 31) + Integer.hashCode(this.f48074c)) * 31) + Boolean.hashCode(this.f48075d);
    }

    public String toString() {
        int i10 = this.f48072a;
        int i11 = this.f48073b;
        int i12 = this.f48074c;
        boolean z10 = this.f48075d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
