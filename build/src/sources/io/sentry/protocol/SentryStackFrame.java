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
    private List f29588d;

    /* renamed from: e  reason: collision with root package name */
    private List f29589e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29590i;

    /* renamed from: o  reason: collision with root package name */
    private List f29591o;

    /* renamed from: p  reason: collision with root package name */
    private String f29592p;

    /* renamed from: q  reason: collision with root package name */
    private String f29593q;

    /* renamed from: r  reason: collision with root package name */
    private String f29594r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f29595s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f29596t;

    /* renamed from: u  reason: collision with root package name */
    private String f29597u;

    /* renamed from: v  reason: collision with root package name */
    private String f29598v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29599w;

    /* renamed from: x  reason: collision with root package name */
    private String f29600x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f29601y;

    /* renamed from: z  reason: collision with root package name */
    private String f29602z;

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
                        sentryStackFrame.f29589e = (List) e3Var.Z1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.r1();
                        break;
                    case 2:
                        sentryStackFrame.f29599w = e3Var.w0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.r1();
                        break;
                    case 4:
                        sentryStackFrame.f29595s = e3Var.l1();
                        break;
                    case 5:
                        sentryStackFrame.f29594r = e3Var.r1();
                        break;
                    case 6:
                        sentryStackFrame.f29601y = e3Var.w0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.r1();
                        break;
                    case '\b':
                        sentryStackFrame.f29600x = e3Var.r1();
                        break;
                    case '\t':
                        sentryStackFrame.f29592p = e3Var.r1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.r1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.I0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f29590i = (Map) e3Var.Z1();
                        break;
                    case '\r':
                        sentryStackFrame.f29596t = e3Var.l1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.r1();
                        break;
                    case 15:
                        sentryStackFrame.f29588d = (List) e3Var.Z1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.r1();
                        break;
                    case 17:
                        sentryStackFrame.f29598v = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f29593q = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f29597u = e3Var.r1();
                        break;
                    case 20:
                        sentryStackFrame.f29602z = e3Var.r1();
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
        this.f29592p = str;
    }

    public void C(String str) {
        this.f29593q = str;
    }

    public void D(Boolean bool) {
        this.f29599w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f29595s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f29594r = str;
    }

    public void I(Boolean bool) {
        this.f29601y = bool;
    }

    public void J(String str) {
        this.f29600x = str;
    }

    public void K(String str) {
        this.f29602z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f29588d, sentryStackFrame.f29588d) && Objects.equals(this.f29589e, sentryStackFrame.f29589e) && Objects.equals(this.f29590i, sentryStackFrame.f29590i) && Objects.equals(this.f29591o, sentryStackFrame.f29591o) && Objects.equals(this.f29592p, sentryStackFrame.f29592p) && Objects.equals(this.f29593q, sentryStackFrame.f29593q) && Objects.equals(this.f29594r, sentryStackFrame.f29594r) && Objects.equals(this.f29595s, sentryStackFrame.f29595s) && Objects.equals(this.f29596t, sentryStackFrame.f29596t) && Objects.equals(this.f29597u, sentryStackFrame.f29597u) && Objects.equals(this.f29598v, sentryStackFrame.f29598v) && Objects.equals(this.f29599w, sentryStackFrame.f29599w) && Objects.equals(this.f29600x, sentryStackFrame.f29600x) && Objects.equals(this.f29601y, sentryStackFrame.f29601y) && Objects.equals(this.f29602z, sentryStackFrame.f29602z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29588d, this.f29589e, this.f29590i, this.f29591o, this.f29592p, this.f29593q, this.f29594r, this.f29595s, this.f29596t, this.f29597u, this.f29598v, this.f29599w, this.f29600x, this.f29601y, this.f29602z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29592p != null) {
            f3Var.e("filename").f(this.f29592p);
        }
        if (this.f29593q != null) {
            f3Var.e("function").f(this.f29593q);
        }
        if (this.f29594r != null) {
            f3Var.e("module").f(this.f29594r);
        }
        if (this.f29595s != null) {
            f3Var.e("lineno").i(this.f29595s);
        }
        if (this.f29596t != null) {
            f3Var.e("colno").i(this.f29596t);
        }
        if (this.f29597u != null) {
            f3Var.e("abs_path").f(this.f29597u);
        }
        if (this.f29598v != null) {
            f3Var.e("context_line").f(this.f29598v);
        }
        if (this.f29599w != null) {
            f3Var.e("in_app").k(this.f29599w);
        }
        if (this.f29600x != null) {
            f3Var.e("package").f(this.f29600x);
        }
        if (this.f29601y != null) {
            f3Var.e("native").k(this.f29601y);
        }
        if (this.f29602z != null) {
            f3Var.e("platform").f(this.f29602z);
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
        List list = this.f29588d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f29588d);
        }
        List list2 = this.f29589e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f29589e);
        }
        Map map = this.f29590i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f29590i);
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
        return this.f29596t;
    }

    public String w() {
        return this.f29592p;
    }

    public String x() {
        return this.f29593q;
    }

    public Integer y() {
        return this.f29595s;
    }

    public String z() {
        return this.f29594r;
    }
}
