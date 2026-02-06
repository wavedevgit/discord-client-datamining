package ek;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import android.util.SparseArray;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import dk.a;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import qg.e4;
import qg.fl;
import qg.j0;
import qg.ka;
import qg.m0;
import qg.r1;
import qg.rg;
import qg.rk;
import qg.uj;
import qg.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* renamed from: a  reason: collision with root package name */
    static final rk f21608a = rk.a(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);

    /* renamed from: b  reason: collision with root package name */
    private static final Comparator f21609b = new Comparator() { // from class: ek.h
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            rk rkVar = m.f21608a;
            return ((Integer) ((Map.Entry) obj).getValue()).compareTo((Integer) ((Map.Entry) obj2).getValue());
        }
    };

    /* JADX INFO: Access modifiers changed from: package-private */
    public static dk.a a(ka[] kaVarArr, final Matrix matrix) {
        SparseArray sparseArray = new SparseArray();
        int i10 = 0;
        for (ka kaVar : kaVarArr) {
            SparseArray sparseArray2 = (SparseArray) sparseArray.get(kaVar.f47324u);
            if (sparseArray2 == null) {
                sparseArray2 = new SparseArray();
                sparseArray.append(kaVar.f47324u, sparseArray2);
            }
            sparseArray2.append(kaVar.f47325v, kaVar);
        }
        j0 j0Var = new j0();
        int i11 = 0;
        while (i11 < sparseArray.size()) {
            SparseArray sparseArray3 = (SparseArray) sparseArray.valueAt(i11);
            j0 j0Var2 = new j0();
            for (int i12 = i10; i12 < sparseArray3.size(); i12++) {
                j0Var2.a((ka) sparseArray3.valueAt(i12));
            }
            m0 b10 = j0Var2.b();
            List a10 = w0.a(b10, new uj() { // from class: ek.j
                @Override // qg.uj
                public final Object a(Object obj) {
                    String str;
                    String str2;
                    ka kaVar2 = (ka) obj;
                    rk rkVar = m.f21608a;
                    List b11 = e.b(kaVar2.f47316e);
                    if (fl.b(kaVar2.f47319p)) {
                        str = "";
                    } else {
                        str = kaVar2.f47319p;
                    }
                    String str3 = str;
                    Rect a11 = e.a(b11);
                    if (fl.b(kaVar2.f47321r)) {
                        str2 = "und";
                    } else {
                        str2 = kaVar2.f47321r;
                    }
                    String str4 = str2;
                    final Matrix matrix2 = matrix;
                    return new a.b(str3, a11, b11, str4, matrix2, w0.a(Arrays.asList(kaVar2.f47315d), new uj() { // from class: ek.l
                        @Override // qg.uj
                        public final Object a(Object obj2) {
                            String str5;
                            String str6;
                            rg rgVar = (rg) obj2;
                            rk rkVar2 = m.f21608a;
                            List b12 = e.b(rgVar.f47493e);
                            if (fl.b(rgVar.f47495o)) {
                                str5 = "";
                            } else {
                                str5 = rgVar.f47495o;
                            }
                            String str7 = str5;
                            Rect a12 = e.a(b12);
                            if (fl.b(rgVar.f47497q)) {
                                str6 = "und";
                            } else {
                                str6 = rgVar.f47497q;
                            }
                            return new a.C0268a(str7, a12, b12, str6, matrix2, rgVar.f47496p, rgVar.f47493e.f47019p, m0.h());
                        }
                    }), kaVar2.f47320q, kaVar2.f47316e.f47019p);
                }
            });
            e4 e4Var = ((ka) b10.get(i10)).f47316e;
            r1 listIterator = b10.listIterator(i10);
            int i13 = Integer.MIN_VALUE;
            int i14 = Integer.MAX_VALUE;
            int i15 = Integer.MAX_VALUE;
            int i16 = Integer.MIN_VALUE;
            while (listIterator.hasNext()) {
                e4 e4Var2 = ((ka) listIterator.next()).f47316e;
                int i17 = i10;
                double sin = Math.sin(Math.toRadians(e4Var.f47019p));
                SparseArray sparseArray4 = sparseArray;
                int i18 = i11;
                double cos = Math.cos(Math.toRadians(e4Var.f47019p));
                Point[] pointArr = new Point[4];
                Point point = new Point(e4Var2.f47015d, e4Var2.f47016e);
                pointArr[i17] = point;
                point.offset(-e4Var.f47015d, -e4Var.f47016e);
                Point point2 = pointArr[i17];
                int i19 = point2.x;
                r1 r1Var = listIterator;
                int i20 = point2.y;
                int i21 = (int) ((i19 * cos) + (i20 * sin));
                point2.x = i21;
                int i22 = (int) (((-i19) * sin) + (i20 * cos));
                point2.y = i22;
                pointArr[1] = new Point(e4Var2.f47017i + i21, i22);
                pointArr[2] = new Point(e4Var2.f47017i + i21, e4Var2.f47018o + i22);
                pointArr[3] = new Point(i21, i22 + e4Var2.f47018o);
                for (int i23 = i17; i23 < 4; i23++) {
                    Point point3 = pointArr[i23];
                    i14 = Math.min(i14, point3.x);
                    i13 = Math.max(i13, point3.x);
                    i15 = Math.min(i15, point3.y);
                    i16 = Math.max(i16, point3.y);
                }
                listIterator = r1Var;
                i10 = i17;
                sparseArray = sparseArray4;
                i11 = i18;
            }
            SparseArray sparseArray5 = sparseArray;
            int i24 = i11;
            int i25 = i10;
            int i26 = e4Var.f47015d;
            int i27 = e4Var.f47016e;
            double sin2 = Math.sin(Math.toRadians(e4Var.f47019p));
            double cos2 = Math.cos(Math.toRadians(e4Var.f47019p));
            Point[] pointArr2 = {new Point(i14, i15), new Point(i13, i15), new Point(i13, i16), new Point(i14, i16)};
            int i28 = i25;
            while (i28 < 4) {
                Point point4 = pointArr2[i28];
                int i29 = point4.x;
                double d10 = sin2;
                int i30 = point4.y;
                point4.x = (int) ((i29 * cos2) - (i30 * d10));
                point4.y = (int) ((i29 * d10) + (i30 * cos2));
                point4.offset(i26, i27);
                i28++;
                sin2 = d10;
            }
            List asList = Arrays.asList(pointArr2);
            j0Var.a(new a.e(f21608a.b(w0.a(a10, new uj() { // from class: ek.k
                @Override // qg.uj
                public final Object a(Object obj) {
                    return ((a.b) obj).c();
                }
            })), e.a(asList), asList, b(a10), matrix, a10));
            i11 = i24 + 1;
            i10 = i25;
            sparseArray = sparseArray5;
        }
        m0 b11 = j0Var.b();
        return new dk.a(f21608a.b(w0.a(b11, new uj() { // from class: ek.i
            @Override // qg.uj
            public final Object a(Object obj) {
                return ((a.e) obj).d();
            }
        })), b11);
    }

    private static String b(List list) {
        int i10;
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String a10 = ((a.b) it.next()).a();
            if (hashMap.containsKey(a10)) {
                i10 = ((Integer) hashMap.get(a10)).intValue();
            } else {
                i10 = 0;
            }
            hashMap.put(a10, Integer.valueOf(i10 + 1));
        }
        Set entrySet = hashMap.entrySet();
        if (!entrySet.isEmpty()) {
            String str = (String) ((Map.Entry) Collections.max(entrySet, f21609b)).getKey();
            if (!fl.b(str)) {
                return str;
            }
            return "und";
        }
        return "und";
    }
}
