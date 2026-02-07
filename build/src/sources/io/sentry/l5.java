package io.sentry;

import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l5 {

    /* renamed from: a  reason: collision with root package name */
    private final m5 f28326a;

    /* renamed from: b  reason: collision with root package name */
    private final Iterable f28327b;

    public l5(m5 m5Var, Iterable iterable) {
        this.f28326a = (m5) io.sentry.util.y.c(m5Var, "SentryEnvelopeHeader is required.");
        this.f28327b = (Iterable) io.sentry.util.y.c(iterable, "SentryEnvelope items are required.");
    }

    public static l5 a(b1 b1Var, z7 z7Var, io.sentry.protocol.r rVar) {
        io.sentry.util.y.c(b1Var, "Serializer is required.");
        io.sentry.util.y.c(z7Var, "session is required.");
        return new l5(null, rVar, l6.G(b1Var, z7Var));
    }

    public m5 b() {
        return this.f28326a;
    }

    public Iterable c() {
        return this.f28327b;
    }

    public l5(io.sentry.protocol.x xVar, io.sentry.protocol.r rVar, l6 l6Var) {
        io.sentry.util.y.c(l6Var, "SentryEnvelopeItem is required.");
        this.f28326a = new m5(xVar, rVar);
        ArrayList arrayList = new ArrayList(1);
        arrayList.add(l6Var);
        this.f28327b = arrayList;
    }
}
