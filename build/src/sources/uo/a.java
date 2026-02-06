package uo;

import android.os.Parcel;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import eo.d;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jo.d0;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import mp.a1;
import oq.e;
import oq.f;
import oq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: uo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0681a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51869a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f51870b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f51871c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f30046d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f30047e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f30048i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51869a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f30031d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f30032e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f30033i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f51870b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f37282e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f37283i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f51871c = iArr3;
        }
    }

    private static final oq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                jo.k0 k0Var = (jo.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new oq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new oq.b(null, null);
            }
        }
    }

    private static final oq.e b(jo.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String w12 = d0Var.w1();
        int i10 = C0681a.f51869a[d0Var.O0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f43358i;
                } else {
                    throw new qr.p();
                }
            } else {
                dVar = e.d.f43357e;
            }
        } else {
            dVar = e.d.f43356d;
        }
        int i11 = C0681a.f51870b[d0Var.b2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f43351i;
                } else {
                    throw new qr.p();
                }
            } else {
                aVar = e.a.f43349d;
            }
        } else {
            aVar = e.a.f43350e;
        }
        ArrayList arrayList = new ArrayList();
        for (jo.c0 c0Var : d0Var.i2()) {
            File file = new File(c0Var.a());
            if (file.exists()) {
                cVar = new e.c(file, c0Var.b());
            } else {
                cVar = null;
            }
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        return new oq.e(w12, dVar, aVar, arrayList);
    }

    private static final oq.f c(mp.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0681a.f51871c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f43363d;
                } else {
                    throw new qr.p();
                }
            } else {
                aVar = f.a.f43364e;
            }
            return new oq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final oq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            oq.g h10 = h((sp.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new oq.a(arrayList);
    }

    private static final oq.g e(go.c cVar) {
        oq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (eo.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new oq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new oq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new qr.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final oq.g f(qo.d dVar) {
        String b10 = dVar.b();
        List<jo.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (jo.d0 d0Var : a10) {
            arrayList.add(b(d0Var));
        }
        ArrayList<d0.b> arrayList2 = new ArrayList();
        for (Object obj : dVar.a()) {
            if (obj instanceof d0.b) {
                arrayList2.add(obj);
            }
        }
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
        for (d0.b bVar : arrayList2) {
            arrayList3.add(bVar.c());
        }
        return new g.b(b10, arrayList, a(arrayList3));
    }

    private static final oq.g g(op.b bVar) {
        oq.f fVar;
        oq.f fVar2;
        String b10 = bVar.b();
        mp.a1 a10 = bVar.a();
        oq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        mp.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        mp.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final oq.g h(sp.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof rq.c) {
            return i((rq.c) fVar);
        }
        if (fVar instanceof op.b) {
            return g((op.b) fVar);
        }
        if (fVar instanceof qo.d) {
            return f((qo.d) fVar);
        }
        if (fVar instanceof go.c) {
            return e((go.c) fVar);
        }
        return null;
    }

    public static final oq.g i(rq.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        Parcel obtain = Parcel.obtain();
        Intrinsics.checkNotNullExpressionValue(obtain, "obtain(...)");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry entry : cVar.a().entrySet()) {
            String str = (String) entry.getKey();
            try {
                Object a10 = com.withpersona.sdk2.inquiry.ui.network.a.a((ComponentParam) entry.getValue());
                obtain.writeValue(a10);
                linkedHashMap.put(str, a10);
            } catch (RuntimeException unused) {
            }
        }
        obtain.recycle();
        return new g.d(cVar.b(), linkedHashMap);
    }
}
