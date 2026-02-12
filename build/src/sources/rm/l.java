package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f47504a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47505b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47506c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f47507d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f47504a = i10;
        this.f47505b = i11;
        this.f47506c = i12;
        this.f47507d = z10;
    }

    public final int a() {
        return this.f47505b;
    }

    public final int b() {
        return this.f47506c;
    }

    public final boolean c() {
        return this.f47507d;
    }

    public final int d() {
        return this.f47504a;
    }

    public final void e(boolean z10) {
        this.f47507d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f47504a == lVar.f47504a && this.f47505b == lVar.f47505b && this.f47506c == lVar.f47506c && this.f47507d == lVar.f47507d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f47504a) * 31) + Integer.hashCode(this.f47505b)) * 31) + Integer.hashCode(this.f47506c)) * 31) + Boolean.hashCode(this.f47507d);
    }

    public String toString() {
        int i10 = this.f47504a;
        int i11 = this.f47505b;
        int i12 = this.f47506c;
        boolean z10 = this.f47507d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
