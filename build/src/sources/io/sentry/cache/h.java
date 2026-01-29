package io.sentry.cache;

import io.sentry.k7;
import io.sentry.m1;
import io.sentry.q0;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements q0 {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f29800a;

    public h(k7 k7Var) {
        this.f29800a = k7Var;
    }

    private void a(String str) {
        d.a(this.f29800a, ".options-cache", str);
    }

    public static Object b(k7 k7Var, String str, Class cls) {
        return j(k7Var, str, cls, null);
    }

    public static Object j(k7 k7Var, String str, Class cls, m1 m1Var) {
        return d.c(k7Var, ".options-cache", str, cls, m1Var);
    }

    private void k(Object obj, String str) {
        d.d(this.f29800a, obj, ".options-cache", str);
    }

    @Override // io.sentry.q0
    public void c(Map map) {
        k(map, "tags.json");
    }

    @Override // io.sentry.q0
    public void d(String str) {
        if (str == null) {
            a("dist.json");
        } else {
            k(str, "dist.json");
        }
    }

    @Override // io.sentry.q0
    public void e(Double d10) {
        if (d10 == null) {
            a("replay-error-sample-rate.json");
        } else {
            k(d10.toString(), "replay-error-sample-rate.json");
        }
    }

    @Override // io.sentry.q0
    public void f(String str) {
        if (str == null) {
            a("environment.json");
        } else {
            k(str, "environment.json");
        }
    }

    @Override // io.sentry.q0
    public void g(String str) {
        if (str == null) {
            a("proguard-uuid.json");
        } else {
            k(str, "proguard-uuid.json");
        }
    }

    @Override // io.sentry.q0
    public void h(io.sentry.protocol.r rVar) {
        if (rVar == null) {
            a("sdk-version.json");
        } else {
            k(rVar, "sdk-version.json");
        }
    }

    @Override // io.sentry.q0
    public void i(String str) {
        if (str == null) {
            a("release.json");
        } else {
            k(str, "release.json");
        }
    }
}
