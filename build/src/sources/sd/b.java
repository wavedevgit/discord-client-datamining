package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f48915b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48916c;

    /* renamed from: d  reason: collision with root package name */
    private long f48917d;

    public b(long j10, long j11) {
        this.f48915b = j10;
        this.f48916c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f48917d;
        if (j10 >= this.f48915b && j10 <= this.f48916c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f48917d;
    }

    public boolean e() {
        if (this.f48917d > this.f48916c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f48917d = this.f48915b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f48917d++;
        return !e();
    }
}
