package ep;

import android.os.Parcel;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import oo.d;
import to.d0;
import wp.a1;
import yq.e;
import yq.f;
import yq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: ep.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0311a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23049a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f23050b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f23051c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f49037d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f49038e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f49039i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23049a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f49022d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f49023e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f49024i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f23050b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f52965e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f52966i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f23051c = iArr3;
        }
    }

    private static final yq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                to.k0 k0Var = (to.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new yq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new yq.b(null, null);
            }
        }
    }

    private static final yq.e b(to.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String w12 = d0Var.w1();
        int i10 = C0311a.f23049a[d0Var.V0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f55750i;
                } else {
                    throw new as.p();
                }
            } else {
                dVar = e.d.f55749e;
            }
        } else {
            dVar = e.d.f55748d;
        }
        int i11 = C0311a.f23050b[d0Var.g2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f55743i;
                } else {
                    throw new as.p();
                }
            } else {
                aVar = e.a.f55741d;
            }
        } else {
            aVar = e.a.f55742e;
        }
        ArrayList arrayList = new ArrayList();
        for (to.c0 c0Var : d0Var.m2()) {
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
        return new yq.e(w12, dVar, aVar, arrayList);
    }

    private static final yq.f c(wp.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0311a.f23051c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f55755d;
                } else {
                    throw new as.p();
                }
            } else {
                aVar = f.a.f55756e;
            }
            return new yq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final yq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            yq.g h10 = h((cq.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new yq.a(arrayList);
    }

    private static final yq.g e(qo.c cVar) {
        yq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (oo.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new yq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new yq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new as.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final yq.g f(ap.d dVar) {
        String b10 = dVar.b();
        List<to.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (to.d0 d0Var : a10) {
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

    private static final yq.g g(yp.b bVar) {
        yq.f fVar;
        yq.f fVar2;
        String b10 = bVar.b();
        wp.a1 a10 = bVar.a();
        yq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        wp.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        wp.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final yq.g h(cq.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof br.c) {
            return i((br.c) fVar);
        }
        if (fVar instanceof yp.b) {
            return g((yp.b) fVar);
        }
        if (fVar instanceof ap.d) {
            return f((ap.d) fVar);
        }
        if (fVar instanceof qo.c) {
            return e((qo.c) fVar);
        }
        return null;
    }

    public static final yq.g i(br.c cVar) {
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
