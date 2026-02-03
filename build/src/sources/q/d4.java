package q;

import a0.r0;
import a0.y2;
import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d4 {

    /* renamed from: a  reason: collision with root package name */
    public static final r0.a f46704a = r0.a.a("camera2.streamSpec.streamUseCase", Long.TYPE);

    /* renamed from: b  reason: collision with root package name */
    private static final Map f46705b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f46706c;

    static {
        HashMap hashMap = new HashMap();
        f46705b = hashMap;
        HashMap hashMap2 = new HashMap();
        f46706c = hashMap2;
        if (Build.VERSION.SDK_INT >= 33) {
            HashSet hashSet = new HashSet();
            y2.b bVar = y2.b.PREVIEW;
            hashSet.add(bVar);
            y2.b bVar2 = y2.b.METERING_REPEATING;
            hashSet.add(bVar2);
            hashMap.put(4L, hashSet);
            HashSet hashSet2 = new HashSet();
            hashSet2.add(bVar);
            hashSet2.add(bVar2);
            hashSet2.add(y2.b.IMAGE_ANALYSIS);
            hashMap.put(1L, hashSet2);
            HashSet hashSet3 = new HashSet();
            y2.b bVar3 = y2.b.IMAGE_CAPTURE;
            hashSet3.add(bVar3);
            hashMap.put(2L, hashSet3);
            HashSet hashSet4 = new HashSet();
            y2.b bVar4 = y2.b.VIDEO_CAPTURE;
            hashSet4.add(bVar4);
            hashMap.put(3L, hashSet4);
            HashSet hashSet5 = new HashSet();
            hashSet5.add(bVar);
            hashSet5.add(bVar3);
            hashSet5.add(bVar4);
            hashMap2.put(4L, hashSet5);
            HashSet hashSet6 = new HashSet();
            hashSet6.add(bVar);
            hashSet6.add(bVar4);
            hashMap2.put(3L, hashSet6);
        }
    }

    public static boolean a(Map map, Map map2, List list) {
        List list2;
        y2.b bVar;
        for (int i10 = 0; i10 < list.size(); i10++) {
            long f10 = ((a0.o2) list.get(i10)).f();
            if (map.containsKey(Integer.valueOf(i10))) {
                a0.a aVar = (a0.a) map.get(Integer.valueOf(i10));
                if (aVar.b().size() == 1) {
                    bVar = (y2.b) aVar.b().get(0);
                } else {
                    bVar = y2.b.STREAM_SHARING;
                }
                if (!g(bVar, f10, aVar.b())) {
                    return false;
                }
            } else if (map2.containsKey(Integer.valueOf(i10))) {
                a0.x2 x2Var = (a0.x2) map2.get(Integer.valueOf(i10));
                y2.b L = x2Var.L();
                if (x2Var.L() == y2.b.STREAM_SHARING) {
                    list2 = ((n0.h) x2Var).W();
                } else {
                    list2 = Collections.EMPTY_LIST;
                }
                if (!g(L, f10, list2)) {
                    return false;
                }
            } else {
                throw new AssertionError("SurfaceConfig does not map to any use case");
            }
        }
        return true;
    }

    private static boolean b(Set set, Set set2) {
        Iterator it = set2.iterator();
        while (it.hasNext()) {
            if (!set.contains((Long) it.next())) {
                return false;
            }
        }
        return true;
    }

    public static boolean c(r.a0 a0Var, List list) {
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT >= 33) {
            key = CameraCharacteristics.SCALER_AVAILABLE_STREAM_USE_CASES;
            long[] jArr = (long[]) a0Var.a(key);
            if (jArr == null || jArr.length == 0) {
                return false;
            }
            HashSet hashSet = new HashSet();
            for (long j10 : jArr) {
                hashSet.add(Long.valueOf(j10));
            }
            Iterator it = list.iterator();
            while (it.hasNext()) {
                if (!hashSet.contains(Long.valueOf(((a0.o2) it.next()).f()))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    public static boolean d(List list, List list2) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            a0.a aVar = (a0.a) it.next();
            if (j(aVar.e(), (y2.b) aVar.b().get(0))) {
                return true;
            }
        }
        Iterator it2 = list2.iterator();
        while (it2.hasNext()) {
            a0.x2 x2Var = (a0.x2) it2.next();
            if (j(x2Var, x2Var.L())) {
                return true;
            }
        }
        return false;
    }

    public static p.a e(a0.x2 x2Var) {
        a0.r1 Z = a0.r1.Z();
        r0.a aVar = p.a.K;
        if (x2Var.h(aVar)) {
            Z.V(aVar, (Long) x2Var.a(aVar));
        }
        r0.a aVar2 = a0.x2.f323z;
        if (x2Var.h(aVar2)) {
            Z.V(aVar2, (Boolean) x2Var.a(aVar2));
        }
        r0.a aVar3 = a0.g1.J;
        if (x2Var.h(aVar3)) {
            Z.V(aVar3, (Integer) x2Var.a(aVar3));
        }
        r0.a aVar4 = a0.h1.f76h;
        if (x2Var.h(aVar4)) {
            Z.V(aVar4, (Integer) x2Var.a(aVar4));
        }
        return new p.a(Z);
    }

    private static a0.r0 f(a0.r0 r0Var, long j10) {
        r0.a aVar = f46704a;
        if (r0Var.h(aVar) && ((Long) r0Var.a(aVar)).longValue() == j10) {
            return null;
        }
        a0.r1 a02 = a0.r1.a0(r0Var);
        a02.V(aVar, Long.valueOf(j10));
        return new p.a(a02);
    }

    private static boolean g(y2.b bVar, long j10, List list) {
        if (Build.VERSION.SDK_INT < 33) {
            return false;
        }
        if (bVar == y2.b.STREAM_SHARING) {
            Map map = f46706c;
            if (!map.containsKey(Long.valueOf(j10))) {
                return false;
            }
            Set set = (Set) map.get(Long.valueOf(j10));
            if (list.size() != set.size()) {
                return false;
            }
            Iterator it = list.iterator();
            while (it.hasNext()) {
                if (!set.contains((y2.b) it.next())) {
                    return false;
                }
            }
            return true;
        }
        Map map2 = f46705b;
        if (!map2.containsKey(Long.valueOf(j10)) || !((Set) map2.get(Long.valueOf(j10))).contains(bVar)) {
            return false;
        }
        return true;
    }

    public static boolean h(r.a0 a0Var) {
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT >= 33) {
            key = CameraCharacteristics.SCALER_AVAILABLE_STREAM_USE_CASES;
            long[] jArr = (long[]) a0Var.a(key);
            if (jArr == null || jArr.length == 0) {
                return false;
            }
            return true;
        }
        return false;
    }

    private static boolean i(List list, List list2, Set set) {
        boolean z10;
        boolean z11;
        HashSet hashSet = new HashSet();
        Iterator it = list.iterator();
        if (it.hasNext()) {
            a0.a aVar = (a0.a) it.next();
            a0.r0 e10 = aVar.e();
            r0.a aVar2 = p.a.K;
            if (!e10.h(aVar2) || ((Long) aVar.e().a(aVar2)).longValue() == 0) {
                z11 = true;
                z10 = false;
            } else {
                z10 = true;
                z11 = false;
            }
        } else {
            z10 = false;
            z11 = false;
        }
        Iterator it2 = list2.iterator();
        while (it2.hasNext()) {
            a0.x2 x2Var = (a0.x2) it2.next();
            r0.a aVar3 = p.a.K;
            if (!x2Var.h(aVar3)) {
                if (z10) {
                    o();
                }
            } else {
                Long l10 = (Long) x2Var.a(aVar3);
                if (l10.longValue() == 0) {
                    if (z10) {
                        o();
                    }
                } else {
                    if (z11) {
                        o();
                    }
                    hashSet.add(l10);
                    z10 = true;
                }
            }
            z11 = true;
        }
        if (!z11 && b(set, hashSet)) {
            return true;
        }
        return false;
    }

    private static boolean j(a0.r0 r0Var, y2.b bVar) {
        if (((Boolean) r0Var.e(a0.x2.f323z, Boolean.FALSE)).booleanValue()) {
            return false;
        }
        r0.a aVar = a0.g1.J;
        if (!r0Var.h(aVar) || s4.b(bVar, ((Integer) r0Var.a(aVar)).intValue()) != 5) {
            return false;
        }
        return true;
    }

    public static boolean k(r.a0 a0Var, List list, Map map, Map map2) {
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT < 33) {
            return false;
        }
        ArrayList<a0.x2> arrayList = new ArrayList(map.keySet());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            b2.e.g(((a0.a) it.next()).e());
        }
        for (a0.x2 x2Var : arrayList) {
            b2.e.g(((a0.m2) b2.e.g((a0.m2) map.get(x2Var))).d());
        }
        key = CameraCharacteristics.SCALER_AVAILABLE_STREAM_USE_CASES;
        long[] jArr = (long[]) a0Var.a(key);
        if (jArr != null && jArr.length != 0) {
            HashSet hashSet = new HashSet();
            for (long j10 : jArr) {
                hashSet.add(Long.valueOf(j10));
            }
            if (i(list, arrayList, hashSet)) {
                Iterator it2 = list.iterator();
                while (it2.hasNext()) {
                    a0.a aVar = (a0.a) it2.next();
                    a0.r0 e10 = aVar.e();
                    a0.r0 f10 = f(e10, ((Long) e10.a(p.a.K)).longValue());
                    if (f10 != null) {
                        map2.put(aVar, aVar.i(f10));
                    }
                }
                for (a0.x2 x2Var2 : arrayList) {
                    a0.m2 m2Var = (a0.m2) map.get(x2Var2);
                    a0.r0 d10 = m2Var.d();
                    a0.r0 f11 = f(d10, ((Long) d10.a(p.a.K)).longValue());
                    if (f11 != null) {
                        map.put(x2Var2, m2Var.g().d(f11).a());
                    }
                }
                return true;
            }
        }
        return false;
    }

    public static void l(Map map, Map map2, Map map3, Map map4, List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            long f10 = ((a0.o2) list.get(i10)).f();
            if (map3.containsKey(Integer.valueOf(i10))) {
                a0.a aVar = (a0.a) map3.get(Integer.valueOf(i10));
                a0.r0 f11 = f(aVar.e(), f10);
                if (f11 != null) {
                    map2.put(aVar, aVar.i(f11));
                }
            } else if (map4.containsKey(Integer.valueOf(i10))) {
                a0.x2 x2Var = (a0.x2) map4.get(Integer.valueOf(i10));
                a0.m2 m2Var = (a0.m2) map.get(x2Var);
                a0.r0 f12 = f(m2Var.d(), f10);
                if (f12 != null) {
                    map.put(x2Var, m2Var.g().d(f12).a());
                }
            } else {
                throw new AssertionError("SurfaceConfig does not map to any use case");
            }
        }
    }

    public static void m(Collection collection, Collection collection2, Map map) {
        ArrayList arrayList = new ArrayList(collection2);
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            a0.i2 i2Var = (a0.i2) it.next();
            a0.r0 f10 = i2Var.f();
            r0.a aVar = f46704a;
            if (f10.h(aVar) && i2Var.n().size() != 1) {
                x.y0.c("StreamUseCaseUtil", String.format("SessionConfig has stream use case but also contains %d surfaces, abort populateSurfaceToStreamUseCaseMapping().", Integer.valueOf(i2Var.n().size())));
                return;
            } else if (i2Var.f().h(aVar)) {
                Iterator it2 = collection.iterator();
                int i10 = 0;
                while (it2.hasNext()) {
                    a0.i2 i2Var2 = (a0.i2) it2.next();
                    if (((a0.x2) arrayList.get(i10)).L() == y2.b.METERING_REPEATING) {
                        b2.e.j(!i2Var2.n().isEmpty(), "MeteringRepeating should contain a surface");
                        map.put((a0.w0) i2Var2.n().get(0), 1L);
                    } else {
                        a0.r0 f11 = i2Var2.f();
                        r0.a aVar2 = f46704a;
                        if (f11.h(aVar2) && !i2Var2.n().isEmpty()) {
                            map.put((a0.w0) i2Var2.n().get(0), (Long) i2Var2.f().a(aVar2));
                        }
                    }
                    i10++;
                }
                return;
            }
        }
    }

    public static boolean n(f4.b bVar) {
        if (bVar.a() == 0 && bVar.b() == 8) {
            return true;
        }
        return false;
    }

    private static void o() {
        throw new IllegalArgumentException("Either all use cases must have non-default stream use case assigned or none should have it");
    }
}
