package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f39519a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f39520b;

    public h() {
        this(e.f39499a);
    }

    public synchronized void a() {
        while (!this.f39520b) {
            wait();
        }
    }

    public synchronized boolean b(long j10) {
        if (j10 <= 0) {
            return this.f39520b;
        }
        long b10 = this.f39519a.b();
        long j11 = j10 + b10;
        if (j11 < b10) {
            a();
        } else {
            while (!this.f39520b && b10 < j11) {
                wait(j11 - b10);
                b10 = this.f39519a.b();
            }
        }
        return this.f39520b;
    }

    public synchronized void c() {
        boolean z10 = false;
        while (!this.f39520b) {
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
        z10 = this.f39520b;
        this.f39520b = false;
        return z10;
    }

    public synchronized boolean e() {
        return this.f39520b;
    }

    public synchronized boolean f() {
        if (this.f39520b) {
            return false;
        }
        this.f39520b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f39519a = eVar;
    }
}
