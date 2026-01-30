package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f28642a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28643b;

    /* renamed from: c  reason: collision with root package name */
    private final int f28644c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28645d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f28642a = i10;
        this.f28643b = i11;
        this.f28644c = i12;
        this.f28645d = z10;
    }

    public final int a() {
        return this.f28643b;
    }

    public final int b() {
        return this.f28644c;
    }

    public final boolean c() {
        return this.f28645d;
    }

    public final int d() {
        return this.f28642a;
    }

    public final void e(boolean z10) {
        this.f28645d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f28642a == lVar.f28642a && this.f28643b == lVar.f28643b && this.f28644c == lVar.f28644c && this.f28645d == lVar.f28645d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f28642a) * 31) + Integer.hashCode(this.f28643b)) * 31) + Integer.hashCode(this.f28644c)) * 31) + Boolean.hashCode(this.f28645d);
    }

    public String toString() {
        int i10 = this.f28642a;
        int i11 = this.f28643b;
        int i12 = this.f28644c;
        boolean z10 = this.f28645d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
