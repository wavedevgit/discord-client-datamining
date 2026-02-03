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
    private String f30057d;

    /* renamed from: e  reason: collision with root package name */
    private String f30058e;

    /* renamed from: i  reason: collision with root package name */
    private String f30059i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30060o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public z a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
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
                        zVar.f30059i = e3Var.r1();
                        break;
                    case 1:
                        zVar.f30057d = e3Var.r1();
                        break;
                    case 2:
                        zVar.f30058e = e3Var.r1();
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
            e3Var.y();
            return zVar;
        }
    }

    public z() {
    }

    public String d() {
        return this.f30057d;
    }

    public String e() {
        return this.f30058e;
    }

    public void f(String str) {
        this.f30057d = str;
    }

    public void g(Map map) {
        this.f30060o = map;
    }

    public void h(String str) {
        this.f30058e = str;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30057d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30057d);
        }
        if (this.f30058e != null) {
            f3Var.e("version").f(this.f30058e);
        }
        if (this.f30059i != null) {
            f3Var.e("raw_description").f(this.f30059i);
        }
        Map map = this.f30060o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30060o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(z zVar) {
        this.f30057d = zVar.f30057d;
        this.f30058e = zVar.f30058e;
        this.f30059i = zVar.f30059i;
        this.f30060o = io.sentry.util.c.b(zVar.f30060o);
    }
}
