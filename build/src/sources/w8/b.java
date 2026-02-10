package w8;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b {
    @p8.d
    default long now() {
        return TimeUnit.NANOSECONDS.toMillis(nowNanos());
    }

    @p8.d
    long nowNanos();
}
