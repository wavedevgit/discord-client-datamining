package td;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f49252b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49253c;

    /* renamed from: d  reason: collision with root package name */
    private long f49254d;

    public b(long j10, long j11) {
        this.f49252b = j10;
        this.f49253c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f49254d;
        if (j10 >= this.f49252b && j10 <= this.f49253c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f49254d;
    }

    public boolean e() {
        if (this.f49254d > this.f49253c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f49254d = this.f49252b - 1;
    }

    @Override // td.o
    public boolean next() {
        this.f49254d++;
        return !e();
    }
}
