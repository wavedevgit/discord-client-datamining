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
    private String f29699d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29700e;

    /* renamed from: i  reason: collision with root package name */
    private String f29701i;

    /* renamed from: o  reason: collision with root package name */
    private String f29702o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29703p;

    /* renamed from: q  reason: collision with root package name */
    private String f29704q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29705r;

    /* renamed from: s  reason: collision with root package name */
    private String f29706s;

    /* renamed from: t  reason: collision with root package name */
    private String f29707t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29708u;

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
                        jVar.f29707t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f29701i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f29705r = e3Var.w0();
                        break;
                    case 3:
                        jVar.f29700e = e3Var.l1();
                        break;
                    case 4:
                        jVar.f29699d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f29702o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f29706s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f29704q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f29703p = e3Var.l1();
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
            if (io.sentry.util.y.a(this.f29699d, jVar.f29699d) && io.sentry.util.y.a(this.f29700e, jVar.f29700e) && io.sentry.util.y.a(this.f29701i, jVar.f29701i) && io.sentry.util.y.a(this.f29702o, jVar.f29702o) && io.sentry.util.y.a(this.f29703p, jVar.f29703p) && io.sentry.util.y.a(this.f29704q, jVar.f29704q) && io.sentry.util.y.a(this.f29705r, jVar.f29705r) && io.sentry.util.y.a(this.f29706s, jVar.f29706s) && io.sentry.util.y.a(this.f29707t, jVar.f29707t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29699d, this.f29700e, this.f29701i, this.f29702o, this.f29703p, this.f29704q, this.f29705r, this.f29706s, this.f29707t);
    }

    public void j(Map map) {
        this.f29708u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29699d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29699d);
        }
        if (this.f29700e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29700e);
        }
        if (this.f29701i != null) {
            f3Var.e("vendor_id").f(this.f29701i);
        }
        if (this.f29702o != null) {
            f3Var.e("vendor_name").f(this.f29702o);
        }
        if (this.f29703p != null) {
            f3Var.e("memory_size").i(this.f29703p);
        }
        if (this.f29704q != null) {
            f3Var.e("api_type").f(this.f29704q);
        }
        if (this.f29705r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f29705r);
        }
        if (this.f29706s != null) {
            f3Var.e("version").f(this.f29706s);
        }
        if (this.f29707t != null) {
            f3Var.e("npot_support").f(this.f29707t);
        }
        Map map = this.f29708u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29708u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f29699d = jVar.f29699d;
        this.f29700e = jVar.f29700e;
        this.f29701i = jVar.f29701i;
        this.f29702o = jVar.f29702o;
        this.f29703p = jVar.f29703p;
        this.f29704q = jVar.f29704q;
        this.f29705r = jVar.f29705r;
        this.f29706s = jVar.f29706s;
        this.f29707t = jVar.f29707t;
        this.f29708u = io.sentry.util.c.b(jVar.f29708u);
    }
}
