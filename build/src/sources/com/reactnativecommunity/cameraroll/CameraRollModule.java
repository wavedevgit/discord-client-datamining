package com.reactnativecommunity.cameraroll;

import android.content.ContentResolver;
import android.content.ContentUris;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.database.Cursor;
import android.graphics.BitmapFactory;
import android.media.MediaMetadataRetriever;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Environment;
import android.provider.MediaStore;
import android.text.TextUtils;
import com.facebook.react.bridge.GuardedAsyncTask;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.module.annotations.ReactModule;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import org.webrtc.MediaStreamTrack;
@ReactModule(name = CameraRollModule.NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CameraRollModule extends ReactContextBaseJavaModule {
    private static final String ASSET_TYPE_ALL = "All";
    private static final String ASSET_TYPE_PHOTOS = "Photos";
    private static final String ASSET_TYPE_VIDEOS = "Videos";
    private static final String ERROR_UNABLE_TO_DELETE = "E_UNABLE_TO_DELETE";
    private static final String ERROR_UNABLE_TO_FILTER = "E_UNABLE_TO_FILTER";
    private static final String ERROR_UNABLE_TO_LOAD = "E_UNABLE_TO_LOAD";
    private static final String ERROR_UNABLE_TO_LOAD_PERMISSION = "E_UNABLE_TO_LOAD_PERMISSION";
    private static final String ERROR_UNABLE_TO_SAVE = "E_UNABLE_TO_SAVE";
    public static final String NAME = "RNCCameraRoll";
    private static final String[] PROJECTION = {"_id", "mime_type", "bucket_display_name", "datetaken", "width", "height", "longitude", "latitude", "_data"};
    private static final String SELECTION_BUCKET = "bucket_display_name = ?";
    private static final String SELECTION_DATE_TAKEN = "datetaken < ?";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a extends GuardedAsyncTask {

        /* renamed from: a  reason: collision with root package name */
        private final Context f17392a;

        /* renamed from: b  reason: collision with root package name */
        private final ReadableArray f17393b;

        /* renamed from: c  reason: collision with root package name */
        private final Promise f17394c;

        public a(ReactContext reactContext, ReadableArray readableArray, Promise promise) {
            super(reactContext);
            this.f17392a = reactContext;
            this.f17393b = readableArray;
            this.f17394c = promise;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.bridge.GuardedAsyncTask
        public void doInBackgroundGuarded(Void... voidArr) {
            ContentResolver contentResolver = this.f17392a.getContentResolver();
            String[] strArr = {"_id"};
            String str = "?";
            for (int i10 = 1; i10 < this.f17393b.size(); i10++) {
                str = str + ", ?";
            }
            String str2 = "_data IN (" + str + ")";
            Uri uri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
            String[] strArr2 = new String[this.f17393b.size()];
            int i11 = 0;
            for (int i12 = 0; i12 < this.f17393b.size(); i12++) {
                strArr2[i12] = Uri.parse(this.f17393b.getString(i12)).getPath();
            }
            Cursor query = contentResolver.query(uri, strArr, str2, strArr2, null);
            while (query.moveToNext()) {
                if (contentResolver.delete(ContentUris.withAppendedId(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, query.getLong(query.getColumnIndexOrThrow("_id"))), null, null) == 1) {
                    i11++;
                }
            }
            query.close();
            if (i11 == this.f17393b.size()) {
                this.f17394c.resolve(null);
                return;
            }
            this.f17394c.reject(CameraRollModule.ERROR_UNABLE_TO_DELETE, "Could not delete all media, only deleted " + i11 + " photos.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class b extends GuardedAsyncTask {

        /* renamed from: a  reason: collision with root package name */
        private final Context f17395a;

        /* renamed from: b  reason: collision with root package name */
        private final int f17396b;

        /* renamed from: c  reason: collision with root package name */
        private final String f17397c;

        /* renamed from: d  reason: collision with root package name */
        private final String f17398d;

        /* renamed from: e  reason: collision with root package name */
        private final ReadableArray f17399e;

        /* renamed from: f  reason: collision with root package name */
        private final Promise f17400f;

        /* renamed from: g  reason: collision with root package name */
        private final String f17401g;

        private b(ReactContext reactContext, int i10, String str, String str2, ReadableArray readableArray, String str3, Promise promise) {
            super(reactContext);
            this.f17395a = reactContext;
            this.f17396b = i10;
            this.f17397c = str;
            this.f17398d = str2;
            this.f17399e = readableArray;
            this.f17400f = promise;
            this.f17401g = str3;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.bridge.GuardedAsyncTask
        public void doInBackgroundGuarded(Void... voidArr) {
            StringBuilder sb2 = new StringBuilder("1");
            ArrayList arrayList = new ArrayList();
            if (!TextUtils.isEmpty(this.f17398d)) {
                sb2.append(" AND bucket_display_name = ?");
                arrayList.add(this.f17398d);
            }
            if (this.f17401g.equals(CameraRollModule.ASSET_TYPE_PHOTOS)) {
                sb2.append(" AND media_type = 1");
            } else if (this.f17401g.equals(CameraRollModule.ASSET_TYPE_VIDEOS)) {
                sb2.append(" AND media_type = 3");
            } else if (this.f17401g.equals(CameraRollModule.ASSET_TYPE_ALL)) {
                sb2.append(" AND media_type IN (3,1)");
            } else {
                this.f17400f.reject(CameraRollModule.ERROR_UNABLE_TO_FILTER, "Invalid filter option: '" + this.f17401g + "'. Expected one of '" + CameraRollModule.ASSET_TYPE_PHOTOS + "', '" + CameraRollModule.ASSET_TYPE_VIDEOS + "' or '" + CameraRollModule.ASSET_TYPE_ALL + "'.");
                return;
            }
            ReadableArray readableArray = this.f17399e;
            if (readableArray != null && readableArray.size() > 0) {
                sb2.append(" AND mime_type IN (");
                for (int i10 = 0; i10 < this.f17399e.size(); i10++) {
                    sb2.append("?,");
                    arrayList.add(this.f17399e.getString(i10));
                }
                sb2.replace(sb2.length() - 1, sb2.length(), ")");
            }
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            ContentResolver contentResolver = this.f17395a.getContentResolver();
            try {
                String str = "limit=" + (this.f17396b + 1);
                if (!TextUtils.isEmpty(this.f17397c)) {
                    str = "limit=" + this.f17397c + "," + (this.f17396b + 1);
                }
                Cursor query = contentResolver.query(MediaStore.Files.getContentUri("external").buildUpon().encodedQuery(str).build(), CameraRollModule.PROJECTION, sb2.toString(), (String[]) arrayList.toArray(new String[arrayList.size()]), "date_added DESC, date_modified DESC");
                if (query != null) {
                    CameraRollModule.putEdges(contentResolver, query, writableNativeMap, this.f17396b);
                    CameraRollModule.putPageInfo(query, writableNativeMap, this.f17396b, TextUtils.isEmpty(this.f17397c) ? 0 : Integer.parseInt(this.f17397c));
                    query.close();
                    this.f17400f.resolve(writableNativeMap);
                    return;
                }
                this.f17400f.reject("E_UNABLE_TO_LOAD", "Could not get media");
            } catch (SecurityException e10) {
                this.f17400f.reject(CameraRollModule.ERROR_UNABLE_TO_LOAD_PERMISSION, "Could not get media: need READ_EXTERNAL_STORAGE permission", e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class c extends GuardedAsyncTask {

        /* renamed from: a  reason: collision with root package name */
        private final Context f17402a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f17403b;

        /* renamed from: c  reason: collision with root package name */
        private final Promise f17404c;

        /* renamed from: d  reason: collision with root package name */
        private final ReadableMap f17405d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a implements MediaScannerConnection.OnScanCompletedListener {
            a() {
            }

            @Override // android.media.MediaScannerConnection.OnScanCompletedListener
            public void onScanCompleted(String str, Uri uri) {
                if (uri != null) {
                    c.this.f17404c.resolve(uri.toString());
                } else {
                    c.this.f17404c.reject(CameraRollModule.ERROR_UNABLE_TO_SAVE, "Could not add image to gallery");
                }
            }
        }

        public c(ReactContext reactContext, Uri uri, ReadableMap readableMap, Promise promise) {
            super(reactContext);
            this.f17402a = reactContext;
            this.f17403b = uri;
            this.f17404c = promise;
            this.f17405d = readableMap;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.react.bridge.GuardedAsyncTask
        public void doInBackgroundGuarded(Void... voidArr) {
            Throwable th2;
            FileChannel fileChannel;
            IOException iOException;
            File externalStoragePublicDirectory;
            String str = "";
            File file = new File(this.f17403b.getPath());
            FileChannel fileChannel2 = null;
            try {
                if ("mov".equals(this.f17405d.getString("type"))) {
                    externalStoragePublicDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_MOVIES);
                } else {
                    externalStoragePublicDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
                }
                if (!"".equals(this.f17405d.getString("album"))) {
                    File file2 = new File(externalStoragePublicDirectory, this.f17405d.getString("album"));
                    if (!file2.exists() && !file2.mkdirs()) {
                        this.f17404c.reject("E_UNABLE_TO_LOAD", "Album Directory not created. Did you request WRITE_EXTERNAL_STORAGE?");
                        return;
                    }
                    externalStoragePublicDirectory = file2;
                }
            } catch (IOException e10) {
                iOException = e10;
                fileChannel = null;
            } catch (Throwable th3) {
                th2 = th3;
                fileChannel = null;
            }
            if (!externalStoragePublicDirectory.isDirectory()) {
                this.f17404c.reject("E_UNABLE_TO_LOAD", "External media storage directory not available");
                return;
            }
            File file3 = new File(externalStoragePublicDirectory, file.getName());
            String name = file.getName();
            int i10 = 0;
            if (name.indexOf(46) >= 0) {
                String substring = name.substring(0, name.lastIndexOf(46));
                String substring2 = name.substring(name.lastIndexOf(46));
                name = substring;
                str = substring2;
            }
            while (!file3.createNewFile()) {
                file3 = new File(externalStoragePublicDirectory, name + "_" + i10 + str);
                i10++;
            }
            FileChannel channel = new FileInputStream(file).getChannel();
            try {
                fileChannel = new FileOutputStream(file3).getChannel();
            } catch (IOException e11) {
                iOException = e11;
                fileChannel = null;
            } catch (Throwable th4) {
                th2 = th4;
                fileChannel = null;
            }
            try {
                try {
                    fileChannel.transferFrom(channel, 0L, channel.size());
                    channel.close();
                    fileChannel.close();
                    MediaScannerConnection.scanFile(this.f17402a, new String[]{file3.getAbsolutePath()}, null, new a());
                    if (channel.isOpen()) {
                        try {
                            channel.close();
                        } catch (IOException e12) {
                            p8.a.n(ReactConstants.TAG, "Could not close input channel", e12);
                        }
                    }
                    if (!fileChannel.isOpen()) {
                        return;
                    }
                } catch (IOException e13) {
                    iOException = e13;
                    fileChannel2 = channel;
                    try {
                        this.f17404c.reject(iOException);
                        if (fileChannel2 != null && fileChannel2.isOpen()) {
                            try {
                                fileChannel2.close();
                            } catch (IOException e14) {
                                p8.a.n(ReactConstants.TAG, "Could not close input channel", e14);
                            }
                        }
                        if (fileChannel == null || !fileChannel.isOpen()) {
                            return;
                        }
                        fileChannel.close();
                    } catch (Throwable th5) {
                        th2 = th5;
                        if (fileChannel2 != null && fileChannel2.isOpen()) {
                            try {
                                fileChannel2.close();
                            } catch (IOException e15) {
                                p8.a.n(ReactConstants.TAG, "Could not close input channel", e15);
                            }
                        }
                        if (fileChannel != null && fileChannel.isOpen()) {
                            try {
                                fileChannel.close();
                            } catch (IOException e16) {
                                p8.a.n(ReactConstants.TAG, "Could not close output channel", e16);
                            }
                        }
                        throw th2;
                    }
                } catch (Throwable th6) {
                    th2 = th6;
                    fileChannel2 = channel;
                    if (fileChannel2 != null) {
                        fileChannel2.close();
                    }
                    if (fileChannel != null) {
                        fileChannel.close();
                    }
                    throw th2;
                }
                fileChannel.close();
            } catch (IOException e17) {
                p8.a.n(ReactConstants.TAG, "Could not close output channel", e17);
            }
        }
    }

    public CameraRollModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    private static void putBasicNodeInfo(Cursor cursor, WritableMap writableMap, int i10, int i11, int i12) {
        writableMap.putString("type", cursor.getString(i10));
        writableMap.putString("group_name", cursor.getString(i11));
        writableMap.putDouble("timestamp", cursor.getLong(i12) / 1000.0d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void putEdges(ContentResolver contentResolver, Cursor cursor, WritableMap writableMap, int i10) {
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        cursor.moveToFirst();
        int columnIndex = cursor.getColumnIndex("_id");
        int columnIndex2 = cursor.getColumnIndex("mime_type");
        int columnIndex3 = cursor.getColumnIndex("bucket_display_name");
        int columnIndex4 = cursor.getColumnIndex("datetaken");
        int columnIndex5 = cursor.getColumnIndex("width");
        int columnIndex6 = cursor.getColumnIndex("height");
        int columnIndex7 = cursor.getColumnIndex("longitude");
        int columnIndex8 = cursor.getColumnIndex("latitude");
        int columnIndex9 = cursor.getColumnIndex("_data");
        int i11 = 0;
        while (i11 < i10 && !cursor.isAfterLast()) {
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            WritableNativeMap writableNativeMap2 = new WritableNativeMap();
            if (putImageInfo(contentResolver, cursor, writableNativeMap2, columnIndex, columnIndex5, columnIndex6, columnIndex9, columnIndex2)) {
                putBasicNodeInfo(cursor, writableNativeMap2, columnIndex2, columnIndex3, columnIndex4);
                putLocationInfo(cursor, writableNativeMap2, columnIndex7, columnIndex8);
                writableNativeMap.putMap("node", writableNativeMap2);
                writableNativeArray.pushMap(writableNativeMap);
            } else {
                i11--;
            }
            cursor.moveToNext();
            i11++;
        }
        writableMap.putArray("edges", writableNativeArray);
    }

    private static boolean putImageInfo(ContentResolver contentResolver, Cursor cursor, WritableMap writableMap, int i10, int i11, int i12, int i13, int i14) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        Uri parse = Uri.parse("file://" + cursor.getString(i13));
        String name = new File(cursor.getString(i13)).getName();
        writableNativeMap.putString("uri", parse.toString());
        writableNativeMap.putString("filename", name);
        float f10 = cursor.getInt(i11);
        float f11 = cursor.getInt(i12);
        String string = cursor.getString(i14);
        if (string != null && string.startsWith(MediaStreamTrack.VIDEO_TRACK_KIND)) {
            try {
                AssetFileDescriptor openAssetFileDescriptor = contentResolver.openAssetFileDescriptor(parse, "r");
                MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
                mediaMetadataRetriever.setDataSource(openAssetFileDescriptor.getFileDescriptor());
                if (f10 <= 0.0f || f11 <= 0.0f) {
                    try {
                        f10 = Integer.parseInt(mediaMetadataRetriever.extractMetadata(18));
                        f11 = Integer.parseInt(mediaMetadataRetriever.extractMetadata(19));
                    } catch (NumberFormatException e10) {
                        p8.a.n(ReactConstants.TAG, "Number format exception occurred while trying to fetch video metadata for " + parse.toString(), e10);
                        mediaMetadataRetriever.release();
                        openAssetFileDescriptor.close();
                        return false;
                    }
                }
                writableNativeMap.putInt("playableDuration", Integer.parseInt(mediaMetadataRetriever.extractMetadata(9)) / 1000);
                mediaMetadataRetriever.release();
                openAssetFileDescriptor.close();
            } catch (Exception e11) {
                p8.a.n(ReactConstants.TAG, "Could not get video metadata for " + parse.toString(), e11);
                return false;
            }
        }
        if (f10 <= 0.0f || f11 <= 0.0f) {
            try {
                AssetFileDescriptor openAssetFileDescriptor2 = contentResolver.openAssetFileDescriptor(parse, "r");
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inJustDecodeBounds = true;
                BitmapFactory.decodeFileDescriptor(openAssetFileDescriptor2.getFileDescriptor(), null, options);
                f10 = options.outWidth;
                f11 = options.outHeight;
                openAssetFileDescriptor2.close();
            } catch (IOException e12) {
                p8.a.n(ReactConstants.TAG, "Could not get width/height for " + parse.toString(), e12);
                return false;
            }
        }
        writableNativeMap.putDouble("width", f10);
        writableNativeMap.putDouble("height", f11);
        writableMap.putMap("image", writableNativeMap);
        return true;
    }

    private static void putLocationInfo(Cursor cursor, WritableMap writableMap, int i10, int i11) {
        double d10 = cursor.getDouble(i10);
        double d11 = cursor.getDouble(i11);
        if (d10 <= 0.0d && d11 <= 0.0d) {
            return;
        }
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putDouble("longitude", d10);
        writableNativeMap.putDouble("latitude", d11);
        writableMap.putMap("location", writableNativeMap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void putPageInfo(Cursor cursor, WritableMap writableMap, int i10, int i11) {
        boolean z10;
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        if (i10 < cursor.getCount()) {
            z10 = true;
        } else {
            z10 = false;
        }
        writableNativeMap.putBoolean("has_next_page", z10);
        if (i10 < cursor.getCount()) {
            writableNativeMap.putString("end_cursor", Integer.toString(i11 + i10));
        }
        writableMap.putMap("page_info", writableNativeMap);
    }

    @ReactMethod
    public void deletePhotos(ReadableArray readableArray, Promise promise) {
        if (readableArray.size() == 0) {
            promise.reject(ERROR_UNABLE_TO_DELETE, "Need at least one URI to delete");
        } else {
            new a(getReactApplicationContext(), readableArray, promise).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
        }
    }

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void getPhotos(ReadableMap readableMap, Promise promise) {
        String str;
        String str2;
        String str3;
        int i10 = readableMap.getInt("first");
        ReadableArray readableArray = null;
        if (readableMap.hasKey("after")) {
            str = readableMap.getString("after");
        } else {
            str = null;
        }
        if (readableMap.hasKey("groupName")) {
            str2 = readableMap.getString("groupName");
        } else {
            str2 = null;
        }
        if (readableMap.hasKey("assetType")) {
            str3 = readableMap.getString("assetType");
        } else {
            str3 = ASSET_TYPE_PHOTOS;
        }
        String str4 = str3;
        if (readableMap.hasKey("mimeTypes")) {
            readableArray = readableMap.getArray("mimeTypes");
        }
        new b(getReactApplicationContext(), i10, str, str2, readableArray, str4, promise).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
    }

    @ReactMethod
    public void saveToCameraRoll(String str, ReadableMap readableMap, Promise promise) {
        new c(getReactApplicationContext(), Uri.parse(str), readableMap, promise).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
    }
}
