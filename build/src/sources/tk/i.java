package tk;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final k[] f50713b = new k[0];

    /* renamed from: a  reason: collision with root package name */
    private final k[] f50714a;

    public i(Map map) {
        Collection collection;
        boolean z10;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(hk.e.POSSIBLE_FORMATS);
        }
        if (map != null && map.get(hk.e.ASSUME_CODE_39_CHECK_DIGIT) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(hk.a.EAN_13) || collection.contains(hk.a.UPC_A) || collection.contains(hk.a.EAN_8) || collection.contains(hk.a.UPC_E)) {
                arrayList.add(new j(map));
            }
            if (collection.contains(hk.a.CODE_39)) {
                arrayList.add(new c(z10));
            }
            if (collection.contains(hk.a.CODE_93)) {
                arrayList.add(new d());
            }
            if (collection.contains(hk.a.CODE_128)) {
                arrayList.add(new b());
            }
            if (collection.contains(hk.a.ITF)) {
                arrayList.add(new h());
            }
            if (collection.contains(hk.a.CODABAR)) {
                arrayList.add(new a());
            }
            if (collection.contains(hk.a.RSS_14)) {
                arrayList.add(new uk.e());
            }
            if (collection.contains(hk.a.RSS_EXPANDED)) {
                arrayList.add(new vk.d());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new j(map));
            arrayList.add(new c());
            arrayList.add(new a());
            arrayList.add(new d());
            arrayList.add(new b());
            arrayList.add(new h());
            arrayList.add(new uk.e());
            arrayList.add(new vk.d());
        }
        this.f50714a = (k[]) arrayList.toArray(f50713b);
    }

    @Override // tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        for (k kVar : this.f50714a) {
            try {
                return kVar.b(i10, aVar, map);
            } catch (hk.n unused) {
            }
        }
        throw hk.k.a();
    }

    @Override // tk.k, hk.m
    public void reset() {
        for (k kVar : this.f50714a) {
            kVar.reset();
        }
    }
}
