package mo;

import android.os.Parcel;
import ao.d0;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import ep.a1;
import gq.e;
import gq.f;
import gq.g;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import vn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: mo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0500a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f39372a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f39373b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f39374c;

        static {
            int[] iArr = new int[d0.d.values().length];
            try {
                iArr[d0.d.f5860d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.d.f5861e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.d.f5862i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f39372a = iArr;
            int[] iArr2 = new int[d0.a.values().length];
            try {
                iArr2[d0.a.f5845d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[d0.a.f5846e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[d0.a.f5847i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f39373b = iArr2;
            int[] iArr3 = new int[a1.a.values().length];
            try {
                iArr3[a1.a.f23007e.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[a1.a.f23008i.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f39374c = iArr3;
        }
    }

    private static final gq.b a(List list) {
        Iterator it = list.iterator();
        while (true) {
            Date date = null;
            if (it.hasNext()) {
                ao.k0 k0Var = (ao.k0) it.next();
                if (k0Var != null) {
                    date = k0Var.a();
                }
                if (date != null && k0Var.b() != null) {
                    return new gq.b(k0Var.a(), k0Var.b());
                }
            } else {
                return new gq.b(null, null);
            }
        }
    }

    private static final gq.e b(ao.d0 d0Var) {
        e.d dVar;
        e.a aVar;
        e.c cVar;
        String x12 = d0Var.x1();
        int i10 = C0500a.f39372a[d0Var.U0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    dVar = e.d.f27128i;
                } else {
                    throw new ir.p();
                }
            } else {
                dVar = e.d.f27127e;
            }
        } else {
            dVar = e.d.f27126d;
        }
        int i11 = C0500a.f39373b[d0Var.c2().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    aVar = e.a.f27121i;
                } else {
                    throw new ir.p();
                }
            } else {
                aVar = e.a.f27119d;
            }
        } else {
            aVar = e.a.f27120e;
        }
        ArrayList arrayList = new ArrayList();
        for (ao.c0 c0Var : d0Var.i2()) {
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
        return new gq.e(x12, dVar, aVar, arrayList);
    }

    private static final gq.f c(ep.a1 a1Var) {
        f.a aVar;
        if (new File(a1Var.a()).exists()) {
            int i10 = C0500a.f39374c[a1Var.b().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    aVar = f.a.f27133d;
                } else {
                    throw new ir.p();
                }
            } else {
                aVar = f.a.f27134e;
            }
            return new gq.f(aVar, new File(a1Var.a()));
        }
        return null;
    }

    public static final gq.a d(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            gq.g h10 = h((kp.f) it.next());
            if (h10 != null) {
                arrayList.add(h10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new gq.a(arrayList);
    }

    private static final gq.g e(xn.c cVar) {
        gq.c cVar2;
        String b10 = cVar.b();
        ArrayList arrayList = new ArrayList();
        for (vn.d dVar : cVar.a()) {
            if (dVar instanceof d.a) {
                cVar2 = new gq.c(new File(((d.a) dVar).c()));
            } else if (dVar instanceof d.b) {
                String a10 = ((d.b) dVar).a();
                if (a10 != null) {
                    cVar2 = new gq.c(new File(a10));
                } else {
                    cVar2 = null;
                }
            } else {
                throw new ir.p();
            }
            if (cVar2 != null) {
                arrayList.add(cVar2);
            }
        }
        return new g.a(b10, arrayList);
    }

    private static final gq.g f(io.d dVar) {
        String b10 = dVar.b();
        List<ao.d0> a10 = dVar.a();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (ao.d0 d0Var : a10) {
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

    private static final gq.g g(gp.b bVar) {
        gq.f fVar;
        gq.f fVar2;
        String b10 = bVar.b();
        ep.a1 a10 = bVar.a();
        gq.f fVar3 = null;
        if (a10 != null) {
            fVar = c(a10);
        } else {
            fVar = null;
        }
        ep.a1 a11 = bVar.a();
        if (a11 != null) {
            fVar2 = c(a11);
        } else {
            fVar2 = null;
        }
        ep.a1 a12 = bVar.a();
        if (a12 != null) {
            fVar3 = c(a12);
        }
        return new g.c(b10, fVar, fVar2, fVar3);
    }

    public static final gq.g h(kp.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        if (fVar instanceof jq.c) {
            return i((jq.c) fVar);
        }
        if (fVar instanceof gp.b) {
            return g((gp.b) fVar);
        }
        if (fVar instanceof io.d) {
            return f((io.d) fVar);
        }
        if (fVar instanceof xn.c) {
            return e((xn.c) fVar);
        }
        return null;
    }

    public static final gq.g i(jq.c cVar) {
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
