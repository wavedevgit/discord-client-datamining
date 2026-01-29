package com.facebook.react.uimanager.layoutanimation;

import android.os.Handler;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.uimanager.layoutanimation.LayoutAnimationType;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0017\u0018\u0000 '2\u00020\u0001:\u0001'B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016J\b\u0010\u0017\u001a\u00020\u0012H\u0016J\u0012\u0010\u000b\u001a\u00020\f2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019H\u0016J0\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u001b\u001a\u00020\u00192\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\u001f\u001a\u00020\u001d2\u0006\u0010 \u001a\u00020\u001dH\u0016J\u0018\u0010!\u001a\u00020\u00122\u0006\u0010\u001b\u001a\u00020\u00192\u0006\u0010\"\u001a\u00020#H\u0016J\u0010\u0010$\u001a\u00020\u00122\u0006\u0010\u001b\u001a\u00020\u0019H\u0002J\u0010\u0010%\u001a\u00020\u00122\u0006\u0010&\u001a\u00020\u000eH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\n0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u0010X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationController;", "", "<init>", "()V", "layoutCreateAnimation", "Lcom/facebook/react/uimanager/layoutanimation/AbstractLayoutAnimation;", "layoutUpdateAnimation", "layoutDeleteAnimation", "layoutHandlers", "Landroid/util/SparseArray;", "Lcom/facebook/react/uimanager/layoutanimation/LayoutHandlingAnimation;", "shouldAnimateLayout", "", "maxAnimationDuration", "", "completionRunnable", "Ljava/lang/Runnable;", "initializeFromConfig", "", "config", "Lcom/facebook/react/bridge/ReadableMap;", "completionCallback", "Lcom/facebook/react/bridge/Callback;", "reset", "viewToAnimate", "Landroid/view/View;", "applyLayoutUpdate", "view", "x", "", "y", "width", "height", "deleteView", "listener", "Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationListener;", "disableUserInteractions", "scheduleCompletionCallback", "delayMillis", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class LayoutAnimationController {
    @NotNull
    private static final Companion Companion = new Companion(null);
    private Runnable completionRunnable;
    private boolean shouldAnimateLayout;
    @NotNull
    private final AbstractLayoutAnimation layoutCreateAnimation = new LayoutCreateAnimation();
    @NotNull
    private final AbstractLayoutAnimation layoutUpdateAnimation = new LayoutUpdateAnimation();
    @NotNull
    private final AbstractLayoutAnimation layoutDeleteAnimation = new LayoutDeleteAnimation();
    @NotNull
    private final SparseArray<LayoutHandlingAnimation> layoutHandlers = new SparseArray<>(0);
    private long maxAnimationDuration = -1;

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/facebook/react/uimanager/layoutanimation/LayoutAnimationController$Companion;", "", "<init>", "()V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("LayoutAnimationController", LegacyArchitectureLogLevel.ERROR);
    }

    private final void disableUserInteractions(View view) {
        view.setClickable(false);
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                Intrinsics.checkNotNullExpressionValue(childAt, "getChildAt(...)");
                disableUserInteractions(childAt);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void initializeFromConfig$lambda$0(Callback callback) {
        callback.invoke(Boolean.TRUE);
    }

    private final void scheduleCompletionCallback(long j10) {
        if (this.completionRunnable != null) {
            Handler uiThreadHandler = UiThreadUtil.getUiThreadHandler();
            Runnable runnable = this.completionRunnable;
            Intrinsics.checkNotNull(runnable);
            uiThreadHandler.removeCallbacks(runnable);
            Runnable runnable2 = this.completionRunnable;
            Intrinsics.checkNotNull(runnable2);
            uiThreadHandler.postDelayed(runnable2, j10);
        }
    }

    public void applyLayoutUpdate(@NotNull View view, int i10, int i11, int i12, int i13) {
        AbstractLayoutAnimation abstractLayoutAnimation;
        Intrinsics.checkNotNullParameter(view, "view");
        UiThreadUtil.assertOnUiThread();
        final int id2 = view.getId();
        LayoutHandlingAnimation layoutHandlingAnimation = this.layoutHandlers.get(id2);
        if (layoutHandlingAnimation != null) {
            if (!layoutHandlingAnimation.isValid()) {
                this.layoutHandlers.remove(id2);
            } else {
                layoutHandlingAnimation.onLayoutUpdate(i10, i11, i12, i13);
                return;
            }
        }
        if (view.getWidth() != 0 && view.getHeight() != 0) {
            abstractLayoutAnimation = this.layoutUpdateAnimation;
        } else {
            abstractLayoutAnimation = this.layoutCreateAnimation;
        }
        Animation createAnimation = abstractLayoutAnimation.createAnimation(view, i10, i11, i12, i13);
        if (createAnimation instanceof LayoutHandlingAnimation) {
            createAnimation.setAnimationListener(new Animation.AnimationListener() { // from class: com.facebook.react.uimanager.layoutanimation.LayoutAnimationController$applyLayoutUpdate$1
                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationEnd(Animation animation) {
                    SparseArray sparseArray;
                    Intrinsics.checkNotNullParameter(animation, "animation");
                    sparseArray = LayoutAnimationController.this.layoutHandlers;
                    sparseArray.remove(id2);
                }

                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationRepeat(Animation animation) {
                    Intrinsics.checkNotNullParameter(animation, "animation");
                }

                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationStart(Animation animation) {
                    SparseArray sparseArray;
                    Intrinsics.checkNotNullParameter(animation, "animation");
                    sparseArray = LayoutAnimationController.this.layoutHandlers;
                    sparseArray.put(id2, (LayoutHandlingAnimation) animation);
                }
            });
        } else {
            view.layout(i10, i11, i10 + i12, i11 + i13);
        }
        if (createAnimation != null) {
            long duration = createAnimation.getDuration();
            if (duration > this.maxAnimationDuration) {
                this.maxAnimationDuration = duration;
                scheduleCompletionCallback(duration);
            }
            view.startAnimation(createAnimation);
        }
    }

    public void deleteView(@NotNull View view, @NotNull final LayoutAnimationListener listener) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(listener, "listener");
        UiThreadUtil.assertOnUiThread();
        Animation createAnimation = this.layoutDeleteAnimation.createAnimation(view, view.getLeft(), view.getTop(), view.getWidth(), view.getHeight());
        if (createAnimation != null) {
            disableUserInteractions(view);
            createAnimation.setAnimationListener(new Animation.AnimationListener() { // from class: com.facebook.react.uimanager.layoutanimation.LayoutAnimationController$deleteView$1
                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationEnd(Animation anim) {
                    Intrinsics.checkNotNullParameter(anim, "anim");
                    LayoutAnimationListener.this.onAnimationEnd();
                }

                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationRepeat(Animation anim) {
                    Intrinsics.checkNotNullParameter(anim, "anim");
                }

                @Override // android.view.animation.Animation.AnimationListener
                public void onAnimationStart(Animation anim) {
                    Intrinsics.checkNotNullParameter(anim, "anim");
                }
            });
            long duration = createAnimation.getDuration();
            if (duration > this.maxAnimationDuration) {
                scheduleCompletionCallback(duration);
                this.maxAnimationDuration = duration;
            }
            view.startAnimation(createAnimation);
            return;
        }
        listener.onAnimationEnd();
    }

    public final void initializeFromConfig(ReadableMap readableMap, final Callback callback) {
        if (readableMap == null) {
            reset();
            return;
        }
        int i10 = 0;
        this.shouldAnimateLayout = false;
        if (readableMap.hasKey("duration")) {
            i10 = readableMap.getInt("duration");
        }
        LayoutAnimationType.Companion companion = LayoutAnimationType.Companion;
        LayoutAnimationType layoutAnimationType = LayoutAnimationType.CREATE;
        if (readableMap.hasKey(companion.toString(layoutAnimationType))) {
            AbstractLayoutAnimation abstractLayoutAnimation = this.layoutCreateAnimation;
            ReadableMap map = readableMap.getMap(companion.toString(layoutAnimationType));
            Intrinsics.checkNotNull(map);
            abstractLayoutAnimation.initializeFromConfig(map, i10);
            this.shouldAnimateLayout = true;
        }
        LayoutAnimationType layoutAnimationType2 = LayoutAnimationType.UPDATE;
        if (readableMap.hasKey(companion.toString(layoutAnimationType2))) {
            AbstractLayoutAnimation abstractLayoutAnimation2 = this.layoutUpdateAnimation;
            ReadableMap map2 = readableMap.getMap(companion.toString(layoutAnimationType2));
            Intrinsics.checkNotNull(map2);
            abstractLayoutAnimation2.initializeFromConfig(map2, i10);
            this.shouldAnimateLayout = true;
        }
        LayoutAnimationType layoutAnimationType3 = LayoutAnimationType.DELETE;
        if (readableMap.hasKey(companion.toString(layoutAnimationType3))) {
            AbstractLayoutAnimation abstractLayoutAnimation3 = this.layoutDeleteAnimation;
            ReadableMap map3 = readableMap.getMap(companion.toString(layoutAnimationType3));
            Intrinsics.checkNotNull(map3);
            abstractLayoutAnimation3.initializeFromConfig(map3, i10);
            this.shouldAnimateLayout = true;
        }
        if (this.shouldAnimateLayout && callback != null) {
            this.completionRunnable = new Runnable() { // from class: com.facebook.react.uimanager.layoutanimation.a
                @Override // java.lang.Runnable
                public final void run() {
                    LayoutAnimationController.initializeFromConfig$lambda$0(Callback.this);
                }
            };
        }
    }

    public void reset() {
        this.layoutCreateAnimation.reset();
        this.layoutUpdateAnimation.reset();
        this.layoutDeleteAnimation.reset();
        this.completionRunnable = null;
        this.shouldAnimateLayout = false;
        this.maxAnimationDuration = -1L;
        int size = this.layoutHandlers.size();
        while (true) {
            size--;
            if (-1 < size) {
                LayoutHandlingAnimation valueAt = this.layoutHandlers.valueAt(size);
                Intrinsics.checkNotNull(valueAt);
                if (!valueAt.isValid()) {
                    this.layoutHandlers.removeAt(size);
                }
            } else {
                return;
            }
        }
    }

    public boolean shouldAnimateLayout(View view) {
        if (view == null) {
            return false;
        }
        if ((!this.shouldAnimateLayout || view.getParent() == null) && this.layoutHandlers.get(view.getId()) == null) {
            return false;
        }
        return true;
    }
}
