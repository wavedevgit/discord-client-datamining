package om;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f43317a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43318b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43319c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f43320d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f43317a = i10;
        this.f43318b = i11;
        this.f43319c = i12;
        this.f43320d = z10;
    }

    public final int a() {
        return this.f43318b;
    }

    public final int b() {
        return this.f43319c;
    }

    public final boolean c() {
        return this.f43320d;
    }

    public final int d() {
        return this.f43317a;
    }

    public final void e(boolean z10) {
        this.f43320d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f43317a == lVar.f43317a && this.f43318b == lVar.f43318b && this.f43319c == lVar.f43319c && this.f43320d == lVar.f43320d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f43317a) * 31) + Integer.hashCode(this.f43318b)) * 31) + Integer.hashCode(this.f43319c)) * 31) + Boolean.hashCode(this.f43320d);
    }

    public String toString() {
        int i10 = this.f43317a;
        int i11 = this.f43318b;
        int i12 = this.f43319c;
        boolean z10 = this.f43320d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
