package ru;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends qu.k {

    /* renamed from: d  reason: collision with root package name */
    private final long f49558d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49559e;

    /* renamed from: i  reason: collision with root package name */
    private long f49560i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Source delegate, long j10, boolean z10) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f49558d = j10;
        this.f49559e = z10;
    }

    private final void a(Buffer buffer, long j10) {
        Buffer buffer2 = new Buffer();
        buffer2.B0(buffer);
        buffer.w0(buffer2, j10);
        buffer2.k();
    }

    @Override // qu.k, okio.Source
    public long read(Buffer sink, long j10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        long j11 = this.f49560i;
        long j12 = this.f49558d;
        if (j11 > j12) {
            j10 = 0;
        } else if (this.f49559e) {
            long j13 = j12 - j11;
            if (j13 == 0) {
                return -1L;
            }
            j10 = Math.min(j10, j13);
        }
        long read = super.read(sink, j10);
        int i10 = (read > (-1L) ? 1 : (read == (-1L) ? 0 : -1));
        if (i10 != 0) {
            this.f49560i += read;
        }
        long j14 = this.f49560i;
        long j15 = this.f49558d;
        if ((j14 < j15 && i10 == 0) || j14 > j15) {
            if (read > 0 && j14 > j15) {
                a(sink, sink.size() - (this.f49560i - this.f49558d));
            }
            throw new IOException("expected " + this.f49558d + " bytes but got " + this.f49560i);
        }
        return read;
    }
}
