package com.facebook.react;

import com.facebook.react.bridge.ModuleHolder;
import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.uimanager.ViewManager;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@jr.c
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u001c\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0001\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b'\u0018\u0000 \u00182\u00020\u0001:\u0001\u0018B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u0007\u001a\u00020\bJ\u0016\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\u0007\u001a\u00020\bH$J\u001b\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\u0007\u001a\u00020\bH\u0000¢\u0006\u0002\b\rJ\u0016\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u000f0\n2\u0006\u0010\u0007\u001a\u00020\bH\u0017J\u0016\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\u0007\u001a\u00020\bH\u0016J&\u0010\u0011\u001a\u0018\u0012\u0014\u0012\u0012\u0012\u0006\b\u0000\u0012\u00020\u0013\u0012\u0006\b\u0000\u0012\u00020\u00130\u00120\n2\u0006\u0010\u0007\u001a\u00020\bH\u0016R\u0012\u0010\u0014\u001a\u00020\u0015X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0019"}, d2 = {"Lcom/facebook/react/LazyReactPackage;", "Lcom/facebook/react/ReactPackage;", "<init>", "()V", "getNativeModuleIterator", "", "Lcom/facebook/react/bridge/ModuleHolder;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "getNativeModules", "", "Lcom/facebook/react/bridge/ModuleSpec;", "internal_getNativeModules", "internal_getNativeModules$ReactAndroid_release", "createNativeModules", "Lcom/facebook/react/bridge/NativeModule;", "getViewManagers", "createViewManagers", "Lcom/facebook/react/uimanager/ViewManager;", "", "reactModuleInfoProvider", "Lcom/facebook/react/module/model/ReactModuleInfoProvider;", "getReactModuleInfoProvider", "()Lcom/facebook/react/module/model/ReactModuleInfoProvider;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class LazyReactPackage implements ReactPackage {
    @NotNull
    private static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/facebook/react/LazyReactPackage$Companion;", "", "<init>", "()V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("LazyReactPackage", LegacyArchitectureLogLevel.ERROR);
    }

    @Override // com.facebook.react.ReactPackage
    @jr.c
    @NotNull
    public List<NativeModule> createNativeModules(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        List c10 = CollectionsKt.c();
        for (ModuleSpec moduleSpec : getNativeModules(reactContext)) {
            qb.b.a(0L, "createNativeModule").c();
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_MODULE_START, moduleSpec.moduleName());
            try {
                Object obj = moduleSpec.provider().get();
                Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                NativeModule nativeModule = (NativeModule) obj;
                ReactMarker.logMarker(ReactMarkerConstants.CREATE_MODULE_END);
                qb.b.b(0L).c();
                c10.add(nativeModule);
            } catch (Throwable th2) {
                ReactMarker.logMarker(ReactMarkerConstants.CREATE_MODULE_END);
                qb.b.b(0L).c();
                throw th2;
            }
        }
        return CollectionsKt.a(c10);
    }

    @Override // com.facebook.react.ReactPackage
    @NotNull
    public List<ViewManager> createViewManagers(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        List<ModuleSpec> viewManagers = getViewManagers(reactContext);
        if (viewManagers.isEmpty()) {
            return CollectionsKt.l();
        }
        List c10 = CollectionsKt.c();
        for (ModuleSpec moduleSpec : viewManagers) {
            Object obj = moduleSpec.provider().get();
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.facebook.react.uimanager.ViewManager<in kotlin.Nothing, in kotlin.Nothing>");
            c10.add((ViewManager) obj);
        }
        return CollectionsKt.a(c10);
    }

    @NotNull
    public final Iterable<ModuleHolder> getNativeModuleIterator(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new LazyReactPackage$getNativeModuleIterator$1(getNativeModules(reactContext), getReactModuleInfoProvider().getReactModuleInfos());
    }

    @NotNull
    protected abstract List<ModuleSpec> getNativeModules(@NotNull ReactApplicationContext reactApplicationContext);

    @NotNull
    public abstract ReactModuleInfoProvider getReactModuleInfoProvider();

    @NotNull
    public List<ModuleSpec> getViewManagers(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.l();
    }

    @NotNull
    public final List<ModuleSpec> internal_getNativeModules$ReactAndroid_release(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return getNativeModules(reactContext);
    }
}
