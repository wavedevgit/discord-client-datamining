package com.facebook.react.shell;

import android.annotation.SuppressLint;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.react.BaseReactPackage;
import com.facebook.react.ViewManagerOnDemandReactPackage;
import com.facebook.react.animated.NativeAnimatedModule;
import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.ClassFinder;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.modules.accessibilityinfo.AccessibilityInfoModule;
import com.facebook.react.modules.appearance.AppearanceModule;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.modules.blob.BlobModule;
import com.facebook.react.modules.blob.FileReaderModule;
import com.facebook.react.modules.camera.ImageStoreManager;
import com.facebook.react.modules.clipboard.ClipboardModule;
import com.facebook.react.modules.devloading.DevLoadingModule;
import com.facebook.react.modules.devtoolsruntimesettings.ReactDevToolsRuntimeSettingsModule;
import com.facebook.react.modules.dialog.DialogModule;
import com.facebook.react.modules.fresco.FrescoModule;
import com.facebook.react.modules.i18nmanager.I18nManagerModule;
import com.facebook.react.modules.image.ImageLoaderModule;
import com.facebook.react.modules.intent.IntentModule;
import com.facebook.react.modules.network.NetworkingModule;
import com.facebook.react.modules.permissions.PermissionsModule;
import com.facebook.react.modules.reactdevtoolssettings.ReactDevToolsSettingsManagerModule;
import com.facebook.react.modules.share.ShareModule;
import com.facebook.react.modules.sound.SoundManagerModule;
import com.facebook.react.modules.statusbar.StatusBarModule;
import com.facebook.react.modules.toast.ToastModule;
import com.facebook.react.modules.vibration.VibrationModule;
import com.facebook.react.modules.websocket.WebSocketModule;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.drawer.ReactDrawerLayoutManager;
import com.facebook.react.views.image.ReactImageManager;
import com.facebook.react.views.modal.ReactModalHostManager;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.safeareaview.ReactSafeAreaViewManager;
import com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager;
import com.facebook.react.views.scroll.ReactHorizontalScrollViewManager;
import com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager;
import com.facebook.react.views.switchview.ReactSwitchManager;
import com.facebook.react.views.text.PreparedLayoutTextViewManager;
import com.facebook.react.views.text.ReactRawTextManager;
import com.facebook.react.views.text.ReactTextViewManager;
import com.facebook.react.views.text.ReactVirtualTextViewManager;
import com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager;
import com.facebook.react.views.textinput.ReactTextInputManager;
import com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager;
import com.facebook.react.views.view.ReactViewManager;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.inject.Provider;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u001e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u00012\u00020\u0002B\u0015\b\u0007\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u001a\u0010\u0007\u001a\u0004\u0018\u00010\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\fH\u0016J\u001e\u0010\r\u001a\u0010\u0012\f\u0012\n\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u000f0\u000e2\u0006\u0010\u000b\u001a\u00020\fH\u0016J\u0016\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00120\u000e2\u0006\u0010\u000b\u001a\u00020\fH\u0016J\u0016\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\n0\u00172\u0006\u0010\u000b\u001a\u00020\fH\u0016J\"\u0010\u0018\u001a\f\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0018\u00010\u000f2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\u0019\u001a\u00020\nH\u0016J\b\u0010\u001a\u001a\u00020\u001bH\u0016J\b\u0010\u001c\u001a\u00020\u001bH\u0002R\u0010\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0082\u0004¢\u0006\u0002\n\u0000R\"\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00120\u00118\u0006X\u0087\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006\u001d"}, d2 = {"Lcom/facebook/react/shell/MainReactPackage;", "Lcom/facebook/react/BaseReactPackage;", "Lcom/facebook/react/ViewManagerOnDemandReactPackage;", "config", "Lcom/facebook/react/shell/MainPackageConfig;", "<init>", "(Lcom/facebook/react/shell/MainPackageConfig;)V", "getModule", "Lcom/facebook/react/bridge/NativeModule;", StackTraceHelper.NAME_KEY, "", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "createViewManagers", "", "Lcom/facebook/react/uimanager/ViewManager;", "viewManagersMap", "", "Lcom/facebook/react/bridge/ModuleSpec;", "getViewManagersMap", "()Ljava/util/Map;", "getViewManagers", "getViewManagerNames", "", "createViewManager", "viewManagerName", "getReactModuleInfoProvider", "Lcom/facebook/react/module/model/ReactModuleInfoProvider;", "fallbackForMissingClass", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMainReactPackage.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MainReactPackage.kt\ncom/facebook/react/shell/MainReactPackage\n+ 2 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,286:1\n37#2:287\n36#2,3:288\n3829#3:291\n4344#3,2:292\n1193#4,2:294\n1267#4,4:296\n*S KotlinDebug\n*F\n+ 1 MainReactPackage.kt\ncom/facebook/react/shell/MainReactPackage\n*L\n267#1:287\n267#1:288,3\n271#1:291\n271#1:292,2\n272#1:294,2\n272#1:296,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MainReactPackage extends BaseReactPackage implements ViewManagerOnDemandReactPackage {
    private final MainPackageConfig config;
    @SuppressLint({"VisibleForTests"})
    @NotNull
    private final Map<String, ModuleSpec> viewManagersMap;

    public MainReactPackage() {
        this(null, 1, null);
    }

    private final ReactModuleInfoProvider fallbackForMissingClass() {
        Class<NativeAnimatedModule> cls;
        if (ReactNativeFeatureFlags.cxxNativeAnimatedEnabled()) {
            cls = null;
        } else {
            cls = NativeAnimatedModule.class;
        }
        Class[] clsArr = (Class[]) i.R(new Class[]{AccessibilityInfoModule.class, AppearanceModule.class, AppStateModule.class, BlobModule.class, DevLoadingModule.class, FileReaderModule.class, ClipboardModule.class, DialogModule.class, FrescoModule.class, I18nManagerModule.class, ImageLoaderModule.class, ImageStoreManager.class, IntentModule.class, cls, NetworkingModule.class, PermissionsModule.class, ReactDevToolsSettingsManagerModule.class, ReactDevToolsRuntimeSettingsModule.class, ShareModule.class, StatusBarModule.class, SoundManagerModule.class, ToastModule.class, VibrationModule.class, WebSocketModule.class}).toArray(new Class[0]);
        ArrayList<Class<?>> arrayList = new ArrayList();
        for (Class cls2 : clsArr) {
            if (cls2.isAnnotationPresent(ReactModule.class)) {
                arrayList.add(cls2);
            }
        }
        final LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(arrayList, 10)), 16));
        for (Class<?> cls3 : arrayList) {
            Annotation annotation = cls3.getAnnotation(ReactModule.class);
            if (annotation != null) {
                ReactModule reactModule = (ReactModule) annotation;
                String name = reactModule.name();
                String name2 = reactModule.name();
                String name3 = cls3.getName();
                Intrinsics.checkNotNullExpressionValue(name3, "getName(...)");
                Pair a10 = v.a(name, new ReactModuleInfo(name2, name3, reactModule.canOverrideExistingModule(), reactModule.needsEagerInit(), reactModule.isCxxModule(), ReactModuleInfo.Companion.classIsTurboModule(cls3)));
                linkedHashMap.put(a10.c(), a10.d());
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        return new ReactModuleInfoProvider() { // from class: mb.a
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                Map fallbackForMissingClass$lambda$18;
                fallbackForMissingClass$lambda$18 = MainReactPackage.fallbackForMissingClass$lambda$18(linkedHashMap);
                return fallbackForMissingClass$lambda$18;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map fallbackForMissingClass$lambda$18(Map map) {
        return map;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$0() {
        return new ReactDrawerLayoutManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$1() {
        return new ReactHorizontalScrollViewManager(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$10() {
        return new ReactRawTextManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$11() {
        return new ReactTextInputManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$12() {
        if (ReactNativeFeatureFlags.enablePreparedTextLayout()) {
            return new PreparedLayoutTextViewManager(null, 1, null);
        }
        return new ReactTextViewManager(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$13() {
        return new ReactViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$14() {
        return new ReactVirtualTextViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$15() {
        return new ReactUnimplementedViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$2() {
        return new ReactHorizontalScrollContainerViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$3() {
        return new ReactProgressBarViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$4() {
        return new ReactSafeAreaViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$5() {
        return new ReactSwitchManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$6() {
        return new SwipeRefreshLayoutManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$7() {
        return new FrescoBasedReactTextInlineImageViewManager(null, null, 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$8() {
        return new ReactImageManager(null, null, null, 7, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule viewManagersMap$lambda$9() {
        return new ReactModalHostManager();
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    public ViewManager<?, ?> createViewManager(@NotNull ReactApplicationContext reactContext, @NotNull String viewManagerName) {
        NativeModule nativeModule;
        Provider provider;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(viewManagerName, "viewManagerName");
        ModuleSpec moduleSpec = this.viewManagersMap.get(viewManagerName);
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
    @NotNull
    public List<ViewManager<?, ?>> createViewManagers(@NotNull ReactApplicationContext reactContext) {
        ViewManager reactTextViewManager;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        ReactDrawerLayoutManager reactDrawerLayoutManager = new ReactDrawerLayoutManager();
        ReactHorizontalScrollViewManager reactHorizontalScrollViewManager = new ReactHorizontalScrollViewManager(null, 1, null);
        ReactHorizontalScrollContainerViewManager reactHorizontalScrollContainerViewManager = new ReactHorizontalScrollContainerViewManager();
        ReactProgressBarViewManager reactProgressBarViewManager = new ReactProgressBarViewManager();
        ReactSwitchManager reactSwitchManager = new ReactSwitchManager();
        ReactSafeAreaViewManager reactSafeAreaViewManager = new ReactSafeAreaViewManager();
        SwipeRefreshLayoutManager swipeRefreshLayoutManager = new SwipeRefreshLayoutManager();
        FrescoBasedReactTextInlineImageViewManager frescoBasedReactTextInlineImageViewManager = new FrescoBasedReactTextInlineImageViewManager(null, null, 3, null);
        ReactImageManager reactImageManager = new ReactImageManager(null, null, null, 7, null);
        ReactModalHostManager reactModalHostManager = new ReactModalHostManager();
        ReactRawTextManager reactRawTextManager = new ReactRawTextManager();
        ReactTextInputManager reactTextInputManager = new ReactTextInputManager();
        if (ReactNativeFeatureFlags.enablePreparedTextLayout()) {
            reactTextViewManager = new PreparedLayoutTextViewManager(null, 1, null);
        } else {
            reactTextViewManager = new ReactTextViewManager(null, 1, null);
        }
        return CollectionsKt.o(reactDrawerLayoutManager, reactHorizontalScrollViewManager, reactHorizontalScrollContainerViewManager, reactProgressBarViewManager, reactSwitchManager, reactSafeAreaViewManager, swipeRefreshLayoutManager, frescoBasedReactTextInlineImageViewManager, reactImageManager, reactModalHostManager, reactRawTextManager, reactTextInputManager, reactTextViewManager, new ReactViewManager(), new ReactVirtualTextViewManager(), new ReactUnimplementedViewManager());
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(@NotNull String name, @NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (Intrinsics.areEqual(name, "AccessibilityInfo")) {
            return new AccessibilityInfoModule(reactContext);
        }
        ImagePipelineConfig imagePipelineConfig = null;
        if (Intrinsics.areEqual(name, "Appearance")) {
            return new AppearanceModule(reactContext, null, 2, null);
        }
        if (Intrinsics.areEqual(name, "AppState")) {
            return new AppStateModule(reactContext);
        }
        if (Intrinsics.areEqual(name, "BlobModule")) {
            return new BlobModule(reactContext);
        }
        if (Intrinsics.areEqual(name, "DevLoadingView")) {
            return new DevLoadingModule(reactContext);
        }
        if (Intrinsics.areEqual(name, FileReaderModule.Companion.getNAME())) {
            return new FileReaderModule(reactContext);
        }
        if (Intrinsics.areEqual(name, "Clipboard")) {
            return new ClipboardModule(reactContext);
        }
        if (Intrinsics.areEqual(name, "DialogManagerAndroid")) {
            return new DialogModule(reactContext);
        }
        if (Intrinsics.areEqual(name, FrescoModule.NAME)) {
            MainPackageConfig mainPackageConfig = this.config;
            if (mainPackageConfig != null) {
                imagePipelineConfig = mainPackageConfig.getFrescoConfig();
            }
            return new FrescoModule(reactContext, true, imagePipelineConfig);
        } else if (Intrinsics.areEqual(name, "I18nManager")) {
            return new I18nManagerModule(reactContext);
        } else {
            if (Intrinsics.areEqual(name, "ImageLoader")) {
                return new ImageLoaderModule(reactContext);
            }
            if (Intrinsics.areEqual(name, "ImageStoreManager")) {
                return new ImageStoreManager(reactContext);
            }
            if (Intrinsics.areEqual(name, "IntentAndroid")) {
                return new IntentModule(reactContext);
            }
            if (Intrinsics.areEqual(name, "NativeAnimatedModule")) {
                if (ReactNativeFeatureFlags.cxxNativeAnimatedEnabled()) {
                    return null;
                }
                return new NativeAnimatedModule(reactContext);
            } else if (Intrinsics.areEqual(name, "Networking")) {
                return new NetworkingModule(reactContext);
            } else {
                if (Intrinsics.areEqual(name, "PermissionsAndroid")) {
                    return new PermissionsModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "ShareModule")) {
                    return new ShareModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "StatusBarManager")) {
                    return new StatusBarModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "SoundManager")) {
                    return new SoundManagerModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "ToastAndroid")) {
                    return new ToastModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "Vibration")) {
                    return new VibrationModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "WebSocketModule")) {
                    return new WebSocketModule(reactContext);
                }
                if (Intrinsics.areEqual(name, "ReactDevToolsSettingsManager")) {
                    return new ReactDevToolsSettingsManagerModule(reactContext);
                }
                if (!Intrinsics.areEqual(name, "ReactDevToolsRuntimeSettingsModule")) {
                    return null;
                }
                return new ReactDevToolsRuntimeSettingsModule(reactContext);
            }
        }
    }

    @Override // com.facebook.react.BaseReactPackage
    @NotNull
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        Object obj;
        if (!ClassFinder.canLoadClassesFromAnnotationProcessors()) {
            return fallbackForMissingClass();
        }
        try {
            Class<?> findClass = ClassFinder.findClass("com.facebook.react.shell.MainReactPackage$$ReactModuleInfoProvider");
            ReactModuleInfoProvider reactModuleInfoProvider = null;
            if (findClass != null) {
                obj = findClass.newInstance();
            } else {
                obj = null;
            }
            if (obj instanceof ReactModuleInfoProvider) {
                reactModuleInfoProvider = (ReactModuleInfoProvider) obj;
            }
            if (reactModuleInfoProvider == null) {
                return fallbackForMissingClass();
            }
            return reactModuleInfoProvider;
        } catch (ClassNotFoundException unused) {
            return fallbackForMissingClass();
        } catch (IllegalAccessException e10) {
            throw new RuntimeException("No ReactModuleInfoProvider for MainReactPackage$$ReactModuleInfoProvider", e10);
        } catch (InstantiationException e11) {
            throw new RuntimeException("No ReactModuleInfoProvider for MainReactPackage$$ReactModuleInfoProvider", e11);
        }
    }

    @Override // com.facebook.react.ViewManagerOnDemandReactPackage
    @NotNull
    public Collection<String> getViewManagerNames(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return this.viewManagersMap.keySet();
    }

    @Override // com.facebook.react.BaseReactPackage
    @NotNull
    public List<ModuleSpec> getViewManagers(@NotNull ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return CollectionsKt.h1(this.viewManagersMap.values());
    }

    @NotNull
    public final Map<String, ModuleSpec> getViewManagersMap() {
        return this.viewManagersMap;
    }

    public /* synthetic */ MainReactPackage(MainPackageConfig mainPackageConfig, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : mainPackageConfig);
    }

    public MainReactPackage(MainPackageConfig mainPackageConfig) {
        this.config = mainPackageConfig;
        ModuleSpec.Companion companion = ModuleSpec.Companion;
        this.viewManagersMap = o0.m(v.a(ReactDrawerLayoutManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.i
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$0;
                viewManagersMap$lambda$0 = MainReactPackage.viewManagersMap$lambda$0();
                return viewManagersMap$lambda$0;
            }
        })), v.a(ReactHorizontalScrollViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.p
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$1;
                viewManagersMap$lambda$1 = MainReactPackage.viewManagersMap$lambda$1();
                return viewManagersMap$lambda$1;
            }
        })), v.a(ReactHorizontalScrollContainerViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.q
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$2;
                viewManagersMap$lambda$2 = MainReactPackage.viewManagersMap$lambda$2();
                return viewManagersMap$lambda$2;
            }
        })), v.a(ReactProgressBarViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.b
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$3;
                viewManagersMap$lambda$3 = MainReactPackage.viewManagersMap$lambda$3();
                return viewManagersMap$lambda$3;
            }
        })), v.a(ReactSafeAreaViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.c
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$4;
                viewManagersMap$lambda$4 = MainReactPackage.viewManagersMap$lambda$4();
                return viewManagersMap$lambda$4;
            }
        })), v.a(ReactSwitchManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.d
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$5;
                viewManagersMap$lambda$5 = MainReactPackage.viewManagersMap$lambda$5();
                return viewManagersMap$lambda$5;
            }
        })), v.a(SwipeRefreshLayoutManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.e
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$6;
                viewManagersMap$lambda$6 = MainReactPackage.viewManagersMap$lambda$6();
                return viewManagersMap$lambda$6;
            }
        })), v.a(FrescoBasedReactTextInlineImageViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.f
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$7;
                viewManagersMap$lambda$7 = MainReactPackage.viewManagersMap$lambda$7();
                return viewManagersMap$lambda$7;
            }
        })), v.a(ReactImageManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.g
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$8;
                viewManagersMap$lambda$8 = MainReactPackage.viewManagersMap$lambda$8();
                return viewManagersMap$lambda$8;
            }
        })), v.a(ReactModalHostManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.h
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$9;
                viewManagersMap$lambda$9 = MainReactPackage.viewManagersMap$lambda$9();
                return viewManagersMap$lambda$9;
            }
        })), v.a(ReactRawTextManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.j
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$10;
                viewManagersMap$lambda$10 = MainReactPackage.viewManagersMap$lambda$10();
                return viewManagersMap$lambda$10;
            }
        })), v.a(ReactTextInputManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.k
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$11;
                viewManagersMap$lambda$11 = MainReactPackage.viewManagersMap$lambda$11();
                return viewManagersMap$lambda$11;
            }
        })), v.a("RCTText", companion.viewManagerSpec(new Provider() { // from class: mb.l
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$12;
                viewManagersMap$lambda$12 = MainReactPackage.viewManagersMap$lambda$12();
                return viewManagersMap$lambda$12;
            }
        })), v.a("RCTView", companion.viewManagerSpec(new Provider() { // from class: mb.m
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$13;
                viewManagersMap$lambda$13 = MainReactPackage.viewManagersMap$lambda$13();
                return viewManagersMap$lambda$13;
            }
        })), v.a(ReactVirtualTextViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.n
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$14;
                viewManagersMap$lambda$14 = MainReactPackage.viewManagersMap$lambda$14();
                return viewManagersMap$lambda$14;
            }
        })), v.a(ReactUnimplementedViewManager.REACT_CLASS, companion.viewManagerSpec(new Provider() { // from class: mb.o
            @Override // javax.inject.Provider
            public final Object get() {
                NativeModule viewManagersMap$lambda$15;
                viewManagersMap$lambda$15 = MainReactPackage.viewManagersMap$lambda$15();
                return viewManagersMap$lambda$15;
            }
        })));
    }
}
