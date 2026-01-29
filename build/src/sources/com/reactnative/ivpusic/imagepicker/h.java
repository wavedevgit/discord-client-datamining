package com.reactnative.ivpusic.imagepicker;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class h {
    private static String a(Context context, Uri uri, String str, String[] strArr) {
        Throwable th2;
        Cursor cursor = null;
        String str2 = null;
        try {
            Cursor query = context.getContentResolver().query(uri, new String[]{"_data", "_display_name"}, str, strArr, null);
            if (query != null) {
                try {
                    if (query.moveToFirst()) {
                        int columnIndex = query.getColumnIndex("_data");
                        if (columnIndex > -1) {
                            str2 = query.getString(columnIndex);
                        }
                        if (str2 != null) {
                            String string = query.getString(columnIndex);
                            query.close();
                            return string;
                        }
                        String absolutePath = d(context, query.getString(query.getColumnIndexOrThrow("_display_name")), uri).getAbsolutePath();
                        query.close();
                        return absolutePath;
                    }
                } catch (Throwable th3) {
                    th2 = th3;
                    cursor = query;
                    if (cursor != null) {
                        cursor.close();
                    }
                    throw th2;
                }
            }
            if (query != null) {
                query.close();
            }
            return null;
        } catch (Throwable th4) {
            th2 = th4;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String b(Context context, Uri uri) {
        if ("content".equalsIgnoreCase(uri.getScheme())) {
            if (c(uri)) {
                return uri.getLastPathSegment();
            }
            return a(context, uri, null, null);
        } else if (!"file".equalsIgnoreCase(uri.getScheme())) {
            return null;
        } else {
            return uri.getPath();
        }
    }

    private static boolean c(Uri uri) {
        return "com.google.android.apps.photos.content".equals(uri.getAuthority());
    }

    private static File d(Context context, String str, Uri uri) {
        String str2 = context.getCacheDir() + "/react-native-image-crop-picker";
        new File(str2).mkdir();
        File file = new File(new File(str2), str.substring(str.lastIndexOf(47) + 1));
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            byte[] bArr = new byte[8192];
            InputStream openInputStream = context.getContentResolver().openInputStream(uri);
            while (true) {
                int read = openInputStream.read(bArr, 0, 8192);
                if (read > 0) {
                    fileOutputStream.write(bArr, 0, read);
                    fileOutputStream.flush();
                } else {
                    fileOutputStream.close();
                    openInputStream.close();
                    return file;
                }
            }
        } catch (Exception e10) {
            e10.printStackTrace();
            return file;
        }
    }
}
