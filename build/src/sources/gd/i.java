package gd;

import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i {

    /* renamed from: a  reason: collision with root package name */
    private long f25480a;

    /* renamed from: b  reason: collision with root package name */
    private long f25481b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f25482c;

    private long a(long j10) {
        return this.f25480a + Math.max(0L, ((this.f25481b - 529) * 1000000) / j10);
    }

    public long b(Format format) {
        return a(format.K);
    }

    public void c() {
        this.f25480a = 0L;
        this.f25481b = 0L;
        this.f25482c = false;
    }

    public long d(Format format, rc.f fVar) {
        if (this.f25481b == 0) {
            this.f25480a = fVar.f46232p;
        }
        if (this.f25482c) {
            return fVar.f46232p;
        }
        ByteBuffer byteBuffer = (ByteBuffer) oe.a.e(fVar.f46230i);
        int i10 = 0;
        for (int i11 = 0; i11 < 4; i11++) {
            i10 = (i10 << 8) | (byteBuffer.get(i11) & 255);
        }
        int m10 = oc.u.m(i10);
        if (m10 == -1) {
            this.f25482c = true;
            this.f25481b = 0L;
            this.f25480a = fVar.f46232p;
            oe.y.i("C2Mp3TimestampTracker", "MPEG audio header is invalid.");
            return fVar.f46232p;
        }
        long a10 = a(format.K);
        this.f25481b += m10;
        return a10;
    }
}
