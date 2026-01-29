package io.sentry;

import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface z0 {
    void a(long j10);

    void b();

    Future c(Runnable runnable, long j10);

    boolean isClosed();

    Future submit(Runnable runnable);
}
