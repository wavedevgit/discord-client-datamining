package com.reactnative.ivpusic.imagepicker;

import android.app.Activity;
import android.app.Application;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.util.Base64;
import android.util.Log;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.activity.result.contract.e;
import androidx.core.content.FileProvider;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.PromiseImpl;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.reactnative.ivpusic.imagepicker.g;
import com.yalantis.ucrop.UCropActivity;
import com.yalantis.ucrop.a;
import d.f;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.Callable;
import org.webrtc.MediaStreamTrack;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements ActivityEventListener {
    private static String Q;
    private static String R;
    private static String S;
    private static String T;
    private static Application.ActivityLifecycleCallbacks U;
    private ReadableMap A;
    private Uri L;
    private String M;
    private ReactApplicationContext P;

    /* renamed from: d  reason: collision with root package name */
    private String f18344d = "any";

    /* renamed from: e  reason: collision with root package name */
    private boolean f18345e = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f18346i = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f18347o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f18348p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f18349q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18350r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f18351s = true;

    /* renamed from: t  reason: collision with root package name */
    private boolean f18352t = true;

    /* renamed from: u  reason: collision with root package name */
    private boolean f18353u = false;

    /* renamed from: v  reason: collision with root package name */
    private boolean f18354v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f18355w = false;

    /* renamed from: x  reason: collision with root package name */
    private boolean f18356x = false;

    /* renamed from: y  reason: collision with root package name */
    private boolean f18357y = true;

    /* renamed from: z  reason: collision with root package name */
    private boolean f18358z = false;
    private String B = null;
    private String C = null;
    private String D = null;
    private String E = null;
    private String F = null;
    private String G = null;
    private String H = null;
    private int I = 0;
    private int J = 0;
    private int K = 5;
    private i N = new i();
    private com.reactnative.ivpusic.imagepicker.a O = new com.reactnative.ivpusic.imagepicker.a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Application.ActivityLifecycleCallbacks {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void b(Activity activity) {
            if (g.Q != null) {
                g.this.y(activity, g.Q);
            }
            if (g.R != null) {
                g.this.z(activity, g.R);
            }
            if (g.S != null || g.T != null) {
                g.this.B(activity, g.S, g.T);
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityDestroyed(Activity activity) {
            if (activity instanceof UCropActivity) {
                g.Q = null;
                g.R = null;
                g.S = null;
                g.T = null;
                g.this.o0(activity);
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(Activity activity) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityResumed(final Activity activity) {
            if (activity instanceof UCropActivity) {
                activity.getWindow().getDecorView().post(new Runnable() { // from class: com.reactnative.ivpusic.imagepicker.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        g.a.this.b(activity);
                    }
                });
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStarted(Activity activity) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(Activity activity) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f18360d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Activity f18361e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Promise f18362i;

        b(g gVar, Activity activity, Promise promise) {
            this.f18360d = gVar;
            this.f18361e = activity;
            this.f18362i = promise;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            File file;
            try {
                file = new File(this.f18360d.T(this.f18361e));
            } catch (Exception e10) {
                e10.printStackTrace();
                this.f18362i.reject("E_ERROR_WHILE_CLEANING_FILES", e10.getMessage());
            }
            if (file.exists()) {
                this.f18360d.L(file);
                this.f18362i.resolve(null);
                return null;
            }
            throw new Exception("File does not exist");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f18364d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g f18365e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Promise f18366i;

        c(String str, g gVar, Promise promise) {
            this.f18364d = str;
            this.f18365e = gVar;
            this.f18366i = promise;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            String str;
            File file;
            try {
                str = this.f18364d;
                if (str.startsWith("file://")) {
                    str = str.substring(7);
                }
                file = new File(str);
            } catch (Exception e10) {
                e10.printStackTrace();
                this.f18366i.reject("E_ERROR_WHILE_CLEANING_FILES", e10.getMessage());
            }
            if (file.exists()) {
                this.f18365e.L(file);
                this.f18366i.resolve(null);
                return null;
            }
            throw new Exception("File does not exist. Path: " + str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements PermissionListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Promise f18368d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Callable f18369e;

        d(Promise promise, Callable callable) {
            this.f18368d = promise;
            this.f18369e = callable;
        }

        @Override // com.facebook.react.modules.core.PermissionListener
        public boolean onRequestPermissionsResult(int i10, String[] strArr, int[] iArr) {
            if (i10 == 1) {
                for (int i11 = 0; i11 < strArr.length; i11++) {
                    String str = strArr[i11];
                    if (iArr[i11] == -1) {
                        if (str.equals("android.permission.CAMERA")) {
                            this.f18368d.reject("E_NO_CAMERA_PERMISSION", "User did not grant camera permission.");
                        } else if (str.equals("android.permission.WRITE_EXTERNAL_STORAGE")) {
                            this.f18368d.reject("E_NO_LIBRARY_PERMISSION", "User did not grant library permission.");
                        } else {
                            this.f18368d.reject("E_NO_LIBRARY_PERMISSION", "Required permission missing");
                        }
                        return true;
                    }
                }
                try {
                    this.f18369e.call();
                } catch (Exception e10) {
                    this.f18368d.reject("E_CALLBACK_ERROR", "Unknown error", e10);
                }
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Activity f18371d;

        e(Activity activity) {
            this.f18371d = activity;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            g.this.X(this.f18371d);
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class f implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Activity f18373d;

        f(Activity activity) {
            this.f18373d = activity;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            g.this.Y(this.f18373d);
            return null;
        }
    }

    /* renamed from: com.reactnative.ivpusic.imagepicker.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class CallableC0207g implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Uri f18375d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Activity f18376e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f18377i;

        CallableC0207g(Uri uri, Activity activity, String str) {
            this.f18375d = uri;
            this.f18376e = activity;
            this.f18377i = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            Uri uri = this.f18375d;
            try {
                if ("content".equalsIgnoreCase(uri.getScheme())) {
                    uri = g.this.i0(this.f18376e, this.f18375d);
                }
                String str = this.f18377i;
                if (str != null) {
                    g.this.n0(this.f18376e, uri, str);
                } else {
                    g.this.m0(this.f18376e, uri);
                }
                return null;
            } catch (Exception e10) {
                i iVar = g.this.N;
                iVar.b("E_NO_IMAGE_DATA_FOUND", "Failed to resolve content URI: " + e10.getMessage());
                return null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReactApplicationContext reactApplicationContext) {
        this.P = reactApplicationContext;
        reactApplicationContext.addActivityEventListener(this);
    }

    private void A(Activity activity, int i10) {
        try {
            View findViewById = activity.findViewById(nq.d.f42097l);
            if (findViewById != null) {
                l0(findViewById, i10);
            }
            View findViewById2 = activity.findViewById(nq.d.f42098m);
            if (findViewById2 != null) {
                l0(findViewById2, i10);
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error applying wheel tick colors", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void B(Activity activity, String str, String str2) {
        int parseColor;
        Exception exc;
        int i10;
        if (str != null) {
            try {
                parseColor = Color.parseColor(str);
            } catch (Exception e10) {
                exc = e10;
                Log.e("ImageCropPicker", "Error applying widget colors", exc);
            }
        } else {
            parseColor = -1;
        }
        if (str2 != null) {
            i10 = Color.parseColor(str2);
        } else {
            i10 = -1;
        }
        try {
            try {
                C(activity, nq.d.f42099n, nq.d.f42089d, nq.d.f42102q, parseColor, i10);
                C(activity, nq.d.f42100o, nq.d.f42090e, nq.d.f42103r, parseColor, i10);
                C(activity, nq.d.f42101p, nq.d.f42091f, nq.d.f42104s, parseColor, i10);
                x(activity, parseColor, i10);
                if (i10 != -1) {
                    A(activity, i10);
                }
            } catch (Exception e11) {
                e = e11;
                exc = e;
                Log.e("ImageCropPicker", "Error applying widget colors", exc);
            }
        } catch (Exception e12) {
            e = e12;
        }
    }

    private void C(Activity activity, int i10, int i11, int i12, int i13, int i14) {
        try {
            if (activity.findViewById(i10) != null) {
                ImageView imageView = (ImageView) activity.findViewById(i11);
                TextView textView = (TextView) activity.findViewById(i12);
                if (imageView != null && imageView.getDrawable() != null) {
                    Drawable mutate = imageView.getDrawable().mutate();
                    if (i13 != -1 && i14 != -1) {
                        mutate.setTintList(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{i13, i14}));
                    } else if (i13 != -1) {
                        mutate.setTintList(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{i13, -8355712}));
                    } else if (i14 != -1) {
                        mutate.setTintList(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{-40192, i14}));
                    }
                }
                if (textView != null) {
                    if (i13 != -1 && i14 != -1) {
                        textView.setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{i13, i14}));
                    } else if (i13 != -1) {
                        textView.setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{i13, -8355712}));
                    } else if (i14 != -1) {
                        textView.setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{-40192, i14}));
                    }
                }
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error applying widget state colors", e10);
        }
    }

    private void D(Activity activity, int i10, int i11, Intent intent) {
        if (i11 == 0) {
            this.N.b("E_PICKER_CANCELLED", "User cancelled image selection");
        } else if (i11 == -1) {
            Uri uri = this.L;
            if (uri == null) {
                this.N.b("E_NO_IMAGE_DATA_FOUND", "Cannot resolve image url");
            } else if (this.f18348p) {
                new a.C0263a().e(Bitmap.CompressFormat.JPEG);
                m0(activity, uri);
            } else {
                try {
                    this.N.e(1);
                    WritableMap S2 = S(activity, uri, true);
                    if (S2 != null) {
                        this.N.d(S2);
                    }
                } catch (Exception e10) {
                    this.N.b("E_NO_IMAGE_DATA_FOUND", e10.getMessage());
                }
            }
        }
    }

    private void G(a.C0263a c0263a) {
        String str = this.B;
        if (str != null) {
            c0263a.b(Color.parseColor(str));
        }
        String str2 = this.D;
        if (str2 != null) {
            c0263a.m(Color.parseColor(str2));
        }
        String str3 = this.F;
        if (str3 != null) {
            c0263a.o(Color.parseColor(str3));
        }
        c0263a.l(this.f18357y);
        c0263a.i(this.f18358z);
    }

    private File H(Context context, Uri uri) {
        InputStream openInputStream = context.getContentResolver().openInputStream(uri);
        String P = P(context, uri);
        File externalCacheDir = context.getExternalCacheDir();
        File file = new File(externalCacheDir, "/temp/" + System.currentTimeMillis() + "." + P);
        File parentFile = file.getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
        }
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            byte[] bArr = new byte[openInputStream.available()];
            openInputStream.read(bArr);
            fileOutputStream.write(bArr);
            openInputStream.close();
            fileOutputStream.close();
            return file;
        } catch (IOException e10) {
            Log.w("image-crop-picker", "Error writing " + file, e10);
            return file;
        }
    }

    private File I() {
        String str = "image-" + UUID.randomUUID().toString();
        File externalFilesDir = this.P.getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        if (!externalFilesDir.exists() && !externalFilesDir.isDirectory()) {
            externalFilesDir.mkdirs();
        }
        File createTempFile = File.createTempFile(str, ".jpg", externalFilesDir);
        this.M = "file:" + createTempFile.getAbsolutePath();
        return createTempFile;
    }

    private File J() {
        String str = "video-" + UUID.randomUUID().toString();
        File externalFilesDir = this.P.getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        if (!externalFilesDir.exists() && !externalFilesDir.isDirectory()) {
            externalFilesDir.mkdirs();
        }
        File createTempFile = File.createTempFile(str, ".mp4", externalFilesDir);
        this.M = "file:" + createTempFile.getAbsolutePath();
        return createTempFile;
    }

    private void K(Activity activity, int i10, int i11, Intent intent) {
        File file;
        if (intent != null) {
            Uri b10 = com.yalantis.ucrop.a.b(intent);
            if (b10 != null) {
                try {
                    if (this.I > 0 && this.J > 0) {
                        try {
                            com.reactnative.ivpusic.imagepicker.a aVar = this.O;
                            ReactApplicationContext reactApplicationContext = this.P;
                            String path = b10.getPath();
                            int i12 = this.I;
                            int i13 = this.J;
                            file = aVar.e(reactApplicationContext, path, i12, i13, i12, i13, 100, R(b10.toString()));
                        } catch (OutOfMemoryError e10) {
                            this.N.b("E_LOW_MEMORY_ERROR", e10.getMessage());
                            file = null;
                        }
                        b10 = Uri.fromFile(file);
                    }
                    WritableMap S2 = S(activity, b10, false);
                    if (S2 != null) {
                        S2.putMap("cropRect", O(intent));
                        this.N.e(1);
                        this.N.d(S2);
                        return;
                    }
                    throw new Exception("Cannot crop video files");
                } catch (Exception e11) {
                    this.N.b("E_NO_IMAGE_DATA_FOUND", e11.getMessage());
                    return;
                }
            }
            this.N.b("E_NO_IMAGE_DATA_FOUND", "Cannot find image data");
            return;
        }
        this.N.b("E_PICKER_CANCELLED", "User cancelled image selection");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void L(File file) {
        if (file.isDirectory()) {
            for (File file2 : file.listFiles()) {
                L(file2);
            }
        }
        file.delete();
    }

    private void M(Activity activity, Uri uri, boolean z10) {
        String j02 = j0(activity, uri, z10);
        if (j02 != null && !j02.isEmpty()) {
            String R2 = R(j02);
            if (R2 != null && R2.startsWith("video/")) {
                U(activity, j02, R2);
                return;
            } else {
                this.N.d(Q(activity, j02));
                return;
            }
        }
        this.N.b("E_NO_IMAGE_DATA_FOUND", "Cannot resolve asset path.");
    }

    private String N(String str) {
        try {
            FileInputStream fileInputStream = new FileInputStream(str);
            byte[] bArr = new byte[8192];
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            while (true) {
                try {
                    int read = fileInputStream.read(bArr);
                    if (read == -1) {
                        break;
                    }
                    byteArrayOutputStream.write(bArr, 0, read);
                } catch (IOException e10) {
                    e10.printStackTrace();
                }
            }
            return Base64.encodeToString(byteArrayOutputStream.toByteArray(), 2);
        } catch (FileNotFoundException e11) {
            e11.printStackTrace();
            return null;
        }
    }

    private static WritableMap O(Intent intent) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putInt("x", intent.getIntExtra("com.yalantis.ucrop.OffsetX", -1));
        writableNativeMap.putInt("y", intent.getIntExtra("com.yalantis.ucrop.OffsetY", -1));
        writableNativeMap.putInt("width", intent.getIntExtra("com.yalantis.ucrop.ImageWidth", -1));
        writableNativeMap.putInt("height", intent.getIntExtra("com.yalantis.ucrop.ImageHeight", -1));
        return writableNativeMap;
    }

    private WritableMap Q(Activity activity, String str) {
        int i10;
        int i11;
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        if (!str.startsWith("http://") && !str.startsWith("https://")) {
            BitmapFactory.Options p02 = p0(str);
            boolean z10 = true;
            int m10 = new e3.a(str).m("Orientation", 1);
            if (m10 != 6 && m10 != 8 && m10 != 5 && m10 != 7) {
                z10 = false;
            }
            String path = this.O.c(this.P, this.A, str, p02).getPath();
            BitmapFactory.Options p03 = p0(path);
            long lastModified = new File(str).lastModified();
            writableNativeMap.putString("path", "file://" + path);
            if (z10) {
                i10 = p03.outHeight;
            } else {
                i10 = p03.outWidth;
            }
            writableNativeMap.putInt("width", i10);
            if (z10) {
                i11 = p03.outWidth;
            } else {
                i11 = p03.outHeight;
            }
            writableNativeMap.putInt("height", i11);
            writableNativeMap.putString("mime", p03.outMimeType);
            writableNativeMap.putInt("size", (int) new File(path).length());
            writableNativeMap.putString("modificationDate", String.valueOf(lastModified));
            writableNativeMap.putString("filename", new File(str).getName());
            if (this.f18346i) {
                writableNativeMap.putString("data", N(path));
            }
            if (this.f18347o) {
                try {
                    writableNativeMap.putMap("exif", com.reactnative.ivpusic.imagepicker.b.a(str));
                    return writableNativeMap;
                } catch (Exception e10) {
                    e10.printStackTrace();
                }
            }
            return writableNativeMap;
        }
        throw new Exception("Cannot select remote files");
    }

    private String R(String str) {
        Uri parse = Uri.parse(str);
        if ("content".equalsIgnoreCase(parse.getScheme())) {
            return this.P.getContentResolver().getType(parse);
        }
        if (!"file".equalsIgnoreCase(parse.getScheme())) {
            parse = Uri.fromFile(new File(str));
        }
        String fileExtensionFromUrl = MimeTypeMap.getFileExtensionFromUrl(parse.toString());
        if (fileExtensionFromUrl != null) {
            return MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtensionFromUrl.toLowerCase());
        }
        return null;
    }

    private WritableMap S(Activity activity, Uri uri, boolean z10) {
        String j02 = j0(activity, uri, z10);
        if (j02 != null && !j02.isEmpty()) {
            String R2 = R(j02);
            if (R2 != null && R2.startsWith("video/")) {
                U(activity, j02, R2);
                return null;
            }
            return Q(activity, j02);
        }
        throw new Exception("Cannot resolve asset path.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String T(Activity activity) {
        String str = activity.getCacheDir() + "/react-native-image-crop-picker";
        new File(str).mkdir();
        return str;
    }

    private void U(final Activity activity, final String str, final String str2) {
        q0(Uri.parse(str));
        final String str3 = T(activity) + "/" + UUID.randomUUID().toString() + ".mp4";
        new Thread(new Runnable() { // from class: com.reactnative.ivpusic.imagepicker.c
            @Override // java.lang.Runnable
            public final void run() {
                g.this.c0(activity, str, str3, str2);
            }
        }).start();
    }

    private static Long V(String str) {
        try {
            MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
            mediaMetadataRetriever.setDataSource(str);
            return Long.valueOf(Long.parseLong(mediaMetadataRetriever.extractMetadata(9)));
        } catch (Exception unused) {
            return -1L;
        }
    }

    private void W(Activity activity, int i10, int i11, Intent intent) {
        ClipData clipData;
        if (i11 == 0) {
            this.N.b("E_PICKER_CANCELLED", "User cancelled image selection");
        } else if (i11 == -1) {
            if (this.f18345e) {
                ClipData clipData2 = intent.getClipData();
                try {
                    if (clipData2 == null) {
                        this.N.e(1);
                        M(activity, intent.getData(), false);
                        return;
                    }
                    this.N.e(clipData2.getItemCount());
                    for (int i12 = 0; i12 < clipData2.getItemCount(); i12++) {
                        M(activity, clipData2.getItemAt(i12).getUri(), false);
                    }
                    return;
                } catch (Exception e10) {
                    this.N.b("E_NO_IMAGE_DATA_FOUND", e10.getMessage());
                    return;
                }
            }
            Uri data = intent.getData();
            if (data == null && (clipData = intent.getClipData()) != null && clipData.getItemCount() > 0) {
                data = clipData.getItemAt(0).getUri();
            }
            if (data == null) {
                this.N.b("E_NO_IMAGE_DATA_FOUND", "Cannot resolve image url");
            } else if (this.f18348p) {
                m0(activity, data);
            } else {
                try {
                    M(activity, data, false);
                } catch (Exception e11) {
                    this.N.b("E_NO_IMAGE_DATA_FOUND", e11.getMessage());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void X(Activity activity) {
        String str;
        File I;
        try {
            if (this.f18344d.equals(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                str = "android.media.action.VIDEO_CAPTURE";
                I = J();
            } else {
                str = "android.media.action.IMAGE_CAPTURE";
                I = I();
            }
            Intent intent = new Intent(str);
            Uri uriForFile = FileProvider.getUriForFile(activity, activity.getApplicationContext().getPackageName() + ".provider", I);
            this.L = uriForFile;
            intent.putExtra("output", uriForFile);
            if (this.f18356x) {
                intent.putExtra("android.intent.extras.CAMERA_FACING", 1);
                intent.putExtra("android.intent.extras.LENS_FACING_FRONT", 1);
                intent.putExtra("android.intent.extra.USE_FRONT_CAMERA", true);
            }
            if (intent.resolveActivity(activity.getPackageManager()) == null) {
                this.N.b("E_CANNOT_LAUNCH_CAMERA", "Cannot launch camera");
            } else {
                activity.startActivityForResult(intent, 61111);
            }
        } catch (Exception e10) {
            this.N.c("E_FAILED_TO_OPEN_CAMERA", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Y(Activity activity) {
        Intent createIntent;
        try {
            f.a aVar = new f.a();
            if (this.f18344d.equals(MediaStreamTrack.VIDEO_TRACK_KIND)) {
                aVar.d(e.C0013e.f889a);
            } else {
                if (!this.f18344d.equals("photo") && !this.f18348p) {
                    aVar.d(e.c.f887a);
                }
                aVar.d(e.d.f888a);
            }
            if (this.f18345e && this.K > 1) {
                createIntent = new androidx.activity.result.contract.d(this.K).createIntent(activity, aVar.a());
            } else {
                createIntent = new androidx.activity.result.contract.e().createIntent(activity, aVar.a());
            }
            activity.startActivityForResult(createIntent, 61110);
        } catch (Exception e10) {
            this.N.c("E_FAILED_TO_SHOW_PICKER", e10);
        }
    }

    private boolean Z(Activity activity) {
        if (!activity.getPackageManager().hasSystemFeature("android.hardware.camera") && !activity.getPackageManager().hasSystemFeature("android.hardware.camera.any")) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void a0(String str, Object[] objArr) {
        String str2 = (String) objArr[0];
        try {
            Bitmap q02 = q0(Uri.fromFile(new File(str2)));
            long lastModified = new File(str2).lastModified();
            long longValue = V(str2).longValue();
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putInt("width", q02.getWidth());
            writableNativeMap.putInt("height", q02.getHeight());
            writableNativeMap.putString("mime", str);
            writableNativeMap.putInt("size", (int) new File(str2).length());
            writableNativeMap.putInt("duration", (int) longValue);
            writableNativeMap.putString("path", "file://" + str2);
            writableNativeMap.putString("modificationDate", String.valueOf(lastModified));
            this.N.d(writableNativeMap);
        } catch (Exception e10) {
            this.N.c("E_NO_IMAGE_DATA_FOUND", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void b0(Object[] objArr) {
        WritableNativeMap writableNativeMap = (WritableNativeMap) objArr[0];
        this.N.b(writableNativeMap.getString("code"), writableNativeMap.getString("message"));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void c0(Activity activity, String str, String str2, final String str3) {
        this.O.d(activity, this.A, str, str2, new PromiseImpl(new Callback() { // from class: com.reactnative.ivpusic.imagepicker.d
            @Override // com.facebook.react.bridge.Callback
            public final void invoke(Object[] objArr) {
                g.this.a0(str3, objArr);
            }
        }, new Callback() { // from class: com.reactnative.ivpusic.imagepicker.e
            @Override // com.facebook.react.bridge.Callback
            public final void invoke(Object[] objArr) {
                g.this.b0(objArr);
            }
        }));
    }

    private void g0(Activity activity, Promise promise, List list, Callable callable) {
        ArrayList arrayList = new ArrayList();
        ArrayList<String> arrayList2 = new ArrayList(list);
        if (Build.VERSION.SDK_INT > 28) {
            arrayList2.remove("android.permission.WRITE_EXTERNAL_STORAGE");
        }
        for (String str : arrayList2) {
            if (androidx.core.content.a.a(activity, str) != 0) {
                arrayList.add(str);
            }
        }
        if (!arrayList.isEmpty()) {
            ((PermissionAwareActivity) activity).requestPermissions((String[]) arrayList.toArray(new String[arrayList.size()]), 1, new d(promise, callable));
            return;
        }
        try {
            callable.call();
        } catch (Exception e10) {
            promise.reject("E_CALLBACK_ERROR", "Unknown error", e10);
        }
    }

    private void h0(Activity activity) {
        String str = this.G;
        if (str == null && this.H == null && this.B == null && this.C == null) {
            return;
        }
        Q = str;
        R = this.H;
        S = this.B;
        T = this.C;
        o0(activity);
        U = new a();
        activity.getApplication().registerActivityLifecycleCallbacks(U);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Uri i0(Activity activity, Uri uri) {
        String b10 = h.b(activity, uri);
        if (b10 != null && !b10.isEmpty()) {
            File file = new File(b10);
            if (file.exists() && file.canRead()) {
                return Uri.fromFile(file);
            }
        }
        String P = P(activity, uri);
        P = (P == null || P.isEmpty()) ? "jpg" : "jpg";
        String T2 = T(activity);
        File file2 = new File(T2, UUID.randomUUID().toString() + "." + P);
        InputStream openInputStream = activity.getContentResolver().openInputStream(uri);
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file2);
            if (openInputStream != null) {
                byte[] bArr = new byte[8192];
                while (true) {
                    int read = openInputStream.read(bArr);
                    if (read != -1) {
                        fileOutputStream.write(bArr, 0, read);
                    } else {
                        fileOutputStream.flush();
                        fileOutputStream.close();
                        openInputStream.close();
                        return Uri.fromFile(file2);
                    }
                }
            } else {
                throw new IOException("Failed to open input stream for content URI");
            }
        } catch (Throwable th2) {
            if (openInputStream != null) {
                try {
                    openInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    private String j0(Activity activity, Uri uri, boolean z10) {
        String b10;
        if (z10) {
            b10 = Uri.parse(this.M).getPath();
        } else {
            b10 = h.b(activity, uri);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            String type = activity.getContentResolver().getType(uri);
            if (type != null && type.startsWith("video/")) {
                return h.b(activity, uri);
            }
            String path = Uri.fromFile(activity.getExternalCacheDir()).getPath();
            String path2 = Uri.fromFile(activity.getExternalFilesDir(null)).getPath();
            String path3 = Uri.fromFile(activity.getCacheDir()).getPath();
            String path4 = Uri.fromFile(activity.getFilesDir()).getPath();
            if (!b10.startsWith(path) && !b10.startsWith(path2) && !b10.startsWith(path3) && !b10.startsWith(path4)) {
                return h.b(activity, Uri.fromFile(H(activity, uri)));
            }
        }
        return b10;
    }

    private void k0(ReadableMap readableMap) {
        String str;
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        int i11;
        int i12;
        boolean z13;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        boolean z14;
        boolean z15;
        boolean z16;
        boolean z17;
        boolean z18;
        boolean z19;
        boolean z20;
        boolean z21;
        if (readableMap.hasKey("mediaType")) {
            str = readableMap.getString("mediaType");
        } else {
            str = "any";
        }
        this.f18344d = str;
        boolean z22 = true;
        boolean z23 = false;
        if (readableMap.hasKey("multiple") && readableMap.getBoolean("multiple")) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f18345e = z10;
        if (readableMap.hasKey("includeBase64") && readableMap.getBoolean("includeBase64")) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f18346i = z11;
        if (readableMap.hasKey("includeExif") && readableMap.getBoolean("includeExif")) {
            z12 = true;
        } else {
            z12 = false;
        }
        this.f18347o = z12;
        if (readableMap.hasKey("width")) {
            i10 = readableMap.getInt("width");
        } else {
            i10 = 0;
        }
        this.I = i10;
        if (readableMap.hasKey("height")) {
            i11 = readableMap.getInt("height");
        } else {
            i11 = 0;
        }
        this.J = i11;
        if (readableMap.hasKey("maxFiles")) {
            i12 = readableMap.getInt("maxFiles");
        } else {
            i12 = this.K;
        }
        this.K = i12;
        if (readableMap.hasKey("cropping") && readableMap.getBoolean("cropping")) {
            z13 = true;
        } else {
            z13 = false;
        }
        this.f18348p = z13;
        String str8 = null;
        if (readableMap.hasKey("cropperActiveWidgetColor")) {
            str2 = readableMap.getString("cropperActiveWidgetColor");
        } else {
            str2 = null;
        }
        this.B = str2;
        if (readableMap.hasKey("cropperInactiveWidgetColor")) {
            str3 = readableMap.getString("cropperInactiveWidgetColor");
        } else {
            str3 = null;
        }
        this.C = str3;
        if (readableMap.hasKey("cropperToolbarColor")) {
            str4 = readableMap.getString("cropperToolbarColor");
        } else {
            str4 = null;
        }
        this.D = str4;
        if (readableMap.hasKey("cropperToolbarTitle")) {
            str5 = readableMap.getString("cropperToolbarTitle");
        } else {
            str5 = null;
        }
        this.E = str5;
        if (readableMap.hasKey("cropperToolbarWidgetColor")) {
            str6 = readableMap.getString("cropperToolbarWidgetColor");
        } else {
            str6 = null;
        }
        this.F = str6;
        if (readableMap.hasKey("cropperControlsColor")) {
            str7 = readableMap.getString("cropperControlsColor");
        } else {
            str7 = null;
        }
        this.G = str7;
        if (readableMap.hasKey("cropperControlsBarColor")) {
            str8 = readableMap.getString("cropperControlsBarColor");
        }
        this.H = str8;
        if (readableMap.hasKey("cropperCircleOverlay") && readableMap.getBoolean("cropperCircleOverlay")) {
            z14 = true;
        } else {
            z14 = false;
        }
        this.f18349q = z14;
        if (readableMap.hasKey("freeStyleCropEnabled") && readableMap.getBoolean("freeStyleCropEnabled")) {
            z15 = true;
        } else {
            z15 = false;
        }
        this.f18350r = z15;
        if (readableMap.hasKey("showCropGuidelines") && !readableMap.getBoolean("showCropGuidelines")) {
            z16 = false;
        } else {
            z16 = true;
        }
        this.f18351s = z16;
        if (readableMap.hasKey("showCropFrame") && !readableMap.getBoolean("showCropFrame")) {
            z17 = false;
        } else {
            z17 = true;
        }
        this.f18352t = z17;
        if (readableMap.hasKey("hideBottomControls") && readableMap.getBoolean("hideBottomControls")) {
            z18 = true;
        } else {
            z18 = false;
        }
        this.f18353u = z18;
        if (readableMap.hasKey("enableRotationGesture") && readableMap.getBoolean("enableRotationGesture")) {
            z19 = true;
        } else {
            z19 = false;
        }
        this.f18354v = z19;
        if (readableMap.hasKey("disableCropperColorSetters") && readableMap.getBoolean("disableCropperColorSetters")) {
            z20 = true;
        } else {
            z20 = false;
        }
        this.f18355w = z20;
        if (readableMap.hasKey("useFrontCamera") && readableMap.getBoolean("useFrontCamera")) {
            z21 = true;
        } else {
            z21 = false;
        }
        this.f18356x = z21;
        if (readableMap.hasKey("cropperStatusBarLight")) {
            z22 = readableMap.getBoolean("cropperStatusBarLight");
        }
        this.f18357y = z22;
        if (readableMap.hasKey("cropperNavigationBarLight")) {
            z23 = readableMap.getBoolean("cropperNavigationBarLight");
        }
        this.f18358z = z23;
        this.A = readableMap;
    }

    private void l0(View view, int i10) {
        try {
            Field declaredField = view.getClass().getDeclaredField("mProgressLinePaint");
            declaredField.setAccessible(true);
            Paint paint = (Paint) declaredField.get(view);
            if (paint != null) {
                paint.setColor(i10);
                view.invalidate();
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error setting wheel tick color via reflection", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m0(Activity activity, Uri uri) {
        n0(activity, uri, R(uri.toString()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void n0(Activity activity, Uri uri, String str) {
        String str2;
        int i10;
        Bitmap.CompressFormat a10 = wl.b.a(str);
        a.C0263a c0263a = new a.C0263a();
        c0263a.e(a10);
        c0263a.f(100);
        c0263a.d(this.f18349q);
        c0263a.g(this.f18350r);
        c0263a.k(this.f18351s);
        c0263a.j(this.f18352t);
        c0263a.h(this.f18353u);
        String str3 = this.E;
        if (str3 != null) {
            c0263a.n(str3);
        }
        if (this.f18354v) {
            c0263a.c(3, 3, 3);
        }
        if (!this.f18355w) {
            G(c0263a);
        }
        if (a10 == Bitmap.CompressFormat.PNG) {
            str2 = ".png";
        } else {
            str2 = ".jpg";
        }
        String T2 = T(activity);
        com.yalantis.ucrop.a g10 = com.yalantis.ucrop.a.c(uri, Uri.fromFile(new File(T2, UUID.randomUUID().toString() + str2))).g(c0263a);
        int i11 = this.I;
        if (i11 > 0 && (i10 = this.J) > 0) {
            g10.f(i11, i10);
        }
        h0(activity);
        g10.d(activity);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void o0(Activity activity) {
        if (U != null && activity != null) {
            activity.getApplication().unregisterActivityLifecycleCallbacks(U);
            U = null;
        }
    }

    private BitmapFactory.Options p0(String str) {
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        options.inPreferredConfig = Bitmap.Config.RGB_565;
        options.inDither = true;
        BitmapFactory.decodeFile(str, options);
        if (options.outMimeType != null && options.outWidth != 0 && options.outHeight != 0) {
            return options;
        }
        throw new Exception("Invalid image selected");
    }

    private Bitmap q0(Uri uri) {
        MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
        mediaMetadataRetriever.setDataSource(this.P.getCurrentActivity(), uri);
        Bitmap frameAtTime = mediaMetadataRetriever.getFrameAtTime();
        if (frameAtTime != null) {
            mediaMetadataRetriever.release();
            return frameAtTime;
        }
        throw new Exception("Cannot retrieve video data");
    }

    private void x(Activity activity, int i10, int i11) {
        int i12;
        int i13;
        try {
            View findViewById = activity.findViewById(nq.d.f42092g);
            if (findViewById != null && (findViewById instanceof ViewGroup)) {
                ViewGroup viewGroup = (ViewGroup) findViewById;
                for (int i14 = 0; i14 < viewGroup.getChildCount(); i14++) {
                    View childAt = viewGroup.getChildAt(i14);
                    if (childAt instanceof ViewGroup) {
                        ViewGroup viewGroup2 = (ViewGroup) childAt;
                        if (viewGroup2.getChildCount() > 0) {
                            View childAt2 = viewGroup2.getChildAt(0);
                            if (childAt2 instanceof TextView) {
                                TextView textView = (TextView) childAt2;
                                if (i10 != -1 || i11 != -1) {
                                    if (i10 != -1) {
                                        i12 = i10;
                                    } else {
                                        i12 = -40192;
                                    }
                                    if (i11 != -1) {
                                        i13 = i11;
                                    } else {
                                        i13 = -16777216;
                                    }
                                    textView.setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[0]}, new int[]{i12, i13}));
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error applying aspect ratio text colors", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void y(Activity activity, String str) {
        try {
            Resources resources = activity.getResources();
            View findViewById = activity.findViewById(nq.d.f42111z);
            if (findViewById == null) {
                Log.w("ImageCropPicker", "Could not find wrapper_controls view");
            } else if (findViewById instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) findViewById;
                if (viewGroup.getChildCount() > 0) {
                    View childAt = viewGroup.getChildAt(0);
                    if (childAt instanceof ImageView) {
                        GradientDrawable gradientDrawable = new GradientDrawable();
                        gradientDrawable.setShape(0);
                        float applyDimension = TypedValue.applyDimension(1, 12.0f, resources.getDisplayMetrics());
                        gradientDrawable.setCornerRadii(new float[]{applyDimension, applyDimension, applyDimension, applyDimension, 0.0f, 0.0f, 0.0f, 0.0f});
                        gradientDrawable.setColor(Color.parseColor(str));
                        childAt.setBackground(gradientDrawable);
                    }
                }
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error applying controls background color", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void z(Activity activity, String str) {
        try {
            View findViewById = activity.findViewById(nq.d.C);
            if (findViewById == null) {
                Log.w("ImageCropPicker", "Could not find wrapper_states view");
            } else {
                findViewById.setBackgroundColor(Color.parseColor(str));
            }
        } catch (Exception e10) {
            Log.e("ImageCropPicker", "Error applying controls bar background color", e10);
        }
    }

    public void E(Promise promise) {
        Activity currentActivity = this.P.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
        } else {
            g0(currentActivity, promise, Collections.singletonList("android.permission.WRITE_EXTERNAL_STORAGE"), new b(this, currentActivity, promise));
        }
    }

    public void F(String str, Promise promise) {
        if (str == null) {
            promise.reject("E_ERROR_WHILE_CLEANING_FILES", "Cannot cleanup empty path");
            return;
        }
        Activity currentActivity = this.P.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
        } else {
            g0(currentActivity, promise, Collections.singletonList("android.permission.WRITE_EXTERNAL_STORAGE"), new c(str, this, promise));
        }
    }

    public String P(Context context, Uri uri) {
        if (uri.getScheme().equals("content")) {
            return MimeTypeMap.getSingleton().getExtensionFromMimeType(context.getContentResolver().getType(uri));
        }
        return MimeTypeMap.getFileExtensionFromUrl(Uri.fromFile(new File(uri.getPath())).toString());
    }

    public void d0(ReadableMap readableMap, Promise promise) {
        Activity currentActivity = this.P.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
        } else if (!Z(currentActivity)) {
            promise.reject("E_CAMERA_IS_NOT_AVAILABLE", "Camera not available");
        } else {
            k0(readableMap);
            this.N.f(promise, false);
            g0(currentActivity, promise, Arrays.asList("android.permission.CAMERA", "android.permission.WRITE_EXTERNAL_STORAGE"), new e(currentActivity));
        }
    }

    public void e0(ReadableMap readableMap, Promise promise) {
        Activity currentActivity = this.P.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
            return;
        }
        k0(readableMap);
        this.N.f(promise, false);
        String string = readableMap.getString("mimeType");
        g0(currentActivity, promise, Collections.singletonList("android.permission.WRITE_EXTERNAL_STORAGE"), new CallableC0207g(Uri.parse(readableMap.getString("path")), currentActivity, string));
    }

    public void f0(ReadableMap readableMap, Promise promise) {
        Activity currentActivity = this.P.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist");
            return;
        }
        k0(readableMap);
        this.N.f(promise, this.f18345e);
        g0(currentActivity, promise, Collections.singletonList("android.permission.WRITE_EXTERNAL_STORAGE"), new f(currentActivity));
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
        Log.d("RESULT", "onActivityResult");
        if (i10 == 61110) {
            W(activity, i10, i11, intent);
        } else if (i10 == 61111) {
            D(activity, i10, i11, intent);
        } else if (i10 == 69) {
            K(activity, i10, i11, intent);
        }
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onNewIntent(Intent intent) {
    }
}
