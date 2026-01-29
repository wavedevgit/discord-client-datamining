package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30380d;

    /* renamed from: e  reason: collision with root package name */
    private String f30381e;

    /* renamed from: i  reason: collision with root package name */
    private String f30382i;

    /* renamed from: o  reason: collision with root package name */
    private String f30383o;

    /* renamed from: p  reason: collision with root package name */
    private Double f30384p;

    /* renamed from: q  reason: collision with root package name */
    private Double f30385q;

    /* renamed from: r  reason: collision with root package name */
    private Double f30386r;

    /* renamed from: s  reason: collision with root package name */
    private Double f30387s;

    /* renamed from: t  reason: collision with root package name */
    private String f30388t;

    /* renamed from: u  reason: collision with root package name */
    private Double f30389u;

    /* renamed from: v  reason: collision with root package name */
    private List f30390v;

    /* renamed from: w  reason: collision with root package name */
    private Map f30391w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j0 a(e3 e3Var, ILogger iLogger) {
            j0 j0Var = new j0();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1784982718:
                        if (l02.equals("rendering_system")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1618432855:
                        if (l02.equals("identifier")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (l02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 120:
                        if (l02.equals("x")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 121:
                        if (l02.equals("y")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 114586:
                        if (l02.equals("tag")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 92909918:
                        if (l02.equals("alpha")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (l02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1659526655:
                        if (l02.equals("children")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1941332754:
                        if (l02.equals("visibility")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        j0Var.f30380d = e3Var.r1();
                        break;
                    case 1:
                        j0Var.f30382i = e3Var.r1();
                        break;
                    case 2:
                        j0Var.f30385q = e3Var.k0();
                        break;
                    case 3:
                        j0Var.f30386r = e3Var.k0();
                        break;
                    case 4:
                        j0Var.f30387s = e3Var.k0();
                        break;
                    case 5:
                        j0Var.f30383o = e3Var.r1();
                        break;
                    case 6:
                        j0Var.f30381e = e3Var.r1();
                        break;
                    case 7:
                        j0Var.f30389u = e3Var.k0();
                        break;
                    case '\b':
                        j0Var.f30384p = e3Var.k0();
                        break;
                    case '\t':
                        j0Var.f30390v = e3Var.g2(iLogger, this);
                        break;
                    case '\n':
                        j0Var.f30388t = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            j0Var.q(hashMap);
            return j0Var;
        }
    }

    public void l(Double d10) {
        this.f30389u = d10;
    }

    public void m(List list) {
        this.f30390v = list;
    }

    public void n(Double d10) {
        this.f30385q = d10;
    }

    public void o(String str) {
        this.f30382i = str;
    }

    public void p(String str) {
        this.f30381e = str;
    }

    public void q(Map map) {
        this.f30391w = map;
    }

    public void r(String str) {
        this.f30388t = str;
    }

    public void s(Double d10) {
        this.f30384p = d10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30380d != null) {
            f3Var.e("rendering_system").f(this.f30380d);
        }
        if (this.f30381e != null) {
            f3Var.e("type").f(this.f30381e);
        }
        if (this.f30382i != null) {
            f3Var.e("identifier").f(this.f30382i);
        }
        if (this.f30383o != null) {
            f3Var.e("tag").f(this.f30383o);
        }
        if (this.f30384p != null) {
            f3Var.e("width").i(this.f30384p);
        }
        if (this.f30385q != null) {
            f3Var.e("height").i(this.f30385q);
        }
        if (this.f30386r != null) {
            f3Var.e("x").i(this.f30386r);
        }
        if (this.f30387s != null) {
            f3Var.e("y").i(this.f30387s);
        }
        if (this.f30388t != null) {
            f3Var.e("visibility").f(this.f30388t);
        }
        if (this.f30389u != null) {
            f3Var.e("alpha").i(this.f30389u);
        }
        List list = this.f30390v;
        if (list != null && !list.isEmpty()) {
            f3Var.e("children").j(iLogger, this.f30390v);
        }
        Map map = this.f30391w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30391w.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Double d10) {
        this.f30386r = d10;
    }

    public void u(Double d10) {
        this.f30387s = d10;
    }
}
