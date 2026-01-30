package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f48931b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48932c;

    /* renamed from: d  reason: collision with root package name */
    private long f48933d;

    public b(long j10, long j11) {
        this.f48931b = j10;
        this.f48932c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f48933d;
        if (j10 >= this.f48931b && j10 <= this.f48932c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f48933d;
    }

    public boolean e() {
        if (this.f48933d > this.f48932c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f48933d = this.f48931b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f48933d++;
        return !e();
    }
}
