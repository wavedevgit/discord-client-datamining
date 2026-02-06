package io.sentry.protocol;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import io.sentry.w6;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SentryStackFrame implements w1 {
    private String A;
    private String B;
    private String C;
    private String D;
    private String E;
    private Map F;
    private String G;
    private w6 H;

    /* renamed from: d  reason: collision with root package name */
    private List f28404d;

    /* renamed from: e  reason: collision with root package name */
    private List f28405e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28406i;

    /* renamed from: o  reason: collision with root package name */
    private List f28407o;

    /* renamed from: p  reason: collision with root package name */
    private String f28408p;

    /* renamed from: q  reason: collision with root package name */
    private String f28409q;

    /* renamed from: r  reason: collision with root package name */
    private String f28410r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f28411s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28412t;

    /* renamed from: u  reason: collision with root package name */
    private String f28413u;

    /* renamed from: v  reason: collision with root package name */
    private String f28414v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28415w;

    /* renamed from: x  reason: collision with root package name */
    private String f28416x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f28417y;

    /* renamed from: z  reason: collision with root package name */
    private String f28418z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public SentryStackFrame a(e3 e3Var, ILogger iLogger) {
            SentryStackFrame sentryStackFrame = new SentryStackFrame();
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1641491184:
                        if (o02.equals("post_context")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1443345323:
                        if (o02.equals("image_addr")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1184392185:
                        if (o02.equals("in_app")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1113875953:
                        if (o02.equals("raw_function")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102671691:
                        if (o02.equals("lineno")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (o02.equals("module")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -1052618729:
                        if (o02.equals("native")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -887523944:
                        if (o02.equals("symbol")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -807062458:
                        if (o02.equals("package")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -734768633:
                        if (o02.equals("filename")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -330260936:
                        if (o02.equals("symbol_addr")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 3327275:
                        if (o02.equals("lock")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 3612204:
                        if (o02.equals("vars")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case 94842689:
                        if (o02.equals("colno")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case 410194178:
                        if (o02.equals("instruction_addr")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 822688787:
                        if (o02.equals("pre_context")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 868820273:
                        if (o02.equals("addr_mode")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 1116694660:
                        if (o02.equals("context_line")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 1380938712:
                        if (o02.equals("function")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1713445842:
                        if (o02.equals("abs_path")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (o02.equals("platform")) {
                            c10 = 20;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sentryStackFrame.f28405e = (List) e3Var.U1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.q1();
                        break;
                    case 2:
                        sentryStackFrame.f28415w = e3Var.y0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.q1();
                        break;
                    case 4:
                        sentryStackFrame.f28411s = e3Var.j1();
                        break;
                    case 5:
                        sentryStackFrame.f28410r = e3Var.q1();
                        break;
                    case 6:
                        sentryStackFrame.f28417y = e3Var.y0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.q1();
                        break;
                    case '\b':
                        sentryStackFrame.f28416x = e3Var.q1();
                        break;
                    case '\t':
                        sentryStackFrame.f28408p = e3Var.q1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.q1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.G0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f28406i = (Map) e3Var.U1();
                        break;
                    case '\r':
                        sentryStackFrame.f28412t = e3Var.j1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.q1();
                        break;
                    case 15:
                        sentryStackFrame.f28404d = (List) e3Var.U1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.q1();
                        break;
                    case 17:
                        sentryStackFrame.f28414v = e3Var.q1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f28409q = e3Var.q1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f28413u = e3Var.q1();
                        break;
                    case 20:
                        sentryStackFrame.f28418z = e3Var.q1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            sentryStackFrame.L(concurrentHashMap);
            e3Var.D();
            return sentryStackFrame;
        }
    }

    public void A(String str) {
        this.D = str;
    }

    public void B(String str) {
        this.f28408p = str;
    }

    public void C(String str) {
        this.f28409q = str;
    }

    public void D(Boolean bool) {
        this.f28415w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f28411s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f28410r = str;
    }

    public void I(Boolean bool) {
        this.f28417y = bool;
    }

    public void J(String str) {
        this.f28416x = str;
    }

    public void K(String str) {
        this.f28418z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f28404d, sentryStackFrame.f28404d) && Objects.equals(this.f28405e, sentryStackFrame.f28405e) && Objects.equals(this.f28406i, sentryStackFrame.f28406i) && Objects.equals(this.f28407o, sentryStackFrame.f28407o) && Objects.equals(this.f28408p, sentryStackFrame.f28408p) && Objects.equals(this.f28409q, sentryStackFrame.f28409q) && Objects.equals(this.f28410r, sentryStackFrame.f28410r) && Objects.equals(this.f28411s, sentryStackFrame.f28411s) && Objects.equals(this.f28412t, sentryStackFrame.f28412t) && Objects.equals(this.f28413u, sentryStackFrame.f28413u) && Objects.equals(this.f28414v, sentryStackFrame.f28414v) && Objects.equals(this.f28415w, sentryStackFrame.f28415w) && Objects.equals(this.f28416x, sentryStackFrame.f28416x) && Objects.equals(this.f28417y, sentryStackFrame.f28417y) && Objects.equals(this.f28418z, sentryStackFrame.f28418z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28404d, this.f28405e, this.f28406i, this.f28407o, this.f28408p, this.f28409q, this.f28410r, this.f28411s, this.f28412t, this.f28413u, this.f28414v, this.f28415w, this.f28416x, this.f28417y, this.f28418z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28408p != null) {
            f3Var.e("filename").f(this.f28408p);
        }
        if (this.f28409q != null) {
            f3Var.e("function").f(this.f28409q);
        }
        if (this.f28410r != null) {
            f3Var.e("module").f(this.f28410r);
        }
        if (this.f28411s != null) {
            f3Var.e("lineno").i(this.f28411s);
        }
        if (this.f28412t != null) {
            f3Var.e("colno").i(this.f28412t);
        }
        if (this.f28413u != null) {
            f3Var.e("abs_path").f(this.f28413u);
        }
        if (this.f28414v != null) {
            f3Var.e("context_line").f(this.f28414v);
        }
        if (this.f28415w != null) {
            f3Var.e("in_app").k(this.f28415w);
        }
        if (this.f28416x != null) {
            f3Var.e("package").f(this.f28416x);
        }
        if (this.f28417y != null) {
            f3Var.e("native").k(this.f28417y);
        }
        if (this.f28418z != null) {
            f3Var.e("platform").f(this.f28418z);
        }
        if (this.A != null) {
            f3Var.e("image_addr").f(this.A);
        }
        if (this.B != null) {
            f3Var.e("symbol_addr").f(this.B);
        }
        if (this.C != null) {
            f3Var.e("instruction_addr").f(this.C);
        }
        if (this.D != null) {
            f3Var.e("addr_mode").f(this.D);
        }
        if (this.G != null) {
            f3Var.e("raw_function").f(this.G);
        }
        if (this.E != null) {
            f3Var.e("symbol").f(this.E);
        }
        if (this.H != null) {
            f3Var.e("lock").j(iLogger, this.H);
        }
        List list = this.f28404d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f28404d);
        }
        List list2 = this.f28405e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f28405e);
        }
        Map map = this.f28406i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f28406i);
        }
        Map map2 = this.F;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                Object obj = this.F.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public Integer v() {
        return this.f28412t;
    }

    public String w() {
        return this.f28408p;
    }

    public String x() {
        return this.f28409q;
    }

    public Integer y() {
        return this.f28411s;
    }

    public String z() {
        return this.f28410r;
    }
}
