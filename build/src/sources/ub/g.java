package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f50469j;

    public g(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f50455a = z10;
        this.f50469j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f50456b = iVar.B(allocate, 16L);
        this.f50457c = iVar.L(allocate, 28L);
        this.f50458d = iVar.L(allocate, 32L);
        this.f50459e = iVar.B(allocate, 42L);
        this.f50460f = iVar.B(allocate, 44L);
        this.f50461g = iVar.B(allocate, 46L);
        this.f50462h = iVar.B(allocate, 48L);
        this.f50463i = iVar.B(allocate, 50L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new a(this.f50469j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new j(this.f50469j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new l(this.f50469j, this, i10);
    }
}
