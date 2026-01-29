package v8;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b {
    @o8.d
    default long now() {
        return TimeUnit.NANOSECONDS.toMillis(nowNanos());
    }

    @o8.d
    long nowNanos();
}
