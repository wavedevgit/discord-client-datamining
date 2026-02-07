package hs;

import java.util.NoSuchElementException;
import kotlin.collections.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends n0 {

    /* renamed from: d  reason: collision with root package name */
    private final long f26502d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26503e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26504i;

    /* renamed from: o  reason: collision with root package name */
    private long f26505o;

    public c(long j10, long j11, long j12) {
        this.f26502d = j12;
        this.f26503e = j11;
        boolean z10 = false;
        if (j12 <= 0 ? j10 >= j11 : j10 <= j11) {
            z10 = true;
        }
        this.f26504i = z10;
        this.f26505o = z10 ? j10 : j11;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.f26504i;
    }

    @Override // kotlin.collections.n0
    public long nextLong() {
        long j10 = this.f26505o;
        if (j10 == this.f26503e) {
            if (this.f26504i) {
                this.f26504i = false;
                return j10;
            }
            throw new NoSuchElementException();
        }
        this.f26505o = this.f26502d + j10;
        return j10;
    }
}
