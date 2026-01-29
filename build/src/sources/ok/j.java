package ok;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final p[] f43966b = new p[0];

    /* renamed from: a  reason: collision with root package name */
    private final p[] f43967a;

    public j(Map map) {
        Collection collection;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(ck.e.POSSIBLE_FORMATS);
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(ck.a.EAN_13)) {
                arrayList.add(new e());
            } else if (collection.contains(ck.a.UPC_A)) {
                arrayList.add(new l());
            }
            if (collection.contains(ck.a.EAN_8)) {
                arrayList.add(new f());
            }
            if (collection.contains(ck.a.UPC_E)) {
                arrayList.add(new q());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new e());
            arrayList.add(new f());
            arrayList.add(new q());
        }
        this.f43967a = (p[]) arrayList.toArray(f43966b);
    }

    @Override // ok.k
    public Result b(int i10, gk.a aVar, Map map) {
        boolean z10;
        Collection collection;
        boolean z11;
        int[] o10 = p.o(aVar);
        for (p pVar : this.f43967a) {
            try {
                Result l10 = pVar.l(i10, aVar, o10, map);
                if (l10.b() == ck.a.EAN_13 && l10.f().charAt(0) == '0') {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (map == null) {
                    collection = null;
                } else {
                    collection = (Collection) map.get(ck.e.POSSIBLE_FORMATS);
                }
                if (collection != null && !collection.contains(ck.a.UPC_A)) {
                    z11 = false;
                    if (!z10 && z11) {
                        Result result = new Result(l10.f().substring(1), l10.c(), l10.e(), ck.a.UPC_A);
                        result.g(l10.d());
                        return result;
                    }
                    return l10;
                }
                z11 = true;
                if (!z10) {
                }
                return l10;
            } catch (ck.n unused) {
            }
        }
        throw ck.k.a();
    }

    @Override // ok.k, ck.m
    public void reset() {
        for (p pVar : this.f43967a) {
            pVar.reset();
        }
    }
}
