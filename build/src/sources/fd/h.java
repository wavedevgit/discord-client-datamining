package fd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends qc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f23091t;

    /* renamed from: u  reason: collision with root package name */
    private int f23092u;

    /* renamed from: v  reason: collision with root package name */
    private int f23093v;

    public h() {
        super(2);
        this.f23093v = 32;
    }

    private boolean A(qc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f23092u >= this.f23093v || fVar.m() != m()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f46657i;
        if (byteBuffer2 == null || (byteBuffer = this.f46657i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f46659p;
    }

    public long C() {
        return this.f23091t;
    }

    public int D() {
        return this.f23092u;
    }

    public boolean E() {
        if (this.f23092u > 0) {
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
        this.f23093v = i10;
    }

    @Override // qc.f, qc.a
    public void h() {
        super.h();
        this.f23092u = 0;
    }

    public boolean z(qc.f fVar) {
        ne.a.a(!fVar.w());
        ne.a.a(!fVar.k());
        ne.a.a(!fVar.n());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f23092u;
        this.f23092u = i10 + 1;
        if (i10 == 0) {
            this.f46659p = fVar.f46659p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.m()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f46657i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f46657i.put(byteBuffer);
        }
        this.f23091t = fVar.f46659p;
        return true;
    }
}
