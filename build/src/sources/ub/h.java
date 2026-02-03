package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f50186j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f50171a = z10;
        this.f50186j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f50172b = iVar.B(allocate, 16L);
        this.f50173c = iVar.E(allocate, 32L);
        this.f50174d = iVar.E(allocate, 40L);
        this.f50175e = iVar.B(allocate, 54L);
        this.f50176f = iVar.B(allocate, 56L);
        this.f50177g = iVar.B(allocate, 58L);
        this.f50178h = iVar.B(allocate, 60L);
        this.f50179i = iVar.B(allocate, 62L);
    }

    @Override // ub.d
    public c a(long j10, int i10) {
        return new b(this.f50186j, this, j10, i10);
    }

    @Override // ub.d
    public e b(long j10) {
        return new k(this.f50186j, this, j10);
    }

    @Override // ub.d
    public f c(int i10) {
        return new m(this.f50186j, this, i10);
    }
}
