package net.time4j.tz.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import mt.a0;
import net.time4j.tz.m;
import net.time4j.tz.p;
import net.time4j.tz.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l implements m, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final String f40814d = System.getProperty("line.separator");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long f(int i10) {
        return (System.currentTimeMillis() / 1000) + ((long) (i10 * 3.1556952E7d));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m g(p pVar, List list, List list2, boolean z10, boolean z11) {
        ArrayList arrayList;
        ArrayList arrayList2;
        if (z10) {
            ArrayList arrayList3 = new ArrayList(list);
            ArrayList arrayList4 = new ArrayList(list2);
            Collections.sort(arrayList3);
            Collections.sort(arrayList4, k.INSTANCE);
            arrayList2 = arrayList4;
            arrayList = arrayList3;
        } else {
            arrayList = list;
            arrayList2 = list2;
        }
        int size = arrayList.size();
        if (size == 0) {
            if (arrayList2.isEmpty()) {
                return new e(pVar);
            }
            return new j(pVar, arrayList2, false);
        }
        p t10 = p.t(((q) arrayList.get(0)).h());
        if (z11 && !pVar.equals(t10)) {
            throw new IllegalArgumentException("Initial offset " + pVar + " not equal to previous offset of first transition: " + t10);
        } else if (arrayList2.isEmpty()) {
            return new a(arrayList, false, z11);
        } else {
            q qVar = (q) arrayList.get(size - 1);
            long g10 = qVar.g() + 1;
            long f10 = f(1);
            if (g10 < f10) {
                List list3 = arrayList2;
                arrayList2 = list3;
                arrayList.addAll(j.s(qVar, list3, g10, f10));
            }
            return new b(size, arrayList, arrayList2, false, z11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List h(int i10) {
        return Collections.singletonList(p.t(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List i(int i10, int i11) {
        p t10 = p.t(i10);
        p t11 = p.t(i11);
        ArrayList arrayList = new ArrayList(2);
        arrayList.add(t10);
        arrayList.add(t11);
        return Collections.unmodifiableList(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long j(kt.a aVar, kt.g gVar) {
        return kt.c.i(a0.UNIX.q(kt.b.j(aVar.f(), aVar.s(), aVar.g()), a0.MODIFIED_JULIAN_DATE), 86400L) + (gVar.h() * 3600) + (gVar.e() * 60) + gVar.d();
    }

    @Override // net.time4j.tz.m
    public boolean isEmpty() {
        return false;
    }
}
