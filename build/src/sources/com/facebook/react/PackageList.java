package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;
import com.discord.codegen.RTNCodegenPackage;
import com.discord.kvstorage.KvStoragePackage;
import com.discord.libdiscore.LibDiscorePackage;
import com.dooboolab.rniap.a0;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import com.horcrux.svg.SvgPackage;
import com.reactnativecommunity.webview.d1;
import com.swmansion.reanimated.ReanimatedPackage;
import io.sentry.react.r;
import java.util.ArrayList;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PackageList {
    private Application application;
    private MainPackageConfig mConfig;
    private ReactNativeHost reactNativeHost;

    public PackageList(ReactNativeHost reactNativeHost) {
        this(reactNativeHost, (MainPackageConfig) null);
    }

    private Application getApplication() {
        ReactNativeHost reactNativeHost = this.reactNativeHost;
        if (reactNativeHost == null) {
            return this.application;
        }
        return reactNativeHost.getApplication();
    }

    private Context getApplicationContext() {
        return getApplication().getApplicationContext();
    }

    private ReactNativeHost getReactNativeHost() {
        return this.reactNativeHost;
    }

    private Resources getResources() {
        return getApplication().getResources();
    }

    public ArrayList<ReactPackage> getPackages() {
        return new ArrayList<>(Arrays.asList(new MainReactPackage(this.mConfig), new d6.c(), new KvStoragePackage(), new LibDiscorePackage(), new RTNCodegenPackage(), new em.b(), new dm.b(), new fm.c(), new com.reactnativecommunity.slider.d(), new im.j(), new org.reactnative.maskedview.b(), new r(), new com.shopify.reactnative.flash_list.f(), new com.airbnb.android.react.lottie.i(), new com.henninghall.date_picker.c(), new com.rnfs.f(), new jn.d(), new uv.a(), new com.mkuczera.a(), new a0(), new cm.d(), new com.imagepicker.e(), new com.reactnativekeyboardcontroller.b(), new com.rnlineargradient.a(), new xl.c(), new com.github.yamill.orientation.d(), new uq.a(), new com.margelo.nitro.playagerangedeclaration.b(), new ReanimatedPackage(), new ym.b(), new com.th3rdwave.safeareacontext.e(), new com.swmansion.rnscreens.s(), new SvgPackage(), new fr.b(), new d1(), new com.rivereactnative.s()));
    }

    public PackageList(Application application) {
        this(application, (MainPackageConfig) null);
    }

    public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig mainPackageConfig) {
        this.reactNativeHost = reactNativeHost;
        this.mConfig = mainPackageConfig;
    }

    public PackageList(Application application, MainPackageConfig mainPackageConfig) {
        this.reactNativeHost = null;
        this.application = application;
        this.mConfig = mainPackageConfig;
    }
}
