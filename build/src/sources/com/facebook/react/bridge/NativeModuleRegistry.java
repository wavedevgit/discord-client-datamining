package com.facebook.react.bridge;

import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.UIManagerModule;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u0000 '2\u00020\u0001:\u0001'B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\u0004\b\b\u0010\tJ\u0016\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\u0006\u0010\u0011\u001a\u00020\u0012H\u0001J\u0010\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0000H\u0001J\b\u0010\u0019\u001a\u00020\u0017H\u0001J\b\u0010\u001a\u001a\u00020\u0017H\u0001J\u0006\u0010\u001b\u001a\u00020\u0017J\u001e\u0010\u001c\u001a\u00020\u001d\"\b\b\u0000\u0010\u001e*\u00020\u001f2\f\u0010 \u001a\b\u0012\u0004\u0012\u0002H\u001e0!J#\u0010\"\u001a\u0002H\u001e\"\b\b\u0000\u0010\u001e*\u00020\u001f2\f\u0010 \u001a\b\u0012\u0004\u0012\u0002H\u001e0!¢\u0006\u0002\u0010#J\u000e\u0010\u001c\u001a\u00020\u001d2\u0006\u0010$\u001a\u00020\u0006J\u000e\u0010\"\u001a\u00020\u001f2\u0006\u0010$\u001a\u00020\u0006R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u000b8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\f\u0010\rR\u001a\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00070\u000f8AX\u0080\u0004¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0015R\u0017\u0010%\u001a\b\u0012\u0004\u0012\u00020\u001f0\u000f8F¢\u0006\u0006\u001a\u0004\b&\u0010\u0015¨\u0006("}, d2 = {"Lcom/facebook/react/bridge/NativeModuleRegistry;", "", "reactApplicationContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "modules", "", "", "Lcom/facebook/react/bridge/ModuleHolder;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/util/Map;)V", "moduleMap", "", "getModuleMap", "()Ljava/util/Map;", "getJavaModules", "", "Lcom/facebook/react/bridge/JavaModuleWrapper;", "jsInstance", "Lcom/facebook/react/bridge/JSInstance;", "cxxModules", "getCxxModules", "()Ljava/util/List;", "registerModules", "", "newRegister", "notifyJSInstanceDestroy", "notifyJSInstanceInitialized", "onBatchComplete", "hasModule", "", "T", "Lcom/facebook/react/bridge/NativeModule;", "moduleInterface", "Ljava/lang/Class;", "getModule", "(Ljava/lang/Class;)Lcom/facebook/react/bridge/NativeModule;", StackTraceHelper.NAME_KEY, "allModules", "getAllModules", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativeModuleRegistry.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativeModuleRegistry.kt\ncom/facebook/react/bridge/NativeModuleRegistry\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,157:1\n1#2:158\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeModuleRegistry {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private final Map<String, ModuleHolder> modules;
    @NotNull
    private final ReactApplicationContext reactApplicationContext;

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/facebook/react/bridge/NativeModuleRegistry$Companion;", "", "<init>", "()V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("NativeModuleRegistry", LegacyArchitectureLogLevel.ERROR);
    }

    public NativeModuleRegistry(@NotNull ReactApplicationContext reactApplicationContext, @NotNull Map<String, ModuleHolder> modules) {
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        Intrinsics.checkNotNullParameter(modules, "modules");
        this.reactApplicationContext = reactApplicationContext;
        this.modules = modules;
    }

    private final Map<String, ModuleHolder> getModuleMap() {
        return this.modules;
    }

    @NotNull
    public final List<NativeModule> getAllModules() {
        List c10 = CollectionsKt.c();
        for (ModuleHolder moduleHolder : this.modules.values()) {
            c10.add(moduleHolder.getModule());
        }
        return CollectionsKt.a(c10);
    }

    @NotNull
    public final List<ModuleHolder> getCxxModules() {
        List c10 = CollectionsKt.c();
        for (Map.Entry<String, ModuleHolder> entry : this.modules.entrySet()) {
            ModuleHolder value = entry.getValue();
            if (value.isCxxModule()) {
                c10.add(value);
            }
        }
        return CollectionsKt.a(c10);
    }

    @NotNull
    public final List<JavaModuleWrapper> getJavaModules(@NotNull JSInstance jsInstance) {
        Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
        List c10 = CollectionsKt.c();
        for (Map.Entry<String, ModuleHolder> entry : this.modules.entrySet()) {
            ModuleHolder value = entry.getValue();
            if (!value.isCxxModule()) {
                c10.add(new JavaModuleWrapper(jsInstance, value));
            }
        }
        return CollectionsKt.a(c10);
    }

    @NotNull
    public final <T extends NativeModule> T getModule(@NotNull Class<T> moduleInterface) {
        Intrinsics.checkNotNullParameter(moduleInterface, "moduleInterface");
        ReactModule reactModule = (ReactModule) moduleInterface.getAnnotation(ReactModule.class);
        if (reactModule != null) {
            ModuleHolder moduleHolder = this.modules.get(reactModule.name());
            if (moduleHolder != null) {
                T t10 = (T) moduleHolder.getModule();
                Intrinsics.checkNotNull(t10, "null cannot be cast to non-null type T of com.facebook.react.bridge.NativeModuleRegistry.getModule");
                return t10;
            }
            String name = moduleInterface.getName();
            throw new IllegalStateException((reactModule + ".name could not be found. Is it defined in " + name).toString());
        }
        String name2 = moduleInterface.getName();
        throw new IllegalArgumentException(("Could not find @ReactModule annotation in class " + name2).toString());
    }

    public final <T extends NativeModule> boolean hasModule(@NotNull Class<T> moduleInterface) {
        Intrinsics.checkNotNullParameter(moduleInterface, "moduleInterface");
        ReactModule reactModule = (ReactModule) moduleInterface.getAnnotation(ReactModule.class);
        if (reactModule != null) {
            return this.modules.containsKey(reactModule.name());
        }
        String name = moduleInterface.getName();
        throw new IllegalArgumentException(("Could not find @ReactModule annotation in class " + name).toString());
    }

    public final void notifyJSInstanceDestroy() {
        this.reactApplicationContext.assertOnNativeModulesQueueThread();
        qb.a.c(0L, "NativeModuleRegistry_notifyJSInstanceDestroy");
        try {
            for (ModuleHolder moduleHolder : this.modules.values()) {
                moduleHolder.destroy();
            }
        } finally {
            qb.a.i(0L);
        }
    }

    public final void notifyJSInstanceInitialized() {
        this.reactApplicationContext.assertOnNativeModulesQueueThread("From version React Native v0.44, native modules are explicitly not initialized on the UI thread.");
        ReactMarker.logMarker(ReactMarkerConstants.NATIVE_MODULE_INITIALIZE_START);
        qb.a.c(0L, "NativeModuleRegistry_notifyJSInstanceInitialized");
        try {
            for (ModuleHolder moduleHolder : this.modules.values()) {
                moduleHolder.markInitializable$ReactAndroid_release();
            }
        } finally {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.NATIVE_MODULE_INITIALIZE_END);
        }
    }

    public final void onBatchComplete() {
        LegacyArchitectureLogger.assertLegacyArchitecture("NativeModuleRegistry.onBatchComplete()", LegacyArchitectureLogLevel.WARNING);
        ModuleHolder moduleHolder = this.modules.get(UIManagerModule.NAME);
        if (moduleHolder != null && moduleHolder.hasInstance$ReactAndroid_release()) {
            NativeModule module = moduleHolder.getModule();
            Intrinsics.checkNotNull(module, "null cannot be cast to non-null type com.facebook.react.bridge.OnBatchCompleteListener");
            ((OnBatchCompleteListener) module).onBatchComplete();
        }
    }

    public final void registerModules(@NotNull NativeModuleRegistry newRegister) {
        Intrinsics.checkNotNullParameter(newRegister, "newRegister");
        if (Intrinsics.areEqual(this.reactApplicationContext, newRegister.reactApplicationContext)) {
            for (Map.Entry<String, ModuleHolder> entry : newRegister.getModuleMap().entrySet()) {
                String key = entry.getKey();
                ModuleHolder value = entry.getValue();
                if (!this.modules.containsKey(key)) {
                    this.modules.put(key, value);
                }
            }
            return;
        }
        throw new IllegalStateException("Extending native modules with non-matching application contexts.");
    }

    public final boolean hasModule(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.modules.containsKey(name);
    }

    @NotNull
    public final NativeModule getModule(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        ModuleHolder moduleHolder = this.modules.get(name);
        if (moduleHolder != null) {
            return moduleHolder.getModule();
        }
        throw new IllegalStateException(("Could not find module with name " + name).toString());
    }
}
