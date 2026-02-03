package qc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: d  reason: collision with root package name */
    private int f47483d;

    public final void g(int i10) {
        this.f47483d = i10 | this.f47483d;
    }

    public void h() {
        this.f47483d = 0;
    }

    public final void i(int i10) {
        this.f47483d = (~i10) & this.f47483d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean j(int i10) {
        if ((this.f47483d & i10) == i10) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return j(268435456);
    }

    public final boolean l() {
        return j(Integer.MIN_VALUE);
    }

    public final boolean o() {
        return j(4);
    }

    public final boolean p() {
        return j(134217728);
    }

    public final boolean q() {
        return j(1);
    }

    public final boolean r() {
        return j(536870912);
    }

    public final void s(int i10) {
        this.f47483d = i10;
    }
}
