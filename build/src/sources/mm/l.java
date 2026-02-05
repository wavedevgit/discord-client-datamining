package mm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f38788a;

    /* renamed from: b  reason: collision with root package name */
    private final int f38789b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38790c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f38791d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f38788a = i10;
        this.f38789b = i11;
        this.f38790c = i12;
        this.f38791d = z10;
    }

    public final int a() {
        return this.f38789b;
    }

    public final int b() {
        return this.f38790c;
    }

    public final boolean c() {
        return this.f38791d;
    }

    public final int d() {
        return this.f38788a;
    }

    public final void e(boolean z10) {
        this.f38791d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f38788a == lVar.f38788a && this.f38789b == lVar.f38789b && this.f38790c == lVar.f38790c && this.f38791d == lVar.f38791d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f38788a) * 31) + Integer.hashCode(this.f38789b)) * 31) + Integer.hashCode(this.f38790c)) * 31) + Boolean.hashCode(this.f38791d);
    }

    public String toString() {
        int i10 = this.f38788a;
        int i11 = this.f38789b;
        int i12 = this.f38790c;
        boolean z10 = this.f38791d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
