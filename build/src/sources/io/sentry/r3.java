package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f28723d;

    /* renamed from: e  reason: collision with root package name */
    private String f28724e;

    /* renamed from: i  reason: collision with root package name */
    private String f28725i;

    /* renamed from: o  reason: collision with root package name */
    private Long f28726o;

    /* renamed from: p  reason: collision with root package name */
    private Long f28727p;

    /* renamed from: q  reason: collision with root package name */
    private Long f28728q;

    /* renamed from: r  reason: collision with root package name */
    private Long f28729r;

    /* renamed from: s  reason: collision with root package name */
    private Map f28730s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public r3 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            r3 r3Var = new r3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -112372011:
                        if (o02.equals("relative_start_ns")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -84607876:
                        if (o02.equals("relative_end_ns")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (o02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (o02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (o02.equals("trace_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1566648660:
                        if (o02.equals("relative_cpu_end_ms")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1902256621:
                        if (o02.equals("relative_cpu_start_ms")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        Long l12 = e3Var.l1();
                        if (l12 == null) {
                            break;
                        } else {
                            r3Var.f28726o = l12;
                            break;
                        }
                    case 1:
                        Long l13 = e3Var.l1();
                        if (l13 == null) {
                            break;
                        } else {
                            r3Var.f28727p = l13;
                            break;
                        }
                    case 2:
                        String q12 = e3Var.q1();
                        if (q12 == null) {
                            break;
                        } else {
                            r3Var.f28723d = q12;
                            break;
                        }
                    case 3:
                        String q13 = e3Var.q1();
                        if (q13 == null) {
                            break;
                        } else {
                            r3Var.f28725i = q13;
                            break;
                        }
                    case 4:
                        String q14 = e3Var.q1();
                        if (q14 == null) {
                            break;
                        } else {
                            r3Var.f28724e = q14;
                            break;
                        }
                    case 5:
                        Long l14 = e3Var.l1();
                        if (l14 == null) {
                            break;
                        } else {
                            r3Var.f28729r = l14;
                            break;
                        }
                    case 6:
                        Long l15 = e3Var.l1();
                        if (l15 == null) {
                            break;
                        } else {
                            r3Var.f28728q = l15;
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
            r3Var.l(concurrentHashMap);
            e3Var.D();
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
            if (this.f28723d.equals(r3Var.f28723d) && this.f28724e.equals(r3Var.f28724e) && this.f28725i.equals(r3Var.f28725i) && this.f28726o.equals(r3Var.f28726o) && this.f28728q.equals(r3Var.f28728q) && io.sentry.util.y.a(this.f28729r, r3Var.f28729r) && io.sentry.util.y.a(this.f28727p, r3Var.f28727p) && io.sentry.util.y.a(this.f28730s, r3Var.f28730s)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f28723d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28723d, this.f28724e, this.f28725i, this.f28726o, this.f28727p, this.f28728q, this.f28729r, this.f28730s);
    }

    public String i() {
        return this.f28725i;
    }

    public String j() {
        return this.f28724e;
    }

    public void k(Long l10, Long l11, Long l12, Long l13) {
        if (this.f28727p == null) {
            this.f28727p = Long.valueOf(l10.longValue() - l11.longValue());
            this.f28726o = Long.valueOf(this.f28726o.longValue() - l11.longValue());
            this.f28729r = Long.valueOf(l12.longValue() - l13.longValue());
            this.f28728q = Long.valueOf(this.f28728q.longValue() - l13.longValue());
        }
    }

    public void l(Map map) {
        this.f28730s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e(StackTraceHelper.ID_KEY).j(iLogger, this.f28723d);
        f3Var.e("trace_id").j(iLogger, this.f28724e);
        f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f28725i);
        f3Var.e("relative_start_ns").j(iLogger, this.f28726o);
        f3Var.e("relative_end_ns").j(iLogger, this.f28727p);
        f3Var.e("relative_cpu_start_ms").j(iLogger, this.f28728q);
        f3Var.e("relative_cpu_end_ms").j(iLogger, this.f28729r);
        Map map = this.f28730s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28730s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public r3(e1 e1Var, Long l10, Long l11) {
        this.f28723d = e1Var.f().toString();
        this.f28724e = e1Var.q().p().toString();
        this.f28725i = e1Var.getName().isEmpty() ? "unknown" : e1Var.getName();
        this.f28726o = l10;
        this.f28728q = l11;
    }
}
