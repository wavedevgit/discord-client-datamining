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
    private String f30313d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30314e;

    /* renamed from: i  reason: collision with root package name */
    private String f30315i;

    /* renamed from: o  reason: collision with root package name */
    private String f30316o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f30317p;

    /* renamed from: q  reason: collision with root package name */
    private String f30318q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f30319r;

    /* renamed from: s  reason: collision with root package name */
    private String f30320s;

    /* renamed from: t  reason: collision with root package name */
    private String f30321t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30322u;

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
                        jVar.f30321t = e3Var.r1();
                        break;
                    case 1:
                        jVar.f30315i = e3Var.r1();
                        break;
                    case 2:
                        jVar.f30319r = e3Var.v0();
                        break;
                    case 3:
                        jVar.f30314e = e3Var.k1();
                        break;
                    case 4:
                        jVar.f30313d = e3Var.r1();
                        break;
                    case 5:
                        jVar.f30316o = e3Var.r1();
                        break;
                    case 6:
                        jVar.f30320s = e3Var.r1();
                        break;
                    case 7:
                        jVar.f30318q = e3Var.r1();
                        break;
                    case '\b':
                        jVar.f30317p = e3Var.k1();
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
            if (io.sentry.util.y.a(this.f30313d, jVar.f30313d) && io.sentry.util.y.a(this.f30314e, jVar.f30314e) && io.sentry.util.y.a(this.f30315i, jVar.f30315i) && io.sentry.util.y.a(this.f30316o, jVar.f30316o) && io.sentry.util.y.a(this.f30317p, jVar.f30317p) && io.sentry.util.y.a(this.f30318q, jVar.f30318q) && io.sentry.util.y.a(this.f30319r, jVar.f30319r) && io.sentry.util.y.a(this.f30320s, jVar.f30320s) && io.sentry.util.y.a(this.f30321t, jVar.f30321t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30313d, this.f30314e, this.f30315i, this.f30316o, this.f30317p, this.f30318q, this.f30319r, this.f30320s, this.f30321t);
    }

    public void j(Map map) {
        this.f30322u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30313d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f30313d);
        }
        if (this.f30314e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f30314e);
        }
        if (this.f30315i != null) {
            f3Var.e("vendor_id").f(this.f30315i);
        }
        if (this.f30316o != null) {
            f3Var.e("vendor_name").f(this.f30316o);
        }
        if (this.f30317p != null) {
            f3Var.e("memory_size").i(this.f30317p);
        }
        if (this.f30318q != null) {
            f3Var.e("api_type").f(this.f30318q);
        }
        if (this.f30319r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f30319r);
        }
        if (this.f30320s != null) {
            f3Var.e("version").f(this.f30320s);
        }
        if (this.f30321t != null) {
            f3Var.e("npot_support").f(this.f30321t);
        }
        Map map = this.f30322u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30322u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f30313d = jVar.f30313d;
        this.f30314e = jVar.f30314e;
        this.f30315i = jVar.f30315i;
        this.f30316o = jVar.f30316o;
        this.f30317p = jVar.f30317p;
        this.f30318q = jVar.f30318q;
        this.f30319r = jVar.f30319r;
        this.f30320s = jVar.f30320s;
        this.f30321t = jVar.f30321t;
        this.f30322u = io.sentry.util.c.b(jVar.f30322u);
    }
}
