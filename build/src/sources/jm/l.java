package jm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f32030a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32031b;

    /* renamed from: c  reason: collision with root package name */
    private final int f32032c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f32033d;

    public l(int i10, int i11, int i12, boolean z10) {
        this.f32030a = i10;
        this.f32031b = i11;
        this.f32032c = i12;
        this.f32033d = z10;
    }

    public final int a() {
        return this.f32031b;
    }

    public final int b() {
        return this.f32032c;
    }

    public final boolean c() {
        return this.f32033d;
    }

    public final int d() {
        return this.f32030a;
    }

    public final void e(boolean z10) {
        this.f32033d = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f32030a == lVar.f32030a && this.f32031b == lVar.f32031b && this.f32032c == lVar.f32032c && this.f32033d == lVar.f32033d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f32030a) * 31) + Integer.hashCode(this.f32031b)) * 31) + Integer.hashCode(this.f32032c)) * 31) + Boolean.hashCode(this.f32033d);
    }

    public String toString() {
        int i10 = this.f32030a;
        int i11 = this.f32031b;
        int i12 = this.f32032c;
        boolean z10 = this.f32033d;
        return "KeyboardAnimationCallbackConfig(persistentInsetTypes=" + i10 + ", deferredInsetTypes=" + i11 + ", dispatchMode=" + i12 + ", hasTranslucentNavigationBar=" + z10 + ")";
    }
}
