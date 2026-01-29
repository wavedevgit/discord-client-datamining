package com.reactnativekeyboardcontroller;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends BaseReactPackage {
    /* JADX INFO: Access modifiers changed from: private */
    public static final Map b() {
        HashMap hashMap = new HashMap();
        hashMap.put(NativeKeyboardControllerSpec.NAME, new ReactModuleInfo(NativeKeyboardControllerSpec.NAME, NativeKeyboardControllerSpec.NAME, false, false, false, true));
        hashMap.put(NativeStatusBarManagerCompatSpec.NAME, new ReactModuleInfo(NativeStatusBarManagerCompatSpec.NAME, NativeStatusBarManagerCompatSpec.NAME, false, false, false, true));
        return hashMap;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public List createViewManagers(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.o(new KeyboardControllerViewManager(reactContext), new KeyboardGestureAreaViewManager(reactContext), new OverKeyboardViewManager(reactContext));
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String name, ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (Intrinsics.areEqual(name, NativeKeyboardControllerSpec.NAME)) {
            return new KeyboardControllerModule(reactContext);
        }
        if (Intrinsics.areEqual(name, NativeStatusBarManagerCompatSpec.NAME)) {
            return new StatusBarManagerCompatModule(reactContext);
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() { // from class: com.reactnativekeyboardcontroller.a
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                Map b10;
                b10 = b.b();
                return b10;
            }
        };
    }
}
