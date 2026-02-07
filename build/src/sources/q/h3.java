package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class h3 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f45957a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final r.a0 f45958b;

    /* renamed from: c  reason: collision with root package name */
    private int f45959c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h3(r.a0 a0Var, int i10) {
        this.f45958b = a0Var;
        this.f45959c = i10;
    }

    public int a() {
        int i10;
        synchronized (this.f45957a) {
            i10 = this.f45959c;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(int i10) {
        synchronized (this.f45957a) {
            this.f45959c = i10;
        }
    }
}
