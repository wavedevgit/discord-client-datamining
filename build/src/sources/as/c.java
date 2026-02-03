package as;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f6054d;

    /* renamed from: e  reason: collision with root package name */
    private final long f6055e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f6056i;

    /* renamed from: o  reason: collision with root package name */
    private long f6057o;

    public c(long j10, long j11, long j12) {
        this.f6054d = j12;
        this.f6055e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f6056i = z10;
        this.f6057o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f6056i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f6057o;
        if (j10 == this.f6055e) {
            if (this.f6056i) {
                this.f6056i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f6057o = this.f6054d + j10;
        return j10;
    }
}
