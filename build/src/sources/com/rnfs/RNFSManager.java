package com.rnfs;

import android.content.ContentResolver;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.database.Cursor;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.util.Base64;
import android.util.SparseArray;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.RCTNativeAppEventEmitter;
import com.rnfs.a;
import com.rnfs.g;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.net.URL;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
@ReactModule(name = RNFSManager.MODULE_NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNFSManager extends ReactContextBaseJavaModule {
    static final String MODULE_NAME = "RNFSManager";
    private static final String RNFSCachesDirectoryPath = "RNFSCachesDirectoryPath";
    private static final String RNFSDocumentDirectory = "RNFSDocumentDirectory";
    private static final String RNFSDocumentDirectoryPath = "RNFSDocumentDirectoryPath";
    private static final String RNFSDownloadDirectoryPath = "RNFSDownloadDirectoryPath";
    private static final String RNFSExternalCachesDirectoryPath = "RNFSExternalCachesDirectoryPath";
    private static final String RNFSExternalDirectoryPath = "RNFSExternalDirectoryPath";
    private static final String RNFSExternalStorageDirectoryPath = "RNFSExternalStorageDirectoryPath";
    private static final String RNFSFileTypeDirectory = "RNFSFileTypeDirectory";
    private static final String RNFSFileTypeRegular = "RNFSFileTypeRegular";
    private static final String RNFSPicturesDirectoryPath = "RNFSPicturesDirectoryPath";
    private static final String RNFSTemporaryDirectoryPath = "RNFSTemporaryDirectoryPath";
    private SparseArray<com.rnfs.c> downloaders;
    private ReactApplicationContext reactContext;
    private SparseArray<com.rnfs.i> uploaders;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends j {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ File f17761b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Promise f17762c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f17763d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(File file, Promise promise, String str) {
            super();
            this.f17761b = file;
            this.f17762c = promise;
            this.f17763d = str;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.os.AsyncTask
        /* renamed from: b */
        public void onPostExecute(Exception exc) {
            if (exc == null) {
                this.f17761b.delete();
                this.f17762c.resolve(Boolean.TRUE);
                return;
            }
            exc.printStackTrace();
            RNFSManager.this.reject(this.f17762c, this.f17763d, exc);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends j {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Promise f17765b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f17766c;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Promise promise, String str) {
            super();
            this.f17765b = promise;
            this.f17766c = str;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.os.AsyncTask
        /* renamed from: b */
        public void onPostExecute(Exception exc) {
            if (exc == null) {
                this.f17765b.resolve(null);
                return;
            }
            exc.printStackTrace();
            RNFSManager.this.reject(this.f17765b, this.f17766c, exc);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements a.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17768a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Promise f17769b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17770c;

        c(int i10, Promise promise, ReadableMap readableMap) {
            this.f17768a = i10;
            this.f17769b = promise;
            this.f17770c = readableMap;
        }

        @Override // com.rnfs.a.c
        public void a(com.rnfs.b bVar) {
            if (bVar.f17799c != null) {
                RNFSManager.this.reject(this.f17769b, this.f17770c.getString("toFile"), bVar.f17799c);
                return;
            }
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("jobId", this.f17768a);
            createMap.putInt("statusCode", bVar.f17797a);
            createMap.putDouble("bytesWritten", bVar.f17798b);
            this.f17769b.resolve(createMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d implements a.InterfaceC0214a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17772a;

        d(int i10) {
            this.f17772a = i10;
        }

        @Override // com.rnfs.a.InterfaceC0214a
        public void a(int i10, long j10, Map map) {
            WritableMap createMap = Arguments.createMap();
            for (Map.Entry entry : map.entrySet()) {
                createMap.putString((String) entry.getKey(), (String) entry.getValue());
            }
            WritableMap createMap2 = Arguments.createMap();
            createMap2.putInt("jobId", this.f17772a);
            createMap2.putInt("statusCode", i10);
            createMap2.putDouble("contentLength", j10);
            createMap2.putMap("headers", createMap);
            RNFSManager rNFSManager = RNFSManager.this;
            rNFSManager.sendEvent(rNFSManager.getReactApplicationContext(), "DownloadBegin", createMap2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e implements a.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17774a;

        e(int i10) {
            this.f17774a = i10;
        }

        @Override // com.rnfs.a.b
        public void a(long j10, long j11) {
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("jobId", this.f17774a);
            createMap.putDouble("contentLength", j10);
            createMap.putDouble("bytesWritten", j11);
            RNFSManager rNFSManager = RNFSManager.this;
            rNFSManager.sendEvent(rNFSManager.getReactApplicationContext(), "DownloadProgress", createMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class f implements g.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17776a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Promise f17777b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17778c;

        f(int i10, Promise promise, ReadableMap readableMap) {
            this.f17776a = i10;
            this.f17777b = promise;
            this.f17778c = readableMap;
        }

        @Override // com.rnfs.g.b
        public void a(com.rnfs.h hVar) {
            if (hVar.f17816c != null) {
                RNFSManager.this.reject(this.f17777b, this.f17778c.getString("toUrl"), hVar.f17816c);
                return;
            }
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("jobId", this.f17776a);
            createMap.putInt("statusCode", hVar.f17814a);
            createMap.putMap("headers", hVar.f17815b);
            createMap.putString("body", hVar.f17817d);
            this.f17777b.resolve(createMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class g implements g.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17780a;

        g(int i10) {
            this.f17780a = i10;
        }

        @Override // com.rnfs.g.a
        public void a() {
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("jobId", this.f17780a);
            RNFSManager rNFSManager = RNFSManager.this;
            rNFSManager.sendEvent(rNFSManager.getReactApplicationContext(), "UploadBegin", createMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class h implements g.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f17782a;

        h(int i10) {
            this.f17782a = i10;
        }

        @Override // com.rnfs.g.c
        public void a(int i10, int i11) {
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("jobId", this.f17782a);
            createMap.putInt("totalBytesExpectedToSend", i10);
            createMap.putInt("totalBytesSent", i11);
            RNFSManager rNFSManager = RNFSManager.this;
            rNFSManager.sendEvent(rNFSManager.getReactApplicationContext(), "UploadProgress", createMap);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class i implements MediaScannerConnection.MediaScannerConnectionClient {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Promise f17784a;

        i(Promise promise) {
            this.f17784a = promise;
        }

        @Override // android.media.MediaScannerConnection.MediaScannerConnectionClient
        public void onMediaScannerConnected() {
        }

        @Override // android.media.MediaScannerConnection.OnScanCompletedListener
        public void onScanCompleted(String str, Uri uri) {
            this.f17784a.resolve(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class j extends AsyncTask {
        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.os.AsyncTask
        /* renamed from: a */
        public Exception doInBackground(String... strArr) {
            try {
                String str = strArr[0];
                String str2 = strArr[1];
                InputStream inputStream = RNFSManager.this.getInputStream(str);
                OutputStream outputStream = RNFSManager.this.getOutputStream(str2, false);
                byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                while (true) {
                    int read = inputStream.read(bArr);
                    if (read > 0) {
                        outputStream.write(bArr, 0, read);
                        Thread.yield();
                    } else {
                        inputStream.close();
                        outputStream.close();
                        return null;
                    }
                }
            } catch (Exception e10) {
                return e10;
            }
        }

        private j() {
        }
    }

    public RNFSManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.downloaders = new SparseArray<>();
        this.uploaders = new SparseArray<>();
        this.reactContext = reactApplicationContext;
    }

    private void DeleteRecursive(File file) {
        if (file.isDirectory()) {
            for (File file2 : file.listFiles()) {
                DeleteRecursive(file2);
            }
        }
        file.delete();
    }

    private void copyInputStream(InputStream inputStream, String str, String str2, Promise promise) {
        OutputStream outputStream;
        OutputStream outputStream2 = null;
        try {
            try {
                try {
                    outputStream = getOutputStream(str2, false);
                } catch (IOException unused) {
                    return;
                }
            } catch (Exception e10) {
                e = e10;
            }
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            byte[] bArr = new byte[10240];
            while (true) {
                int read = inputStream.read(bArr);
                if (read == -1) {
                    break;
                }
                outputStream.write(bArr, 0, read);
            }
            promise.resolve(null);
            try {
                inputStream.close();
            } catch (IOException unused2) {
            }
        } catch (Exception e11) {
            e = e11;
            outputStream2 = outputStream;
            reject(promise, str, new Exception(String.format("Failed to copy '%s' to %s (%s)", str, str2, e.getLocalizedMessage())));
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused3) {
                }
            }
            if (outputStream2 != null) {
                outputStream2.close();
            }
            return;
        } catch (Throwable th3) {
            th = th3;
            outputStream2 = outputStream;
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused4) {
                }
            }
            if (outputStream2 != null) {
                try {
                    outputStream2.close();
                } catch (IOException unused5) {
                }
            }
            throw th;
        }
        if (outputStream != null) {
            outputStream.close();
        }
    }

    private Uri getFileUri(String str, boolean z10) {
        Uri parse = Uri.parse(str);
        if (parse.getScheme() == null) {
            File file = new File(str);
            if (!z10 && file.isDirectory()) {
                throw new com.rnfs.d("EISDIR", "EISDIR: illegal operation on a directory, read '" + str + "'");
            }
            return Uri.parse("file://" + str);
        }
        return parse;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public InputStream getInputStream(String str) {
        try {
            InputStream openInputStream = this.reactContext.getContentResolver().openInputStream(getFileUri(str, false));
            if (openInputStream != null) {
                return openInputStream;
            }
            throw new com.rnfs.d("ENOENT", "ENOENT: could not open an input stream for '" + str + "'");
        } catch (FileNotFoundException e10) {
            throw new com.rnfs.d("ENOENT", "ENOENT: " + e10.getMessage() + ", open '" + str + "'");
        }
    }

    private static byte[] getInputStreamBytes(InputStream inputStream) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
        while (true) {
            try {
                int read = inputStream.read(bArr);
                if (read == -1) {
                    break;
                }
                byteArrayOutputStream.write(bArr, 0, read);
            } catch (Throwable th2) {
                try {
                    byteArrayOutputStream.close();
                } catch (IOException unused) {
                }
                throw th2;
            }
        }
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        try {
            byteArrayOutputStream.close();
        } catch (IOException unused2) {
        }
        return byteArray;
    }

    private String getOriginalFilepath(String str, boolean z10) {
        Uri fileUri = getFileUri(str, z10);
        if (fileUri.getScheme().equals("content")) {
            try {
                Cursor query = this.reactContext.getContentResolver().query(fileUri, null, null, null, null);
                if (query.moveToFirst()) {
                    str = query.getString(query.getColumnIndexOrThrow("_data"));
                }
                query.close();
            } catch (IllegalArgumentException unused) {
            }
        }
        return str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public OutputStream getOutputStream(String str, boolean z10) {
        String writeAccessByAPILevel;
        Uri fileUri = getFileUri(str, false);
        try {
            ContentResolver contentResolver = this.reactContext.getContentResolver();
            if (z10) {
                writeAccessByAPILevel = "wa";
            } else {
                writeAccessByAPILevel = getWriteAccessByAPILevel();
            }
            OutputStream openOutputStream = contentResolver.openOutputStream(fileUri, writeAccessByAPILevel);
            if (openOutputStream != null) {
                return openOutputStream;
            }
            throw new com.rnfs.d("ENOENT", "ENOENT: could not open an output stream for '" + str + "'");
        } catch (FileNotFoundException e10) {
            throw new com.rnfs.d("ENOENT", "ENOENT: " + e10.getMessage() + ", open '" + str + "'");
        }
    }

    private int getResIdentifier(String str) {
        String str2;
        boolean z10 = true;
        String substring = str.substring(str.lastIndexOf(".") + 1);
        String substring2 = str.substring(0, str.lastIndexOf("."));
        if (!substring.equals("png") && !substring.equals("jpg") && !substring.equals("jpeg") && !substring.equals("bmp") && !substring.equals("gif") && !substring.equals("webp") && !substring.equals("psd") && !substring.equals("svg") && !substring.equals("tiff")) {
            z10 = false;
        }
        Resources resources = getReactApplicationContext().getResources();
        if (z10) {
            str2 = "drawable";
        } else {
            str2 = "raw";
        }
        return resources.getIdentifier(substring2, str2, getReactApplicationContext().getPackageName());
    }

    private String getWriteAccessByAPILevel() {
        if (Build.VERSION.SDK_INT <= 28) {
            return "w";
        }
        return "rwt";
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void reject(Promise promise, String str, Exception exc) {
        if (exc instanceof FileNotFoundException) {
            rejectFileNotFound(promise, str);
        } else if (exc instanceof com.rnfs.d) {
            com.rnfs.d dVar = (com.rnfs.d) exc;
            promise.reject(dVar.a(), dVar.getMessage());
        } else {
            promise.reject((String) null, exc.getMessage());
        }
    }

    private void rejectFileIsDirectory(Promise promise) {
        promise.reject("EISDIR", "EISDIR: illegal operation on a directory, read");
    }

    private void rejectFileNotFound(Promise promise, String str) {
        promise.reject("ENOENT", "ENOENT: no such file or directory, open '" + str + "'");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void sendEvent(ReactContext reactContext, String str, WritableMap writableMap) {
        ((RCTNativeAppEventEmitter) reactContext.getJSModule(RCTNativeAppEventEmitter.class)).emit(str, writableMap);
    }

    @ReactMethod
    public void addListener(String str) {
    }

    @ReactMethod
    public void appendFile(String str, String str2, Promise promise) {
        try {
            byte[] decode = Base64.decode(str2, 0);
            OutputStream outputStream = getOutputStream(str, true);
            outputStream.write(decode);
            outputStream.close();
            promise.resolve(null);
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void copyFile(String str, String str2, ReadableMap readableMap, Promise promise) {
        new b(promise, str).execute(str, str2);
    }

    @ReactMethod
    public void copyFileAssets(String str, String str2, Promise promise) {
        try {
            copyInputStream(getReactApplicationContext().getAssets().open(str), str, str2, promise);
        } catch (IOException unused) {
            reject(promise, str, new Exception(String.format("Asset '%s' could not be opened", str)));
        }
    }

    @ReactMethod
    public void copyFileRes(String str, String str2, Promise promise) {
        try {
            copyInputStream(getReactApplicationContext().getResources().openRawResource(getResIdentifier(str)), str, str2, promise);
        } catch (Exception unused) {
            reject(promise, str, new Exception(String.format("Res '%s' could not be opened", str)));
        }
    }

    @ReactMethod
    public void downloadFile(ReadableMap readableMap, Promise promise) {
        try {
            File file = new File(readableMap.getString("toFile"));
            URL url = new URL(readableMap.getString("fromUrl"));
            int i10 = readableMap.getInt("jobId");
            ReadableMap map = readableMap.getMap("headers");
            int i11 = readableMap.getInt("progressInterval");
            int i12 = readableMap.getInt("progressDivider");
            int i13 = readableMap.getInt("readTimeout");
            int i14 = readableMap.getInt("connectionTimeout");
            boolean z10 = readableMap.getBoolean("hasBeginCallback");
            boolean z11 = readableMap.getBoolean("hasProgressCallback");
            com.rnfs.a aVar = new com.rnfs.a();
            aVar.f17787a = url;
            aVar.f17788b = file;
            aVar.f17789c = map;
            aVar.f17790d = i11;
            aVar.f17791e = i12;
            aVar.f17792f = i13;
            aVar.f17793g = i14;
            aVar.f17794h = new c(i10, promise, readableMap);
            if (z10) {
                aVar.f17795i = new d(i10);
            }
            if (z11) {
                aVar.f17796j = new e(i10);
            }
            com.rnfs.c cVar = new com.rnfs.c();
            cVar.execute(aVar);
            this.downloaders.put(i10, cVar);
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, readableMap.getString("toFile"), e10);
        }
    }

    @ReactMethod
    public void exists(String str, Promise promise) {
        try {
            promise.resolve(Boolean.valueOf(new File(str).exists()));
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void existsAssets(String str, Promise promise) {
        try {
            AssetManager assets = getReactApplicationContext().getAssets();
            try {
                String[] list = assets.list(str);
                if (list != null && list.length > 0) {
                    promise.resolve(Boolean.TRUE);
                    return;
                }
            } catch (Exception unused) {
            }
            InputStream inputStream = null;
            try {
                inputStream = assets.open(str);
                promise.resolve(Boolean.TRUE);
                if (inputStream == null) {
                    return;
                }
            } catch (Exception unused2) {
                promise.resolve(Boolean.FALSE);
                if (inputStream == null) {
                    return;
                }
            }
            try {
                inputStream.close();
            } catch (Exception unused3) {
            }
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void existsRes(String str, Promise promise) {
        try {
            if (getResIdentifier(str) > 0) {
                promise.resolve(Boolean.TRUE);
            } else {
                promise.resolve(Boolean.FALSE);
            }
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void getAllExternalFilesDirs(Promise promise) {
        File[] externalFilesDirs = getReactApplicationContext().getExternalFilesDirs(null);
        WritableArray createArray = Arguments.createArray();
        for (File file : externalFilesDirs) {
            if (file != null) {
                createArray.pushString(file.getAbsolutePath());
            }
        }
        promise.resolve(createArray);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    public Map<String, Object> getConstants() {
        HashMap hashMap = new HashMap();
        hashMap.put(RNFSDocumentDirectory, 0);
        hashMap.put(RNFSDocumentDirectoryPath, getReactApplicationContext().getFilesDir().getAbsolutePath());
        hashMap.put(RNFSTemporaryDirectoryPath, getReactApplicationContext().getCacheDir().getAbsolutePath());
        hashMap.put(RNFSPicturesDirectoryPath, Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES).getAbsolutePath());
        hashMap.put(RNFSCachesDirectoryPath, getReactApplicationContext().getCacheDir().getAbsolutePath());
        hashMap.put(RNFSDownloadDirectoryPath, Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath());
        hashMap.put(RNFSFileTypeRegular, 0);
        hashMap.put(RNFSFileTypeDirectory, 1);
        File externalStorageDirectory = Environment.getExternalStorageDirectory();
        if (externalStorageDirectory != null) {
            hashMap.put(RNFSExternalStorageDirectoryPath, externalStorageDirectory.getAbsolutePath());
        } else {
            hashMap.put(RNFSExternalStorageDirectoryPath, null);
        }
        File externalFilesDir = getReactApplicationContext().getExternalFilesDir(null);
        if (externalFilesDir != null) {
            hashMap.put(RNFSExternalDirectoryPath, externalFilesDir.getAbsolutePath());
        } else {
            hashMap.put(RNFSExternalDirectoryPath, null);
        }
        File externalCacheDir = getReactApplicationContext().getExternalCacheDir();
        if (externalCacheDir != null) {
            hashMap.put(RNFSExternalCachesDirectoryPath, externalCacheDir.getAbsolutePath());
            return hashMap;
        }
        hashMap.put(RNFSExternalCachesDirectoryPath, null);
        return hashMap;
    }

    @ReactMethod
    public void getFSInfo(Promise promise) {
        StatFs statFs = new StatFs(Environment.getDataDirectory().getPath());
        StatFs statFs2 = new StatFs(Environment.getExternalStorageDirectory().getPath());
        long totalBytes = statFs.getTotalBytes();
        long freeBytes = statFs.getFreeBytes();
        long totalBytes2 = statFs2.getTotalBytes();
        long freeBytes2 = statFs2.getFreeBytes();
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("totalSpace", totalBytes);
        createMap.putDouble("freeSpace", freeBytes);
        createMap.putDouble("totalSpaceEx", totalBytes2);
        createMap.putDouble("freeSpaceEx", freeBytes2);
        promise.resolve(createMap);
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void hash(String str, String str2, Promise promise) {
        int i10;
        try {
            HashMap hashMap = new HashMap();
            hashMap.put("md5", "MD5");
            hashMap.put("sha1", "SHA-1");
            hashMap.put("sha224", "SHA-224");
            hashMap.put("sha256", "SHA-256");
            hashMap.put("sha384", "SHA-384");
            hashMap.put("sha512", "SHA-512");
            if (hashMap.containsKey(str2)) {
                File file = new File(str);
                if (file.isDirectory()) {
                    rejectFileIsDirectory(promise);
                    return;
                } else if (!file.exists()) {
                    rejectFileNotFound(promise, str);
                    return;
                } else {
                    MessageDigest messageDigest = MessageDigest.getInstance((String) hashMap.get(str2));
                    FileInputStream fileInputStream = new FileInputStream(str);
                    byte[] bArr = new byte[10240];
                    while (true) {
                        int read = fileInputStream.read(bArr);
                        if (read == -1) {
                            break;
                        }
                        messageDigest.update(bArr, 0, read);
                    }
                    StringBuilder sb2 = new StringBuilder();
                    for (byte b10 : messageDigest.digest()) {
                        sb2.append(String.format("%02x", Byte.valueOf(b10)));
                    }
                    promise.resolve(sb2.toString());
                    return;
                }
            }
            throw new Exception("Invalid hash algorithm");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void mkdir(String str, ReadableMap readableMap, Promise promise) {
        try {
            File file = new File(str);
            file.mkdirs();
            if (file.exists()) {
                promise.resolve(null);
                return;
            }
            throw new Exception("Directory could not be created");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void moveFile(String str, String str2, ReadableMap readableMap, Promise promise) {
        try {
            File file = new File(str);
            if (!file.renameTo(new File(str2))) {
                new a(file, promise, str).execute(str, str2);
            } else {
                promise.resolve(Boolean.TRUE);
            }
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void pathForBundle(String str, Promise promise) {
    }

    @ReactMethod
    public void pathForGroup(String str, Promise promise) {
    }

    @ReactMethod
    public void read(String str, int i10, int i11, Promise promise) {
        try {
            InputStream inputStream = getInputStream(str);
            byte[] bArr = new byte[i10];
            inputStream.skip(i11);
            promise.resolve(Base64.encodeToString(bArr, 0, inputStream.read(bArr, 0, i10), 2));
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void readDir(String str, Promise promise) {
        try {
            File file = new File(str);
            if (file.exists()) {
                File[] listFiles = file.listFiles();
                WritableArray createArray = Arguments.createArray();
                for (File file2 : listFiles) {
                    WritableMap createMap = Arguments.createMap();
                    createMap.putDouble("mtime", file2.lastModified() / 1000.0d);
                    createMap.putString(StackTraceHelper.NAME_KEY, file2.getName());
                    createMap.putString("path", file2.getAbsolutePath());
                    createMap.putDouble("size", file2.length());
                    createMap.putInt("type", file2.isDirectory() ? 1 : 0);
                    createArray.pushMap(createMap);
                }
                promise.resolve(createArray);
                return;
            }
            throw new Exception("Folder does not exist");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void readDirAssets(String str, Promise promise) {
        int i10;
        try {
            AssetManager assets = getReactApplicationContext().getAssets();
            String[] list = assets.list(str);
            WritableArray createArray = Arguments.createArray();
            for (String str2 : list) {
                WritableMap createMap = Arguments.createMap();
                createMap.putString(StackTraceHelper.NAME_KEY, str2);
                if (!str.isEmpty()) {
                    str2 = String.format("%s/%s", str, str2);
                }
                createMap.putString("path", str2);
                int i11 = 1;
                try {
                    AssetFileDescriptor openFd = assets.openFd(str2);
                    if (openFd != null) {
                        i10 = (int) openFd.getLength();
                        try {
                            openFd.close();
                            i11 = 0;
                        } catch (IOException e10) {
                            e = e10;
                            i11 = 1 ^ e.getMessage().contains("compressed");
                            createMap.putInt("size", i10);
                            createMap.putInt("type", i11);
                            createArray.pushMap(createMap);
                        }
                    } else {
                        i10 = 0;
                    }
                } catch (IOException e11) {
                    e = e11;
                    i10 = 0;
                }
                createMap.putInt("size", i10);
                createMap.putInt("type", i11);
                createArray.pushMap(createMap);
            }
            promise.resolve(createArray);
        } catch (IOException e12) {
            reject(promise, str, e12);
        }
    }

    @ReactMethod
    public void readFile(String str, Promise promise) {
        try {
            promise.resolve(Base64.encodeToString(getInputStreamBytes(getInputStream(str)), 2));
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:17:0x003f -> B:26:0x0044). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:18:0x0041 -> B:26:0x0044). Please submit an issue!!! */
    @ReactMethod
    public void readFileAssets(String str, Promise promise) {
        InputStream inputStream = null;
        try {
            try {
                try {
                    inputStream = getReactApplicationContext().getAssets().open(str, 0);
                } catch (Throwable th2) {
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (IOException unused) {
                        }
                    }
                    throw th2;
                }
            } catch (Exception e10) {
                e10.printStackTrace();
                reject(promise, str, e10);
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            if (inputStream == null) {
                reject(promise, str, new Exception("Failed to open file"));
                if (inputStream != null) {
                    try {
                        inputStream.close();
                        return;
                    } catch (IOException unused2) {
                        return;
                    }
                }
                return;
            }
            byte[] bArr = new byte[inputStream.available()];
            inputStream.read(bArr);
            promise.resolve(Base64.encodeToString(bArr, 2));
            inputStream.close();
        } catch (IOException unused3) {
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:17:0x0042 -> B:27:0x0047). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:18:0x0044 -> B:27:0x0047). Please submit an issue!!! */
    @ReactMethod
    public void readFileRes(String str, Promise promise) {
        InputStream inputStream = null;
        try {
            try {
                try {
                    inputStream = getReactApplicationContext().getResources().openRawResource(getResIdentifier(str));
                } catch (IOException unused) {
                    return;
                }
            } catch (Exception e10) {
                e10.printStackTrace();
                reject(promise, str, e10);
                if (inputStream != null) {
                    inputStream.close();
                }
            }
            if (inputStream == null) {
                reject(promise, str, new Exception("Failed to open file"));
                if (inputStream != null) {
                    try {
                        inputStream.close();
                        return;
                    } catch (IOException unused2) {
                        return;
                    }
                }
                return;
            }
            byte[] bArr = new byte[inputStream.available()];
            inputStream.read(bArr);
            promise.resolve(Base64.encodeToString(bArr, 2));
            inputStream.close();
        } catch (Throwable th2) {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused3) {
                }
            }
            throw th2;
        }
    }

    @ReactMethod
    public void removeListeners(Integer num) {
    }

    @ReactMethod
    public void scanFile(String str, Promise promise) {
        MediaScannerConnection.scanFile(getReactApplicationContext(), new String[]{str}, null, new i(promise));
    }

    @ReactMethod
    public void setReadable(String str, Boolean bool, Boolean bool2, Promise promise) {
        try {
            File file = new File(str);
            if (file.exists()) {
                file.setReadable(bool.booleanValue(), bool2.booleanValue());
                promise.resolve(Boolean.TRUE);
                return;
            }
            throw new Exception("File does not exist");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void stat(String str, Promise promise) {
        try {
            String originalFilepath = getOriginalFilepath(str, true);
            File file = new File(originalFilepath);
            if (file.exists()) {
                WritableMap createMap = Arguments.createMap();
                createMap.putInt("ctime", (int) (file.lastModified() / 1000));
                createMap.putInt("mtime", (int) (file.lastModified() / 1000));
                createMap.putDouble("size", file.length());
                createMap.putInt("type", file.isDirectory() ? 1 : 0);
                createMap.putString("originalFilepath", originalFilepath);
                promise.resolve(createMap);
                return;
            }
            throw new Exception("File does not exist");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void stopDownload(int i10) {
        com.rnfs.c cVar = this.downloaders.get(i10);
        if (cVar != null) {
            cVar.g();
        }
    }

    @ReactMethod
    public void stopUpload(int i10) {
        com.rnfs.i iVar = this.uploaders.get(i10);
        if (iVar != null) {
            iVar.f();
        }
    }

    @ReactMethod
    public void touch(String str, double d10, double d11, Promise promise) {
        try {
            promise.resolve(Boolean.valueOf(new File(str).setLastModified((long) d10)));
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void unlink(String str, Promise promise) {
        try {
            File file = new File(str);
            if (file.exists()) {
                DeleteRecursive(file);
                promise.resolve(null);
                return;
            }
            throw new Exception("File does not exist");
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void uploadFiles(ReadableMap readableMap, Promise promise) {
        try {
            ReadableArray array = readableMap.getArray("files");
            URL url = new URL(readableMap.getString("toUrl"));
            int i10 = readableMap.getInt("jobId");
            ReadableMap map = readableMap.getMap("headers");
            ReadableMap map2 = readableMap.getMap("fields");
            String string = readableMap.getString("method");
            boolean z10 = readableMap.getBoolean("binaryStreamOnly");
            boolean z11 = readableMap.getBoolean("hasBeginCallback");
            boolean z12 = readableMap.getBoolean("hasProgressCallback");
            ArrayList arrayList = new ArrayList();
            com.rnfs.g gVar = new com.rnfs.g();
            for (int i11 = 0; i11 < array.size(); i11++) {
                arrayList.add(array.getMap(i11));
            }
            gVar.f17805a = url;
            gVar.f17806b = arrayList;
            gVar.f17808d = map;
            gVar.f17810f = string;
            gVar.f17809e = map2;
            gVar.f17807c = z10;
            gVar.f17811g = new f(i10, promise, readableMap);
            if (z11) {
                gVar.f17813i = new g(i10);
            }
            if (z12) {
                gVar.f17812h = new h(i10);
            }
            com.rnfs.i iVar = new com.rnfs.i();
            iVar.execute(gVar);
            this.uploaders.put(i10, iVar);
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, readableMap.getString("toUrl"), e10);
        }
    }

    @ReactMethod
    public void write(String str, String str2, int i10, Promise promise) {
        try {
            byte[] decode = Base64.decode(str2, 0);
            if (i10 < 0) {
                OutputStream outputStream = getOutputStream(str, true);
                outputStream.write(decode);
                outputStream.close();
            } else {
                RandomAccessFile randomAccessFile = new RandomAccessFile(str, "rw");
                randomAccessFile.seek(i10);
                randomAccessFile.write(decode);
                randomAccessFile.close();
            }
            promise.resolve(null);
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }

    @ReactMethod
    public void writeFile(String str, String str2, ReadableMap readableMap, Promise promise) {
        try {
            byte[] decode = Base64.decode(str2, 0);
            OutputStream outputStream = getOutputStream(str, false);
            outputStream.write(decode);
            outputStream.close();
            promise.resolve(null);
        } catch (Exception e10) {
            e10.printStackTrace();
            reject(promise, str, e10);
        }
    }
}
