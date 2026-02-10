package zq;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Closeable;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.BufferedSource;
import okio.Sink;
import ru.x;
import wq.k;
import xq.b;
import yq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f56629a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f56630b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f56631c;

    /* renamed from: d  reason: collision with root package name */
    private final int f56632d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56633e;

    /* renamed from: f  reason: collision with root package name */
    private final b f56634f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f56629a = context;
        this.f56630b = uri;
        this.f56631c = uri2;
        this.f56632d = i10;
        this.f56633e = i11;
        this.f56634f = bVar;
    }

    private boolean a(Bitmap bitmap, BitmapFactory.Options options) {
        int i10;
        if (bitmap != null) {
            i10 = bitmap.getByteCount();
        } else {
            i10 = 0;
        }
        if (i10 <= 104857600) {
            return false;
        }
        options.inSampleSize *= 2;
        return true;
    }

    private void b(Uri uri, Uri uri2) {
        InputStream inputStream;
        FileOutputStream fileOutputStream;
        Log.d("BitmapWorkerTask", "copyFile");
        if (uri2 != null) {
            try {
                inputStream = this.f56629a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f56629a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                ar.a.c(fileOutputStream);
                                ar.a.c(inputStream);
                                this.f56630b = this.f56631c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    ar.a.c(null);
                    ar.a.c(inputStream);
                    this.f56630b = this.f56631c;
                    throw th;
                }
            } catch (Throwable th3) {
                th = th3;
                inputStream = null;
            }
        } else {
            throw new NullPointerException("Output Uri is null - cannot copy image");
        }
    }

    private void d(Uri uri, Uri uri2) {
        Closeable closeable;
        Response response;
        BufferedSource source;
        OutputStream fileOutputStream;
        Log.d("BitmapWorkerTask", "downloadFile");
        if (uri2 != null) {
            OkHttpClient a10 = k.f54003b.a();
            BufferedSource bufferedSource = null;
            try {
                Response execute = a10.a(new Request.Builder().l(uri.toString()).b()).execute();
                try {
                    source = execute.n().source();
                } catch (Throwable th2) {
                    th = th2;
                    response = execute;
                    closeable = null;
                }
                try {
                    if (e(this.f56631c)) {
                        fileOutputStream = this.f56629a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.d2(g10);
                        ar.a.c(source);
                        ar.a.c(g10);
                        ar.a.c(execute.n());
                        a10.t().b();
                        this.f56630b = this.f56631c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    ar.a.c(bufferedSource);
                    ar.a.c(closeable);
                    if (response != null) {
                        ar.a.c(response.n());
                    }
                    a10.t().b();
                    this.f56630b = this.f56631c;
                    throw th;
                }
            } catch (Throwable th4) {
                th = th4;
                closeable = null;
                response = null;
            }
        } else {
            throw new NullPointerException("Output Uri is null - cannot download image");
        }
    }

    private boolean e(Uri uri) {
        return uri.getScheme().equals("content");
    }

    private boolean f(Uri uri) {
        String scheme = uri.getScheme();
        if (!scheme.equals("http") && !scheme.equals("https")) {
            return false;
        }
        return true;
    }

    private boolean g(Uri uri) {
        return uri.getScheme().equals("file");
    }

    private void i() {
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f56630b.getScheme());
        if (f(this.f56630b)) {
            try {
                d(this.f56630b, this.f56631c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f56630b)) {
            try {
                b(this.f56630b, this.f56631c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f56630b)) {
        } else {
            String scheme = this.f56630b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0805a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f56630b == null) {
            return new C0805a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = ar.a.a(options, this.f56632d, this.f56633e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f56629a.getContentResolver().openInputStream(this.f56630b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0805a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f56630b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    ar.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0805a c0805a = new C0805a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f56630b + "]"));
                    ar.a.c(openInputStream);
                    return c0805a;
                }
            }
            if (bitmap == null) {
                return new C0805a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f56630b + "]"));
            }
            int g10 = ar.a.g(this.f56629a, this.f56630b);
            int e12 = ar.a.e(g10);
            int f10 = ar.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0805a(ar.a.h(bitmap, matrix), cVar);
            }
            return new C0805a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0805a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0805a c0805a) {
        String path;
        Exception exc = c0805a.f56637c;
        if (exc == null) {
            b bVar = this.f56634f;
            Bitmap bitmap = c0805a.f56635a;
            c cVar = c0805a.f56636b;
            String path2 = this.f56630b.getPath();
            Uri uri = this.f56631c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f56634f.onFailure(exc);
    }

    /* renamed from: zq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0805a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f56635a;

        /* renamed from: b  reason: collision with root package name */
        c f56636b;

        /* renamed from: c  reason: collision with root package name */
        Exception f56637c;

        public C0805a(Bitmap bitmap, c cVar) {
            this.f56635a = bitmap;
            this.f56636b = cVar;
        }

        public C0805a(Exception exc) {
            this.f56637c = exc;
        }
    }
}
