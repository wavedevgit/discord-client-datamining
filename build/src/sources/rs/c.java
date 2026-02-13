package rs;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f48317d;

    /* renamed from: e  reason: collision with root package name */
    private final long f48318e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f48319i;

    /* renamed from: o  reason: collision with root package name */
    private long f48320o;

    public c(long j10, long j11, long j12) {
        this.f48317d = j12;
        this.f48318e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f48319i = z10;
        this.f48320o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f48319i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f48320o;
        if (j10 == this.f48318e) {
            if (this.f48319i) {
                this.f48319i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f48320o = this.f48317d + j10;
        return j10;
    }
}
