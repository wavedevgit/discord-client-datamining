package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29531d;

    /* renamed from: e  reason: collision with root package name */
    private String f29532e;

    /* renamed from: i  reason: collision with root package name */
    private String f29533i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29534o;

    /* renamed from: p  reason: collision with root package name */
    private Long f29535p;

    /* renamed from: q  reason: collision with root package name */
    private Long f29536q;

    /* renamed from: r  reason: collision with root package name */
    private Long f29537r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29538s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public r3 a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            r3 r3Var = new r3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -112372011:
                        if (m02.equals("relative_start_ns")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -84607876:
                        if (m02.equals("relative_end_ns")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (m02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (m02.equals("trace_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1566648660:
                        if (m02.equals("relative_cpu_end_ms")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1902256621:
                        if (m02.equals("relative_cpu_start_ms")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Long m12 = e3Var.m1();
                        if (m12 == null) {
                            break;
                        } else {
                            r3Var.f29534o = m12;
                            break;
                        }
                    case 1:
                        Long m13 = e3Var.m1();
                        if (m13 == null) {
                            break;
                        } else {
                            r3Var.f29535p = m13;
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            r3Var.f29531d = r12;
                            break;
                        }
                    case 3:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            r3Var.f29533i = r13;
                            break;
                        }
                    case 4:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            r3Var.f29532e = r14;
                            break;
                        }
                    case 5:
                        Long m14 = e3Var.m1();
                        if (m14 == null) {
                            break;
                        } else {
                            r3Var.f29537r = m14;
                            break;
                        }
                    case 6:
                        Long m15 = e3Var.m1();
                        if (m15 == null) {
                            break;
                        } else {
                            r3Var.f29536q = m15;
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
            r3Var.l(concurrentHashMap);
            e3Var.z();
            return r3Var;
        }
    }

    public r3() {
        this(a3.u(), 0L, 0L);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && r3.class == obj.getClass()) {
            r3 r3Var = (r3) obj;
            if (this.f29531d.equals(r3Var.f29531d) && this.f29532e.equals(r3Var.f29532e) && this.f29533i.equals(r3Var.f29533i) && this.f29534o.equals(r3Var.f29534o) && this.f29536q.equals(r3Var.f29536q) && io.sentry.util.y.a(this.f29537r, r3Var.f29537r) && io.sentry.util.y.a(this.f29535p, r3Var.f29535p) && io.sentry.util.y.a(this.f29538s, r3Var.f29538s)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f29531d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29531d, this.f29532e, this.f29533i, this.f29534o, this.f29535p, this.f29536q, this.f29537r, this.f29538s);
    }

    public String i() {
        return this.f29533i;
    }

    public String j() {
        return this.f29532e;
    }

    public void k(Long l10, Long l11, Long l12, Long l13) {
        if (this.f29535p == null) {
            this.f29535p = Long.valueOf(l10.longValue() - l11.longValue());
            this.f29534o = Long.valueOf(this.f29534o.longValue() - l11.longValue());
            this.f29537r = Long.valueOf(l12.longValue() - l13.longValue());
            this.f29536q = Long.valueOf(this.f29536q.longValue() - l13.longValue());
        }
    }

    public void l(Map map) {
        this.f29538s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e(StackTraceHelper.ID_KEY).j(iLogger, this.f29531d);
        f3Var.e("trace_id").j(iLogger, this.f29532e);
        f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f29533i);
        f3Var.e("relative_start_ns").j(iLogger, this.f29534o);
        f3Var.e("relative_end_ns").j(iLogger, this.f29535p);
        f3Var.e("relative_cpu_start_ms").j(iLogger, this.f29536q);
        f3Var.e("relative_cpu_end_ms").j(iLogger, this.f29537r);
        Map map = this.f29538s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29538s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public r3(e1 e1Var, Long l10, Long l11) {
        this.f29531d = e1Var.f().toString();
        this.f29532e = e1Var.q().p().toString();
        this.f29533i = e1Var.getName().isEmpty() ? "unknown" : e1Var.getName();
        this.f29534o = l10;
        this.f29536q = l11;
    }
}
