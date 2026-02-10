package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f47503a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47504b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47505c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f47506d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f47503a = i10;
        this.f47504b = i11;
        this.f47505c = i12;
        this.f47506d = z10;
    }

    public final int a() {
        return this.f47504b;
    }

    public final int b() {
        return this.f47505c;
    }

    public final boolean c() {
        return this.f47506d;
    }

    public final int d() {
        return this.f47503a;
    }

    public final void e(boolean z10) {
        this.f47506d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f47503a == lVar.f47503a && this.f47504b == lVar.f47504b && this.f47505c == lVar.f47505c && this.f47506d == lVar.f47506d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f47503a) * 31) + Integer.hashCode(this.f47504b)) * 31) + Integer.hashCode(this.f47505c)) * 31) + Boolean.hashCode(this.f47506d);
    }

    public String toString() {
        int i10 = this.f47503a;
        int i11 = this.f47504b;
        int i12 = this.f47505c;
        boolean z10 = this.f47506d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
