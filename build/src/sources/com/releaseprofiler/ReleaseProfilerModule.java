package com.releaseprofiler;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.widget.Toast;
import bs.b;
import bs.c;
import com.facebook.hermes.instrumentation.HermesSamplingProfiler;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\b\u0018\u0000 \u00152\u00020\u0001:\u0001\u0016B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u000f\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\n\u0010\u000bJ\u001f\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\rH\u0007¢\u0006\u0004\b\u0010\u0010\u0011R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010\u0012\u001a\u0004\b\u0013\u0010\u0014¨\u0006\u0017"}, d2 = {"Lcom/releaseprofiler/ReleaseProfilerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "getName", "()Ljava/lang/String;", "", "startProfiling", "()Z", "saveToDownloads", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "", "stopProfiling", "(ZLcom/facebook/react/bridge/Promise;)V", "Lcom/facebook/react/bridge/ReactApplicationContext;", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "Companion", "a", "react-native-release-profiler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ReleaseProfilerModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String NAME = "ReleaseProfiler";
    @NotNull
    private final ReactApplicationContext reactContext;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReleaseProfilerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public final boolean startProfiling() {
        HermesSamplingProfiler.enable();
        return true;
    }

    @ReactMethod
    public final void stopProfiling(boolean z10, @NotNull Promise promise) {
        InputStream openStream;
        Uri uri;
        Intrinsics.checkNotNullParameter(promise, "promise");
        File createTempFile = File.createTempFile("sampling-profiler-trace", ".cpuprofile", this.reactContext.getCacheDir());
        String path = createTempFile.getPath();
        Intrinsics.checkNotNull(path);
        HermesSamplingProfiler.dumpSampledTraceToFile(path);
        HermesSamplingProfiler.disable();
        ReactApplicationContext reactApplicationContext = this.reactContext;
        Toast.makeText(reactApplicationContext, "Saved results from Profiler to " + path, 1).show();
        if (z10) {
            String name = createTempFile.getName();
            if (Build.VERSION.SDK_INT >= 29) {
                ContentValues contentValues = new ContentValues();
                contentValues.put("_display_name", name);
                contentValues.put("mime_type", "text/plain");
                contentValues.put("relative_path", Environment.DIRECTORY_DOWNLOADS);
                ContentResolver contentResolver = this.reactContext.getContentResolver();
                uri = MediaStore.Downloads.EXTERNAL_CONTENT_URI;
                Uri insert = contentResolver.insert(uri, contentValues);
                if (insert != null) {
                    openStream = new URL("file://" + path).openStream();
                    try {
                        OutputStream openOutputStream = contentResolver.openOutputStream(insert);
                        Intrinsics.checkNotNull(openStream);
                        Intrinsics.checkNotNull(openOutputStream);
                        b.a(openStream, openOutputStream, 8192);
                        c.a(openOutputStream, null);
                        c.a(openStream, null);
                    } finally {
                    }
                }
            } else {
                File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), name);
                openStream = new URL("file://" + path).openStream();
                try {
                    FileOutputStream fileOutputStream = new FileOutputStream(file);
                    Intrinsics.checkNotNull(openStream);
                    b.b(openStream, fileOutputStream, 0, 2, null);
                    c.a(fileOutputStream, null);
                    c.a(openStream, null);
                } catch (Throwable th2) {
                    try {
                        throw th2;
                    } finally {
                    }
                }
            }
        }
        promise.resolve(path);
    }
}
