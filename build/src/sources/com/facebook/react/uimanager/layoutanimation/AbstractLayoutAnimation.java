package com.facebook.react.uimanager.layoutanimation;

import android.view.View;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.Animation;
import android.view.animation.BaseInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import android.view.animation.LinearInterpolator;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.layoutanimation.AnimatedPropertyType;
import com.facebook.react.uimanager.layoutanimation.InterpolatorType;
import java.util.Map;
import jr.v;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b \u0018\u0000 ,2\u00020\u0001:\u0001,B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0019\u001a\u00020\u001aH ¢\u0006\u0002\b\u001bJ7\u0010\u001c\u001a\u0004\u0018\u00010\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u000b2\u0006\u0010!\u001a\u00020\u000b2\u0006\u0010\"\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\u000bH ¢\u0006\u0002\b$J\u0006\u0010%\u001a\u00020&J\u0016\u0010'\u001a\u00020&2\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020\u000bJ0\u0010+\u001a\u0004\u0018\u00010\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u000b2\u0006\u0010!\u001a\u00020\u000b2\u0006\u0010\"\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\u000bR\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u001c\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0012\u0010\u0013\"\u0004\b\u0014\u0010\u0015R\u001a\u0010\u0016\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\r\"\u0004\b\u0018\u0010\u000f¨\u0006-"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation;", "", "<init>", "()V", "interpolator", "Landroid/view/animation/Interpolator;", "getInterpolator", "()Landroid/view/animation/Interpolator;", "setInterpolator", "(Landroid/view/animation/Interpolator;)V", "delayMs", "", "getDelayMs", "()I", "setDelayMs", "(I)V", "animatedProperty", "Lcom/facebook/react/uimanager/layoutanimation/AnimatedPropertyType;", "getAnimatedProperty", "()Lcom/facebook/react/uimanager/layoutanimation/AnimatedPropertyType;", "setAnimatedProperty", "(Lcom/facebook/react/uimanager/layoutanimation/AnimatedPropertyType;)V", "durationMs", "getDurationMs", "setDurationMs", "isValid", "", "isValid$ReactAndroid_release", "createAnimationImpl", "Landroid/view/animation/Animation;", "view", "Landroid/view/View;", "x", "y", "width", "height", "createAnimationImpl$ReactAndroid_release", "reset", "", "initializeFromConfig", "data", "Lcom/facebook/react/bridge/ReadableMap;", "globalDuration", "createAnimation", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAbstractLayoutAnimation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractLayoutAnimation.kt\ncom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,129:1\n1#2:130\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class AbstractLayoutAnimation {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Map<InterpolatorType, BaseInterpolator> INTERPOLATOR;
    private static final boolean SLOWDOWN_ANIMATION_MODE = false;
    private AnimatedPropertyType animatedProperty;
    private int delayMs;
    private int durationMs;
    private Interpolator interpolator;

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\u000eH\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation$Companion;", "", "<init>", "()V", "SLOWDOWN_ANIMATION_MODE", "", "INTERPOLATOR", "", "Lcom/facebook/react/uimanager/layoutanimation/InterpolatorType;", "Landroid/view/animation/BaseInterpolator;", "getInterpolator", "Landroid/view/animation/Interpolator;", "type", "params", "Lcom/facebook/react/bridge/ReadableMap;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nAbstractLayoutAnimation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractLayoutAnimation.kt\ncom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,129:1\n1#2:130\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @VisibleForTesting
        @NotNull
        public final Interpolator getInterpolator(@NotNull InterpolatorType type, @NotNull ReadableMap params) {
            Interpolator interpolator;
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(params, "params");
            if (type == InterpolatorType.SPRING) {
                interpolator = new SimpleSpringInterpolator(SimpleSpringInterpolator.Companion.getSpringDamping(params));
            } else {
                interpolator = (Interpolator) AbstractLayoutAnimation.INTERPOLATOR.get(type);
            }
            if (interpolator != null) {
                return interpolator;
            }
            throw new IllegalArgumentException(("Missing interpolator for type : " + type).toString());
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("AbstractLayoutAnimation", LegacyArchitectureLogLevel.ERROR);
        INTERPOLATOR = o0.m(v.a(InterpolatorType.LINEAR, new LinearInterpolator()), v.a(InterpolatorType.EASE_IN, new AccelerateInterpolator()), v.a(InterpolatorType.EASE_OUT, new DecelerateInterpolator()), v.a(InterpolatorType.EASE_IN_EASE_OUT, new AccelerateDecelerateInterpolator()));
    }

    public final Animation createAnimation(@NotNull View view, int i10, int i11, int i12, int i13) {
        Animation createAnimationImpl$ReactAndroid_release;
        Intrinsics.checkNotNullParameter(view, "view");
        if (!isValid$ReactAndroid_release() || (createAnimationImpl$ReactAndroid_release = createAnimationImpl$ReactAndroid_release(view, i10, i11, i12, i13)) == null) {
            return null;
        }
        createAnimationImpl$ReactAndroid_release.setDuration(this.durationMs);
        createAnimationImpl$ReactAndroid_release.setStartOffset(this.delayMs);
        createAnimationImpl$ReactAndroid_release.setInterpolator(this.interpolator);
        return createAnimationImpl$ReactAndroid_release;
    }

    public abstract Animation createAnimationImpl$ReactAndroid_release(@NotNull View view, int i10, int i11, int i12, int i13);

    public final AnimatedPropertyType getAnimatedProperty() {
        return this.animatedProperty;
    }

    public final int getDelayMs() {
        return this.delayMs;
    }

    public final int getDurationMs() {
        return this.durationMs;
    }

    public final Interpolator getInterpolator() {
        return this.interpolator;
    }

    public final void initializeFromConfig(@NotNull ReadableMap data, int i10) {
        AnimatedPropertyType animatedPropertyType;
        int i11;
        Intrinsics.checkNotNullParameter(data, "data");
        String str = "";
        if (data.hasKey("property")) {
            AnimatedPropertyType.Companion companion = AnimatedPropertyType.Companion;
            String string = data.getString("property");
            if (string == null) {
                string = "";
            }
            animatedPropertyType = companion.fromString(string);
        } else {
            animatedPropertyType = null;
        }
        this.animatedProperty = animatedPropertyType;
        if (data.hasKey("duration")) {
            i10 = data.getInt("duration");
        }
        this.durationMs = i10;
        if (data.hasKey("delay")) {
            i11 = data.getInt("delay");
        } else {
            i11 = 0;
        }
        this.delayMs = i11;
        if (data.hasKey("type")) {
            Companion companion2 = Companion;
            InterpolatorType.Companion companion3 = InterpolatorType.Companion;
            String string2 = data.getString("type");
            if (string2 != null) {
                str = string2;
            }
            this.interpolator = companion2.getInterpolator(companion3.fromString(str), data);
            if (isValid$ReactAndroid_release()) {
                return;
            }
            throw new IllegalViewOperationException("Invalid layout animation : " + data);
        }
        throw new IllegalArgumentException("Missing interpolation type.");
    }

    public abstract boolean isValid$ReactAndroid_release();

    public final void reset() {
        this.animatedProperty = null;
        this.durationMs = 0;
        this.delayMs = 0;
        this.interpolator = null;
    }

    public final void setAnimatedProperty(AnimatedPropertyType animatedPropertyType) {
        this.animatedProperty = animatedPropertyType;
    }

    public final void setDelayMs(int i10) {
        this.delayMs = i10;
    }

    public final void setDurationMs(int i10) {
        this.durationMs = i10;
    }

    public final void setInterpolator(Interpolator interpolator) {
        this.interpolator = interpolator;
    }
}
