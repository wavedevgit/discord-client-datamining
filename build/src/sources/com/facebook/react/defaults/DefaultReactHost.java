package com.facebook.react.defaults;

import android.content.Context;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.defaults.DefaultTurboModuleManagerDelegate;
import com.facebook.react.fabric.ComponentFactory;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.runtime.BindingsInstaller;
import com.facebook.react.runtime.JSRuntimeFactory;
import com.facebook.react.runtime.ReactHostImpl;
import com.facebook.react.runtime.ReactSurfaceImpl;
import com.facebook.react.runtime.ReactSurfaceView;
import com.facebook.react.runtime.cxxreactpackage.CxxReactPackage;
import com.facebook.react.runtime.hermes.HermesInstance;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u008a\u0001\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0018\u0010\f\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f0\r2\b\b\u0002\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00112\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00152\b\b\u0002\u0010\u0016\u001a\u00020\u00172\u001a\b\u0002\u0010\u0018\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u001b0\u00190\nH\u0007J¬\u0001\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0018\u0010\f\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f0\r2\b\b\u0002\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00112\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00112\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00152\b\b\u0002\u0010\u0016\u001a\u00020\u00172\u001a\b\u0002\u0010\u0018\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u001b0\u00190\n2\u0014\b\u0002\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001e0\u00192\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010 H\u0007J\u0090\u0001\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\b\b\u0002\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00112\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00112\b\b\u0002\u0010!\u001a\u00020\u00172\b\b\u0002\u0010\u0016\u001a\u00020\u00172\u001a\b\u0002\u0010\u0018\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u001b0\u00190\n2\u0014\b\u0002\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001e0\u00192\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010 H\u0007Jn\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\b\b\u0002\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00112\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00112\b\b\u0002\u0010!\u001a\u00020\u00172\b\b\u0002\u0010\u0016\u001a\u00020\u00172\u001a\b\u0002\u0010\u0018\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u001a\u0012\u0004\u0012\u00020\u001b0\u00190\nH\u0007J$\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\"\u001a\u00020#2\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0015H\u0007J\r\u0010$\u001a\u00020\u001eH\u0000¢\u0006\u0002\b%R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/facebook/react/defaults/DefaultReactHost;", "", "<init>", "()V", "reactHost", "Lcom/facebook/react/ReactHost;", "getDefaultReactHost", "context", "Landroid/content/Context;", "packageList", "", "Lcom/facebook/react/ReactPackage;", "createReactSurfaceView", "Lkotlin/Function2;", "Lcom/facebook/react/runtime/ReactSurfaceImpl;", "Lcom/facebook/react/runtime/ReactSurfaceView;", "jsMainModulePath", "", "jsBundleAssetPath", "jsBundleFilePath", "jsRuntimeFactory", "Lcom/facebook/react/runtime/JSRuntimeFactory;", "useDevSupport", "", "cxxReactPackageProviders", "Lkotlin/Function1;", "Lcom/facebook/react/bridge/ReactContext;", "Lcom/facebook/react/runtime/cxxreactpackage/CxxReactPackage;", "exceptionHandler", "Ljava/lang/Exception;", "", "bindingsInstaller", "Lcom/facebook/react/runtime/BindingsInstaller;", "isHermesEnabled", "reactNativeHost", "Lcom/facebook/react/ReactNativeHost;", "invalidate", "invalidate$ReactAndroid_release", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDefaultReactHost.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DefaultReactHost.kt\ncom/facebook/react/defaults/DefaultReactHost\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,315:1\n1869#2,2:316\n*S KotlinDebug\n*F\n+ 1 DefaultReactHost.kt\ncom/facebook/react/defaults/DefaultReactHost\n*L\n135#1:316,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DefaultReactHost {
    @NotNull
    public static final DefaultReactHost INSTANCE = new DefaultReactHost();
    private static ReactHost reactHost;

    private DefaultReactHost() {
    }

    @NotNull
    public static final ReactHost getDefaultReactHost(@NotNull Context context, @NotNull List<? extends ReactPackage> packageList, @NotNull Function2<? super Context, ? super ReactSurfaceImpl, ? extends ReactSurfaceView> createReactSurfaceView, @NotNull String jsMainModulePath, @NotNull String jsBundleAssetPath, String str, JSRuntimeFactory jSRuntimeFactory, boolean z10, @NotNull List<? extends Function1<? super ReactContext, ? extends CxxReactPackage>> cxxReactPackageProviders) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(packageList, "packageList");
        Intrinsics.checkNotNullParameter(createReactSurfaceView, "createReactSurfaceView");
        Intrinsics.checkNotNullParameter(jsMainModulePath, "jsMainModulePath");
        Intrinsics.checkNotNullParameter(jsBundleAssetPath, "jsBundleAssetPath");
        Intrinsics.checkNotNullParameter(cxxReactPackageProviders, "cxxReactPackageProviders");
        return getDefaultReactHost(context, packageList, createReactSurfaceView, jsMainModulePath, jsBundleAssetPath, str, jSRuntimeFactory, z10, cxxReactPackageProviders, new Function1() { // from class: com.facebook.react.defaults.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit defaultReactHost$lambda$0;
                defaultReactHost$lambda$0 = DefaultReactHost.getDefaultReactHost$lambda$0((Exception) obj);
                return defaultReactHost$lambda$0;
            }
        }, null);
    }

    public static /* synthetic */ ReactHost getDefaultReactHost$default(Context context, List list, Function2 function2, String str, String str2, String str3, JSRuntimeFactory jSRuntimeFactory, boolean z10, List list2, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            str = "index";
        }
        if ((i10 & 16) != 0) {
            str2 = "index";
        }
        if ((i10 & 32) != 0) {
            str3 = null;
        }
        if ((i10 & 64) != 0) {
            jSRuntimeFactory = null;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z10 = ReactBuildConfig.DEBUG;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            list2 = CollectionsKt.l();
        }
        return getDefaultReactHost(context, list, function2, str, str2, str3, jSRuntimeFactory, z10, list2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getDefaultReactHost$lambda$0(Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw it;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getDefaultReactHost$lambda$1(Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw it;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getDefaultReactHost$lambda$3(Exception it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw it;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactSurfaceView getDefaultReactHost$lambda$4(Context ctx, ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(ctx, "ctx");
        Intrinsics.checkNotNullParameter(surface, "surface");
        return new ReactSurfaceView(ctx, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactSurfaceView getDefaultReactHost$lambda$5(Context ctx, ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(ctx, "ctx");
        Intrinsics.checkNotNullParameter(surface, "surface");
        return new ReactSurfaceView(ctx, surface);
    }

    public final void invalidate$ReactAndroid_release() {
        reactHost = null;
    }

    @NotNull
    public static final ReactHost getDefaultReactHost(@NotNull Context context, @NotNull List<? extends ReactPackage> packageList, @NotNull Function2<? super Context, ? super ReactSurfaceImpl, ? extends ReactSurfaceView> createReactSurfaceView, @NotNull String jsMainModulePath, @NotNull String jsBundleAssetPath, String str, JSRuntimeFactory jSRuntimeFactory, boolean z10, @NotNull List<? extends Function1<? super ReactContext, ? extends CxxReactPackage>> cxxReactPackageProviders, @NotNull Function1<? super Exception, Unit> exceptionHandler, BindingsInstaller bindingsInstaller) {
        JSBundleLoader createAssetLoader;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(packageList, "packageList");
        Intrinsics.checkNotNullParameter(createReactSurfaceView, "createReactSurfaceView");
        Intrinsics.checkNotNullParameter(jsMainModulePath, "jsMainModulePath");
        Intrinsics.checkNotNullParameter(jsBundleAssetPath, "jsBundleAssetPath");
        Intrinsics.checkNotNullParameter(cxxReactPackageProviders, "cxxReactPackageProviders");
        Intrinsics.checkNotNullParameter(exceptionHandler, "exceptionHandler");
        if (reactHost == null) {
            if (str != null) {
                if (StringsKt.P(str, "assets://", false, 2, null)) {
                    createAssetLoader = JSBundleLoader.Companion.createAssetLoader(context, str, true);
                } else {
                    createAssetLoader = JSBundleLoader.Companion.createFileLoader(str);
                }
            } else {
                JSBundleLoader.Companion companion = JSBundleLoader.Companion;
                createAssetLoader = companion.createAssetLoader(context, "assets://" + jsBundleAssetPath, true);
            }
            JSBundleLoader jSBundleLoader = createAssetLoader;
            DefaultTurboModuleManagerDelegate.Builder builder = new DefaultTurboModuleManagerDelegate.Builder();
            Iterator<T> it = cxxReactPackageProviders.iterator();
            while (it.hasNext()) {
                builder.addCxxReactPackage((Function1) it.next());
            }
            DefaultReactHostDelegate defaultReactHostDelegate = new DefaultReactHostDelegate(jsMainModulePath, jSBundleLoader, packageList, jSRuntimeFactory == null ? new HermesInstance() : jSRuntimeFactory, bindingsInstaller, exceptionHandler, builder, createReactSurfaceView);
            ComponentFactory componentFactory = new ComponentFactory();
            DefaultComponentsRegistry.register(componentFactory);
            reactHost = new ReactHostImpl(context, defaultReactHostDelegate, componentFactory, true, z10);
        }
        ReactHost reactHost2 = reactHost;
        Intrinsics.checkNotNull(reactHost2, "null cannot be cast to non-null type com.facebook.react.ReactHost");
        return reactHost2;
    }

    public static /* synthetic */ ReactHost getDefaultReactHost$default(Context context, List list, Function2 function2, String str, String str2, String str3, JSRuntimeFactory jSRuntimeFactory, boolean z10, List list2, Function1 function1, BindingsInstaller bindingsInstaller, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            str = "index";
        }
        if ((i10 & 16) != 0) {
            str2 = "index";
        }
        if ((i10 & 32) != 0) {
            str3 = null;
        }
        if ((i10 & 64) != 0) {
            jSRuntimeFactory = null;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z10 = ReactBuildConfig.DEBUG;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            list2 = CollectionsKt.l();
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            function1 = new Function1() { // from class: com.facebook.react.defaults.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit defaultReactHost$lambda$1;
                    defaultReactHost$lambda$1 = DefaultReactHost.getDefaultReactHost$lambda$1((Exception) obj2);
                    return defaultReactHost$lambda$1;
                }
            };
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            bindingsInstaller = null;
        }
        return getDefaultReactHost(context, list, function2, str, str2, str3, jSRuntimeFactory, z10, list2, function1, bindingsInstaller);
    }

    public static /* synthetic */ ReactHost getDefaultReactHost$default(Context context, List list, String str, String str2, String str3, boolean z10, boolean z11, List list2, Function1 function1, BindingsInstaller bindingsInstaller, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str = "index";
        }
        if ((i10 & 8) != 0) {
            str2 = "index";
        }
        if ((i10 & 16) != 0) {
            str3 = null;
        }
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        if ((i10 & 64) != 0) {
            z11 = ReactBuildConfig.DEBUG;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = CollectionsKt.l();
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            function1 = new Function1() { // from class: com.facebook.react.defaults.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit defaultReactHost$lambda$3;
                    defaultReactHost$lambda$3 = DefaultReactHost.getDefaultReactHost$lambda$3((Exception) obj2);
                    return defaultReactHost$lambda$3;
                }
            };
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            bindingsInstaller = null;
        }
        return getDefaultReactHost(context, list, str, str2, str3, z10, z11, list2, function1, bindingsInstaller);
    }

    public static /* synthetic */ ReactHost getDefaultReactHost$default(Context context, List list, String str, String str2, String str3, boolean z10, boolean z11, List list2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str = "index";
        }
        if ((i10 & 8) != 0) {
            str2 = "index";
        }
        if ((i10 & 16) != 0) {
            str3 = null;
        }
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        if ((i10 & 64) != 0) {
            z11 = ReactBuildConfig.DEBUG;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = CollectionsKt.l();
        }
        return getDefaultReactHost(context, list, str, str2, str3, z10, z11, list2);
    }

    public static /* synthetic */ ReactHost getDefaultReactHost$default(Context context, ReactNativeHost reactNativeHost, JSRuntimeFactory jSRuntimeFactory, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            jSRuntimeFactory = null;
        }
        return getDefaultReactHost(context, reactNativeHost, jSRuntimeFactory);
    }

    @ir.c
    @NotNull
    public static final ReactHost getDefaultReactHost(@NotNull Context context, @NotNull List<? extends ReactPackage> packageList, @NotNull String jsMainModulePath, @NotNull String jsBundleAssetPath, String str, boolean z10, boolean z11, @NotNull List<? extends Function1<? super ReactContext, ? extends CxxReactPackage>> cxxReactPackageProviders, @NotNull Function1<? super Exception, Unit> exceptionHandler, BindingsInstaller bindingsInstaller) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(packageList, "packageList");
        Intrinsics.checkNotNullParameter(jsMainModulePath, "jsMainModulePath");
        Intrinsics.checkNotNullParameter(jsBundleAssetPath, "jsBundleAssetPath");
        Intrinsics.checkNotNullParameter(cxxReactPackageProviders, "cxxReactPackageProviders");
        Intrinsics.checkNotNullParameter(exceptionHandler, "exceptionHandler");
        return getDefaultReactHost(context, packageList, new Function2() { // from class: com.facebook.react.defaults.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                ReactSurfaceView defaultReactHost$lambda$4;
                defaultReactHost$lambda$4 = DefaultReactHost.getDefaultReactHost$lambda$4((Context) obj, (ReactSurfaceImpl) obj2);
                return defaultReactHost$lambda$4;
            }
        }, jsMainModulePath, jsBundleAssetPath, str, new HermesInstance(), z11, cxxReactPackageProviders, exceptionHandler, bindingsInstaller);
    }

    @ir.c
    @NotNull
    public static final ReactHost getDefaultReactHost(@NotNull Context context, @NotNull List<? extends ReactPackage> packageList, @NotNull String jsMainModulePath, @NotNull String jsBundleAssetPath, String str, boolean z10, boolean z11, @NotNull List<? extends Function1<? super ReactContext, ? extends CxxReactPackage>> cxxReactPackageProviders) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(packageList, "packageList");
        Intrinsics.checkNotNullParameter(jsMainModulePath, "jsMainModulePath");
        Intrinsics.checkNotNullParameter(jsBundleAssetPath, "jsBundleAssetPath");
        Intrinsics.checkNotNullParameter(cxxReactPackageProviders, "cxxReactPackageProviders");
        return getDefaultReactHost(context, packageList, new Function2() { // from class: com.facebook.react.defaults.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                ReactSurfaceView defaultReactHost$lambda$5;
                defaultReactHost$lambda$5 = DefaultReactHost.getDefaultReactHost$lambda$5((Context) obj, (ReactSurfaceImpl) obj2);
                return defaultReactHost$lambda$5;
            }
        }, jsMainModulePath, jsBundleAssetPath, str, new HermesInstance(), z11, cxxReactPackageProviders);
    }

    @NotNull
    public static final ReactHost getDefaultReactHost(@NotNull Context context, @NotNull ReactNativeHost reactNativeHost, JSRuntimeFactory jSRuntimeFactory) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(reactNativeHost, "reactNativeHost");
        if (reactNativeHost instanceof DefaultReactNativeHost) {
            return ((DefaultReactNativeHost) reactNativeHost).toReactHost$ReactAndroid_release(context, jSRuntimeFactory);
        }
        throw new IllegalArgumentException("You can call getDefaultReactHost only with instances of DefaultReactNativeHost");
    }
}
