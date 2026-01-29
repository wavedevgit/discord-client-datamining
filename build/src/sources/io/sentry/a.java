package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements g1 {
    @Override // io.sentry.g1
    public io.sentry.transport.q a(k7 k7Var, w3 w3Var) {
        io.sentry.util.y.c(k7Var, "options is required");
        io.sentry.util.y.c(w3Var, "requestDetails is required");
        return new io.sentry.transport.e(k7Var, new io.sentry.transport.a0(k7Var), k7Var.getTransportGate(), w3Var);
    }
}
