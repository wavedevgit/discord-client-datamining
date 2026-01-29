package com.facebook.react.uimanager;

import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.List;
import java.util.WeakHashMap;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0002\b&\u0018\u0000 )*\b\b\u0000\u0010\u0001*\u00020\u00022\u000e\u0012\u0004\u0012\u0002H\u0001\u0012\u0004\u0012\u00020\u00040\u00032\b\u0012\u0004\u0012\u0002H\u00010\u0005:\u0001)B\u0015\b\u0007\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010\n\u001a\u00020\u0004H\u0016J\u0010\u0010\u000b\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00040\fH\u0016J\u001d\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00028\u00002\u0006\u0010\u0010\u001a\u00020\u0011H\u0016¢\u0006\u0002\u0010\u0012J%\u0010\u0013\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00028\u00002\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0018H\u0016¢\u0006\u0002\u0010\u0019J!\u0010\u001a\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00028\u00002\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00160\u001c¢\u0006\u0002\u0010\u001dJ\u0015\u0010\u001e\u001a\u00020\u00182\u0006\u0010\u0014\u001a\u00028\u0000H\u0016¢\u0006\u0002\u0010\u001fJ\u001f\u0010 \u001a\u0004\u0018\u00010\u00162\u0006\u0010\u0014\u001a\u00028\u00002\u0006\u0010\u0017\u001a\u00020\u0018H\u0016¢\u0006\u0002\u0010!J\u001d\u0010\"\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00028\u00002\u0006\u0010\u0017\u001a\u00020\u0018H\u0016¢\u0006\u0002\u0010#J\u001d\u0010$\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00028\u00002\u0006\u0010%\u001a\u00020\u0016H\u0016¢\u0006\u0002\u0010&J\b\u0010'\u001a\u00020(H\u0016¨\u0006*"}, d2 = {"Lcom/facebook/react/uimanager/ViewGroupManager;", "T", "Landroid/view/ViewGroup;", "Lcom/facebook/react/uimanager/BaseViewManager;", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "Lcom/facebook/react/uimanager/IViewGroupManager;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "createShadowNodeInstance", "getShadowNodeClass", "Ljava/lang/Class;", "updateExtraData", "", "root", "extraData", "", "(Landroid/view/ViewGroup;Ljava/lang/Object;)V", "addView", "parent", "child", "Landroid/view/View;", "index", "", "(Landroid/view/ViewGroup;Landroid/view/View;I)V", "addViews", "views", "", "(Landroid/view/ViewGroup;Ljava/util/List;)V", "getChildCount", "(Landroid/view/ViewGroup;)I", "getChildAt", "(Landroid/view/ViewGroup;I)Landroid/view/View;", "removeViewAt", "(Landroid/view/ViewGroup;I)V", "removeView", "view", "(Landroid/view/ViewGroup;Landroid/view/View;)V", "needsCustomLayoutForChildren", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewGroupManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewGroupManager.kt\ncom/facebook/react/uimanager/ViewGroupManager\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,91:1\n1878#2,3:92\n*S KotlinDebug\n*F\n+ 1 ViewGroupManager.kt\ncom/facebook/react/uimanager/ViewGroupManager\n*L\n43#1:92,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ViewGroupManager<T extends ViewGroup> extends BaseViewManager<T, LayoutShadowNode> implements IViewGroupManager<T> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final WeakHashMap<View, Integer> zIndexHash = new WeakHashMap<>();

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\u0007H\u0007J\u0019\u0010\f\u001a\u0004\u0018\u00010\u00072\b\u0010\n\u001a\u0004\u0018\u00010\u0006H\u0007¢\u0006\u0002\u0010\rR\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/uimanager/ViewGroupManager$Companion;", "", "<init>", "()V", "zIndexHash", "Ljava/util/WeakHashMap;", "Landroid/view/View;", "", "setViewZIndex", "", "view", ViewProps.Z_INDEX, "getViewZIndex", "(Landroid/view/View;)Ljava/lang/Integer;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Integer getViewZIndex(View view) {
            return (Integer) ViewGroupManager.zIndexHash.get(view);
        }

        public final void setViewZIndex(@NotNull View view, int i10) {
            Intrinsics.checkNotNullParameter(view, "view");
            ViewGroupManager.zIndexHash.put(view, Integer.valueOf(i10));
        }

        private Companion() {
        }
    }

    public ViewGroupManager() {
        this(null, 1, null);
    }

    public static final Integer getViewZIndex(View view) {
        return Companion.getViewZIndex(view);
    }

    public static final void setViewZIndex(@NotNull View view, int i10) {
        Companion.setViewZIndex(view, i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public /* bridge */ /* synthetic */ void addView(View view, View view2, int i10) {
        addView((ViewGroupManager<T>) ((ViewGroup) view), view2, i10);
    }

    public final void addViews(@NotNull T parent, @NotNull List<? extends View> views) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(views, "views");
        UiThreadUtil.assertOnUiThread();
        int i10 = 0;
        for (Object obj : views) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            addView((ViewGroupManager<T>) parent, (View) obj, i10);
            i10 = i11;
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ View getChildAt(View view, int i10) {
        return getChildAt((ViewGroupManager<T>) ((ViewGroup) view), i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ int getChildCount(View view) {
        return getChildCount((ViewGroupManager<T>) ((ViewGroup) view));
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public Class<? extends LayoutShadowNode> getShadowNodeClass() {
        return LayoutShadowNode.class;
    }

    @Override // com.facebook.react.uimanager.IViewManagerWithChildren
    public boolean needsCustomLayoutForChildren() {
        return false;
    }

    public void removeView(@NotNull T parent, @NotNull View view) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(view, "view");
        UiThreadUtil.assertOnUiThread();
        int childCount = getChildCount((ViewGroupManager<T>) parent);
        for (int i10 = 0; i10 < childCount; i10++) {
            if (getChildAt((ViewGroupManager<T>) parent, i10) == view) {
                removeViewAt((ViewGroupManager<T>) parent, i10);
                return;
            }
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.IViewGroupManager
    public /* bridge */ /* synthetic */ void removeViewAt(View view, int i10) {
        removeViewAt((ViewGroupManager<T>) ((ViewGroup) view), i10);
    }

    public void updateExtraData(@NotNull T root, @NotNull Object extraData) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(extraData, "extraData");
    }

    public /* synthetic */ ViewGroupManager(ReactApplicationContext reactApplicationContext, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : reactApplicationContext);
    }

    public void addView(@NotNull T parent, @NotNull View child, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(child, "child");
        parent.addView(child, i10);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public LayoutShadowNode createShadowNodeInstance() {
        return new LayoutShadowNode();
    }

    public View getChildAt(@NotNull T parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        return parent.getChildAt(i10);
    }

    public int getChildCount(@NotNull T parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        return parent.getChildCount();
    }

    public void removeViewAt(@NotNull T parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        UiThreadUtil.assertOnUiThread();
        parent.removeViewAt(i10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // com.facebook.react.uimanager.ViewManager
    public /* bridge */ /* synthetic */ void updateExtraData(View view, Object obj) {
        updateExtraData((ViewGroupManager<T>) ((ViewGroup) view), obj);
    }

    public ViewGroupManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }
}
