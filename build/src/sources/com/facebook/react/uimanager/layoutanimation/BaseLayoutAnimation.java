package com.facebook.react.uimanager.layoutanimation;

import android.view.View;
import android.view.animation.Animation;
import android.view.animation.ScaleAnimation;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.uimanager.IllegalViewOperationException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\b \u0018\u0000 \u00122\u00020\u0001:\u0001\u0012B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H&J\r\u0010\u0006\u001a\u00020\u0005H\u0010¢\u0006\u0002\b\u0007J5\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\rH\u0010¢\u0006\u0002\b\u0011¨\u0006\u0013"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/BaseLayoutAnimation;", "Lcom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation;", "<init>", "()V", "isReverse", "", "isValid", "isValid$ReactAndroid_release", "createAnimationImpl", "Landroid/view/animation/Animation;", "view", "Landroid/view/View;", "x", "", "y", "width", "height", "createAnimationImpl$ReactAndroid_release", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class BaseLayoutAnimation extends AbstractLayoutAnimation {
    @NotNull
    private static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/BaseLayoutAnimation$Companion;", "", "<init>", "()V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[AnimatedPropertyType.values().length];
            try {
                iArr[AnimatedPropertyType.OPACITY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AnimatedPropertyType.SCALE_XY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[AnimatedPropertyType.SCALE_X.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[AnimatedPropertyType.SCALE_Y.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("BaseLayoutAnimation", LegacyArchitectureLogLevel.ERROR);
    }

    @Override // com.facebook.react.uimanager.layoutanimation.AbstractLayoutAnimation
    @NotNull
    public Animation createAnimationImpl$ReactAndroid_release(@NotNull View view, int i10, int i11, int i12, int i13) {
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float f16;
        Intrinsics.checkNotNullParameter(view, "view");
        AnimatedPropertyType animatedProperty = getAnimatedProperty();
        if (animatedProperty != null) {
            int i14 = WhenMappings.$EnumSwitchMapping$0[animatedProperty.ordinal()];
            float f17 = 0.0f;
            if (i14 != 1) {
                if (i14 != 2) {
                    if (i14 != 3) {
                        if (i14 == 4) {
                            if (isReverse()) {
                                f15 = 1.0f;
                            } else {
                                f15 = 0.0f;
                            }
                            if (isReverse()) {
                                f16 = 0.0f;
                            } else {
                                f16 = 1.0f;
                            }
                            return new ScaleAnimation(1.0f, 1.0f, f15, f16, 1, 0.0f, 1, 0.5f);
                        }
                        throw new p();
                    }
                    if (isReverse()) {
                        f13 = 1.0f;
                    } else {
                        f13 = 0.0f;
                    }
                    if (isReverse()) {
                        f14 = 0.0f;
                    } else {
                        f14 = 1.0f;
                    }
                    return new ScaleAnimation(f13, f14, 1.0f, 1.0f, 1, 0.5f, 1, 0.0f);
                }
                if (isReverse()) {
                    f11 = 1.0f;
                } else {
                    f11 = 0.0f;
                }
                if (isReverse()) {
                    f12 = 0.0f;
                } else {
                    f12 = 1.0f;
                }
                return new ScaleAnimation(f11, f12, f11, f12, 1, 0.5f, 1, 0.5f);
            }
            if (isReverse()) {
                f10 = view.getAlpha();
            } else {
                f10 = 0.0f;
            }
            if (!isReverse()) {
                f17 = view.getAlpha();
            }
            return new OpacityAnimation(view, f10, f17);
        }
        throw new IllegalViewOperationException("Missing animated property from animation config");
    }

    public abstract boolean isReverse();

    @Override // com.facebook.react.uimanager.layoutanimation.AbstractLayoutAnimation
    public boolean isValid$ReactAndroid_release() {
        if (getDurationMs() > 0 && getAnimatedProperty() != null) {
            return true;
        }
        return false;
    }
}
