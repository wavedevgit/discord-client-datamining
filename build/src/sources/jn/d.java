package jn;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.ViewManagerOnDemandReactPackage;
import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.uimanager.ViewManager;
import com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager;
import com.swmansion.gesturehandler.react.RNGestureHandlerModule;
import java.lang.annotation.Annotation;
import java.util.List;
import java.util.Map;
import javax.inject.Provider;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import qr.l;
import qr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends BaseReactPackage implements ViewManagerOnDemandReactPackage {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f30003a = l.a(new Function0() { // from class: jn.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Map e10;
            e10 = d.e();
            return e10;
        }
    });

    private final Map d() {
        return (Map) this.f30003a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map e() {
        return o0.f(v.a(RNGestureHandlerButtonViewManager.REACT_CLASS, ModuleSpec.Companion.viewManagerSpec(new Provider() { // from class: jn.c
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule f10;
                f10 = d.f();
                return f10;
            }
        })));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule f() {
        return new RNGestureHandlerButtonViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map getReactModuleInfoProvider$lambda$2() {
        Annotation annotation = RNGestureHandlerModule.class.getAnnotation(ReactModule.class);
        Intrinsics.checkNotNull(annotation);
        ReactModule reactModule = (ReactModule) annotation;
        String name = reactModule.name();
        String name2 = RNGestureHandlerModule.class.getName();
        Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
        return o0.n(v.a("RNGestureHandlerModule", new ReactModuleInfo(name, name2, reactModule.canOverrideExistingModule(), reactModule.needsEagerInit(), reactModule.isCxxModule(), true)));
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    public ViewManager createViewManager(ReactApplicationContext reactContext, String viewManagerName) {
        NativeModule nativeModule;
        Provider provider;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(viewManagerName, "viewManagerName");
        ModuleSpec moduleSpec = (ModuleSpec) d().get(viewManagerName);
        if (moduleSpec != null && (provider = moduleSpec.provider()) != null) {
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
    public List createViewManagers(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.e(new RNGestureHandlerButtonViewManager());
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String name, ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (Intrinsics.areEqual(name, "RNGestureHandlerModule")) {
            return new RNGestureHandlerModule(reactContext);
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        try {
            Object newInstance = Class.forName("com.swmansion.gesturehandler.RNGestureHandlerPackage$$ReactModuleInfoProvider").getDeclaredConstructor(null).newInstance(null);
            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type com.facebook.react.module.model.ReactModuleInfoProvider");
            return (ReactModuleInfoProvider) newInstance;
        } catch (ClassNotFoundException unused) {
            return new ReactModuleInfoProvider() { // from class: jn.b
                @Override // com.facebook.react.module.model.ReactModuleInfoProvider
                public final Map getReactModuleInfos() {
                    Map reactModuleInfoProvider$lambda$2;
                    reactModuleInfoProvider$lambda$2 = d.getReactModuleInfoProvider$lambda$2();
                    return reactModuleInfoProvider$lambda$2;
                }
            };
        } catch (IllegalAccessException e10) {
            throw new RuntimeException("No ReactModuleInfoProvider for RNGestureHandlerPackage$$ReactModuleInfoProvider", e10);
        } catch (InstantiationException e11) {
            throw new RuntimeException("No ReactModuleInfoProvider for RNGestureHandlerPackage$$ReactModuleInfoProvider", e11);
        }
    }

    @Override // com.facebook.react.BaseReactPackage
    protected List getViewManagers(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.j1(d().values());
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    public List getViewManagerNames(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.h1(d().keySet());
    }
}
