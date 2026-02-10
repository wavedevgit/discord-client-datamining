package vb;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends e {
    public j(i iVar, d dVar, long j10) {
        ByteOrder byteOrder;
        ByteBuffer allocate = ByteBuffer.allocate(4);
        if (dVar.f52176a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j11 = dVar.f52178c + (j10 * dVar.f52180e);
        this.f52185a = iVar.z(allocate, j11);
        this.f52186b = iVar.z(allocate, 4 + j11);
        this.f52187c = iVar.z(allocate, 8 + j11);
        this.f52188d = iVar.z(allocate, j11 + 20);
    }
}
