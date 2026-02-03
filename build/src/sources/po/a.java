package po;

import android.os.Parcel;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import eo.d0;
import hp.a1;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jq.e;
import jq.f;
import jq.g;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import yn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: po.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0563a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f46407a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f46408b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f46409c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f21738d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f21739e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f21740i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f46407a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f21723d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f21724e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f21725i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f46408b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f27133e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f27134i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f46409c = iArr3;
        }
    }

    private static final jq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                eo.k0 k0Var = (eo.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new jq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new jq.b(null, null);
            }
        }
    }

    private static final jq.e b(eo.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String x12 = d0Var.x1();
        int i10 = C0563a.f46407a[d0Var.V0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f31915i;
                } else {
                    throw new lr.p();
                }
            } else {
                dVar = e.d.f31914e;
            }
        } else {
            dVar = e.d.f31913d;
        }
        int i11 = C0563a.f46408b[d0Var.c2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f31908i;
                } else {
                    throw new lr.p();
                }
            } else {
                aVar = e.a.f31906d;
            }
        } else {
            aVar = e.a.f31907e;
        }
        ArrayList arrayList = new ArrayList();
        for (eo.c0 c0Var : d0Var.i2()) {
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
        return new jq.e(x12, dVar, aVar, arrayList);
    }

    private static final jq.f c(hp.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0563a.f46409c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f31920d;
                } else {
                    throw new lr.p();
                }
            } else {
                aVar = f.a.f31921e;
            }
            return new jq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final jq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            jq.g h10 = h((np.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new jq.a(arrayList);
    }

    private static final jq.g e(ao.c cVar) {
        jq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (yn.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new jq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new jq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new lr.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final jq.g f(lo.d dVar) {
        String b10 = dVar.b();
        List<eo.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (eo.d0 d0Var : a10) {
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

    private static final jq.g g(jp.b bVar) {
        jq.f fVar;
        jq.f fVar2;
        String b10 = bVar.b();
        hp.a1 a10 = bVar.a();
        jq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        hp.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        hp.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final jq.g h(np.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof mq.c) {
            return i((mq.c) fVar);
        }
        if (fVar instanceof jp.b) {
            return g((jp.b) fVar);
        }
        if (fVar instanceof lo.d) {
            return f((lo.d) fVar);
        }
        if (fVar instanceof ao.c) {
            return e((ao.c) fVar);
        }
        return null;
    }

    public static final jq.g i(mq.c cVar) {
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
