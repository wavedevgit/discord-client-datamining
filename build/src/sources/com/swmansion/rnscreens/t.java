package com.swmansion.rnscreens;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager;
import com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager;
import com.swmansion.rnscreens.gamma.tabs.TabScreenViewManager;
import com.swmansion.rnscreens.gamma.tabs.TabsHostViewManager;
import com.swmansion.rnscreens.safearea.SafeAreaViewManager;
import com.swmansion.rnscreens.utils.ScreenDummyLayoutHelper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t extends BaseReactPackage {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19366b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private ScreenDummyLayoutHelper f19367a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map b() {
        HashMap hashMap = new HashMap();
        hashMap.put("RNSModule", new ReactModuleInfo("RNSModule", "RNSModule", false, false, true, false, true));
        return hashMap;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public List createViewManagers(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19367a = new ScreenDummyLayoutHelper(reactContext);
        k.f19291d.f(reactContext);
        return CollectionsKt.o(new ScreenContainerViewManager(), new ScreenViewManager(), new ModalScreenViewManager(), new ScreenStackViewManager(), new ScreenStackHeaderConfigViewManager(), new ScreenStackHeaderSubviewManager(), new SearchBarManager(), new ScreenFooterManager(), new ScreenContentWrapperManager(), new TabsHostViewManager(), new TabScreenViewManager(), new SafeAreaViewManager(), new StackHostViewManager(), new StackScreenViewManager());
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String s10, ReactApplicationContext reactApplicationContext) {
        Intrinsics.checkNotNullParameter(s10, "s");
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        if (Intrinsics.areEqual(s10, "RNSModule")) {
            return new ScreensModule(reactApplicationContext);
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() { // from class: com.swmansion.rnscreens.s
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                Map b10;
                b10 = t.b();
                return b10;
            }
        };
    }
}
