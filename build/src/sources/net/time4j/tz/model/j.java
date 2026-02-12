package net.time4j.tz.model;

import bu.a0;
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
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends l {

    /* renamed from: r  reason: collision with root package name */
    private static final int f37765r = zt.b.i(zt.b.l(a0.MODIFIED_JULIAN_DATE.o(l.f(100), a0.UNIX)));
    private static final long serialVersionUID = 2456700806862862287L;

    /* renamed from: e  reason: collision with root package name */
    private final transient q f37766e;

    /* renamed from: i  reason: collision with root package name */
    private final transient List f37767i;

    /* renamed from: o  reason: collision with root package name */
    private final transient ConcurrentMap f37768o;

    /* renamed from: p  reason: collision with root package name */
    private final transient List f37769p;

    /* renamed from: q  reason: collision with root package name */
    private final transient boolean f37770q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37771a;

        static {
            int[] iArr = new int[i.values().length];
            f37771a = iArr;
            try {
                iArr[i.f37760d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37771a[i.f37761e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37771a[i.f37762i.ordinal()] = 3;
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
        int k10 = qVar.k();
        int size = list.size();
        int i10 = Integer.MIN_VALUE;
        q qVar2 = null;
        int i11 = 0;
        while (qVar2 == null) {
            int i12 = i11 % size;
            d dVar = (d) list.get(i12);
            d dVar2 = (d) list.get(((i11 - 1) + size) % size);
            int o10 = o(dVar, k10, dVar2.e());
            if (i11 == 0) {
                i10 = u(dVar, o10 + max);
            } else if (i12 == 0) {
                i10++;
            }
            long p10 = p(dVar, i10, o10);
            if (p10 > max) {
                qVar2 = new q(p10, k10 + dVar2.e(), k10 + dVar.e(), dVar.e());
            }
            i11++;
        }
        return qVar2;
    }

    private static int o(d dVar, int i10, int i11) {
        i d10 = dVar.d();
        int i12 = a.f37771a[d10.ordinal()];
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
        return dVar.b(i10).o0(dVar.f()).Q(p.t(i11)).o();
    }

    private List q(int i10) {
        List list;
        Integer valueOf = Integer.valueOf(i10);
        List list2 = (List) this.f37768o.get(valueOf);
        if (list2 == null) {
            ArrayList arrayList = new ArrayList();
            int k10 = this.f37766e.k();
            int size = this.f37767i.size();
            for (int i11 = 0; i11 < size; i11++) {
                d dVar = (d) this.f37767i.get(i11);
                d dVar2 = (d) this.f37767i.get(((i11 - 1) + size) % size);
                arrayList.add(new q(p(dVar, i10, o(dVar, k10, dVar2.e())), k10 + dVar2.e(), k10 + dVar.e(), dVar.e()));
            }
            list2 = Collections.unmodifiableList(arrayList);
            if (i10 <= f37765r && this.f37770q && (list = (List) this.f37768o.putIfAbsent(valueOf, list2)) != null) {
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
                int k10 = qVar.k();
                int i11 = Integer.MIN_VALUE;
                int i12 = 0;
                while (true) {
                    int i13 = i12 % size;
                    d dVar = (d) list2.get(i13);
                    d dVar2 = (d) list2.get(((i12 - 1) + size) % size);
                    int o10 = o(dVar, k10, dVar2.e());
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
                        arrayList.add(new q(p10, k10 + dVar2.e(), k10 + dVar.e(), dVar.e()));
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

    private List s(zt.a aVar) {
        return q(((d) this.f37767i.get(0)).i(aVar));
    }

    private static int u(d dVar, long j10) {
        return dVar.h(a0.MODIFIED_JULIAN_DATE.o(zt.c.b(j10, 86400), a0.UNIX));
    }

    private Object writeReplace() {
        return new SPX(this, 125);
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        for (d dVar : this.f37767i) {
            if (dVar.e() < 0) {
                return true;
            }
        }
        return false;
    }

    @Override // net.time4j.tz.m
    public q b(zt.f fVar) {
        d dVar;
        q qVar;
        long g10 = this.f37766e.g();
        q qVar2 = null;
        if (fVar.o() <= g10) {
            return null;
        }
        int k10 = this.f37766e.k();
        int size = this.f37767i.size();
        int i10 = 0;
        int i11 = size - 1;
        int u10 = u((d) this.f37767i.get(0), fVar.o() + o(dVar, k10, ((d) this.f37767i.get(i11)).e()));
        List q10 = q(u10);
        while (true) {
            if (i10 >= size) {
                break;
            }
            q qVar3 = (q) q10.get(i10);
            long g11 = qVar3.g();
            if (fVar.o() < g11) {
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
    public p c() {
        return p.t(this.f37766e.l());
    }

    @Override // net.time4j.tz.m
    public q d(zt.a aVar, zt.g gVar) {
        return k(aVar, l.j(aVar, gVar));
    }

    @Override // net.time4j.tz.m
    public List e(zt.a aVar, zt.g gVar) {
        return t(aVar, l.j(aVar, gVar));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            j jVar = (j) obj;
            if (this.f37766e.equals(jVar.f37766e) && this.f37767i.equals(jVar.f37767i)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f37766e.hashCode() * 17) + (this.f37767i.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q k(zt.a aVar, long j10) {
        if (j10 <= this.f37766e.g() + Math.max(this.f37766e.h(), this.f37766e.l())) {
            return null;
        }
        for (q qVar : s(aVar)) {
            long g10 = qVar.g();
            if (qVar.m()) {
                if (j10 < qVar.h() + g10) {
                    return null;
                }
                if (j10 < g10 + qVar.l()) {
                    return qVar;
                }
            } else if (!qVar.n()) {
                continue;
            } else if (j10 < qVar.l() + g10) {
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
        return this.f37766e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List n() {
        return this.f37767i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List t(zt.a aVar, long j10) {
        long g10 = this.f37766e.g();
        int l10 = this.f37766e.l();
        if (j10 <= g10 + Math.max(this.f37766e.h(), l10)) {
            return l.h(l10);
        }
        for (q qVar : s(aVar)) {
            long g11 = qVar.g();
            int l11 = qVar.l();
            if (qVar.m()) {
                if (j10 < qVar.h() + g11) {
                    return l.h(qVar.h());
                }
                if (j10 < g11 + l11) {
                    return Collections.EMPTY_LIST;
                }
            } else if (!qVar.n()) {
                continue;
            } else if (j10 < l11 + g11) {
                return l.h(qVar.h());
            } else {
                if (j10 < g11 + qVar.h()) {
                    return l.i(l11, qVar.h());
                }
            }
            l10 = l11;
        }
        return l.h(l10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append(j.class.getName());
        sb2.append("[initial=");
        sb2.append(this.f37766e);
        sb2.append(",rules=");
        sb2.append(this.f37767i);
        sb2.append(']');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(q qVar, List list, boolean z10) {
        q qVar2;
        this.f37768o = new ConcurrentHashMap();
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
                this.f37770q = "iso8601".equals(str);
                if (qVar.g() == Long.MIN_VALUE) {
                    if (qVar.f() == 0) {
                        qVar2 = new q(((net.time4j.a0) net.time4j.a0.T().Q()).o(), qVar.k(), qVar.k(), 0);
                    } else {
                        throw new IllegalArgumentException("Initial transition must not have any dst-offset: " + qVar);
                    }
                } else {
                    if (qVar.l() != m(qVar.g(), qVar, list).h()) {
                        throw new IllegalArgumentException("Inconsistent model: " + qVar + " / " + list);
                    }
                    qVar2 = qVar;
                }
                this.f37766e = qVar2;
                List unmodifiableList = Collections.unmodifiableList(list);
                this.f37767i = unmodifiableList;
                this.f37769p = r(qVar2, unmodifiableList, 0L, l.f(1));
                return;
            }
            throw new IllegalArgumentException("Too many daylight saving rules: " + list);
        }
        throw new IllegalArgumentException("Missing daylight saving rules.");
    }
}
