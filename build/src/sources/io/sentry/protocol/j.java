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
    private String f30267d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30268e;

    /* renamed from: i  reason: collision with root package name */
    private String f30269i;

    /* renamed from: o  reason: collision with root package name */
    private String f30270o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f30271p;

    /* renamed from: q  reason: collision with root package name */
    private String f30272q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f30273r;

    /* renamed from: s  reason: collision with root package name */
    private String f30274s;

    /* renamed from: t  reason: collision with root package name */
    private String f30275t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30276u;

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
                        jVar.f30275t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f30269i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f30273r = e3Var.w0();
                        break;
                    case 3:
                        jVar.f30268e = e3Var.l1();
                        break;
                    case 4:
                        jVar.f30267d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f30270o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f30274s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f30272q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f30271p = e3Var.l1();
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
            if (io.sentry.util.y.a(this.f30267d, jVar.f30267d) && io.sentry.util.y.a(this.f30268e, jVar.f30268e) && io.sentry.util.y.a(this.f30269i, jVar.f30269i) && io.sentry.util.y.a(this.f30270o, jVar.f30270o) && io.sentry.util.y.a(this.f30271p, jVar.f30271p) && io.sentry.util.y.a(this.f30272q, jVar.f30272q) && io.sentry.util.y.a(this.f30273r, jVar.f30273r) && io.sentry.util.y.a(this.f30274s, jVar.f30274s) && io.sentry.util.y.a(this.f30275t, jVar.f30275t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30267d, this.f30268e, this.f30269i, this.f30270o, this.f30271p, this.f30272q, this.f30273r, this.f30274s, this.f30275t);
    }

    public void j(Map map) {
        this.f30276u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30267d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30267d);
        }
        if (this.f30268e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f30268e);
        }
        if (this.f30269i != null) {
            f3Var.e("vendor_id").f(this.f30269i);
        }
        if (this.f30270o != null) {
            f3Var.e("vendor_name").f(this.f30270o);
        }
        if (this.f30271p != null) {
            f3Var.e("memory_size").i(this.f30271p);
        }
        if (this.f30272q != null) {
            f3Var.e("api_type").f(this.f30272q);
        }
        if (this.f30273r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f30273r);
        }
        if (this.f30274s != null) {
            f3Var.e("version").f(this.f30274s);
        }
        if (this.f30275t != null) {
            f3Var.e("npot_support").f(this.f30275t);
        }
        Map map = this.f30276u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30276u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f30267d = jVar.f30267d;
        this.f30268e = jVar.f30268e;
        this.f30269i = jVar.f30269i;
        this.f30270o = jVar.f30270o;
        this.f30271p = jVar.f30271p;
        this.f30272q = jVar.f30272q;
        this.f30273r = jVar.f30273r;
        this.f30274s = jVar.f30274s;
        this.f30275t = jVar.f30275t;
        this.f30276u = io.sentry.util.c.b(jVar.f30276u);
    }
}
