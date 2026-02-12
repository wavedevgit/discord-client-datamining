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
    private String f29804d;

    /* renamed from: e  reason: collision with root package name */
    private String f29805e;

    /* renamed from: i  reason: collision with root package name */
    private String f29806i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29807o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            z zVar = new z();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -339173787:
                        if (o02.equals("raw_description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 351608024:
                        if (o02.equals("version")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        zVar.f29806i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f29804d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f29805e = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            zVar.g(concurrentHashMap);
            e3Var.D();
            return zVar;
        }
    }

    public z() {
    }

    public String d() {
        return this.f29804d;
    }

    public String e() {
        return this.f29805e;
    }

    public void f(String str) {
        this.f29804d = str;
    }

    public void g(Map map) {
        this.f29807o = map;
    }

    public void h(String str) {
        this.f29805e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29804d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29804d);
        }
        if (this.f29805e != null) {
            f3Var.e("version").f(this.f29805e);
        }
        if (this.f29806i != null) {
            f3Var.e("raw_description").f(this.f29806i);
        }
        Map map = this.f29807o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29807o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f29804d = zVar.f29804d;
        this.f29805e = zVar.f29805e;
        this.f29806i = zVar.f29806i;
        this.f29807o = io.sentry.util.c.b(zVar.f29807o);
    }
}
