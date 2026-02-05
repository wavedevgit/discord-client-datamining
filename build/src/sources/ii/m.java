package ii;

import android.util.Log;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m implements h {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object c(ClassLoader classLoader) {
        return d0.b(classLoader, "pathList", Object.class).a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d(ClassLoader classLoader, File file, File file2, boolean z10, l lVar, String str, k kVar) {
        ArrayList arrayList = new ArrayList();
        Object c10 = c(classLoader);
        b0 a10 = d0.a(c10, "dexElements", Object.class);
        List<Object> asList = Arrays.asList((Object[]) a10.a());
        ArrayList arrayList2 = new ArrayList();
        for (Object obj : asList) {
            arrayList2.add((File) d0.b(obj, str, File.class).a());
        }
        if (arrayList2.contains(file2)) {
            return true;
        }
        if (!z10 && !kVar.a(c10, file2, file)) {
            Log.w("SplitCompat", "Should be optimized ".concat(String.valueOf(file2.getPath())));
            return false;
        }
        a10.d(Arrays.asList(lVar.a(c10, new ArrayList(Collections.singleton(file2)), file, arrayList)));
        if (arrayList.isEmpty()) {
            return true;
        }
        a0 a0Var = new a0("DexPathList.makeDexElement failed");
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            IOException iOException = (IOException) arrayList.get(i10);
            Log.e("SplitCompat", "DexPathList.makeDexElement failed", iOException);
            try {
                Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(a0Var, iOException);
            } catch (Exception unused) {
            }
        }
        d0.a(c10, "dexElementsSuppressedExceptions", IOException.class).d(arrayList);
        throw a0Var;
    }
}
