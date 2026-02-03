package com.imagepicker;

import android.app.Activity;
import android.content.ClipData;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import android.util.Base64;
import android.webkit.MimeTypeMap;
import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.reactnativecommunity.clipboard.ClipboardModule;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    public static String f16756a = "rn_image_picker_lib_temp_";

    /* renamed from: b  reason: collision with root package name */
    public static String f16757b = "camera_unavailable";

    /* renamed from: c  reason: collision with root package name */
    public static String f16758c = "permission";

    /* renamed from: d  reason: collision with root package name */
    public static String f16759d = "others";

    /* renamed from: e  reason: collision with root package name */
    public static String f16760e = "photo";

    /* renamed from: f  reason: collision with root package name */
    public static String f16761f = "video";

    /* renamed from: g  reason: collision with root package name */
    public static String f16762g = "mixed";

    /* renamed from: h  reason: collision with root package name */
    public static String f16763h = "any";

    /* renamed from: i  reason: collision with root package name */
    public static String f16764i = "This library does not require Manifest.permission.CAMERA, if you add this permission in manifest then you have to obtain the same.";

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean A(int i10) {
        switch (i10) {
            case ImagePickerModule.REQUEST_LAUNCH_IMAGE_CAPTURE /* 13001 */:
            case ImagePickerModule.REQUEST_LAUNCH_VIDEO_CAPTURE /* 13002 */:
            case ImagePickerModule.REQUEST_LAUNCH_LIBRARY /* 13003 */:
                return true;
            default:
                return false;
        }
    }

    static boolean B(Uri uri, Context context) {
        return y("video/", uri, context);
    }

    public static Uri C(Uri uri, UUID uuid, Context context, g gVar) {
        try {
            int[] o10 = o(uri, context);
            if (!G(o10[0], o10[1], gVar)) {
                return uri;
            }
            int[] n10 = n(o10[0], o10[1], gVar);
            InputStream openInputStream = context.getContentResolver().openInputStream(uri);
            String r10 = r(uri);
            Bitmap createScaledBitmap = Bitmap.createScaledBitmap(BitmapFactory.decodeStream(openInputStream), n10[0], n10[1], true);
            String s10 = s(uri, context);
            File c10 = c(context, uuid, m(r10));
            createScaledBitmap.compress(h(r10), gVar.f16748e, context.getContentResolver().openOutputStream(Uri.fromFile(c10)));
            F(c10, s10, context);
            return Uri.fromFile(c10);
        } catch (Exception e10) {
            e10.printStackTrace();
            return uri;
        }
    }

    public static void D(Uri uri, UUID uuid, Context context, String str) {
        Uri insert;
        ContentResolver contentResolver = context.getContentResolver();
        ContentValues contentValues = new ContentValues();
        if (uuid == null) {
            uuid = UUID.randomUUID();
        }
        if (str.equals(MediaStreamTrack.VIDEO_TRACK_KIND)) {
            contentValues.put("_display_name", uuid.toString());
            contentValues.put("mime_type", contentResolver.getType(uri));
            insert = contentResolver.insert(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, contentValues);
        } else {
            contentValues.put("_display_name", uuid.toString());
            contentValues.put("mime_type", contentResolver.getType(uri));
            insert = contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues);
        }
        b(uri, insert, contentResolver);
    }

    public static void E(Intent intent) {
        int i10 = Build.VERSION.SDK_INT;
        intent.putExtra("android.intent.extras.CAMERA_FACING", 0);
        if (i10 >= 26) {
            intent.putExtra("android.intent.extra.USE_FRONT_CAMERA", true);
        }
    }

    static void F(File file, String str, Context context) {
        if (!str.equals(String.valueOf(1)) && !str.equals(String.valueOf(0))) {
            e3.a aVar = new e3.a(file);
            aVar.h0("Orientation", str);
            aVar.c0();
        }
    }

    static boolean G(int i10, int i11, g gVar) {
        int i12 = gVar.f16749f;
        if ((i12 == 0 || gVar.f16750g == 0) && gVar.f16748e == 100) {
            return false;
        }
        if (i12 >= i10 && gVar.f16750g >= i11 && gVar.f16748e == 100) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(Intent intent) {
        if (intent.getClipData() == null) {
            return Collections.singletonList(intent.getData());
        }
        ClipData clipData = intent.getClipData();
        ArrayList arrayList = new ArrayList(clipData.getItemCount());
        for (int i10 = 0; i10 < clipData.getItemCount(); i10++) {
            arrayList.add(clipData.getItemAt(i10).getUri());
        }
        return arrayList;
    }

    public static void b(Uri uri, Uri uri2, ContentResolver contentResolver) {
        try {
            OutputStream openOutputStream = contentResolver.openOutputStream(uri2);
            InputStream openInputStream = contentResolver.openInputStream(uri);
            byte[] bArr = new byte[8192];
            while (true) {
                int read = openInputStream.read(bArr);
                if (read != -1) {
                    openOutputStream.write(bArr, 0, read);
                } else {
                    return;
                }
            }
        } catch (IOException e10) {
            e10.printStackTrace();
        }
    }

    public static File c(Context context, UUID uuid, String str) {
        if (uuid == null) {
            try {
                uuid = UUID.randomUUID();
            } catch (Exception e10) {
                e10.printStackTrace();
                return null;
            }
        }
        File file = new File(context.getCacheDir(), f16756a + uuid + "." + str);
        file.createNewFile();
        return file;
    }

    public static Uri d(File file, Context context) {
        return FileProvider.getUriForFile(context, context.getApplicationContext().getPackageName() + ".imagepickerprovider", file);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(Uri uri) {
        new File(uri.getPath()).delete();
    }

    public static Uri f(Uri uri, UUID uuid, Context context) {
        if (uri == null) {
            return null;
        }
        ContentResolver contentResolver = context.getContentResolver();
        Uri fromFile = Uri.fromFile(c(context, uuid, m(contentResolver.getType(uri))));
        b(uri, fromFile, contentResolver);
        return fromFile;
    }

    static String g(Uri uri, Context context) {
        try {
            InputStream openInputStream = context.getContentResolver().openInputStream(uri);
            byte[] bArr = new byte[8192];
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            while (true) {
                try {
                    int read = openInputStream.read(bArr);
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

    static Bitmap.CompressFormat h(String str) {
        str.getClass();
        if (!str.equals(ClipboardModule.MIMETYPE_JPEG)) {
            if (!str.equals(ClipboardModule.MIMETYPE_PNG)) {
                return Bitmap.CompressFormat.JPEG;
            }
            return Bitmap.CompressFormat.PNG;
        }
        return Bitmap.CompressFormat.JPEG;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ReadableMap i() {
        WritableMap createMap = Arguments.createMap();
        createMap.putBoolean("didCancel", true);
        return createMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ReadableMap j(String str, String str2) {
        WritableMap createMap = Arguments.createMap();
        createMap.putString("errorCode", str);
        if (str2 != null) {
            createMap.putString("errorMessage", str2);
        }
        return createMap;
    }

    static ReadableMap k(Uri uri, Context context) {
        String a10 = a.a(context.getContentResolver(), uri);
        WritableMap createMap = Arguments.createMap();
        createMap.putString("uri", uri.toString());
        createMap.putString("fileName", a10);
        createMap.putString("mimeType", q(uri, context));
        return createMap;
    }

    static double l(Uri uri, Context context) {
        try {
            return context.getContentResolver().openFileDescriptor(uri, "r").getStatSize();
        } catch (Exception e10) {
            e10.printStackTrace();
            return 0.0d;
        }
    }

    static String m(String str) {
        if (str == null) {
            return "jpg";
        }
        if (!str.equals("image/gif")) {
            if (!str.equals(ClipboardModule.MIMETYPE_PNG)) {
                return "jpg";
            }
            return "png";
        }
        return "gif";
    }

    static int[] n(int i10, int i11, g gVar) {
        int i12;
        int i13 = gVar.f16749f;
        if (i13 != 0 && (i12 = gVar.f16750g) != 0) {
            if (i13 < i10) {
                i11 = (int) ((i13 / i10) * i11);
                i10 = i13;
            }
            if (i12 < i11) {
                i10 = (int) ((i12 / i11) * i10);
            } else {
                i12 = i11;
            }
            return new int[]{i10, i12};
        }
        return new int[]{i10, i11};
    }

    public static int[] o(Uri uri, Context context) {
        try {
            InputStream openInputStream = context.getContentResolver().openInputStream(uri);
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            BitmapFactory.decodeStream(openInputStream, null, options);
            return new int[]{options.outWidth, options.outHeight};
        } catch (FileNotFoundException e10) {
            e10.printStackTrace();
            return new int[]{0, 0};
        }
    }

    static ReadableMap p(Uri uri, g gVar, Context context) {
        String lastPathSegment = uri.getLastPathSegment();
        b bVar = new b(uri, context);
        int[] o10 = o(uri, context);
        WritableMap createMap = Arguments.createMap();
        createMap.putString("uri", uri.toString());
        createMap.putDouble("fileSize", l(uri, context));
        createMap.putString("fileName", lastPathSegment);
        createMap.putString("type", r(uri));
        createMap.putInt("width", o10[0]);
        createMap.putInt("height", o10[1]);
        createMap.putString("type", q(uri, context));
        if (gVar.f16745b.booleanValue()) {
            createMap.putString("base64", g(uri, context));
        }
        if (gVar.f16746c.booleanValue()) {
            createMap.putString("timestamp", bVar.b());
            createMap.putString(StackTraceHelper.ID_KEY, lastPathSegment);
        }
        return createMap;
    }

    static String q(Uri uri, Context context) {
        if (uri.getScheme().equals("file")) {
            return r(uri);
        }
        return context.getContentResolver().getType(uri);
    }

    static String r(Uri uri) {
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(uri.toString()));
    }

    static String s(Uri uri, Context context) {
        return new e3.a(context.getContentResolver().openInputStream(uri)).k("Orientation");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ReadableMap t(List list, UUID uuid, g gVar, Context context) {
        boolean equals = gVar.f16755l.equals(f16760e);
        boolean equals2 = gVar.f16755l.equals(f16761f);
        boolean equals3 = gVar.f16755l.equals(f16762g);
        boolean equals4 = gVar.f16755l.equals(f16763h);
        WritableArray createArray = Arguments.createArray();
        for (int i10 = 0; i10 < list.size(); i10++) {
            Uri uri = (Uri) list.get(i10);
            if (z(uri, context) && (equals || equals3)) {
                if (uri.getScheme().contains("content")) {
                    uri = f(uri, uuid, context);
                }
                createArray.pushMap(p(C(uri, uuid, context, gVar), gVar, context));
            } else if (B(uri, context) && (equals2 || equals3)) {
                createArray.pushMap(u(uri, gVar, context));
            } else if (equals4) {
                createArray.pushMap(k(uri, context));
            } else {
                throw new RuntimeException("Unsupported file type");
            }
        }
        WritableMap createMap = Arguments.createMap();
        createMap.putArray("assets", createArray);
        return createMap;
    }

    static ReadableMap u(Uri uri, g gVar, Context context) {
        String a10 = a.a(context.getContentResolver(), uri);
        WritableMap createMap = Arguments.createMap();
        i iVar = new i(uri, context);
        createMap.putString("uri", uri.toString());
        createMap.putDouble("fileSize", l(uri, context));
        createMap.putInt("duration", iVar.e());
        createMap.putInt("bitrate", iVar.c());
        createMap.putString("fileName", a10);
        createMap.putString("type", q(uri, context));
        createMap.putInt("width", iVar.g());
        createMap.putInt("height", iVar.f());
        if (gVar.f16746c.booleanValue()) {
            createMap.putString("timestamp", iVar.d());
            createMap.putString(StackTraceHelper.ID_KEY, a10);
        }
        return createMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean v(Activity activity) {
        if (androidx.core.content.a.a(activity, "android.permission.WRITE_EXTERNAL_STORAGE") == 0) {
            return true;
        }
        return false;
    }

    public static boolean w(Context context) {
        if (!context.getPackageManager().hasSystemFeature("android.hardware.camera") && !context.getPackageManager().hasSystemFeature("android.hardware.camera.any")) {
            return false;
        }
        return true;
    }

    public static boolean x(Context context, Activity activity) {
        try {
            String[] strArr = context.getPackageManager().getPackageInfo(context.getPackageName(), RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).requestedPermissions;
            if (strArr != null && Arrays.asList(strArr).contains("android.permission.CAMERA")) {
                if (androidx.core.content.a.a(activity, "android.permission.CAMERA") != 0) {
                    return false;
                }
            }
            return true;
        } catch (PackageManager.NameNotFoundException e10) {
            e10.printStackTrace();
            return true;
        }
    }

    static boolean y(String str, Uri uri, Context context) {
        String q10 = q(uri, context);
        if (q10 != null) {
            return q10.contains(str);
        }
        return false;
    }

    static boolean z(Uri uri, Context context) {
        return y("image/", uri, context);
    }
}
