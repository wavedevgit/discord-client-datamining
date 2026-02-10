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
    private String f28868d;

    /* renamed from: e  reason: collision with root package name */
    private String f28869e;

    /* renamed from: i  reason: collision with root package name */
    private String f28870i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28871o;

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
                        zVar.f28870i = e3Var.m1();
                        break;
                    case 1:
                        zVar.f28868d = e3Var.m1();
                        break;
                    case 2:
                        zVar.f28869e = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
        return this.f28868d;
    }

    public String e() {
        return this.f28869e;
    }

    public void f(String str) {
        this.f28868d = str;
    }

    public void g(Map map) {
        this.f28871o = map;
    }

    public void h(String str) {
        this.f28869e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28868d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28868d);
        }
        if (this.f28869e != null) {
            f3Var.e("version").f(this.f28869e);
        }
        if (this.f28870i != null) {
            f3Var.e("raw_description").f(this.f28870i);
        }
        Map map = this.f28871o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28871o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f28868d = zVar.f28868d;
        this.f28869e = zVar.f28869e;
        this.f28870i = zVar.f28870i;
        this.f28871o = io.sentry.util.c.b(zVar.f28871o);
    }
}
