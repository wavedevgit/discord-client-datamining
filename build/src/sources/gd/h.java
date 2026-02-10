package gd;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends rc.f {

    /* renamed from: t  reason: collision with root package name */
    private long f25476t;

    /* renamed from: u  reason: collision with root package name */
    private int f25477u;

    /* renamed from: v  reason: collision with root package name */
    private int f25478v;

    public h() {
        super(2);
        this.f25478v = 32;
    }

    private boolean A(rc.f fVar) {
        ByteBuffer byteBuffer;
        if (!E()) {
            return true;
        }
        if (this.f25477u >= this.f25478v || fVar.m() != m()) {
            return false;
        }
        ByteBuffer byteBuffer2 = fVar.f46229i;
        if (byteBuffer2 == null || (byteBuffer = this.f46229i) == null || byteBuffer.position() + byteBuffer2.remaining() <= 3072000) {
            return true;
        }
        return false;
    }

    public long B() {
        return this.f46231p;
    }

    public long C() {
        return this.f25476t;
    }

    public int D() {
        return this.f25477u;
    }

    public boolean E() {
        if (this.f25477u > 0) {
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
        this.f25478v = i10;
    }

    @Override // rc.f, rc.a
    public void h() {
        super.h();
        this.f25477u = 0;
    }

    public boolean z(rc.f fVar) {
        oe.a.a(!fVar.w());
        oe.a.a(!fVar.l());
        oe.a.a(!fVar.n());
        if (!A(fVar)) {
            return false;
        }
        int i10 = this.f25477u;
        this.f25477u = i10 + 1;
        if (i10 == 0) {
            this.f46231p = fVar.f46231p;
            if (fVar.q()) {
                s(1);
            }
        }
        if (fVar.m()) {
            s(Integer.MIN_VALUE);
        }
        ByteBuffer byteBuffer = fVar.f46229i;
        if (byteBuffer != null) {
            u(byteBuffer.remaining());
            this.f46229i.put(byteBuffer);
        }
        this.f25476t = fVar.f46231p;
        return true;
    }
}
