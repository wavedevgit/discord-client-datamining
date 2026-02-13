package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends e {
    public k(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (dVar.f51987a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f51989c + (j10 * dVar.f51991e);
        this.f51996a = iVar.z(allocate, j11);
        this.f51997b = iVar.s(allocate, 8 + j11);
        this.f51998c = iVar.s(allocate, 16 + j11);
        this.f51999d = iVar.s(allocate, j11 + 40);
    }
}
