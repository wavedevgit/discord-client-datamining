package yq;

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
import qu.x;
import vq.k;
import wq.b;
import xq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private final Context f55556a;

    /* renamed from: b  reason: collision with root package name */
    private Uri f55557b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f55558c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55559d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55560e;

    /* renamed from: f  reason: collision with root package name */
    private final b f55561f;

    public a(Context context, Uri uri, Uri uri2, int i10, int i11, b bVar) {
        this.f55556a = context;
        this.f55557b = uri;
        this.f55558c = uri2;
        this.f55559d = i10;
        this.f55560e = i11;
        this.f55561f = bVar;
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
                inputStream = this.f55556a.getContentResolver().openInputStream(uri);
                try {
                    if (inputStream != null) {
                        if (e(uri2)) {
                            fileOutputStream = this.f55556a.getContentResolver().openOutputStream(uri2);
                        } else {
                            fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                        }
                        byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                        while (true) {
                            int read = inputStream.read(bArr);
                            if (read > 0) {
                                fileOutputStream.write(bArr, 0, read);
                            } else {
                                zq.a.c(fileOutputStream);
                                zq.a.c(inputStream);
                                this.f55557b = this.f55558c;
                                return;
                            }
                        }
                    } else {
                        throw new NullPointerException("InputStream for given input Uri is null");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    zq.a.c(null);
                    zq.a.c(inputStream);
                    this.f55557b = this.f55558c;
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
            OkHttpClient a10 = k.f52928b.a();
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
                    if (e(this.f55558c)) {
                        fileOutputStream = this.f55556a.getContentResolver().openOutputStream(uri2);
                    } else {
                        fileOutputStream = new FileOutputStream(new File(uri2.getPath()));
                    }
                    if (fileOutputStream != null) {
                        Sink g10 = x.g(fileOutputStream);
                        source.e2(g10);
                        zq.a.c(source);
                        zq.a.c(g10);
                        zq.a.c(execute.n());
                        a10.t().b();
                        this.f55557b = this.f55558c;
                        return;
                    }
                    throw new NullPointerException("OutputStream for given output Uri is null");
                } catch (Throwable th3) {
                    th = th3;
                    response = execute;
                    closeable = null;
                    bufferedSource = source;
                    zq.a.c(bufferedSource);
                    zq.a.c(closeable);
                    if (response != null) {
                        zq.a.c(response.n());
                    }
                    a10.t().b();
                    this.f55557b = this.f55558c;
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
        Log.d("BitmapWorkerTask", "Uri scheme: " + this.f55557b.getScheme());
        if (f(this.f55557b)) {
            try {
                d(this.f55557b, this.f55558c);
            } catch (IOException | NullPointerException e10) {
                Log.e("BitmapWorkerTask", "Downloading failed", e10);
                throw e10;
            }
        } else if (e(this.f55557b)) {
            try {
                b(this.f55557b, this.f55558c);
            } catch (IOException | NullPointerException e11) {
                Log.e("BitmapWorkerTask", "Copying failed", e11);
                throw e11;
            }
        } else if (g(this.f55557b)) {
        } else {
            String scheme = this.f55557b.getScheme();
            Log.e("BitmapWorkerTask", "Invalid Uri scheme " + scheme);
            throw new IllegalArgumentException("Invalid Uri scheme" + scheme);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public C0755a doInBackground(Void... voidArr) {
        InputStream openInputStream;
        if (this.f55557b == null) {
            return new C0755a(new NullPointerException("Input Uri cannot be null"));
        }
        try {
            i();
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            options.inSampleSize = zq.a.a(options, this.f55559d, this.f55560e);
            boolean z10 = false;
            options.inJustDecodeBounds = false;
            Bitmap bitmap = null;
            while (!z10) {
                try {
                    openInputStream = this.f55556a.getContentResolver().openInputStream(this.f55557b);
                    bitmap = BitmapFactory.decodeStream(openInputStream, null, options);
                } catch (IOException e10) {
                    Log.e("BitmapWorkerTask", "doInBackground: ImageDecoder.createSource: ", e10);
                    return new C0755a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f55557b + "]", e10));
                } catch (OutOfMemoryError e11) {
                    Log.e("BitmapWorkerTask", "doInBackground: BitmapFactory.decodeFileDescriptor: ", e11);
                    options.inSampleSize *= 2;
                }
                if (options.outWidth != -1 && options.outHeight != -1) {
                    zq.a.c(openInputStream);
                    if (!a(bitmap, options)) {
                        z10 = true;
                    }
                } else {
                    C0755a c0755a = new C0755a(new IllegalArgumentException("Bounds for bitmap could not be retrieved from the Uri: [" + this.f55557b + "]"));
                    zq.a.c(openInputStream);
                    return c0755a;
                }
            }
            if (bitmap == null) {
                return new C0755a(new IllegalArgumentException("Bitmap could not be decoded from the Uri: [" + this.f55557b + "]"));
            }
            int g10 = zq.a.g(this.f55556a, this.f55557b);
            int e12 = zq.a.e(g10);
            int f10 = zq.a.f(g10);
            c cVar = new c(g10, e12, f10);
            Matrix matrix = new Matrix();
            if (e12 != 0) {
                matrix.preRotate(e12);
            }
            if (f10 != 1) {
                matrix.postScale(f10, 1.0f);
            }
            if (!matrix.isIdentity()) {
                return new C0755a(zq.a.h(bitmap, matrix), cVar);
            }
            return new C0755a(bitmap, cVar);
        } catch (IOException | NullPointerException e13) {
            return new C0755a(e13);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: h */
    public void onPostExecute(C0755a c0755a) {
        String path;
        Exception exc = c0755a.f55564c;
        if (exc == null) {
            b bVar = this.f55561f;
            Bitmap bitmap = c0755a.f55562a;
            c cVar = c0755a.f55563b;
            String path2 = this.f55557b.getPath();
            Uri uri = this.f55558c;
            if (uri == null) {
                path = null;
            } else {
                path = uri.getPath();
            }
            bVar.a(bitmap, cVar, path2, path);
            return;
        }
        this.f55561f.onFailure(exc);
    }

    /* renamed from: yq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0755a {

        /* renamed from: a  reason: collision with root package name */
        Bitmap f55562a;

        /* renamed from: b  reason: collision with root package name */
        c f55563b;

        /* renamed from: c  reason: collision with root package name */
        Exception f55564c;

        public C0755a(Bitmap bitmap, c cVar) {
            this.f55562a = bitmap;
            this.f55563b = cVar;
        }

        public C0755a(Exception exc) {
            this.f55564c = exc;
        }
    }
}
