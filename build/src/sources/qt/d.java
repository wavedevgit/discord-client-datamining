package qt;

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
    public static final boolean f47673q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f47674r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f47675s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final qt.a[] f47676t = new qt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f47677u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f47678d;

    /* renamed from: e  reason: collision with root package name */
    private final List f47679e;

    /* renamed from: i  reason: collision with root package name */
    private final qt.a[] f47680i;

    /* renamed from: o  reason: collision with root package name */
    private volatile qt.a[] f47681o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f47682p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f47673q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : gt.d.c().g(c.class)) {
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
                gt.a aVar = (gt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + J(aVar), ((Integer) entry.getValue()).intValue()));
            }
            j(treeSet);
            boolean z11 = f47674r;
            if (z11) {
                this.f47679e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f47679e = new CopyOnWriteArrayList(treeSet);
            }
            qt.a[] x10 = x();
            this.f47680i = x10;
            this.f47681o = x10;
            this.f47678d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f47679e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((qt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f47682p = b10;
                return;
            }
            this.f47682p = true;
            return;
        }
        this.f47678d = null;
        this.f47679e = Collections.EMPTY_LIST;
        qt.a[] aVarArr = f47676t;
        this.f47680i = aVarArr;
        this.f47681o = aVarArr;
        this.f47682p = false;
    }

    private static long J(gt.a aVar) {
        return gt.c.i(gt.c.m(gt.b.k(aVar), 40587L), 86400L);
    }

    private static void j(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            qt.a aVar = (qt.a) it.next();
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
    public static String k(gt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.u()), Integer.valueOf(aVar.g()));
    }

    private qt.a[] n() {
        if (!f47673q && !f47674r) {
            return this.f47681o;
        }
        return this.f47680i;
    }

    public static d p() {
        return f47677u;
    }

    private qt.a[] x() {
        ArrayList arrayList = new ArrayList(this.f47679e.size());
        arrayList.addAll(this.f47679e);
        Collections.reverse(arrayList);
        return (qt.a[]) arrayList.toArray(new qt.a[arrayList.size()]);
    }

    public boolean D() {
        return !this.f47679e.isEmpty();
    }

    public boolean G(long j10) {
        if (j10 <= 0) {
            return false;
        }
        qt.a[] n10 = n();
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
        qt.a[] n10 = n();
        boolean z10 = this.f47682p;
        for (qt.a aVar : n10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = gt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean I() {
        return this.f47682p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        gt.a c10 = bVar.c();
        gt.a c11 = bVar2.c();
        int f10 = c10.f();
        int f11 = c11.f();
        if (f10 < f11) {
            return -1;
        }
        if (f10 > f11) {
            return 1;
        }
        int u10 = c10.u();
        int u11 = c11.u();
        if (u10 < u11) {
            return -1;
        }
        if (u10 > u11) {
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
        qt.a[] n10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (qt.a aVar : n()) {
                if (aVar.d() < j11) {
                    return gt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(n())).iterator();
    }

    public gt.a m() {
        if (D()) {
            return this.f47678d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f47678d);
        if (this.f47678d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(k(m()));
        }
        sb2.append(",EVENTS=[");
        if (D()) {
            boolean z10 = true;
            for (Object obj : this.f47679e) {
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

    public b v(long j10) {
        qt.a[] n10 = n();
        qt.a aVar = null;
        int i10 = 0;
        while (i10 < n10.length) {
            qt.a aVar2 = n10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int w(long j10) {
        qt.a[] n10;
        if (j10 <= 0) {
            return 0;
        }
        for (qt.a aVar : n()) {
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
    public static class a implements qt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final gt.a date;
        private final int shift;

        a(gt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // qt.b
        public int a() {
            return this.shift;
        }

        @Override // qt.a
        public long b() {
            return this._utc;
        }

        @Override // qt.b
        public gt.a c() {
            return this.date;
        }

        @Override // qt.a
        public long d() {
            return this._raw;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            sb2.append(b.class.getName());
            sb2.append('[');
            sb2.append(d.k(this.date));
            sb2.append(": utc=");
            sb2.append(this._utc);
            sb2.append(", raw=");
            sb2.append(this._raw);
            sb2.append(" (shift=");
            sb2.append(this.shift);
            sb2.append(")]");
            return sb2.toString();
        }

        a(qt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
