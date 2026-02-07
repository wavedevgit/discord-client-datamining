package qc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: d  reason: collision with root package name */
    private int f46643d;

    public final void g(int i10) {
        this.f46643d = i10 | this.f46643d;
    }

    public void h() {
        this.f46643d = 0;
    }

    public final void i(int i10) {
        this.f46643d = (~i10) & this.f46643d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean j(int i10) {
        if ((this.f46643d & i10) == i10) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return j(268435456);
    }

    public final boolean m() {
        return j(Integer.MIN_VALUE);
    }

    public final boolean n() {
        return j(4);
    }

    public final boolean o() {
        return j(134217728);
    }

    public final boolean q() {
        return j(1);
    }

    public final boolean r() {
        return j(536870912);
    }

    public final void s(int i10) {
        this.f46643d = i10;
    }
}
