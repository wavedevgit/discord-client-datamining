package io.sentry;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import io.sentry.profilemeasurements.a;
import io.sentry.r3;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q3 implements w1 {
    private List A;
    private String B;
    private String C;
    private String D;
    private String E;
    private String F;
    private String G;
    private String H;
    private String I;
    private String J;
    private Date K;
    private final Map L;
    private String M;
    private Map N;

    /* renamed from: d  reason: collision with root package name */
    private final File f28627d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f28628e;

    /* renamed from: i  reason: collision with root package name */
    private int f28629i;

    /* renamed from: o  reason: collision with root package name */
    private String f28630o;

    /* renamed from: p  reason: collision with root package name */
    private String f28631p;

    /* renamed from: q  reason: collision with root package name */
    private String f28632q;

    /* renamed from: r  reason: collision with root package name */
    private String f28633r;

    /* renamed from: s  reason: collision with root package name */
    private String f28634s;

    /* renamed from: t  reason: collision with root package name */
    private String f28635t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f28636u;

    /* renamed from: v  reason: collision with root package name */
    private String f28637v;

    /* renamed from: w  reason: collision with root package name */
    private List f28638w;

    /* renamed from: x  reason: collision with root package name */
    private String f28639x;

    /* renamed from: y  reason: collision with root package name */
    private String f28640y;

    /* renamed from: z  reason: collision with root package name */
    private String f28641z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q3 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            q3 q3Var = new q3();
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -2133529830:
                        if (o02.equals("device_manufacturer")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1981468849:
                        if (o02.equals("android_api_level")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1430655860:
                        if (o02.equals("build_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1172160413:
                        if (o02.equals("device_locale")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102636175:
                        if (o02.equals("profile_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -716656436:
                        if (o02.equals("device_os_build_number")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -591076352:
                        if (o02.equals("device_model")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -512511455:
                        if (o02.equals("device_is_emulator")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -478065584:
                        if (o02.equals("duration_ns")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -362243017:
                        if (o02.equals("measurements")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -332426004:
                        if (o02.equals("device_physical_memory_bytes")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case -212264198:
                        if (o02.equals("device_cpu_frequencies")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case -102985484:
                        if (o02.equals("version_code")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case -102670958:
                        if (o02.equals("version_name")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case -85904877:
                        if (o02.equals("environment")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 55126294:
                        if (o02.equals("timestamp")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 508853068:
                        if (o02.equals("transaction_name")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 796476189:
                        if (o02.equals("device_os_name")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 839674195:
                        if (o02.equals("architecture")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1010584092:
                        if (o02.equals("transaction_id")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1052553990:
                        if (o02.equals("device_os_version")) {
                            c10 = 20;
                            break;
                        }
                        break;
                    case 1163928186:
                        if (o02.equals("truncation_reason")) {
                            c10 = 21;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (o02.equals("trace_id")) {
                            c10 = 22;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (o02.equals("platform")) {
                            c10 = 23;
                            break;
                        }
                        break;
                    case 1953158756:
                        if (o02.equals("sampled_profile")) {
                            c10 = 24;
                            break;
                        }
                        break;
                    case 1954122069:
                        if (o02.equals("transactions")) {
                            c10 = 25;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            q3Var.f28631p = q12;
                            break;
                        }
                    case 1:
                        Integer j12 = e3Var.j1();
                        if (j12 == null) {
                            break;
                        } else {
                            q3Var.f28629i = j12.intValue();
                            break;
                        }
                    case 2:
                        String q13 = e3Var.q1();
                        if (q13 == null) {
                            break;
                        } else {
                            q3Var.f28641z = q13;
                            break;
                        }
                    case 3:
                        String q14 = e3Var.q1();
                        if (q14 == null) {
                            break;
                        } else {
                            q3Var.f28630o = q14;
                            break;
                        }
                    case 4:
                        String q15 = e3Var.q1();
                        if (q15 == null) {
                            break;
                        } else {
                            q3Var.H = q15;
                            break;
                        }
                    case 5:
                        String q16 = e3Var.q1();
                        if (q16 == null) {
                            break;
                        } else {
                            q3Var.f28633r = q16;
                            break;
                        }
                    case 6:
                        String q17 = e3Var.q1();
                        if (q17 == null) {
                            break;
                        } else {
                            q3Var.f28632q = q17;
                            break;
                        }
                    case 7:
                        Boolean y02 = e3Var.y0();
                        if (y02 == null) {
                            break;
                        } else {
                            q3Var.f28636u = y02.booleanValue();
                            break;
                        }
                    case '\b':
                        String q18 = e3Var.q1();
                        if (q18 == null) {
                            break;
                        } else {
                            q3Var.C = q18;
                            break;
                        }
                    case '\t':
                        Map t12 = e3Var.t1(iLogger, new a.C0401a());
                        if (t12 == null) {
                            break;
                        } else {
                            q3Var.L.putAll(t12);
                            break;
                        }
                    case '\n':
                        String q19 = e3Var.q1();
                        if (q19 == null) {
                            break;
                        } else {
                            q3Var.f28639x = q19;
                            break;
                        }
                    case 11:
                        List list = (List) e3Var.U1();
                        if (list == null) {
                            break;
                        } else {
                            q3Var.f28638w = list;
                            break;
                        }
                    case '\f':
                        String q110 = e3Var.q1();
                        if (q110 == null) {
                            break;
                        } else {
                            q3Var.D = q110;
                            break;
                        }
                    case '\r':
                        String q111 = e3Var.q1();
                        if (q111 == null) {
                            break;
                        } else {
                            q3Var.E = q111;
                            break;
                        }
                    case 14:
                        String q112 = e3Var.q1();
                        if (q112 == null) {
                            break;
                        } else {
                            q3Var.I = q112;
                            break;
                        }
                    case 15:
                        Date u02 = e3Var.u0(iLogger);
                        if (u02 == null) {
                            break;
                        } else {
                            q3Var.K = u02;
                            break;
                        }
                    case 16:
                        String q113 = e3Var.q1();
                        if (q113 == null) {
                            break;
                        } else {
                            q3Var.B = q113;
                            break;
                        }
                    case 17:
                        String q114 = e3Var.q1();
                        if (q114 == null) {
                            break;
                        } else {
                            q3Var.f28634s = q114;
                            break;
                        }
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        String q115 = e3Var.q1();
                        if (q115 == null) {
                            break;
                        } else {
                            q3Var.f28637v = q115;
                            break;
                        }
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        String q116 = e3Var.q1();
                        if (q116 == null) {
                            break;
                        } else {
                            q3Var.F = q116;
                            break;
                        }
                    case 20:
                        String q117 = e3Var.q1();
                        if (q117 == null) {
                            break;
                        } else {
                            q3Var.f28635t = q117;
                            break;
                        }
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        String q118 = e3Var.q1();
                        if (q118 == null) {
                            break;
                        } else {
                            q3Var.J = q118;
                            break;
                        }
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        String q119 = e3Var.q1();
                        if (q119 == null) {
                            break;
                        } else {
                            q3Var.G = q119;
                            break;
                        }
                    case 23:
                        String q120 = e3Var.q1();
                        if (q120 == null) {
                            break;
                        } else {
                            q3Var.f28640y = q120;
                            break;
                        }
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        String q121 = e3Var.q1();
                        if (q121 == null) {
                            break;
                        } else {
                            q3Var.M = q121;
                            break;
                        }
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        List g22 = e3Var.g2(iLogger, new r3.a());
                        if (g22 == null) {
                            break;
                        } else {
                            q3Var.A.addAll(g22);
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            q3Var.G(concurrentHashMap);
            e3Var.D();
            return q3Var;
        }
    }

    private boolean D() {
        if (!this.J.equals("normal") && !this.J.equals("timeout") && !this.J.equals("backgrounded")) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ List a() {
        return new ArrayList();
    }

    public String B() {
        return this.H;
    }

    public File C() {
        return this.f28627d;
    }

    public void E() {
        try {
            this.f28638w = (List) this.f28628e.call();
        } catch (Throwable unused) {
        }
    }

    public void F(String str) {
        this.M = str;
    }

    public void G(Map map) {
        this.N = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("android_api_level").j(iLogger, Integer.valueOf(this.f28629i));
        f3Var.e("device_locale").j(iLogger, this.f28630o);
        f3Var.e("device_manufacturer").f(this.f28631p);
        f3Var.e("device_model").f(this.f28632q);
        f3Var.e("device_os_build_number").f(this.f28633r);
        f3Var.e("device_os_name").f(this.f28634s);
        f3Var.e("device_os_version").f(this.f28635t);
        f3Var.e("device_is_emulator").d(this.f28636u);
        f3Var.e("architecture").j(iLogger, this.f28637v);
        f3Var.e("device_cpu_frequencies").j(iLogger, this.f28638w);
        f3Var.e("device_physical_memory_bytes").f(this.f28639x);
        f3Var.e("platform").f(this.f28640y);
        f3Var.e("build_id").f(this.f28641z);
        f3Var.e("transaction_name").f(this.B);
        f3Var.e("duration_ns").f(this.C);
        f3Var.e("version_name").f(this.E);
        f3Var.e("version_code").f(this.D);
        if (!this.A.isEmpty()) {
            f3Var.e("transactions").j(iLogger, this.A);
        }
        f3Var.e("transaction_id").f(this.F);
        f3Var.e("trace_id").f(this.G);
        f3Var.e("profile_id").f(this.H);
        f3Var.e("environment").f(this.I);
        f3Var.e("truncation_reason").f(this.J);
        if (this.M != null) {
            f3Var.e("sampled_profile").f(this.M);
        }
        String a10 = f3Var.a();
        f3Var.h("");
        f3Var.e("measurements").j(iLogger, this.L);
        f3Var.h(a10);
        f3Var.e("timestamp").j(iLogger, this.K);
        Map map = this.N;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.N.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private q3() {
        this(new File("dummy"), a3.u());
    }

    public q3(File file, e1 e1Var) {
        this(file, k.d(), new ArrayList(), e1Var.getName(), e1Var.f().toString(), e1Var.q().p().toString(), "0", 0, "", new Callable() { // from class: io.sentry.p3
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return q3.a();
            }
        }, null, null, null, null, null, null, null, null, "normal", new HashMap());
    }

    public q3(File file, Date date, List list, String str, String str2, String str3, String str4, int i10, String str5, Callable callable, String str6, String str7, String str8, Boolean bool, String str9, String str10, String str11, String str12, String str13, Map map) {
        this.f28638w = new ArrayList();
        this.M = null;
        this.f28627d = file;
        this.K = date;
        this.f28637v = str5;
        this.f28628e = callable;
        this.f28629i = i10;
        this.f28630o = Locale.getDefault().toString();
        this.f28631p = str6 == null ? "" : str6;
        this.f28632q = str7 == null ? "" : str7;
        this.f28635t = str8 == null ? "" : str8;
        this.f28636u = bool != null ? bool.booleanValue() : false;
        this.f28639x = str9 != null ? str9 : "0";
        this.f28633r = "";
        this.f28634s = "android";
        this.f28640y = "android";
        this.f28641z = str10 != null ? str10 : "";
        this.A = list;
        this.B = str.isEmpty() ? "unknown" : str;
        this.C = str4;
        this.D = "";
        this.E = str11 != null ? str11 : "";
        this.F = str2;
        this.G = str3;
        this.H = x7.a();
        this.I = str12 != null ? str12 : "production";
        this.J = str13;
        if (!D()) {
            this.J = "normal";
        }
        this.L = map;
    }
}
