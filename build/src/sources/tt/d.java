package tt;

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
    public static final boolean f50276q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f50277r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f50278s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final tt.a[] f50279t = new tt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f50280u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f50281d;

    /* renamed from: e  reason: collision with root package name */
    private final List f50282e;

    /* renamed from: i  reason: collision with root package name */
    private final tt.a[] f50283i;

    /* renamed from: o  reason: collision with root package name */
    private volatile tt.a[] f50284o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f50285p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f50276q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : kt.d.c().g(c.class)) {
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
                kt.a aVar = (kt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + J(aVar), ((Integer) entry.getValue()).intValue()));
            }
            m(treeSet);
            boolean z11 = f50277r;
            if (z11) {
                this.f50282e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f50282e = new CopyOnWriteArrayList(treeSet);
            }
            tt.a[] z12 = z();
            this.f50283i = z12;
            this.f50284o = z12;
            this.f50281d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f50282e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((tt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f50285p = b10;
                return;
            }
            this.f50285p = true;
            return;
        }
        this.f50281d = null;
        this.f50282e = Collections.EMPTY_LIST;
        tt.a[] aVarArr = f50279t;
        this.f50283i = aVarArr;
        this.f50284o = aVarArr;
        this.f50285p = false;
    }

    private static long J(kt.a aVar) {
        return kt.c.i(kt.c.m(kt.b.k(aVar), 40587L), 86400L);
    }

    private static void m(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            tt.a aVar = (tt.a) it.next();
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
    public static String n(kt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.s()), Integer.valueOf(aVar.g()));
    }

    private tt.a[] q() {
        if (!f50276q && !f50277r) {
            return this.f50284o;
        }
        return this.f50283i;
    }

    public static d r() {
        return f50280u;
    }

    private tt.a[] z() {
        ArrayList arrayList = new ArrayList(this.f50282e.size());
        arrayList.addAll(this.f50282e);
        Collections.reverse(arrayList);
        return (tt.a[]) arrayList.toArray(new tt.a[arrayList.size()]);
    }

    public boolean D() {
        return !this.f50282e.isEmpty();
    }

    public boolean G(long j10) {
        if (j10 <= 0) {
            return false;
        }
        tt.a[] q10 = q();
        for (int i10 = 0; i10 < q10.length; i10++) {
            int i11 = (q10[i10].b() > j10 ? 1 : (q10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (q10[i10].a() != 1) {
                    return false;
                }
                return true;
            } else if (i11 < 0) {
                break;
            }
        }
        return false;
    }

    public long H(long j10) {
        if (j10 <= 0) {
            return j10 + 63072000;
        }
        tt.a[] q10 = q();
        boolean z10 = this.f50285p;
        for (tt.a aVar : q10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = kt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean I() {
        return this.f50285p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        kt.a c10 = bVar.c();
        kt.a c11 = bVar2.c();
        int f10 = c10.f();
        int f11 = c11.f();
        if (f10 < f11) {
            return -1;
        }
        if (f10 > f11) {
            return 1;
        }
        int s10 = c10.s();
        int s11 = c11.s();
        if (s10 < s11) {
            return -1;
        }
        if (s10 > s11) {
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

    public long h(long j10) {
        tt.a[] q10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (tt.a aVar : q()) {
                if (aVar.d() < j11) {
                    return kt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(q())).iterator();
    }

    public kt.a o() {
        if (D()) {
            return this.f50281d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f50281d);
        if (this.f50281d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(n(o()));
        }
        sb2.append(",EVENTS=[");
        if (D()) {
            boolean z10 = true;
            for (Object obj : this.f50282e) {
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

    public b w(long j10) {
        tt.a[] q10 = q();
        tt.a aVar = null;
        int i10 = 0;
        while (i10 < q10.length) {
            tt.a aVar2 = q10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int x(long j10) {
        tt.a[] q10;
        if (j10 <= 0) {
            return 0;
        }
        for (tt.a aVar : q()) {
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

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements tt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final kt.a date;
        private final int shift;

        a(kt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // tt.b
        public int a() {
            return this.shift;
        }

        @Override // tt.a
        public long b() {
            return this._utc;
        }

        @Override // tt.b
        public kt.a c() {
            return this.date;
        }

        @Override // tt.a
        public long d() {
            return this._raw;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            sb2.append(b.class.getName());
            sb2.append('[');
            sb2.append(d.n(this.date));
            sb2.append(": utc=");
            sb2.append(this._utc);
            sb2.append(", raw=");
            sb2.append(this._raw);
            sb2.append(" (shift=");
            sb2.append(this.shift);
            sb2.append(")]");
            return sb2.toString();
        }

        a(tt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
