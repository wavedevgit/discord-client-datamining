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
    private final File f30064d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f30065e;

    /* renamed from: i  reason: collision with root package name */
    private int f30066i;

    /* renamed from: o  reason: collision with root package name */
    private String f30067o;

    /* renamed from: p  reason: collision with root package name */
    private String f30068p;

    /* renamed from: q  reason: collision with root package name */
    private String f30069q;

    /* renamed from: r  reason: collision with root package name */
    private String f30070r;

    /* renamed from: s  reason: collision with root package name */
    private String f30071s;

    /* renamed from: t  reason: collision with root package name */
    private String f30072t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f30073u;

    /* renamed from: v  reason: collision with root package name */
    private String f30074v;

    /* renamed from: w  reason: collision with root package name */
    private List f30075w;

    /* renamed from: x  reason: collision with root package name */
    private String f30076x;

    /* renamed from: y  reason: collision with root package name */
    private String f30077y;

    /* renamed from: z  reason: collision with root package name */
    private String f30078z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            q3 q3Var = new q3();
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -2133529830:
                        if (m02.equals("device_manufacturer")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1981468849:
                        if (m02.equals("android_api_level")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1430655860:
                        if (m02.equals("build_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1172160413:
                        if (m02.equals("device_locale")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102636175:
                        if (m02.equals("profile_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -716656436:
                        if (m02.equals("device_os_build_number")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -591076352:
                        if (m02.equals("device_model")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -512511455:
                        if (m02.equals("device_is_emulator")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -478065584:
                        if (m02.equals("duration_ns")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -362243017:
                        if (m02.equals("measurements")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -332426004:
                        if (m02.equals("device_physical_memory_bytes")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case -212264198:
                        if (m02.equals("device_cpu_frequencies")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case -102985484:
                        if (m02.equals("version_code")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case -102670958:
                        if (m02.equals("version_name")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case -85904877:
                        if (m02.equals("environment")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 508853068:
                        if (m02.equals("transaction_name")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 796476189:
                        if (m02.equals("device_os_name")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 839674195:
                        if (m02.equals("architecture")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1010584092:
                        if (m02.equals("transaction_id")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1052553990:
                        if (m02.equals("device_os_version")) {
                            c10 = 20;
                            break;
                        }
                        break;
                    case 1163928186:
                        if (m02.equals("truncation_reason")) {
                            c10 = 21;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (m02.equals("trace_id")) {
                            c10 = 22;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (m02.equals("platform")) {
                            c10 = 23;
                            break;
                        }
                        break;
                    case 1953158756:
                        if (m02.equals("sampled_profile")) {
                            c10 = 24;
                            break;
                        }
                        break;
                    case 1954122069:
                        if (m02.equals("transactions")) {
                            c10 = 25;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            q3Var.f30068p = r12;
                            break;
                        }
                    case 1:
                        Integer k12 = e3Var.k1();
                        if (k12 == null) {
                            break;
                        } else {
                            q3Var.f30066i = k12.intValue();
                            break;
                        }
                    case 2:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            q3Var.f30078z = r13;
                            break;
                        }
                    case 3:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            q3Var.f30067o = r14;
                            break;
                        }
                    case 4:
                        String r15 = e3Var.r1();
                        if (r15 == null) {
                            break;
                        } else {
                            q3Var.H = r15;
                            break;
                        }
                    case 5:
                        String r16 = e3Var.r1();
                        if (r16 == null) {
                            break;
                        } else {
                            q3Var.f30070r = r16;
                            break;
                        }
                    case 6:
                        String r17 = e3Var.r1();
                        if (r17 == null) {
                            break;
                        } else {
                            q3Var.f30069q = r17;
                            break;
                        }
                    case 7:
                        Boolean x02 = e3Var.x0();
                        if (x02 == null) {
                            break;
                        } else {
                            q3Var.f30073u = x02.booleanValue();
                            break;
                        }
                    case '\b':
                        String r18 = e3Var.r1();
                        if (r18 == null) {
                            break;
                        } else {
                            q3Var.C = r18;
                            break;
                        }
                    case '\t':
                        Map u12 = e3Var.u1(iLogger, new a.C0401a());
                        if (u12 == null) {
                            break;
                        } else {
                            q3Var.L.putAll(u12);
                            break;
                        }
                    case '\n':
                        String r19 = e3Var.r1();
                        if (r19 == null) {
                            break;
                        } else {
                            q3Var.f30076x = r19;
                            break;
                        }
                    case 11:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            q3Var.f30075w = list;
                            break;
                        }
                    case '\f':
                        String r110 = e3Var.r1();
                        if (r110 == null) {
                            break;
                        } else {
                            q3Var.D = r110;
                            break;
                        }
                    case '\r':
                        String r111 = e3Var.r1();
                        if (r111 == null) {
                            break;
                        } else {
                            q3Var.E = r111;
                            break;
                        }
                    case 14:
                        String r112 = e3Var.r1();
                        if (r112 == null) {
                            break;
                        } else {
                            q3Var.I = r112;
                            break;
                        }
                    case 15:
                        Date s02 = e3Var.s0(iLogger);
                        if (s02 == null) {
                            break;
                        } else {
                            q3Var.K = s02;
                            break;
                        }
                    case 16:
                        String r113 = e3Var.r1();
                        if (r113 == null) {
                            break;
                        } else {
                            q3Var.B = r113;
                            break;
                        }
                    case 17:
                        String r114 = e3Var.r1();
                        if (r114 == null) {
                            break;
                        } else {
                            q3Var.f30071s = r114;
                            break;
                        }
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        String r115 = e3Var.r1();
                        if (r115 == null) {
                            break;
                        } else {
                            q3Var.f30074v = r115;
                            break;
                        }
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        String r116 = e3Var.r1();
                        if (r116 == null) {
                            break;
                        } else {
                            q3Var.F = r116;
                            break;
                        }
                    case 20:
                        String r117 = e3Var.r1();
                        if (r117 == null) {
                            break;
                        } else {
                            q3Var.f30072t = r117;
                            break;
                        }
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        String r118 = e3Var.r1();
                        if (r118 == null) {
                            break;
                        } else {
                            q3Var.J = r118;
                            break;
                        }
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        String r119 = e3Var.r1();
                        if (r119 == null) {
                            break;
                        } else {
                            q3Var.G = r119;
                            break;
                        }
                    case 23:
                        String r120 = e3Var.r1();
                        if (r120 == null) {
                            break;
                        } else {
                            q3Var.f30077y = r120;
                            break;
                        }
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        String r121 = e3Var.r1();
                        if (r121 == null) {
                            break;
                        } else {
                            q3Var.M = r121;
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
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            q3Var.G(concurrentHashMap);
            e3Var.y();
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
        return this.f30064d;
    }

    public void E() {
        try {
            this.f30075w = (List) this.f30065e.call();
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
        f3Var.r();
        f3Var.e("android_api_level").j(iLogger, Integer.valueOf(this.f30066i));
        f3Var.e("device_locale").j(iLogger, this.f30067o);
        f3Var.e("device_manufacturer").f(this.f30068p);
        f3Var.e("device_model").f(this.f30069q);
        f3Var.e("device_os_build_number").f(this.f30070r);
        f3Var.e("device_os_name").f(this.f30071s);
        f3Var.e("device_os_version").f(this.f30072t);
        f3Var.e("device_is_emulator").d(this.f30073u);
        f3Var.e("architecture").j(iLogger, this.f30074v);
        f3Var.e("device_cpu_frequencies").j(iLogger, this.f30075w);
        f3Var.e("device_physical_memory_bytes").f(this.f30076x);
        f3Var.e("platform").f(this.f30077y);
        f3Var.e("build_id").f(this.f30078z);
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
        f3Var.y();
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
        this.f30075w = new ArrayList();
        this.M = null;
        this.f30064d = file;
        this.K = date;
        this.f30074v = str5;
        this.f30065e = callable;
        this.f30066i = i10;
        this.f30067o = Locale.getDefault().toString();
        this.f30068p = str6 == null ? "" : str6;
        this.f30069q = str7 == null ? "" : str7;
        this.f30072t = str8 == null ? "" : str8;
        this.f30073u = bool != null ? bool.booleanValue() : false;
        this.f30076x = str9 != null ? str9 : "0";
        this.f30070r = "";
        this.f30071s = "android";
        this.f30077y = "android";
        this.f30078z = str10 != null ? str10 : "";
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
