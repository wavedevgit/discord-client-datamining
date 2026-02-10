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
    private String f29708d;

    /* renamed from: e  reason: collision with root package name */
    private String f29709e;

    /* renamed from: i  reason: collision with root package name */
    private String f29710i;

    /* renamed from: o  reason: collision with root package name */
    private String f29711o;

    /* renamed from: p  reason: collision with root package name */
    private Double f29712p;

    /* renamed from: q  reason: collision with root package name */
    private Double f29713q;

    /* renamed from: r  reason: collision with root package name */
    private Double f29714r;

    /* renamed from: s  reason: collision with root package name */
    private Double f29715s;

    /* renamed from: t  reason: collision with root package name */
    private String f29716t;

    /* renamed from: u  reason: collision with root package name */
    private Double f29717u;

    /* renamed from: v  reason: collision with root package name */
    private List f29718v;

    /* renamed from: w  reason: collision with root package name */
    private Map f29719w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j0 a(e3 e3Var, ILogger iLogger) {
            j0 j0Var = new j0();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1784982718:
                        if (o02.equals("rendering_system")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1618432855:
                        if (o02.equals("identifier")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (o02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 120:
                        if (o02.equals("x")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 121:
                        if (o02.equals("y")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 114586:
                        if (o02.equals("tag")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 92909918:
                        if (o02.equals("alpha")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (o02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1659526655:
                        if (o02.equals("children")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1941332754:
                        if (o02.equals("visibility")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        j0Var.f29708d = e3Var.r1();
                        break;
                    case 1:
                        j0Var.f29710i = e3Var.r1();
                        break;
                    case 2:
                        j0Var.f29713q = e3Var.n0();
                        break;
                    case 3:
                        j0Var.f29714r = e3Var.n0();
                        break;
                    case 4:
                        j0Var.f29715s = e3Var.n0();
                        break;
                    case 5:
                        j0Var.f29711o = e3Var.r1();
                        break;
                    case 6:
                        j0Var.f29709e = e3Var.r1();
                        break;
                    case 7:
                        j0Var.f29717u = e3Var.n0();
                        break;
                    case '\b':
                        j0Var.f29712p = e3Var.n0();
                        break;
                    case '\t':
                        j0Var.f29718v = e3Var.k2(iLogger, this);
                        break;
                    case '\n':
                        j0Var.f29716t = e3Var.r1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            j0Var.q(hashMap);
            return j0Var;
        }
    }

    public void l(Double d10) {
        this.f29717u = d10;
    }

    public void m(List list) {
        this.f29718v = list;
    }

    public void n(Double d10) {
        this.f29713q = d10;
    }

    public void o(String str) {
        this.f29710i = str;
    }

    public void p(String str) {
        this.f29709e = str;
    }

    public void q(Map map) {
        this.f29719w = map;
    }

    public void r(String str) {
        this.f29716t = str;
    }

    public void s(Double d10) {
        this.f29712p = d10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29708d != null) {
            f3Var.e("rendering_system").f(this.f29708d);
        }
        if (this.f29709e != null) {
            f3Var.e("type").f(this.f29709e);
        }
        if (this.f29710i != null) {
            f3Var.e("identifier").f(this.f29710i);
        }
        if (this.f29711o != null) {
            f3Var.e("tag").f(this.f29711o);
        }
        if (this.f29712p != null) {
            f3Var.e("width").i(this.f29712p);
        }
        if (this.f29713q != null) {
            f3Var.e("height").i(this.f29713q);
        }
        if (this.f29714r != null) {
            f3Var.e("x").i(this.f29714r);
        }
        if (this.f29715s != null) {
            f3Var.e("y").i(this.f29715s);
        }
        if (this.f29716t != null) {
            f3Var.e("visibility").f(this.f29716t);
        }
        if (this.f29717u != null) {
            f3Var.e("alpha").i(this.f29717u);
        }
        List list = this.f29718v;
        if (list != null && !list.isEmpty()) {
            f3Var.e("children").j(iLogger, this.f29718v);
        }
        Map map = this.f29719w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29719w.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Double d10) {
        this.f29714r = d10;
    }

    public void u(Double d10) {
        this.f29715s = d10;
    }
}
