package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f39570a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f39571b;

    public h() {
        this(e.f39550a);
    }

    public synchronized void a() {
        while (!this.f39571b) {
            wait();
        }
    }

    public synchronized void b() {
        boolean z10 = false;
        while (!this.f39571b) {
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
        z10 = this.f39571b;
        this.f39571b = false;
        return z10;
    }

    public synchronized boolean d() {
        return this.f39571b;
    }

    public synchronized boolean e() {
        if (this.f39571b) {
            return false;
        }
        this.f39571b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f39570a = eVar;
    }
}
