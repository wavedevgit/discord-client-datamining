package td;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f48684b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48685c;

    /* renamed from: d  reason: collision with root package name */
    private long f48686d;

    public b(long j10, long j11) {
        this.f48684b = j10;
        this.f48685c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f48686d;
        if (j10 >= this.f48684b && j10 <= this.f48685c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f48686d;
    }

    public boolean e() {
        if (this.f48686d > this.f48685c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f48686d = this.f48684b - 1;
    }

    @Override // td.o
    public boolean next() {
        this.f48686d++;
        return !e();
    }
}
