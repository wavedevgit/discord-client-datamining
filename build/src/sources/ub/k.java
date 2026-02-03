package ub;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends e {
    public k(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (dVar.f50458a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f50460c + (j10 * dVar.f50462e);
        this.f50467a = iVar.L(allocate, j11);
        this.f50468b = iVar.E(allocate, 8 + j11);
        this.f50469c = iVar.E(allocate, 16 + j11);
        this.f50470d = iVar.E(allocate, j11 + 40);
    }
}
