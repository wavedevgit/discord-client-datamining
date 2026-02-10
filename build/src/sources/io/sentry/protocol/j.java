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
    private String f29698d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29699e;

    /* renamed from: i  reason: collision with root package name */
    private String f29700i;

    /* renamed from: o  reason: collision with root package name */
    private String f29701o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29702p;

    /* renamed from: q  reason: collision with root package name */
    private String f29703q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29704r;

    /* renamed from: s  reason: collision with root package name */
    private String f29705s;

    /* renamed from: t  reason: collision with root package name */
    private String f29706t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29707u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            j jVar = new j();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1421884745:
                        if (o02.equals("npot_support")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1085970574:
                        if (o02.equals("vendor_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1009234244:
                        if (o02.equals("multi_threaded_rendering")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (o02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 59480866:
                        if (o02.equals("vendor_name")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (o02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 967446079:
                        if (o02.equals("api_type")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1418777727:
                        if (o02.equals("memory_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        jVar.f29706t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f29700i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f29704r = e3Var.w0();
                        break;
                    case 3:
                        jVar.f29699e = e3Var.l1();
                        break;
                    case 4:
                        jVar.f29698d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f29701o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f29705s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f29703q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f29702p = e3Var.l1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            jVar.j(concurrentHashMap);
            e3Var.D();
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
            if (io.sentry.util.y.a(this.f29698d, jVar.f29698d) && io.sentry.util.y.a(this.f29699e, jVar.f29699e) && io.sentry.util.y.a(this.f29700i, jVar.f29700i) && io.sentry.util.y.a(this.f29701o, jVar.f29701o) && io.sentry.util.y.a(this.f29702p, jVar.f29702p) && io.sentry.util.y.a(this.f29703q, jVar.f29703q) && io.sentry.util.y.a(this.f29704r, jVar.f29704r) && io.sentry.util.y.a(this.f29705s, jVar.f29705s) && io.sentry.util.y.a(this.f29706t, jVar.f29706t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29698d, this.f29699e, this.f29700i, this.f29701o, this.f29702p, this.f29703q, this.f29704r, this.f29705s, this.f29706t);
    }

    public void j(Map map) {
        this.f29707u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29698d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29698d);
        }
        if (this.f29699e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29699e);
        }
        if (this.f29700i != null) {
            f3Var.e("vendor_id").f(this.f29700i);
        }
        if (this.f29701o != null) {
            f3Var.e("vendor_name").f(this.f29701o);
        }
        if (this.f29702p != null) {
            f3Var.e("memory_size").i(this.f29702p);
        }
        if (this.f29703q != null) {
            f3Var.e("api_type").f(this.f29703q);
        }
        if (this.f29704r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f29704r);
        }
        if (this.f29705s != null) {
            f3Var.e("version").f(this.f29705s);
        }
        if (this.f29706t != null) {
            f3Var.e("npot_support").f(this.f29706t);
        }
        Map map = this.f29707u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29707u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f29698d = jVar.f29698d;
        this.f29699e = jVar.f29699e;
        this.f29700i = jVar.f29700i;
        this.f29701o = jVar.f29701o;
        this.f29702p = jVar.f29702p;
        this.f29703q = jVar.f29703q;
        this.f29704r = jVar.f29704r;
        this.f29705s = jVar.f29705s;
        this.f29706t = jVar.f29706t;
        this.f29707u = io.sentry.util.c.b(jVar.f29707u);
    }
}
