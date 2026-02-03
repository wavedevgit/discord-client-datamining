package com.discord.view;

import android.annotation.SuppressLint;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.ScreenStackHeaderConfig;
import io.sentry.Breadcrumb;
import io.sentry.b5;
import java.util.ArrayList;
import java.util.List;
import jr.l;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u0012\u0010\u0018\u001a\u00020\u00122\b\u0010\u0019\u001a\u0004\u0018\u00010\u0016H\u0002J\b\u0010\u001a\u001a\u00020\u0012H\u0016R\u001b\u0010\u0006\u001a\u00020\u00078BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\n\u0010\u000b\u001a\u0004\b\b\u0010\tR\u001d\u0010\f\u001a\u0004\u0018\u00010\r8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0010\u0010\u000b\u001a\u0004\b\u000e\u0010\u000fR \u0010\u0013\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00170\u00150\u0014X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001b"}, d2 = {"Lcom/discord/view/ScreenOverride;", "Lcom/swmansion/rnscreens/Screen;", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "<init>", "(Lcom/facebook/react/uimanager/ThemedReactContext;)V", "surfaceId", "", "getSurfaceId", "()I", "surfaceId$delegate", "Lkotlin/Lazy;", "uiManager", "Lcom/facebook/react/bridge/UIManager;", "getUiManager", "()Lcom/facebook/react/bridge/UIManager;", "uiManager$delegate", "startRemovalTransition", "", "inTransitionViews", "", "Lkotlin/Pair;", "Landroid/view/ViewGroup;", "Landroid/view/View;", "startTransitionRecursive", "parent", "endRemovalTransition", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ScreenOverride extends Screen {
    @NotNull
    private final List<Pair<ViewGroup, View>> inTransitionViews;
    @NotNull
    private final Lazy surfaceId$delegate;
    @NotNull
    private final Lazy uiManager$delegate;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ScreenOverride(@NotNull final ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.surfaceId$delegate = l.b(new Function0() { // from class: com.discord.view.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int surfaceId;
                surfaceId = UIManagerHelper.getSurfaceId(ThemedReactContext.this);
                return Integer.valueOf(surfaceId);
            }
        });
        this.uiManager$delegate = l.b(new Function0() { // from class: com.discord.view.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                UIManager uiManager_delegate$lambda$1;
                uiManager_delegate$lambda$1 = ScreenOverride.uiManager_delegate$lambda$1(ThemedReactContext.this, this);
                return uiManager_delegate$lambda$1;
            }
        });
        this.inTransitionViews = new ArrayList();
    }

    private final int getSurfaceId() {
        return ((Number) this.surfaceId$delegate.getValue()).intValue();
    }

    private final UIManager getUiManager() {
        return (UIManager) this.uiManager$delegate.getValue();
    }

    private final void startTransitionRecursive(ViewGroup viewGroup) {
        if (viewGroup != null) {
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                if ((viewGroup instanceof SwipeRefreshLayout) && (childAt instanceof ImageView)) {
                    viewGroup.addView(new View(getContext()), i10);
                } else if (childAt != null) {
                    UIManager uiManager = getUiManager();
                    if (uiManager != null) {
                        uiManager.markViewAsInTransition(getSurfaceId(), childAt.getId(), true);
                    }
                    viewGroup.startViewTransition(childAt);
                    this.inTransitionViews.add(new Pair<>(viewGroup, childAt));
                }
                if (childAt instanceof ScreenStackHeaderConfig) {
                    startTransitionRecursive(((ScreenStackHeaderConfig) childAt).getToolbar());
                }
                if (childAt instanceof ViewGroup) {
                    startTransitionRecursive((ViewGroup) childAt);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final UIManager uiManager_delegate$lambda$1(ThemedReactContext themedReactContext, ScreenOverride screenOverride) {
        return UIManagerHelper.getUIManager(themedReactContext, screenOverride.getSurfaceId());
    }

    @Override // com.swmansion.rnscreens.Screen
    public void endRemovalTransition() {
        if (!isBeingRemoved()) {
            return;
        }
        setBeingRemoved(false);
        for (Pair pair : CollectionsKt.T(this.inTransitionViews)) {
            ViewGroup viewGroup = (ViewGroup) pair.a();
            View view = (View) pair.b();
            UIManager uiManager = getUiManager();
            if (uiManager != null) {
                uiManager.markViewAsInTransition(getSurfaceId(), view.getId(), false);
            }
            viewGroup.endViewTransition(view);
        }
        this.inTransitionViews.clear();
        Breadcrumb x10 = Breadcrumb.x("ScreenOverride: endRemovalTransition called (w/ patch)");
        Intrinsics.checkNotNullExpressionValue(x10, "info(...)");
        x10.z("react.viewmanager");
        b5.h(x10);
    }

    @Override // com.swmansion.rnscreens.Screen
    public void startRemovalTransition() {
        if (!UiThreadUtil.isOnUiThread()) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.discord.view.d
                @Override // java.lang.Runnable
                public final void run() {
                    ScreenOverride.this.startRemovalTransition();
                }
            });
        } else if (isBeingRemoved()) {
        } else {
            setBeingRemoved(true);
            Breadcrumb x10 = Breadcrumb.x("ScreenOverride: calling startRemovalTransition (w/ patch)");
            Intrinsics.checkNotNullExpressionValue(x10, "info(...)");
            x10.z("react.viewmanager");
            b5.h(x10);
            startTransitionRecursive(this);
        }
    }
}
