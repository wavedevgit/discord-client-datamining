package fd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends qc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f24962t;

    /* renamed from: u  reason: collision with root package name */
    private int f24963u;

    /* renamed from: v  reason: collision with root package name */
    private int f24964v;

    public h() {
        super(2);
        this.f24964v = 32;
    }

    private boolean A(qc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f24963u >= this.f24964v || fVar.l() != l()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f47092i;
        if (byteBuffer2 == null || (byteBuffer = this.f47092i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f47094p;
    }

    public long C() {
        return this.f24962t;
    }

    public int D() {
        return this.f24963u;
    }

    public boolean E() {
        if (this.f24963u > 0) {
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
        this.f24964v = i10;
    }

    @Override // qc.f, qc.a
    public void h() {
        super.h();
        this.f24963u = 0;
    }

    public boolean z(qc.f fVar) {
        ne.a.a(!fVar.w());
        ne.a.a(!fVar.k());
        ne.a.a(!fVar.o());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f24963u;
        this.f24963u = i10 + 1;
        if (i10 == 0) {
            this.f47094p = fVar.f47094p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.l()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f47092i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f47092i.put(byteBuffer);
        }
        this.f24962t = fVar.f47094p;
        return true;
    }
}
