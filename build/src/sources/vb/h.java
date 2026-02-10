package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends d {

    /* renamed from: j  reason: collision with root package name */
    private final i f52191j;

    public h(boolean z10, i iVar) {
        ByteOrder byteOrder;
        this.f52176a = z10;
        this.f52191j = iVar;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (z10) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        this.f52177b = iVar.p(allocate, 16L);
        this.f52178c = iVar.s(allocate, 32L);
        this.f52179d = iVar.s(allocate, 40L);
        this.f52180e = iVar.p(allocate, 54L);
        this.f52181f = iVar.p(allocate, 56L);
        this.f52182g = iVar.p(allocate, 58L);
        this.f52183h = iVar.p(allocate, 60L);
        this.f52184i = iVar.p(allocate, 62L);
    }

    @Override // vb.d
    public c a(long j10, int i10) {
        return new b(this.f52191j, this, j10, i10);
    }

    @Override // vb.d
    public e b(long j10) {
        return new k(this.f52191j, this, j10);
    }

    @Override // vb.d
    public f c(int i10) {
        return new m(this.f52191j, this, i10);
    }
}
