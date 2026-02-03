package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f40071a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40072b;

    public h() {
        this(e.f40051a);
    }

    public synchronized void a() {
        while (!this.f40072b) {
            wait();
        }
    }

    public synchronized void b() {
        boolean z10 = false;
        while (!this.f40072b) {
            try {
                wait();
            } catch (InterruptedException unused) {
                z10 = true;
            }
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
    }

    public synchronized boolean c() {
        boolean z10;
        z10 = this.f40072b;
        this.f40072b = false;
        return z10;
    }

    public synchronized boolean d() {
        return this.f40072b;
    }

    public synchronized boolean e() {
        if (this.f40072b) {
            return false;
        }
        this.f40072b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f40071a = eVar;
    }
}
