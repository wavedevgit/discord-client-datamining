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
    private String f28668d;

    /* renamed from: e  reason: collision with root package name */
    private String f28669e;

    /* renamed from: i  reason: collision with root package name */
    private String f28670i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28671o;

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
                        zVar.f28670i = e3Var.q1();
                        break;
                    case 1:
                        zVar.f28668d = e3Var.q1();
                        break;
                    case 2:
                        zVar.f28669e = e3Var.q1();
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
        return this.f28668d;
    }

    public String e() {
        return this.f28669e;
    }

    public void f(String str) {
        this.f28668d = str;
    }

    public void g(Map map) {
        this.f28671o = map;
    }

    public void h(String str) {
        this.f28669e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28668d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28668d);
        }
        if (this.f28669e != null) {
            f3Var.e("version").f(this.f28669e);
        }
        if (this.f28670i != null) {
            f3Var.e("raw_description").f(this.f28670i);
        }
        Map map = this.f28671o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28671o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f28668d = zVar.f28668d;
        this.f28669e = zVar.f28669e;
        this.f28670i = zVar.f28670i;
        this.f28671o = io.sentry.util.c.b(zVar.f28671o);
    }
}
