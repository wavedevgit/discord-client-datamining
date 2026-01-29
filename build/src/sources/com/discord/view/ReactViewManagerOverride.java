package com.discord.view;

import android.view.View;
import com.discord.R;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;
import io.sentry.Breadcrumb;
import io.sentry.b5;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(canOverrideExistingModule = true, name = "RCTView")
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0016J \u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016¨\u0006\u0010"}, d2 = {"Lcom/discord/view/ReactViewManagerOverride;", "Lcom/facebook/react/views/view/ReactViewManager;", "<init>", "()V", "createViewInstance", "Lcom/discord/view/ReactViewGroupOverride;", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "addView", "", "parent", "Lcom/facebook/react/views/view/ReactViewGroup;", "child", "Landroid/view/View;", "index", "", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactViewManagerOverride extends ReactViewManager {
    @Override // com.facebook.react.views.view.ReactClippingViewManager, com.facebook.react.uimanager.ViewGroupManager
    public void addView(@NotNull ReactViewGroup parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        if (child.getParent() != null) {
            Object tag = child.getTag(R.id.view_is_transitioning);
            Boolean bool = tag instanceof Boolean ? (Boolean) tag : null;
            boolean booleanValue = bool != null ? bool.booleanValue() : false;
            boolean areEqual = Intrinsics.areEqual(child.getParent(), parent);
            boolean removeClippedSubviews = parent.getRemoveClippedSubviews();
            Object tag2 = child.getTag(com.facebook.react.R.id.view_clipped);
            Boolean bool2 = tag2 instanceof Boolean ? (Boolean) tag2 : null;
            boolean booleanValue2 = bool2 != null ? bool2.booleanValue() : false;
            String name = child.getClass().getName();
            Breadcrumb x10 = Breadcrumb.x("ReactViewManagerOverride: Child view already has a parent!");
            Intrinsics.checkNotNullExpressionValue(x10, "info(...)");
            x10.z("react.viewmanager");
            x10.A("isTransitioning", Boolean.valueOf(booleanValue));
            x10.A("wantsToAddToSameParent", Boolean.valueOf(areEqual));
            x10.A("isParentClipping", Boolean.valueOf(removeClippedSubviews));
            x10.A("isChildClipped", Boolean.valueOf(booleanValue2));
            x10.A("childClassType", name);
            b5.h(x10);
        }
        super.addView((ReactViewManagerOverride) parent, child, i10);
    }

    @Override // com.facebook.react.views.view.ReactViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public ReactViewGroupOverride createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new ReactViewGroupOverride(context);
    }
}
