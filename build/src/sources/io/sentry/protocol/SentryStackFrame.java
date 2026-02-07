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
    private List f28452d;

    /* renamed from: e  reason: collision with root package name */
    private List f28453e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28454i;

    /* renamed from: o  reason: collision with root package name */
    private List f28455o;

    /* renamed from: p  reason: collision with root package name */
    private String f28456p;

    /* renamed from: q  reason: collision with root package name */
    private String f28457q;

    /* renamed from: r  reason: collision with root package name */
    private String f28458r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f28459s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28460t;

    /* renamed from: u  reason: collision with root package name */
    private String f28461u;

    /* renamed from: v  reason: collision with root package name */
    private String f28462v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28463w;

    /* renamed from: x  reason: collision with root package name */
    private String f28464x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f28465y;

    /* renamed from: z  reason: collision with root package name */
    private String f28466z;

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
                        sentryStackFrame.f28453e = (List) e3Var.U1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.q1();
                        break;
                    case 2:
                        sentryStackFrame.f28463w = e3Var.y0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.q1();
                        break;
                    case 4:
                        sentryStackFrame.f28459s = e3Var.j1();
                        break;
                    case 5:
                        sentryStackFrame.f28458r = e3Var.q1();
                        break;
                    case 6:
                        sentryStackFrame.f28465y = e3Var.y0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.q1();
                        break;
                    case '\b':
                        sentryStackFrame.f28464x = e3Var.q1();
                        break;
                    case '\t':
                        sentryStackFrame.f28456p = e3Var.q1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.q1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.G0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f28454i = (Map) e3Var.U1();
                        break;
                    case '\r':
                        sentryStackFrame.f28460t = e3Var.j1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.q1();
                        break;
                    case 15:
                        sentryStackFrame.f28452d = (List) e3Var.U1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.q1();
                        break;
                    case 17:
                        sentryStackFrame.f28462v = e3Var.q1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f28457q = e3Var.q1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f28461u = e3Var.q1();
                        break;
                    case 20:
                        sentryStackFrame.f28466z = e3Var.q1();
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
        this.f28456p = str;
    }

    public void C(String str) {
        this.f28457q = str;
    }

    public void D(Boolean bool) {
        this.f28463w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f28459s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f28458r = str;
    }

    public void I(Boolean bool) {
        this.f28465y = bool;
    }

    public void J(String str) {
        this.f28464x = str;
    }

    public void K(String str) {
        this.f28466z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f28452d, sentryStackFrame.f28452d) && Objects.equals(this.f28453e, sentryStackFrame.f28453e) && Objects.equals(this.f28454i, sentryStackFrame.f28454i) && Objects.equals(this.f28455o, sentryStackFrame.f28455o) && Objects.equals(this.f28456p, sentryStackFrame.f28456p) && Objects.equals(this.f28457q, sentryStackFrame.f28457q) && Objects.equals(this.f28458r, sentryStackFrame.f28458r) && Objects.equals(this.f28459s, sentryStackFrame.f28459s) && Objects.equals(this.f28460t, sentryStackFrame.f28460t) && Objects.equals(this.f28461u, sentryStackFrame.f28461u) && Objects.equals(this.f28462v, sentryStackFrame.f28462v) && Objects.equals(this.f28463w, sentryStackFrame.f28463w) && Objects.equals(this.f28464x, sentryStackFrame.f28464x) && Objects.equals(this.f28465y, sentryStackFrame.f28465y) && Objects.equals(this.f28466z, sentryStackFrame.f28466z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28452d, this.f28453e, this.f28454i, this.f28455o, this.f28456p, this.f28457q, this.f28458r, this.f28459s, this.f28460t, this.f28461u, this.f28462v, this.f28463w, this.f28464x, this.f28465y, this.f28466z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28456p != null) {
            f3Var.e("filename").f(this.f28456p);
        }
        if (this.f28457q != null) {
            f3Var.e("function").f(this.f28457q);
        }
        if (this.f28458r != null) {
            f3Var.e("module").f(this.f28458r);
        }
        if (this.f28459s != null) {
            f3Var.e("lineno").i(this.f28459s);
        }
        if (this.f28460t != null) {
            f3Var.e("colno").i(this.f28460t);
        }
        if (this.f28461u != null) {
            f3Var.e("abs_path").f(this.f28461u);
        }
        if (this.f28462v != null) {
            f3Var.e("context_line").f(this.f28462v);
        }
        if (this.f28463w != null) {
            f3Var.e("in_app").k(this.f28463w);
        }
        if (this.f28464x != null) {
            f3Var.e("package").f(this.f28464x);
        }
        if (this.f28465y != null) {
            f3Var.e("native").k(this.f28465y);
        }
        if (this.f28466z != null) {
            f3Var.e("platform").f(this.f28466z);
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
        List list = this.f28452d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f28452d);
        }
        List list2 = this.f28453e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f28453e);
        }
        Map map = this.f28454i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f28454i);
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
        return this.f28460t;
    }

    public String w() {
        return this.f28456p;
    }

    public String x() {
        return this.f28457q;
    }

    public Integer y() {
        return this.f28459s;
    }

    public String z() {
        return this.f28458r;
    }
}
