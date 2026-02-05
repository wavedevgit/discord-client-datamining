package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CrashWhenTakingPhotoWithAutoFlashAEModeQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    static final List f2022a = Arrays.asList("SM-A3000", "SM-A3009", "SM-A300F", "SM-A300FU", "SM-A300G", "SM-A300H", "SM-A300M", "SM-A300X", "SM-A300XU", "SM-A300XZ", "SM-A300Y", "SM-A300YZ", "SM-J510FN", "5059X");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        return f2022a.contains(Build.MODEL.toUpperCase(Locale.US));
    }
}
