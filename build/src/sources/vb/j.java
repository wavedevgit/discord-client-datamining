package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends e {
    public j(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (dVar.f51418a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f51420c + (j10 * dVar.f51422e);
        this.f51427a = iVar.z(allocate, j11);
        this.f51428b = iVar.z(allocate, 4 + j11);
        this.f51429c = iVar.z(allocate, 8 + j11);
        this.f51430d = iVar.z(allocate, j11 + 20);
    }
}
