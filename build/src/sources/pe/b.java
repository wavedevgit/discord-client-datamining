package pe;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.w1;
import java.nio.ByteBuffer;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends com.google.android.exoplayer2.f {
    private final qc.f A;
    private final h0 B;
    private long C;
    private a D;
    private long E;

    public b() {
        super(6);
        this.A = new qc.f(1);
        this.B = new h0();
    }

    private float[] a0(ByteBuffer byteBuffer) {
        if (byteBuffer.remaining() != 16) {
            return null;
        }
        this.B.S(byteBuffer.array(), byteBuffer.limit());
        this.B.U(byteBuffer.arrayOffset() + 4);
        float[] fArr = new float[3];
        for (int i10 = 0; i10 < 3; i10++) {
            fArr[i10] = Float.intBitsToFloat(this.B.u());
        }
        return fArr;
    }

    private void b0() {
        a aVar = this.D;
        if (aVar != null) {
            aVar.c();
        }
    }

    @Override // com.google.android.exoplayer2.f
    protected void O() {
        b0();
    }

    @Override // com.google.android.exoplayer2.f
    protected void Q(long j10, boolean z10) {
        this.E = Long.MIN_VALUE;
        b0();
    }

    @Override // com.google.android.exoplayer2.f
    protected void W(Format[] formatArr, long j10, long j11) {
        this.C = j11;
    }

    @Override // com.google.android.exoplayer2.w1
    public int a(Format format) {
        if ("application/x-camera-motion".equals(format.f12335w)) {
            return w1.b(4);
        }
        return w1.b(0);
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean d() {
        return h();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public String getName() {
        return "CameraMotionRenderer";
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean isReady() {
        return true;
    }

    @Override // com.google.android.exoplayer2.f, com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
        if (i10 == 8) {
            this.D = (a) obj;
        } else {
            super.n(i10, obj);
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public void y(long j10, long j11) {
        while (!h() && this.E < 100000 + j10) {
            this.A.h();
            if (X(J(), this.A, 0) == -4 && !this.A.o()) {
                qc.f fVar = this.A;
                this.E = fVar.f47349p;
                if (this.D != null && !fVar.m()) {
                    this.A.v();
                    float[] a02 = a0((ByteBuffer) w0.j(this.A.f47347i));
                    if (a02 != null) {
                        ((a) w0.j(this.D)).b(this.E - this.C, a02);
                    }
                }
            } else {
                return;
            }
        }
    }
}
