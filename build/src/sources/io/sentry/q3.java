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
    private final File f30425d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f30426e;

    /* renamed from: i  reason: collision with root package name */
    private int f30427i;

    /* renamed from: o  reason: collision with root package name */
    private String f30428o;

    /* renamed from: p  reason: collision with root package name */
    private String f30429p;

    /* renamed from: q  reason: collision with root package name */
    private String f30430q;

    /* renamed from: r  reason: collision with root package name */
    private String f30431r;

    /* renamed from: s  reason: collision with root package name */
    private String f30432s;

    /* renamed from: t  reason: collision with root package name */
    private String f30433t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f30434u;

    /* renamed from: v  reason: collision with root package name */
    private String f30435v;

    /* renamed from: w  reason: collision with root package name */
    private List f30436w;

    /* renamed from: x  reason: collision with root package name */
    private String f30437x;

    /* renamed from: y  reason: collision with root package name */
    private String f30438y;

    /* renamed from: z  reason: collision with root package name */
    private String f30439z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            q3 q3Var = new q3();
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -2133529830:
                        if (l02.equals("device_manufacturer")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1981468849:
                        if (l02.equals("android_api_level")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1430655860:
                        if (l02.equals("build_id")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1172160413:
                        if (l02.equals("device_locale")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1102636175:
                        if (l02.equals("profile_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -716656436:
                        if (l02.equals("device_os_build_number")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -591076352:
                        if (l02.equals("device_model")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -512511455:
                        if (l02.equals("device_is_emulator")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -478065584:
                        if (l02.equals("duration_ns")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -362243017:
                        if (l02.equals("measurements")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -332426004:
                        if (l02.equals("device_physical_memory_bytes")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case -212264198:
                        if (l02.equals("device_cpu_frequencies")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case -102985484:
                        if (l02.equals("version_code")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case -102670958:
                        if (l02.equals("version_name")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case -85904877:
                        if (l02.equals("environment")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 55126294:
                        if (l02.equals("timestamp")) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 508853068:
                        if (l02.equals("transaction_name")) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 796476189:
                        if (l02.equals("device_os_name")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 839674195:
                        if (l02.equals("architecture")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 1010584092:
                        if (l02.equals("transaction_id")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 1052553990:
                        if (l02.equals("device_os_version")) {
                            c10 = 20;
                            break;
                        }
                        break;
                    case 1163928186:
                        if (l02.equals("truncation_reason")) {
                            c10 = 21;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (l02.equals("trace_id")) {
                            c10 = 22;
                            break;
                        }
                        break;
                    case 1874684019:
                        if (l02.equals("platform")) {
                            c10 = 23;
                            break;
                        }
                        break;
                    case 1953158756:
                        if (l02.equals("sampled_profile")) {
                            c10 = 24;
                            break;
                        }
                        break;
                    case 1954122069:
                        if (l02.equals("transactions")) {
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
                            q3Var.f30429p = r12;
                            break;
                        }
                    case 1:
                        Integer k12 = e3Var.k1();
                        if (k12 == null) {
                            break;
                        } else {
                            q3Var.f30427i = k12.intValue();
                            break;
                        }
                    case 2:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            q3Var.f30439z = r13;
                            break;
                        }
                    case 3:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            q3Var.f30428o = r14;
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
                            q3Var.f30431r = r16;
                            break;
                        }
                    case 6:
                        String r17 = e3Var.r1();
                        if (r17 == null) {
                            break;
                        } else {
                            q3Var.f30430q = r17;
                            break;
                        }
                    case 7:
                        Boolean v02 = e3Var.v0();
                        if (v02 == null) {
                            break;
                        } else {
                            q3Var.f30434u = v02.booleanValue();
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
                        Map u12 = e3Var.u1(iLogger, new a.C0400a());
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
                            q3Var.f30437x = r19;
                            break;
                        }
                    case 11:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            q3Var.f30436w = list;
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
                        Date r02 = e3Var.r0(iLogger);
                        if (r02 == null) {
                            break;
                        } else {
                            q3Var.K = r02;
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
                            q3Var.f30432s = r114;
                            break;
                        }
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        String r115 = e3Var.r1();
                        if (r115 == null) {
                            break;
                        } else {
                            q3Var.f30435v = r115;
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
                            q3Var.f30433t = r117;
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
                            q3Var.f30438y = r120;
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
                        e3Var.v1(iLogger, concurrentHashMap, l02);
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
        return this.f30425d;
    }

    public void E() {
        try {
            this.f30436w = (List) this.f30426e.call();
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
        f3Var.e("android_api_level").j(iLogger, Integer.valueOf(this.f30427i));
        f3Var.e("device_locale").j(iLogger, this.f30428o);
        f3Var.e("device_manufacturer").f(this.f30429p);
        f3Var.e("device_model").f(this.f30430q);
        f3Var.e("device_os_build_number").f(this.f30431r);
        f3Var.e("device_os_name").f(this.f30432s);
        f3Var.e("device_os_version").f(this.f30433t);
        f3Var.e("device_is_emulator").d(this.f30434u);
        f3Var.e("architecture").j(iLogger, this.f30435v);
        f3Var.e("device_cpu_frequencies").j(iLogger, this.f30436w);
        f3Var.e("device_physical_memory_bytes").f(this.f30437x);
        f3Var.e("platform").f(this.f30438y);
        f3Var.e("build_id").f(this.f30439z);
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
        this.f30436w = new ArrayList();
        this.M = null;
        this.f30425d = file;
        this.K = date;
        this.f30435v = str5;
        this.f30426e = callable;
        this.f30427i = i10;
        this.f30428o = Locale.getDefault().toString();
        this.f30429p = str6 == null ? "" : str6;
        this.f30430q = str7 == null ? "" : str7;
        this.f30433t = str8 == null ? "" : str8;
        this.f30434u = bool != null ? bool.booleanValue() : false;
        this.f30437x = str9 != null ? str9 : "0";
        this.f30431r = "";
        this.f30432s = "android";
        this.f30438y = "android";
        this.f30439z = str10 != null ? str10 : "";
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
