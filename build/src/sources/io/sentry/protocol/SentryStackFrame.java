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
    private List f30202d;

    /* renamed from: e  reason: collision with root package name */
    private List f30203e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30204i;

    /* renamed from: o  reason: collision with root package name */
    private List f30205o;

    /* renamed from: p  reason: collision with root package name */
    private String f30206p;

    /* renamed from: q  reason: collision with root package name */
    private String f30207q;

    /* renamed from: r  reason: collision with root package name */
    private String f30208r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f30209s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f30210t;

    /* renamed from: u  reason: collision with root package name */
    private String f30211u;

    /* renamed from: v  reason: collision with root package name */
    private String f30212v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30213w;

    /* renamed from: x  reason: collision with root package name */
    private String f30214x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f30215y;

    /* renamed from: z  reason: collision with root package name */
    private String f30216z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public SentryStackFrame a(e3 e3Var, ILogger iLogger) {
            SentryStackFrame sentryStackFrame = new SentryStackFrame();
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1641491184:
                        if (l02.equals("post_context")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1443345323:
                        if (l02.equals("image_addr")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1184392185:
                        if (l02.equals("in_app")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1113875953:
                        if (l02.equals("raw_function")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102671691:
                        if (l02.equals("lineno")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (l02.equals("module")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -1052618729:
                        if (l02.equals("native")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -887523944:
                        if (l02.equals("symbol")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -807062458:
                        if (l02.equals("package")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -734768633:
                        if (l02.equals("filename")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -330260936:
                        if (l02.equals("symbol_addr")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 3327275:
                        if (l02.equals("lock")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 3612204:
                        if (l02.equals("vars")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case 94842689:
                        if (l02.equals("colno")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case 410194178:
                        if (l02.equals("instruction_addr")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 822688787:
                        if (l02.equals("pre_context")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 868820273:
                        if (l02.equals("addr_mode")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 1116694660:
                        if (l02.equals("context_line")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 1380938712:
                        if (l02.equals("function")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1713445842:
                        if (l02.equals("abs_path")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (l02.equals("platform")) {
                            c10 = 20;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sentryStackFrame.f30203e = (List) e3Var.V1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.r1();
                        break;
                    case 2:
                        sentryStackFrame.f30213w = e3Var.v0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.r1();
                        break;
                    case 4:
                        sentryStackFrame.f30209s = e3Var.k1();
                        break;
                    case 5:
                        sentryStackFrame.f30208r = e3Var.r1();
                        break;
                    case 6:
                        sentryStackFrame.f30215y = e3Var.v0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.r1();
                        break;
                    case '\b':
                        sentryStackFrame.f30214x = e3Var.r1();
                        break;
                    case '\t':
                        sentryStackFrame.f30206p = e3Var.r1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.r1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.G0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f30204i = (Map) e3Var.V1();
                        break;
                    case '\r':
                        sentryStackFrame.f30210t = e3Var.k1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.r1();
                        break;
                    case 15:
                        sentryStackFrame.f30202d = (List) e3Var.V1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.r1();
                        break;
                    case 17:
                        sentryStackFrame.f30212v = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f30207q = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f30211u = e3Var.r1();
                        break;
                    case 20:
                        sentryStackFrame.f30216z = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            sentryStackFrame.L(concurrentHashMap);
            e3Var.y();
            return sentryStackFrame;
        }
    }

    public void A(String str) {
        this.D = str;
    }

    public void B(String str) {
        this.f30206p = str;
    }

    public void C(String str) {
        this.f30207q = str;
    }

    public void D(Boolean bool) {
        this.f30213w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f30209s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f30208r = str;
    }

    public void I(Boolean bool) {
        this.f30215y = bool;
    }

    public void J(String str) {
        this.f30214x = str;
    }

    public void K(String str) {
        this.f30216z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f30202d, sentryStackFrame.f30202d) && Objects.equals(this.f30203e, sentryStackFrame.f30203e) && Objects.equals(this.f30204i, sentryStackFrame.f30204i) && Objects.equals(this.f30205o, sentryStackFrame.f30205o) && Objects.equals(this.f30206p, sentryStackFrame.f30206p) && Objects.equals(this.f30207q, sentryStackFrame.f30207q) && Objects.equals(this.f30208r, sentryStackFrame.f30208r) && Objects.equals(this.f30209s, sentryStackFrame.f30209s) && Objects.equals(this.f30210t, sentryStackFrame.f30210t) && Objects.equals(this.f30211u, sentryStackFrame.f30211u) && Objects.equals(this.f30212v, sentryStackFrame.f30212v) && Objects.equals(this.f30213w, sentryStackFrame.f30213w) && Objects.equals(this.f30214x, sentryStackFrame.f30214x) && Objects.equals(this.f30215y, sentryStackFrame.f30215y) && Objects.equals(this.f30216z, sentryStackFrame.f30216z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f30202d, this.f30203e, this.f30204i, this.f30205o, this.f30206p, this.f30207q, this.f30208r, this.f30209s, this.f30210t, this.f30211u, this.f30212v, this.f30213w, this.f30214x, this.f30215y, this.f30216z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30206p != null) {
            f3Var.e("filename").f(this.f30206p);
        }
        if (this.f30207q != null) {
            f3Var.e("function").f(this.f30207q);
        }
        if (this.f30208r != null) {
            f3Var.e("module").f(this.f30208r);
        }
        if (this.f30209s != null) {
            f3Var.e("lineno").i(this.f30209s);
        }
        if (this.f30210t != null) {
            f3Var.e("colno").i(this.f30210t);
        }
        if (this.f30211u != null) {
            f3Var.e("abs_path").f(this.f30211u);
        }
        if (this.f30212v != null) {
            f3Var.e("context_line").f(this.f30212v);
        }
        if (this.f30213w != null) {
            f3Var.e("in_app").k(this.f30213w);
        }
        if (this.f30214x != null) {
            f3Var.e("package").f(this.f30214x);
        }
        if (this.f30215y != null) {
            f3Var.e("native").k(this.f30215y);
        }
        if (this.f30216z != null) {
            f3Var.e("platform").f(this.f30216z);
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
        List list = this.f30202d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f30202d);
        }
        List list2 = this.f30203e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f30203e);
        }
        Map map = this.f30204i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f30204i);
        }
        Map map2 = this.F;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                Object obj = this.F.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public Integer v() {
        return this.f30210t;
    }

    public String w() {
        return this.f30206p;
    }

    public String x() {
        return this.f30207q;
    }

    public Integer y() {
        return this.f30209s;
    }

    public String z() {
        return this.f30208r;
    }
}
