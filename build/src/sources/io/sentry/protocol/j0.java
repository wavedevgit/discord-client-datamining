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
    private String f29962d;

    /* renamed from: e  reason: collision with root package name */
    private String f29963e;

    /* renamed from: i  reason: collision with root package name */
    private String f29964i;

    /* renamed from: o  reason: collision with root package name */
    private String f29965o;

    /* renamed from: p  reason: collision with root package name */
    private Double f29966p;

    /* renamed from: q  reason: collision with root package name */
    private Double f29967q;

    /* renamed from: r  reason: collision with root package name */
    private Double f29968r;

    /* renamed from: s  reason: collision with root package name */
    private Double f29969s;

    /* renamed from: t  reason: collision with root package name */
    private String f29970t;

    /* renamed from: u  reason: collision with root package name */
    private Double f29971u;

    /* renamed from: v  reason: collision with root package name */
    private List f29972v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29973w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j0 a(e3 e3Var, ILogger iLogger) {
            j0 j0Var = new j0();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1784982718:
                        if (m02.equals("rendering_system")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1618432855:
                        if (m02.equals("identifier")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (m02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 120:
                        if (m02.equals("x")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 121:
                        if (m02.equals("y")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 114586:
                        if (m02.equals("tag")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 92909918:
                        if (m02.equals("alpha")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (m02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1659526655:
                        if (m02.equals("children")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1941332754:
                        if (m02.equals("visibility")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        j0Var.f29962d = e3Var.r1();
                        break;
                    case 1:
                        j0Var.f29964i = e3Var.r1();
                        break;
                    case 2:
                        j0Var.f29967q = e3Var.l0();
                        break;
                    case 3:
                        j0Var.f29968r = e3Var.l0();
                        break;
                    case 4:
                        j0Var.f29969s = e3Var.l0();
                        break;
                    case 5:
                        j0Var.f29965o = e3Var.r1();
                        break;
                    case 6:
                        j0Var.f29963e = e3Var.r1();
                        break;
                    case 7:
                        j0Var.f29971u = e3Var.l0();
                        break;
                    case '\b':
                        j0Var.f29966p = e3Var.l0();
                        break;
                    case '\t':
                        j0Var.f29972v = e3Var.g2(iLogger, this);
                        break;
                    case '\n':
                        j0Var.f29970t = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.y();
            j0Var.q(hashMap);
            return j0Var;
        }
    }

    public void l(Double d10) {
        this.f29971u = d10;
    }

    public void m(List list) {
        this.f29972v = list;
    }

    public void n(Double d10) {
        this.f29967q = d10;
    }

    public void o(String str) {
        this.f29964i = str;
    }

    public void p(String str) {
        this.f29963e = str;
    }

    public void q(Map map) {
        this.f29973w = map;
    }

    public void r(String str) {
        this.f29970t = str;
    }

    public void s(Double d10) {
        this.f29966p = d10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29962d != null) {
            f3Var.e("rendering_system").f(this.f29962d);
        }
        if (this.f29963e != null) {
            f3Var.e("type").f(this.f29963e);
        }
        if (this.f29964i != null) {
            f3Var.e("identifier").f(this.f29964i);
        }
        if (this.f29965o != null) {
            f3Var.e("tag").f(this.f29965o);
        }
        if (this.f29966p != null) {
            f3Var.e("width").i(this.f29966p);
        }
        if (this.f29967q != null) {
            f3Var.e("height").i(this.f29967q);
        }
        if (this.f29968r != null) {
            f3Var.e("x").i(this.f29968r);
        }
        if (this.f29969s != null) {
            f3Var.e("y").i(this.f29969s);
        }
        if (this.f29970t != null) {
            f3Var.e("visibility").f(this.f29970t);
        }
        if (this.f29971u != null) {
            f3Var.e("alpha").i(this.f29971u);
        }
        List list = this.f29972v;
        if (list != null && !list.isEmpty()) {
            f3Var.e("children").j(iLogger, this.f29972v);
        }
        Map map = this.f29973w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29973w.get(str));
            }
        }
        f3Var.y();
    }

    public void t(Double d10) {
        this.f29968r = d10;
    }

    public void u(Double d10) {
        this.f29969s = d10;
    }
}
