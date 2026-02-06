package yt;

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
    public static final boolean f55612q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f55613r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f55614s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final yt.a[] f55615t = new yt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f55616u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f55617d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55618e;

    /* renamed from: i  reason: collision with root package name */
    private final yt.a[] f55619i;

    /* renamed from: o  reason: collision with root package name */
    private volatile yt.a[] f55620o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f55621p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f55612q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : pt.d.c().g(c.class)) {
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
                pt.a aVar = (pt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + M(aVar), ((Integer) entry.getValue()).intValue()));
            }
            l(treeSet);
            boolean z11 = f55613r;
            if (z11) {
                this.f55618e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f55618e = new CopyOnWriteArrayList(treeSet);
            }
            yt.a[] F = F();
            this.f55619i = F;
            this.f55620o = F;
            this.f55617d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f55618e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((yt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f55621p = b10;
                return;
            }
            this.f55621p = true;
            return;
        }
        this.f55617d = null;
        this.f55618e = Collections.EMPTY_LIST;
        yt.a[] aVarArr = f55615t;
        this.f55619i = aVarArr;
        this.f55620o = aVarArr;
        this.f55621p = false;
    }

    private yt.a[] F() {
        ArrayList arrayList = new ArrayList(this.f55618e.size());
        arrayList.addAll(this.f55618e);
        Collections.reverse(arrayList);
        return (yt.a[]) arrayList.toArray(new yt.a[arrayList.size()]);
    }

    private static long M(pt.a aVar) {
        return pt.c.i(pt.c.m(pt.b.k(aVar), 40587L), 86400L);
    }

    private static void l(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            yt.a aVar = (yt.a) it.next();
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
    public static String o(pt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.r()), Integer.valueOf(aVar.g()));
    }

    private yt.a[] s() {
        if (!f55612q && !f55613r) {
            return this.f55620o;
        }
        return this.f55619i;
    }

    public static d u() {
        return f55616u;
    }

    public b C(long j10) {
        yt.a[] s10 = s();
        yt.a aVar = null;
        int i10 = 0;
        while (i10 < s10.length) {
            yt.a aVar2 = s10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int E(long j10) {
        yt.a[] s10;
        if (j10 <= 0) {
            return 0;
        }
        for (yt.a aVar : s()) {
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
        return !this.f55618e.isEmpty();
    }

    public boolean H(long j10) {
        if (j10 <= 0) {
            return false;
        }
        yt.a[] s10 = s();
        for (int i10 = 0; i10 < s10.length; i10++) {
            int i11 = (s10[i10].b() > j10 ? 1 : (s10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (s10[i10].a() != 1) {
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
        yt.a[] s10 = s();
        boolean z10 = this.f55621p;
        for (yt.a aVar : s10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = pt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean L() {
        return this.f55621p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        pt.a c10 = bVar.c();
        pt.a c11 = bVar2.c();
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
        yt.a[] s10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (yt.a aVar : s()) {
                if (aVar.d() < j11) {
                    return pt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(s())).iterator();
    }

    public pt.a p() {
        if (G()) {
            return this.f55617d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f55617d);
        if (this.f55617d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(o(p()));
        }
        sb2.append(",EVENTS=[");
        if (G()) {
            boolean z10 = true;
            for (Object obj : this.f55618e) {
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
    public static class a implements yt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final pt.a date;
        private final int shift;

        a(pt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // yt.b
        public int a() {
            return this.shift;
        }

        @Override // yt.a
        public long b() {
            return this._utc;
        }

        @Override // yt.b
        public pt.a c() {
            return this.date;
        }

        @Override // yt.a
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

        a(yt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
