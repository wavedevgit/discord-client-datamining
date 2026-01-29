package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Preview3AThreadCrashQuirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        return "samsungexynos7870".equalsIgnoreCase(Build.HARDWARE);
    }
}
