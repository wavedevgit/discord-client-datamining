package uk;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final k[] f51666b = new k[0];

    /* renamed from: a  reason: collision with root package name */
    private final k[] f51667a;

    public i(Map map) {
        Collection collection;
        boolean z10;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(ik.e.POSSIBLE_FORMATS);
        }
        if (map != null && map.get(ik.e.ASSUME_CODE_39_CHECK_DIGIT) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(ik.a.EAN_13) || collection.contains(ik.a.UPC_A) || collection.contains(ik.a.EAN_8) || collection.contains(ik.a.UPC_E)) {
                arrayList.add(new j(map));
            }
            if (collection.contains(ik.a.CODE_39)) {
                arrayList.add(new c(z10));
            }
            if (collection.contains(ik.a.CODE_93)) {
                arrayList.add(new d());
            }
            if (collection.contains(ik.a.CODE_128)) {
                arrayList.add(new b());
            }
            if (collection.contains(ik.a.ITF)) {
                arrayList.add(new h());
            }
            if (collection.contains(ik.a.CODABAR)) {
                arrayList.add(new a());
            }
            if (collection.contains(ik.a.RSS_14)) {
                arrayList.add(new vk.e());
            }
            if (collection.contains(ik.a.RSS_EXPANDED)) {
                arrayList.add(new wk.d());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new j(map));
            arrayList.add(new c());
            arrayList.add(new a());
            arrayList.add(new d());
            arrayList.add(new b());
            arrayList.add(new h());
            arrayList.add(new vk.e());
            arrayList.add(new wk.d());
        }
        this.f51667a = (k[]) arrayList.toArray(f51666b);
    }

    @Override // uk.k
    public Result b(int i10, mk.a aVar, Map map) {
        for (k kVar : this.f51667a) {
            try {
                return kVar.b(i10, aVar, map);
            } catch (ik.n unused) {
            }
        }
        throw ik.k.a();
    }

    @Override // uk.k, ik.m
    public void reset() {
        for (k kVar : this.f51667a) {
            kVar.reset();
        }
    }
}
