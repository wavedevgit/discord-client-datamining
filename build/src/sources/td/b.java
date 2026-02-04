package td;

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
import ji.v;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f50003a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50004b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f50005c;

    /* renamed from: d  reason: collision with root package name */
    private final Random f50006d;

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
        h(elapsedRealtime, this.f50003a);
        h(elapsedRealtime, this.f50004b);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < list.size(); i10++) {
            ud.b bVar = (ud.b) list.get(i10);
            if (!this.f50003a.containsKey(bVar.f50501b) && !this.f50004b.containsKey(Integer.valueOf(bVar.f50502c))) {
                arrayList.add(bVar);
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(ud.b bVar, ud.b bVar2) {
        int compare = Integer.compare(bVar.f50502c, bVar2.f50502c);
        if (compare != 0) {
            return compare;
        }
        return bVar.f50501b.compareTo(bVar2.f50501b);
    }

    public static int f(List list) {
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < list.size(); i10++) {
            hashSet.add(Integer.valueOf(((ud.b) list.get(i10)).f50502c));
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

    private ud.b k(List list) {
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            i10 += ((ud.b) list.get(i11)).f50503d;
        }
        int nextInt = this.f50006d.nextInt(i10);
        int i12 = 0;
        for (int i13 = 0; i13 < list.size(); i13++) {
            ud.b bVar = (ud.b) list.get(i13);
            i12 += bVar.f50503d;
            if (nextInt < i12) {
                return bVar;
            }
        }
        return (ud.b) v.c(list);
    }

    public void e(ud.b bVar, long j10) {
        long elapsedRealtime = SystemClock.elapsedRealtime() + j10;
        b(bVar.f50501b, elapsedRealtime, this.f50003a);
        int i10 = bVar.f50502c;
        if (i10 != Integer.MIN_VALUE) {
            b(Integer.valueOf(i10), elapsedRealtime, this.f50004b);
        }
    }

    public int g(List list) {
        HashSet hashSet = new HashSet();
        List c10 = c(list);
        for (int i10 = 0; i10 < c10.size(); i10++) {
            hashSet.add(Integer.valueOf(((ud.b) c10.get(i10)).f50502c));
        }
        return hashSet.size();
    }

    public void i() {
        this.f50003a.clear();
        this.f50004b.clear();
        this.f50005c.clear();
    }

    public ud.b j(List list) {
        List c10 = c(list);
        if (c10.size() < 2) {
            return (ud.b) v.b(c10, null);
        }
        Collections.sort(c10, new Comparator() { // from class: td.a
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int d10;
                d10 = b.d((ud.b) obj, (ud.b) obj2);
                return d10;
            }
        });
        ArrayList arrayList = new ArrayList();
        int i10 = ((ud.b) c10.get(0)).f50502c;
        int i11 = 0;
        while (true) {
            if (i11 >= c10.size()) {
                break;
            }
            ud.b bVar = (ud.b) c10.get(i11);
            if (i10 != bVar.f50502c) {
                if (arrayList.size() == 1) {
                    return (ud.b) c10.get(0);
                }
            } else {
                arrayList.add(new Pair(bVar.f50501b, Integer.valueOf(bVar.f50503d)));
                i11++;
            }
        }
        ud.b bVar2 = (ud.b) this.f50005c.get(arrayList);
        if (bVar2 == null) {
            ud.b k10 = k(c10.subList(0, arrayList.size()));
            this.f50005c.put(arrayList, k10);
            return k10;
        }
        return bVar2;
    }

    b(Random random) {
        this.f50005c = new HashMap();
        this.f50006d = random;
        this.f50003a = new HashMap();
        this.f50004b = new HashMap();
    }
}
