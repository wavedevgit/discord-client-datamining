package rs;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f47748d;

    /* renamed from: e  reason: collision with root package name */
    private final long f47749e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f47750i;

    /* renamed from: o  reason: collision with root package name */
    private long f47751o;

    public c(long j10, long j11, long j12) {
        this.f47748d = j12;
        this.f47749e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f47750i = z10;
        this.f47751o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f47750i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f47751o;
        if (j10 == this.f47749e) {
            if (this.f47750i) {
                this.f47750i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f47751o = this.f47748d + j10;
        return j10;
    }
}
