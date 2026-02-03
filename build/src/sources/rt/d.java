package rt;

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
    public static final boolean f48699q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f48700r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f48701s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final rt.a[] f48702t = new rt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f48703u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f48704d;

    /* renamed from: e  reason: collision with root package name */
    private final List f48705e;

    /* renamed from: i  reason: collision with root package name */
    private final rt.a[] f48706i;

    /* renamed from: o  reason: collision with root package name */
    private volatile rt.a[] f48707o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f48708p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f48699q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : ht.d.c().g(c.class)) {
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
                ht.a aVar = (ht.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + J(aVar), ((Integer) entry.getValue()).intValue()));
            }
            h(treeSet);
            boolean z11 = f48700r;
            if (z11) {
                this.f48705e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f48705e = new CopyOnWriteArrayList(treeSet);
            }
            rt.a[] x10 = x();
            this.f48706i = x10;
            this.f48707o = x10;
            this.f48704d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f48705e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((rt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f48708p = b10;
                return;
            }
            this.f48708p = true;
            return;
        }
        this.f48704d = null;
        this.f48705e = Collections.EMPTY_LIST;
        rt.a[] aVarArr = f48702t;
        this.f48706i = aVarArr;
        this.f48707o = aVarArr;
        this.f48708p = false;
    }

    private static long J(ht.a aVar) {
        return ht.c.i(ht.c.m(ht.b.k(aVar), 40587L), 86400L);
    }

    private static void h(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            rt.a aVar = (rt.a) it.next();
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
    public static String i(ht.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.r()), Integer.valueOf(aVar.g()));
    }

    private rt.a[] n() {
        if (!f48699q && !f48700r) {
            return this.f48707o;
        }
        return this.f48706i;
    }

    public static d o() {
        return f48703u;
    }

    private rt.a[] x() {
        ArrayList arrayList = new ArrayList(this.f48705e.size());
        arrayList.addAll(this.f48705e);
        Collections.reverse(arrayList);
        return (rt.a[]) arrayList.toArray(new rt.a[arrayList.size()]);
    }

    public boolean D() {
        return !this.f48705e.isEmpty();
    }

    public boolean G(long j10) {
        if (j10 <= 0) {
            return false;
        }
        rt.a[] n10 = n();
        for (int i10 = 0; i10 < n10.length; i10++) {
            int i11 = (n10[i10].b() > j10 ? 1 : (n10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (n10[i10].a() != 1) {
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
        rt.a[] n10 = n();
        boolean z10 = this.f48708p;
        for (rt.a aVar : n10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = ht.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean I() {
        return this.f48708p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        ht.a c10 = bVar.c();
        ht.a c11 = bVar2.c();
        int f10 = c10.f();
        int f11 = c11.f();
        if (f10 < f11) {
            return -1;
        }
        if (f10 > f11) {
            return 1;
        }
        int r10 = c10.r();
        int r11 = c11.r();
        if (r10 < r11) {
            return -1;
        }
        if (r10 > r11) {
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

    public long g(long j10) {
        rt.a[] n10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (rt.a aVar : n()) {
                if (aVar.d() < j11) {
                    return ht.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(n())).iterator();
    }

    public ht.a j() {
        if (D()) {
            return this.f48704d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public b t(long j10) {
        rt.a[] n10 = n();
        rt.a aVar = null;
        int i10 = 0;
        while (i10 < n10.length) {
            rt.a aVar2 = n10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f48704d);
        if (this.f48704d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(i(j()));
        }
        sb2.append(",EVENTS=[");
        if (D()) {
            boolean z10 = true;
            for (Object obj : this.f48705e) {
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

    public int v(long j10) {
        rt.a[] n10;
        if (j10 <= 0) {
            return 0;
        }
        for (rt.a aVar : n()) {
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
    public static class a implements rt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final ht.a date;
        private final int shift;

        a(ht.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // rt.b
        public int a() {
            return this.shift;
        }

        @Override // rt.a
        public long b() {
            return this._utc;
        }

        @Override // rt.b
        public ht.a c() {
            return this.date;
        }

        @Override // rt.a
        public long d() {
            return this._raw;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            sb2.append(b.class.getName());
            sb2.append('[');
            sb2.append(d.i(this.date));
            sb2.append(": utc=");
            sb2.append(this._utc);
            sb2.append(", raw=");
            sb2.append(this._raw);
            sb2.append(" (shift=");
            sb2.append(this.shift);
            sb2.append(")]");
            return sb2.toString();
        }

        a(rt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
