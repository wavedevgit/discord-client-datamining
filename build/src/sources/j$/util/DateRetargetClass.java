package j$.util;

import j$.time.Instant;
import java.util.Date;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final /* synthetic */ class DateRetargetClass {
    public static Instant toInstant(Date date) {
        long time = date.getTime();
        Instant instant = Instant.f29425c;
        return Instant.r(Math.floorDiv(time, 1000L), ((int) Math.floorMod(time, 1000L)) * 1000000);
    }
}
