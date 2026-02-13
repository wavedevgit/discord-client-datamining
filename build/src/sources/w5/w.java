package w5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import u5.e;
import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52910a = c.a.a("w", "h", "ip", "op", "fr", "v", "layers", "assets", "fonts", "chars", "markers");

    /* renamed from: b  reason: collision with root package name */
    static c.a f52911b = c.a.a(StackTraceHelper.ID_KEY, "layers", "w", "h", "p", "u");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f52912c = c.a.a("list");

    /* renamed from: d  reason: collision with root package name */
    private static final c.a f52913d = c.a.a("cm", "tm", "dr");

    public static l5.i a(x5.c cVar) {
        float f10;
        x5.c cVar2 = cVar;
        float e10 = y5.j.e();
        u0.j jVar = new u0.j();
        ArrayList arrayList = new ArrayList();
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        HashMap hashMap3 = new HashMap();
        ArrayList arrayList2 = new ArrayList();
        SparseArrayCompat sparseArrayCompat = new SparseArrayCompat();
        l5.i iVar = new l5.i();
        cVar2.u();
        float f11 = 0.0f;
        float f12 = 0.0f;
        float f13 = 0.0f;
        int i10 = 0;
        int i11 = 0;
        while (cVar2.hasNext()) {
            switch (cVar2.p(f52910a)) {
                case 0:
                    i11 = cVar.nextInt();
                    cVar2 = cVar;
                case 1:
                    i10 = cVar.nextInt();
                    cVar2 = cVar;
                case 2:
                    f10 = e10;
                    f11 = (float) cVar.nextDouble();
                    cVar2 = cVar;
                    e10 = f10;
                case 3:
                    f10 = e10;
                    f12 = ((float) cVar.nextDouble()) - 0.01f;
                    cVar2 = cVar;
                    e10 = f10;
                case 4:
                    f10 = e10;
                    f13 = (float) cVar.nextDouble();
                    cVar2 = cVar;
                    e10 = f10;
                case 5:
                    String[] split = cVar2.g1().split("\\.");
                    if (!y5.j.j(Integer.parseInt(split[0]), Integer.parseInt(split[1]), Integer.parseInt(split[2]), 4, 4, 0)) {
                        iVar.a("Lottie only supports bodymovin >= 4.4.0");
                    }
                    cVar2 = cVar;
                case 6:
                    e(cVar2, iVar, arrayList, jVar);
                    cVar2 = cVar;
                case 7:
                    b(cVar2, iVar, hashMap, hashMap2);
                    cVar2 = cVar;
                case 8:
                    d(cVar2, hashMap3);
                    cVar2 = cVar;
                case 9:
                    c(cVar2, iVar, sparseArrayCompat);
                    cVar2 = cVar;
                case 10:
                    f(cVar2, arrayList2);
                    cVar2 = cVar;
                default:
                    cVar2.s();
                    cVar2.T();
                    cVar2 = cVar;
            }
        }
        float f14 = e10;
        iVar.s(new Rect(0, 0, (int) (i11 * f14), (int) (i10 * f14)), f11, f12, f13, arrayList, jVar, hashMap, hashMap2, y5.j.e(), sparseArrayCompat, hashMap3, arrayList2, i11, i10);
        return iVar;
    }

    private static void b(x5.c cVar, l5.i iVar, Map map, Map map2) {
        cVar.x();
        while (cVar.hasNext()) {
            ArrayList arrayList = new ArrayList();
            u0.j jVar = new u0.j();
            cVar.u();
            int i10 = 0;
            int i11 = 0;
            String str = null;
            String str2 = null;
            String str3 = null;
            while (cVar.hasNext()) {
                int p10 = cVar.p(f52911b);
                if (p10 != 0) {
                    if (p10 != 1) {
                        if (p10 != 2) {
                            if (p10 != 3) {
                                if (p10 != 4) {
                                    if (p10 != 5) {
                                        cVar.s();
                                        cVar.T();
                                    } else {
                                        str3 = cVar.g1();
                                    }
                                } else {
                                    str2 = cVar.g1();
                                }
                            } else {
                                i11 = cVar.nextInt();
                            }
                        } else {
                            i10 = cVar.nextInt();
                        }
                    } else {
                        cVar.x();
                        while (cVar.hasNext()) {
                            u5.e b10 = v.b(cVar, iVar);
                            jVar.g(b10.e(), b10);
                            arrayList.add(b10);
                        }
                        cVar.v();
                    }
                } else {
                    str = cVar.g1();
                }
            }
            cVar.D();
            if (str2 != null) {
                l5.x xVar = new l5.x(i10, i11, str, str2, str3);
                map2.put(xVar.e(), xVar);
            } else {
                map.put(str, arrayList);
            }
        }
        cVar.v();
    }

    private static void c(x5.c cVar, l5.i iVar, SparseArrayCompat sparseArrayCompat) {
        cVar.x();
        while (cVar.hasNext()) {
            r5.d a10 = m.a(cVar, iVar);
            sparseArrayCompat.k(a10.hashCode(), a10);
        }
        cVar.v();
    }

    private static void d(x5.c cVar, Map map) {
        cVar.u();
        while (cVar.hasNext()) {
            if (cVar.p(f52912c) != 0) {
                cVar.s();
                cVar.T();
            } else {
                cVar.x();
                while (cVar.hasNext()) {
                    r5.c a10 = n.a(cVar);
                    map.put(a10.b(), a10);
                }
                cVar.v();
            }
        }
        cVar.D();
    }

    private static void e(x5.c cVar, l5.i iVar, List list, u0.j jVar) {
        cVar.x();
        int i10 = 0;
        while (cVar.hasNext()) {
            u5.e b10 = v.b(cVar, iVar);
            if (b10.g() == e.a.IMAGE) {
                i10++;
            }
            list.add(b10);
            jVar.g(b10.e(), b10);
            if (i10 > 4) {
                y5.d.c("You have " + i10 + " images. Lottie should primarily be used with shapes. If you are using Adobe Illustrator, convert the Illustrator layers to shape layers.");
            }
        }
        cVar.v();
    }

    private static void f(x5.c cVar, List list) {
        cVar.x();
        while (cVar.hasNext()) {
            cVar.u();
            float f10 = 0.0f;
            String str = null;
            float f11 = 0.0f;
            while (cVar.hasNext()) {
                int p10 = cVar.p(f52913d);
                if (p10 != 0) {
                    if (p10 != 1) {
                        if (p10 != 2) {
                            cVar.s();
                            cVar.T();
                        } else {
                            f11 = (float) cVar.nextDouble();
                        }
                    } else {
                        f10 = (float) cVar.nextDouble();
                    }
                } else {
                    str = cVar.g1();
                }
            }
            cVar.D();
            list.add(new r5.h(str, f10, f11));
        }
        cVar.v();
    }
}
