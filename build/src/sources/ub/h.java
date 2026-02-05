package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51242j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51227a = z10;
        this.f51242j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51228b = iVar.y(allocate, 16L);
        this.f51229c = iVar.E(allocate, 32L);
        this.f51230d = iVar.E(allocate, 40L);
        this.f51231e = iVar.y(allocate, 54L);
        this.f51232f = iVar.y(allocate, 56L);
        this.f51233g = iVar.y(allocate, 58L);
        this.f51234h = iVar.y(allocate, 60L);
        this.f51235i = iVar.y(allocate, 62L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new b(this.f51242j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new k(this.f51242j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new m(this.f51242j, this, i10);
    }
}
