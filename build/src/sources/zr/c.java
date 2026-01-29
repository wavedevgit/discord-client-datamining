package zr;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f56067d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56068e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f56069i;

    /* renamed from: o  reason: collision with root package name */
    private long f56070o;

    public c(long j10, long j11, long j12) {
        this.f56067d = j12;
        this.f56068e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f56069i = z10;
        this.f56070o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f56069i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f56070o;
        if (j10 == this.f56068e) {
            if (this.f56069i) {
                this.f56069i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f56070o = this.f56067d + j10;
        return j10;
    }
}
