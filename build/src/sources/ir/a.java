package ir;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import av.x;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import fr.k;
import gr.b;
import hr.c;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f30409a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f30410b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f30411c;

    /* renamed from: d  reason: collision with root package name */
    private final int f30412d;

    /* renamed from: e  reason: collision with root package name */
    private final int f30413e;

    /* renamed from: f  reason: collision with root package name */
    private final b f30414f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f30409a = context;
        this.f30410b = uri;
        this.f30411c = uri2;
        this.f30412d = i10;
        this.f30413e = i11;
        this.f30414f = bVar;
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
                inputStream = this.f30409a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f30409a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                jr.a.c(fileOutputStream);
                                jr.a.c(inputStream);
                                this.f30410b = this.f30411c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    jr.a.c(null);
                    jr.a.c(inputStream);
                    this.f30410b = this.f30411c;
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
            OkHttpClient a10 = k.f24328b.a();
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
                    if (e(this.f30411c)) {
                        fileOutputStream = this.f30409a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.j2(g10);
                        jr.a.c(source);
                        jr.a.c(g10);
                        jr.a.c(execute.n());
                        a10.t().b();
                        this.f30410b = this.f30411c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    jr.a.c(bufferedSource);
                    jr.a.c(closeable);
                    if (response != null) {
                        jr.a.c(response.n());
                    }
                    a10.t().b();
                    this.f30410b = this.f30411c;
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
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f30410b.getScheme());
        if (f(this.f30410b)) {
            try {
                d(this.f30410b, this.f30411c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f30410b)) {
            try {
                b(this.f30410b, this.f30411c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f30410b)) {
        } else {
            String scheme = this.f30410b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0412a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f30410b == null) {
            return new C0412a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = jr.a.a(options, this.f30412d, this.f30413e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f30409a.getContentResolver().openInputStream(this.f30410b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0412a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f30410b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    jr.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0412a c0412a = new C0412a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f30410b + "]"));
                    jr.a.c(openInputStream);
                    return c0412a;
                }
            }
            if (bitmap == null) {
                return new C0412a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f30410b + "]"));
            }
            int g10 = jr.a.g(this.f30409a, this.f30410b);
            int e12 = jr.a.e(g10);
            int f10 = jr.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0412a(jr.a.h(bitmap, matrix), cVar);
            }
            return new C0412a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0412a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0412a c0412a) {
        String path;
        Exception exc = c0412a.f30417c;
        if (exc == null) {
            b bVar = this.f30414f;
            Bitmap bitmap = c0412a.f30415a;
            c cVar = c0412a.f30416b;
            String path2 = this.f30410b.getPath();
            Uri uri = this.f30411c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f30414f.onFailure(exc);
    }

    /* renamed from: ir.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0412a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f30415a;

        /* renamed from: b  reason: collision with root package name */
        c f30416b;

        /* renamed from: c  reason: collision with root package name */
        Exception f30417c;

        public C0412a(Bitmap bitmap, c cVar) {
            this.f30415a = bitmap;
            this.f30416b = cVar;
        }

        public C0412a(Exception exc) {
            this.f30417c = exc;
        }
    }
}
