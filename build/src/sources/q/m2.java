package q;

import android.hardware.camera2.CameraCharacteristics;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class m2 {
    private static String a(r.n0 n0Var, Integer num, List list) {
        if (num != null && list.contains("0") && list.contains("1")) {
            if (num.intValue() == 1) {
                if (((Integer) n0Var.c("0").a(CameraCharacteristics.LENS_FACING)).intValue() == 1) {
                    return "1";
                }
            } else if (num.intValue() == 0 && ((Integer) n0Var.c("1").a(CameraCharacteristics.LENS_FACING)).intValue() == 0) {
                return "0";
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List b(w wVar, x.p pVar) {
        String str;
        try {
            ArrayList arrayList = new ArrayList();
            List<String> asList = Arrays.asList(wVar.c().d());
            if (pVar == null) {
                for (String str2 : asList) {
                    arrayList.add(str2);
                }
            } else {
                try {
                    str = a(wVar.c(), pVar.d(), asList);
                } catch (IllegalStateException unused) {
                    str = null;
                }
                ArrayList arrayList2 = new ArrayList();
                for (String str3 : asList) {
                    if (!str3.equals(str)) {
                        arrayList2.add(wVar.f(str3));
                    }
                }
                for (x.o oVar : pVar.b(arrayList2)) {
                    arrayList.add(((a0.d0) oVar).b());
                }
            }
            return arrayList;
        } catch (r.f e10) {
            throw new x.w0(o2.a(e10));
        } catch (x.r e11) {
            throw new x.w0(e11);
        }
    }
}
