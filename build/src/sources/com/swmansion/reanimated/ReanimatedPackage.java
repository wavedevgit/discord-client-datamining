package com.swmansion.reanimated;

import androidx.annotation.NonNull;
import com.facebook.react.BaseReactPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.uimanager.ReanimatedUIManager;
import com.facebook.react.uimanager.UIManagerModule;
import com.swmansion.worklets.WorkletsModule;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ReanimatedPackage extends BaseReactPackage implements ReactPackage {
    public static /* synthetic */ Map a(Map map) {
        return map;
    }

    private UIManagerModule createUIManager(ReactApplicationContext reactApplicationContext) {
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_START);
        c4.a.c("createUIManagerModule");
        try {
            return ReanimatedUIManagerFactory.create(reactApplicationContext, getReactInstanceManager(reactApplicationContext).getOrCreateViewManagers(reactApplicationContext), -1);
        } finally {
            c4.a.f();
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_END);
        }
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(@NonNull String str, @NonNull ReactApplicationContext reactApplicationContext) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1023230923:
                if (str.equals(NativeWorkletsModuleSpec.NAME)) {
                    c10 = 0;
                    break;
                }
                break;
            case 1093251842:
                if (str.equals(NativeReanimatedModuleSpec.NAME)) {
                    c10 = 1;
                    break;
                }
                break;
            case 1861242489:
                if (str.equals(UIManagerModule.NAME)) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return new WorkletsModule(reactApplicationContext);
            case 1:
                return new ReanimatedModule(reactApplicationContext);
            case 2:
                return createUIManager(reactApplicationContext);
            default:
                return null;
        }
    }

    public ReactInstanceManager getReactInstanceManager(ReactApplicationContext reactApplicationContext) {
        return ((ReactApplication) reactApplicationContext.getApplicationContext()).getReactNativeHost().getReactInstanceManager();
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        Class[] clsArr = {WorkletsModule.class, ReanimatedModule.class, ReanimatedUIManager.class};
        final HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < 3; i10++) {
            Class cls = clsArr[i10];
            ReactModule reactModule = (ReactModule) cls.getAnnotation(ReactModule.class);
            Objects.requireNonNull(reactModule);
            ReactModule reactModule2 = reactModule;
            hashMap.put(reactModule2.name(), new ReactModuleInfo(reactModule2.name(), cls.getName(), true, reactModule2.needsEagerInit(), reactModule2.isCxxModule(), true));
        }
        return new ReactModuleInfoProvider() { // from class: com.swmansion.reanimated.i
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                return ReanimatedPackage.a(hashMap);
            }
        };
    }
}
