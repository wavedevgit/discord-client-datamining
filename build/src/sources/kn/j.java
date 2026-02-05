package kn;

import android.view.View;
import com.swmansion.rnscreens.Screen;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {
    public static final boolean a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (!view.isLaidOut() && view.getHeight() <= 0 && view.getWidth() <= 0) {
            return false;
        }
        return true;
    }

    public static final boolean b(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        if (screen.getStackPresentation() == Screen.StackPresentation.f18186o && screen.getSheetDetents().size() == 1 && ((Number) CollectionsKt.o0(screen.getSheetDetents())).doubleValue() == -1.0d) {
            return true;
        }
        return false;
    }

    public static final boolean c(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        return false;
    }

    public static final boolean d(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<this>");
        if (screen.getStackPresentation() == Screen.StackPresentation.f18186o) {
            return true;
        }
        return false;
    }
}
