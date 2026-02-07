package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f38973a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38974b;

    public h() {
        this(e.f38953a);
    }

    public synchronized void a() {
        while (!this.f38974b) {
            wait();
        }
    }

    public synchronized boolean b(long j10) {
        if (j10 <= 0) {
            return this.f38974b;
        }
        long b10 = this.f38973a.b();
        long j11 = j10 + b10;
        if (j11 < b10) {
            a();
        } else {
            while (!this.f38974b && b10 < j11) {
                wait(j11 - b10);
                b10 = this.f38973a.b();
            }
        }
        return this.f38974b;
    }

    public synchronized void c() {
        boolean z10 = false;
        while (!this.f38974b) {
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

    public synchronized boolean d() {
        boolean z10;
        z10 = this.f38974b;
        this.f38974b = false;
        return z10;
    }

    public synchronized boolean e() {
        return this.f38974b;
    }

    public synchronized boolean f() {
        if (this.f38974b) {
            return false;
        }
        this.f38974b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f38973a = eVar;
    }
}
