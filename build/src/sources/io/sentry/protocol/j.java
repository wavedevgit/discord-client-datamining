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
public final class j implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30370d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30371e;

    /* renamed from: i  reason: collision with root package name */
    private String f30372i;

    /* renamed from: o  reason: collision with root package name */
    private String f30373o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f30374p;

    /* renamed from: q  reason: collision with root package name */
    private String f30375q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f30376r;

    /* renamed from: s  reason: collision with root package name */
    private String f30377s;

    /* renamed from: t  reason: collision with root package name */
    private String f30378t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30379u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            j jVar = new j();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1421884745:
                        if (l02.equals("npot_support")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1085970574:
                        if (l02.equals("vendor_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1009234244:
                        if (l02.equals("multi_threaded_rendering")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (l02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 59480866:
                        if (l02.equals("vendor_name")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (l02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 967446079:
                        if (l02.equals("api_type")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1418777727:
                        if (l02.equals("memory_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        jVar.f30378t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f30372i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f30376r = e3Var.v0();
                        break;
                    case 3:
                        jVar.f30371e = e3Var.j1();
                        break;
                    case 4:
                        jVar.f30370d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f30373o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f30377s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f30375q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f30374p = e3Var.j1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            jVar.j(concurrentHashMap);
            e3Var.y();
            return jVar;
        }
    }

    public j() {
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j.class == obj.getClass()) {
            j jVar = (j) obj;
            if (io.sentry.util.y.a(this.f30370d, jVar.f30370d) && io.sentry.util.y.a(this.f30371e, jVar.f30371e) && io.sentry.util.y.a(this.f30372i, jVar.f30372i) && io.sentry.util.y.a(this.f30373o, jVar.f30373o) && io.sentry.util.y.a(this.f30374p, jVar.f30374p) && io.sentry.util.y.a(this.f30375q, jVar.f30375q) && io.sentry.util.y.a(this.f30376r, jVar.f30376r) && io.sentry.util.y.a(this.f30377s, jVar.f30377s) && io.sentry.util.y.a(this.f30378t, jVar.f30378t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30370d, this.f30371e, this.f30372i, this.f30373o, this.f30374p, this.f30375q, this.f30376r, this.f30377s, this.f30378t);
    }

    public void j(Map map) {
        this.f30379u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30370d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30370d);
        }
        if (this.f30371e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f30371e);
        }
        if (this.f30372i != null) {
            f3Var.e("vendor_id").f(this.f30372i);
        }
        if (this.f30373o != null) {
            f3Var.e("vendor_name").f(this.f30373o);
        }
        if (this.f30374p != null) {
            f3Var.e("memory_size").i(this.f30374p);
        }
        if (this.f30375q != null) {
            f3Var.e("api_type").f(this.f30375q);
        }
        if (this.f30376r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f30376r);
        }
        if (this.f30377s != null) {
            f3Var.e("version").f(this.f30377s);
        }
        if (this.f30378t != null) {
            f3Var.e("npot_support").f(this.f30378t);
        }
        Map map = this.f30379u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30379u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f30370d = jVar.f30370d;
        this.f30371e = jVar.f30371e;
        this.f30372i = jVar.f30372i;
        this.f30373o = jVar.f30373o;
        this.f30374p = jVar.f30374p;
        this.f30375q = jVar.f30375q;
        this.f30376r = jVar.f30376r;
        this.f30377s = jVar.f30377s;
        this.f30378t = jVar.f30378t;
        this.f30379u = io.sentry.util.c.b(jVar.f30379u);
    }
}
