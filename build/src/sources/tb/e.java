package tb;

import android.os.Build;
import tb.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements c.b {
    @Override // tb.c.b
    public void a(String str) {
        System.loadLibrary(str);
    }

    @Override // tb.c.b
    public String b(String str) {
        if (str.startsWith("lib") && str.endsWith(".so")) {
            return str;
        }
        return System.mapLibraryName(str);
    }

    @Override // tb.c.b
    public String c(String str) {
        return str.substring(3, str.length() - 3);
    }

    @Override // tb.c.b
    public String[] d() {
        String[] strArr = Build.SUPPORTED_ABIS;
        if (strArr.length > 0) {
            return strArr;
        }
        String str = Build.CPU_ABI2;
        if (!f.a(str)) {
            return new String[]{Build.CPU_ABI, str};
        }
        return new String[]{Build.CPU_ABI};
    }

    @Override // tb.c.b
    public void e(String str) {
        System.load(str);
    }
}
