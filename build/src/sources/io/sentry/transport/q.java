package io.sentry.transport;

import io.sentry.Hint;
import io.sentry.l5;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface q extends Closeable {
    default void R1(l5 l5Var) {
        a0(l5Var, new Hint());
    }

    void a0(l5 l5Var, Hint hint);

    void c(boolean z10);

    void d(long j10);

    default boolean g() {
        return true;
    }

    a0 j();
}
