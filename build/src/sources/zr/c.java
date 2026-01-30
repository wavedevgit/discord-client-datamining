package zr;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f56083d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56084e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56085i;

    /* renamed from: o  reason: collision with root package name */
    private long f56086o;

    public c(long j10, long j11, long j12) {
        this.f56083d = j12;
        this.f56084e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f56085i = z10;
        this.f56086o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f56085i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f56086o;
        if (j10 == this.f56084e) {
            if (this.f56085i) {
                this.f56085i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f56086o = this.f56083d + j10;
        return j10;
    }
}
