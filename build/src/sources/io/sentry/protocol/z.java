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
    private String f30475d;

    /* renamed from: e  reason: collision with root package name */
    private String f30476e;

    /* renamed from: i  reason: collision with root package name */
    private String f30477i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30478o;

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
                        zVar.f30477i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f30475d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f30476e = e3Var.r1();
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
        return this.f30475d;
    }

    public String e() {
        return this.f30476e;
    }

    public void f(String str) {
        this.f30475d = str;
    }

    public void g(Map map) {
        this.f30478o = map;
    }

    public void h(String str) {
        this.f30476e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30475d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30475d);
        }
        if (this.f30476e != null) {
            f3Var.e("version").f(this.f30476e);
        }
        if (this.f30477i != null) {
            f3Var.e("raw_description").f(this.f30477i);
        }
        Map map = this.f30478o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30478o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f30475d = zVar.f30475d;
        this.f30476e = zVar.f30476e;
        this.f30477i = zVar.f30477i;
        this.f30478o = io.sentry.util.c.b(zVar.f30478o);
    }
}
