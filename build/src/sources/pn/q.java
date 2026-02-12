package pn;

import android.view.View;
import com.swmansion.rnscreens.Screen;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    public static final boolean a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (!view.isLaidOut() && view.getHeight() <= 0 && view.getWidth() <= 0) {
            return false;
        }
        return true;
    }

    public static final boolean b(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        if (screen.getStackPresentation() == Screen.StackPresentation.f19056o && screen.getSheetDetents().d() == 1 && screen.getSheetDetents().l() == -1.0d) {
            return true;
        }
        return false;
    }

    public static final boolean c(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        if (!screen.getSheetShouldOverflowTopInset() && d(screen)) {
            return true;
        }
        return false;
    }

    public static final boolean d(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        if (screen.getStackPresentation() == Screen.StackPresentation.f19056o) {
            return true;
        }
        return false;
    }
}
