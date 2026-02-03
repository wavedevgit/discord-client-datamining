package w8;

import android.content.ContentResolver;
import android.content.res.AssetFileDescriptor;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import java.io.File;
import java.io.FileNotFoundException;
import java.net.MalformedURLException;
import java.net.URL;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final Uri f52053a = Uri.withAppendedPath((Uri) db.a.e(ContactsContract.AUTHORITY_URI), "display_photo");

    public static AssetFileDescriptor a(ContentResolver contentResolver, Uri uri) {
        if (m(uri)) {
            try {
                return contentResolver.openAssetFileDescriptor(uri, "r");
            } catch (FileNotFoundException unused) {
            }
        }
        return null;
    }

    private static String b(boolean z10) {
        return "_data";
    }

    private static Uri c(boolean z10) {
        if (z10) {
            return MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
        }
        return MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
    }

    private static String d(boolean z10) {
        return "_id";
    }

    public static String e(ContentResolver contentResolver, Uri uri) {
        boolean z10;
        Uri uri2;
        String str;
        String[] strArr;
        int columnIndexOrThrow;
        String type = contentResolver.getType(uri);
        String str2 = null;
        if (m(uri)) {
            if (type != null && type.startsWith("video/")) {
                z10 = true;
            } else {
                z10 = false;
            }
            if ("com.android.providers.media.documents".equals(uri.getAuthority())) {
                String documentId = DocumentsContract.getDocumentId(uri);
                j.g(documentId);
                String[] strArr2 = {documentId.split(":")[1]};
                uri2 = (Uri) j.g(c(z10));
                str = d(z10) + "=?";
                strArr = strArr2;
            } else {
                uri2 = uri;
                str = null;
                strArr = null;
            }
            Cursor query = contentResolver.query(uri2, new String[]{b(z10)}, str, strArr, null);
            if (query != null) {
                try {
                    if (query.moveToFirst() && (columnIndexOrThrow = query.getColumnIndexOrThrow(b(z10))) != -1) {
                        str2 = query.getString(columnIndexOrThrow);
                    }
                } finally {
                    query.close();
                }
            }
            if (query != null) {
            }
            return str2;
        } else if (!n(uri)) {
            return null;
        } else {
            return uri.getPath();
        }
    }

    public static String f(Uri uri) {
        if (uri == null) {
            return null;
        }
        return uri.getScheme();
    }

    public static Uri g(File file) {
        return Uri.fromFile(file);
    }

    public static Uri h(int i10) {
        return new Uri.Builder().scheme("res").path(String.valueOf(i10)).build();
    }

    public static boolean i(Uri uri) {
        return "data".equals(f(uri));
    }

    public static boolean j(Uri uri) {
        return "asset".equals(f(uri));
    }

    public static boolean k(Uri uri) {
        String uri2 = uri.toString();
        if (!uri2.startsWith(MediaStore.Images.Media.EXTERNAL_CONTENT_URI.toString()) && !uri2.startsWith(MediaStore.Images.Media.INTERNAL_CONTENT_URI.toString())) {
            return false;
        }
        return true;
    }

    public static boolean l(Uri uri) {
        if (uri.getPath() == null || !m(uri) || !"com.android.contacts".equals(uri.getAuthority()) || uri.getPath().startsWith((String) db.a.e(f52053a.getPath()))) {
            return false;
        }
        return true;
    }

    public static boolean m(Uri uri) {
        return "content".equals(f(uri));
    }

    public static boolean n(Uri uri) {
        return "file".equals(f(uri));
    }

    public static boolean o(Uri uri) {
        return "res".equals(f(uri));
    }

    public static boolean p(Uri uri) {
        String f10 = f(uri);
        if (!"https".equals(f10) && !"http".equals(f10)) {
            return false;
        }
        return true;
    }

    public static boolean q(Uri uri) {
        return "android.resource".equals(f(uri));
    }

    public static Uri r(String str) {
        if (str != null) {
            return Uri.parse(str);
        }
        return null;
    }

    public static URL s(Uri uri) {
        if (uri == null) {
            return null;
        }
        try {
            return new URL(uri.toString());
        } catch (MalformedURLException e10) {
            throw new RuntimeException(e10);
        }
    }
}
