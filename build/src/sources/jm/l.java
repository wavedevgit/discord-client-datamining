package jm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f31826a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31827b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31828c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f31829d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f31826a = i10;
        this.f31827b = i11;
        this.f31828c = i12;
        this.f31829d = z10;
    }

    public final int a() {
        return this.f31827b;
    }

    public final int b() {
        return this.f31828c;
    }

    public final boolean c() {
        return this.f31829d;
    }

    public final int d() {
        return this.f31826a;
    }

    public final void e(boolean z10) {
        this.f31829d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f31826a == lVar.f31826a && this.f31827b == lVar.f31827b && this.f31828c == lVar.f31828c && this.f31829d == lVar.f31829d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f31826a) * 31) + Integer.hashCode(this.f31827b)) * 31) + Integer.hashCode(this.f31828c)) * 31) + Boolean.hashCode(this.f31829d);
    }

    public String toString() {
        int i10 = this.f31826a;
        int i11 = this.f31827b;
        int i12 = this.f31828c;
        boolean z10 = this.f31829d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
