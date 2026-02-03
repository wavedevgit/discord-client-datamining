package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f40110a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40111b;

    public h() {
        this(e.f40090a);
    }

    public synchronized void a() {
        while (!this.f40111b) {
            wait();
        }
    }

    public synchronized void b() {
        boolean z10 = false;
        while (!this.f40111b) {
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
        z10 = this.f40111b;
        this.f40111b = false;
        return z10;
    }

    public synchronized boolean d() {
        return this.f40111b;
    }

    public synchronized boolean e() {
        if (this.f40111b) {
            return false;
        }
        this.f40111b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f40110a = eVar;
    }
}
