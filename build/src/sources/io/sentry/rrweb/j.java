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
    private String f30572i;

    /* renamed from: o  reason: collision with root package name */
    private int f30573o;

    /* renamed from: p  reason: collision with root package name */
    private long f30574p;

    /* renamed from: q  reason: collision with root package name */
    private long f30575q;

    /* renamed from: r  reason: collision with root package name */
    private String f30576r;

    /* renamed from: s  reason: collision with root package name */
    private String f30577s;

    /* renamed from: t  reason: collision with root package name */
    private int f30578t;

    /* renamed from: u  reason: collision with root package name */
    private int f30579u;

    /* renamed from: v  reason: collision with root package name */
    private int f30580v;

    /* renamed from: w  reason: collision with root package name */
    private String f30581w;

    /* renamed from: x  reason: collision with root package name */
    private int f30582x;

    /* renamed from: y  reason: collision with root package name */
    private int f30583y;

    /* renamed from: z  reason: collision with root package name */
    private int f30584z;

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
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            r12 = "";
                        }
                        jVar.f30572i = r12;
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
                        jVar.f30575q = e3Var.nextLong();
                        break;
                    case 1:
                        jVar.f30573o = e3Var.nextInt();
                        break;
                    case 2:
                        Integer l12 = e3Var.l1();
                        if (l12 != null) {
                            i10 = l12.intValue();
                        }
                        jVar.f30578t = i10;
                        break;
                    case 3:
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            str = r12;
                        }
                        jVar.f30577s = str;
                        break;
                    case 4:
                        Integer l13 = e3Var.l1();
                        if (l13 != null) {
                            i10 = l13.intValue();
                        }
                        jVar.f30580v = i10;
                        break;
                    case 5:
                        Integer l14 = e3Var.l1();
                        if (l14 != null) {
                            i10 = l14.intValue();
                        }
                        jVar.f30584z = i10;
                        break;
                    case 6:
                        Integer l15 = e3Var.l1();
                        if (l15 != null) {
                            i10 = l15.intValue();
                        }
                        jVar.f30583y = i10;
                        break;
                    case 7:
                        Long n12 = e3Var.n1();
                        if (n12 == null) {
                            longValue = 0;
                        } else {
                            longValue = n12.longValue();
                        }
                        jVar.f30574p = longValue;
                        break;
                    case '\b':
                        Integer l16 = e3Var.l1();
                        if (l16 != null) {
                            i10 = l16.intValue();
                        }
                        jVar.f30579u = i10;
                        break;
                    case '\t':
                        Integer l17 = e3Var.l1();
                        if (l17 != null) {
                            i10 = l17.intValue();
                        }
                        jVar.f30582x = i10;
                        break;
                    case '\n':
                        String r13 = e3Var.r1();
                        if (r13 != null) {
                            str = r13;
                        }
                        jVar.f30576r = str;
                        break;
                    case 11:
                        String r14 = e3Var.r1();
                        if (r14 != null) {
                            str = r14;
                        }
                        jVar.f30581w = str;
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
        this.f30576r = "h264";
        this.f30577s = "mp4";
        this.f30581w = "constant";
        this.f30572i = MediaStreamTrack.VIDEO_TRACK_KIND;
    }

    private void t(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f30572i);
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
        f3Var.e("segmentId").b(this.f30573o);
        f3Var.e("size").b(this.f30574p);
        f3Var.e("duration").b(this.f30575q);
        f3Var.e("encoding").f(this.f30576r);
        f3Var.e("container").f(this.f30577s);
        f3Var.e("height").b(this.f30578t);
        f3Var.e("width").b(this.f30579u);
        f3Var.e("frameCount").b(this.f30580v);
        f3Var.e("frameRate").b(this.f30582x);
        f3Var.e("frameRateType").f(this.f30581w);
        f3Var.e(ViewProps.LEFT).b(this.f30583y);
        f3Var.e(ViewProps.TOP).b(this.f30584z);
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
        this.f30583y = i10;
    }

    public void B(Map map) {
        this.B = map;
    }

    public void C(int i10) {
        this.f30573o = i10;
    }

    public void D(long j10) {
        this.f30574p = j10;
    }

    public void E(int i10) {
        this.f30584z = i10;
    }

    public void F(Map map) {
        this.A = map;
    }

    public void G(int i10) {
        this.f30579u = i10;
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
        if (this.f30573o == jVar.f30573o && this.f30574p == jVar.f30574p && this.f30575q == jVar.f30575q && this.f30578t == jVar.f30578t && this.f30579u == jVar.f30579u && this.f30580v == jVar.f30580v && this.f30582x == jVar.f30582x && this.f30583y == jVar.f30583y && this.f30584z == jVar.f30584z && y.a(this.f30572i, jVar.f30572i) && y.a(this.f30576r, jVar.f30576r) && y.a(this.f30577s, jVar.f30577s) && y.a(this.f30581w, jVar.f30581w)) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.rrweb.b
    public int hashCode() {
        return y.b(Integer.valueOf(super.hashCode()), this.f30572i, Integer.valueOf(this.f30573o), Long.valueOf(this.f30574p), Long.valueOf(this.f30575q), this.f30576r, this.f30577s, Integer.valueOf(this.f30578t), Integer.valueOf(this.f30579u), Integer.valueOf(this.f30580v), this.f30581w, Integer.valueOf(this.f30582x), Integer.valueOf(this.f30583y), Integer.valueOf(this.f30584z));
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0407b().a(this, f3Var, iLogger);
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
        this.f30575q = j10;
    }

    public void x(int i10) {
        this.f30580v = i10;
    }

    public void y(int i10) {
        this.f30582x = i10;
    }

    public void z(int i10) {
        this.f30578t = i10;
    }
}
