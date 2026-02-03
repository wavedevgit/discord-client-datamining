package cs;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f19818d;

    /* renamed from: e  reason: collision with root package name */
    private final long f19819e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f19820i;

    /* renamed from: o  reason: collision with root package name */
    private long f19821o;

    public c(long j10, long j11, long j12) {
        this.f19818d = j12;
        this.f19819e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f19820i = z10;
        this.f19821o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f19820i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f19821o;
        if (j10 == this.f19819e) {
            if (this.f19820i) {
                this.f19820i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f19821o = this.f19818d + j10;
        return j10;
    }
}
