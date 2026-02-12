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
public final class a1 extends LayoutShadowNode {

    /* renamed from: a  reason: collision with root package name */
    private ReactContext f19098a;

    public a1(ReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f19098a = context;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(a1 a1Var, NativeViewHierarchyManager nativeViewHierarchyManager) {
        if (nativeViewHierarchyManager != null) {
            View resolveView = nativeViewHierarchyManager.resolveView(a1Var.getReactTag());
            if (resolveView instanceof ScreenContainer) {
                ((ScreenContainer) resolveView).performUpdates();
            }
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void onBeforeLayout(NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer) {
        Intrinsics.checkNotNullParameter(nativeViewHierarchyOptimizer, "nativeViewHierarchyOptimizer");
        super.onBeforeLayout(nativeViewHierarchyOptimizer);
        UIManagerModule uIManagerModule = (UIManagerModule) this.f19098a.getNativeModule(UIManagerModule.class);
        if (uIManagerModule != null) {
            uIManagerModule.addUIBlock(new UIBlock() { // from class: com.swmansion.rnscreens.z0
                @Override // com.facebook.react.uimanager.UIBlock
                public final void execute(NativeViewHierarchyManager nativeViewHierarchyManager) {
                    a1.b(a1.this, nativeViewHierarchyManager);
                }
            });
        }
    }
}
