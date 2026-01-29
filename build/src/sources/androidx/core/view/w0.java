package androidx.core.view;

import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class w0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static void a(Window window, boolean z10) {
            int i10;
            View decorView = window.getDecorView();
            int systemUiVisibility = decorView.getSystemUiVisibility();
            if (z10) {
                i10 = systemUiVisibility & (-1793);
            } else {
                i10 = systemUiVisibility | 1792;
            }
            decorView.setSystemUiVisibility(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static void a(Window window, boolean z10) {
            int i10;
            View decorView = window.getDecorView();
            int systemUiVisibility = decorView.getSystemUiVisibility();
            if (z10) {
                i10 = systemUiVisibility & (-257);
            } else {
                i10 = systemUiVisibility | IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            }
            decorView.setSystemUiVisibility(i10);
            window.setDecorFitsSystemWindows(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static void a(Window window, boolean z10) {
            window.setDecorFitsSystemWindows(z10);
        }
    }

    public static void a(Window window) {
        int i10;
        int i11;
        Objects.requireNonNull(window);
        window.getDecorView();
        c(window, false);
        window.setStatusBarColor(0);
        window.setNavigationBarColor(0);
        int i12 = Build.VERSION.SDK_INT;
        if (i12 >= 28) {
            if (i12 >= 30) {
                i10 = 3;
            } else {
                i10 = 1;
            }
            WindowManager.LayoutParams attributes = window.getAttributes();
            i11 = attributes.layoutInDisplayCutoutMode;
            if (i11 != i10) {
                attributes.layoutInDisplayCutoutMode = i10;
                window.setAttributes(attributes);
            }
        }
        if (i12 >= 29) {
            window.setStatusBarContrastEnforced(false);
            window.setNavigationBarContrastEnforced(false);
        }
    }

    public static WindowInsetsControllerCompat b(Window window, View view) {
        return new WindowInsetsControllerCompat(window, view);
    }

    public static void c(Window window, boolean z10) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 35) {
            c.a(window, z10);
        } else if (i10 >= 30) {
            b.a(window, z10);
        } else {
            a.a(window, z10);
        }
    }
}
