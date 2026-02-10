package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f38950a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38951b;

    public h() {
        this(e.f38930a);
    }

    public synchronized void a() {
        while (!this.f38951b) {
            wait();
        }
    }

    public synchronized boolean b(long j10) {
        if (j10 <= 0) {
            return this.f38951b;
        }
        long b10 = this.f38950a.b();
        long j11 = j10 + b10;
        if (j11 < b10) {
            a();
        } else {
            while (!this.f38951b && b10 < j11) {
                wait(j11 - b10);
                b10 = this.f38950a.b();
            }
        }
        return this.f38951b;
    }

    public synchronized void c() {
        boolean z10 = false;
        while (!this.f38951b) {
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
        z10 = this.f38951b;
        this.f38951b = false;
        return z10;
    }

    public synchronized boolean e() {
        return this.f38951b;
    }

    public synchronized boolean f() {
        if (this.f38951b) {
            return false;
        }
        this.f38951b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f38950a = eVar;
    }
}
