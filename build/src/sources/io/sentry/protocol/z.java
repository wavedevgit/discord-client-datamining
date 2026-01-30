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
    private String f30491d;

    /* renamed from: e  reason: collision with root package name */
    private String f30492e;

    /* renamed from: i  reason: collision with root package name */
    private String f30493i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30494o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            z zVar = new z();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -339173787:
                        if (l02.equals("raw_description")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 351608024:
                        if (l02.equals("version")) {
                            c10 = 2;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        zVar.f30493i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f30491d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f30492e = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            zVar.g(concurrentHashMap);
            e3Var.y();
            return zVar;
        }
    }

    public z() {
    }

    public String d() {
        return this.f30491d;
    }

    public String e() {
        return this.f30492e;
    }

    public void f(String str) {
        this.f30491d = str;
    }

    public void g(Map map) {
        this.f30494o = map;
    }

    public void h(String str) {
        this.f30492e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30491d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30491d);
        }
        if (this.f30492e != null) {
            f3Var.e("version").f(this.f30492e);
        }
        if (this.f30493i != null) {
            f3Var.e("raw_description").f(this.f30493i);
        }
        Map map = this.f30494o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30494o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f30491d = zVar.f30491d;
        this.f30492e = zVar.f30492e;
        this.f30493i = zVar.f30493i;
        this.f30494o = io.sentry.util.c.b(zVar.f30494o);
    }
}
