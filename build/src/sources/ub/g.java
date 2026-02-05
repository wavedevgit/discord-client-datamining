package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f51241j;

    public g(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f51227a = z10;
        this.f51241j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f51228b = iVar.y(allocate, 16L);
        this.f51229c = iVar.L(allocate, 28L);
        this.f51230d = iVar.L(allocate, 32L);
        this.f51231e = iVar.y(allocate, 42L);
        this.f51232f = iVar.y(allocate, 44L);
        this.f51233g = iVar.y(allocate, 46L);
        this.f51234h = iVar.y(allocate, 48L);
        this.f51235i = iVar.y(allocate, 50L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new a(this.f51241j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new j(this.f51241j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new l(this.f51241j, this, i10);
    }
}
