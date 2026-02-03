package ku;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends ju.k {

    /* renamed from: d  reason: collision with root package name */
    private final long f36733d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f36734e;

    /* renamed from: i  reason: collision with root package name */
    private long f36735i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Source delegate, long j10, boolean z10) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f36733d = j10;
        this.f36734e = z10;
    }

    private final void a(Buffer buffer, long j10) {
        Buffer buffer2 = new Buffer();
        buffer2.A0(buffer);
        buffer.v0(buffer2, j10);
        buffer2.l();
    }

    @Override // ju.k, okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j11 = this.f36735i;
        long j12 = this.f36733d;
        if (j11 > j12) {
            j10 = 0;
        } else if (this.f36734e) {
            long j13 = j12 - j11;
            if (j13 == 0) {
                return -1L;
            }
            j10 = Math.min(j10, j13);
        }
        long read = super.read(sink, j10);
        int i10 = (read > (-1L) ? 1 : (read == (-1L) ? 0 : -1));
        if (i10 != 0) {
            this.f36735i += read;
        }
        long j14 = this.f36735i;
        long j15 = this.f36733d;
        if ((j14 < j15 && i10 == 0) || j14 > j15) {
            if (read > 0 && j14 > j15) {
                a(sink, sink.size() - (this.f36735i - this.f36733d));
            }
            throw new IOException("expected " + this.f36733d + " bytes but got " + this.f36735i);
        }
        return read;
    }
}
