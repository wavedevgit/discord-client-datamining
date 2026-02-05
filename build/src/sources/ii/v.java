package ii;

import android.util.Log;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements k {
    @Override // ii.k
    public final boolean a(Object obj, File file, File file2) {
        try {
            if (((Boolean) d0.f(Class.forName("dalvik.system.DexFile"), "isDexOptNeeded", Boolean.class, String.class, file.getPath())).booleanValue()) {
                return false;
            }
            return true;
        } catch (ClassNotFoundException unused) {
            Log.e("SplitCompat", "Unexpected missing dalvik.system.DexFile.");
            return false;
        }
    }
}
