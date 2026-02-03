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
    private String f29952d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29953e;

    /* renamed from: i  reason: collision with root package name */
    private String f29954i;

    /* renamed from: o  reason: collision with root package name */
    private String f29955o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29956p;

    /* renamed from: q  reason: collision with root package name */
    private String f29957q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29958r;

    /* renamed from: s  reason: collision with root package name */
    private String f29959s;

    /* renamed from: t  reason: collision with root package name */
    private String f29960t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29961u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            j jVar = new j();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1421884745:
                        if (m02.equals("npot_support")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1085970574:
                        if (m02.equals("vendor_id")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1009234244:
                        if (m02.equals("multi_threaded_rendering")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 59480866:
                        if (m02.equals("vendor_name")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 351608024:
                        if (m02.equals("version")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 967446079:
                        if (m02.equals("api_type")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1418777727:
                        if (m02.equals("memory_size")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        jVar.f29960t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f29954i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f29958r = e3Var.x0();
                        break;
                    case 3:
                        jVar.f29953e = e3Var.k1();
                        break;
                    case 4:
                        jVar.f29952d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f29955o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f29959s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f29957q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f29956p = e3Var.k1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
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
            if (io.sentry.util.y.a(this.f29952d, jVar.f29952d) && io.sentry.util.y.a(this.f29953e, jVar.f29953e) && io.sentry.util.y.a(this.f29954i, jVar.f29954i) && io.sentry.util.y.a(this.f29955o, jVar.f29955o) && io.sentry.util.y.a(this.f29956p, jVar.f29956p) && io.sentry.util.y.a(this.f29957q, jVar.f29957q) && io.sentry.util.y.a(this.f29958r, jVar.f29958r) && io.sentry.util.y.a(this.f29959s, jVar.f29959s) && io.sentry.util.y.a(this.f29960t, jVar.f29960t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29952d, this.f29953e, this.f29954i, this.f29955o, this.f29956p, this.f29957q, this.f29958r, this.f29959s, this.f29960t);
    }

    public void j(Map map) {
        this.f29961u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29952d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29952d);
        }
        if (this.f29953e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29953e);
        }
        if (this.f29954i != null) {
            f3Var.e("vendor_id").f(this.f29954i);
        }
        if (this.f29955o != null) {
            f3Var.e("vendor_name").f(this.f29955o);
        }
        if (this.f29956p != null) {
            f3Var.e("memory_size").i(this.f29956p);
        }
        if (this.f29957q != null) {
            f3Var.e("api_type").f(this.f29957q);
        }
        if (this.f29958r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f29958r);
        }
        if (this.f29959s != null) {
            f3Var.e("version").f(this.f29959s);
        }
        if (this.f29960t != null) {
            f3Var.e("npot_support").f(this.f29960t);
        }
        Map map = this.f29961u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29961u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f29952d = jVar.f29952d;
        this.f29953e = jVar.f29953e;
        this.f29954i = jVar.f29954i;
        this.f29955o = jVar.f29955o;
        this.f29956p = jVar.f29956p;
        this.f29957q = jVar.f29957q;
        this.f29958r = jVar.f29958r;
        this.f29959s = jVar.f29959s;
        this.f29960t = jVar.f29960t;
        this.f29961u = io.sentry.util.c.b(jVar.f29961u);
    }
}
