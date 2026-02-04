package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends e {
    public j(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (dVar.f50455a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f50457c + (j10 * dVar.f50459e);
        this.f50464a = iVar.L(allocate, j11);
        this.f50465b = iVar.L(allocate, 4 + j11);
        this.f50466c = iVar.L(allocate, 8 + j11);
        this.f50467d = iVar.L(allocate, j11 + 20);
    }
}
