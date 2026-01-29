package v5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import t5.e;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50718a = c.a.a("w", "h", "ip", "op", "fr", "v", "layers", "assets", "fonts", "chars", "markers");

    /* renamed from: b  reason: collision with root package name */
    static c.a f50719b = c.a.a(StackTraceHelper.ID_KEY, "layers", "w", "h", "p", "u");

    /* renamed from: c  reason: collision with root package name */
    private static final c.a f50720c = c.a.a("list");

    /* renamed from: d  reason: collision with root package name */
    private static final c.a f50721d = c.a.a("cm", "tm", "dr");

    public static l5.i a(w5.c cVar) {
        float f10;
        w5.c cVar2 = cVar;
        float e10 = x5.j.e();
        u0.j jVar = new u0.j();
        ArrayList arrayList = new ArrayList();
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        HashMap hashMap3 = new HashMap();
        ArrayList arrayList2 = new ArrayList();
        SparseArrayCompat sparseArrayCompat = new SparseArrayCompat();
        l5.i iVar = new l5.i();
        cVar2.r();
        float f11 = 0.0f;
        float f12 = 0.0f;
        float f13 = 0.0f;
        int i10 = 0;
        int i11 = 0;
        while (cVar2.hasNext()) {
            switch (cVar2.B(f50718a)) {
                case 0:
                    i10 = cVar.nextInt();
                    cVar2 = cVar;
                case 1:
                    i11 = cVar.nextInt();
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
                    String[] split = cVar2.e1().split("\\.");
                    if (!x5.j.j(Integer.parseInt(split[0]), Integer.parseInt(split[1]), Integer.parseInt(split[2]), 4, 4, 0)) {
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
                    cVar2.E();
                    cVar2.P();
                    cVar2 = cVar;
            }
        }
        float f14 = e10;
        iVar.s(new Rect(0, 0, (int) (i10 * f14), (int) (i11 * f14)), f11, f12, f13, arrayList, jVar, hashMap, hashMap2, x5.j.e(), sparseArrayCompat, hashMap3, arrayList2);
        return iVar;
    }

    private static void b(w5.c cVar, l5.i iVar, Map map, Map map2) {
        cVar.u();
        while (cVar.hasNext()) {
            ArrayList arrayList = new ArrayList();
            u0.j jVar = new u0.j();
            cVar.r();
            int i10 = 0;
            int i11 = 0;
            String str = null;
            String str2 = null;
            String str3 = null;
            while (cVar.hasNext()) {
                int B = cVar.B(f50719b);
                if (B != 0) {
                    if (B != 1) {
                        if (B != 2) {
                            if (B != 3) {
                                if (B != 4) {
                                    if (B != 5) {
                                        cVar.E();
                                        cVar.P();
                                    } else {
                                        str3 = cVar.e1();
                                    }
                                } else {
                                    str2 = cVar.e1();
                                }
                            } else {
                                i11 = cVar.nextInt();
                            }
                        } else {
                            i10 = cVar.nextInt();
                        }
                    } else {
                        cVar.u();
                        while (cVar.hasNext()) {
                            t5.e b10 = v.b(cVar, iVar);
                            jVar.g(b10.e(), b10);
                            arrayList.add(b10);
                        }
                        cVar.s();
                    }
                } else {
                    str = cVar.e1();
                }
            }
            cVar.y();
            if (str2 != null) {
                l5.w wVar = new l5.w(i10, i11, str, str2, str3);
                map2.put(wVar.e(), wVar);
            } else {
                map.put(str, arrayList);
            }
        }
        cVar.s();
    }

    private static void c(w5.c cVar, l5.i iVar, SparseArrayCompat sparseArrayCompat) {
        cVar.u();
        while (cVar.hasNext()) {
            q5.d a10 = m.a(cVar, iVar);
            sparseArrayCompat.k(a10.hashCode(), a10);
        }
        cVar.s();
    }

    private static void d(w5.c cVar, Map map) {
        cVar.r();
        while (cVar.hasNext()) {
            if (cVar.B(f50720c) != 0) {
                cVar.E();
                cVar.P();
            } else {
                cVar.u();
                while (cVar.hasNext()) {
                    q5.c a10 = n.a(cVar);
                    map.put(a10.b(), a10);
                }
                cVar.s();
            }
        }
        cVar.y();
    }

    private static void e(w5.c cVar, l5.i iVar, List list, u0.j jVar) {
        cVar.u();
        int i10 = 0;
        while (cVar.hasNext()) {
            t5.e b10 = v.b(cVar, iVar);
            if (b10.g() == e.a.IMAGE) {
                i10++;
            }
            list.add(b10);
            jVar.g(b10.e(), b10);
            if (i10 > 4) {
                x5.d.c("You have " + i10 + " images. Lottie should primarily be used with shapes. If you are using Adobe Illustrator, convert the Illustrator layers to shape layers.");
            }
        }
        cVar.s();
    }

    private static void f(w5.c cVar, List list) {
        cVar.u();
        while (cVar.hasNext()) {
            cVar.r();
            float f10 = 0.0f;
            String str = null;
            float f11 = 0.0f;
            while (cVar.hasNext()) {
                int B = cVar.B(f50721d);
                if (B != 0) {
                    if (B != 1) {
                        if (B != 2) {
                            cVar.E();
                            cVar.P();
                        } else {
                            f11 = (float) cVar.nextDouble();
                        }
                    } else {
                        f10 = (float) cVar.nextDouble();
                    }
                } else {
                    str = cVar.e1();
                }
            }
            cVar.y();
            list.add(new q5.h(str, f10, f11));
        }
        cVar.s();
    }
}
