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
    private String f29381d;

    /* renamed from: e  reason: collision with root package name */
    private String f29382e;

    /* renamed from: i  reason: collision with root package name */
    private String f29383i;

    /* renamed from: o  reason: collision with root package name */
    private String f29384o;

    /* renamed from: p  reason: collision with root package name */
    private Double f29385p;

    /* renamed from: q  reason: collision with root package name */
    private Double f29386q;

    /* renamed from: r  reason: collision with root package name */
    private Double f29387r;

    /* renamed from: s  reason: collision with root package name */
    private Double f29388s;

    /* renamed from: t  reason: collision with root package name */
    private String f29389t;

    /* renamed from: u  reason: collision with root package name */
    private Double f29390u;

    /* renamed from: v  reason: collision with root package name */
    private List f29391v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29392w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j0 a(e3 e3Var, ILogger iLogger) {
            j0 j0Var = new j0();
            e3Var.s();
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
                        j0Var.f29381d = e3Var.r1();
                        break;
                    case 1:
                        j0Var.f29383i = e3Var.r1();
                        break;
                    case 2:
                        j0Var.f29386q = e3Var.l0();
                        break;
                    case 3:
                        j0Var.f29387r = e3Var.l0();
                        break;
                    case 4:
                        j0Var.f29388s = e3Var.l0();
                        break;
                    case 5:
                        j0Var.f29384o = e3Var.r1();
                        break;
                    case 6:
                        j0Var.f29382e = e3Var.r1();
                        break;
                    case 7:
                        j0Var.f29390u = e3Var.l0();
                        break;
                    case '\b':
                        j0Var.f29385p = e3Var.l0();
                        break;
                    case '\t':
                        j0Var.f29391v = e3Var.g2(iLogger, this);
                        break;
                    case '\n':
                        j0Var.f29389t = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
            j0Var.q(hashMap);
            return j0Var;
        }
    }

    public void l(Double d10) {
        this.f29390u = d10;
    }

    public void m(List list) {
        this.f29391v = list;
    }

    public void n(Double d10) {
        this.f29386q = d10;
    }

    public void o(String str) {
        this.f29383i = str;
    }

    public void p(String str) {
        this.f29382e = str;
    }

    public void q(Map map) {
        this.f29392w = map;
    }

    public void r(String str) {
        this.f29389t = str;
    }

    public void s(Double d10) {
        this.f29385p = d10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29381d != null) {
            f3Var.e("rendering_system").f(this.f29381d);
        }
        if (this.f29382e != null) {
            f3Var.e("type").f(this.f29382e);
        }
        if (this.f29383i != null) {
            f3Var.e("identifier").f(this.f29383i);
        }
        if (this.f29384o != null) {
            f3Var.e("tag").f(this.f29384o);
        }
        if (this.f29385p != null) {
            f3Var.e("width").i(this.f29385p);
        }
        if (this.f29386q != null) {
            f3Var.e("height").i(this.f29386q);
        }
        if (this.f29387r != null) {
            f3Var.e("x").i(this.f29387r);
        }
        if (this.f29388s != null) {
            f3Var.e("y").i(this.f29388s);
        }
        if (this.f29389t != null) {
            f3Var.e("visibility").f(this.f29389t);
        }
        if (this.f29390u != null) {
            f3Var.e("alpha").i(this.f29390u);
        }
        List list = this.f29391v;
        if (list != null && !list.isEmpty()) {
            f3Var.e("children").j(iLogger, this.f29391v);
        }
        Map map = this.f29392w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29392w.get(str));
            }
        }
        f3Var.z();
    }

    public void t(Double d10) {
        this.f29387r = d10;
    }

    public void u(Double d10) {
        this.f29388s = d10;
    }
}
