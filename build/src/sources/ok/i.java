package ok;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final k[] f44108b = new k[0];

    /* renamed from: a  reason: collision with root package name */
    private final k[] f44109a;

    public i(Map map) {
        Collection collection;
        boolean z10;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(ck.e.POSSIBLE_FORMATS);
        }
        if (map != null && map.get(ck.e.ASSUME_CODE_39_CHECK_DIGIT) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(ck.a.EAN_13) || collection.contains(ck.a.UPC_A) || collection.contains(ck.a.EAN_8) || collection.contains(ck.a.UPC_E)) {
                arrayList.add(new j(map));
            }
            if (collection.contains(ck.a.CODE_39)) {
                arrayList.add(new c(z10));
            }
            if (collection.contains(ck.a.CODE_93)) {
                arrayList.add(new d());
            }
            if (collection.contains(ck.a.CODE_128)) {
                arrayList.add(new b());
            }
            if (collection.contains(ck.a.ITF)) {
                arrayList.add(new h());
            }
            if (collection.contains(ck.a.CODABAR)) {
                arrayList.add(new a());
            }
            if (collection.contains(ck.a.RSS_14)) {
                arrayList.add(new pk.e());
            }
            if (collection.contains(ck.a.RSS_EXPANDED)) {
                arrayList.add(new qk.d());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new j(map));
            arrayList.add(new c());
            arrayList.add(new a());
            arrayList.add(new d());
            arrayList.add(new b());
            arrayList.add(new h());
            arrayList.add(new pk.e());
            arrayList.add(new qk.d());
        }
        this.f44109a = (k[]) arrayList.toArray(f44108b);
    }

    @Override // ok.k
    public Result b(int i10, gk.a aVar, Map map) {
        for (k kVar : this.f44109a) {
            try {
                return kVar.b(i10, aVar, map);
            } catch (ck.n unused) {
            }
        }
        throw ck.k.a();
    }

    @Override // ok.k, ck.m
    public void reset() {
        for (k kVar : this.f44109a) {
            kVar.reset();
        }
    }
}
