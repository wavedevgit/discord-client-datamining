package io.sentry.android.core;

import io.sentry.Hint;
import io.sentry.SentryEvent;
import io.sentry.a2;
import io.sentry.android.core.performance.h;
import io.sentry.e8;
import io.sentry.j8;
import io.sentry.l8;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e2 implements io.sentry.b0 {

    /* renamed from: e  reason: collision with root package name */
    private final i f28906e;

    /* renamed from: i  reason: collision with root package name */
    private final SentryAndroidOptions f28907i;

    /* renamed from: d  reason: collision with root package name */
    private boolean f28905d = false;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f28908o = new io.sentry.util.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public e2(SentryAndroidOptions sentryAndroidOptions, i iVar) {
        this.f28907i = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28906e = (i) io.sentry.util.y.c(iVar, "ActivityFramesTracker is required");
    }

    private void b(io.sentry.android.core.performance.h hVar, io.sentry.protocol.d0 d0Var) {
        e8 j10;
        j8 j8Var;
        if (hVar.n() == h.a.COLD && (j10 = d0Var.C().j()) != null) {
            io.sentry.protocol.x p10 = j10.p();
            Iterator it = d0Var.q0().iterator();
            while (true) {
                if (it.hasNext()) {
                    io.sentry.protocol.a0 a0Var = (io.sentry.protocol.a0) it.next();
                    if (a0Var.d().contentEquals("app.start.cold")) {
                        j8Var = a0Var.e();
                        break;
                    }
                } else {
                    j8Var = null;
                    break;
                }
            }
            io.sentry.android.core.performance.i g10 = hVar.g();
            if (g10.q() && Math.abs(g10.e()) <= 10000) {
                d0Var.q0().add(f(g10, j8Var, p10, "process.load"));
            }
            List<io.sentry.android.core.performance.i> p11 = hVar.p();
            if (!p11.isEmpty()) {
                for (io.sentry.android.core.performance.i iVar : p11) {
                    d0Var.q0().add(f(iVar, j8Var, p10, "contentprovider.load"));
                }
            }
            io.sentry.android.core.performance.i o10 = hVar.o();
            if (o10.r()) {
                d0Var.q0().add(f(o10, j8Var, p10, "application.load"));
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:5:0x0013  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean c(io.sentry.protocol.d0 r7) {
        /*
            r6 = this;
            java.util.List r0 = r7.q0()
            java.util.Iterator r0 = r0.iterator()
        L8:
            boolean r1 = r0.hasNext()
            r2 = 1
            java.lang.String r3 = "app.start.warm"
            java.lang.String r4 = "app.start.cold"
            if (r1 == 0) goto L2e
            java.lang.Object r1 = r0.next()
            io.sentry.protocol.a0 r1 = (io.sentry.protocol.a0) r1
            java.lang.String r5 = r1.d()
            boolean r4 = r5.contentEquals(r4)
            if (r4 != 0) goto L2d
            java.lang.String r1 = r1.d()
            boolean r1 = r1.contentEquals(r3)
            if (r1 == 0) goto L8
        L2d:
            return r2
        L2e:
            io.sentry.protocol.c r7 = r7.C()
            io.sentry.e8 r7 = r7.j()
            if (r7 == 0) goto L4d
            java.lang.String r0 = r7.f()
            boolean r0 = r0.equals(r4)
            if (r0 != 0) goto L4c
            java.lang.String r7 = r7.f()
            boolean r7 = r7.equals(r3)
            if (r7 == 0) goto L4d
        L4c:
            return r2
        L4d:
            r7 = 0
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.core.e2.c(io.sentry.protocol.d0):boolean");
    }

    private static boolean d(double d10, io.sentry.protocol.a0 a0Var) {
        if (d10 >= a0Var.f().doubleValue()) {
            if (a0Var.g() == null || d10 <= a0Var.g().doubleValue()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void e(io.sentry.protocol.d0 d0Var) {
        boolean z10;
        boolean z11;
        Object obj;
        io.sentry.protocol.a0 a0Var = null;
        io.sentry.protocol.a0 a0Var2 = null;
        for (io.sentry.protocol.a0 a0Var3 : d0Var.q0()) {
            if ("ui.load.initial_display".equals(a0Var3.d())) {
                a0Var = a0Var3;
            } else if ("ui.load.full_display".equals(a0Var3.d())) {
                a0Var2 = a0Var3;
            }
            if (a0Var != null && a0Var2 != null) {
                break;
            }
        }
        if (a0Var != null || a0Var2 != null) {
            for (io.sentry.protocol.a0 a0Var4 : d0Var.q0()) {
                if (a0Var4 != a0Var && a0Var4 != a0Var2) {
                    Map b10 = a0Var4.b();
                    boolean z12 = false;
                    if (b10 != null && (obj = b10.get("thread.name")) != null && !"main".equals(obj)) {
                        z10 = false;
                    } else {
                        z10 = true;
                    }
                    if (a0Var != null && d(a0Var4.f().doubleValue(), a0Var) && z10) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (a0Var2 != null && d(a0Var4.f().doubleValue(), a0Var2)) {
                        z12 = true;
                    }
                    if (z11 || z12) {
                        Map b11 = a0Var4.b();
                        if (b11 == null) {
                            b11 = new ConcurrentHashMap();
                            a0Var4.h(b11);
                        }
                        if (z11) {
                            b11.put("ui.contributes_to_ttid", Boolean.TRUE);
                        }
                        if (z12) {
                            b11.put("ui.contributes_to_ttfd", Boolean.TRUE);
                        }
                    }
                }
            }
        }
    }

    private static io.sentry.protocol.a0 f(io.sentry.android.core.performance.i iVar, j8 j8Var, io.sentry.protocol.x xVar, String str) {
        HashMap hashMap = new HashMap(2);
        hashMap.put("thread.id", Long.valueOf(io.sentry.android.core.internal.util.j.f29062b));
        hashMap.put("thread.name", "main");
        Boolean bool = Boolean.TRUE;
        hashMap.put("ui.contributes_to_ttid", bool);
        hashMap.put("ui.contributes_to_ttfd", bool);
        return new io.sentry.protocol.a0(Double.valueOf(iVar.k()), Double.valueOf(iVar.h()), xVar, new j8(), j8Var, str, iVar.d(), l8.OK, "auto.ui", new ConcurrentHashMap(), new ConcurrentHashMap(), hashMap);
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 l(io.sentry.protocol.d0 d0Var, Hint hint) {
        Map n10;
        String str;
        String str2;
        io.sentry.a1 a10 = this.f28908o.a();
        try {
            if (!this.f28907i.isTracingEnabled()) {
                if (a10 != null) {
                    a10.close();
                }
                return d0Var;
            }
            io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
            if (c(d0Var)) {
                if (q10.z()) {
                    long e10 = q10.m(this.f28907i).e();
                    if (e10 != 0) {
                        io.sentry.protocol.k kVar = new io.sentry.protocol.k(Float.valueOf((float) e10), a2.a.MILLISECOND.apiName());
                        if (q10.n() == h.a.COLD) {
                            str2 = "app_start_cold";
                        } else {
                            str2 = "app_start_warm";
                        }
                        d0Var.o0().put(str2, kVar);
                        b(q10, d0Var);
                        q10.t();
                    }
                }
                io.sentry.protocol.a d10 = d0Var.C().d();
                if (d10 == null) {
                    d10 = new io.sentry.protocol.a();
                    d0Var.C().o(d10);
                }
                if (q10.n() == h.a.COLD) {
                    str = "cold";
                } else {
                    str = "warm";
                }
                d10.v(str);
            }
            e(d0Var);
            io.sentry.protocol.x G = d0Var.G();
            e8 j10 = d0Var.C().j();
            if (G != null && j10 != null && j10.f().contentEquals("ui.load") && (n10 = this.f28906e.n(G)) != null) {
                d0Var.o0().putAll(n10);
            }
            if (a10 != null) {
                a10.close();
            }
            return d0Var;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }
}
