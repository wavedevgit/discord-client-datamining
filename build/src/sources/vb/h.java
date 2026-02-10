package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51433j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51418a = z10;
        this.f51433j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51419b = iVar.p(allocate, 16L);
        this.f51420c = iVar.s(allocate, 32L);
        this.f51421d = iVar.s(allocate, 40L);
        this.f51422e = iVar.p(allocate, 54L);
        this.f51423f = iVar.p(allocate, 56L);
        this.f51424g = iVar.p(allocate, 58L);
        this.f51425h = iVar.p(allocate, 60L);
        this.f51426i = iVar.p(allocate, 62L);
    }

    @Override // vb.d
    public c a(long j10, int i10) {
        return new b(this.f51433j, this, j10, i10);
    }

    @Override // vb.d
    public e b(long j10) {
        return new k(this.f51433j, this, j10);
    }

    @Override // vb.d
    public f c(int i10) {
        return new m(this.f51433j, this, i10);
    }
}
