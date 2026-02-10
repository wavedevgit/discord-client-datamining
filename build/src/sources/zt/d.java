package zt;

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
    public static final boolean f56685q = Boolean.getBoolean("net.time4j.scale.leapseconds.suppressed");

    /* renamed from: r  reason: collision with root package name */
    public static final boolean f56686r = Boolean.getBoolean("net.time4j.scale.leapseconds.final");

    /* renamed from: s  reason: collision with root package name */
    public static final String f56687s = System.getProperty("net.time4j.scale.leapseconds.path", "data/leapseconds.data");

    /* renamed from: t  reason: collision with root package name */
    private static final zt.a[] f56688t = new zt.a[0];

    /* renamed from: u  reason: collision with root package name */
    private static final d f56689u = new d();

    /* renamed from: d  reason: collision with root package name */
    private final c f56690d;

    /* renamed from: e  reason: collision with root package name */
    private final List f56691e;

    /* renamed from: i  reason: collision with root package name */
    private final zt.a[] f56692i;

    /* renamed from: o  reason: collision with root package name */
    private volatile zt.a[] f56693o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f56694p;

    private d() {
        c cVar;
        int i10;
        boolean z10 = false;
        if (!f56685q) {
            cVar = null;
            i10 = 0;
            for (c cVar2 : qt.d.c().g(c.class)) {
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
                qt.a aVar = (qt.a) entry.getKey();
                treeSet.add(new a(aVar, Long.MIN_VALUE, (-62985601) + M(aVar), ((Integer) entry.getValue()).intValue()));
            }
            h(treeSet);
            boolean z11 = f56686r;
            if (z11) {
                this.f56691e = Collections.unmodifiableList(new ArrayList(treeSet));
            } else {
                this.f56691e = new CopyOnWriteArrayList(treeSet);
            }
            zt.a[] F = F();
            this.f56692i = F;
            this.f56693o = F;
            this.f56690d = cVar;
            if (z11) {
                boolean b10 = cVar.b();
                if (b10) {
                    Iterator it = this.f56691e.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            if (((zt.a) it.next()).a() < 0) {
                                z10 = true;
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    b10 = z10;
                }
                this.f56694p = b10;
                return;
            }
            this.f56694p = true;
            return;
        }
        this.f56690d = null;
        this.f56691e = Collections.EMPTY_LIST;
        zt.a[] aVarArr = f56688t;
        this.f56692i = aVarArr;
        this.f56693o = aVarArr;
        this.f56694p = false;
    }

    private zt.a[] F() {
        ArrayList arrayList = new ArrayList(this.f56691e.size());
        arrayList.addAll(this.f56691e);
        Collections.reverse(arrayList);
        return (zt.a[]) arrayList.toArray(new zt.a[arrayList.size()]);
    }

    private static long M(qt.a aVar) {
        return qt.c.i(qt.c.m(qt.b.k(aVar), 40587L), 86400L);
    }

    private static void h(SortedSet sortedSet) {
        ArrayList arrayList = new ArrayList(sortedSet.size());
        Iterator it = sortedSet.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            zt.a aVar = (zt.a) it.next();
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
    public static String i(qt.a aVar) {
        return String.format("%1$04d-%2$02d-%3$02d", Integer.valueOf(aVar.f()), Integer.valueOf(aVar.r()), Integer.valueOf(aVar.g()));
    }

    private zt.a[] p() {
        if (!f56685q && !f56686r) {
            return this.f56693o;
        }
        return this.f56692i;
    }

    public static d s() {
        return f56689u;
    }

    public b C(long j10) {
        zt.a[] p10 = p();
        zt.a aVar = null;
        int i10 = 0;
        while (i10 < p10.length) {
            zt.a aVar2 = p10[i10];
            if (j10 >= aVar2.b()) {
                break;
            }
            i10++;
            aVar = aVar2;
        }
        return aVar;
    }

    public int E(long j10) {
        zt.a[] p10;
        if (j10 <= 0) {
            return 0;
        }
        for (zt.a aVar : p()) {
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
        return !this.f56691e.isEmpty();
    }

    public boolean H(long j10) {
        if (j10 <= 0) {
            return false;
        }
        zt.a[] p10 = p();
        for (int i10 = 0; i10 < p10.length; i10++) {
            int i11 = (p10[i10].b() > j10 ? 1 : (p10[i10].b() == j10 ? 0 : -1));
            if (i11 == 0) {
                if (p10[i10].a() != 1) {
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
        zt.a[] p10 = p();
        boolean z10 = this.f56694p;
        for (zt.a aVar : p10) {
            if (aVar.b() - aVar.a() < j10 || (z10 && aVar.a() < 0 && aVar.b() < j10)) {
                j10 = qt.c.f(j10, aVar.d() - aVar.b());
                break;
            }
        }
        return j10 + 63072000;
    }

    public boolean L() {
        return this.f56694p;
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(b bVar, b bVar2) {
        qt.a c10 = bVar.c();
        qt.a c11 = bVar2.c();
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
        zt.a[] p10;
        long j11 = j10 - 63072000;
        if (j10 > 0) {
            for (zt.a aVar : p()) {
                if (aVar.d() < j11) {
                    return qt.c.f(j11, aVar.b() - aVar.d());
                }
            }
        }
        return j11;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return Collections.unmodifiableList(Arrays.asList(p())).iterator();
    }

    public qt.a j() {
        if (G()) {
            return this.f56690d.d();
        }
        throw new IllegalStateException("Leap seconds not activated.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) RecyclerView.ItemAnimator.FLAG_MOVED);
        sb2.append("[PROVIDER=");
        sb2.append(this.f56690d);
        if (this.f56690d != null) {
            sb2.append(",EXPIRES=");
            sb2.append(i(j()));
        }
        sb2.append(",EVENTS=[");
        if (G()) {
            boolean z10 = true;
            for (Object obj : this.f56691e) {
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
    public static class a implements zt.a, Serializable {
        private static final long serialVersionUID = 5986185471610524587L;
        private final long _raw;
        private final long _utc;
        private final qt.a date;
        private final int shift;

        a(qt.a aVar, long j10, long j11, int i10) {
            this.date = aVar;
            this.shift = i10;
            this._utc = j10;
            this._raw = j11;
        }

        @Override // zt.b
        public int a() {
            return this.shift;
        }

        @Override // zt.a
        public long b() {
            return this._utc;
        }

        @Override // zt.b
        public qt.a c() {
            return this.date;
        }

        @Override // zt.a
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

        a(zt.a aVar, int i10) {
            this.date = aVar.c();
            this.shift = aVar.a();
            this._utc = aVar.d() + i10;
            this._raw = aVar.d();
        }
    }
}
