package fd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends qc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f23765t;

    /* renamed from: u  reason: collision with root package name */
    private int f23766u;

    /* renamed from: v  reason: collision with root package name */
    private int f23767v;

    public h() {
        super(2);
        this.f23767v = 32;
    }

    private boolean A(qc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f23766u >= this.f23767v || fVar.l() != l()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f47497i;
        if (byteBuffer2 == null || (byteBuffer = this.f47497i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f47499p;
    }

    public long C() {
        return this.f23765t;
    }

    public int D() {
        return this.f23766u;
    }

    public boolean E() {
        if (this.f23766u > 0) {
            return true;
        }
        return false;
    }

    public void F(int i10) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f23767v = i10;
    }

    @Override // qc.f, qc.a
    public void h() {
        super.h();
        this.f23766u = 0;
    }

    public boolean z(qc.f fVar) {
        ne.a.a(!fVar.w());
        ne.a.a(!fVar.k());
        ne.a.a(!fVar.o());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f23766u;
        this.f23766u = i10 + 1;
        if (i10 == 0) {
            this.f47499p = fVar.f47499p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.l()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f47497i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f47497i.put(byteBuffer);
        }
        this.f23765t = fVar.f47499p;
        return true;
    }
}
