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
    private List f30156d;

    /* renamed from: e  reason: collision with root package name */
    private List f30157e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30158i;

    /* renamed from: o  reason: collision with root package name */
    private List f30159o;

    /* renamed from: p  reason: collision with root package name */
    private String f30160p;

    /* renamed from: q  reason: collision with root package name */
    private String f30161q;

    /* renamed from: r  reason: collision with root package name */
    private String f30162r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f30163s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f30164t;

    /* renamed from: u  reason: collision with root package name */
    private String f30165u;

    /* renamed from: v  reason: collision with root package name */
    private String f30166v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f30167w;

    /* renamed from: x  reason: collision with root package name */
    private String f30168x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f30169y;

    /* renamed from: z  reason: collision with root package name */
    private String f30170z;

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
                        sentryStackFrame.f30157e = (List) e3Var.Z1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.r1();
                        break;
                    case 2:
                        sentryStackFrame.f30167w = e3Var.w0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.r1();
                        break;
                    case 4:
                        sentryStackFrame.f30163s = e3Var.l1();
                        break;
                    case 5:
                        sentryStackFrame.f30162r = e3Var.r1();
                        break;
                    case 6:
                        sentryStackFrame.f30169y = e3Var.w0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.r1();
                        break;
                    case '\b':
                        sentryStackFrame.f30168x = e3Var.r1();
                        break;
                    case '\t':
                        sentryStackFrame.f30160p = e3Var.r1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.r1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.I0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f30158i = (Map) e3Var.Z1();
                        break;
                    case '\r':
                        sentryStackFrame.f30164t = e3Var.l1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.r1();
                        break;
                    case 15:
                        sentryStackFrame.f30156d = (List) e3Var.Z1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.r1();
                        break;
                    case 17:
                        sentryStackFrame.f30166v = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f30161q = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f30165u = e3Var.r1();
                        break;
                    case 20:
                        sentryStackFrame.f30170z = e3Var.r1();
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
        this.f30160p = str;
    }

    public void C(String str) {
        this.f30161q = str;
    }

    public void D(Boolean bool) {
        this.f30167w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f30163s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f30162r = str;
    }

    public void I(Boolean bool) {
        this.f30169y = bool;
    }

    public void J(String str) {
        this.f30168x = str;
    }

    public void K(String str) {
        this.f30170z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f30156d, sentryStackFrame.f30156d) && Objects.equals(this.f30157e, sentryStackFrame.f30157e) && Objects.equals(this.f30158i, sentryStackFrame.f30158i) && Objects.equals(this.f30159o, sentryStackFrame.f30159o) && Objects.equals(this.f30160p, sentryStackFrame.f30160p) && Objects.equals(this.f30161q, sentryStackFrame.f30161q) && Objects.equals(this.f30162r, sentryStackFrame.f30162r) && Objects.equals(this.f30163s, sentryStackFrame.f30163s) && Objects.equals(this.f30164t, sentryStackFrame.f30164t) && Objects.equals(this.f30165u, sentryStackFrame.f30165u) && Objects.equals(this.f30166v, sentryStackFrame.f30166v) && Objects.equals(this.f30167w, sentryStackFrame.f30167w) && Objects.equals(this.f30168x, sentryStackFrame.f30168x) && Objects.equals(this.f30169y, sentryStackFrame.f30169y) && Objects.equals(this.f30170z, sentryStackFrame.f30170z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f30156d, this.f30157e, this.f30158i, this.f30159o, this.f30160p, this.f30161q, this.f30162r, this.f30163s, this.f30164t, this.f30165u, this.f30166v, this.f30167w, this.f30168x, this.f30169y, this.f30170z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30160p != null) {
            f3Var.e("filename").f(this.f30160p);
        }
        if (this.f30161q != null) {
            f3Var.e("function").f(this.f30161q);
        }
        if (this.f30162r != null) {
            f3Var.e("module").f(this.f30162r);
        }
        if (this.f30163s != null) {
            f3Var.e("lineno").i(this.f30163s);
        }
        if (this.f30164t != null) {
            f3Var.e("colno").i(this.f30164t);
        }
        if (this.f30165u != null) {
            f3Var.e("abs_path").f(this.f30165u);
        }
        if (this.f30166v != null) {
            f3Var.e("context_line").f(this.f30166v);
        }
        if (this.f30167w != null) {
            f3Var.e("in_app").k(this.f30167w);
        }
        if (this.f30168x != null) {
            f3Var.e("package").f(this.f30168x);
        }
        if (this.f30169y != null) {
            f3Var.e("native").k(this.f30169y);
        }
        if (this.f30170z != null) {
            f3Var.e("platform").f(this.f30170z);
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
        List list = this.f30156d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f30156d);
        }
        List list2 = this.f30157e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f30157e);
        }
        Map map = this.f30158i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f30158i);
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
        return this.f30164t;
    }

    public String w() {
        return this.f30160p;
    }

    public String x() {
        return this.f30161q;
    }

    public Integer y() {
        return this.f30163s;
    }

    public String z() {
        return this.f30162r;
    }
}
