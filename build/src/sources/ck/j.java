package ck;

import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements m {

    /* renamed from: c  reason: collision with root package name */
    private static final m[] f8420c = new m[0];

    /* renamed from: a  reason: collision with root package name */
    private Map f8421a;

    /* renamed from: b  reason: collision with root package name */
    private m[] f8422b;

    private Result b(c cVar) {
        m[] mVarArr;
        m[] mVarArr2 = this.f8422b;
        if (mVarArr2 != null) {
            for (m mVar : mVarArr2) {
                if (!Thread.currentThread().isInterrupted()) {
                    try {
                        return mVar.a(cVar, this.f8421a);
                    } catch (n unused) {
                    }
                } else {
                    throw k.a();
                }
            }
            Map map = this.f8421a;
            if (map != null && map.containsKey(e.ALSO_INVERTED)) {
                cVar.a().c();
                for (m mVar2 : this.f8422b) {
                    if (!Thread.currentThread().isInterrupted()) {
                        try {
                            return mVar2.a(cVar, this.f8421a);
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

    @Override // ck.m
    public Result a(c cVar, Map map) {
        d(map);
        return b(cVar);
    }

    public Result c(c cVar) {
        if (this.f8422b == null) {
            d(null);
        }
        return b(cVar);
    }

    public void d(Map map) {
        boolean z10;
        Collection collection;
        this.f8421a = map;
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
                arrayList.add(new ok.i(map));
            }
            if (collection.contains(a.QR_CODE)) {
                arrayList.add(new wk.a());
            }
            if (collection.contains(a.DATA_MATRIX)) {
                arrayList.add(new jk.a());
            }
            if (collection.contains(a.AZTEC)) {
                arrayList.add(new dk.b());
            }
            if (collection.contains(a.PDF_417)) {
                arrayList.add(new sk.b());
            }
            if (collection.contains(a.MAXICODE)) {
                arrayList.add(new mk.a());
            }
            if (z11 && z10) {
                arrayList.add(new ok.i(map));
            }
        }
        if (arrayList.isEmpty()) {
            if (!z10) {
                arrayList.add(new ok.i(map));
            }
            arrayList.add(new wk.a());
            arrayList.add(new jk.a());
            arrayList.add(new dk.b());
            arrayList.add(new sk.b());
            arrayList.add(new mk.a());
            if (z10) {
                arrayList.add(new ok.i(map));
            }
        }
        this.f8422b = (m[]) arrayList.toArray(f8420c);
    }

    @Override // ck.m
    public void reset() {
        m[] mVarArr = this.f8422b;
        if (mVarArr != null) {
            for (m mVar : mVarArr) {
                mVar.reset();
            }
        }
    }
}
