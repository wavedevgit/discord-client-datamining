package td;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f50751b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50752c;

    /* renamed from: d  reason: collision with root package name */
    private long f50753d;

    public b(long j10, long j11) {
        this.f50751b = j10;
        this.f50752c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f50753d;
        if (j10 >= this.f50751b && j10 <= this.f50752c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f50753d;
    }

    public boolean e() {
        if (this.f50753d > this.f50752c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f50753d = this.f50751b - 1;
    }

    @Override // td.o
    public boolean next() {
        this.f50753d++;
        return !e();
    }
}
