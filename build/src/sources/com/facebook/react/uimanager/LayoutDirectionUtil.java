package com.facebook.react.uimanager;

import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.yoga.YogaDirection;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/LayoutDirectionUtil;", "", "<init>", "()V", "toAndroidFromYoga", "", "direction", "Lcom/facebook/yoga/YogaDirection;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LayoutDirectionUtil {
    @NotNull
    public static final LayoutDirectionUtil INSTANCE = new LayoutDirectionUtil();

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[YogaDirection.values().length];
            try {
                iArr[YogaDirection.LTR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[YogaDirection.RTL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("LayoutDirectionUtil", LegacyArchitectureLogLevel.ERROR);
    }

    private LayoutDirectionUtil() {
    }

    public static final int toAndroidFromYoga(@NotNull YogaDirection direction) {
        Intrinsics.checkNotNullParameter(direction, "direction");
        int i10 = WhenMappings.$EnumSwitchMapping$0[direction.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            return 2;
        }
        return 0;
    }
}
