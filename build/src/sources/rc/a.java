package rc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: d  reason: collision with root package name */
    private int f46784d;

    public final void g(int i10) {
        this.f46784d = i10 | this.f46784d;
    }

    public void h() {
        this.f46784d = 0;
    }

    public final void i(int i10) {
        this.f46784d = (~i10) & this.f46784d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean k(int i10) {
        if ((this.f46784d & i10) == i10) {
            return true;
        }
        return false;
    }

    public final boolean l() {
        return k(268435456);
    }

    public final boolean m() {
        return k(Integer.MIN_VALUE);
    }

    public final boolean n() {
        return k(4);
    }

    public final boolean o() {
        return k(134217728);
    }

    public final boolean q() {
        return k(1);
    }

    public final boolean r() {
        return k(536870912);
    }

    public final void s(int i10) {
        this.f46784d = i10;
    }
}
