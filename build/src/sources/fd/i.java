package fd;

import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i {

    /* renamed from: a  reason: collision with root package name */
    private long f22793a;

    /* renamed from: b  reason: collision with root package name */
    private long f22794b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22795c;

    private long a(long j10) {
        return this.f22793a + Math.max(0L, ((this.f22794b - 529) * 1000000) / j10);
    }

    public long b(Format format) {
        return a(format.K);
    }

    public void c() {
        this.f22793a = 0L;
        this.f22794b = 0L;
        this.f22795c = false;
    }

    public long d(Format format, qc.f fVar) {
        if (this.f22794b == 0) {
            this.f22793a = fVar.f47563p;
        }
        if (this.f22795c) {
            return fVar.f47563p;
        }
        ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(fVar.f47561i);
        int i10 = 0;
        for (int i11 = 0; i11 < 4; i11++) {
            i10 = (i10 << 8) | (byteBuffer.get(i11) & 255);
        }
        int m10 = nc.u.m(i10);
        if (m10 == -1) {
            this.f22795c = true;
            this.f22794b = 0L;
            this.f22793a = fVar.f47563p;
            ne.y.i("C2Mp3TimestampTracker", "MPEG audio header is invalid.");
            return fVar.f47563p;
        }
        long a10 = a(format.K);
        this.f22794b += m10;
        return a10;
    }
}
