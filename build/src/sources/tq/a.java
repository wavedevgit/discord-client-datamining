package tq;

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
import lu.x;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.BufferedSource;
import okio.Sink;
import qq.k;
import rq.b;
import sq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f50220a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f50221b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f50222c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50223d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50224e;

    /* renamed from: f  reason: collision with root package name */
    private final b f50225f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f50220a = context;
        this.f50221b = uri;
        this.f50222c = uri2;
        this.f50223d = i10;
        this.f50224e = i11;
        this.f50225f = bVar;
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
                inputStream = this.f50220a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f50220a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                uq.a.c(fileOutputStream);
                                uq.a.c(inputStream);
                                this.f50221b = this.f50222c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    uq.a.c(null);
                    uq.a.c(inputStream);
                    this.f50221b = this.f50222c;
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
            OkHttpClient a10 = k.f48133b.a();
            BufferedSource bufferedSource = null;
            try {
                Response execute = a10.a(new Request.Builder().l(uri.toString()).b()).execute();
                try {
                    source = execute.x().source();
                } catch (Throwable th2) {
                    th = th2;
                    response = execute;
                    closeable = null;
                }
                try {
                    if (e(this.f50222c)) {
                        fileOutputStream = this.f50220a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.e2(g10);
                        uq.a.c(source);
                        uq.a.c(g10);
                        uq.a.c(execute.x());
                        a10.s().b();
                        this.f50221b = this.f50222c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    uq.a.c(bufferedSource);
                    uq.a.c(closeable);
                    if (response != null) {
                        uq.a.c(response.x());
                    }
                    a10.s().b();
                    this.f50221b = this.f50222c;
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
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f50221b.getScheme());
        if (f(this.f50221b)) {
            try {
                d(this.f50221b, this.f50222c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f50221b)) {
            try {
                b(this.f50221b, this.f50222c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f50221b)) {
        } else {
            String scheme = this.f50221b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0627a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f50221b == null) {
            return new C0627a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = uq.a.a(options, this.f50223d, this.f50224e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f50220a.getContentResolver().openInputStream(this.f50221b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0627a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f50221b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    uq.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0627a c0627a = new C0627a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f50221b + "]"));
                    uq.a.c(openInputStream);
                    return c0627a;
                }
            }
            if (bitmap == null) {
                return new C0627a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f50221b + "]"));
            }
            int g10 = uq.a.g(this.f50220a, this.f50221b);
            int e12 = uq.a.e(g10);
            int f10 = uq.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0627a(uq.a.h(bitmap, matrix), cVar);
            }
            return new C0627a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0627a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0627a c0627a) {
        String path;
        Exception exc = c0627a.f50228c;
        if (exc == null) {
            b bVar = this.f50225f;
            Bitmap bitmap = c0627a.f50226a;
            c cVar = c0627a.f50227b;
            String path2 = this.f50221b.getPath();
            Uri uri = this.f50222c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f50225f.onFailure(exc);
    }

    /* renamed from: tq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0627a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f50226a;

        /* renamed from: b  reason: collision with root package name */
        c f50227b;

        /* renamed from: c  reason: collision with root package name */
        Exception f50228c;

        public C0627a(Bitmap bitmap, c cVar) {
            this.f50226a = bitmap;
            this.f50227b = cVar;
        }

        public C0627a(Exception exc) {
            this.f50228c = exc;
        }
    }
}
