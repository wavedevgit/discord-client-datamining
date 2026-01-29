package io.sentry;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30530d;

    /* renamed from: e  reason: collision with root package name */
    private String f30531e;

    /* renamed from: i  reason: collision with root package name */
    private String f30532i;

    /* renamed from: o  reason: collision with root package name */
    private Long f30533o;

    /* renamed from: p  reason: collision with root package name */
    private Long f30534p;

    /* renamed from: q  reason: collision with root package name */
    private Long f30535q;

    /* renamed from: r  reason: collision with root package name */
    private Long f30536r;

    /* renamed from: s  reason: collision with root package name */
    private Map f30537s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public r3 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            r3 r3Var = new r3();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case -112372011:
                        if (l02.equals("relative_start_ns")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -84607876:
                        if (l02.equals("relative_end_ns")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (l02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3373707:
                        if (l02.equals(StackTraceHelper.NAME_KEY)) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 1270300245:
                        if (l02.equals("trace_id")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1566648660:
                        if (l02.equals("relative_cpu_end_ms")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 1902256621:
                        if (l02.equals("relative_cpu_start_ms")) {
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
                            r3Var.f30533o = m12;
                            break;
                        }
                    case 1:
                        Long m13 = e3Var.m1();
                        if (m13 == null) {
                            break;
                        } else {
                            r3Var.f30534p = m13;
                            break;
                        }
                    case 2:
                        String r12 = e3Var.r1();
                        if (r12 == null) {
                            break;
                        } else {
                            r3Var.f30530d = r12;
                            break;
                        }
                    case 3:
                        String r13 = e3Var.r1();
                        if (r13 == null) {
                            break;
                        } else {
                            r3Var.f30532i = r13;
                            break;
                        }
                    case 4:
                        String r14 = e3Var.r1();
                        if (r14 == null) {
                            break;
                        } else {
                            r3Var.f30531e = r14;
                            break;
                        }
                    case 5:
                        Long m14 = e3Var.m1();
                        if (m14 == null) {
                            break;
                        } else {
                            r3Var.f30536r = m14;
                            break;
                        }
                    case 6:
                        Long m15 = e3Var.m1();
                        if (m15 == null) {
                            break;
                        } else {
                            r3Var.f30535q = m15;
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
            r3Var.l(concurrentHashMap);
            e3Var.y();
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
            if (this.f30530d.equals(r3Var.f30530d) && this.f30531e.equals(r3Var.f30531e) && this.f30532i.equals(r3Var.f30532i) && this.f30533o.equals(r3Var.f30533o) && this.f30535q.equals(r3Var.f30535q) && io.sentry.util.y.a(this.f30536r, r3Var.f30536r) && io.sentry.util.y.a(this.f30534p, r3Var.f30534p) && io.sentry.util.y.a(this.f30537s, r3Var.f30537s)) {
                return true;
            }
        }
        return false;
    }

    public String h() {
        return this.f30530d;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30530d, this.f30531e, this.f30532i, this.f30533o, this.f30534p, this.f30535q, this.f30536r, this.f30537s);
    }

    public String i() {
        return this.f30532i;
    }

    public String j() {
        return this.f30531e;
    }

    public void k(Long l10, Long l11, Long l12, Long l13) {
        if (this.f30534p == null) {
            this.f30534p = Long.valueOf(l10.longValue() - l11.longValue());
            this.f30533o = Long.valueOf(this.f30533o.longValue() - l11.longValue());
            this.f30536r = Long.valueOf(l12.longValue() - l13.longValue());
            this.f30535q = Long.valueOf(this.f30535q.longValue() - l13.longValue());
        }
    }

    public void l(Map map) {
        this.f30537s = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e(StackTraceHelper.ID_KEY).j(iLogger, this.f30530d);
        f3Var.e("trace_id").j(iLogger, this.f30531e);
        f3Var.e(StackTraceHelper.NAME_KEY).j(iLogger, this.f30532i);
        f3Var.e("relative_start_ns").j(iLogger, this.f30533o);
        f3Var.e("relative_end_ns").j(iLogger, this.f30534p);
        f3Var.e("relative_cpu_start_ms").j(iLogger, this.f30535q);
        f3Var.e("relative_cpu_end_ms").j(iLogger, this.f30536r);
        Map map = this.f30537s;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30537s.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public r3(e1 e1Var, Long l10, Long l11) {
        this.f30530d = e1Var.f().toString();
        this.f30531e = e1Var.q().p().toString();
        this.f30532i = e1Var.getName().isEmpty() ? "unknown" : e1Var.getName();
        this.f30533o = l10;
        this.f30535q = l11;
    }
}
