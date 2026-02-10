package td;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f48683b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48684c;

    /* renamed from: d  reason: collision with root package name */
    private long f48685d;

    public b(long j10, long j11) {
        this.f48683b = j10;
        this.f48684c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f48685d;
        if (j10 >= this.f48683b && j10 <= this.f48684c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f48685d;
    }

    public boolean e() {
        if (this.f48685d > this.f48684c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f48685d = this.f48683b - 1;
    }

    @Override // td.o
    public boolean next() {
        this.f48685d++;
        return !e();
    }
}
