package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends e {
    public k(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (dVar.f50115a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f50117c + (j10 * dVar.f50119e);
        this.f50124a = iVar.L(allocate, j11);
        this.f50125b = iVar.E(allocate, 8 + j11);
        this.f50126c = iVar.E(allocate, 16 + j11);
        this.f50127d = iVar.E(allocate, j11 + 40);
    }
}
