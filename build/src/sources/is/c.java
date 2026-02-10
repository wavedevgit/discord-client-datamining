package is;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f29642d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29643e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f29644i;

    /* renamed from: o  reason: collision with root package name */
    private long f29645o;

    public c(long j10, long j11, long j12) {
        this.f29642d = j12;
        this.f29643e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f29644i = z10;
        this.f29645o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f29644i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f29645o;
        if (j10 == this.f29643e) {
            if (this.f29644i) {
                this.f29644i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f29645o = this.f29642d + j10;
        return j10;
    }
}
