package androidx.camera.core.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import android.util.Pair;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CaptureFailedRetryQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f2009a = new HashSet(Collections.singletonList(Pair.create("SAMSUNG", "SM-G981U1")));

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        String str = Build.BRAND;
        Locale locale = Locale.US;
        return f2009a.contains(Pair.create(str.toUpperCase(locale), Build.MODEL.toUpperCase(locale)));
    }

    public int c() {
        return 1;
    }
}
