package q;

import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import android.text.TextUtils;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f3 {

    /* renamed from: a  reason: collision with root package name */
    private final r.a0 f46799a;

    /* renamed from: b  reason: collision with root package name */
    private final s.f f46800b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f46801c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        static x.z a(r.a0 a0Var) {
            Long l10 = (Long) a0Var.a(CameraCharacteristics.REQUEST_RECOMMENDED_TEN_BIT_DYNAMIC_RANGE_PROFILE);
            if (l10 != null) {
                return s.c.b(l10.longValue());
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f3(r.a0 a0Var) {
        this.f46799a = a0Var;
        this.f46800b = s.f.a(a0Var);
        int[] iArr = (int[]) a0Var.a(CameraCharacteristics.REQUEST_AVAILABLE_CAPABILITIES);
        boolean z10 = false;
        if (iArr != null) {
            int length = iArr.length;
            int i10 = 0;
            while (true) {
                if (i10 >= length) {
                    break;
                } else if (iArr[i10] == 18) {
                    z10 = true;
                    break;
                } else {
                    i10++;
                }
            }
        }
        this.f46801c = z10;
    }

    private static boolean a(x.z zVar, x.z zVar2) {
        b2.e.j(zVar2.e(), "Fully specified range is not actually fully specified.");
        if (zVar.b() == 2 && zVar2.b() == 1) {
            return false;
        }
        if (zVar.b() != 2 && zVar.b() != 0 && zVar.b() != zVar2.b()) {
            return false;
        }
        if (zVar.a() == 0 || zVar.a() == zVar2.a()) {
            return true;
        }
        return false;
    }

    private static boolean b(x.z zVar, x.z zVar2, Set set) {
        if (!set.contains(zVar2)) {
            x.y0.a("DynamicRangeResolver", String.format("Candidate Dynamic range is not within constraints.\nDynamic range to resolve:\n  %s\nCandidate dynamic range:\n  %s", zVar, zVar2));
            return false;
        }
        return a(zVar, zVar2);
    }

    private static x.z c(x.z zVar, Collection collection, Set set) {
        if (zVar.b() == 1) {
            return null;
        }
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            x.z zVar2 = (x.z) it.next();
            b2.e.h(zVar2, "Fully specified DynamicRange cannot be null.");
            int b10 = zVar2.b();
            b2.e.j(zVar2.e(), "Fully specified DynamicRange must have fully defined encoding.");
            if (b10 != 1 && b(zVar, zVar2, set)) {
                return zVar2;
            }
        }
        return null;
    }

    private static boolean e(x.z zVar) {
        return Objects.equals(zVar, x.z.f53582c);
    }

    private static boolean f(x.z zVar) {
        if (zVar.b() != 2) {
            if (zVar.b() == 0 || zVar.a() != 0) {
                if (zVar.b() != 0 || zVar.a() == 0) {
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    private x.z h(x.z zVar, Set set, Set set2, Set set3, String str) {
        x.z zVar2;
        String str2;
        if (zVar.e()) {
            if (!set.contains(zVar)) {
                return null;
            }
            return zVar;
        }
        int b10 = zVar.b();
        int a10 = zVar.a();
        if (b10 == 1 && a10 == 0) {
            x.z zVar3 = x.z.f53583d;
            if (!set.contains(zVar3)) {
                return null;
            }
            return zVar3;
        }
        x.z c10 = c(zVar, set2, set);
        if (c10 != null) {
            x.y0.a("DynamicRangeResolver", String.format("Resolved dynamic range for use case %s from existing attached surface.\n%s\n->\n%s", str, zVar, c10));
            return c10;
        }
        x.z c11 = c(zVar, set3, set);
        if (c11 != null) {
            x.y0.a("DynamicRangeResolver", String.format("Resolved dynamic range for use case %s from concurrently bound use case.\n%s\n->\n%s", str, zVar, c11));
            return c11;
        }
        x.z zVar4 = x.z.f53583d;
        if (b(zVar, zVar4, set)) {
            x.y0.a("DynamicRangeResolver", String.format("Resolved dynamic range for use case %s to no compatible HDR dynamic ranges.\n%s\n->\n%s", str, zVar, zVar4));
            return zVar4;
        }
        if (b10 == 2 && (a10 == 10 || a10 == 0)) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            if (Build.VERSION.SDK_INT >= 33) {
                zVar2 = a.a(this.f46799a);
                if (zVar2 != null) {
                    linkedHashSet.add(zVar2);
                }
            } else {
                zVar2 = null;
            }
            linkedHashSet.add(x.z.f53585f);
            x.z c12 = c(zVar, linkedHashSet, set);
            if (c12 != null) {
                if (c12.equals(zVar2)) {
                    str2 = "recommended";
                } else {
                    str2 = "required";
                }
                x.y0.a("DynamicRangeResolver", String.format("Resolved dynamic range for use case %s from %s 10-bit supported dynamic range.\n%s\n->\n%s", str, str2, zVar, c12));
                return c12;
            }
        }
        Iterator it = set.iterator();
        while (it.hasNext()) {
            x.z zVar5 = (x.z) it.next();
            b2.e.j(zVar5.e(), "Candidate dynamic range must be fully specified.");
            if (!zVar5.equals(x.z.f53583d) && a(zVar, zVar5)) {
                x.y0.a("DynamicRangeResolver", String.format("Resolved dynamic range for use case %s from validated dynamic range constraints or supported HDR dynamic ranges.\n%s\n->\n%s", str, zVar, zVar5));
                return zVar5;
            }
        }
        return null;
    }

    private x.z i(Set set, Set set2, Set set3, a0.x2 x2Var, Set set4) {
        x.z B = x2Var.B();
        x.z h10 = h(B, set4, set2, set3, x2Var.M());
        if (h10 != null) {
            j(set4, h10, this.f46800b);
            return h10;
        }
        throw new IllegalArgumentException(String.format("Unable to resolve supported dynamic range. The dynamic range may not be supported on the device or may not be allowed concurrently with other attached use cases.\nUse case:\n  %s\nRequested dynamic range:\n  %s\nSupported dynamic ranges:\n  %s\nConstrained set of concurrent dynamic ranges:\n  %s", x2Var.M(), B, TextUtils.join("\n  ", set), TextUtils.join("\n  ", set4)));
    }

    private static void j(Set set, x.z zVar, s.f fVar) {
        b2.e.j(!set.isEmpty(), "Cannot update already-empty constraints.");
        Set b10 = fVar.b(zVar);
        if (!b10.isEmpty()) {
            HashSet hashSet = new HashSet(set);
            set.retainAll(b10);
            if (set.isEmpty()) {
                throw new IllegalArgumentException(String.format("Constraints of dynamic range cannot be combined with existing constraints.\nDynamic range:\n  %s\nConstraints:\n  %s\nExisting constraints:\n  %s", zVar, TextUtils.join("\n  ", b10), TextUtils.join("\n  ", hashSet)));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        return this.f46801c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map g(List list, List list2, List list3) {
        Set<x.z> linkedHashSet = new LinkedHashSet();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            linkedHashSet.add(((a0.a) it.next()).c());
        }
        Set c10 = this.f46800b.c();
        Set hashSet = new HashSet(c10);
        for (x.z zVar : linkedHashSet) {
            j(hashSet, zVar, this.f46800b);
        }
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        ArrayList arrayList3 = new ArrayList();
        Iterator it2 = list3.iterator();
        while (it2.hasNext()) {
            a0.x2 x2Var = (a0.x2) list2.get(((Integer) it2.next()).intValue());
            x.z B = x2Var.B();
            if (e(B)) {
                arrayList3.add(x2Var);
            } else if (f(B)) {
                arrayList2.add(x2Var);
            } else {
                arrayList.add(x2Var);
            }
        }
        HashMap hashMap = new HashMap();
        Set linkedHashSet2 = new LinkedHashSet();
        ArrayList<a0.x2> arrayList4 = new ArrayList();
        arrayList4.addAll(arrayList);
        arrayList4.addAll(arrayList2);
        arrayList4.addAll(arrayList3);
        for (a0.x2 x2Var2 : arrayList4) {
            x.z i10 = i(c10, linkedHashSet, linkedHashSet2, x2Var2, hashSet);
            hashMap.put(x2Var2, i10);
            if (!linkedHashSet.contains(i10)) {
                linkedHashSet2.add(i10);
            }
        }
        return hashMap;
    }
}
