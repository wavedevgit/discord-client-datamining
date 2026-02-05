package fk;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements m {

    /* renamed from: c  reason: collision with root package name */
    private static final m[] f23077c = new m[0];

    /* renamed from: a  reason: collision with root package name */
    private Map f23078a;

    /* renamed from: b  reason: collision with root package name */
    private m[] f23079b;

    private Result b(c cVar) {
        m[] mVarArr;
        m[] mVarArr2 = this.f23079b;
        if (mVarArr2 != null) {
            for (m mVar : mVarArr2) {
                if (!Thread.currentThread().isInterrupted()) {
                    try {
                        return mVar.a(cVar, this.f23078a);
                    } catch (n unused) {
                    }
                } else {
                    throw k.a();
                }
            }
            Map map = this.f23078a;
            if (map != null && map.containsKey(e.ALSO_INVERTED)) {
                cVar.a().c();
                for (m mVar2 : this.f23079b) {
                    if (!Thread.currentThread().isInterrupted()) {
                        try {
                            return mVar2.a(cVar, this.f23078a);
                        } catch (n unused2) {
                        }
                    } else {
                        throw k.a();
                    }
                }
            }
        }
        throw k.a();
    }

    @Override // fk.m
    public Result a(c cVar, Map map) {
        d(map);
        return b(cVar);
    }

    public Result c(c cVar) {
        if (this.f23079b == null) {
            d(null);
        }
        return b(cVar);
    }

    public void d(Map map) {
        boolean z10;
        Collection collection;
        this.f23078a = map;
        boolean z11 = false;
        if (map != null && map.containsKey(e.TRY_HARDER)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (map == null) {
            collection = null;
        } else {
            collection = (Collection) map.get(e.POSSIBLE_FORMATS);
        }
        ArrayList arrayList = new ArrayList();
        if (collection != null) {
            if (collection.contains(a.UPC_A) || collection.contains(a.UPC_E) || collection.contains(a.EAN_13) || collection.contains(a.EAN_8) || collection.contains(a.CODABAR) || collection.contains(a.CODE_39) || collection.contains(a.CODE_93) || collection.contains(a.CODE_128) || collection.contains(a.ITF) || collection.contains(a.RSS_14) || collection.contains(a.RSS_EXPANDED)) {
                z11 = true;
            }
            if (z11 && !z10) {
                arrayList.add(new rk.i(map));
            }
            if (collection.contains(a.QR_CODE)) {
                arrayList.add(new zk.a());
            }
            if (collection.contains(a.DATA_MATRIX)) {
                arrayList.add(new mk.a());
            }
            if (collection.contains(a.AZTEC)) {
                arrayList.add(new gk.b());
            }
            if (collection.contains(a.PDF_417)) {
                arrayList.add(new vk.b());
            }
            if (collection.contains(a.MAXICODE)) {
                arrayList.add(new pk.a());
            }
            if (z11 && z10) {
                arrayList.add(new rk.i(map));
            }
        }
        if (arrayList.isEmpty()) {
            if (!z10) {
                arrayList.add(new rk.i(map));
            }
            arrayList.add(new zk.a());
            arrayList.add(new mk.a());
            arrayList.add(new gk.b());
            arrayList.add(new vk.b());
            arrayList.add(new pk.a());
            if (z10) {
                arrayList.add(new rk.i(map));
            }
        }
        this.f23079b = (m[]) arrayList.toArray(f23077c);
    }

    @Override // fk.m
    public void reset() {
        m[] mVarArr = this.f23079b;
        if (mVarArr != null) {
            for (m mVar : mVarArr) {
                mVar.reset();
            }
        }
    }
}
