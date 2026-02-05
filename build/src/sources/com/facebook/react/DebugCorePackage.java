package com.facebook.react;

import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import javax.inject.Provider;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0010\u001e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u00012\u00020\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\b\u0010\r\u001a\u00020\u000eH\u0016J\u001a\u0010\u000f\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0016\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\b0\u00152\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0016\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00070\u00172\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\"\u0010\u0018\u001a\f\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0018\u00010\u00192\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u001a\u001a\u00020\u0007H\u0016R'\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00068BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u000b\u0010\f\u001a\u0004\b\t\u0010\n¨\u0006\u001b"}, d2 = {"Lcom/facebook/react/DebugCorePackage;", "Lcom/facebook/react/BaseReactPackage;", "Lcom/facebook/react/ViewManagerOnDemandReactPackage;", "<init>", "()V", "viewManagersMap", "", "", "Lcom/facebook/react/bridge/ModuleSpec;", "getViewManagersMap", "()Ljava/util/Map;", "viewManagersMap$delegate", "Lkotlin/Lazy;", "getReactModuleInfoProvider", "Lcom/facebook/react/module/model/ReactModuleInfoProvider;", "getModule", "Lcom/facebook/react/bridge/NativeModule;", StackTraceHelper.NAME_KEY, "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "getViewManagers", "", "getViewManagerNames", "", "createViewManager", "Lcom/facebook/react/uimanager/ViewManager;", "viewManagerName", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DebugCorePackage extends BaseReactPackage implements ViewManagerOnDemandReactPackage {
    @NotNull
    private final Lazy viewManagersMap$delegate = or.l.b(or.o.f44233i, new Function0() { // from class: com.facebook.react.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Map viewManagersMap_delegate$lambda$1;
            viewManagersMap_delegate$lambda$1 = DebugCorePackage.viewManagersMap_delegate$lambda$1();
            return viewManagersMap_delegate$lambda$1;
        }
    });

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map getReactModuleInfoProvider$lambda$2() {
        return o0.i();
    }

    private final Map<String, ModuleSpec> getViewManagersMap() {
        return (Map) this.viewManagersMap$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map viewManagersMap_delegate$lambda$1() {
        return o0.f(or.v.a(DebuggingOverlayManager.REACT_CLASS, ModuleSpec.Companion.viewManagerSpec(new Provider() { // from class: com.facebook.react.d
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap_delegate$lambda$1$lambda$0;
                viewManagersMap_delegate$lambda$1$lambda$0 = DebugCorePackage.viewManagersMap_delegate$lambda$1$lambda$0();
                return viewManagersMap_delegate$lambda$1$lambda$0;
            }
        })));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap_delegate$lambda$1$lambda$0() {
        return new DebuggingOverlayManager();
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    public ViewManager<?, ?> createViewManager(@NotNull ReactApplicationContext reactContext, @NotNull String viewManagerName) {
        NativeModule nativeModule;
        Provider provider;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(viewManagerName, "viewManagerName");
        ModuleSpec orDefault = getViewManagersMap().getOrDefault(viewManagerName, null);
        if (orDefault != null && (provider = orDefault.provider()) != null) {
            nativeModule = (NativeModule) provider.get();
        } else {
            nativeModule = null;
        }
        if (!(nativeModule instanceof ViewManager)) {
            return null;
        }
        return (ViewManager) nativeModule;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(@NotNull String name, @NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    @NotNull
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() { // from class: com.facebook.react.c
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                Map reactModuleInfoProvider$lambda$2;
                reactModuleInfoProvider$lambda$2 = DebugCorePackage.getReactModuleInfoProvider$lambda$2();
                return reactModuleInfoProvider$lambda$2;
            }
        };
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    @NotNull
    public Collection<String> getViewManagerNames(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return getViewManagersMap().keySet();
    }

    @Override // com.facebook.react.BaseReactPackage
    @NotNull
    public List<ModuleSpec> getViewManagers(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.h1(getViewManagersMap().values());
    }
}
