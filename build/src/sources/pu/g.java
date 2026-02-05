package pu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends ou.k {

    /* renamed from: d  reason: collision with root package name */
    private final long f46657d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f46658e;

    /* renamed from: i  reason: collision with root package name */
    private long f46659i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Source delegate, long j10, boolean z10) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f46657d = j10;
        this.f46658e = z10;
    }

    private final void a(Buffer buffer, long j10) {
        Buffer buffer2 = new Buffer();
        buffer2.z0(buffer);
        buffer.u0(buffer2, j10);
        buffer2.k();
    }

    @Override // ou.k, okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j11 = this.f46659i;
        long j12 = this.f46657d;
        if (j11 > j12) {
            j10 = 0;
        } else if (this.f46658e) {
            long j13 = j12 - j11;
            if (j13 == 0) {
                return -1L;
            }
            j10 = Math.min(j10, j13);
        }
        long read = super.read(sink, j10);
        int i10 = (read > (-1L) ? 1 : (read == (-1L) ? 0 : -1));
        if (i10 != 0) {
            this.f46659i += read;
        }
        long j14 = this.f46659i;
        long j15 = this.f46657d;
        if ((j14 < j15 && i10 == 0) || j14 > j15) {
            if (read > 0 && j14 > j15) {
                a(sink, sink.size() - (this.f46659i - this.f46657d));
            }
            throw new IOException("expected " + this.f46657d + " bytes but got " + this.f46659i);
        }
        return read;
    }
}
