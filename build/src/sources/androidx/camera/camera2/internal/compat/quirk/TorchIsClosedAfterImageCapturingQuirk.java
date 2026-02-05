package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class TorchIsClosedAfterImageCapturingQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    public static final List f2048a = Arrays.asList("mi a1", "mi a2", "mi a2 lite", "redmi 4x", "redmi 5a", "redmi note 5", "redmi note 5 pro", "redmi 6 pro");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        return f2048a.contains(Build.MODEL.toLowerCase(Locale.US));
    }
}
