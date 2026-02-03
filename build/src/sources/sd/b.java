package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f49395b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49396c;

    /* renamed from: d  reason: collision with root package name */
    private long f49397d;

    public b(long j10, long j11) {
        this.f49395b = j10;
        this.f49396c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f49397d;
        if (j10 >= this.f49395b && j10 <= this.f49396c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f49397d;
    }

    public boolean e() {
        if (this.f49397d > this.f49396c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f49397d = this.f49395b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f49397d++;
        return !e();
    }
}
