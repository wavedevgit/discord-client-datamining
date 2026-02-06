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
    private String f28820i;

    /* renamed from: o  reason: collision with root package name */
    private int f28821o;

    /* renamed from: p  reason: collision with root package name */
    private long f28822p;

    /* renamed from: q  reason: collision with root package name */
    private long f28823q;

    /* renamed from: r  reason: collision with root package name */
    private String f28824r;

    /* renamed from: s  reason: collision with root package name */
    private String f28825s;

    /* renamed from: t  reason: collision with root package name */
    private int f28826t;

    /* renamed from: u  reason: collision with root package name */
    private int f28827u;

    /* renamed from: v  reason: collision with root package name */
    private int f28828v;

    /* renamed from: w  reason: collision with root package name */
    private String f28829w;

    /* renamed from: x  reason: collision with root package name */
    private int f28830x;

    /* renamed from: y  reason: collision with root package name */
    private int f28831y;

    /* renamed from: z  reason: collision with root package name */
    private int f28832z;

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
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            q12 = "";
                        }
                        jVar.f28820i = q12;
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
                        jVar.f28823q = e3Var.nextLong();
                        break;
                    case 1:
                        jVar.f28821o = e3Var.nextInt();
                        break;
                    case 2:
                        Integer j12 = e3Var.j1();
                        if (j12 != null) {
                            i10 = j12.intValue();
                        }
                        jVar.f28826t = i10;
                        break;
                    case 3:
                        String q12 = e3Var.q1();
                        if (q12 != null) {
                            str = q12;
                        }
                        jVar.f28825s = str;
                        break;
                    case 4:
                        Integer j13 = e3Var.j1();
                        if (j13 != null) {
                            i10 = j13.intValue();
                        }
                        jVar.f28828v = i10;
                        break;
                    case 5:
                        Integer j14 = e3Var.j1();
                        if (j14 != null) {
                            i10 = j14.intValue();
                        }
                        jVar.f28832z = i10;
                        break;
                    case 6:
                        Integer j15 = e3Var.j1();
                        if (j15 != null) {
                            i10 = j15.intValue();
                        }
                        jVar.f28831y = i10;
                        break;
                    case 7:
                        Long l12 = e3Var.l1();
                        if (l12 == null) {
                            longValue = 0;
                        } else {
                            longValue = l12.longValue();
                        }
                        jVar.f28822p = longValue;
                        break;
                    case '\b':
                        Integer j16 = e3Var.j1();
                        if (j16 != null) {
                            i10 = j16.intValue();
                        }
                        jVar.f28827u = i10;
                        break;
                    case '\t':
                        Integer j17 = e3Var.j1();
                        if (j17 != null) {
                            i10 = j17.intValue();
                        }
                        jVar.f28830x = i10;
                        break;
                    case '\n':
                        String q13 = e3Var.q1();
                        if (q13 != null) {
                            str = q13;
                        }
                        jVar.f28824r = str;
                        break;
                    case 11:
                        String q14 = e3Var.q1();
                        if (q14 != null) {
                            str = q14;
                        }
                        jVar.f28829w = str;
                        break;
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
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
                        e3Var.u1(iLogger, hashMap, o02);
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
        this.f28824r = "h264";
        this.f28825s = "mp4";
        this.f28829w = "constant";
        this.f28820i = MediaStreamTrack.VIDEO_TRACK_KIND;
    }

    private void t(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f28820i);
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
        f3Var.e("segmentId").b(this.f28821o);
        f3Var.e("size").b(this.f28822p);
        f3Var.e("duration").b(this.f28823q);
        f3Var.e("encoding").f(this.f28824r);
        f3Var.e("container").f(this.f28825s);
        f3Var.e("height").b(this.f28826t);
        f3Var.e("width").b(this.f28827u);
        f3Var.e("frameCount").b(this.f28828v);
        f3Var.e("frameRate").b(this.f28830x);
        f3Var.e("frameRateType").f(this.f28829w);
        f3Var.e(ViewProps.LEFT).b(this.f28831y);
        f3Var.e(ViewProps.TOP).b(this.f28832z);
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
        this.f28831y = i10;
    }

    public void B(Map map) {
        this.B = map;
    }

    public void C(int i10) {
        this.f28821o = i10;
    }

    public void D(long j10) {
        this.f28822p = j10;
    }

    public void E(int i10) {
        this.f28832z = i10;
    }

    public void F(Map map) {
        this.A = map;
    }

    public void G(int i10) {
        this.f28827u = i10;
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
        if (this.f28821o == jVar.f28821o && this.f28822p == jVar.f28822p && this.f28823q == jVar.f28823q && this.f28826t == jVar.f28826t && this.f28827u == jVar.f28827u && this.f28828v == jVar.f28828v && this.f28830x == jVar.f28830x && this.f28831y == jVar.f28831y && this.f28832z == jVar.f28832z && y.a(this.f28820i, jVar.f28820i) && y.a(this.f28824r, jVar.f28824r) && y.a(this.f28825s, jVar.f28825s) && y.a(this.f28829w, jVar.f28829w)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f28820i, Integer.valueOf(this.f28821o), Long.valueOf(this.f28822p), Long.valueOf(this.f28823q), this.f28824r, this.f28825s, Integer.valueOf(this.f28826t), Integer.valueOf(this.f28827u), Integer.valueOf(this.f28828v), this.f28829w, Integer.valueOf(this.f28830x), Integer.valueOf(this.f28831y), Integer.valueOf(this.f28832z));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
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
        this.f28823q = j10;
    }

    public void x(int i10) {
        this.f28828v = i10;
    }

    public void y(int i10) {
        this.f28830x = i10;
    }

    public void z(int i10) {
        this.f28826t = i10;
    }
}
