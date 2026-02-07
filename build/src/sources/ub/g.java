package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51330j;

    public g(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51316a = z10;
        this.f51330j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51317b = iVar.p(allocate, 16L);
        this.f51318c = iVar.z(allocate, 28L);
        this.f51319d = iVar.z(allocate, 32L);
        this.f51320e = iVar.p(allocate, 42L);
        this.f51321f = iVar.p(allocate, 44L);
        this.f51322g = iVar.p(allocate, 46L);
        this.f51323h = iVar.p(allocate, 48L);
        this.f51324i = iVar.p(allocate, 50L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new a(this.f51330j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new j(this.f51330j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new l(this.f51330j, this, i10);
    }
}
