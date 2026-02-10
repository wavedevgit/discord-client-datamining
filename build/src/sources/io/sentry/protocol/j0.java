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
    private String f28773d;

    /* renamed from: e  reason: collision with root package name */
    private String f28774e;

    /* renamed from: i  reason: collision with root package name */
    private String f28775i;

    /* renamed from: o  reason: collision with root package name */
    private String f28776o;

    /* renamed from: p  reason: collision with root package name */
    private Double f28777p;

    /* renamed from: q  reason: collision with root package name */
    private Double f28778q;

    /* renamed from: r  reason: collision with root package name */
    private Double f28779r;

    /* renamed from: s  reason: collision with root package name */
    private Double f28780s;

    /* renamed from: t  reason: collision with root package name */
    private String f28781t;

    /* renamed from: u  reason: collision with root package name */
    private Double f28782u;

    /* renamed from: v  reason: collision with root package name */
    private List f28783v;

    /* renamed from: w  reason: collision with root package name */
    private Map f28784w;

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
                        j0Var.f28773d = e3Var.m1();
                        break;
                    case 1:
                        j0Var.f28775i = e3Var.m1();
                        break;
                    case 2:
                        j0Var.f28778q = e3Var.n0();
                        break;
                    case 3:
                        j0Var.f28779r = e3Var.n0();
                        break;
                    case 4:
                        j0Var.f28780s = e3Var.n0();
                        break;
                    case 5:
                        j0Var.f28776o = e3Var.m1();
                        break;
                    case 6:
                        j0Var.f28774e = e3Var.m1();
                        break;
                    case 7:
                        j0Var.f28782u = e3Var.n0();
                        break;
                    case '\b':
                        j0Var.f28777p = e3Var.n0();
                        break;
                    case '\t':
                        j0Var.f28783v = e3Var.f2(iLogger, this);
                        break;
                    case '\n':
                        j0Var.f28781t = e3Var.m1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            j0Var.q(hashMap);
            return j0Var;
        }
    }

    public void l(Double d10) {
        this.f28782u = d10;
    }

    public void m(List list) {
        this.f28783v = list;
    }

    public void n(Double d10) {
        this.f28778q = d10;
    }

    public void o(String str) {
        this.f28775i = str;
    }

    public void p(String str) {
        this.f28774e = str;
    }

    public void q(Map map) {
        this.f28784w = map;
    }

    public void r(String str) {
        this.f28781t = str;
    }

    public void s(Double d10) {
        this.f28777p = d10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28773d != null) {
            f3Var.e("rendering_system").f(this.f28773d);
        }
        if (this.f28774e != null) {
            f3Var.e("type").f(this.f28774e);
        }
        if (this.f28775i != null) {
            f3Var.e("identifier").f(this.f28775i);
        }
        if (this.f28776o != null) {
            f3Var.e("tag").f(this.f28776o);
        }
        if (this.f28777p != null) {
            f3Var.e("width").i(this.f28777p);
        }
        if (this.f28778q != null) {
            f3Var.e("height").i(this.f28778q);
        }
        if (this.f28779r != null) {
            f3Var.e("x").i(this.f28779r);
        }
        if (this.f28780s != null) {
            f3Var.e("y").i(this.f28780s);
        }
        if (this.f28781t != null) {
            f3Var.e("visibility").f(this.f28781t);
        }
        if (this.f28782u != null) {
            f3Var.e("alpha").i(this.f28782u);
        }
        List list = this.f28783v;
        if (list != null && !list.isEmpty()) {
            f3Var.e("children").j(iLogger, this.f28783v);
        }
        Map map = this.f28784w;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28784w.get(str));
            }
        }
        f3Var.D();
    }

    public void t(Double d10) {
        this.f28779r = d10;
    }

    public void u(Double d10) {
        this.f28780s = d10;
    }
}
