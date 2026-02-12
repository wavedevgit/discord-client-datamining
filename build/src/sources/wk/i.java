package wk;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final k[] f52879b = new k[0];

    /* renamed from: a  reason: collision with root package name */
    private final k[] f52880a;

    public i(Map map) {
        Collection collection;
        boolean z10;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(kk.e.POSSIBLE_FORMATS);
        }
        if (map != null && map.get(kk.e.ASSUME_CODE_39_CHECK_DIGIT) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(kk.a.EAN_13) || collection.contains(kk.a.UPC_A) || collection.contains(kk.a.EAN_8) || collection.contains(kk.a.UPC_E)) {
                arrayList.add(new j(map));
            }
            if (collection.contains(kk.a.CODE_39)) {
                arrayList.add(new c(z10));
            }
            if (collection.contains(kk.a.CODE_93)) {
                arrayList.add(new d());
            }
            if (collection.contains(kk.a.CODE_128)) {
                arrayList.add(new b());
            }
            if (collection.contains(kk.a.ITF)) {
                arrayList.add(new h());
            }
            if (collection.contains(kk.a.CODABAR)) {
                arrayList.add(new a());
            }
            if (collection.contains(kk.a.RSS_14)) {
                arrayList.add(new xk.e());
            }
            if (collection.contains(kk.a.RSS_EXPANDED)) {
                arrayList.add(new yk.d());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new j(map));
            arrayList.add(new c());
            arrayList.add(new a());
            arrayList.add(new d());
            arrayList.add(new b());
            arrayList.add(new h());
            arrayList.add(new xk.e());
            arrayList.add(new yk.d());
        }
        this.f52880a = (k[]) arrayList.toArray(f52879b);
    }

    @Override // wk.k
    public Result b(int i10, ok.a aVar, Map map) {
        for (k kVar : this.f52880a) {
            try {
                return kVar.b(i10, aVar, map);
            } catch (kk.n unused) {
            }
        }
        throw kk.k.a();
    }

    @Override // wk.k, kk.m
    public void reset() {
        for (k kVar : this.f52880a) {
            kVar.reset();
        }
    }
}
