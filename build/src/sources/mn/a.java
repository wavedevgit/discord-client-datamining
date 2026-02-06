package mn;

import com.google.android.material.bottomsheet.BottomSheetBehavior;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final BottomSheetBehavior a(BottomSheetBehavior bottomSheetBehavior, Integer num, boolean z10) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.X0(true);
        bottomSheetBehavior.N0(true);
        if (z10) {
            bottomSheetBehavior.Y0(3);
        }
        if (num != null) {
            bottomSheetBehavior.R0(num.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior b(BottomSheetBehavior bottomSheetBehavior, Integer num, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        return a(bottomSheetBehavior, num, z10);
    }

    public static final BottomSheetBehavior c(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Float f10, Integer num3) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.X0(false);
        bottomSheetBehavior.N0(false);
        if (num != null) {
            bottomSheetBehavior.Y0(num.intValue());
        }
        if (num2 != null) {
            bottomSheetBehavior.T0(num2.intValue());
        }
        if (f10 != null) {
            bottomSheetBehavior.P0(f10.floatValue());
        }
        if (num3 != null) {
            bottomSheetBehavior.M0(num3.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior d(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Float f10, Integer num3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            num2 = null;
        }
        if ((i10 & 4) != 0) {
            f10 = null;
        }
        if ((i10 & 8) != 0) {
            num3 = null;
        }
        return c(bottomSheetBehavior, num, num2, f10, num3);
    }

    public static final BottomSheetBehavior e(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.X0(false);
        bottomSheetBehavior.N0(true);
        if (num != null) {
            bottomSheetBehavior.Y0(num.intValue());
        }
        if (num2 != null) {
            bottomSheetBehavior.T0(num2.intValue());
        }
        if (num3 != null) {
            bottomSheetBehavior.R0(num3.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior f(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            num2 = null;
        }
        if ((i10 & 4) != 0) {
            num3 = null;
        }
        return e(bottomSheetBehavior, num, num2, num3);
    }
}
