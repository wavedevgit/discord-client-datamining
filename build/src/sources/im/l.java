package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f28626a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28627b;

    /* renamed from: c  reason: collision with root package name */
    private final int f28628c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28629d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f28626a = i10;
        this.f28627b = i11;
        this.f28628c = i12;
        this.f28629d = z10;
    }

    public final int a() {
        return this.f28627b;
    }

    public final int b() {
        return this.f28628c;
    }

    public final boolean c() {
        return this.f28629d;
    }

    public final int d() {
        return this.f28626a;
    }

    public final void e(boolean z10) {
        this.f28629d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f28626a == lVar.f28626a && this.f28627b == lVar.f28627b && this.f28628c == lVar.f28628c && this.f28629d == lVar.f28629d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f28626a) * 31) + Integer.hashCode(this.f28627b)) * 31) + Integer.hashCode(this.f28628c)) * 31) + Boolean.hashCode(this.f28629d);
    }

    public String toString() {
        int i10 = this.f28626a;
        int i11 = this.f28627b;
        int i12 = this.f28628c;
        boolean z10 = this.f28629d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
