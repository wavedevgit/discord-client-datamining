package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends e {
    public k(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (dVar.f51418a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f51420c + (j10 * dVar.f51422e);
        this.f51427a = iVar.z(allocate, j11);
        this.f51428b = iVar.s(allocate, 8 + j11);
        this.f51429c = iVar.s(allocate, 16 + j11);
        this.f51430d = iVar.s(allocate, j11 + 40);
    }
}
