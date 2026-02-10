package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class h3 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f43380a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final r.a0 f43381b;

    /* renamed from: c  reason: collision with root package name */
    private int f43382c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h3(r.a0 a0Var, int i10) {
        this.f43381b = a0Var;
        this.f43382c = i10;
    }

    public int a() {
        int i10;
        synchronized (this.f43380a) {
            i10 = this.f43382c;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(int i10) {
        synchronized (this.f43380a) {
            this.f43382c = i10;
        }
    }
}
