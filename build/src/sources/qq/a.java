package qq;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import iu.x;
import java.io.Closeable;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import nq.k;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.BufferedSource;
import okio.Sink;
import oq.b;
import pq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f47601a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f47602b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f47603c;

    /* renamed from: d  reason: collision with root package name */
    private final int f47604d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47605e;

    /* renamed from: f  reason: collision with root package name */
    private final b f47606f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f47601a = context;
        this.f47602b = uri;
        this.f47603c = uri2;
        this.f47604d = i10;
        this.f47605e = i11;
        this.f47606f = bVar;
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
                inputStream = this.f47601a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f47601a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                rq.a.c(fileOutputStream);
                                rq.a.c(inputStream);
                                this.f47602b = this.f47603c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    rq.a.c(null);
                    rq.a.c(inputStream);
                    this.f47602b = this.f47603c;
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
            OkHttpClient a10 = k.f42139b.a();
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
                    if (e(this.f47603c)) {
                        fileOutputStream = this.f47601a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.e2(g10);
                        rq.a.c(source);
                        rq.a.c(g10);
                        rq.a.c(execute.x());
                        a10.s().b();
                        this.f47602b = this.f47603c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    rq.a.c(bufferedSource);
                    rq.a.c(closeable);
                    if (response != null) {
                        rq.a.c(response.x());
                    }
                    a10.s().b();
                    this.f47602b = this.f47603c;
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
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f47602b.getScheme());
        if (f(this.f47602b)) {
            try {
                d(this.f47602b, this.f47603c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f47602b)) {
            try {
                b(this.f47602b, this.f47603c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f47602b)) {
        } else {
            String scheme = this.f47602b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0572a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f47602b == null) {
            return new C0572a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = rq.a.a(options, this.f47604d, this.f47605e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f47601a.getContentResolver().openInputStream(this.f47602b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0572a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f47602b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    rq.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0572a c0572a = new C0572a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f47602b + "]"));
                    rq.a.c(openInputStream);
                    return c0572a;
                }
            }
            if (bitmap == null) {
                return new C0572a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f47602b + "]"));
            }
            int g10 = rq.a.g(this.f47601a, this.f47602b);
            int e12 = rq.a.e(g10);
            int f10 = rq.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0572a(rq.a.h(bitmap, matrix), cVar);
            }
            return new C0572a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0572a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0572a c0572a) {
        String path;
        Exception exc = c0572a.f47609c;
        if (exc == null) {
            b bVar = this.f47606f;
            Bitmap bitmap = c0572a.f47607a;
            c cVar = c0572a.f47608b;
            String path2 = this.f47602b.getPath();
            Uri uri = this.f47603c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f47606f.onFailure(exc);
    }

    /* renamed from: qq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0572a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f47607a;

        /* renamed from: b  reason: collision with root package name */
        c f47608b;

        /* renamed from: c  reason: collision with root package name */
        Exception f47609c;

        public C0572a(Bitmap bitmap, c cVar) {
            this.f47607a = bitmap;
            this.f47608b = cVar;
        }

        public C0572a(Exception exc) {
            this.f47609c = exc;
        }
    }
}
