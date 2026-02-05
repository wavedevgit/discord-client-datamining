package io.sentry.protocol;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.concurrent.ConcurrentHashMap;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements w1 {
    private Boolean A;
    private Long B;
    private Long C;
    private Long D;
    private Long E;
    private Integer F;
    private Integer G;
    private Float H;
    private Integer I;
    private Date J;
    private TimeZone K;
    private String L;
    private String M;
    private String N;
    private Float O;
    private Integer P;
    private Double Q;
    private String R;
    private String S;
    private Map T;

    /* renamed from: d  reason: collision with root package name */
    private String f29325d;

    /* renamed from: e  reason: collision with root package name */
    private String f29326e;

    /* renamed from: i  reason: collision with root package name */
    private String f29327i;

    /* renamed from: o  reason: collision with root package name */
    private String f29328o;

    /* renamed from: p  reason: collision with root package name */
    private String f29329p;

    /* renamed from: q  reason: collision with root package name */
    private String f29330q;

    /* renamed from: r  reason: collision with root package name */
    private String[] f29331r;

    /* renamed from: s  reason: collision with root package name */
    private Float f29332s;

    /* renamed from: t  reason: collision with root package name */
    private Boolean f29333t;

    /* renamed from: u  reason: collision with root package name */
    private Boolean f29334u;

    /* renamed from: v  reason: collision with root package name */
    private b f29335v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f29336w;

    /* renamed from: x  reason: collision with root package name */
    private Long f29337x;

    /* renamed from: y  reason: collision with root package name */
    private Long f29338y;

    /* renamed from: z  reason: collision with root package name */
    private Long f29339z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public e a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            e eVar = new e();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -2076227591:
                        if (m02.equals("timezone")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -2012489734:
                        if (m02.equals("boot_time")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1981332476:
                        if (m02.equals("simulator")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1969347631:
                        if (m02.equals("manufacturer")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -1608004830:
                        if (m02.equals("processor_count")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case -1439500848:
                        if (m02.equals("orientation")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case -1410521534:
                        if (m02.equals("battery_temperature")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case -1281860764:
                        if (m02.equals("family")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case -1097462182:
                        if (m02.equals("locale")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case -1012222381:
                        if (m02.equals("online")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case -877252910:
                        if (m02.equals("battery_level")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case -619038223:
                        if (m02.equals("model_id")) {
                            c10 = 11;
                            break;
                        }
                        break;
                    case -568274923:
                        if (m02.equals("screen_density")) {
                            c10 = '\f';
                            break;
                        }
                        break;
                    case -417046774:
                        if (m02.equals("screen_dpi")) {
                            c10 = '\r';
                            break;
                        }
                        break;
                    case -136523212:
                        if (m02.equals("free_memory")) {
                            c10 = 14;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 15;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 16;
                            break;
                        }
                        break;
                    case 59142220:
                        if (m02.equals("low_memory")) {
                            c10 = 17;
                            break;
                        }
                        break;
                    case 93076189:
                        if (m02.equals("archs")) {
                            c10 = 18;
                            break;
                        }
                        break;
                    case 93997959:
                        if (m02.equals("brand")) {
                            c10 = 19;
                            break;
                        }
                        break;
                    case 104069929:
                        if (m02.equals("model")) {
                            c10 = 20;
                            break;
                        }
                        break;
                    case 115746789:
                        if (m02.equals("cpu_description")) {
                            c10 = 21;
                            break;
                        }
                        break;
                    case 244497903:
                        if (m02.equals("processor_frequency")) {
                            c10 = 22;
                            break;
                        }
                        break;
                    case 731866107:
                        if (m02.equals("connection_type")) {
                            c10 = 23;
                            break;
                        }
                        break;
                    case 746402966:
                        if (m02.equals("chipset")) {
                            c10 = 24;
                            break;
                        }
                        break;
                    case 817830969:
                        if (m02.equals("screen_width_pixels")) {
                            c10 = 25;
                            break;
                        }
                        break;
                    case 823882553:
                        if (m02.equals("external_storage_size")) {
                            c10 = 26;
                            break;
                        }
                        break;
                    case 897428293:
                        if (m02.equals("storage_size")) {
                            c10 = 27;
                            break;
                        }
                        break;
                    case 1331465768:
                        if (m02.equals("usable_memory")) {
                            c10 = 28;
                            break;
                        }
                        break;
                    case 1418777727:
                        if (m02.equals("memory_size")) {
                            c10 = 29;
                            break;
                        }
                        break;
                    case 1436115569:
                        if (m02.equals("charging")) {
                            c10 = 30;
                            break;
                        }
                        break;
                    case 1450613660:
                        if (m02.equals("external_free_storage")) {
                            c10 = 31;
                            break;
                        }
                        break;
                    case 1524159400:
                        if (m02.equals("free_storage")) {
                            c10 = ' ';
                            break;
                        }
                        break;
                    case 1556284978:
                        if (m02.equals("screen_height_pixels")) {
                            c10 = '!';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        eVar.K = e3Var.X(iLogger);
                        break;
                    case 1:
                        if (e3Var.peek() != io.sentry.vendor.gson.stream.b.STRING) {
                            break;
                        } else {
                            eVar.J = e3Var.s0(iLogger);
                            break;
                        }
                    case 2:
                        eVar.f29336w = e3Var.w0();
                        break;
                    case 3:
                        eVar.f29326e = e3Var.r1();
                        break;
                    case 4:
                        eVar.P = e3Var.k1();
                        break;
                    case 5:
                        eVar.f29335v = (b) e3Var.G0(iLogger, new b.a());
                        break;
                    case 6:
                        eVar.O = e3Var.O1();
                        break;
                    case 7:
                        eVar.f29328o = e3Var.r1();
                        break;
                    case '\b':
                        eVar.M = e3Var.r1();
                        break;
                    case '\t':
                        eVar.f29334u = e3Var.w0();
                        break;
                    case '\n':
                        eVar.f29332s = e3Var.O1();
                        break;
                    case 11:
                        eVar.f29330q = e3Var.r1();
                        break;
                    case '\f':
                        eVar.H = e3Var.O1();
                        break;
                    case '\r':
                        eVar.I = e3Var.k1();
                        break;
                    case 14:
                        eVar.f29338y = e3Var.m1();
                        break;
                    case 15:
                        eVar.L = e3Var.r1();
                        break;
                    case 16:
                        eVar.f29325d = e3Var.r1();
                        break;
                    case 17:
                        eVar.A = e3Var.w0();
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        List list = (List) e3Var.V1();
                        if (list == null) {
                            break;
                        } else {
                            String[] strArr = new String[list.size()];
                            list.toArray(strArr);
                            eVar.f29331r = strArr;
                            break;
                        }
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        eVar.f29327i = e3Var.r1();
                        break;
                    case 20:
                        eVar.f29329p = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        eVar.R = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        eVar.Q = e3Var.l0();
                        break;
                    case 23:
                        eVar.N = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        eVar.S = e3Var.r1();
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        eVar.F = e3Var.k1();
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        eVar.D = e3Var.m1();
                        break;
                    case 27:
                        eVar.B = e3Var.m1();
                        break;
                    case 28:
                        eVar.f29339z = e3Var.m1();
                        break;
                    case 29:
                        eVar.f29337x = e3Var.m1();
                        break;
                    case 30:
                        eVar.f29333t = e3Var.w0();
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        eVar.E = e3Var.m1();
                        break;
                    case ' ':
                        eVar.C = e3Var.m1();
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        eVar.G = e3Var.k1();
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            eVar.q0(concurrentHashMap);
            e3Var.z();
            return eVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements w1 {
        PORTRAIT,
        LANDSCAPE;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements m1 {
            @Override // io.sentry.m1
            /* renamed from: b */
            public b a(e3 e3Var, ILogger iLogger) {
                return b.valueOf(e3Var.f1().toUpperCase(Locale.ROOT));
            }
        }

        @Override // io.sentry.w1
        public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
            f3Var.f(toString().toLowerCase(Locale.ROOT));
        }
    }

    public e() {
    }

    public String I() {
        return this.N;
    }

    public String J() {
        return this.L;
    }

    public String K() {
        return this.M;
    }

    public void L(String[] strArr) {
        this.f29331r = strArr;
    }

    public void M(Float f10) {
        this.f29332s = f10;
    }

    public void N(Float f10) {
        this.O = f10;
    }

    public void O(Date date) {
        this.J = date;
    }

    public void P(String str) {
        this.f29327i = str;
    }

    public void Q(Boolean bool) {
        this.f29333t = bool;
    }

    public void R(String str) {
        this.S = str;
    }

    public void S(String str) {
        this.N = str;
    }

    public void T(Long l10) {
        this.E = l10;
    }

    public void U(Long l10) {
        this.D = l10;
    }

    public void V(String str) {
        this.f29328o = str;
    }

    public void W(Long l10) {
        this.f29338y = l10;
    }

    public void X(Long l10) {
        this.C = l10;
    }

    public void Y(String str) {
        this.L = str;
    }

    public void Z(String str) {
        this.M = str;
    }

    public void a0(Boolean bool) {
        this.A = bool;
    }

    public void b0(String str) {
        this.f29326e = str;
    }

    public void c0(Long l10) {
        this.f29337x = l10;
    }

    public void d0(String str) {
        this.f29329p = str;
    }

    public void e0(String str) {
        this.f29330q = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (io.sentry.util.y.a(this.f29325d, eVar.f29325d) && io.sentry.util.y.a(this.f29326e, eVar.f29326e) && io.sentry.util.y.a(this.f29327i, eVar.f29327i) && io.sentry.util.y.a(this.f29328o, eVar.f29328o) && io.sentry.util.y.a(this.f29329p, eVar.f29329p) && io.sentry.util.y.a(this.f29330q, eVar.f29330q) && Arrays.equals(this.f29331r, eVar.f29331r) && io.sentry.util.y.a(this.f29332s, eVar.f29332s) && io.sentry.util.y.a(this.f29333t, eVar.f29333t) && io.sentry.util.y.a(this.f29334u, eVar.f29334u) && this.f29335v == eVar.f29335v && io.sentry.util.y.a(this.f29336w, eVar.f29336w) && io.sentry.util.y.a(this.f29337x, eVar.f29337x) && io.sentry.util.y.a(this.f29338y, eVar.f29338y) && io.sentry.util.y.a(this.f29339z, eVar.f29339z) && io.sentry.util.y.a(this.A, eVar.A) && io.sentry.util.y.a(this.B, eVar.B) && io.sentry.util.y.a(this.C, eVar.C) && io.sentry.util.y.a(this.D, eVar.D) && io.sentry.util.y.a(this.E, eVar.E) && io.sentry.util.y.a(this.F, eVar.F) && io.sentry.util.y.a(this.G, eVar.G) && io.sentry.util.y.a(this.H, eVar.H) && io.sentry.util.y.a(this.I, eVar.I) && io.sentry.util.y.a(this.J, eVar.J) && io.sentry.util.y.a(this.L, eVar.L) && io.sentry.util.y.a(this.M, eVar.M) && io.sentry.util.y.a(this.N, eVar.N) && io.sentry.util.y.a(this.O, eVar.O) && io.sentry.util.y.a(this.P, eVar.P) && io.sentry.util.y.a(this.Q, eVar.Q) && io.sentry.util.y.a(this.R, eVar.R) && io.sentry.util.y.a(this.S, eVar.S)) {
                return true;
            }
        }
        return false;
    }

    public void f0(Boolean bool) {
        this.f29334u = bool;
    }

    public void g0(b bVar) {
        this.f29335v = bVar;
    }

    public void h0(Integer num) {
        this.P = num;
    }

    public int hashCode() {
        return (io.sentry.util.y.b(this.f29325d, this.f29326e, this.f29327i, this.f29328o, this.f29329p, this.f29330q, this.f29332s, this.f29333t, this.f29334u, this.f29335v, this.f29336w, this.f29337x, this.f29338y, this.f29339z, this.A, this.B, this.C, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R, this.S) * 31) + Arrays.hashCode(this.f29331r);
    }

    public void i0(Double d10) {
        this.Q = d10;
    }

    public void j0(Float f10) {
        this.H = f10;
    }

    public void k0(Integer num) {
        this.I = num;
    }

    public void l0(Integer num) {
        this.G = num;
    }

    public void m0(Integer num) {
        this.F = num;
    }

    public void n0(Boolean bool) {
        this.f29336w = bool;
    }

    public void o0(Long l10) {
        this.B = l10;
    }

    public void p0(TimeZone timeZone) {
        this.K = timeZone;
    }

    public void q0(Map map) {
        this.T = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29325d != null) {
            f3Var.e(StackTraceHelper.NAME_KEY).f(this.f29325d);
        }
        if (this.f29326e != null) {
            f3Var.e("manufacturer").f(this.f29326e);
        }
        if (this.f29327i != null) {
            f3Var.e("brand").f(this.f29327i);
        }
        if (this.f29328o != null) {
            f3Var.e("family").f(this.f29328o);
        }
        if (this.f29329p != null) {
            f3Var.e("model").f(this.f29329p);
        }
        if (this.f29330q != null) {
            f3Var.e("model_id").f(this.f29330q);
        }
        if (this.f29331r != null) {
            f3Var.e("archs").j(iLogger, this.f29331r);
        }
        if (this.f29332s != null) {
            f3Var.e("battery_level").i(this.f29332s);
        }
        if (this.f29333t != null) {
            f3Var.e("charging").k(this.f29333t);
        }
        if (this.f29334u != null) {
            f3Var.e("online").k(this.f29334u);
        }
        if (this.f29335v != null) {
            f3Var.e("orientation").j(iLogger, this.f29335v);
        }
        if (this.f29336w != null) {
            f3Var.e("simulator").k(this.f29336w);
        }
        if (this.f29337x != null) {
            f3Var.e("memory_size").i(this.f29337x);
        }
        if (this.f29338y != null) {
            f3Var.e("free_memory").i(this.f29338y);
        }
        if (this.f29339z != null) {
            f3Var.e("usable_memory").i(this.f29339z);
        }
        if (this.A != null) {
            f3Var.e("low_memory").k(this.A);
        }
        if (this.B != null) {
            f3Var.e("storage_size").i(this.B);
        }
        if (this.C != null) {
            f3Var.e("free_storage").i(this.C);
        }
        if (this.D != null) {
            f3Var.e("external_storage_size").i(this.D);
        }
        if (this.E != null) {
            f3Var.e("external_free_storage").i(this.E);
        }
        if (this.F != null) {
            f3Var.e("screen_width_pixels").i(this.F);
        }
        if (this.G != null) {
            f3Var.e("screen_height_pixels").i(this.G);
        }
        if (this.H != null) {
            f3Var.e("screen_density").i(this.H);
        }
        if (this.I != null) {
            f3Var.e("screen_dpi").i(this.I);
        }
        if (this.J != null) {
            f3Var.e("boot_time").j(iLogger, this.J);
        }
        if (this.K != null) {
            f3Var.e("timezone").j(iLogger, this.K);
        }
        if (this.L != null) {
            f3Var.e(StackTraceHelper.ID_KEY).f(this.L);
        }
        if (this.N != null) {
            f3Var.e("connection_type").f(this.N);
        }
        if (this.O != null) {
            f3Var.e("battery_temperature").i(this.O);
        }
        if (this.M != null) {
            f3Var.e("locale").f(this.M);
        }
        if (this.P != null) {
            f3Var.e("processor_count").i(this.P);
        }
        if (this.Q != null) {
            f3Var.e("processor_frequency").i(this.Q);
        }
        if (this.R != null) {
            f3Var.e("cpu_description").f(this.R);
        }
        if (this.S != null) {
            f3Var.e("chipset").f(this.S);
        }
        Map map = this.T;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.T.get(str));
            }
        }
        f3Var.z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(e eVar) {
        this.f29325d = eVar.f29325d;
        this.f29326e = eVar.f29326e;
        this.f29327i = eVar.f29327i;
        this.f29328o = eVar.f29328o;
        this.f29329p = eVar.f29329p;
        this.f29330q = eVar.f29330q;
        this.f29333t = eVar.f29333t;
        this.f29334u = eVar.f29334u;
        this.f29335v = eVar.f29335v;
        this.f29336w = eVar.f29336w;
        this.f29337x = eVar.f29337x;
        this.f29338y = eVar.f29338y;
        this.f29339z = eVar.f29339z;
        this.A = eVar.A;
        this.B = eVar.B;
        this.C = eVar.C;
        this.D = eVar.D;
        this.E = eVar.E;
        this.F = eVar.F;
        this.G = eVar.G;
        this.H = eVar.H;
        this.I = eVar.I;
        this.J = eVar.J;
        this.L = eVar.L;
        this.N = eVar.N;
        this.O = eVar.O;
        this.f29332s = eVar.f29332s;
        String[] strArr = eVar.f29331r;
        this.f29331r = strArr != null ? (String[]) strArr.clone() : null;
        this.M = eVar.M;
        TimeZone timeZone = eVar.K;
        this.K = timeZone != null ? (TimeZone) timeZone.clone() : null;
        this.P = eVar.P;
        this.Q = eVar.Q;
        this.R = eVar.R;
        this.S = eVar.S;
        this.T = io.sentry.util.c.b(eVar.T);
    }
}
