package fr.greweb.reactnativeviewshot;

import android.content.Context;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.GuardedAsyncTask;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.UIManagerModule;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNViewShotModule extends ReactContextBaseJavaModule {
    public static final String RNVIEW_SHOT = "RNViewShot";
    private static final String TEMP_FILE_PREFIX = "ReactNative-snapshot-image";
    private final Executor executor;
    private final ReactApplicationContext reactContext;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a extends GuardedAsyncTask implements FilenameFilter {

        /* renamed from: a  reason: collision with root package name */
        private final File f23425a;

        /* renamed from: b  reason: collision with root package name */
        private final File f23426b;

        private void a(File file) {
            File[] listFiles = file.listFiles(this);
            if (listFiles != null) {
                for (File file2 : listFiles) {
                    if (file2.delete()) {
                        Log.d(RNViewShotModule.RNVIEW_SHOT, "deleted file: " + file2.getAbsolutePath());
                    }
                }
            }
        }

        @Override // java.io.FilenameFilter
        public final boolean accept(File file, String str) {
            return str.startsWith(RNViewShotModule.TEMP_FILE_PREFIX);
        }

        private a(ReactContext reactContext) {
            super(reactContext);
            this.f23425a = reactContext.getCacheDir();
            this.f23426b = reactContext.getExternalCacheDir();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.bridge.GuardedAsyncTask
        public void doInBackgroundGuarded(Void... voidArr) {
            File file = this.f23425a;
            if (file != null) {
                a(file);
            }
            File file2 = this.f23426b;
            if (file2 != null) {
                a(file2);
            }
        }
    }

    public RNViewShotModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.executor = Executors.newCachedThreadPool();
        this.reactContext = reactApplicationContext;
    }

    @NonNull
    private File createTempFile(@NonNull Context context, @NonNull String str, String str2) {
        File externalCacheDir = context.getExternalCacheDir();
        File cacheDir = context.getCacheDir();
        if (externalCacheDir == null && cacheDir == null) {
            throw new IOException("No cache directory available");
        }
        if (externalCacheDir == null || (cacheDir != null && externalCacheDir.getFreeSpace() <= cacheDir.getFreeSpace())) {
            externalCacheDir = cacheDir;
        }
        String str3 = "." + str;
        if (str2 != null) {
            return File.createTempFile(str2, str3, externalCacheDir);
        }
        return File.createTempFile(TEMP_FILE_PREFIX, str3, externalCacheDir);
    }

    @ReactMethod
    public void captureRef(int i10, ReadableMap readableMap, Promise promise) {
        int i11;
        Integer num;
        Integer num2;
        String str;
        boolean z10;
        int i12;
        getReactApplicationContext().getResources().getDisplayMetrics();
        String string = readableMap.getString("format");
        if ("jpg".equals(string)) {
            i11 = 0;
        } else if ("webm".equals(string)) {
            i11 = 2;
        } else if ("raw".equals(string)) {
            i11 = -1;
        } else {
            i11 = 1;
        }
        double d10 = readableMap.getDouble("quality");
        File file = null;
        if (readableMap.hasKey("width")) {
            num = Integer.valueOf(readableMap.getInt("width"));
        } else {
            num = null;
        }
        if (readableMap.hasKey("height")) {
            num2 = Integer.valueOf(readableMap.getInt("height"));
        } else {
            num2 = null;
        }
        String string2 = readableMap.getString("result");
        if (readableMap.hasKey("fileName")) {
            str = readableMap.getString("fileName");
        } else {
            str = null;
        }
        Boolean valueOf = Boolean.valueOf(readableMap.getBoolean("snapshotContentContainer"));
        if (readableMap.hasKey("handleGLSurfaceViewOnAndroid") && readableMap.getBoolean("handleGLSurfaceViewOnAndroid")) {
            z10 = true;
        } else {
            z10 = false;
        }
        try {
            if ("tmpfile".equals(string2)) {
                file = createTempFile(getReactApplicationContext(), string, str);
            }
            i12 = i10;
        } catch (Throwable th2) {
            th = th2;
            i12 = i10;
        }
        try {
            ((UIManagerModule) this.reactContext.getNativeModule(UIManagerModule.class)).addUIBlock(new fr.greweb.reactnativeviewshot.a(i12, string, i11, d10, num, num2, file, string2, valueOf, this.reactContext, getCurrentActivity(), z10, promise, this.executor));
        } catch (Throwable th3) {
            th = th3;
            Log.e(RNVIEW_SHOT, "Failed to snapshot view tag " + i12, th);
            promise.reject("E_UNABLE_TO_SNAPSHOT", "Failed to snapshot view tag " + i12);
        }
    }

    @ReactMethod
    public void captureScreen(ReadableMap readableMap, Promise promise) {
        captureRef(-1, readableMap, promise);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    public Map<String, Object> getConstants() {
        return Collections.EMPTY_MAP;
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return RNVIEW_SHOT;
    }

    @Override // com.facebook.react.bridge.NativeModule
    public void onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy();
        new a(getReactApplicationContext()).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
    }

    @ReactMethod
    public void releaseCapture(String str) {
        String path = Uri.parse(str).getPath();
        if (path != null) {
            File file = new File(path);
            if (file.exists()) {
                File parentFile = file.getParentFile();
                if (!parentFile.equals(this.reactContext.getExternalCacheDir()) && !parentFile.equals(this.reactContext.getCacheDir())) {
                    return;
                }
                file.delete();
            }
        }
    }
}
