package xn;

import android.os.Build;
import java.io.File;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static final boolean a() {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        boolean z10;
        String str7 = Build.BRAND;
        if (str7 == null || (str = Build.DEVICE) == null || (str2 = Build.FINGERPRINT) == null || (str3 = Build.HARDWARE) == null || (str4 = Build.MODEL) == null || (str5 = Build.MANUFACTURER) == null || (str6 = Build.PRODUCT) == null) {
            return true;
        }
        if (!new File("/storage/emulated/0/Android/data/com.android.ld.appstore/files").exists() && !new File("/storage/emulated/0/Android/data/com.android.ld.appstore/cache").exists()) {
            z10 = false;
        } else {
            z10 = true;
        }
        if ((StringsKt.P(str7, "generic", false, 2, null) && StringsKt.P(str, "generic", false, 2, null)) || StringsKt.P(str2, "generic", false, 2, null) || StringsKt.P(str2, "unknown", false, 2, null) || StringsKt.V(str3, "goldfish", false, 2, null) || StringsKt.V(str3, "ranchu", false, 2, null) || StringsKt.V(str4, "google_sdk", false, 2, null) || StringsKt.V(str4, "Emulator", false, 2, null) || StringsKt.V(str4, "Android SDK built for x86", false, 2, null) || StringsKt.V(str5, "Genymotion", false, 2, null) || StringsKt.V(str6, "sdk_google", false, 2, null) || StringsKt.V(str6, "google_sdk", false, 2, null) || StringsKt.V(str6, "sdk", false, 2, null) || StringsKt.V(str6, "sdk_x86", false, 2, null) || StringsKt.V(str6, "sdk_gphone64_arm64", false, 2, null) || StringsKt.V(str6, "vbox86p", false, 2, null) || StringsKt.V(str6, "emulator", false, 2, null) || StringsKt.V(str6, "simulator", false, 2, null) || z10) {
            return true;
        }
        return false;
    }
}
