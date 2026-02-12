package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends e {
    public k(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (dVar.f51419a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f51421c + (j10 * dVar.f51423e);
        this.f51428a = iVar.z(allocate, j11);
        this.f51429b = iVar.s(allocate, 8 + j11);
        this.f51430c = iVar.s(allocate, 16 + j11);
        this.f51431d = iVar.s(allocate, j11 + 40);
    }
}
