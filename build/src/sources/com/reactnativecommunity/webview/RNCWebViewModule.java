package com.reactnativecommunity.webview;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.os.Parcelable;
import android.util.Log;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.webkit.MimeTypeMap;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.widget.Toast;
import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.facebook.react.uimanager.ThemedReactContext;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicReference;
import org.webrtc.MediaStreamTrack;
@ReactModule(name = RNCWebViewModule.MODULE_NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNCWebViewModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final int FILE_DOWNLOAD_PERMISSION_REQUEST = 1;
    public static final String MODULE_NAME = "RNCWebView";
    private static final int PICKER = 1;
    private static final int PICKER_LEGACY = 3;
    private static final String TAG = "RNCWebViewModule";
    protected static final d shouldOverrideUrlLoadingLock = new d();
    private DownloadManager.Request downloadRequest;
    private ValueCallback<Uri[]> filePathCallback;
    private ValueCallback<Uri> filePathCallbackLegacy;
    private File outputImage;
    private File outputVideo;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements PermissionListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f18483d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f18484e;

        a(String str, String str2) {
            this.f18483d = str;
            this.f18484e = str2;
        }

        @Override // com.facebook.react.modules.core.PermissionListener
        public boolean onRequestPermissionsResult(int i10, String[] strArr, int[] iArr) {
            if (i10 != 1) {
                return false;
            }
            if (iArr.length > 0 && iArr[0] == 0) {
                if (RNCWebViewModule.this.downloadRequest != null) {
                    RNCWebViewModule.this.downloadFile(this.f18483d);
                }
            } else {
                Toast.makeText(RNCWebViewModule.this.getCurrentActivity().getApplicationContext(), this.f18484e, 1).show();
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18486a;

        static {
            int[] iArr = new int[c.values().length];
            f18486a = iArr;
            try {
                iArr[c.IMAGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18486a[c.VIDEO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c {
        DEFAULT("*/*"),
        IMAGE("image"),
        VIDEO(MediaStreamTrack.VIDEO_TRACK_KIND);
        

        /* renamed from: d  reason: collision with root package name */
        private final String f18491d;

        c(String str) {
            this.f18491d = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class d {

        /* renamed from: a  reason: collision with root package name */
        private int f18492a = 1;

        /* renamed from: b  reason: collision with root package name */
        private final HashMap f18493b = new HashMap();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        protected enum a {
            UNDECIDED,
            SHOULD_OVERRIDE,
            DO_NOT_OVERRIDE
        }

        protected d() {
        }

        public synchronized AtomicReference a(Integer num) {
            return (AtomicReference) this.f18493b.get(num);
        }
    }

    public RNCWebViewModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        reactApplicationContext.addActivityEventListener(this);
    }

    public static /* synthetic */ void a(String str, String str2, Promise promise) {
        RNCWebViewManager.g gVar = (RNCWebViewManager.g) a1.f18501a.a().get(str);
        if (gVar != null) {
            gVar.h(str2);
            promise.resolve(null);
            return;
        }
        promise.reject("err", "Failed to inject javascript with webViewKey: " + str + ". WebView is null.");
    }

    private Boolean acceptsImages(String str) {
        if (str.matches("\\.\\w+")) {
            str = getMimeTypeFromExtension(str.replace(".", ""));
        }
        return Boolean.valueOf(str.isEmpty() || str.toLowerCase().contains(c.IMAGE.f18491d));
    }

    private Boolean acceptsVideo(String str) {
        if (str.matches("\\.\\w+")) {
            str = getMimeTypeFromExtension(str.replace(".", ""));
        }
        return Boolean.valueOf(str.isEmpty() || str.toLowerCase().contains(c.VIDEO.f18491d));
    }

    private Boolean arrayContainsString(String[] strArr, String str) {
        for (String str2 : strArr) {
            if (str2.contains(str)) {
                return Boolean.TRUE;
            }
        }
        return Boolean.FALSE;
    }

    public static /* synthetic */ void b(String str) {
        a1 a1Var = a1.f18501a;
        RNCWebViewManager.g gVar = (RNCWebViewManager.g) a1Var.a().get(str);
        if (gVar == null) {
            p8.a.J(TAG, "Failed to release webview with webViewKey: " + str);
            return;
        }
        ViewParent parent = gVar.getParent();
        if (parent != null && (parent instanceof com.reactnativecommunity.webview.b)) {
            if (((com.reactnativecommunity.webview.b) parent).b() != gVar) {
                throw new IllegalStateException("mismatched webview with key: " + str);
            }
        } else {
            ViewGroup viewGroup = (ViewGroup) gVar.getParent();
            if (viewGroup != null) {
                viewGroup.removeView(gVar);
            }
        }
        if (gVar.f18461q != null) {
            ((ThemedReactContext) gVar.getContext()).removeLifecycleEventListener(gVar);
            gVar.d();
        }
        a1Var.a().remove(str);
    }

    private String[] getAcceptedMimeType(String[] strArr) {
        if (noAcceptTypesSet(strArr).booleanValue()) {
            return new String[]{c.DEFAULT.f18491d};
        }
        String[] strArr2 = new String[strArr.length];
        for (int i10 = 0; i10 < strArr.length; i10++) {
            String str = strArr[i10];
            if (str.matches("\\.\\w+")) {
                String mimeTypeFromExtension = getMimeTypeFromExtension(str.replace(".", ""));
                if (mimeTypeFromExtension != null) {
                    strArr2[i10] = mimeTypeFromExtension;
                } else {
                    strArr2[i10] = str;
                }
            } else {
                strArr2[i10] = str;
            }
        }
        return strArr2;
    }

    private File getCapturedFile(c cVar) {
        String str;
        String str2;
        int i10 = b.f18486a[cVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                str = "";
                str2 = "";
            } else {
                String str3 = Environment.DIRECTORY_MOVIES;
                str = "video-";
                str2 = ".mp4";
            }
        } else {
            String str4 = Environment.DIRECTORY_PICTURES;
            str = "image-";
            str2 = ".jpg";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(String.valueOf(System.currentTimeMillis()));
        sb2.append(str2);
        return File.createTempFile(str, str2, getReactApplicationContext().getExternalFilesDir(null));
    }

    private Intent getFileChooserIntent(String str) {
        String str2 = str.isEmpty() ? c.DEFAULT.f18491d : str;
        if (str.matches("\\.\\w+")) {
            str2 = getMimeTypeFromExtension(str.replace(".", ""));
        }
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.addCategory("android.intent.category.OPENABLE");
        intent.setType(str2);
        return intent;
    }

    private String getMimeTypeFromExtension(String str) {
        if (str != null) {
            return MimeTypeMap.getSingleton().getMimeTypeFromExtension(str);
        }
        return null;
    }

    private Uri getOutputUri(File file) {
        String packageName = getReactApplicationContext().getPackageName();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        return FileProvider.getUriForFile(reactApplicationContext, packageName + ".fileprovider", file);
    }

    private PermissionAwareActivity getPermissionAwareActivity() {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            if (currentActivity instanceof PermissionAwareActivity) {
                return (PermissionAwareActivity) currentActivity;
            }
            throw new IllegalStateException("Tried to use permissions API but the host Activity doesn't implement PermissionAwareActivity.");
        }
        throw new IllegalStateException("Tried to use permissions API while not attached to an Activity.");
    }

    private Intent getPhotoIntent() {
        Intent intent;
        Throwable e10;
        Uri outputUri;
        try {
            File capturedFile = getCapturedFile(c.IMAGE);
            this.outputImage = capturedFile;
            outputUri = getOutputUri(capturedFile);
            intent = new Intent("android.media.action.IMAGE_CAPTURE");
        } catch (IOException | IllegalArgumentException e11) {
            intent = null;
            e10 = e11;
        }
        try {
            intent.putExtra("output", outputUri);
            return intent;
        } catch (IOException e12) {
            e10 = e12;
            Log.e("CREATE FILE", "Error occurred while creating the File", e10);
            e10.printStackTrace();
            return intent;
        } catch (IllegalArgumentException e13) {
            e10 = e13;
            Log.e("CREATE FILE", "Error occurred while creating the File", e10);
            e10.printStackTrace();
            return intent;
        }
    }

    private Uri[] getSelectedFiles(Intent intent, int i10) {
        if (intent == null) {
            return null;
        }
        if (intent.getClipData() != null) {
            int itemCount = intent.getClipData().getItemCount();
            Uri[] uriArr = new Uri[itemCount];
            for (int i11 = 0; i11 < itemCount; i11++) {
                uriArr[i11] = intent.getClipData().getItemAt(i11).getUri();
            }
            return uriArr;
        } else if (intent.getData() == null || i10 != -1) {
            return null;
        } else {
            return WebChromeClient.FileChooserParams.parseResult(i10, intent);
        }
    }

    private Intent getVideoIntent() {
        Intent intent;
        Throwable e10;
        Uri outputUri;
        try {
            File capturedFile = getCapturedFile(c.VIDEO);
            this.outputVideo = capturedFile;
            outputUri = getOutputUri(capturedFile);
            intent = new Intent("android.media.action.VIDEO_CAPTURE");
        } catch (IOException | IllegalArgumentException e11) {
            intent = null;
            e10 = e11;
        }
        try {
            intent.putExtra("output", outputUri);
            return intent;
        } catch (IOException e12) {
            e10 = e12;
            Log.e("CREATE FILE", "Error occurred while creating the File", e10);
            e10.printStackTrace();
            return intent;
        } catch (IllegalArgumentException e13) {
            e10 = e13;
            Log.e("CREATE FILE", "Error occurred while creating the File", e10);
            e10.printStackTrace();
            return intent;
        }
    }

    private PermissionListener getWebviewFileDownloaderPermissionListener(String str, String str2) {
        return new a(str, str2);
    }

    private Boolean noAcceptTypesSet(String[] strArr) {
        String str;
        boolean z10 = true;
        if (strArr.length != 0 && (strArr.length != 1 || (str = strArr[0]) == null || str.length() != 0)) {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    public void downloadFile(String str) {
        try {
            ((DownloadManager) getCurrentActivity().getBaseContext().getSystemService("download")).enqueue(this.downloadRequest);
            Toast.makeText(getCurrentActivity().getApplicationContext(), str, 1).show();
        } catch (IllegalArgumentException e10) {
            Log.w(TAG, "Unsupported URI, aborting download", e10);
        }
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return MODULE_NAME;
    }

    public boolean grantFileDownloaderPermissions(String str, String str2) {
        boolean z10;
        if (Build.VERSION.SDK_INT > 28) {
            return true;
        }
        if (androidx.core.content.a.a(getCurrentActivity(), "android.permission.WRITE_EXTERNAL_STORAGE") == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            getPermissionAwareActivity().requestPermissions(new String[]{"android.permission.WRITE_EXTERNAL_STORAGE"}, 1, getWebviewFileDownloaderPermissionListener(str, str2));
        }
        return z10;
    }

    @ReactMethod
    public void injectJavaScriptWithWebViewKey(final String str, final String str2, final Promise promise) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.reactnativecommunity.webview.c1
            @Override // java.lang.Runnable
            public final void run() {
                RNCWebViewModule.a(str, str2, promise);
            }
        });
    }

    @ReactMethod
    public void isFileUploadSupported(Promise promise) {
        promise.resolve(Boolean.TRUE);
    }

    protected boolean needsCameraPermission() {
        try {
            if (Arrays.asList(getCurrentActivity().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).requestedPermissions).contains("android.permission.CAMERA")) {
                if (androidx.core.content.a.a(getCurrentActivity(), "android.permission.CAMERA") != 0) {
                    return true;
                }
                return false;
            }
            return false;
        } catch (PackageManager.NameNotFoundException unused) {
            return true;
        }
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
        boolean z10;
        if (this.filePathCallback == null && this.filePathCallbackLegacy == null) {
            return;
        }
        File file = this.outputImage;
        boolean z11 = false;
        if (file != null && file.length() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        File file2 = this.outputVideo;
        if (file2 != null && file2.length() > 0) {
            z11 = true;
        }
        if (i10 != 1) {
            if (i10 == 3) {
                if (i11 != -1) {
                    this.filePathCallbackLegacy.onReceiveValue(null);
                } else if (z10) {
                    this.filePathCallbackLegacy.onReceiveValue(getOutputUri(this.outputImage));
                } else if (z11) {
                    this.filePathCallbackLegacy.onReceiveValue(getOutputUri(this.outputVideo));
                } else {
                    this.filePathCallbackLegacy.onReceiveValue(intent.getData());
                }
            }
        } else if (i11 != -1) {
            ValueCallback<Uri[]> valueCallback = this.filePathCallback;
            if (valueCallback != null) {
                valueCallback.onReceiveValue(null);
            }
        } else if (z10) {
            this.filePathCallback.onReceiveValue(new Uri[]{getOutputUri(this.outputImage)});
        } else if (z11) {
            this.filePathCallback.onReceiveValue(new Uri[]{getOutputUri(this.outputVideo)});
        } else {
            this.filePathCallback.onReceiveValue(getSelectedFiles(intent, i11));
        }
        File file3 = this.outputImage;
        if (file3 != null && !z10) {
            file3.delete();
        }
        File file4 = this.outputVideo;
        if (file4 != null && !z11) {
            file4.delete();
        }
        this.filePathCallback = null;
        this.filePathCallbackLegacy = null;
        this.outputImage = null;
        this.outputVideo = null;
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onNewIntent(Intent intent) {
    }

    @ReactMethod
    public void onShouldStartLoadWithRequestCallback(boolean z10, int i10) {
        d.a aVar;
        AtomicReference a10 = shouldOverrideUrlLoadingLock.a(Integer.valueOf(i10));
        if (a10 != null) {
            synchronized (a10) {
                try {
                    if (z10) {
                        aVar = d.a.DO_NOT_OVERRIDE;
                    } else {
                        aVar = d.a.SHOULD_OVERRIDE;
                    }
                    a10.set(aVar);
                    a10.notify();
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    @ReactMethod
    public void releaseWebView(final String str) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.reactnativecommunity.webview.b1
            @Override // java.lang.Runnable
            public final void run() {
                RNCWebViewModule.b(str);
            }
        });
    }

    public void setDownloadRequest(DownloadManager.Request request) {
        this.downloadRequest = request;
    }

    public void startPhotoPickerIntent(ValueCallback<Uri> valueCallback, String str) {
        Intent videoIntent;
        Intent photoIntent;
        this.filePathCallbackLegacy = valueCallback;
        Intent createChooser = Intent.createChooser(getFileChooserIntent(str), "");
        ArrayList arrayList = new ArrayList();
        if (acceptsImages(str).booleanValue() && (photoIntent = getPhotoIntent()) != null) {
            arrayList.add(photoIntent);
        }
        if (acceptsVideo(str).booleanValue() && (videoIntent = getVideoIntent()) != null) {
            arrayList.add(videoIntent);
        }
        createChooser.putExtra("android.intent.extra.INITIAL_INTENTS", (Parcelable[]) arrayList.toArray(new Parcelable[0]));
        if (createChooser.resolveActivity(getCurrentActivity().getPackageManager()) != null) {
            getCurrentActivity().startActivityForResult(createChooser, 3);
        } else {
            Log.w(TAG, "there is no Activity to handle this Intent");
        }
    }

    private Boolean acceptsImages(String[] strArr) {
        String[] acceptedMimeType = getAcceptedMimeType(strArr);
        return Boolean.valueOf(arrayContainsString(acceptedMimeType, c.DEFAULT.f18491d).booleanValue() || arrayContainsString(acceptedMimeType, c.IMAGE.f18491d).booleanValue());
    }

    private Boolean acceptsVideo(String[] strArr) {
        String[] acceptedMimeType = getAcceptedMimeType(strArr);
        return Boolean.valueOf(arrayContainsString(acceptedMimeType, c.DEFAULT.f18491d).booleanValue() || arrayContainsString(acceptedMimeType, c.VIDEO.f18491d).booleanValue());
    }

    private Intent getFileChooserIntent(String[] strArr, boolean z10) {
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.addCategory("android.intent.category.OPENABLE");
        intent.setType(c.DEFAULT.f18491d);
        intent.putExtra("android.intent.extra.MIME_TYPES", getAcceptedMimeType(strArr));
        intent.putExtra("android.intent.extra.ALLOW_MULTIPLE", z10);
        return intent;
    }

    public boolean startPhotoPickerIntent(ValueCallback<Uri[]> valueCallback, String[] strArr, boolean z10) {
        Intent videoIntent;
        Intent photoIntent;
        this.filePathCallback = valueCallback;
        ArrayList arrayList = new ArrayList();
        if (!needsCameraPermission()) {
            if (acceptsImages(strArr).booleanValue() && (photoIntent = getPhotoIntent()) != null) {
                arrayList.add(photoIntent);
            }
            if (acceptsVideo(strArr).booleanValue() && (videoIntent = getVideoIntent()) != null) {
                arrayList.add(videoIntent);
            }
        }
        Intent fileChooserIntent = getFileChooserIntent(strArr, z10);
        Intent intent = new Intent("android.intent.action.CHOOSER");
        intent.putExtra("android.intent.extra.INTENT", fileChooserIntent);
        intent.putExtra("android.intent.extra.INITIAL_INTENTS", (Parcelable[]) arrayList.toArray(new Parcelable[0]));
        if (intent.resolveActivity(getCurrentActivity().getPackageManager()) != null) {
            getCurrentActivity().startActivityForResult(intent, 1);
        } else {
            Log.w(TAG, "there is no Activity to handle this Intent");
        }
        return true;
    }
}
