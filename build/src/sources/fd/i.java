package fd;

import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i {

    /* renamed from: a  reason: collision with root package name */
    private long f24965a;

    /* renamed from: b  reason: collision with root package name */
    private long f24966b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24967c;

    private long a(long j10) {
        return this.f24965a + Math.max(0L, ((this.f24966b - 529) * 1000000) / j10);
    }

    public long b(Format format) {
        return a(format.K);
    }

    public void c() {
        this.f24965a = 0L;
        this.f24966b = 0L;
        this.f24967c = false;
    }

    public long d(Format format, qc.f fVar) {
        if (this.f24966b == 0) {
            this.f24965a = fVar.f47078p;
        }
        if (this.f24967c) {
            return fVar.f47078p;
        }
        ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(fVar.f47076i);
        int i10 = 0;
        for (int i11 = 0; i11 < 4; i11++) {
            i10 = (i10 << 8) | (byteBuffer.get(i11) & 255);
        }
        int m10 = nc.u.m(i10);
        if (m10 == -1) {
            this.f24967c = true;
            this.f24966b = 0L;
            this.f24965a = fVar.f47078p;
            ne.y.i("C2Mp3TimestampTracker", "MPEG audio header is invalid.");
            return fVar.f47078p;
        }
        long a10 = a(format.K);
        this.f24966b += m10;
        return a10;
    }
}
