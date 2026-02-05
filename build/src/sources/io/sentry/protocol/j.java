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
    private String f29371d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29372e;

    /* renamed from: i  reason: collision with root package name */
    private String f29373i;

    /* renamed from: o  reason: collision with root package name */
    private String f29374o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f29375p;

    /* renamed from: q  reason: collision with root package name */
    private String f29376q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f29377r;

    /* renamed from: s  reason: collision with root package name */
    private String f29378s;

    /* renamed from: t  reason: collision with root package name */
    private String f29379t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29380u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
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
                        jVar.f29379t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f29373i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f29377r = e3Var.w0();
                        break;
                    case 3:
                        jVar.f29372e = e3Var.k1();
                        break;
                    case 4:
                        jVar.f29371d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f29374o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f29378s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f29376q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f29375p = e3Var.k1();
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
            e3Var.z();
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
            if (io.sentry.util.y.a(this.f29371d, jVar.f29371d) && io.sentry.util.y.a(this.f29372e, jVar.f29372e) && io.sentry.util.y.a(this.f29373i, jVar.f29373i) && io.sentry.util.y.a(this.f29374o, jVar.f29374o) && io.sentry.util.y.a(this.f29375p, jVar.f29375p) && io.sentry.util.y.a(this.f29376q, jVar.f29376q) && io.sentry.util.y.a(this.f29377r, jVar.f29377r) && io.sentry.util.y.a(this.f29378s, jVar.f29378s) && io.sentry.util.y.a(this.f29379t, jVar.f29379t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29371d, this.f29372e, this.f29373i, this.f29374o, this.f29375p, this.f29376q, this.f29377r, this.f29378s, this.f29379t);
    }

    public void j(Map map) {
        this.f29380u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29371d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29371d);
        }
        if (this.f29372e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f29372e);
        }
        if (this.f29373i != null) {
            f3Var.e("vendor_id").f(this.f29373i);
        }
        if (this.f29374o != null) {
            f3Var.e("vendor_name").f(this.f29374o);
        }
        if (this.f29375p != null) {
            f3Var.e("memory_size").i(this.f29375p);
        }
        if (this.f29376q != null) {
            f3Var.e("api_type").f(this.f29376q);
        }
        if (this.f29377r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f29377r);
        }
        if (this.f29378s != null) {
            f3Var.e("version").f(this.f29378s);
        }
        if (this.f29379t != null) {
            f3Var.e("npot_support").f(this.f29379t);
        }
        Map map = this.f29380u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29380u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f29371d = jVar.f29371d;
        this.f29372e = jVar.f29372e;
        this.f29373i = jVar.f29373i;
        this.f29374o = jVar.f29374o;
        this.f29375p = jVar.f29375p;
        this.f29376q = jVar.f29376q;
        this.f29377r = jVar.f29377r;
        this.f29378s = jVar.f29378s;
        this.f29379t = jVar.f29379t;
        this.f29380u = io.sentry.util.c.b(jVar.f29380u);
    }
}
