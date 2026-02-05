package ii;

import java.io.File;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w implements h {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(ClassLoader classLoader, Set set) {
        q.c(classLoader, set, new u());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d(ClassLoader classLoader, File file, File file2, boolean z10) {
        return m.d(classLoader, file, file2, z10, new n(), "path", new v());
    }

    @Override // ii.h
    public final boolean a(ClassLoader classLoader, File file, File file2, boolean z10) {
        return d(classLoader, file, file2, z10);
    }

    @Override // ii.h
    public final void b(ClassLoader classLoader, Set set) {
        c(classLoader, set);
    }
}
