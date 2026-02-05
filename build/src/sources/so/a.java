package so;

import android.os.Parcel;
import bo.d;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import ho.d0;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kp.a1;
import mq.e;
import mq.f;
import mq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: so.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0639a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f50023a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f50024b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f50025c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f26050d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f26051e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f26052i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f50023a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f26035d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f26036e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f26037i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f50024b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f35126e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f35127i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f50025c = iArr3;
        }
    }

    private static final mq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                ho.k0 k0Var = (ho.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new mq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new mq.b(null, null);
            }
        }
    }

    private static final mq.e b(ho.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String x12 = d0Var.x1();
        int i10 = C0639a.f50023a[d0Var.V0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f38877i;
                } else {
                    throw new or.p();
                }
            } else {
                dVar = e.d.f38876e;
            }
        } else {
            dVar = e.d.f38875d;
        }
        int i11 = C0639a.f50024b[d0Var.c2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f38870i;
                } else {
                    throw new or.p();
                }
            } else {
                aVar = e.a.f38868d;
            }
        } else {
            aVar = e.a.f38869e;
        }
        ArrayList arrayList = new ArrayList();
        for (ho.c0 c0Var : d0Var.i2()) {
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
        return new mq.e(x12, dVar, aVar, arrayList);
    }

    private static final mq.f c(kp.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0639a.f50025c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f38882d;
                } else {
                    throw new or.p();
                }
            } else {
                aVar = f.a.f38883e;
            }
            return new mq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final mq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            mq.g h10 = h((qp.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new mq.a(arrayList);
    }

    private static final mq.g e(eo.c cVar) {
        mq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (bo.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new mq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new mq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new or.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final mq.g f(oo.d dVar) {
        String b10 = dVar.b();
        List<ho.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (ho.d0 d0Var : a10) {
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

    private static final mq.g g(mp.b bVar) {
        mq.f fVar;
        mq.f fVar2;
        String b10 = bVar.b();
        kp.a1 a10 = bVar.a();
        mq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        kp.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        kp.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final mq.g h(qp.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof pq.c) {
            return i((pq.c) fVar);
        }
        if (fVar instanceof mp.b) {
            return g((mp.b) fVar);
        }
        if (fVar instanceof oo.d) {
            return f((oo.d) fVar);
        }
        if (fVar instanceof eo.c) {
            return e((eo.c) fVar);
        }
        return null;
    }

    public static final mq.g i(pq.c cVar) {
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
