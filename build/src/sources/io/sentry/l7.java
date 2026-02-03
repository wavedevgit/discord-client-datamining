package io.sentry;

import io.sentry.e5;
import io.sentry.protocol.x;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l7 extends e5 implements w1 {
    private File A;
    private int E;
    private Date G;
    private Map K;
    private io.sentry.protocol.x D = new io.sentry.protocol.x();
    private String B = "replay_event";
    private b C = b.SESSION;
    private List I = new ArrayList();
    private List J = new ArrayList();
    private List H = new ArrayList();
    private Date F = k.d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public l7 a(e3 e3Var, ILogger iLogger) {
            e5.a aVar = new e5.a();
            l7 l7Var = new l7();
            e3Var.r();
            String str = null;
            b bVar = null;
            Integer num = null;
            Date date = null;
            HashMap hashMap = null;
            io.sentry.protocol.x xVar = null;
            Date date2 = null;
            List list = null;
            List list2 = null;
            List list3 = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -454767501:
                        if (m02.equals("replay_id")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -264026847:
                        if (m02.equals("replay_start_timestamp")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3598564:
                        if (m02.equals("urls")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 55126294:
                        if (m02.equals("timestamp")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 329864193:
                        if (m02.equals("error_ids")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 724602046:
                        if (m02.equals("trace_ids")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1055447186:
                        if (m02.equals("replay_type")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1077649831:
                        if (m02.equals("segment_id")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        xVar = (io.sentry.protocol.x) e3Var.H0(iLogger, new x.a());
                        break;
                    case 1:
                        date2 = e3Var.s0(iLogger);
                        break;
                    case 2:
                        str = e3Var.r1();
                        break;
                    case 3:
                        list = (List) e3Var.V1();
                        break;
                    case 4:
                        date = e3Var.s0(iLogger);
                        break;
                    case 5:
                        list2 = (List) e3Var.V1();
                        break;
                    case 6:
                        list3 = (List) e3Var.V1();
                        break;
                    case 7:
                        bVar = (b) e3Var.H0(iLogger, new b.a());
                        break;
                    case '\b':
                        num = e3Var.k1();
                        break;
                    default:
                        if (!aVar.a(l7Var, m02, e3Var, iLogger)) {
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.v1(iLogger, hashMap, m02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            e3Var.y();
            if (str != null) {
                l7Var.r0(str);
            }
            if (bVar != null) {
                l7Var.n0(bVar);
            }
            if (num != null) {
                l7Var.o0(num.intValue());
            }
            if (date != null) {
                l7Var.p0(date);
            }
            l7Var.l0(xVar);
            l7Var.m0(date2);
            l7Var.t0(list);
            l7Var.k0(list2);
            l7Var.q0(list3);
            l7Var.s0(hashMap);
            return l7Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements w1 {
        SESSION,
        BUFFER;

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
            f3Var.f(name().toLowerCase(Locale.ROOT));
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && l7.class == obj.getClass()) {
            l7 l7Var = (l7) obj;
            if (this.E == l7Var.E && io.sentry.util.y.a(this.B, l7Var.B) && this.C == l7Var.C && io.sentry.util.y.a(this.D, l7Var.D) && io.sentry.util.y.a(this.H, l7Var.H) && io.sentry.util.y.a(this.I, l7Var.I) && io.sentry.util.y.a(this.J, l7Var.J)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.B, this.C, this.D, Integer.valueOf(this.E), this.H, this.I, this.J);
    }

    public Date i0() {
        return this.F;
    }

    public File j0() {
        return this.A;
    }

    public void k0(List list) {
        this.I = list;
    }

    public void l0(io.sentry.protocol.x xVar) {
        this.D = xVar;
    }

    public void m0(Date date) {
        this.G = date;
    }

    public void n0(b bVar) {
        this.C = bVar;
    }

    public void o0(int i10) {
        this.E = i10;
    }

    public void p0(Date date) {
        this.F = date;
    }

    public void q0(List list) {
        this.J = list;
    }

    public void r0(String str) {
        this.B = str;
    }

    public void s0(Map map) {
        this.K = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("type").f(this.B);
        f3Var.e("replay_type").j(iLogger, this.C);
        f3Var.e("segment_id").b(this.E);
        f3Var.e("timestamp").j(iLogger, this.F);
        if (this.D != null) {
            f3Var.e("replay_id").j(iLogger, this.D);
        }
        if (this.G != null) {
            f3Var.e("replay_start_timestamp").j(iLogger, this.G);
        }
        if (this.H != null) {
            f3Var.e("urls").j(iLogger, this.H);
        }
        if (this.I != null) {
            f3Var.e("error_ids").j(iLogger, this.I);
        }
        if (this.J != null) {
            f3Var.e("trace_ids").j(iLogger, this.J);
        }
        new e5.b().a(this, f3Var, iLogger);
        Map map = this.K;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.K.get(str));
            }
        }
        f3Var.y();
    }

    public void t0(List list) {
        this.H = list;
    }

    public void u0(File file) {
        this.A = file;
    }
}
