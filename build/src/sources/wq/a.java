package wq;

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
import ou.x;
import tq.k;
import uq.b;
import vq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f53241a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f53242b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f53243c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53244d;

    /* renamed from: e  reason: collision with root package name */
    private final int f53245e;

    /* renamed from: f  reason: collision with root package name */
    private final b f53246f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f53241a = context;
        this.f53242b = uri;
        this.f53243c = uri2;
        this.f53244d = i10;
        this.f53245e = i11;
        this.f53246f = bVar;
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
                inputStream = this.f53241a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f53241a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                xq.a.c(fileOutputStream);
                                xq.a.c(inputStream);
                                this.f53242b = this.f53243c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    xq.a.c(null);
                    xq.a.c(inputStream);
                    this.f53242b = this.f53243c;
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
            OkHttpClient a10 = k.f51000b.a();
            BufferedSource bufferedSource = null;
            try {
                Response execute = a10.a(new Request.Builder().l(uri.toString()).b()).execute();
                try {
                    source = execute.o().source();
                } catch (Throwable th2) {
                    th = th2;
                    response = execute;
                    closeable = null;
                }
                try {
                    if (e(this.f53243c)) {
                        fileOutputStream = this.f53241a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.e2(g10);
                        xq.a.c(source);
                        xq.a.c(g10);
                        xq.a.c(execute.o());
                        a10.s().b();
                        this.f53242b = this.f53243c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    xq.a.c(bufferedSource);
                    xq.a.c(closeable);
                    if (response != null) {
                        xq.a.c(response.o());
                    }
                    a10.s().b();
                    this.f53242b = this.f53243c;
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
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f53242b.getScheme());
        if (f(this.f53242b)) {
            try {
                d(this.f53242b, this.f53243c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f53242b)) {
            try {
                b(this.f53242b, this.f53243c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f53242b)) {
        } else {
            String scheme = this.f53242b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0704a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f53242b == null) {
            return new C0704a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = xq.a.a(options, this.f53244d, this.f53245e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f53241a.getContentResolver().openInputStream(this.f53242b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0704a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f53242b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    xq.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0704a c0704a = new C0704a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f53242b + "]"));
                    xq.a.c(openInputStream);
                    return c0704a;
                }
            }
            if (bitmap == null) {
                return new C0704a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f53242b + "]"));
            }
            int g10 = xq.a.g(this.f53241a, this.f53242b);
            int e12 = xq.a.e(g10);
            int f10 = xq.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0704a(xq.a.h(bitmap, matrix), cVar);
            }
            return new C0704a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0704a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0704a c0704a) {
        String path;
        Exception exc = c0704a.f53249c;
        if (exc == null) {
            b bVar = this.f53246f;
            Bitmap bitmap = c0704a.f53247a;
            c cVar = c0704a.f53248b;
            String path2 = this.f53242b.getPath();
            Uri uri = this.f53243c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f53246f.onFailure(exc);
    }

    /* renamed from: wq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0704a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f53247a;

        /* renamed from: b  reason: collision with root package name */
        c f53248b;

        /* renamed from: c  reason: collision with root package name */
        Exception f53249c;

        public C0704a(Bitmap bitmap, c cVar) {
            this.f53247a = bitmap;
            this.f53248b = cVar;
        }

        public C0704a(Exception exc) {
            this.f53249c = exc;
        }
    }
}
