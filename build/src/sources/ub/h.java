package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51331j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51316a = z10;
        this.f51331j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51317b = iVar.p(allocate, 16L);
        this.f51318c = iVar.s(allocate, 32L);
        this.f51319d = iVar.s(allocate, 40L);
        this.f51320e = iVar.p(allocate, 54L);
        this.f51321f = iVar.p(allocate, 56L);
        this.f51322g = iVar.p(allocate, 58L);
        this.f51323h = iVar.p(allocate, 60L);
        this.f51324i = iVar.p(allocate, 62L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new b(this.f51331j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new k(this.f51331j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new m(this.f51331j, this, i10);
    }
}
