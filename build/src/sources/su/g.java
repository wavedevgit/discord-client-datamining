package su;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends ru.k {

    /* renamed from: d  reason: collision with root package name */
    private final long f50431d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50432e;

    /* renamed from: i  reason: collision with root package name */
    private long f50433i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Source delegate, long j10, boolean z10) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f50431d = j10;
        this.f50432e = z10;
    }

    private final void a(Buffer buffer, long j10) {
        Buffer buffer2 = new Buffer();
        buffer2.z0(buffer);
        buffer.u0(buffer2, j10);
        buffer2.k();
    }

    @Override // ru.k, okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j11 = this.f50433i;
        long j12 = this.f50431d;
        if (j11 > j12) {
            j10 = 0;
        } else if (this.f50432e) {
            long j13 = j12 - j11;
            if (j13 == 0) {
                return -1L;
            }
            j10 = Math.min(j10, j13);
        }
        long read = super.read(sink, j10);
        int i10 = (read > (-1L) ? 1 : (read == (-1L) ? 0 : -1));
        if (i10 != 0) {
            this.f50433i += read;
        }
        long j14 = this.f50433i;
        long j15 = this.f50431d;
        if ((j14 < j15 && i10 == 0) || j14 > j15) {
            if (read > 0 && j14 > j15) {
                a(sink, sink.size() - (this.f50433i - this.f50431d));
            }
            throw new IOException("expected " + this.f50431d + " bytes but got " + this.f50433i);
        }
        return read;
    }
}
