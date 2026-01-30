package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f50130j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f50115a = z10;
        this.f50130j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f50116b = iVar.B(allocate, 16L);
        this.f50117c = iVar.E(allocate, 32L);
        this.f50118d = iVar.E(allocate, 40L);
        this.f50119e = iVar.B(allocate, 54L);
        this.f50120f = iVar.B(allocate, 56L);
        this.f50121g = iVar.B(allocate, 58L);
        this.f50122h = iVar.B(allocate, 60L);
        this.f50123i = iVar.B(allocate, 62L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new b(this.f50130j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new k(this.f50130j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new m(this.f50130j, this, i10);
    }
}
