package androidx.camera.core.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LowMemoryQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f2125a = new HashSet(Arrays.asList("SM-A520W", "MOTOG3"));

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        return f2125a.contains(Build.MODEL.toUpperCase(Locale.US));
    }
}
