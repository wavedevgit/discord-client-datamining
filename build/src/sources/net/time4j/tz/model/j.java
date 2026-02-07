package net.time4j.tz.model;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import net.time4j.tz.p;
import net.time4j.tz.q;
import rt.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends l {

    /* renamed from: r  reason: collision with root package name */
    private static final int f39668r = pt.b.i(pt.b.l(a0.MODIFIED_JULIAN_DATE.n(l.f(100), a0.UNIX)));
    private static final long serialVersionUID = 2456700806862862287L;

    /* renamed from: e  reason: collision with root package name */
    private final transient q f39669e;

    /* renamed from: i  reason: collision with root package name */
    private final transient List f39670i;

    /* renamed from: o  reason: collision with root package name */
    private final transient ConcurrentMap f39671o;

    /* renamed from: p  reason: collision with root package name */
    private final transient List f39672p;

    /* renamed from: q  reason: collision with root package name */
    private final transient boolean f39673q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39674a;

        static {
            int[] iArr = new int[i.values().length];
            f39674a = iArr;
            try {
                iArr[i.f39663d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39674a[i.f39664e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39674a[i.f39665i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(p pVar, List list, boolean z10) {
        this(new q(Long.MIN_VALUE, pVar.m(), pVar.m(), 0), list, z10);
    }

    private static q m(long j10, q qVar, List list) {
        long max = Math.max(j10, qVar.g());
        int j11 = qVar.j();
        int size = list.size();
        int i10 = Integer.MIN_VALUE;
        q qVar2 = null;
        int i11 = 0;
        while (qVar2 == null) {
            int i12 = i11 % size;
            d dVar = (d) list.get(i12);
            d dVar2 = (d) list.get(((i11 - 1) + size) % size);
            int o10 = o(dVar, j11, dVar2.e());
            if (i11 == 0) {
                i10 = u(dVar, o10 + max);
            } else if (i12 == 0) {
                i10++;
            }
            long p10 = p(dVar, i10, o10);
            if (p10 > max) {
                qVar2 = new q(p10, j11 + dVar2.e(), j11 + dVar.e(), dVar.e());
            }
            i11++;
        }
        return qVar2;
    }

    private static int o(d dVar, int i10, int i11) {
        i d10 = dVar.d();
        int i12 = a.f39674a[d10.ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 == 3) {
                    return i10 + i11;
                }
                throw new UnsupportedOperationException(d10.name());
            }
            return i10;
        }
        return 0;
    }

    private static long p(d dVar, int i10, int i11) {
        return dVar.b(i10).o0(dVar.f()).Q(p.t(i11)).m();
    }

    private List q(int i10) {
        List list;
        Integer valueOf = Integer.valueOf(i10);
        List list2 = (List) this.f39671o.get(valueOf);
        if (list2 == null) {
            ArrayList arrayList = new ArrayList();
            int j10 = this.f39669e.j();
            int size = this.f39670i.size();
            for (int i11 = 0; i11 < size; i11++) {
                d dVar = (d) this.f39670i.get(i11);
                d dVar2 = (d) this.f39670i.get(((i11 - 1) + size) % size);
                arrayList.add(new q(p(dVar, i10, o(dVar, j10, dVar2.e())), j10 + dVar2.e(), j10 + dVar.e(), dVar.e()));
            }
            list2 = Collections.unmodifiableList(arrayList);
            if (i10 <= f39668r && this.f39673q && (list = (List) this.f39671o.putIfAbsent(valueOf, list2)) != null) {
                return list;
            }
        }
        return list2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List r(q qVar, List list, long j10, long j11) {
        List list2 = list;
        long j12 = j10;
        long g10 = qVar.g();
        int i10 = (j12 > j11 ? 1 : (j12 == j11 ? 0 : -1));
        if (i10 <= 0) {
            if (j11 > g10 && i10 != 0) {
                ArrayList arrayList = new ArrayList();
                int size = list2.size();
                int j13 = qVar.j();
                int i11 = Integer.MIN_VALUE;
                int i12 = 0;
                while (true) {
                    int i13 = i12 % size;
                    d dVar = (d) list2.get(i13);
                    d dVar2 = (d) list2.get(((i12 - 1) + size) % size);
                    int o10 = o(dVar, j13, dVar2.e());
                    if (i12 == 0) {
                        i11 = u(dVar, Math.max(j12, g10) + o10);
                    } else if (i13 == 0) {
                        i11++;
                    }
                    long p10 = p(dVar, i11, o10);
                    i12++;
                    if (p10 >= j11) {
                        return Collections.unmodifiableList(arrayList);
                    }
                    if (p10 >= j10 && p10 > g10) {
                        arrayList.add(new q(p10, j13 + dVar2.e(), j13 + dVar.e(), dVar.e()));
                    }
                    list2 = list;
                    j12 = j10;
                }
            } else {
                return Collections.EMPTY_LIST;
            }
        } else {
            throw new IllegalArgumentException("Start after end.");
        }
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private List s(pt.a aVar) {
        return q(((d) this.f39670i.get(0)).i(aVar));
    }

    private static int u(d dVar, long j10) {
        return dVar.h(a0.MODIFIED_JULIAN_DATE.n(pt.c.b(j10, 86400), a0.UNIX));
    }

    private Object writeReplace() {
        return new SPX(this, 125);
    }

    @Override // net.time4j.tz.m
    public q a(pt.a aVar, pt.g gVar) {
        return k(aVar, l.j(aVar, gVar));
    }

    @Override // net.time4j.tz.m
    public q b(pt.f fVar) {
        d dVar;
        q qVar;
        long g10 = this.f39669e.g();
        q qVar2 = null;
        if (fVar.m() <= g10) {
            return null;
        }
        int j10 = this.f39669e.j();
        int size = this.f39670i.size();
        int i10 = 0;
        int i11 = size - 1;
        int u10 = u((d) this.f39670i.get(0), fVar.m() + o(dVar, j10, ((d) this.f39670i.get(i11)).e()));
        List q10 = q(u10);
        while (true) {
            if (i10 >= size) {
                break;
            }
            q qVar3 = (q) q10.get(i10);
            long g11 = qVar3.g();
            if (fVar.m() < g11) {
                if (qVar2 == null) {
                    if (i10 == 0) {
                        qVar = (q) q(u10 - 1).get(i11);
                    } else {
                        qVar = (q) q10.get(i10 - 1);
                    }
                    if (qVar.g() > g10) {
                        return qVar;
                    }
                }
            } else {
                if (g11 > g10) {
                    qVar2 = qVar3;
                }
                i10++;
            }
        }
        return qVar2;
    }

    @Override // net.time4j.tz.m
    public List c(pt.a aVar, pt.g gVar) {
        return t(aVar, l.j(aVar, gVar));
    }

    @Override // net.time4j.tz.m
    public boolean d() {
        for (d dVar : this.f39670i) {
            if (dVar.e() < 0) {
                return true;
            }
        }
        return false;
    }

    @Override // net.time4j.tz.m
    public p e() {
        return p.t(this.f39669e.k());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f39669e.equals(jVar.f39669e) && this.f39670i.equals(jVar.f39670i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f39669e.hashCode() * 17) + (this.f39670i.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q k(pt.a aVar, long j10) {
        if (j10 <= this.f39669e.g() + Math.max(this.f39669e.h(), this.f39669e.k())) {
            return null;
        }
        for (q qVar : s(aVar)) {
            long g10 = qVar.g();
            if (qVar.m()) {
                if (j10 < qVar.h() + g10) {
                    return null;
                }
                if (j10 < g10 + qVar.k()) {
                    return qVar;
                }
            } else if (!qVar.n()) {
                continue;
            } else if (j10 < qVar.k() + g10) {
                return null;
            } else {
                if (j10 < g10 + qVar.h()) {
                    return qVar;
                }
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q l() {
        return this.f39669e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List n() {
        return this.f39670i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List t(pt.a aVar, long j10) {
        long g10 = this.f39669e.g();
        int k10 = this.f39669e.k();
        if (j10 <= g10 + Math.max(this.f39669e.h(), k10)) {
            return l.h(k10);
        }
        for (q qVar : s(aVar)) {
            long g11 = qVar.g();
            int k11 = qVar.k();
            if (qVar.m()) {
                if (j10 < qVar.h() + g11) {
                    return l.h(qVar.h());
                }
                if (j10 < g11 + k11) {
                    return Collections.EMPTY_LIST;
                }
            } else if (!qVar.n()) {
                continue;
            } else if (j10 < k11 + g11) {
                return l.h(qVar.h());
            } else {
                if (j10 < g11 + qVar.h()) {
                    return l.i(k11, qVar.h());
                }
            }
            k10 = k11;
        }
        return l.h(k10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append(j.class.getName());
        sb2.append("[initial=");
        sb2.append(this.f39669e);
        sb2.append(",rules=");
        sb2.append(this.f39670i);
        sb2.append(']');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(q qVar, List list, boolean z10) {
        q qVar2;
        this.f39671o = new ConcurrentHashMap();
        if (!list.isEmpty()) {
            if (list.size() < 128) {
                list = z10 ? new ArrayList(list) : list;
                Collections.sort(list, k.INSTANCE);
                String str = null;
                if (list.size() > 1) {
                    for (d dVar : list) {
                        if (str == null) {
                            str = dVar.a();
                        } else if (!str.equals(dVar.a())) {
                            throw new IllegalArgumentException("Rules with different calendar systems not permitted.");
                        }
                    }
                }
                this.f39673q = "iso8601".equals(str);
                if (qVar.g() == Long.MIN_VALUE) {
                    if (qVar.f() == 0) {
                        qVar2 = new q(((net.time4j.a0) net.time4j.a0.T().Q()).m(), qVar.j(), qVar.j(), 0);
                    } else {
                        throw new IllegalArgumentException("Initial transition must not have any dst-offset: " + qVar);
                    }
                } else {
                    if (qVar.k() != m(qVar.g(), qVar, list).h()) {
                        throw new IllegalArgumentException("Inconsistent model: " + qVar + " / " + list);
                    }
                    qVar2 = qVar;
                }
                this.f39669e = qVar2;
                List unmodifiableList = Collections.unmodifiableList(list);
                this.f39670i = unmodifiableList;
                this.f39672p = r(qVar2, unmodifiableList, 0L, l.f(1));
                return;
            }
            throw new IllegalArgumentException("Too many daylight saving rules: " + list);
        }
        throw new IllegalArgumentException("Missing daylight saving rules.");
    }
}
