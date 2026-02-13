package yc;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import oe.h0;
import uc.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends e {

    /* renamed from: b  reason: collision with root package name */
    private long f56083b;

    /* renamed from: c  reason: collision with root package name */
    private long[] f56084c;

    /* renamed from: d  reason: collision with root package name */
    private long[] f56085d;

    public d() {
        super(new j());
        this.f56083b = -9223372036854775807L;
        this.f56084c = new long[0];
        this.f56085d = new long[0];
    }

    private static Boolean g(h0 h0Var) {
        boolean z10 = true;
        if (h0Var.H() != 1) {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    private static Object h(h0 h0Var, int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 8) {
                            if (i10 != 10) {
                                if (i10 != 11) {
                                    return null;
                                }
                                return i(h0Var);
                            }
                            return m(h0Var);
                        }
                        return k(h0Var);
                    }
                    return l(h0Var);
                }
                return n(h0Var);
            }
            return g(h0Var);
        }
        return j(h0Var);
    }

    private static Date i(h0 h0Var) {
        Date date = new Date((long) j(h0Var).doubleValue());
        h0Var.V(2);
        return date;
    }

    private static Double j(h0 h0Var) {
        return Double.valueOf(Double.longBitsToDouble(h0Var.A()));
    }

    private static HashMap k(h0 h0Var) {
        int L = h0Var.L();
        HashMap hashMap = new HashMap(L);
        for (int i10 = 0; i10 < L; i10++) {
            String n10 = n(h0Var);
            Object h10 = h(h0Var, o(h0Var));
            if (h10 != null) {
                hashMap.put(n10, h10);
            }
        }
        return hashMap;
    }

    private static HashMap l(h0 h0Var) {
        HashMap hashMap = new HashMap();
        while (true) {
            String n10 = n(h0Var);
            int o10 = o(h0Var);
            if (o10 == 9) {
                return hashMap;
            }
            Object h10 = h(h0Var, o10);
            if (h10 != null) {
                hashMap.put(n10, h10);
            }
        }
    }

    private static ArrayList m(h0 h0Var) {
        int L = h0Var.L();
        ArrayList arrayList = new ArrayList(L);
        for (int i10 = 0; i10 < L; i10++) {
            Object h10 = h(h0Var, o(h0Var));
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        return arrayList;
    }

    private static String n(h0 h0Var) {
        int N = h0Var.N();
        int f10 = h0Var.f();
        h0Var.V(N);
        return new String(h0Var.e(), f10, N);
    }

    private static int o(h0 h0Var) {
        return h0Var.H();
    }

    @Override // yc.e
    protected boolean b(h0 h0Var) {
        return true;
    }

    @Override // yc.e
    protected boolean c(h0 h0Var, long j10) {
        if (o(h0Var) != 2 || !"onMetaData".equals(n(h0Var)) || h0Var.a() == 0 || o(h0Var) != 8) {
            return false;
        }
        HashMap k10 = k(h0Var);
        Object obj = k10.get("duration");
        if (obj instanceof Double) {
            double doubleValue = ((Double) obj).doubleValue();
            if (doubleValue > 0.0d) {
                this.f56083b = (long) (doubleValue * 1000000.0d);
            }
        }
        Object obj2 = k10.get("keyframes");
        if (obj2 instanceof Map) {
            Map map = (Map) obj2;
            Object obj3 = map.get("filepositions");
            Object obj4 = map.get("times");
            if ((obj3 instanceof List) && (obj4 instanceof List)) {
                List list = (List) obj3;
                List list2 = (List) obj4;
                int size = list2.size();
                this.f56084c = new long[size];
                this.f56085d = new long[size];
                for (int i10 = 0; i10 < size; i10++) {
                    Object obj5 = list.get(i10);
                    Object obj6 = list2.get(i10);
                    if ((obj6 instanceof Double) && (obj5 instanceof Double)) {
                        this.f56084c[i10] = (long) (((Double) obj6).doubleValue() * 1000000.0d);
                        this.f56085d[i10] = ((Double) obj5).longValue();
                    } else {
                        this.f56084c = new long[0];
                        this.f56085d = new long[0];
                        break;
                    }
                }
            }
        }
        return false;
    }

    public long d() {
        return this.f56083b;
    }

    public long[] e() {
        return this.f56085d;
    }

    public long[] f() {
        return this.f56084c;
    }
}
