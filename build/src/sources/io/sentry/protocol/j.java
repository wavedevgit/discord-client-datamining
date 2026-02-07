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
    private String f28563d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f28564e;

    /* renamed from: i  reason: collision with root package name */
    private String f28565i;

    /* renamed from: o  reason: collision with root package name */
    private String f28566o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f28567p;

    /* renamed from: q  reason: collision with root package name */
    private String f28568q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f28569r;

    /* renamed from: s  reason: collision with root package name */
    private String f28570s;

    /* renamed from: t  reason: collision with root package name */
    private String f28571t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28572u;

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
                        jVar.f28571t = e3Var.q1();
                        break;
                    case 1:
                        jVar.f28565i = e3Var.q1();
                        break;
                    case 2:
                        jVar.f28569r = e3Var.y0();
                        break;
                    case 3:
                        jVar.f28564e = e3Var.j1();
                        break;
                    case 4:
                        jVar.f28563d = e3Var.q1();
                        break;
                    case 5:
                        jVar.f28566o = e3Var.q1();
                        break;
                    case 6:
                        jVar.f28570s = e3Var.q1();
                        break;
                    case 7:
                        jVar.f28568q = e3Var.q1();
                        break;
                    case '\b':
                        jVar.f28567p = e3Var.j1();
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
            if (io.sentry.util.y.a(this.f28563d, jVar.f28563d) && io.sentry.util.y.a(this.f28564e, jVar.f28564e) && io.sentry.util.y.a(this.f28565i, jVar.f28565i) && io.sentry.util.y.a(this.f28566o, jVar.f28566o) && io.sentry.util.y.a(this.f28567p, jVar.f28567p) && io.sentry.util.y.a(this.f28568q, jVar.f28568q) && io.sentry.util.y.a(this.f28569r, jVar.f28569r) && io.sentry.util.y.a(this.f28570s, jVar.f28570s) && io.sentry.util.y.a(this.f28571t, jVar.f28571t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28563d, this.f28564e, this.f28565i, this.f28566o, this.f28567p, this.f28568q, this.f28569r, this.f28570s, this.f28571t);
    }

    public void j(Map map) {
        this.f28572u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28563d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28563d);
        }
        if (this.f28564e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f28564e);
        }
        if (this.f28565i != null) {
            f3Var.e("vendor_id").f(this.f28565i);
        }
        if (this.f28566o != null) {
            f3Var.e("vendor_name").f(this.f28566o);
        }
        if (this.f28567p != null) {
            f3Var.e("memory_size").i(this.f28567p);
        }
        if (this.f28568q != null) {
            f3Var.e("api_type").f(this.f28568q);
        }
        if (this.f28569r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f28569r);
        }
        if (this.f28570s != null) {
            f3Var.e("version").f(this.f28570s);
        }
        if (this.f28571t != null) {
            f3Var.e("npot_support").f(this.f28571t);
        }
        Map map = this.f28572u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28572u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f28563d = jVar.f28563d;
        this.f28564e = jVar.f28564e;
        this.f28565i = jVar.f28565i;
        this.f28566o = jVar.f28566o;
        this.f28567p = jVar.f28567p;
        this.f28568q = jVar.f28568q;
        this.f28569r = jVar.f28569r;
        this.f28570s = jVar.f28570s;
        this.f28571t = jVar.f28571t;
        this.f28572u = io.sentry.util.c.b(jVar.f28572u);
    }
}
