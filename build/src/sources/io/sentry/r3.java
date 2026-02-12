package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29859d;

    /* renamed from: e  reason: collision with root package name */
    private String f29860e;

    /* renamed from: i  reason: collision with root package name */
    private String f29861i;

    /* renamed from: o  reason: collision with root package name */
    private Long f29862o;

    /* renamed from: p  reason: collision with root package name */
    private Long f29863p;

    /* renamed from: q  reason: collision with root package name */
    private Long f29864q;

    /* renamed from: r  reason: collision with root package name */
    private Long f29865r;

    /* renamed from: s  reason: collision with root package name */
    private Map f29866s;

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
                        Long n12 = e3Var.n1();
                        if (n12 == null) {
                            break;
                        } else {
                            r3Var.f29862o = n12;
                            break;
                        }
                    case 1:
                        Long n13 = e3Var.n1();
                        if (n13 == null) {
                            break;
                        } else {
                            r3Var.f29863p = n13;
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            r3Var.f29859d = r12;
                            break;
                        }
                    case 3:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            r3Var.f29861i = r13;
                            break;
                        }
                    case 4:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            r3Var.f29860e = r14;
                            break;
                        }
                    case 5:
                        Long n14 = e3Var.n1();
                        if (n14 == null) {
                            break;
                        } else {
                            r3Var.f29865r = n14;
                            break;
                        }
                    case 6:
                        Long n15 = e3Var.n1();
                        if (n15 == null) {
                            break;
                        } else {
                            r3Var.f29864q = n15;
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
            if (this.f29859d.equals(r3Var.f29859d) && this.f29860e.equals(r3Var.f29860e) && this.f29861i.equals(r3Var.f29861i) && this.f29862o.equals(r3Var.f29862o) && this.f29864q.equals(r3Var.f29864q) && io.sentry.util.y.a(this.f29865r, r3Var.f29865r) && io.sentry.util.y.a(this.f29863p, r3Var.f29863p) && io.sentry.util.y.a(this.f29866s, r3Var.f29866s)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f29859d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f29859d, this.f29860e, this.f29861i, this.f29862o, this.f29863p, this.f29864q, this.f29865r, this.f29866s);
    }

    public String i() {
        return this.f29861i;
    }

    public String j() {
        return this.f29860e;
    }

    public void k(Long l10, Long l11, Long l12, Long l13) {
        if (this.f29863p == null) {
            this.f29863p = Long.valueOf(l10.longValue() - l11.longValue());
            this.f29862o = Long.valueOf(this.f29862o.longValue() - l11.longValue());
            this.f29865r = Long.valueOf(l12.longValue() - l13.longValue());
            this.f29864q = Long.valueOf(this.f29864q.longValue() - l13.longValue());
        }
    }

    public void l(Map map) {
        this.f29866s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e(StackTraceHelper.ID_KEY).j(iLogger, this.f29859d);
        f3Var.e("trace_id").j(iLogger, this.f29860e);
        f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f29861i);
        f3Var.e("relative_start_ns").j(iLogger, this.f29862o);
        f3Var.e("relative_end_ns").j(iLogger, this.f29863p);
        f3Var.e("relative_cpu_start_ms").j(iLogger, this.f29864q);
        f3Var.e("relative_cpu_end_ms").j(iLogger, this.f29865r);
        Map map = this.f29866s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29866s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public r3(e1 e1Var, Long l10, Long l11) {
        this.f29859d = e1Var.f().toString();
        this.f29860e = e1Var.q().p().toString();
        this.f29861i = e1Var.getName().isEmpty() ? "unknown" : e1Var.getName();
        this.f29862o = l10;
        this.f29864q = l11;
    }
}
