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
    private String f30372d;

    /* renamed from: e  reason: collision with root package name */
    private String f30373e;

    /* renamed from: i  reason: collision with root package name */
    private String f30374i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30375o;

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
                        zVar.f30374i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f30372d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f30373e = e3Var.r1();
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
        return this.f30372d;
    }

    public String e() {
        return this.f30373e;
    }

    public void f(String str) {
        this.f30372d = str;
    }

    public void g(Map map) {
        this.f30375o = map;
    }

    public void h(String str) {
        this.f30373e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30372d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30372d);
        }
        if (this.f30373e != null) {
            f3Var.e("version").f(this.f30373e);
        }
        if (this.f30374i != null) {
            f3Var.e("raw_description").f(this.f30374i);
        }
        Map map = this.f30375o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30375o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f30372d = zVar.f30372d;
        this.f30373e = zVar.f30373e;
        this.f30374i = zVar.f30374i;
        this.f30375o = io.sentry.util.c.b(zVar.f30375o);
    }
}
