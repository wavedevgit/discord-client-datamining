package com.swmansion.rnscreens;

import android.view.View;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.UIBlock;
import com.facebook.react.uimanager.UIManagerModule;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends LayoutShadowNode {

    /* renamed from: a  reason: collision with root package name */
    private ReactContext f18395a;

    public y0(ReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f18395a = context;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(y0 y0Var, NativeViewHierarchyManager nativeViewHierarchyManager) {
        if (nativeViewHierarchyManager != null) {
            View resolveView = nativeViewHierarchyManager.resolveView(y0Var.getReactTag());
            if (resolveView instanceof ScreenContainer) {
                ((ScreenContainer) resolveView).performUpdates();
            }
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onBeforeLayout(NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        Intrinsics.checkNotNullParameter(nativeViewHierarchyOptimizer, "nativeViewHierarchyOptimizer");
        super.onBeforeLayout(nativeViewHierarchyOptimizer);
        UIManagerModule uIManagerModule = (UIManagerModule) this.f18395a.getNativeModule(UIManagerModule.class);
        if (uIManagerModule != null) {
            uIManagerModule.addUIBlock(new UIBlock() { // from class: com.swmansion.rnscreens.x0
                @Override // com.facebook.react.uimanager.UIBlock
                public final void execute(NativeViewHierarchyManager nativeViewHierarchyManager) {
                    y0.b(y0.this, nativeViewHierarchyManager);
                }
            });
        }
    }
}
