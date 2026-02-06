package fd;

import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i {

    /* renamed from: a  reason: collision with root package name */
    private long f23094a;

    /* renamed from: b  reason: collision with root package name */
    private long f23095b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f23096c;

    private long a(long j10) {
        return this.f23094a + Math.max(0L, ((this.f23095b - 529) * 1000000) / j10);
    }

    public long b(Format format) {
        return a(format.K);
    }

    public void c() {
        this.f23094a = 0L;
        this.f23095b = 0L;
        this.f23096c = false;
    }

    public long d(Format format, qc.f fVar) {
        if (this.f23095b == 0) {
            this.f23094a = fVar.f46611p;
        }
        if (this.f23096c) {
            return fVar.f46611p;
        }
        ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(fVar.f46609i);
        int i10 = 0;
        for (int i11 = 0; i11 < 4; i11++) {
            i10 = (i10 << 8) | (byteBuffer.get(i11) & 255);
        }
        int m10 = nc.u.m(i10);
        if (m10 == -1) {
            this.f23096c = true;
            this.f23095b = 0L;
            this.f23094a = fVar.f46611p;
            ne.y.i("C2Mp3TimestampTracker", "MPEG audio header is invalid.");
            return fVar.f46611p;
        }
        long a10 = a(format.K);
        this.f23095b += m10;
        return a10;
    }
}
