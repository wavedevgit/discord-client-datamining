package fd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends qc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f24173t;

    /* renamed from: u  reason: collision with root package name */
    private int f24174u;

    /* renamed from: v  reason: collision with root package name */
    private int f24175v;

    public h() {
        super(2);
        this.f24175v = 32;
    }

    private boolean A(qc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f24174u >= this.f24175v || fVar.m() != m()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f47347i;
        if (byteBuffer2 == null || (byteBuffer = this.f47347i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f47349p;
    }

    public long C() {
        return this.f24173t;
    }

    public int D() {
        return this.f24174u;
    }

    public boolean E() {
        if (this.f24174u > 0) {
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
        this.f24175v = i10;
    }

    @Override // qc.f, qc.a
    public void h() {
        super.h();
        this.f24174u = 0;
    }

    public boolean z(qc.f fVar) {
        ne.a.a(!fVar.w());
        ne.a.a(!fVar.l());
        ne.a.a(!fVar.o());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f24174u;
        this.f24174u = i10 + 1;
        if (i10 == 0) {
            this.f47349p = fVar.f47349p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.m()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f47347i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f47347i.put(byteBuffer);
        }
        this.f24173t = fVar.f47349p;
        return true;
    }
}
