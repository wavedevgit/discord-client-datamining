package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f48985b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48986c;

    /* renamed from: d  reason: collision with root package name */
    private long f48987d;

    public b(long j10, long j11) {
        this.f48985b = j10;
        this.f48986c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f48987d;
        if (j10 >= this.f48985b && j10 <= this.f48986c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f48987d;
    }

    public boolean e() {
        if (this.f48987d > this.f48986c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f48987d = this.f48985b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f48987d++;
        return !e();
    }
}
