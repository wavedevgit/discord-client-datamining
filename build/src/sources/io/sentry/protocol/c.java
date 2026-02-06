package io.sentry.protocol;

import com.discord.js_watchdog.SharedPreferencesKey;
import io.sentry.ILogger;
import io.sentry.a1;
import io.sentry.e3;
import io.sentry.e8;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.n3;
import io.sentry.protocol.a;
import io.sentry.protocol.b;
import io.sentry.protocol.e;
import io.sentry.protocol.e0;
import io.sentry.protocol.g;
import io.sentry.protocol.h;
import io.sentry.protocol.j;
import io.sentry.protocol.n;
import io.sentry.protocol.p;
import io.sentry.protocol.z;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private final ConcurrentHashMap f28453d = new ConcurrentHashMap();

    /* renamed from: e  reason: collision with root package name */
    protected final io.sentry.util.a f28454e = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public c a(e3 e3Var, ILogger iLogger) {
            c cVar = new c();
            e3Var.u();
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1335157162:
                        if (o02.equals("device")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -895679987:
                        if (o02.equals("spring")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -340323263:
                        if (o02.equals("response")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -309425751:
                        if (o02.equals("profile")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -191501435:
                        if (o02.equals("feedback")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3556:
                        if (o02.equals("os")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 96801:
                        if (o02.equals("app")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 102572:
                        if (o02.equals("gpu")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 97513095:
                        if (o02.equals("flags")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 110620997:
                        if (o02.equals(SharedPreferencesKey.TRACE)) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 150940456:
                        if (o02.equals("browser")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 1550962648:
                        if (o02.equals("runtime")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        cVar.q(new e.a().a(e3Var, iLogger));
                        break;
                    case 1:
                        cVar.y(new e0.a().a(e3Var, iLogger));
                        break;
                    case 2:
                        cVar.w(new p.a().a(e3Var, iLogger));
                        break;
                    case 3:
                        cVar.v(new n3.a().a(e3Var, iLogger));
                        break;
                    case 4:
                        cVar.s(new h.a().a(e3Var, iLogger));
                        break;
                    case 5:
                        cVar.u(new n.a().a(e3Var, iLogger));
                        break;
                    case 6:
                        cVar.o(new a.C0402a().a(e3Var, iLogger));
                        break;
                    case 7:
                        cVar.t(new j.a().a(e3Var, iLogger));
                        break;
                    case '\b':
                        cVar.r(new g.a().a(e3Var, iLogger));
                        break;
                    case '\t':
                        cVar.z(new e8.a().a(e3Var, iLogger));
                        break;
                    case '\n':
                        cVar.p(new b.a().a(e3Var, iLogger));
                        break;
                    case 11:
                        cVar.x(new z.a().a(e3Var, iLogger));
                        break;
                    default:
                        Object U1 = e3Var.U1();
                        if (U1 == null) {
                            break;
                        } else {
                            cVar.l(o02, U1);
                            break;
                        }
                }
            }
            e3Var.D();
            return cVar;
        }
    }

    public c() {
    }

    private Object A(String str, Class cls) {
        Object c10 = c(str);
        if (cls.isInstance(c10)) {
            return cls.cast(c10);
        }
        return null;
    }

    public boolean a(Object obj) {
        if (obj == null) {
            return false;
        }
        return this.f28453d.containsKey(obj);
    }

    public Set b() {
        return this.f28453d.entrySet();
    }

    public Object c(Object obj) {
        if (obj == null) {
            return null;
        }
        return this.f28453d.get(obj);
    }

    public io.sentry.protocol.a d() {
        return (io.sentry.protocol.a) A("app", io.sentry.protocol.a.class);
    }

    public e e() {
        return (e) A("device", e.class);
    }

    public boolean equals(Object obj) {
        if (obj != null && (obj instanceof c)) {
            return this.f28453d.equals(((c) obj).f28453d);
        }
        return false;
    }

    public g f() {
        return (g) A("flags", g.class);
    }

    public h g() {
        return (h) A("feedback", h.class);
    }

    public n h() {
        return (n) A("os", n.class);
    }

    public int hashCode() {
        return this.f28453d.hashCode();
    }

    public z i() {
        return (z) A("runtime", z.class);
    }

    public e8 j() {
        return (e8) A(SharedPreferencesKey.TRACE, e8.class);
    }

    public Enumeration k() {
        return this.f28453d.keys();
    }

    public Object l(String str, Object obj) {
        if (str == null) {
            return null;
        }
        if (obj == null) {
            return this.f28453d.remove(str);
        }
        return this.f28453d.put(str, obj);
    }

    public void m(c cVar) {
        if (cVar == null) {
            return;
        }
        this.f28453d.putAll(cVar.f28453d);
    }

    public Object n(Object obj) {
        if (obj == null) {
            return null;
        }
        return this.f28453d.remove(obj);
    }

    public void o(io.sentry.protocol.a aVar) {
        l("app", aVar);
    }

    public void p(b bVar) {
        l("browser", bVar);
    }

    public void q(e eVar) {
        l("device", eVar);
    }

    public void r(g gVar) {
        l("flags", gVar);
    }

    public void s(h hVar) {
        l("feedback", hVar);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        ArrayList<String> list = Collections.list(k());
        Collections.sort(list);
        for (String str : list) {
            Object c10 = c(str);
            if (c10 != null) {
                f3Var.e(str).j(iLogger, c10);
            }
        }
        f3Var.D();
    }

    public void t(j jVar) {
        l("gpu", jVar);
    }

    public void u(n nVar) {
        l("os", nVar);
    }

    public void v(n3 n3Var) {
        io.sentry.util.y.c(n3Var, "profileContext is required");
        l("profile", n3Var);
    }

    public void w(p pVar) {
        a1 a10 = this.f28454e.a();
        try {
            l("response", pVar);
            if (a10 != null) {
                a10.close();
            }
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

    public void x(z zVar) {
        l("runtime", zVar);
    }

    public void y(e0 e0Var) {
        l("spring", e0Var);
    }

    public void z(e8 e8Var) {
        io.sentry.util.y.c(e8Var, "traceContext is required");
        l(SharedPreferencesKey.TRACE, e8Var);
    }

    public c(c cVar) {
        for (Map.Entry entry : cVar.b()) {
            if (entry != null) {
                Object value = entry.getValue();
                if ("app".equals(entry.getKey()) && (value instanceof io.sentry.protocol.a)) {
                    o(new io.sentry.protocol.a((io.sentry.protocol.a) value));
                } else if ("browser".equals(entry.getKey()) && (value instanceof b)) {
                    p(new b((b) value));
                } else if ("device".equals(entry.getKey()) && (value instanceof e)) {
                    q(new e((e) value));
                } else if ("os".equals(entry.getKey()) && (value instanceof n)) {
                    u(new n((n) value));
                } else if ("runtime".equals(entry.getKey()) && (value instanceof z)) {
                    x(new z((z) value));
                } else if ("feedback".equals(entry.getKey()) && (value instanceof h)) {
                    s(new h((h) value));
                } else if ("gpu".equals(entry.getKey()) && (value instanceof j)) {
                    t(new j((j) value));
                } else if (SharedPreferencesKey.TRACE.equals(entry.getKey()) && (value instanceof e8)) {
                    z(new e8((e8) value));
                } else if ("profile".equals(entry.getKey()) && (value instanceof n3)) {
                    v(new n3((n3) value));
                } else if ("response".equals(entry.getKey()) && (value instanceof p)) {
                    w(new p((p) value));
                } else if ("spring".equals(entry.getKey()) && (value instanceof e0)) {
                    y(new e0((e0) value));
                } else {
                    l((String) entry.getKey(), value);
                }
            }
        }
    }
}
