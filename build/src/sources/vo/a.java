package vo;

import android.os.Parcel;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import fo.d;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import ko.d0;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import np.a1;
import pq.e;
import pq.f;
import pq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: vo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0726a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52777a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f52778b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f52779c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f31045d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f31046e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f31047i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f52777a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f31030d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f31031e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f31032i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f52778b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f39015e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f39016i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f52779c = iArr3;
        }
    }

    private static final pq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                ko.k0 k0Var = (ko.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new pq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new pq.b(null, null);
            }
        }
    }

    private static final pq.e b(ko.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String r12 = d0Var.r1();
        int i10 = C0726a.f52777a[d0Var.R0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f44464i;
                } else {
                    throw new rr.p();
                }
            } else {
                dVar = e.d.f44463e;
            }
        } else {
            dVar = e.d.f44462d;
        }
        int i11 = C0726a.f52778b[d0Var.a2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f44457i;
                } else {
                    throw new rr.p();
                }
            } else {
                aVar = e.a.f44455d;
            }
        } else {
            aVar = e.a.f44456e;
        }
        ArrayList arrayList = new ArrayList();
        for (ko.c0 c0Var : d0Var.h2()) {
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
        return new pq.e(r12, dVar, aVar, arrayList);
    }

    private static final pq.f c(np.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0726a.f52779c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f44469d;
                } else {
                    throw new rr.p();
                }
            } else {
                aVar = f.a.f44470e;
            }
            return new pq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final pq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            pq.g h10 = h((tp.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new pq.a(arrayList);
    }

    private static final pq.g e(ho.c cVar) {
        pq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (fo.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new pq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new pq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new rr.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final pq.g f(ro.d dVar) {
        String b10 = dVar.b();
        List<ko.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (ko.d0 d0Var : a10) {
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

    private static final pq.g g(pp.b bVar) {
        pq.f fVar;
        pq.f fVar2;
        String b10 = bVar.b();
        np.a1 a10 = bVar.a();
        pq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        np.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        np.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final pq.g h(tp.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof sq.c) {
            return i((sq.c) fVar);
        }
        if (fVar instanceof pp.b) {
            return g((pp.b) fVar);
        }
        if (fVar instanceof ro.d) {
            return f((ro.d) fVar);
        }
        if (fVar instanceof ho.c) {
            return e((ho.c) fVar);
        }
        return null;
    }

    public static final pq.g i(sq.c cVar) {
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
