package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f52190j;

    public g(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f52176a = z10;
        this.f52190j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f52177b = iVar.p(allocate, 16L);
        this.f52178c = iVar.z(allocate, 28L);
        this.f52179d = iVar.z(allocate, 32L);
        this.f52180e = iVar.p(allocate, 42L);
        this.f52181f = iVar.p(allocate, 44L);
        this.f52182g = iVar.p(allocate, 46L);
        this.f52183h = iVar.p(allocate, 48L);
        this.f52184i = iVar.p(allocate, 50L);
    }

    @Override // vb.d
    public c a(long j10, int i10) {
        return new a(this.f52190j, this, j10, i10);
    }

    @Override // vb.d
    public e b(long j10) {
        return new j(this.f52190j, this, j10);
    }

    @Override // vb.d
    public f c(int i10) {
        return new l(this.f52190j, this, i10);
    }
}
