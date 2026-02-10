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
    private String f28763d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f28764e;

    /* renamed from: i  reason: collision with root package name */
    private String f28765i;

    /* renamed from: o  reason: collision with root package name */
    private String f28766o;

    /* renamed from: p  reason: collision with root package name */
    private Integer f28767p;

    /* renamed from: q  reason: collision with root package name */
    private String f28768q;

    /* renamed from: r  reason: collision with root package name */
    private Boolean f28769r;

    /* renamed from: s  reason: collision with root package name */
    private String f28770s;

    /* renamed from: t  reason: collision with root package name */
    private String f28771t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28772u;

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
                        jVar.f28771t = e3Var.m1();
                        break;
                    case 1:
                        jVar.f28765i = e3Var.m1();
                        break;
                    case 2:
                        jVar.f28769r = e3Var.w0();
                        break;
                    case 3:
                        jVar.f28764e = e3Var.g1();
                        break;
                    case 4:
                        jVar.f28763d = e3Var.m1();
                        break;
                    case 5:
                        jVar.f28766o = e3Var.m1();
                        break;
                    case 6:
                        jVar.f28770s = e3Var.m1();
                        break;
                    case 7:
                        jVar.f28768q = e3Var.m1();
                        break;
                    case '\b':
                        jVar.f28767p = e3Var.g1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
            if (io.sentry.util.y.a(this.f28763d, jVar.f28763d) && io.sentry.util.y.a(this.f28764e, jVar.f28764e) && io.sentry.util.y.a(this.f28765i, jVar.f28765i) && io.sentry.util.y.a(this.f28766o, jVar.f28766o) && io.sentry.util.y.a(this.f28767p, jVar.f28767p) && io.sentry.util.y.a(this.f28768q, jVar.f28768q) && io.sentry.util.y.a(this.f28769r, jVar.f28769r) && io.sentry.util.y.a(this.f28770s, jVar.f28770s) && io.sentry.util.y.a(this.f28771t, jVar.f28771t)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28763d, this.f28764e, this.f28765i, this.f28766o, this.f28767p, this.f28768q, this.f28769r, this.f28770s, this.f28771t);
    }

    public void j(Map map) {
        this.f28772u = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28763d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f28763d);
        }
        if (this.f28764e != null) {
            f3Var.e(StackTraceHelper.ID_KEY).i(this.f28764e);
        }
        if (this.f28765i != null) {
            f3Var.e("vendor_id").f(this.f28765i);
        }
        if (this.f28766o != null) {
            f3Var.e("vendor_name").f(this.f28766o);
        }
        if (this.f28767p != null) {
            f3Var.e("memory_size").i(this.f28767p);
        }
        if (this.f28768q != null) {
            f3Var.e("api_type").f(this.f28768q);
        }
        if (this.f28769r != null) {
            f3Var.e("multi_threaded_rendering").k(this.f28769r);
        }
        if (this.f28770s != null) {
            f3Var.e("version").f(this.f28770s);
        }
        if (this.f28771t != null) {
            f3Var.e("npot_support").f(this.f28771t);
        }
        Map map = this.f28772u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28772u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(j jVar) {
        this.f28763d = jVar.f28763d;
        this.f28764e = jVar.f28764e;
        this.f28765i = jVar.f28765i;
        this.f28766o = jVar.f28766o;
        this.f28767p = jVar.f28767p;
        this.f28768q = jVar.f28768q;
        this.f28769r = jVar.f28769r;
        this.f28770s = jVar.f28770s;
        this.f28771t = jVar.f28771t;
        this.f28772u = io.sentry.util.c.b(jVar.f28772u);
    }
}
