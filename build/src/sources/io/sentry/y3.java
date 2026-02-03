package io.sentry;

import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final t8 f30903a;

    /* renamed from: b  reason: collision with root package name */
    private final Double f30904b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f30905c;

    public y3(t8 t8Var, i iVar, Double d10, Map map) {
        this.f30903a = (t8) io.sentry.util.y.c(t8Var, "transactionContexts is required");
        this.f30904b = d10;
        this.f30905c = map == null ? Collections.EMPTY_MAP : map;
    }

    public Double a() {
        return this.f30904b;
    }

    public t8 b() {
        return this.f30903a;
    }
}
