package com.discord.bridge;

import com.discord.animatable_underlay.AnimatableUnderlayViewManager;
import com.discord.animated_png.react.APNGPackage;
import com.discord.audio.AudioManagerModule;
import com.discord.avatar.react.AvatarPackage;
import com.discord.blur.BlurViewPackage;
import com.discord.channel_spine.ChannelSpineViewManager;
import com.discord.chat.ChatPackage;
import com.discord.chat.input.ChatInputViewManager;
import com.discord.clip.ClipViewManager;
import com.discord.codegen.NativeAdsModuleSpec;
import com.discord.codegen.NativeAppDatabaseModuleSpec;
import com.discord.codegen.NativeAppIconModuleSpec;
import com.discord.codegen.NativeAppLifecycleModuleSpec;
import com.discord.codegen.NativeAppRatingRequestModuleSpec;
import com.discord.codegen.NativeArchitectureProviderSpec;
import com.discord.codegen.NativeAudioManagerModuleSpec;
import com.discord.codegen.NativeAudioPlayerModuleSpec;
import com.discord.codegen.NativeAudioRouteEmitterModuleSpec;
import com.discord.codegen.NativeBrowserManagerModuleSpec;
import com.discord.codegen.NativeCacheModuleSpec;
import com.discord.codegen.NativeClientInfoModuleSpec;
import com.discord.codegen.NativeCommandClipboardModuleSpec;
import com.discord.codegen.NativeCompressionModuleSpec;
import com.discord.codegen.NativeDateFormatUtilsModuleSpec;
import com.discord.codegen.NativeFileModuleSpec;
import com.discord.codegen.NativeI18nModuleSpec;
import com.discord.codegen.NativeJSWatchdogModuleSpec;
import com.discord.codegen.NativeJankStatsModuleSpec;
import com.discord.codegen.NativeKeyCommandsModuleSpec;
import com.discord.codegen.NativeKeyboardModuleSpec;
import com.discord.codegen.NativeMediaEngineModuleSpec;
import com.discord.codegen.NativeMetricMonitorModuleSpec;
import com.discord.codegen.NativeMobileVoiceOverlayModuleSpec;
import com.discord.codegen.NativeOnDemandResourceModuleSpec;
import com.discord.codegen.NativePushNotificationMonitorModuleSpec;
import com.discord.codegen.NativeReactAssetModuleSpec;
import com.discord.codegen.NativeStartupFlagsModuleSpec;
import com.discord.codegen.NativeSystraceModuleSpec;
import com.discord.codegen.NativeTTIModuleSpec;
import com.discord.codegen.NativeTelecomModuleSpec;
import com.discord.codegen.NativeTelemetryRingModuleSpec;
import com.discord.codegen.NativeThemeModuleSpec;
import com.discord.codegen.NativeTimersModuleSpec;
import com.discord.codegen.NativeTouchEventAnalyticsModuleSpec;
import com.discord.core.LocalImageThumbnailViewManager;
import com.discord.device.DevicePackage;
import com.discord.emoji_picker.react.EmojiPickerPackage;
import com.discord.fast_connect.FastConnectPackage;
import com.discord.fastest_list.react.FastestListPackage;
import com.discord.intents.IntentsPackage;
import com.discord.key_commands.KeyCommandsViewManager;
import com.discord.media.engine.video.VideoStreamViewManager;
import com.discord.portals.PortalsPackage;
import com.discord.qr.scanner.QRScannerViewManager;
import com.discord.react.FontPackage;
import com.discord.react_gesture_handler.DiscordGestureHandlerPackage;
import com.discord.reanimatedview.ReanimatedViewManager;
import com.discord.safearea.SafeAreaPackage;
import com.discord.segmented.control.SegmentedControlViewManager;
import com.discord.self_measured_view.SelfMeasuredViewManager;
import com.discord.sticker.react.StickerPackage;
import com.discord.sticker_picker.react.StickerPickerPackage;
import com.discord.suspense_visible_view.SuspenseVisibleViewPackage;
import com.discord.thumbhash.ThumbhashPackage;
import com.discord.tti_measurement_view.TTIMeasurementViewPackage;
import com.discord.view.ReactScrollViewManagerOverride;
import com.discord.view.ReactViewManagerOverride;
import com.discord.view.ScreenStackViewManagerOverride;
import com.discord.view.ScreenViewManagerOverride;
import com.discord.wakelock.WakelockPackage;
import com.discord.zoom_layout.ZoomLayoutPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\u0006\u001a\u0012\u0012\u0004\u0012\u00020\b0\u0007j\b\u0012\u0004\u0012\u00020\b`\tH\u0016¨\u0006\n"}, d2 = {"Lcom/discord/bridge/DCDPackageList;", "Lcom/facebook/react/PackageList;", "host", "Lcom/facebook/react/ReactNativeHost;", "<init>", "(Lcom/facebook/react/ReactNativeHost;)V", "getPackages", "Ljava/util/ArrayList;", "Lcom/facebook/react/ReactPackage;", "Lkotlin/collections/ArrayList;", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DCDPackageList extends PackageList {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DCDPackageList(@NotNull ReactNativeHost host) {
        super(host);
        Intrinsics.checkNotNullParameter(host, "host");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$0(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new VideoStreamViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$1(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new AnimatableUnderlayViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$10(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ReanimatedViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$11(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ScreenStackViewManagerOverride();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$12(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ScreenViewManagerOverride();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$13(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ReactViewManagerOverride();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$14(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ReactScrollViewManagerOverride(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NativeModule getPackages$lambda$15(final ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new NativeArchitectureProviderSpec(it) { // from class: com.discord.bridge.DCDPackageList$getPackages$80$1
            @Override // com.discord.codegen.NativeArchitectureProviderSpec
            public boolean isFabric() {
                return true;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$2(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ChannelSpineViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$3(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ChatInputViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$4(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ClipViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$5(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new KeyCommandsViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$6(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new LocalImageThumbnailViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$7(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new QRScannerViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$8(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new SegmentedControlViewManager();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ViewManager getPackages$lambda$9(ReactApplicationContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new SelfMeasuredViewManager();
    }

    @Override // com.facebook.react.PackageList
    @NotNull
    public ArrayList<ReactPackage> getPackages() {
        ArrayList<ReactPackage> packages = super.getPackages();
        DCDModuleProvider dCDModuleProvider = DCDModuleProvider.INSTANCE;
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$1.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$2.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$3.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$4.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$5.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$6.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$7.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$8.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$9.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$10.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$11.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$12.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$13.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$14.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$15.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$16.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$17.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$18.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$19.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$20.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$21.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$22.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$23.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$24.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$25.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$26.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$27.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$28.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$29.INSTANCE));
        packages.add(dCDModuleProvider.getLegacyPackageForModule(DCDPackageList$getPackages$30.INSTANCE));
        packages.add(DCDModuleProvider.getLegacyPackageForModuleWithViewManager$default(dCDModuleProvider, null, new Function1() { // from class: com.discord.bridge.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$0;
                packages$lambda$0 = DCDPackageList.getPackages$lambda$0((ReactApplicationContext) obj);
                return packages$lambda$0;
            }
        }, 1, null));
        packages.add(dCDModuleProvider.getViewManagers(new Function1() { // from class: com.discord.bridge.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$1;
                packages$lambda$1 = DCDPackageList.getPackages$lambda$1((ReactApplicationContext) obj);
                return packages$lambda$1;
            }
        }, new Function1() { // from class: com.discord.bridge.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$2;
                packages$lambda$2 = DCDPackageList.getPackages$lambda$2((ReactApplicationContext) obj);
                return packages$lambda$2;
            }
        }, new Function1() { // from class: com.discord.bridge.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$3;
                packages$lambda$3 = DCDPackageList.getPackages$lambda$3((ReactApplicationContext) obj);
                return packages$lambda$3;
            }
        }, new Function1() { // from class: com.discord.bridge.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$4;
                packages$lambda$4 = DCDPackageList.getPackages$lambda$4((ReactApplicationContext) obj);
                return packages$lambda$4;
            }
        }, new Function1() { // from class: com.discord.bridge.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$5;
                packages$lambda$5 = DCDPackageList.getPackages$lambda$5((ReactApplicationContext) obj);
                return packages$lambda$5;
            }
        }, new Function1() { // from class: com.discord.bridge.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$6;
                packages$lambda$6 = DCDPackageList.getPackages$lambda$6((ReactApplicationContext) obj);
                return packages$lambda$6;
            }
        }, new Function1() { // from class: com.discord.bridge.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$7;
                packages$lambda$7 = DCDPackageList.getPackages$lambda$7((ReactApplicationContext) obj);
                return packages$lambda$7;
            }
        }, new Function1() { // from class: com.discord.bridge.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$8;
                packages$lambda$8 = DCDPackageList.getPackages$lambda$8((ReactApplicationContext) obj);
                return packages$lambda$8;
            }
        }, new Function1() { // from class: com.discord.bridge.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$9;
                packages$lambda$9 = DCDPackageList.getPackages$lambda$9((ReactApplicationContext) obj);
                return packages$lambda$9;
            }
        }, new Function1() { // from class: com.discord.bridge.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$10;
                packages$lambda$10 = DCDPackageList.getPackages$lambda$10((ReactApplicationContext) obj);
                return packages$lambda$10;
            }
        }, new Function1() { // from class: com.discord.bridge.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$11;
                packages$lambda$11 = DCDPackageList.getPackages$lambda$11((ReactApplicationContext) obj);
                return packages$lambda$11;
            }
        }, new Function1() { // from class: com.discord.bridge.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$12;
                packages$lambda$12 = DCDPackageList.getPackages$lambda$12((ReactApplicationContext) obj);
                return packages$lambda$12;
            }
        }, new Function1() { // from class: com.discord.bridge.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$13;
                packages$lambda$13 = DCDPackageList.getPackages$lambda$13((ReactApplicationContext) obj);
                return packages$lambda$13;
            }
        }, new Function1() { // from class: com.discord.bridge.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ViewManager packages$lambda$14;
                packages$lambda$14 = DCDPackageList.getPackages$lambda$14((ReactApplicationContext) obj);
                return packages$lambda$14;
            }
        }));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAdsModuleSpec.NAME, DCDPackageList$getPackages$46.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAppDatabaseModuleSpec.NAME, DCDPackageList$getPackages$47.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAppIconModuleSpec.NAME, DCDPackageList$getPackages$48.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAppLifecycleModuleSpec.NAME, DCDPackageList$getPackages$49.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAppRatingRequestModuleSpec.NAME, DCDPackageList$getPackages$50.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAudioManagerModuleSpec.NAME, new DCDPackageList$getPackages$51(AudioManagerModule.Companion)));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAudioPlayerModuleSpec.NAME, DCDPackageList$getPackages$52.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeAudioRouteEmitterModuleSpec.NAME, DCDPackageList$getPackages$53.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeBrowserManagerModuleSpec.NAME, DCDPackageList$getPackages$54.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeCacheModuleSpec.NAME, DCDPackageList$getPackages$55.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeClientInfoModuleSpec.NAME, DCDPackageList$getPackages$56.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeCommandClipboardModuleSpec.NAME, DCDPackageList$getPackages$57.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeCompressionModuleSpec.NAME, DCDPackageList$getPackages$58.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeDateFormatUtilsModuleSpec.NAME, DCDPackageList$getPackages$59.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeFileModuleSpec.NAME, DCDPackageList$getPackages$60.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeI18nModuleSpec.NAME, DCDPackageList$getPackages$61.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeJankStatsModuleSpec.NAME, DCDPackageList$getPackages$62.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeJSWatchdogModuleSpec.NAME, DCDPackageList$getPackages$63.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeKeyCommandsModuleSpec.NAME, DCDPackageList$getPackages$64.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeKeyboardModuleSpec.NAME, DCDPackageList$getPackages$65.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeMetricMonitorModuleSpec.NAME, DCDPackageList$getPackages$66.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeMobileVoiceOverlayModuleSpec.NAME, DCDPackageList$getPackages$67.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeOnDemandResourceModuleSpec.NAME, DCDPackageList$getPackages$68.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativePushNotificationMonitorModuleSpec.NAME, DCDPackageList$getPackages$69.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeReactAssetModuleSpec.NAME, DCDPackageList$getPackages$70.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeStartupFlagsModuleSpec.NAME, DCDPackageList$getPackages$71.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeSystraceModuleSpec.NAME, DCDPackageList$getPackages$72.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeThemeModuleSpec.NAME, DCDPackageList$getPackages$73.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeTimersModuleSpec.NAME, DCDPackageList$getPackages$74.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeTTIModuleSpec.NAME, DCDPackageList$getPackages$75.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeTelemetryRingModuleSpec.NAME, DCDPackageList$getPackages$76.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeMediaEngineModuleSpec.NAME, DCDPackageList$getPackages$77.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeTelecomModuleSpec.NAME, DCDPackageList$getPackages$78.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeTouchEventAnalyticsModuleSpec.NAME, DCDPackageList$getPackages$79.INSTANCE));
        packages.add(dCDModuleProvider.getTurboPackageForModule(NativeArchitectureProviderSpec.NAME, new Function1() { // from class: com.discord.bridge.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                NativeModule packages$lambda$15;
                packages$lambda$15 = DCDPackageList.getPackages$lambda$15((ReactApplicationContext) obj);
                return packages$lambda$15;
            }
        }));
        Intrinsics.checkNotNull(packages);
        dCDModuleProvider.addTurboPackages(packages, new APNGPackage(), new AvatarPackage(), new BlurViewPackage(), new ChatPackage(), new DevicePackage(), new DiscordGestureHandlerPackage(), new EmojiPickerPackage(), new FastConnectPackage(), new FastestListPackage(), new FontPackage(), new IntentsPackage(), new PortalsPackage(), new SafeAreaPackage(), new SuspenseVisibleViewPackage(), new StickerPackage(), new StickerPickerPackage(), new ThumbhashPackage(), new TTIMeasurementViewPackage(), new WakelockPackage(), new ZoomLayoutPackage());
        return packages;
    }
}
