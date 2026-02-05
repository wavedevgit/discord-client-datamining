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
    private String f29676i;

    /* renamed from: o  reason: collision with root package name */
    private int f29677o;

    /* renamed from: p  reason: collision with root package name */
    private long f29678p;

    /* renamed from: q  reason: collision with root package name */
    private long f29679q;

    /* renamed from: r  reason: collision with root package name */
    private String f29680r;

    /* renamed from: s  reason: collision with root package name */
    private String f29681s;

    /* renamed from: t  reason: collision with root package name */
    private int f29682t;

    /* renamed from: u  reason: collision with root package name */
    private int f29683u;

    /* renamed from: v  reason: collision with root package name */
    private int f29684v;

    /* renamed from: w  reason: collision with root package name */
    private String f29685w;

    /* renamed from: x  reason: collision with root package name */
    private int f29686x;

    /* renamed from: y  reason: collision with root package name */
    private int f29687y;

    /* renamed from: z  reason: collision with root package name */
    private int f29688z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(j jVar, e3 e3Var, ILogger iLogger) {
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("payload")) {
                    if (!m02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        jVar.f29676i = r12;
                    }
                } else {
                    d(jVar, e3Var, iLogger);
                }
            }
            jVar.v(concurrentHashMap);
            e3Var.z();
        }

        private void d(j jVar, e3 e3Var, ILogger iLogger) {
            long longValue;
            e3Var.s();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1992012396:
                        if (m02.equals("duration")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1627805778:
                        if (m02.equals("segmentId")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (m02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -410956671:
                        if (m02.equals("container")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -296512606:
                        if (m02.equals("frameCount")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 115029:
                        if (m02.equals(ViewProps.TOP)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3317767:
                        if (m02.equals(ViewProps.LEFT)) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3530753:
                        if (m02.equals("size")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (m02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 545057773:
                        if (m02.equals("frameRate")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1711222099:
                        if (m02.equals("encoding")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2135109831:
                        if (m02.equals("frameRateType")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                String str = "";
                switch (c10) {
                    case 0:
                        jVar.f29679q = e3Var.nextLong();
                        break;
                    case 1:
                        jVar.f29677o = e3Var.nextInt();
                        break;
                    case 2:
                        Integer k12 = e3Var.k1();
                        if (k12 != null) {
                            i10 = k12.intValue();
                        }
                        jVar.f29682t = i10;
                        break;
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            str = r12;
                        }
                        jVar.f29681s = str;
                        break;
                    case 4:
                        Integer k13 = e3Var.k1();
                        if (k13 != null) {
                            i10 = k13.intValue();
                        }
                        jVar.f29684v = i10;
                        break;
                    case 5:
                        Integer k14 = e3Var.k1();
                        if (k14 != null) {
                            i10 = k14.intValue();
                        }
                        jVar.f29688z = i10;
                        break;
                    case 6:
                        Integer k15 = e3Var.k1();
                        if (k15 != null) {
                            i10 = k15.intValue();
                        }
                        jVar.f29687y = i10;
                        break;
                    case 7:
                        Long m12 = e3Var.m1();
                        if (m12 == null) {
                            longValue = 0;
                        } else {
                            longValue = m12.longValue();
                        }
                        jVar.f29678p = longValue;
                        break;
                    case '\b':
                        Integer k16 = e3Var.k1();
                        if (k16 != null) {
                            i10 = k16.intValue();
                        }
                        jVar.f29683u = i10;
                        break;
                    case '\t':
                        Integer k17 = e3Var.k1();
                        if (k17 != null) {
                            i10 = k17.intValue();
                        }
                        jVar.f29686x = i10;
                        break;
                    case '\n':
                        String r13 = e3Var.r1();
                        if (r13 != null) {
                            str = r13;
                        }
                        jVar.f29680r = str;
                        break;
                    case 11:
                        String r14 = e3Var.r1();
                        if (r14 != null) {
                            str = r14;
                        }
                        jVar.f29685w = str;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            jVar.B(concurrentHashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            j jVar = new j();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar.a(jVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(jVar, e3Var, iLogger);
                }
            }
            jVar.F(hashMap);
            e3Var.z();
            return jVar;
        }
    }

    public j() {
        super(c.Custom);
        this.f29680r = "h264";
        this.f29681s = "mp4";
        this.f29685w = "constant";
        this.f29676i = MediaStreamTrack.VIDEO_TRACK_KIND;
    }

    private void t(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("tag").f(this.f29676i);
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
        f3Var.z();
    }

    private void u(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("segmentId").b(this.f29677o);
        f3Var.e("size").b(this.f29678p);
        f3Var.e("duration").b(this.f29679q);
        f3Var.e("encoding").f(this.f29680r);
        f3Var.e("container").f(this.f29681s);
        f3Var.e("height").b(this.f29682t);
        f3Var.e("width").b(this.f29683u);
        f3Var.e("frameCount").b(this.f29684v);
        f3Var.e("frameRate").b(this.f29686x);
        f3Var.e("frameRateType").f(this.f29685w);
        f3Var.e(ViewProps.LEFT).b(this.f29687y);
        f3Var.e(ViewProps.TOP).b(this.f29688z);
        Map map = this.B;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.B.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void A(int i10) {
        this.f29687y = i10;
    }

    public void B(Map map) {
        this.B = map;
    }

    public void C(int i10) {
        this.f29677o = i10;
    }

    public void D(long j10) {
        this.f29678p = j10;
    }

    public void E(int i10) {
        this.f29688z = i10;
    }

    public void F(Map map) {
        this.A = map;
    }

    public void G(int i10) {
        this.f29683u = i10;
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
        if (this.f29677o == jVar.f29677o && this.f29678p == jVar.f29678p && this.f29679q == jVar.f29679q && this.f29682t == jVar.f29682t && this.f29683u == jVar.f29683u && this.f29684v == jVar.f29684v && this.f29686x == jVar.f29686x && this.f29687y == jVar.f29687y && this.f29688z == jVar.f29688z && y.a(this.f29676i, jVar.f29676i) && y.a(this.f29680r, jVar.f29680r) && y.a(this.f29681s, jVar.f29681s) && y.a(this.f29685w, jVar.f29685w)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f29676i, Integer.valueOf(this.f29677o), Long.valueOf(this.f29678p), Long.valueOf(this.f29679q), this.f29680r, this.f29681s, Integer.valueOf(this.f29682t), Integer.valueOf(this.f29683u), Integer.valueOf(this.f29684v), this.f29685w, Integer.valueOf(this.f29686x), Integer.valueOf(this.f29687y), Integer.valueOf(this.f29688z));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
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
        f3Var.z();
    }

    public void v(Map map) {
        this.C = map;
    }

    public void w(long j10) {
        this.f29679q = j10;
    }

    public void x(int i10) {
        this.f29684v = i10;
    }

    public void y(int i10) {
        this.f29686x = i10;
    }

    public void z(int i10) {
        this.f29682t = i10;
    }
}
