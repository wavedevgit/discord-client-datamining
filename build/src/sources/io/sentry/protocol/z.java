package io.sentry.protocol;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29476d;

    /* renamed from: e  reason: collision with root package name */
    private String f29477e;

    /* renamed from: i  reason: collision with root package name */
    private String f29478i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29479o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            z zVar = new z();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -339173787:
                        if (m02.equals("raw_description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 351608024:
                        if (m02.equals("version")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        zVar.f29478i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f29476d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f29477e = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            zVar.g(concurrentHashMap);
            e3Var.z();
            return zVar;
        }
    }

    public z() {
    }

    public String d() {
        return this.f29476d;
    }

    public String e() {
        return this.f29477e;
    }

    public void f(String str) {
        this.f29476d = str;
    }

    public void g(Map map) {
        this.f29479o = map;
    }

    public void h(String str) {
        this.f29477e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29476d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29476d);
        }
        if (this.f29477e != null) {
            f3Var.e("version").f(this.f29477e);
        }
        if (this.f29478i != null) {
            f3Var.e("raw_description").f(this.f29478i);
        }
        Map map = this.f29479o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29479o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f29476d = zVar.f29476d;
        this.f29477e = zVar.f29477e;
        this.f29478i = zVar.f29478i;
        this.f29479o = io.sentry.util.c.b(zVar.f29479o);
    }
}
