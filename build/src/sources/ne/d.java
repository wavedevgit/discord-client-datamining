package ne;

import android.os.Bundle;
import android.util.SparseArray;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import ji.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {
    public static HashMap a(Bundle bundle) {
        HashMap hashMap = new HashMap();
        if (bundle != Bundle.EMPTY) {
            for (String str : bundle.keySet()) {
                String string = bundle.getString(str);
                if (string != null) {
                    hashMap.put(str, string);
                }
            }
        }
        return hashMap;
    }

    public static ji.t b(Bundle bundle) {
        if (bundle == Bundle.EMPTY) {
            return ji.t.j();
        }
        return ji.t.c(a(bundle));
    }

    public static void c(Bundle bundle) {
        if (bundle != null) {
            bundle.setClassLoader((ClassLoader) w0.j(d.class.getClassLoader()));
        }
    }

    public static ji.s d(g.a aVar, List list) {
        s.a j10 = ji.s.j();
        for (int i10 = 0; i10 < list.size(); i10++) {
            j10.a(aVar.a((Bundle) a.e((Bundle) list.get(i10))));
        }
        return j10.k();
    }

    public static SparseArray e(g.a aVar, SparseArray sparseArray) {
        SparseArray sparseArray2 = new SparseArray(sparseArray.size());
        for (int i10 = 0; i10 < sparseArray.size(); i10++) {
            sparseArray2.put(sparseArray.keyAt(i10), aVar.a((Bundle) sparseArray.valueAt(i10)));
        }
        return sparseArray2;
    }

    public static Bundle f(Bundle bundle, String str, Bundle bundle2) {
        Bundle bundle3 = bundle.getBundle(str);
        if (bundle3 != null) {
            return bundle3;
        }
        return bundle2;
    }

    public static ArrayList g(Bundle bundle, String str, ArrayList arrayList) {
        ArrayList<Integer> integerArrayList = bundle.getIntegerArrayList(str);
        if (integerArrayList != null) {
            return integerArrayList;
        }
        return arrayList;
    }
}
