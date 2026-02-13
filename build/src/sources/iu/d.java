package iu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Iterable, Comparator {

    /* renamed from: q  reason: collision with root package name */
    public static final boolean f30991q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f30992r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f30993s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final iu.a[] f30994t = new iu.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f30995u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f30996d;

    /* renamed from: e  reason: collision with root package name */
    private final List f30997e;

    /* renamed from: i  reason: collision with root package name */
    private final iu.a[] f30998i;

    /* renamed from: o  reason: collision with root package name */
    private volatile iu.a[] f30999o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f31000p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f30991q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : zt.d.c().g(c.class)) {
                int size = cVar2.f().size();
                if (size > i10) {
                    cVar = cVar2;
                    i10 = size;
                }
            }
        } else {
            cVar = null;
            i10 = 0;
        }
        if (cVar != null && i10 != 0) {
            TreeSet treeSet = new TreeSet(this);
            for (Map.Entry entry : cVar.f().entrySet()) {
                zt.a aVar = (zt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + M(aVar), ((Integer) entry.getValue()).intValue()));
            }
            o(treeSet);
            boolean z11 = f30992r;
            if (z11) {
                this.f30997e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f30997e = new CopyOnWriteArrayList(treeSet);
            }
            iu.a[] F = F();
            this.f30998i = F;
            this.f30999o = F;
            this.f30996d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f30997e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((iu.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f31000p = b10;
                return;
            }
            this.f31000p = true;
            return;
        }
        this.f30996d = null;
        this.f30997e = Collections.EMPTY_LIST;
        iu.a[] aVarArr = f30994t;
        this.f30998i = aVarArr;
        this.f30999o = aVarArr;
        this.f31000p = false;
    }

    private iu.a[] F() {
        ArrayList arrayList = new ArrayList(this.f30997e.size());
        arrayList.addAll(this.f30997e);
        Collections.reverse(arrayList);
        return (iu.a[]) arrayList.toArray(new iu.a[arrayList.size()]);
    }

    private static long M(zt.a aVar) {
        return zt.c.i(zt.c.m(zt.b.k(aVar), 40587L), 86400L);
    }

    private static void o(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            iu.a aVar = (iu.a) it.next();
            if (aVar.b() == Long.MIN_VALUE) {
                i10 += aVar.a();
                arrayList.add(new a(aVar, i10));
            } else {
                arrayList.add(aVar);
            }
        }
        sortedSet.clear();
        sortedSet.addAll(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String p(zt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.q()), Integer.valueOf(aVar.g()));
    }

    private iu.a[] u() {
        if (!f30991q && !f30992r) {
            return this.f30999o;
        }
        return this.f30998i;
    }

    public static d x() {
        return f30995u;
    }

    public b D(long j10) {
        iu.a[] u10 = u();
        iu.a aVar = null;
        int i10 = 0;
        while (i10 < u10.length) {
            iu.a aVar2 = u10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int E(long j10) {
        iu.a[] u10;
        if (j10 <= 0) {
            return 0;
        }
        for (iu.a aVar : u()) {
            if (j10 > aVar.b()) {
                return 0;
            }
            long b10 = aVar.b() - aVar.a();
            if (j10 > b10) {
                return (int) (j10 - b10);
            }
        }
        return 0;
    }

    public boolean G() {
        return !this.f30997e.isEmpty();
    }

    public boolean H(long j10) {
        if (j10 <= 0) {
            return false;
        }
        iu.a[] u10 = u();
        for (int i10 = 0; i10 < u10.length; i10++) {
            int i11 = (u10[i10].b() > j10 ? 1 : (u10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (u10[i10].a() != 1) {
                    return false;
                }
                return true;
            } else if (i11 < 0) {
                break;
            }
        }
        return false;
    }

    public long K(long j10) {
        if (j10 <= 0) {
            return j10 + 63072000;
        }
        iu.a[] u10 = u();
        boolean z10 = this.f31000p;
        for (iu.a aVar : u10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = zt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean L() {
        return this.f31000p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        zt.a c10 = bVar.c();
        zt.a c11 = bVar2.c();
        int f10 = c10.f();
        int f11 = c11.f();
        if (f10 < f11) {
            return -1;
        }
        if (f10 > f11) {
            return 1;
        }
        int q10 = c10.q();
        int q11 = c11.q();
        if (q10 < q11) {
            return -1;
        }
        if (q10 > q11) {
            return 1;
        }
        int g10 = c10.g();
        int g11 = c11.g();
        if (g10 < g11) {
            return -1;
        }
        if (g10 != g11) {
            return 1;
        }
        return 0;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(u())).iterator();
    }

    public long j(long j10) {
        iu.a[] u10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (iu.a aVar : u()) {
                if (aVar.d() < j11) {
                    return zt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    public zt.a q() {
        if (G()) {
            return this.f30996d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f30996d);
        if (this.f30996d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(p(q()));
        }
        sb2.append(",EVENTS=[");
        if (G()) {
            boolean z10 = true;
            for (Object obj : this.f30997e) {
                if (z10) {
                    z10 = false;
                } else {
                    sb2.append('|');
                }
                sb2.append(obj);
            }
        } else {
            sb2.append("NOT SUPPORTED");
        }
        sb2.append("]]");
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements iu.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final zt.a date;
        private final int shift;

        a(zt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // iu.b
        public int a() {
            return this.shift;
        }

        @Override // iu.a
        public long b() {
            return this._utc;
        }

        @Override // iu.b
        public zt.a c() {
            return this.date;
        }

        @Override // iu.a
        public long d() {
            return this._raw;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            sb2.append(b.class.getName());
            sb2.append('[');
            sb2.append(d.p(this.date));
            sb2.append(": utc=");
            sb2.append(this._utc);
            sb2.append(", raw=");
            sb2.append(this._raw);
            sb2.append(" (shift=");
            sb2.append(this.shift);
            sb2.append(")]");
            return sb2.toString();
        }

        a(iu.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
