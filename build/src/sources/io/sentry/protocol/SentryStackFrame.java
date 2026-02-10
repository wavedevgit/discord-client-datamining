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
    private List f29587d;

    /* renamed from: e  reason: collision with root package name */
    private List f29588e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29589i;

    /* renamed from: o  reason: collision with root package name */
    private List f29590o;

    /* renamed from: p  reason: collision with root package name */
    private String f29591p;

    /* renamed from: q  reason: collision with root package name */
    private String f29592q;

    /* renamed from: r  reason: collision with root package name */
    private String f29593r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f29594s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f29595t;

    /* renamed from: u  reason: collision with root package name */
    private String f29596u;

    /* renamed from: v  reason: collision with root package name */
    private String f29597v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29598w;

    /* renamed from: x  reason: collision with root package name */
    private String f29599x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f29600y;

    /* renamed from: z  reason: collision with root package name */
    private String f29601z;

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
                        sentryStackFrame.f29588e = (List) e3Var.Z1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.r1();
                        break;
                    case 2:
                        sentryStackFrame.f29598w = e3Var.w0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.r1();
                        break;
                    case 4:
                        sentryStackFrame.f29594s = e3Var.l1();
                        break;
                    case 5:
                        sentryStackFrame.f29593r = e3Var.r1();
                        break;
                    case 6:
                        sentryStackFrame.f29600y = e3Var.w0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.r1();
                        break;
                    case '\b':
                        sentryStackFrame.f29599x = e3Var.r1();
                        break;
                    case '\t':
                        sentryStackFrame.f29591p = e3Var.r1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.r1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.I0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f29589i = (Map) e3Var.Z1();
                        break;
                    case '\r':
                        sentryStackFrame.f29595t = e3Var.l1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.r1();
                        break;
                    case 15:
                        sentryStackFrame.f29587d = (List) e3Var.Z1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.r1();
                        break;
                    case 17:
                        sentryStackFrame.f29597v = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f29592q = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f29596u = e3Var.r1();
                        break;
                    case 20:
                        sentryStackFrame.f29601z = e3Var.r1();
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
        this.f29591p = str;
    }

    public void C(String str) {
        this.f29592q = str;
    }

    public void D(Boolean bool) {
        this.f29598w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f29594s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f29593r = str;
    }

    public void I(Boolean bool) {
        this.f29600y = bool;
    }

    public void J(String str) {
        this.f29599x = str;
    }

    public void K(String str) {
        this.f29601z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f29587d, sentryStackFrame.f29587d) && Objects.equals(this.f29588e, sentryStackFrame.f29588e) && Objects.equals(this.f29589i, sentryStackFrame.f29589i) && Objects.equals(this.f29590o, sentryStackFrame.f29590o) && Objects.equals(this.f29591p, sentryStackFrame.f29591p) && Objects.equals(this.f29592q, sentryStackFrame.f29592q) && Objects.equals(this.f29593r, sentryStackFrame.f29593r) && Objects.equals(this.f29594s, sentryStackFrame.f29594s) && Objects.equals(this.f29595t, sentryStackFrame.f29595t) && Objects.equals(this.f29596u, sentryStackFrame.f29596u) && Objects.equals(this.f29597v, sentryStackFrame.f29597v) && Objects.equals(this.f29598w, sentryStackFrame.f29598w) && Objects.equals(this.f29599x, sentryStackFrame.f29599x) && Objects.equals(this.f29600y, sentryStackFrame.f29600y) && Objects.equals(this.f29601z, sentryStackFrame.f29601z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29587d, this.f29588e, this.f29589i, this.f29590o, this.f29591p, this.f29592q, this.f29593r, this.f29594s, this.f29595t, this.f29596u, this.f29597v, this.f29598w, this.f29599x, this.f29600y, this.f29601z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29591p != null) {
            f3Var.e("filename").f(this.f29591p);
        }
        if (this.f29592q != null) {
            f3Var.e("function").f(this.f29592q);
        }
        if (this.f29593r != null) {
            f3Var.e("module").f(this.f29593r);
        }
        if (this.f29594s != null) {
            f3Var.e("lineno").i(this.f29594s);
        }
        if (this.f29595t != null) {
            f3Var.e("colno").i(this.f29595t);
        }
        if (this.f29596u != null) {
            f3Var.e("abs_path").f(this.f29596u);
        }
        if (this.f29597v != null) {
            f3Var.e("context_line").f(this.f29597v);
        }
        if (this.f29598w != null) {
            f3Var.e("in_app").k(this.f29598w);
        }
        if (this.f29599x != null) {
            f3Var.e("package").f(this.f29599x);
        }
        if (this.f29600y != null) {
            f3Var.e("native").k(this.f29600y);
        }
        if (this.f29601z != null) {
            f3Var.e("platform").f(this.f29601z);
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
        List list = this.f29587d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f29587d);
        }
        List list2 = this.f29588e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f29588e);
        }
        Map map = this.f29589i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f29589i);
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
        return this.f29595t;
    }

    public String w() {
        return this.f29591p;
    }

    public String x() {
        return this.f29592q;
    }

    public Integer y() {
        return this.f29594s;
    }

    public String z() {
        return this.f29593r;
    }
}
