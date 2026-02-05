package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f49541b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49542c;

    /* renamed from: d  reason: collision with root package name */
    private long f49543d;

    public b(long j10, long j11) {
        this.f49541b = j10;
        this.f49542c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f49543d;
        if (j10 >= this.f49541b && j10 <= this.f49542c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f49543d;
    }

    public boolean e() {
        if (this.f49543d > this.f49542c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f49543d = this.f49541b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f49543d++;
        return !e();
    }
}
