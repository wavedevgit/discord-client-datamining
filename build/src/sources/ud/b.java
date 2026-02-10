package ud;

import android.os.SystemClock;
import android.util.Pair;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import oe.w0;
import qi.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f50719a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50720b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f50721c;

    /* renamed from: d  reason: collision with root package name */
    private final Random f50722d;

    public b() {
        this(new Random());
    }

    private static void b(Object obj, long j10, Map map) {
        if (map.containsKey(obj)) {
            j10 = Math.max(j10, ((Long) w0.j((Long) map.get(obj))).longValue());
        }
        map.put(obj, Long.valueOf(j10));
    }

    private List c(List list) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        h(elapsedRealtime, this.f50719a);
        h(elapsedRealtime, this.f50720b);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            vd.b bVar = (vd.b) list.get(i10);
            if (!this.f50719a.containsKey(bVar.f51464b) && !this.f50720b.containsKey(Integer.valueOf(bVar.f51465c))) {
                arrayList.add(bVar);
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(vd.b bVar, vd.b bVar2) {
        int compare = Integer.compare(bVar.f51465c, bVar2.f51465c);
        if (compare != 0) {
            return compare;
        }
        return bVar.f51464b.compareTo(bVar2.f51464b);
    }

    public static int f(List list) {
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < list.size(); i10++) {
            hashSet.add(Integer.valueOf(((vd.b) list.get(i10)).f51465c));
        }
        return hashSet.size();
    }

    private static void h(long j10, Map map) {
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : map.entrySet()) {
            if (((Long) entry.getValue()).longValue() <= j10) {
                arrayList.add(entry.getKey());
            }
        }
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            map.remove(arrayList.get(i10));
        }
    }

    private vd.b k(List list) {
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            i10 += ((vd.b) list.get(i11)).f51466d;
        }
        int nextInt = this.f50722d.nextInt(i10);
        int i12 = 0;
        for (int i13 = 0; i13 < list.size(); i13++) {
            vd.b bVar = (vd.b) list.get(i13);
            i12 += bVar.f51466d;
            if (nextInt < i12) {
                return bVar;
            }
        }
        return (vd.b) v.c(list);
    }

    public void e(vd.b bVar, long j10) {
        long elapsedRealtime = SystemClock.elapsedRealtime() + j10;
        b(bVar.f51464b, elapsedRealtime, this.f50719a);
        int i10 = bVar.f51465c;
        if (i10 != Integer.MIN_VALUE) {
            b(Integer.valueOf(i10), elapsedRealtime, this.f50720b);
        }
    }

    public int g(List list) {
        HashSet hashSet = new HashSet();
        List c10 = c(list);
        for (int i10 = 0; i10 < c10.size(); i10++) {
            hashSet.add(Integer.valueOf(((vd.b) c10.get(i10)).f51465c));
        }
        return hashSet.size();
    }

    public void i() {
        this.f50719a.clear();
        this.f50720b.clear();
        this.f50721c.clear();
    }

    public vd.b j(List list) {
        List c10 = c(list);
        if (c10.size() < 2) {
            return (vd.b) v.b(c10, null);
        }
        Collections.sort(c10, new Comparator() { // from class: ud.a
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int d10;
                d10 = b.d((vd.b) obj, (vd.b) obj2);
                return d10;
            }
        });
        ArrayList arrayList = new ArrayList();
        int i10 = ((vd.b) c10.get(0)).f51465c;
        int i11 = 0;
        while (true) {
            if (i11 >= c10.size()) {
                break;
            }
            vd.b bVar = (vd.b) c10.get(i11);
            if (i10 != bVar.f51465c) {
                if (arrayList.size() == 1) {
                    return (vd.b) c10.get(0);
                }
            } else {
                arrayList.add(new Pair(bVar.f51464b, Integer.valueOf(bVar.f51466d)));
                i11++;
            }
        }
        vd.b bVar2 = (vd.b) this.f50721c.get(arrayList);
        if (bVar2 == null) {
            vd.b k10 = k(c10.subList(0, arrayList.size()));
            this.f50721c.put(arrayList, k10);
            return k10;
        }
        return bVar2;
    }

    b(Random random) {
        this.f50721c = new HashMap();
        this.f50722d = random;
        this.f50719a = new HashMap();
        this.f50720b = new HashMap();
    }
}
