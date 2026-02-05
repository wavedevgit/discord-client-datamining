package wt;

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
    public static final boolean f53297q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f53298r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f53299s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final wt.a[] f53300t = new wt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f53301u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f53302d;

    /* renamed from: e  reason: collision with root package name */
    private final List f53303e;

    /* renamed from: i  reason: collision with root package name */
    private final wt.a[] f53304i;

    /* renamed from: o  reason: collision with root package name */
    private volatile wt.a[] f53305o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f53306p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f53297q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : nt.d.c().g(c.class)) {
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
                nt.a aVar = (nt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + J(aVar), ((Integer) entry.getValue()).intValue()));
            }
            j(treeSet);
            boolean z11 = f53298r;
            if (z11) {
                this.f53303e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f53303e = new CopyOnWriteArrayList(treeSet);
            }
            wt.a[] C = C();
            this.f53304i = C;
            this.f53305o = C;
            this.f53302d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f53303e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((wt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f53306p = b10;
                return;
            }
            this.f53306p = true;
            return;
        }
        this.f53302d = null;
        this.f53303e = Collections.EMPTY_LIST;
        wt.a[] aVarArr = f53300t;
        this.f53304i = aVarArr;
        this.f53305o = aVarArr;
        this.f53306p = false;
    }

    private wt.a[] C() {
        ArrayList arrayList = new ArrayList(this.f53303e.size());
        arrayList.addAll(this.f53303e);
        Collections.reverse(arrayList);
        return (wt.a[]) arrayList.toArray(new wt.a[arrayList.size()]);
    }

    private static long J(nt.a aVar) {
        return nt.c.i(nt.c.m(nt.b.k(aVar), 40587L), 86400L);
    }

    private static void j(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            wt.a aVar = (wt.a) it.next();
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
    public static String o(nt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.t()), Integer.valueOf(aVar.g()));
    }

    private wt.a[] r() {
        if (!f53297q && !f53298r) {
            return this.f53305o;
        }
        return this.f53304i;
    }

    public static d w() {
        return f53301u;
    }

    public boolean D() {
        return !this.f53303e.isEmpty();
    }

    public boolean G(long j10) {
        if (j10 <= 0) {
            return false;
        }
        wt.a[] r10 = r();
        for (int i10 = 0; i10 < r10.length; i10++) {
            int i11 = (r10[i10].b() > j10 ? 1 : (r10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (r10[i10].a() != 1) {
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
        wt.a[] r10 = r();
        boolean z10 = this.f53306p;
        for (wt.a aVar : r10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = nt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean I() {
        return this.f53306p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        nt.a c10 = bVar.c();
        nt.a c11 = bVar2.c();
        int f10 = c10.f();
        int f11 = c11.f();
        if (f10 < f11) {
            return -1;
        }
        if (f10 > f11) {
            return 1;
        }
        int t10 = c10.t();
        int t11 = c11.t();
        if (t10 < t11) {
            return -1;
        }
        if (t10 > t11) {
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
        wt.a[] r10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (wt.a aVar : r()) {
                if (aVar.d() < j11) {
                    return nt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(r())).iterator();
    }

    public nt.a p() {
        if (D()) {
            return this.f53302d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f53302d);
        if (this.f53302d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(o(p()));
        }
        sb2.append(",EVENTS=[");
        if (D()) {
            boolean z10 = true;
            for (Object obj : this.f53303e) {
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

    public b x(long j10) {
        wt.a[] r10 = r();
        wt.a aVar = null;
        int i10 = 0;
        while (i10 < r10.length) {
            wt.a aVar2 = r10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int y(long j10) {
        wt.a[] r10;
        if (j10 <= 0) {
            return 0;
        }
        for (wt.a aVar : r()) {
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
    public static class a implements wt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final nt.a date;
        private final int shift;

        a(nt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // wt.b
        public int a() {
            return this.shift;
        }

        @Override // wt.a
        public long b() {
            return this._utc;
        }

        @Override // wt.b
        public nt.a c() {
            return this.date;
        }

        @Override // wt.a
        public long d() {
            return this._raw;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            sb2.append(b.class.getName());
            sb2.append('[');
            sb2.append(d.o(this.date));
            sb2.append(": utc=");
            sb2.append(this._utc);
            sb2.append(", raw=");
            sb2.append(this._raw);
            sb2.append(" (shift=");
            sb2.append(this.shift);
            sb2.append(")]");
            return sb2.toString();
        }

        a(wt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
