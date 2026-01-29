package z;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Objects;
import java.util.UUID;
import x.n0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a0 implements j0.y {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static a c(j0.z zVar, n0.g gVar) {
            return new d(zVar, gVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract n0.g a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.z b();
    }

    private static Uri b(File file, File file2) {
        if (file2.exists()) {
            file2.delete();
        }
        if (file.renameTo(file2)) {
            return Uri.fromFile(file2);
        }
        throw new x.o0(1, "Failed to overwrite the file: " + file2.getAbsolutePath(), null);
    }

    private static Uri c(File file, n0.g gVar) {
        ContentValues contentValues;
        Uri insert;
        ContentResolver a10 = gVar.a();
        Objects.requireNonNull(a10);
        if (gVar.b() != null) {
            contentValues = new ContentValues(gVar.b());
        } else {
            contentValues = new ContentValues();
        }
        l(contentValues, 1);
        Uri uri = null;
        try {
            try {
                insert = a10.insert(gVar.f(), contentValues);
            } catch (Throwable th2) {
                th = th2;
            }
        } catch (IOException e10) {
            e = e10;
        } catch (SecurityException e11) {
            e = e11;
        }
        try {
            if (insert != null) {
                e(file, insert, a10);
                n(insert, a10, 0);
                return insert;
            }
            throw new x.o0(1, "Failed to insert a MediaStore URI.", null);
        } catch (IOException e12) {
            e = e12;
            uri = insert;
            throw new x.o0(1, "Failed to write to MediaStore URI: " + uri, e);
        } catch (SecurityException e13) {
            e = e13;
            uri = insert;
            throw new x.o0(1, "Failed to write to MediaStore URI: " + uri, e);
        } catch (Throwable th3) {
            th = th3;
            uri = insert;
            if (uri != null) {
                n(uri, a10, 0);
            }
            throw th;
        }
    }

    private static void d(File file, OutputStream outputStream) {
        FileInputStream fileInputStream = new FileInputStream(file);
        try {
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
            while (true) {
                int read = fileInputStream.read(bArr);
                if (read > 0) {
                    outputStream.write(bArr, 0, read);
                } else {
                    fileInputStream.close();
                    return;
                }
            }
        } catch (Throwable th2) {
            try {
                fileInputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private static void e(File file, Uri uri, ContentResolver contentResolver) {
        OutputStream openOutputStream = contentResolver.openOutputStream(uri);
        try {
            if (openOutputStream != null) {
                d(file, openOutputStream);
                openOutputStream.close();
                return;
            }
            throw new FileNotFoundException(uri + " cannot be resolved.");
        } catch (Throwable th2) {
            if (openOutputStream != null) {
                try {
                    openOutputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    private static File f(n0.g gVar) {
        try {
            File c10 = gVar.c();
            if (c10 != null) {
                String parent = c10.getParent();
                return new File(parent, "CameraX" + UUID.randomUUID().toString() + g(c10));
            }
            return File.createTempFile("CameraX", ".tmp");
        } catch (IOException e10) {
            throw new x.o0(1, "Failed to create temp file.", e10);
        }
    }

    private static String g(File file) {
        String name = file.getName();
        int lastIndexOf = name.lastIndexOf(46);
        if (lastIndexOf >= 0) {
            return name.substring(lastIndexOf);
        }
        return "";
    }

    private static boolean h(n0.g gVar) {
        if (gVar.c() != null) {
            return true;
        }
        return false;
    }

    private static boolean i(n0.g gVar) {
        if (gVar.f() != null && gVar.a() != null && gVar.b() != null) {
            return true;
        }
        return false;
    }

    private static boolean j(n0.g gVar) {
        if (gVar.e() != null) {
            return true;
        }
        return false;
    }

    static Uri k(File file, n0.g gVar) {
        Uri uri = null;
        try {
            try {
                if (i(gVar)) {
                    uri = c(file, gVar);
                } else if (j(gVar)) {
                    OutputStream e10 = gVar.e();
                    Objects.requireNonNull(e10);
                    d(file, e10);
                } else if (h(gVar)) {
                    File c10 = gVar.c();
                    Objects.requireNonNull(c10);
                    uri = b(file, c10);
                }
                file.delete();
                return uri;
            } catch (IOException unused) {
                throw new x.o0(1, "Failed to write to OutputStream.", null);
            }
        } catch (Throwable th2) {
            file.delete();
            throw th2;
        }
    }

    private static void l(ContentValues contentValues, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            contentValues.put("is_pending", Integer.valueOf(i10));
        }
    }

    private static void m(File file, b0.f fVar, n0.g gVar, int i10) {
        try {
            b0.f h10 = b0.f.h(file);
            fVar.g(h10);
            if (h10.s() == 0 && i10 != 0) {
                h10.z(i10);
            }
            n0.d d10 = gVar.d();
            if (d10.b()) {
                h10.l();
            }
            if (d10.c()) {
                h10.m();
            }
            if (d10.a() != null) {
                h10.b(d10.a());
            }
            h10.A();
        } catch (IOException e10) {
            throw new x.o0(1, "Failed to update Exif data", e10);
        }
    }

    private static void n(Uri uri, ContentResolver contentResolver, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            ContentValues contentValues = new ContentValues();
            l(contentValues, i10);
            contentResolver.update(uri, contentValues, null, null);
        }
    }

    private static void o(File file, byte[] bArr) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(bArr, 0, new h0.c().b(bArr));
            fileOutputStream.close();
        } catch (IOException e10) {
            throw new x.o0(1, "Failed to write to temp file", e10);
        }
    }

    @Override // j0.y
    /* renamed from: a */
    public n0.h apply(a aVar) {
        j0.z b10 = aVar.b();
        n0.g a10 = aVar.a();
        File f10 = f(a10);
        o(f10, (byte[]) b10.c());
        b0.f d10 = b10.d();
        Objects.requireNonNull(d10);
        m(f10, d10, a10, b10.f());
        return new n0.h(k(f10, a10));
    }
}
