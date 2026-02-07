package sd;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements o {

    /* renamed from: b  reason: collision with root package name */
    private final long f49910b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49911c;

    /* renamed from: d  reason: collision with root package name */
    private long f49912d;

    public b(long j10, long j11) {
        this.f49910b = j10;
        this.f49911c = j11;
        f();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c() {
        long j10 = this.f49912d;
        if (j10 >= this.f49910b && j10 <= this.f49911c) {
            return;
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long d() {
        return this.f49912d;
    }

    public boolean e() {
        if (this.f49912d > this.f49911c) {
            return true;
        }
        return false;
    }

    public void f() {
        this.f49912d = this.f49910b - 1;
    }

    @Override // sd.o
    public boolean next() {
        this.f49912d++;
        return !e();
    }
}
