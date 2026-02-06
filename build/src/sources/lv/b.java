package lv;

import android.util.StatsEvent;
import android.util.StatsLog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static void a(int i10, long j10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19, int i20, int i21, int i22, int i23) {
        StatsEvent.Builder newBuilder = StatsEvent.newBuilder();
        newBuilder.setAtomId(i10);
        newBuilder.writeLong(j10);
        newBuilder.writeInt(i11);
        newBuilder.writeInt(i12);
        newBuilder.writeInt(i13);
        newBuilder.writeInt(i14);
        newBuilder.writeInt(i15);
        newBuilder.writeInt(i16);
        newBuilder.writeInt(i17);
        newBuilder.writeInt(i18);
        newBuilder.writeInt(i19);
        newBuilder.writeInt(i20);
        newBuilder.writeInt(i21);
        newBuilder.writeInt(i22);
        newBuilder.writeInt(i23);
        if (762 == i10) {
            newBuilder.addBooleanAnnotation((byte) 1, true);
        }
        newBuilder.usePooledBuffer();
        StatsLog.write(newBuilder.build());
    }
}
