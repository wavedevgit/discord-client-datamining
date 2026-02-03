package mu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends lu.k {

    /* renamed from: d  reason: collision with root package name */
    private final long f39460d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39461e;

    /* renamed from: i  reason: collision with root package name */
    private long f39462i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Source delegate, long j10, boolean z10) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f39460d = j10;
        this.f39461e = z10;
    }

    private final void a(Buffer buffer, long j10) {
        Buffer buffer2 = new Buffer();
        buffer2.y0(buffer);
        buffer.t0(buffer2, j10);
        buffer2.l();
    }

    @Override // lu.k, okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j11 = this.f39462i;
        long j12 = this.f39460d;
        if (j11 > j12) {
            j10 = 0;
        } else if (this.f39461e) {
            long j13 = j12 - j11;
            if (j13 == 0) {
                return -1L;
            }
            j10 = Math.min(j10, j13);
        }
        long read = super.read(sink, j10);
        int i10 = (read > (-1L) ? 1 : (read == (-1L) ? 0 : -1));
        if (i10 != 0) {
            this.f39462i += read;
        }
        long j14 = this.f39462i;
        long j15 = this.f39460d;
        if ((j14 < j15 && i10 == 0) || j14 > j15) {
            if (read > 0 && j14 > j15) {
                a(sink, sink.size() - (this.f39462i - this.f39460d));
            }
            throw new IOException("expected " + this.f39460d + " bytes but got " + this.f39462i);
        }
        return read;
    }
}
