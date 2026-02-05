package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r8 {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f29559a;

    public r8(k7 k7Var) {
        this.f29559a = (k7) io.sentry.util.y.c(k7Var, "options are required");
    }

    private boolean b(Double d10, Double d11) {
        if (d10.doubleValue() >= d11.doubleValue()) {
            return true;
        }
        return false;
    }

    public s8 a(y3 y3Var) {
        boolean z10;
        Double valueOf;
        Double a10 = y3Var.a();
        s8 l10 = y3Var.b().l();
        if (l10 != null) {
            return io.sentry.util.c0.a(l10);
        }
        this.f29559a.getProfilesSampler();
        Double profilesSampleRate = this.f29559a.getProfilesSampleRate();
        if (profilesSampleRate != null && b(profilesSampleRate, a10)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Boolean valueOf2 = Boolean.valueOf(z10);
        this.f29559a.getTracesSampler();
        s8 z11 = y3Var.b().z();
        if (z11 != null) {
            return io.sentry.util.c0.a(z11);
        }
        Double tracesSampleRate = this.f29559a.getTracesSampleRate();
        double pow = Math.pow(2.0d, this.f29559a.getBackpressureMonitor().a());
        if (tracesSampleRate == null) {
            valueOf = null;
        } else {
            valueOf = Double.valueOf(tracesSampleRate.doubleValue() / pow);
        }
        Double d10 = valueOf;
        if (d10 != null) {
            return new s8(Boolean.valueOf(b(d10, a10)), d10, a10, valueOf2, profilesSampleRate);
        }
        Boolean bool = Boolean.FALSE;
        return new s8(bool, null, a10, bool, null);
    }

    public boolean c(double d10) {
        Double profileSessionSampleRate = this.f29559a.getProfileSessionSampleRate();
        if (profileSessionSampleRate != null && b(profileSessionSampleRate, Double.valueOf(d10))) {
            return true;
        }
        return false;
    }
}
