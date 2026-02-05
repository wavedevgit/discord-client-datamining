package rk;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final k[] f48850b = new k[0];

    /* renamed from: a  reason: collision with root package name */
    private final k[] f48851a;

    public i(Map map) {
        Collection collection;
        boolean z10;
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(fk.e.POSSIBLE_FORMATS);
        }
        if (map != null && map.get(fk.e.ASSUME_CODE_39_CHECK_DIGIT) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(fk.a.EAN_13) || collection.contains(fk.a.UPC_A) || collection.contains(fk.a.EAN_8) || collection.contains(fk.a.UPC_E)) {
                arrayList.add(new j(map));
            }
            if (collection.contains(fk.a.CODE_39)) {
                arrayList.add(new c(z10));
            }
            if (collection.contains(fk.a.CODE_93)) {
                arrayList.add(new d());
            }
            if (collection.contains(fk.a.CODE_128)) {
                arrayList.add(new b());
            }
            if (collection.contains(fk.a.ITF)) {
                arrayList.add(new h());
            }
            if (collection.contains(fk.a.CODABAR)) {
                arrayList.add(new a());
            }
            if (collection.contains(fk.a.RSS_14)) {
                arrayList.add(new sk.e());
            }
            if (collection.contains(fk.a.RSS_EXPANDED)) {
                arrayList.add(new tk.d());
            }
        }
        if (arrayList.isEmpty()) {
            arrayList.add(new j(map));
            arrayList.add(new c());
            arrayList.add(new a());
            arrayList.add(new d());
            arrayList.add(new b());
            arrayList.add(new h());
            arrayList.add(new sk.e());
            arrayList.add(new tk.d());
        }
        this.f48851a = (k[]) arrayList.toArray(f48850b);
    }

    @Override // rk.k
    public Result b(int i10, jk.a aVar, Map map) {
        for (k kVar : this.f48851a) {
            try {
                return kVar.b(i10, aVar, map);
            } catch (fk.n unused) {
            }
        }
        throw fk.k.a();
    }

    @Override // rk.k, fk.m
    public void reset() {
        for (k kVar : this.f48851a) {
            kVar.reset();
        }
    }
}
