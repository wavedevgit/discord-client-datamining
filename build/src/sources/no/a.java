package no;

import android.os.Parcel;
import bo.d0;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import fp.a1;
import hq.e;
import hq.f;
import hq.g;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import wn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: no.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0532a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f42115a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f42116b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f42117c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f6683d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f6684e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f6685i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f42115a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f6668d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f6669e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f6670i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f42116b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f24538e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f24539i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f42117c = iArr3;
        }
    }

    private static final hq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                bo.k0 k0Var = (bo.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new hq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new hq.b(null, null);
            }
        }
    }

    private static final hq.e b(bo.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String x12 = d0Var.x1();
        int i10 = C0532a.f42115a[d0Var.V0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f27875i;
                } else {
                    throw new jr.p();
                }
            } else {
                dVar = e.d.f27874e;
            }
        } else {
            dVar = e.d.f27873d;
        }
        int i11 = C0532a.f42116b[d0Var.c2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f27868i;
                } else {
                    throw new jr.p();
                }
            } else {
                aVar = e.a.f27866d;
            }
        } else {
            aVar = e.a.f27867e;
        }
        ArrayList arrayList = new ArrayList();
        for (bo.c0 c0Var : d0Var.i2()) {
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
        return new hq.e(x12, dVar, aVar, arrayList);
    }

    private static final hq.f c(fp.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0532a.f42117c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f27880d;
                } else {
                    throw new jr.p();
                }
            } else {
                aVar = f.a.f27881e;
            }
            return new hq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final hq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            hq.g h10 = h((lp.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new hq.a(arrayList);
    }

    private static final hq.g e(yn.c cVar) {
        hq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (wn.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new hq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new hq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new jr.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final hq.g f(jo.d dVar) {
        String b10 = dVar.b();
        List<bo.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (bo.d0 d0Var : a10) {
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

    private static final hq.g g(hp.b bVar) {
        hq.f fVar;
        hq.f fVar2;
        String b10 = bVar.b();
        fp.a1 a10 = bVar.a();
        hq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        fp.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        fp.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final hq.g h(lp.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof kq.c) {
            return i((kq.c) fVar);
        }
        if (fVar instanceof hp.b) {
            return g((hp.b) fVar);
        }
        if (fVar instanceof jo.d) {
            return f((jo.d) fVar);
        }
        if (fVar instanceof yn.c) {
            return e((yn.c) fVar);
        }
        return null;
    }

    public static final hq.g i(kq.c cVar) {
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
