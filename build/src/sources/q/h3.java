package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class h3 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f45909a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final r.a0 f45910b;

    /* renamed from: c  reason: collision with root package name */
    private int f45911c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h3(r.a0 a0Var, int i10) {
        this.f45910b = a0Var;
        this.f45911c = i10;
    }

    public int a() {
        int i10;
        synchronized (this.f45909a) {
            i10 = this.f45911c;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(int i10) {
        synchronized (this.f45909a) {
            this.f45911c = i10;
        }
    }
}
