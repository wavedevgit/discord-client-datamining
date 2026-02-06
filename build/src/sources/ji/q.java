package ji;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class q implements h {
    public static void c(ClassLoader classLoader, Set set, p pVar) {
        if (set.isEmpty()) {
            return;
        }
        HashSet hashSet = new HashSet();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            hashSet.add(((File) it.next()).getParentFile());
        }
        Object c10 = m.c(classLoader);
        c0 b10 = d0.b(c10, "nativeLibraryDirectories", List.class);
        synchronized (ii.g.class) {
            ArrayList arrayList = new ArrayList((Collection) b10.a());
            hashSet.removeAll(arrayList);
            arrayList.addAll(hashSet);
            b10.c(arrayList);
        }
        ArrayList arrayList2 = new ArrayList();
        Object[] a10 = pVar.a(c10, new ArrayList(hashSet), null, arrayList2);
        if (!arrayList2.isEmpty()) {
            a0 a0Var = new a0("Error in makePathElements");
            int size = arrayList2.size();
            for (int i10 = 0; i10 < size; i10++) {
                try {
                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(a0Var, (IOException) arrayList2.get(i10));
                } catch (Exception unused) {
                }
            }
            throw a0Var;
        }
        synchronized (ii.g.class) {
            d0.a(c10, "nativeLibraryPathElements", Object.class).e(Arrays.asList(a10));
        }
    }

    public static boolean d(ClassLoader classLoader, File file, File file2, boolean z10, String str) {
        return m.d(classLoader, file, file2, z10, new n(), "zip", new j());
    }
}
