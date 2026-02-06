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
    private String f28515d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f28516e;

    /* renamed from: i  reason: collision with root package name */
    private String f28517i;

    /* renamed from: o  reason: collision with root package name */
    private String f28518o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f28519p;

    /* renamed from: q  reason: collision with root package name */
    private String f28520q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f28521r;

    /* renamed from: s  reason: collision with root package name */
    private String f28522s;

    /* renamed from: t  reason: collision with root package name */
    private String f28523t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28524u;

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
                        jVar.f28523t = e3Var.q1();
                        break;
                    case 1:
                        jVar.f28517i = e3Var.q1();
                        break;
                    case 2:
                        jVar.f28521r = e3Var.y0();
                        break;
                    case 3:
                        jVar.f28516e = e3Var.j1();
                        break;
                    case 4:
                        jVar.f28515d = e3Var.q1();
                        break;
                    case 5:
                        jVar.f28518o = e3Var.q1();
                        break;
                    case 6:
                        jVar.f28522s = e3Var.q1();
                        break;
                    case 7:
                        jVar.f28520q = e3Var.q1();
                        break;
                    case '\b':
                        jVar.f28519p = e3Var.j1();
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
            if (io.sentry.util.y.a(this.f28515d, jVar.f28515d) && io.sentry.util.y.a(this.f28516e, jVar.f28516e) && io.sentry.util.y.a(this.f28517i, jVar.f28517i) && io.sentry.util.y.a(this.f28518o, jVar.f28518o) && io.sentry.util.y.a(this.f28519p, jVar.f28519p) && io.sentry.util.y.a(this.f28520q, jVar.f28520q) && io.sentry.util.y.a(this.f28521r, jVar.f28521r) && io.sentry.util.y.a(this.f28522s, jVar.f28522s) && io.sentry.util.y.a(this.f28523t, jVar.f28523t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28515d, this.f28516e, this.f28517i, this.f28518o, this.f28519p, this.f28520q, this.f28521r, this.f28522s, this.f28523t);
    }

    public void j(Map map) {
        this.f28524u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28515d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28515d);
        }
        if (this.f28516e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f28516e);
        }
        if (this.f28517i != null) {
            f3Var.e("vendor_id").f(this.f28517i);
        }
        if (this.f28518o != null) {
            f3Var.e("vendor_name").f(this.f28518o);
        }
        if (this.f28519p != null) {
            f3Var.e("memory_size").i(this.f28519p);
        }
        if (this.f28520q != null) {
            f3Var.e("api_type").f(this.f28520q);
        }
        if (this.f28521r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f28521r);
        }
        if (this.f28522s != null) {
            f3Var.e("version").f(this.f28522s);
        }
        if (this.f28523t != null) {
            f3Var.e("npot_support").f(this.f28523t);
        }
        Map map = this.f28524u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28524u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f28515d = jVar.f28515d;
        this.f28516e = jVar.f28516e;
        this.f28517i = jVar.f28517i;
        this.f28518o = jVar.f28518o;
        this.f28519p = jVar.f28519p;
        this.f28520q = jVar.f28520q;
        this.f28521r = jVar.f28521r;
        this.f28522s = jVar.f28522s;
        this.f28523t = jVar.f28523t;
        this.f28524u = io.sentry.util.c.b(jVar.f28524u);
    }
}
