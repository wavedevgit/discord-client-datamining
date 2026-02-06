package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51283j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51268a = z10;
        this.f51283j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51269b = iVar.p(allocate, 16L);
        this.f51270c = iVar.s(allocate, 32L);
        this.f51271d = iVar.s(allocate, 40L);
        this.f51272e = iVar.p(allocate, 54L);
        this.f51273f = iVar.p(allocate, 56L);
        this.f51274g = iVar.p(allocate, 58L);
        this.f51275h = iVar.p(allocate, 60L);
        this.f51276i = iVar.p(allocate, 62L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new b(this.f51283j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new k(this.f51283j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new m(this.f51283j, this, i10);
    }
}
