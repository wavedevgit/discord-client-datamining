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
    private String f29068i;

    /* renamed from: o  reason: collision with root package name */
    private int f29069o;

    /* renamed from: p  reason: collision with root package name */
    private long f29070p;

    /* renamed from: q  reason: collision with root package name */
    private long f29071q;

    /* renamed from: r  reason: collision with root package name */
    private String f29072r;

    /* renamed from: s  reason: collision with root package name */
    private String f29073s;

    /* renamed from: t  reason: collision with root package name */
    private int f29074t;

    /* renamed from: u  reason: collision with root package name */
    private int f29075u;

    /* renamed from: v  reason: collision with root package name */
    private int f29076v;

    /* renamed from: w  reason: collision with root package name */
    private String f29077w;

    /* renamed from: x  reason: collision with root package name */
    private int f29078x;

    /* renamed from: y  reason: collision with root package name */
    private int f29079y;

    /* renamed from: z  reason: collision with root package name */
    private int f29080z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(j jVar, e3 e3Var, ILogger iLogger) {
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("payload")) {
                    if (!o02.equals("tag")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                    } else {
                        String m12 = e3Var.m1();
                        if (m12 == null) {
                            m12 = "";
                        }
                        jVar.f29068i = m12;
                    }
                } else {
                    d(jVar, e3Var, iLogger);
                }
            }
            jVar.v(concurrentHashMap);
            e3Var.D();
        }

        private void d(j jVar, e3 e3Var, ILogger iLogger) {
            long longValue;
            e3Var.u();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                int i10 = 0;
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1992012396:
                        if (o02.equals("duration")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1627805778:
                        if (o02.equals("segmentId")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1221029593:
                        if (o02.equals("height")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -410956671:
                        if (o02.equals("container")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case -296512606:
                        if (o02.equals("frameCount")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 115029:
                        if (o02.equals(ViewProps.TOP)) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3317767:
                        if (o02.equals(ViewProps.LEFT)) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 3530753:
                        if (o02.equals("size")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 113126854:
                        if (o02.equals("width")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 545057773:
                        if (o02.equals("frameRate")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1711222099:
                        if (o02.equals("encoding")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 2135109831:
                        if (o02.equals("frameRateType")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                String str = "";
                switch (c10) {
                    case 0:
                        jVar.f29071q = e3Var.nextLong();
                        break;
                    case 1:
                        jVar.f29069o = e3Var.nextInt();
                        break;
                    case 2:
                        Integer g12 = e3Var.g1();
                        if (g12 != null) {
                            i10 = g12.intValue();
                        }
                        jVar.f29074t = i10;
                        break;
                    case 3:
                        String m12 = e3Var.m1();
                        if (m12 != null) {
                            str = m12;
                        }
                        jVar.f29073s = str;
                        break;
                    case 4:
                        Integer g13 = e3Var.g1();
                        if (g13 != null) {
                            i10 = g13.intValue();
                        }
                        jVar.f29076v = i10;
                        break;
                    case 5:
                        Integer g14 = e3Var.g1();
                        if (g14 != null) {
                            i10 = g14.intValue();
                        }
                        jVar.f29080z = i10;
                        break;
                    case 6:
                        Integer g15 = e3Var.g1();
                        if (g15 != null) {
                            i10 = g15.intValue();
                        }
                        jVar.f29079y = i10;
                        break;
                    case 7:
                        Long i12 = e3Var.i1();
                        if (i12 == null) {
                            longValue = 0;
                        } else {
                            longValue = i12.longValue();
                        }
                        jVar.f29070p = longValue;
                        break;
                    case '\b':
                        Integer g16 = e3Var.g1();
                        if (g16 != null) {
                            i10 = g16.intValue();
                        }
                        jVar.f29075u = i10;
                        break;
                    case '\t':
                        Integer g17 = e3Var.g1();
                        if (g17 != null) {
                            i10 = g17.intValue();
                        }
                        jVar.f29078x = i10;
                        break;
                    case '\n':
                        String m13 = e3Var.m1();
                        if (m13 != null) {
                            str = m13;
                        }
                        jVar.f29072r = str;
                        break;
                    case 11:
                        String m14 = e3Var.m1();
                        if (m14 != null) {
                            str = m14;
                        }
                        jVar.f29077w = str;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                        break;
                }
            }
            jVar.B(concurrentHashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public j a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            j jVar = new j();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar.a(jVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.p1(iLogger, hashMap, o02);
                    }
                } else {
                    c(jVar, e3Var, iLogger);
                }
            }
            jVar.F(hashMap);
            e3Var.D();
            return jVar;
        }
    }

    public j() {
        super(c.Custom);
        this.f29072r = "h264";
        this.f29073s = "mp4";
        this.f29077w = "constant";
        this.f29068i = MediaStreamTrack.VIDEO_TRACK_KIND;
    }

    private void t(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f29068i);
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
        f3Var.D();
    }

    private void u(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("segmentId").b(this.f29069o);
        f3Var.e("size").b(this.f29070p);
        f3Var.e("duration").b(this.f29071q);
        f3Var.e("encoding").f(this.f29072r);
        f3Var.e("container").f(this.f29073s);
        f3Var.e("height").b(this.f29074t);
        f3Var.e("width").b(this.f29075u);
        f3Var.e("frameCount").b(this.f29076v);
        f3Var.e("frameRate").b(this.f29078x);
        f3Var.e("frameRateType").f(this.f29077w);
        f3Var.e(ViewProps.LEFT).b(this.f29079y);
        f3Var.e(ViewProps.TOP).b(this.f29080z);
        Map map = this.B;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.B.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void A(int i10) {
        this.f29079y = i10;
    }

    public void B(Map map) {
        this.B = map;
    }

    public void C(int i10) {
        this.f29069o = i10;
    }

    public void D(long j10) {
        this.f29070p = j10;
    }

    public void E(int i10) {
        this.f29080z = i10;
    }

    public void F(Map map) {
        this.A = map;
    }

    public void G(int i10) {
        this.f29075u = i10;
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
        if (this.f29069o == jVar.f29069o && this.f29070p == jVar.f29070p && this.f29071q == jVar.f29071q && this.f29074t == jVar.f29074t && this.f29075u == jVar.f29075u && this.f29076v == jVar.f29076v && this.f29078x == jVar.f29078x && this.f29079y == jVar.f29079y && this.f29080z == jVar.f29080z && y.a(this.f29068i, jVar.f29068i) && y.a(this.f29072r, jVar.f29072r) && y.a(this.f29073s, jVar.f29073s) && y.a(this.f29077w, jVar.f29077w)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f29068i, Integer.valueOf(this.f29069o), Long.valueOf(this.f29070p), Long.valueOf(this.f29071q), this.f29072r, this.f29073s, Integer.valueOf(this.f29074t), Integer.valueOf(this.f29075u), Integer.valueOf(this.f29076v), this.f29077w, Integer.valueOf(this.f29078x), Integer.valueOf(this.f29079y), Integer.valueOf(this.f29080z));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0432b().a(this, f3Var, iLogger);
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
        f3Var.D();
    }

    public void v(Map map) {
        this.C = map;
    }

    public void w(long j10) {
        this.f29071q = j10;
    }

    public void x(int i10) {
        this.f29076v = i10;
    }

    public void y(int i10) {
        this.f29078x = i10;
    }

    public void z(int i10) {
        this.f29074t = i10;
    }
}
