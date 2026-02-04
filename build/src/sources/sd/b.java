package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f49392b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49393c;

    /* renamed from: d  reason: collision with root package name */
    private long f49394d;

    public b(long j10, long j11) {
        this.f49392b = j10;
        this.f49393c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f49394d;
        if (j10 >= this.f49392b && j10 <= this.f49393c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f49394d;
    }

    public boolean e() {
        if (this.f49394d > this.f49393c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f49394d = this.f49392b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f49394d++;
        return !e();
    }
}
