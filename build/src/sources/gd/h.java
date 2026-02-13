package gd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends rc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f25477t;

    /* renamed from: u  reason: collision with root package name */
    private int f25478u;

    /* renamed from: v  reason: collision with root package name */
    private int f25479v;

    public h() {
        super(2);
        this.f25479v = 32;
    }

    private boolean A(rc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f25478u >= this.f25479v || fVar.m() != m()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f46798i;
        if (byteBuffer2 == null || (byteBuffer = this.f46798i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f46800p;
    }

    public long C() {
        return this.f25477t;
    }

    public int D() {
        return this.f25478u;
    }

    public boolean E() {
        if (this.f25478u > 0) {
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
        oe.a.a(z10);
        this.f25479v = i10;
    }

    @Override // rc.f, rc.a
    public void h() {
        super.h();
        this.f25478u = 0;
    }

    public boolean z(rc.f fVar) {
        oe.a.a(!fVar.w());
        oe.a.a(!fVar.l());
        oe.a.a(!fVar.n());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f25478u;
        this.f25478u = i10 + 1;
        if (i10 == 0) {
            this.f46800p = fVar.f46800p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.m()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f46798i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f46798i.put(byteBuffer);
        }
        this.f25477t = fVar.f46800p;
        return true;
    }
}
