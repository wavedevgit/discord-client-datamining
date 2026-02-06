package ne;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f38925a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38926b;

    public h() {
        this(e.f38905a);
    }

    public synchronized void a() {
        while (!this.f38926b) {
            wait();
        }
    }

    public synchronized boolean b(long j10) {
        if (j10 <= 0) {
            return this.f38926b;
        }
        long b10 = this.f38925a.b();
        long j11 = j10 + b10;
        if (j11 < b10) {
            a();
        } else {
            while (!this.f38926b && b10 < j11) {
                wait(j11 - b10);
                b10 = this.f38925a.b();
            }
        }
        return this.f38926b;
    }

    public synchronized void c() {
        boolean z10 = false;
        while (!this.f38926b) {
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
        z10 = this.f38926b;
        this.f38926b = false;
        return z10;
    }

    public synchronized boolean e() {
        return this.f38926b;
    }

    public synchronized boolean f() {
        if (this.f38926b) {
            return false;
        }
        this.f38926b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f38925a = eVar;
    }
}
