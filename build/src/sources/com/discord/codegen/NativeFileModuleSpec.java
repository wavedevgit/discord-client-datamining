package com.discord.codegen;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeFileModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeFileModule";

    public NativeFileModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @a
    public abstract void clearFolder(String str, String str2, Promise promise);

    @ReactMethod
    @a
    public abstract void fileExists(String str, Promise promise);

    @Override // com.facebook.react.bridge.BaseJavaModule
    @a
    public final Map<String, Object> getConstants() {
        Map<String, Object> typedExportedConstants = getTypedExportedConstants();
        if (ReactBuildConfig.DEBUG || ReactBuildConfig.IS_INTERNAL_BUILD) {
            HashSet hashSet = new HashSet(Arrays.asList("CacheDirPath", "DocumentsDirPath"));
            HashSet hashSet2 = new HashSet();
            HashSet hashSet3 = new HashSet(typedExportedConstants.keySet());
            hashSet3.removeAll(hashSet);
            hashSet3.removeAll(hashSet2);
            if (hashSet3.isEmpty()) {
                hashSet.removeAll(typedExportedConstants.keySet());
                if (!hashSet.isEmpty()) {
                    throw new IllegalStateException(String.format("Native Module doesn't fill in constants: %s", hashSet));
                }
            } else {
                throw new IllegalStateException(String.format("Native Module Flow doesn't declare constants: %s", hashSet3));
            }
        }
        return typedExportedConstants;
    }

    @ReactMethod
    @a
    public abstract void getFileHash(String str, String str2, double d10, Promise promise);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @a
    public abstract void getSize(String str, Promise promise);

    protected abstract Map<String, Object> getTypedExportedConstants();

    @ReactMethod
    @a
    public abstract void moveFile(String str, String str2, String str3, Promise promise);

    @ReactMethod
    @a
    public abstract void readAsset(String str, String str2, Promise promise);

    @ReactMethod
    @a
    public abstract void readFile(String str, String str2, Promise promise);

    @ReactMethod
    @a
    public abstract void removeFile(String str, String str2, Promise promise);

    @ReactMethod
    @a
    public abstract void saveFileToGallery(String str, String str2, String str3, Promise promise);

    @ReactMethod
    @a
    public abstract void writeFile(String str, String str2, String str3, String str4, Promise promise);
}
