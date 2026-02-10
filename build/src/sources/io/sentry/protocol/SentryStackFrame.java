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
    private List f28652d;

    /* renamed from: e  reason: collision with root package name */
    private List f28653e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28654i;

    /* renamed from: o  reason: collision with root package name */
    private List f28655o;

    /* renamed from: p  reason: collision with root package name */
    private String f28656p;

    /* renamed from: q  reason: collision with root package name */
    private String f28657q;

    /* renamed from: r  reason: collision with root package name */
    private String f28658r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f28659s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f28660t;

    /* renamed from: u  reason: collision with root package name */
    private String f28661u;

    /* renamed from: v  reason: collision with root package name */
    private String f28662v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f28663w;

    /* renamed from: x  reason: collision with root package name */
    private String f28664x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f28665y;

    /* renamed from: z  reason: collision with root package name */
    private String f28666z;

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
                        sentryStackFrame.f28653e = (List) e3Var.T1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.m1();
                        break;
                    case 2:
                        sentryStackFrame.f28663w = e3Var.w0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.m1();
                        break;
                    case 4:
                        sentryStackFrame.f28659s = e3Var.g1();
                        break;
                    case 5:
                        sentryStackFrame.f28658r = e3Var.m1();
                        break;
                    case 6:
                        sentryStackFrame.f28665y = e3Var.w0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.m1();
                        break;
                    case '\b':
                        sentryStackFrame.f28664x = e3Var.m1();
                        break;
                    case '\t':
                        sentryStackFrame.f28656p = e3Var.m1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.m1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.E0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f28654i = (Map) e3Var.T1();
                        break;
                    case '\r':
                        sentryStackFrame.f28660t = e3Var.g1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.m1();
                        break;
                    case 15:
                        sentryStackFrame.f28652d = (List) e3Var.T1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.m1();
                        break;
                    case 17:
                        sentryStackFrame.f28662v = e3Var.m1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f28657q = e3Var.m1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f28661u = e3Var.m1();
                        break;
                    case 20:
                        sentryStackFrame.f28666z = e3Var.m1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
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
        this.f28656p = str;
    }

    public void C(String str) {
        this.f28657q = str;
    }

    public void D(Boolean bool) {
        this.f28663w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f28659s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f28658r = str;
    }

    public void I(Boolean bool) {
        this.f28665y = bool;
    }

    public void J(String str) {
        this.f28664x = str;
    }

    public void K(String str) {
        this.f28666z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f28652d, sentryStackFrame.f28652d) && Objects.equals(this.f28653e, sentryStackFrame.f28653e) && Objects.equals(this.f28654i, sentryStackFrame.f28654i) && Objects.equals(this.f28655o, sentryStackFrame.f28655o) && Objects.equals(this.f28656p, sentryStackFrame.f28656p) && Objects.equals(this.f28657q, sentryStackFrame.f28657q) && Objects.equals(this.f28658r, sentryStackFrame.f28658r) && Objects.equals(this.f28659s, sentryStackFrame.f28659s) && Objects.equals(this.f28660t, sentryStackFrame.f28660t) && Objects.equals(this.f28661u, sentryStackFrame.f28661u) && Objects.equals(this.f28662v, sentryStackFrame.f28662v) && Objects.equals(this.f28663w, sentryStackFrame.f28663w) && Objects.equals(this.f28664x, sentryStackFrame.f28664x) && Objects.equals(this.f28665y, sentryStackFrame.f28665y) && Objects.equals(this.f28666z, sentryStackFrame.f28666z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28652d, this.f28653e, this.f28654i, this.f28655o, this.f28656p, this.f28657q, this.f28658r, this.f28659s, this.f28660t, this.f28661u, this.f28662v, this.f28663w, this.f28664x, this.f28665y, this.f28666z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28656p != null) {
            f3Var.e("filename").f(this.f28656p);
        }
        if (this.f28657q != null) {
            f3Var.e("function").f(this.f28657q);
        }
        if (this.f28658r != null) {
            f3Var.e("module").f(this.f28658r);
        }
        if (this.f28659s != null) {
            f3Var.e("lineno").i(this.f28659s);
        }
        if (this.f28660t != null) {
            f3Var.e("colno").i(this.f28660t);
        }
        if (this.f28661u != null) {
            f3Var.e("abs_path").f(this.f28661u);
        }
        if (this.f28662v != null) {
            f3Var.e("context_line").f(this.f28662v);
        }
        if (this.f28663w != null) {
            f3Var.e("in_app").k(this.f28663w);
        }
        if (this.f28664x != null) {
            f3Var.e("package").f(this.f28664x);
        }
        if (this.f28665y != null) {
            f3Var.e("native").k(this.f28665y);
        }
        if (this.f28666z != null) {
            f3Var.e("platform").f(this.f28666z);
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
        List list = this.f28652d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f28652d);
        }
        List list2 = this.f28653e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f28653e);
        }
        Map map = this.f28654i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f28654i);
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
        return this.f28660t;
    }

    public String w() {
        return this.f28656p;
    }

    public String x() {
        return this.f28657q;
    }

    public Integer y() {
        return this.f28659s;
    }

    public String z() {
        return this.f28658r;
    }
}
