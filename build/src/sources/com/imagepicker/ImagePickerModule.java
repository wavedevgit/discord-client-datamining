package com.imagepicker;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import java.io.File;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import org.webrtc.MediaStreamTrack;
@ReactModule(name = ImagePickerModule.NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ImagePickerModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener {
    static final String NAME = "ImagePickerManager";
    public static final int REQUEST_LAUNCH_IMAGE_CAPTURE = 13001;
    public static final int REQUEST_LAUNCH_LIBRARY = 13003;
    public static final int REQUEST_LAUNCH_VIDEO_CAPTURE = 13002;
    Callback callback;
    Uri cameraCaptureURI;
    private ActivityResultLauncher cameraLauncher;
    private FragmentActivity currentFragmentActivity;
    private Uri fileUri;
    UUID identifier;
    private ActivityResultLauncher libraryLauncher;
    g options;
    final ReactApplicationContext reactContext;

    public ImagePickerModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.reactContext = reactApplicationContext;
        reactApplicationContext.addActivityEventListener(this);
        reactApplicationContext.addLifecycleEventListener(this);
    }

    private void initializeLaunchers(final FragmentActivity fragmentActivity) {
        if (fragmentActivity != null) {
            if (this.currentFragmentActivity != fragmentActivity || this.cameraLauncher == null) {
                try {
                    this.currentFragmentActivity = fragmentActivity;
                    this.cameraLauncher = fragmentActivity.registerForActivityResult(new e.a(), new ActivityResultCallback() { // from class: com.imagepicker.c
                        @Override // androidx.activity.result.ActivityResultCallback
                        public final void a(Object obj) {
                            ImagePickerModule.this.lambda$initializeLaunchers$0(fragmentActivity, (d.a) obj);
                        }
                    });
                    this.libraryLauncher = fragmentActivity.registerForActivityResult(new e.a(), new ActivityResultCallback() { // from class: com.imagepicker.d
                        @Override // androidx.activity.result.ActivityResultCallback
                        public final void a(Object obj) {
                            ImagePickerModule.this.lambda$initializeLaunchers$1(fragmentActivity, (d.a) obj);
                        }
                    });
                } catch (IllegalStateException unused) {
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$initializeLaunchers$0(FragmentActivity fragmentActivity, d.a aVar) {
        int i10;
        g gVar = this.options;
        if (gVar != null && gVar.f17129l.equals(h.f17135f)) {
            i10 = REQUEST_LAUNCH_VIDEO_CAPTURE;
        } else {
            i10 = REQUEST_LAUNCH_IMAGE_CAPTURE;
        }
        onActivityResult(fragmentActivity, i10, aVar.b(), aVar.a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$initializeLaunchers$1(FragmentActivity fragmentActivity, d.a aVar) {
        onActivityResult(fragmentActivity, REQUEST_LAUNCH_LIBRARY, aVar.b(), aVar.a());
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        ActivityResultLauncher activityResultLauncher = this.cameraLauncher;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
            this.cameraLauncher = null;
        }
        ActivityResultLauncher activityResultLauncher2 = this.libraryLauncher;
        if (activityResultLauncher2 != null) {
            activityResultLauncher2.d();
            this.libraryLauncher = null;
        }
        if (this.currentFragmentActivity != null) {
            this.currentFragmentActivity = null;
        }
    }

    @ReactMethod
    public void launchCamera(ReadableMap readableMap, Callback callback) {
        Intent intent;
        File c10;
        int i10;
        if (!h.w(this.reactContext)) {
            callback.invoke(h.j(h.f17131b, null));
            return;
        }
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            callback.invoke(h.j(h.f17133d, "Activity error"));
        } else if (!h.x(this.reactContext, currentActivity)) {
            callback.invoke(h.j(h.f17133d, h.f17138i));
        } else {
            this.callback = callback;
            g gVar = new g(readableMap);
            this.options = gVar;
            if (gVar.f17125h.booleanValue() && Build.VERSION.SDK_INT <= 28 && !h.v(currentActivity)) {
                callback.invoke(h.j(h.f17132c, null));
                this.callback = null;
                return;
            }
            this.identifier = UUID.randomUUID();
            if (this.options.f17129l.equals(h.f17135f)) {
                intent = new Intent("android.media.action.VIDEO_CAPTURE");
                intent.putExtra("android.intent.extra.videoQuality", this.options.f17121d);
                int i11 = this.options.f17126i;
                if (i11 > 0) {
                    intent.putExtra("android.intent.extra.durationLimit", i11);
                }
                c10 = h.c(this.reactContext, this.identifier, "mp4");
                this.cameraCaptureURI = h.d(c10, this.reactContext);
                i10 = REQUEST_LAUNCH_VIDEO_CAPTURE;
            } else {
                intent = new Intent("android.media.action.IMAGE_CAPTURE");
                c10 = h.c(this.reactContext, this.identifier, "jpg");
                this.cameraCaptureURI = h.d(c10, this.reactContext);
                i10 = REQUEST_LAUNCH_IMAGE_CAPTURE;
            }
            if (this.options.f17127j.booleanValue()) {
                h.E(intent);
            }
            this.fileUri = Uri.fromFile(c10);
            intent.putExtra("output", this.cameraCaptureURI);
            intent.addFlags(3);
            try {
                ActivityResultLauncher activityResultLauncher = this.cameraLauncher;
                if (activityResultLauncher != null) {
                    activityResultLauncher.b(intent);
                } else {
                    currentActivity.startActivityForResult(intent, i10);
                }
            } catch (ActivityNotFoundException e10) {
                callback.invoke(h.j(h.f17133d, e10.getMessage()));
                this.callback = null;
            } catch (Exception e11) {
                String str = h.f17133d;
                callback.invoke(h.j(str, "Failed to launch camera: " + e11.getMessage()));
                this.callback = null;
            }
        }
    }

    @ReactMethod
    public void launchImageLibrary(ReadableMap readableMap, Callback callback) {
        boolean z10;
        Intent intent;
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            callback.invoke(h.j(h.f17133d, "Activity error"));
            return;
        }
        this.callback = callback;
        g gVar = new g(readableMap);
        this.options = gVar;
        if (gVar.f17118a == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean equals = gVar.f17129l.equals(h.f17134e);
        boolean equals2 = this.options.f17129l.equals(h.f17135f);
        boolean equals3 = this.options.f17129l.equals(h.f17136g);
        if (z10 && ((equals || equals2) && !this.options.f17128k.booleanValue())) {
            intent = new Intent("android.intent.action.PICK");
        } else {
            intent = new Intent("android.intent.action.GET_CONTENT");
            intent.addCategory("android.intent.category.OPENABLE");
        }
        if (!z10) {
            intent.putExtra("android.intent.extra.ALLOW_MULTIPLE", true);
        }
        if (equals) {
            intent.setType("image/*");
        } else if (equals2) {
            intent.setType("video/*");
        } else if (equals3) {
            intent.setType("*/*");
            intent.putExtra("android.intent.extra.MIME_TYPES", new String[]{"image/*", "video/*"});
        } else {
            intent.setType("*/*");
        }
        Intent createChooser = Intent.createChooser(intent, null);
        try {
            ActivityResultLauncher activityResultLauncher = this.libraryLauncher;
            if (activityResultLauncher != null) {
                activityResultLauncher.b(createChooser);
            } else {
                currentActivity.startActivityForResult(createChooser, REQUEST_LAUNCH_LIBRARY);
            }
        } catch (ActivityNotFoundException e10) {
            callback.invoke(h.j(h.f17133d, e10.getMessage()));
            this.callback = null;
        } catch (Exception e11) {
            callback.invoke(h.j(h.f17133d, "Failed to launch library: " + e11.getMessage()));
            this.callback = null;
        }
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
        if (h.A(i10) && this.callback != null) {
            if (i11 != -1) {
                if (i10 == 13001) {
                    h.e(this.fileUri);
                }
                this.callback.invoke(h.i());
                this.callback = null;
                return;
            }
            switch (i10) {
                case REQUEST_LAUNCH_IMAGE_CAPTURE /* 13001 */:
                    if (this.options.f17125h.booleanValue()) {
                        h.D(this.cameraCaptureURI, this.identifier, this.reactContext, "photo");
                    }
                    onAssetsObtained(Collections.singletonList(this.fileUri));
                    return;
                case REQUEST_LAUNCH_VIDEO_CAPTURE /* 13002 */:
                    if (this.options.f17125h.booleanValue()) {
                        h.D(this.cameraCaptureURI, this.identifier, this.reactContext, MediaStreamTrack.VIDEO_TRACK_KIND);
                    }
                    onAssetsObtained(Collections.singletonList(this.fileUri));
                    return;
                case REQUEST_LAUNCH_LIBRARY /* 13003 */:
                    onAssetsObtained(h.a(intent));
                    return;
                default:
                    return;
            }
        }
    }

    void onAssetsObtained(List<Uri> list) {
        try {
            this.callback.invoke(h.t(list, this.identifier, this.options, this.reactContext));
        } catch (RuntimeException e10) {
            this.callback.invoke(h.j(h.f17133d, e10.getMessage()));
        } finally {
            this.callback = null;
        }
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity instanceof FragmentActivity) {
            initializeLaunchers((FragmentActivity) currentActivity);
        }
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onNewIntent(Intent intent) {
    }
}
