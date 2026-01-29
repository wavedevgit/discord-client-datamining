package com.swmansion.reanimated;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.uimanager.UIManagerHelper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class ReaCompatibility {
    private FabricUIManager fabricUIManager;

    public ReaCompatibility(ReactApplicationContext reactApplicationContext) {
        this.fabricUIManager = (FabricUIManager) UIManagerHelper.getUIManager(reactApplicationContext, 2);
    }

    public void registerFabricEventListener(NodesManager nodesManager) {
        FabricUIManager fabricUIManager = this.fabricUIManager;
        if (fabricUIManager != null) {
            fabricUIManager.getEventDispatcher().addListener(nodesManager);
        }
    }

    public void synchronouslyUpdateUIProps(int i10, ReadableMap readableMap) {
        FabricUIManager fabricUIManager = this.fabricUIManager;
        if (fabricUIManager != null) {
            fabricUIManager.synchronouslyUpdateViewOnUIThread(i10, readableMap);
        }
    }

    public void unregisterFabricEventListener(NodesManager nodesManager) {
        FabricUIManager fabricUIManager = this.fabricUIManager;
        if (fabricUIManager != null) {
            fabricUIManager.getEventDispatcher().removeListener(nodesManager);
        }
    }
}
