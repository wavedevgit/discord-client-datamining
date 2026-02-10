package pm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f44375a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44376b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44377c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f44378d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f44375a = i10;
        this.f44376b = i11;
        this.f44377c = i12;
        this.f44378d = z10;
    }

    public final int a() {
        return this.f44376b;
    }

    public final int b() {
        return this.f44377c;
    }

    public final boolean c() {
        return this.f44378d;
    }

    public final int d() {
        return this.f44375a;
    }

    public final void e(boolean z10) {
        this.f44378d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f44375a == lVar.f44375a && this.f44376b == lVar.f44376b && this.f44377c == lVar.f44377c && this.f44378d == lVar.f44378d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f44375a) * 31) + Integer.hashCode(this.f44376b)) * 31) + Integer.hashCode(this.f44377c)) * 31) + Boolean.hashCode(this.f44378d);
    }

    public String toString() {
        int i10 = this.f44375a;
        int i11 = this.f44376b;
        int i12 = this.f44377c;
        boolean z10 = this.f44378d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
