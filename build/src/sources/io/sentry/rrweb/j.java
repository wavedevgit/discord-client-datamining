package io.sentry.rrweb;

import com.facebook.react.uimanager.ViewProps;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.util.y;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b implements w1 {
    private Map A;
    private Map B;
    private Map C;

    /* renamed from: i  reason: collision with root package name */
    private String f30691i;

    /* renamed from: o  reason: collision with root package name */
    private int f30692o;

    /* renamed from: p  reason: collision with root package name */
    private long f30693p;

    /* renamed from: q  reason: collision with root package name */
    private long f30694q;

    /* renamed from: r  reason: collision with root package name */
    private String f30695r;

    /* renamed from: s  reason: collision with root package name */
    private String f30696s;

    /* renamed from: t  reason: collision with root package name */
    private int f30697t;

    /* renamed from: u  reason: collision with root package name */
    private int f30698u;

    /* renamed from: v  reason: collision with root package name */
    private int f30699v;

    /* renamed from: w  reason: collision with root package name */
    private String f30700w;

    /* renamed from: x  reason: collision with root package name */
    private int f30701x;

    /* renamed from: y  reason: collision with root package name */
    private int f30702y;

    /* renamed from: z  reason: collision with root package name */
    private int f30703z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(j jVar, e3 e3Var, ILogger iLogger) {
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("payload")) {
                    if (!l02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        jVar.f30691i = r12;
                    }
                } else {
                    d(jVar, e3Var, iLogger);
                }
            }
            jVar.v(concurrentHashMap);
            e3Var.y();
        }

        private void d(j jVar, e3 e3Var, ILogger iLogger) {
            long longValue;
            e3Var.r();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -1992012396:
                        if (l02.equals("duration")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1627805778:
                        if (l02.equals("segmentId")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (l02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -410956671:
                        if (l02.equals("container")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -296512606:
                        if (l02.equals("frameCount")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 115029:
                        if (l02.equals(ViewProps.TOP)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3317767:
                        if (l02.equals(ViewProps.LEFT)) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3530753:
                        if (l02.equals("size")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (l02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 545057773:
                        if (l02.equals("frameRate")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1711222099:
                        if (l02.equals("encoding")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2135109831:
                        if (l02.equals("frameRateType")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                String str = "";
                switch (c10) {
                    case 0:
                        jVar.f30694q = e3Var.nextLong();
                        break;
                    case 1:
                        jVar.f30692o = e3Var.nextInt();
                        break;
                    case 2:
                        Integer j12 = e3Var.j1();
                        if (j12 != null) {
                            i10 = j12.intValue();
                        }
                        jVar.f30697t = i10;
                        break;
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            str = r12;
                        }
                        jVar.f30696s = str;
                        break;
                    case 4:
                        Integer j13 = e3Var.j1();
                        if (j13 != null) {
                            i10 = j13.intValue();
                        }
                        jVar.f30699v = i10;
                        break;
                    case 5:
                        Integer j14 = e3Var.j1();
                        if (j14 != null) {
                            i10 = j14.intValue();
                        }
                        jVar.f30703z = i10;
                        break;
                    case 6:
                        Integer j15 = e3Var.j1();
                        if (j15 != null) {
                            i10 = j15.intValue();
                        }
                        jVar.f30702y = i10;
                        break;
                    case 7:
                        Long m12 = e3Var.m1();
                        if (m12 == null) {
                            longValue = 0;
                        } else {
                            longValue = m12.longValue();
                        }
                        jVar.f30693p = longValue;
                        break;
                    case '\b':
                        Integer j16 = e3Var.j1();
                        if (j16 != null) {
                            i10 = j16.intValue();
                        }
                        jVar.f30698u = i10;
                        break;
                    case '\t':
                        Integer j17 = e3Var.j1();
                        if (j17 != null) {
                            i10 = j17.intValue();
                        }
                        jVar.f30701x = i10;
                        break;
                    case '\n':
                        String r13 = e3Var.r1();
                        if (r13 != null) {
                            str = r13;
                        }
                        jVar.f30695r = str;
                        break;
                    case 11:
                        String r14 = e3Var.r1();
                        if (r14 != null) {
                            str = r14;
                        }
                        jVar.f30700w = str;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                        break;
                }
            }
            jVar.B(concurrentHashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            j jVar = new j();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("data")) {
                    if (!aVar.a(jVar, l02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    }
                } else {
                    c(jVar, e3Var, iLogger);
                }
            }
            jVar.F(hashMap);
            e3Var.y();
            return jVar;
        }
    }

    public j() {
        super(c.Custom);
        this.f30695r = "h264";
        this.f30696s = "mp4";
        this.f30700w = "constant";
        this.f30691i = MediaStreamTrack.VIDEO_TRACK_KIND;
    }

    private void t(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("tag").f(this.f30691i);
        f3Var.e("payload");
        u(f3Var, iLogger);
        Map map = this.C;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.C.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    private void u(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("segmentId").b(this.f30692o);
        f3Var.e("size").b(this.f30693p);
        f3Var.e("duration").b(this.f30694q);
        f3Var.e("encoding").f(this.f30695r);
        f3Var.e("container").f(this.f30696s);
        f3Var.e("height").b(this.f30697t);
        f3Var.e("width").b(this.f30698u);
        f3Var.e("frameCount").b(this.f30699v);
        f3Var.e("frameRate").b(this.f30701x);
        f3Var.e("frameRateType").f(this.f30700w);
        f3Var.e(ViewProps.LEFT).b(this.f30702y);
        f3Var.e(ViewProps.TOP).b(this.f30703z);
        Map map = this.B;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.B.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void A(int i10) {
        this.f30702y = i10;
    }

    public void B(Map map) {
        this.B = map;
    }

    public void C(int i10) {
        this.f30692o = i10;
    }

    public void D(long j10) {
        this.f30693p = j10;
    }

    public void E(int i10) {
        this.f30703z = i10;
    }

    public void F(Map map) {
        this.A = map;
    }

    public void G(int i10) {
        this.f30698u = i10;
    }

    @Override // io.sentry.rrweb.b
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || j.class != obj.getClass() || !super.equals(obj)) {
            return false;
        }
        j jVar = (j) obj;
        if (this.f30692o == jVar.f30692o && this.f30693p == jVar.f30693p && this.f30694q == jVar.f30694q && this.f30697t == jVar.f30697t && this.f30698u == jVar.f30698u && this.f30699v == jVar.f30699v && this.f30701x == jVar.f30701x && this.f30702y == jVar.f30702y && this.f30703z == jVar.f30703z && y.a(this.f30691i, jVar.f30691i) && y.a(this.f30695r, jVar.f30695r) && y.a(this.f30696s, jVar.f30696s) && y.a(this.f30700w, jVar.f30700w)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f30691i, Integer.valueOf(this.f30692o), Long.valueOf(this.f30693p), Long.valueOf(this.f30694q), this.f30695r, this.f30696s, Integer.valueOf(this.f30697t), Integer.valueOf(this.f30698u), Integer.valueOf(this.f30699v), this.f30700w, Integer.valueOf(this.f30701x), Integer.valueOf(this.f30702y), Integer.valueOf(this.f30703z));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0403b().a(this, f3Var, iLogger);
        f3Var.e("data");
        t(f3Var, iLogger);
        Map map = this.A;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.A.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void v(Map map) {
        this.C = map;
    }

    public void w(long j10) {
        this.f30694q = j10;
    }

    public void x(int i10) {
        this.f30699v = i10;
    }

    public void y(int i10) {
        this.f30701x = i10;
    }

    public void z(int i10) {
        this.f30697t = i10;
    }
}
