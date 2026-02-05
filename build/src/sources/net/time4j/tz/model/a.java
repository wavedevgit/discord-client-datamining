package net.time4j.tz.model;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import net.time4j.a0;
import net.time4j.tz.p;
import net.time4j.tz.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends l {
    private static final long serialVersionUID = -5264909488983076587L;

    /* renamed from: e  reason: collision with root package name */
    private final transient q[] f40241e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f40242i;

    /* renamed from: o  reason: collision with root package name */
    private final transient List f40243o;

    /* renamed from: p  reason: collision with root package name */
    private transient int f40244p = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list, boolean z10, boolean z11) {
        if (!list.isEmpty()) {
            q[] qVarArr = (q[]) list.toArray(new q[list.size()]);
            boolean z12 = false;
            for (q qVar : qVarArr) {
                if (!z12 && qVar.f() >= 0) {
                    z12 = false;
                } else {
                    z12 = true;
                }
            }
            this.f40242i = z12;
            if (z10) {
                Arrays.sort(qVarArr);
            }
            if (z11) {
                k(qVarArr, list);
            }
            this.f40241e = qVarArr;
            this.f40243o = o(qVarArr, 0L, l.f(1));
            return;
        }
        throw new IllegalArgumentException("Missing timezone transitions.");
    }

    private static void k(q[] qVarArr, List list) {
        int l10 = qVarArr[0].l();
        for (int i10 = 1; i10 < qVarArr.length; i10++) {
            if (l10 == qVarArr[i10].h()) {
                l10 = qVarArr[i10].l();
            } else {
                a0 m02 = a0.m0(qVarArr[i10].g(), wt.f.POSIX);
                throw new IllegalArgumentException("Model inconsistency detected at: " + m02 + " (" + qVarArr[i10].g() + ")  in transitions: " + list);
            }
        }
    }

    private static List o(q[] qVarArr, long j10, long j11) {
        if (j10 <= j11) {
            int r10 = r(j10, qVarArr);
            int r11 = r(j11, qVarArr);
            if (r11 == 0) {
                return Collections.EMPTY_LIST;
            }
            if (r10 > 0 && qVarArr[r10 - 1].g() == j10) {
                r10--;
            }
            int i10 = r11 - 1;
            if (qVarArr[i10].g() == j11) {
                i10 = r11 - 2;
            }
            if (r10 > i10) {
                return Collections.EMPTY_LIST;
            }
            ArrayList arrayList = new ArrayList((i10 - r10) + 1);
            while (r10 <= i10) {
                arrayList.add(qVarArr[r10]);
                r10++;
            }
            return Collections.unmodifiableList(arrayList);
        }
        throw new IllegalArgumentException("Start after end.");
    }

    private static int r(long j10, q[] qVarArr) {
        int length = qVarArr.length - 1;
        int i10 = 0;
        while (i10 <= length) {
            int i11 = (i10 + length) / 2;
            if (qVarArr[i11].g() <= j10) {
                i10 = i11 + 1;
            } else {
                length = i11 - 1;
            }
        }
        return i10;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private static int s(long j10, q[] qVarArr) {
        q qVar;
        int length = qVarArr.length - 1;
        int i10 = 0;
        while (i10 <= length) {
            int i11 = (i10 + length) / 2;
            if (qVarArr[i11].g() + Math.max(qVar.l(), qVar.h()) <= j10) {
                i10 = i11 + 1;
            } else {
                length = i11 - 1;
            }
        }
        return i10;
    }

    private Object writeReplace() {
        return new SPX(this, 126);
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        return this.f40242i;
    }

    @Override // net.time4j.tz.m
    public q b(nt.f fVar) {
        int r10 = r(fVar.q(), this.f40241e);
        if (r10 == 0) {
            return null;
        }
        return this.f40241e[r10 - 1];
    }

    @Override // net.time4j.tz.m
    public q c(nt.a aVar, nt.g gVar) {
        return m(aVar, gVar, null);
    }

    @Override // net.time4j.tz.m
    public p d() {
        return p.t(this.f40241e[0].h());
    }

    @Override // net.time4j.tz.m
    public List e(nt.a aVar, nt.g gVar) {
        return p(aVar, gVar, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            return Arrays.equals(this.f40241e, ((a) obj).f40241e);
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f40244p;
        if (i10 == 0) {
            int hashCode = Arrays.hashCode(this.f40241e);
            this.f40244p = hashCode;
            return hashCode;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l(a aVar, int i10, int i11) {
        int min = Math.min(i10, this.f40241e.length);
        if (min != Math.min(i11, aVar.f40241e.length)) {
            return false;
        }
        for (int i12 = 0; i12 < min; i12++) {
            if (!this.f40241e[i12].equals(aVar.f40241e[i12])) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q m(nt.a aVar, nt.g gVar, j jVar) {
        long j10 = l.j(aVar, gVar);
        int s10 = s(j10, this.f40241e);
        q[] qVarArr = this.f40241e;
        if (s10 == qVarArr.length) {
            if (jVar == null) {
                return null;
            }
            return jVar.k(aVar, j10);
        }
        q qVar = qVarArr[s10];
        if (!qVar.m() ? !qVar.n() || qVar.g() + qVar.l() > j10 : qVar.g() + qVar.h() > j10) {
            return null;
        }
        return qVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q n() {
        q[] qVarArr = this.f40241e;
        return qVarArr[qVarArr.length - 1];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List p(nt.a aVar, nt.g gVar, j jVar) {
        long j10 = l.j(aVar, gVar);
        int s10 = s(j10, this.f40241e);
        q[] qVarArr = this.f40241e;
        if (s10 == qVarArr.length) {
            if (jVar == null) {
                return l.h(qVarArr[qVarArr.length - 1].l());
            }
            return jVar.t(aVar, j10);
        }
        q qVar = qVarArr[s10];
        if (qVar.m()) {
            if (qVar.g() + qVar.h() <= j10) {
                return Collections.EMPTY_LIST;
            }
        } else if (qVar.n() && qVar.g() + qVar.l() <= j10) {
            return l.i(qVar.l(), qVar.h());
        }
        return l.h(qVar.h());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q(int i10) {
        int min = Math.min(i10, this.f40241e.length);
        q[] qVarArr = new q[min];
        System.arraycopy(this.f40241e, 0, qVarArr, 0, min);
        return Arrays.hashCode(qVarArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10, ObjectOutput objectOutput) {
        SPX.z(this.f40241e, i10, objectOutput);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(a.class.getName());
        sb2.append("[transition-count=");
        sb2.append(this.f40241e.length);
        sb2.append(",hash=");
        sb2.append(hashCode());
        sb2.append(']');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(ObjectOutput objectOutput) {
        t(this.f40241e.length, objectOutput);
    }
}
