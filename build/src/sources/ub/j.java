package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends e {
    public j(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (dVar.f50099a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f50101c + (j10 * dVar.f50103e);
        this.f50108a = iVar.L(allocate, j11);
        this.f50109b = iVar.L(allocate, 4 + j11);
        this.f50110c = iVar.L(allocate, 8 + j11);
        this.f50111d = iVar.L(allocate, j11 + 20);
    }
}
