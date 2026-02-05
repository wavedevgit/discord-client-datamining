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
    private List f29260d;

    /* renamed from: e  reason: collision with root package name */
    private List f29261e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29262i;

    /* renamed from: o  reason: collision with root package name */
    private List f29263o;

    /* renamed from: p  reason: collision with root package name */
    private String f29264p;

    /* renamed from: q  reason: collision with root package name */
    private String f29265q;

    /* renamed from: r  reason: collision with root package name */
    private String f29266r;

    /* renamed from: s  reason: collision with root package name */
    private Integer f29267s;

    /* renamed from: t  reason: collision with root package name */
    private Integer f29268t;

    /* renamed from: u  reason: collision with root package name */
    private String f29269u;

    /* renamed from: v  reason: collision with root package name */
    private String f29270v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29271w;

    /* renamed from: x  reason: collision with root package name */
    private String f29272x;

    /* renamed from: y  reason: collision with root package name */
    private Boolean f29273y;

    /* renamed from: z  reason: collision with root package name */
    private String f29274z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public SentryStackFrame a(e3 e3Var, ILogger iLogger) {
            SentryStackFrame sentryStackFrame = new SentryStackFrame();
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1641491184:
                        if (m02.equals("post_context")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1443345323:
                        if (m02.equals("image_addr")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1184392185:
                        if (m02.equals("in_app")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1113875953:
                        if (m02.equals("raw_function")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102671691:
                        if (m02.equals("lineno")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -1068784020:
                        if (m02.equals("module")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -1052618729:
                        if (m02.equals("native")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -887523944:
                        if (m02.equals("symbol")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -807062458:
                        if (m02.equals("package")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -734768633:
                        if (m02.equals("filename")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -330260936:
                        if (m02.equals("symbol_addr")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 3327275:
                        if (m02.equals("lock")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case 3612204:
                        if (m02.equals("vars")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case 94842689:
                        if (m02.equals("colno")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case 410194178:
                        if (m02.equals("instruction_addr")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 822688787:
                        if (m02.equals("pre_context")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 868820273:
                        if (m02.equals("addr_mode")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 1116694660:
                        if (m02.equals("context_line")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 1380938712:
                        if (m02.equals("function")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1713445842:
                        if (m02.equals("abs_path")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (m02.equals("platform")) {
                            c10 = 20;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        sentryStackFrame.f29261e = (List) e3Var.V1();
                        break;
                    case 1:
                        sentryStackFrame.A = e3Var.r1();
                        break;
                    case 2:
                        sentryStackFrame.f29271w = e3Var.w0();
                        break;
                    case 3:
                        sentryStackFrame.G = e3Var.r1();
                        break;
                    case 4:
                        sentryStackFrame.f29267s = e3Var.k1();
                        break;
                    case 5:
                        sentryStackFrame.f29266r = e3Var.r1();
                        break;
                    case 6:
                        sentryStackFrame.f29273y = e3Var.w0();
                        break;
                    case 7:
                        sentryStackFrame.E = e3Var.r1();
                        break;
                    case '\b':
                        sentryStackFrame.f29272x = e3Var.r1();
                        break;
                    case '\t':
                        sentryStackFrame.f29264p = e3Var.r1();
                        break;
                    case '\n':
                        sentryStackFrame.B = e3Var.r1();
                        break;
                    case 11:
                        sentryStackFrame.H = (w6) e3Var.G0(iLogger, new w6.a());
                        break;
                    case '\f':
                        sentryStackFrame.f29262i = (Map) e3Var.V1();
                        break;
                    case '\r':
                        sentryStackFrame.f29268t = e3Var.k1();
                        break;
                    case 14:
                        sentryStackFrame.C = e3Var.r1();
                        break;
                    case 15:
                        sentryStackFrame.f29260d = (List) e3Var.V1();
                        break;
                    case 16:
                        sentryStackFrame.D = e3Var.r1();
                        break;
                    case 17:
                        sentryStackFrame.f29270v = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        sentryStackFrame.f29265q = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        sentryStackFrame.f29269u = e3Var.r1();
                        break;
                    case 20:
                        sentryStackFrame.f29274z = e3Var.r1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            sentryStackFrame.L(concurrentHashMap);
            e3Var.z();
            return sentryStackFrame;
        }
    }

    public void A(String str) {
        this.D = str;
    }

    public void B(String str) {
        this.f29264p = str;
    }

    public void C(String str) {
        this.f29265q = str;
    }

    public void D(Boolean bool) {
        this.f29271w = bool;
    }

    public void E(String str) {
        this.C = str;
    }

    public void F(Integer num) {
        this.f29267s = num;
    }

    public void G(w6 w6Var) {
        this.H = w6Var;
    }

    public void H(String str) {
        this.f29266r = str;
    }

    public void I(Boolean bool) {
        this.f29273y = bool;
    }

    public void J(String str) {
        this.f29272x = str;
    }

    public void K(String str) {
        this.f29274z = str;
    }

    public void L(Map map) {
        this.F = map;
    }

    public boolean equals(Object obj) {
        if (obj != null && SentryStackFrame.class == obj.getClass()) {
            SentryStackFrame sentryStackFrame = (SentryStackFrame) obj;
            if (Objects.equals(this.f29260d, sentryStackFrame.f29260d) && Objects.equals(this.f29261e, sentryStackFrame.f29261e) && Objects.equals(this.f29262i, sentryStackFrame.f29262i) && Objects.equals(this.f29263o, sentryStackFrame.f29263o) && Objects.equals(this.f29264p, sentryStackFrame.f29264p) && Objects.equals(this.f29265q, sentryStackFrame.f29265q) && Objects.equals(this.f29266r, sentryStackFrame.f29266r) && Objects.equals(this.f29267s, sentryStackFrame.f29267s) && Objects.equals(this.f29268t, sentryStackFrame.f29268t) && Objects.equals(this.f29269u, sentryStackFrame.f29269u) && Objects.equals(this.f29270v, sentryStackFrame.f29270v) && Objects.equals(this.f29271w, sentryStackFrame.f29271w) && Objects.equals(this.f29272x, sentryStackFrame.f29272x) && Objects.equals(this.f29273y, sentryStackFrame.f29273y) && Objects.equals(this.f29274z, sentryStackFrame.f29274z) && Objects.equals(this.A, sentryStackFrame.A) && Objects.equals(this.B, sentryStackFrame.B) && Objects.equals(this.C, sentryStackFrame.C) && Objects.equals(this.D, sentryStackFrame.D) && Objects.equals(this.E, sentryStackFrame.E) && Objects.equals(this.F, sentryStackFrame.F) && Objects.equals(this.G, sentryStackFrame.G) && Objects.equals(this.H, sentryStackFrame.H)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29260d, this.f29261e, this.f29262i, this.f29263o, this.f29264p, this.f29265q, this.f29266r, this.f29267s, this.f29268t, this.f29269u, this.f29270v, this.f29271w, this.f29272x, this.f29273y, this.f29274z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29264p != null) {
            f3Var.e("filename").f(this.f29264p);
        }
        if (this.f29265q != null) {
            f3Var.e("function").f(this.f29265q);
        }
        if (this.f29266r != null) {
            f3Var.e("module").f(this.f29266r);
        }
        if (this.f29267s != null) {
            f3Var.e("lineno").i(this.f29267s);
        }
        if (this.f29268t != null) {
            f3Var.e("colno").i(this.f29268t);
        }
        if (this.f29269u != null) {
            f3Var.e("abs_path").f(this.f29269u);
        }
        if (this.f29270v != null) {
            f3Var.e("context_line").f(this.f29270v);
        }
        if (this.f29271w != null) {
            f3Var.e("in_app").k(this.f29271w);
        }
        if (this.f29272x != null) {
            f3Var.e("package").f(this.f29272x);
        }
        if (this.f29273y != null) {
            f3Var.e("native").k(this.f29273y);
        }
        if (this.f29274z != null) {
            f3Var.e("platform").f(this.f29274z);
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
        List list = this.f29260d;
        if (list != null && !list.isEmpty()) {
            f3Var.e("pre_context").j(iLogger, this.f29260d);
        }
        List list2 = this.f29261e;
        if (list2 != null && !list2.isEmpty()) {
            f3Var.e("post_context").j(iLogger, this.f29261e);
        }
        Map map = this.f29262i;
        if (map != null && !map.isEmpty()) {
            f3Var.e("vars").j(iLogger, this.f29262i);
        }
        Map map2 = this.F;
        if (map2 != null) {
            for (String str : map2.keySet()) {
                Object obj = this.F.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public Integer v() {
        return this.f29268t;
    }

    public String w() {
        return this.f29264p;
    }

    public String x() {
        return this.f29265q;
    }

    public Integer y() {
        return this.f29267s;
    }

    public String z() {
        return this.f29266r;
    }
}
