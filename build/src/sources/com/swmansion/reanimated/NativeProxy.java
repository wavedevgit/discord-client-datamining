package com.swmansion.reanimated;

import com.facebook.jni.HybridData;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.UIManagerHelper;
import com.swmansion.reanimated.layoutReanimation.LayoutAnimations;
import com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder;
import com.swmansion.reanimated.nativeProxy.NativeProxyCommon;
import com.swmansion.worklets.WorkletsModule;
import java.util.HashMap;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class NativeProxy extends NativeProxyCommon {
    private final FabricUIManager mFabricUIManager;
    @fb.a
    private final HybridData mHybridData;
    private final AtomicBoolean mInvalidated;

    public NativeProxy(ReactApplicationContext reactApplicationContext, WorkletsModule workletsModule) {
        super(reactApplicationContext);
        this.mInvalidated = new AtomicBoolean(false);
        ReactFeatureFlagsWrapper.enableMountHooks();
        FabricUIManager fabricUIManager = (FabricUIManager) UIManagerHelper.getUIManager(reactApplicationContext, 2);
        this.mFabricUIManager = fabricUIManager;
        LayoutAnimations layoutAnimations = new LayoutAnimations(reactApplicationContext);
        CallInvokerHolderImpl a10 = com.swmansion.worklets.b.a(reactApplicationContext);
        JavaScriptContextHolder javaScriptContextHolder = reactApplicationContext.getJavaScriptContextHolder();
        Objects.requireNonNull(javaScriptContextHolder);
        this.mHybridData = initHybrid(workletsModule, javaScriptContextHolder.get(), a10, layoutAnimations, reactApplicationContext.isBridgeless(), fabricUIManager);
        prepareLayoutAnimations(layoutAnimations);
        installJSIBindings();
    }

    public static NativeMethodsHolder createNativeMethodsHolder(LayoutAnimations layoutAnimations) {
        return new NativeMethodsHolder() { // from class: com.swmansion.reanimated.NativeProxy.1
            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public void cancelAnimation(int i10) {
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public void checkDuplicateSharedTag(int i10, int i11) {
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public void clearAnimationConfig(int i10) {
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public int findPrecedingViewTagForTransition(int i10) {
                return -1;
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public int[] getSharedGroup(int i10) {
                return new int[0];
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public boolean hasAnimation(int i10, int i11) {
                return false;
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public boolean isLayoutAnimationEnabled() {
                return false;
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public boolean shouldAnimateExiting(int i10, boolean z10) {
                return false;
            }

            @Override // com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder
            public void startAnimation(int i10, int i11, HashMap<String, Object> hashMap) {
            }
        };
    }

    private native HybridData initHybrid(WorkletsModule workletsModule, long j10, CallInvokerHolderImpl callInvokerHolderImpl, LayoutAnimations layoutAnimations, boolean z10, FabricUIManager fabricUIManager);

    private native void invalidateCpp();

    @Override // com.swmansion.reanimated.nativeProxy.NativeProxyCommon
    protected HybridData getHybridData() {
        return this.mHybridData;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void invalidate() {
        HybridData hybridData;
        if (!this.mInvalidated.getAndSet(true) && (hybridData = this.mHybridData) != null && hybridData.isValid()) {
            invalidateCpp();
        }
    }

    public native boolean isAnyHandlerWaitingForEvent(String str, int i10);

    public native void performOperations(boolean z10, boolean z11);

    @fb.a
    public boolean preserveMountedTags(int[] iArr) {
        for (int i10 = 0; i10 < iArr.length; i10++) {
            try {
                if (this.mFabricUIManager.resolveView(iArr[i10]) == null) {
                    iArr[i10] = -1;
                }
            } catch (IllegalViewOperationException unused) {
                iArr[i10] = -1;
            }
        }
        return true;
    }
}
