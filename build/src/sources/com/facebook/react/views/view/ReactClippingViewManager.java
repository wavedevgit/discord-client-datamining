package com.facebook.react.views.view;

import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.ReactClippingViewGroupHelper;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\n\b&\u0018\u0000*\b\b\u0000\u0010\u0001*\u00020\u00022\b\u0012\u0004\u0012\u0002H\u00010\u0003B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u001d\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00028\u00002\u0006\u0010\t\u001a\u00020\nH\u0017¢\u0006\u0002\u0010\u000bJ%\u0010\f\u001a\u00020\u00072\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0016¢\u0006\u0002\u0010\u0012J\u0015\u0010\u0013\u001a\u00020\u00112\u0006\u0010\r\u001a\u00028\u0000H\u0016¢\u0006\u0002\u0010\u0014J\u001f\u0010\u0015\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u0010\u001a\u00020\u0011H\u0016¢\u0006\u0002\u0010\u0016J\u001d\u0010\u0017\u001a\u00020\u00072\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u0010\u001a\u00020\u0011H\u0016¢\u0006\u0002\u0010\u0018J\u0015\u0010\u0019\u001a\u00020\u00072\u0006\u0010\r\u001a\u00028\u0000H\u0016¢\u0006\u0002\u0010\u001a¨\u0006\u001b"}, d2 = {"Lcom/facebook/react/views/view/ReactClippingViewManager;", "T", "Lcom/facebook/react/views/view/ReactViewGroup;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "<init>", "()V", "setRemoveClippedSubviews", "", "view", ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS, "", "(Lcom/facebook/react/views/view/ReactViewGroup;Z)V", "addView", "parent", "child", "Landroid/view/View;", "index", "", "(Lcom/facebook/react/views/view/ReactViewGroup;Landroid/view/View;I)V", "getChildCount", "(Lcom/facebook/react/views/view/ReactViewGroup;)I", "getChildAt", "(Lcom/facebook/react/views/view/ReactViewGroup;I)Landroid/view/View;", "removeViewAt", "(Lcom/facebook/react/views/view/ReactViewGroup;I)V", "removeAllViews", "(Lcom/facebook/react/views/view/ReactViewGroup;)V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ReactClippingViewManager<T extends ReactViewGroup> extends ViewGroupManager<T> {
    public ReactClippingViewManager() {
        super(null, 1, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ void addView(View view, View view2, int i10) {
        addView((ReactClippingViewManager<T>) ((ReactViewGroup) view), view2, i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ View getChildAt(View view, int i10) {
        return getChildAt((ReactClippingViewManager<T>) ((ReactViewGroup) view), i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ int getChildCount(View view) {
        return getChildCount((ReactClippingViewManager<T>) ((ReactViewGroup) view));
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ void removeAllViews(View view) {
        removeAllViews((ReactClippingViewManager<T>) ((ReactViewGroup) view));
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ void removeViewAt(View view, int i10) {
        removeViewAt((ReactClippingViewManager<T>) ((ReactViewGroup) view), i10);
    }

    @ReactProp(name = ReactClippingViewGroupHelper.PROP_REMOVE_CLIPPED_SUBVIEWS)
    public void setRemoveClippedSubviews(@NotNull T view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        UiThreadUtil.assertOnUiThread();
        view.setRemoveClippedSubviews(z10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager
    public /* bridge */ /* synthetic */ void addView(ViewGroup viewGroup, View view, int i10) {
        addView((ReactClippingViewManager<T>) ((ReactViewGroup) viewGroup), view, i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager
    public /* bridge */ /* synthetic */ View getChildAt(ViewGroup viewGroup, int i10) {
        return getChildAt((ReactClippingViewManager<T>) ((ReactViewGroup) viewGroup), i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager
    public /* bridge */ /* synthetic */ int getChildCount(ViewGroup viewGroup) {
        return getChildCount((ReactClippingViewManager<T>) ((ReactViewGroup) viewGroup));
    }

    public void removeAllViews(@NotNull T parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        UiThreadUtil.assertOnUiThread();
        if (parent.getRemoveClippedSubviews()) {
            parent.removeAllViewsWithSubviewClippingEnabled$ReactAndroid_release();
        } else {
            parent.removeAllViews();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewGroupManager
    public /* bridge */ /* synthetic */ void removeViewAt(ViewGroup viewGroup, int i10) {
        removeViewAt((ReactClippingViewManager<T>) ((ReactViewGroup) viewGroup), i10);
    }

    public void addView(@NotNull T parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        UiThreadUtil.assertOnUiThread();
        if (parent.getRemoveClippedSubviews()) {
            parent.addViewWithSubviewClippingEnabled$ReactAndroid_release(child, i10);
        } else {
            parent.addView(child, i10);
        }
    }

    public View getChildAt(@NotNull T parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (parent.getRemoveClippedSubviews()) {
            return parent.getChildAtWithSubviewClippingEnabled$ReactAndroid_release(i10);
        }
        return parent.getChildAt(i10);
    }

    public int getChildCount(@NotNull T parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (parent.getRemoveClippedSubviews()) {
            return parent.getAllChildrenCount$ReactAndroid_release();
        }
        return parent.getChildCount();
    }

    public void removeViewAt(@NotNull T parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        UiThreadUtil.assertOnUiThread();
        if (parent.getRemoveClippedSubviews()) {
            View childAt = getChildAt((ReactClippingViewManager<T>) parent, i10);
            if (childAt != null) {
                parent.removeViewWithSubviewClippingEnabled$ReactAndroid_release(childAt);
                return;
            }
            return;
        }
        parent.removeViewAt(i10);
    }
}
