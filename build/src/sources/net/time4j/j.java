package net.time4j;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements Serializable {
    private static final long serialVersionUID = -4124961309622141228L;
    private final long days;
    private final g0 time;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(long j10, g0 g0Var) {
        this.days = j10;
        this.time = g0Var;
    }

    public long a() {
        return this.days;
    }

    public g0 b() {
        return this.time;
    }
}
