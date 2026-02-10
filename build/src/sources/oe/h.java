package oe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final e f40624a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40625b;

    public h() {
        this(e.f40604a);
    }

    public synchronized void a() {
        while (!this.f40625b) {
            wait();
        }
    }

    public synchronized boolean b(long j10) {
        if (j10 <= 0) {
            return this.f40625b;
        }
        long b10 = this.f40624a.b();
        long j11 = j10 + b10;
        if (j11 < b10) {
            a();
        } else {
            while (!this.f40625b && b10 < j11) {
                wait(j11 - b10);
                b10 = this.f40624a.b();
            }
        }
        return this.f40625b;
    }

    public synchronized void c() {
        boolean z10 = false;
        while (!this.f40625b) {
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
        z10 = this.f40625b;
        this.f40625b = false;
        return z10;
    }

    public synchronized boolean e() {
        return this.f40625b;
    }

    public synchronized boolean f() {
        if (this.f40625b) {
            return false;
        }
        this.f40625b = true;
        notifyAll();
        return true;
    }

    public h(e eVar) {
        this.f40624a = eVar;
    }
}
