package fs;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f23459d;

    /* renamed from: e  reason: collision with root package name */
    private final long f23460e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f23461i;

    /* renamed from: o  reason: collision with root package name */
    private long f23462o;

    public c(long j10, long j11, long j12) {
        this.f23459d = j12;
        this.f23460e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f23461i = z10;
        this.f23462o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f23461i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f23462o;
        if (j10 == this.f23460e) {
            if (this.f23461i) {
                this.f23461i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f23462o = this.f23459d + j10;
        return j10;
    }
}
