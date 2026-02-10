package pn;

import com.google.android.material.bottomsheet.BottomSheetBehavior;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final int a(BottomSheetBehavior bottomSheetBehavior) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        return bottomSheetBehavior.v0();
    }

    public static final BottomSheetBehavior b(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        if (num != null) {
            bottomSheetBehavior.V0(num.intValue());
        }
        if (num2 != null) {
            bottomSheetBehavior.Q0(num2.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior c(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            num2 = null;
        }
        return b(bottomSheetBehavior, num, num2);
    }

    public static final BottomSheetBehavior d(BottomSheetBehavior bottomSheetBehavior, Integer num, boolean z10) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.b1(true);
        bottomSheetBehavior.R0(true);
        if (z10) {
            bottomSheetBehavior.c1(3);
        }
        if (num != null) {
            bottomSheetBehavior.V0(num.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior e(BottomSheetBehavior bottomSheetBehavior, Integer num, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        return d(bottomSheetBehavior, num, z10);
    }

    public static final BottomSheetBehavior f(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3, Float f10, Integer num4) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.b1(false);
        bottomSheetBehavior.R0(false);
        if (num != null) {
            bottomSheetBehavior.c1(num.intValue());
        }
        if (num2 != null) {
            bottomSheetBehavior.X0(num2.intValue());
        }
        if (f10 != null) {
            bottomSheetBehavior.T0(f10.floatValue());
        }
        if (num4 != null) {
            bottomSheetBehavior.Q0(num4.intValue());
        }
        if (num3 != null) {
            bottomSheetBehavior.V0(num3.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior g(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3, Float f10, Integer num4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            num2 = null;
        }
        if ((i10 & 4) != 0) {
            num3 = null;
        }
        if ((i10 & 8) != 0) {
            f10 = null;
        }
        if ((i10 & 16) != 0) {
            num4 = null;
        }
        return f(bottomSheetBehavior, num, num2, num3, f10, num4);
    }

    public static final BottomSheetBehavior h(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        bottomSheetBehavior.b1(false);
        bottomSheetBehavior.R0(true);
        if (num != null) {
            bottomSheetBehavior.c1(num.intValue());
        }
        if (num2 != null) {
            bottomSheetBehavior.X0(num2.intValue());
        }
        if (num3 != null) {
            bottomSheetBehavior.V0(num3.intValue());
        }
        return bottomSheetBehavior;
    }

    public static /* synthetic */ BottomSheetBehavior i(BottomSheetBehavior bottomSheetBehavior, Integer num, Integer num2, Integer num3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = null;
        }
        if ((i10 & 2) != 0) {
            num2 = null;
        }
        if ((i10 & 4) != 0) {
            num3 = null;
        }
        return h(bottomSheetBehavior, num, num2, num3);
    }
}
