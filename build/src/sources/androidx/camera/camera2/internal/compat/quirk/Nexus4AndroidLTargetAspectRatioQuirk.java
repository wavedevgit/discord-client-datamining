package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Nexus4AndroidLTargetAspectRatioQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final List f2043a = Arrays.asList("NEXUS 4");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        "GOOGLE".equalsIgnoreCase(Build.BRAND);
        return false;
    }

    public int c() {
        return 2;
    }
}
