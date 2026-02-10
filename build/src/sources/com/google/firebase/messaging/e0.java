package com.google.firebase.messaging;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e0 implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final URL f17337d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Future f17338e;

    /* renamed from: i  reason: collision with root package name */
    private Task f17339i;

    private e0(URL url) {
        this.f17337d = url;
    }

    public static /* synthetic */ void a(e0 e0Var, zg.k kVar) {
        e0Var.getClass();
        try {
            kVar.c(e0Var.h());
        } catch (Exception e10) {
            kVar.b(e10);
        }
    }

    private byte[] i() {
        URLConnection openConnection = this.f17337d.openConnection();
        if (openConnection.getContentLength() <= 1048576) {
            InputStream inputStream = openConnection.getInputStream();
            try {
                byte[] d10 = b.d(b.b(inputStream, 1048577L));
                if (inputStream != null) {
                    inputStream.close();
                }
                if (Log.isLoggable("FirebaseMessaging", 2)) {
                    Log.v("FirebaseMessaging", "Downloaded " + d10.length + " bytes from " + this.f17337d);
                }
                if (d10.length <= 1048576) {
                    return d10;
                }
                throw new IOException("Image exceeds max size of 1048576");
            } catch (Throwable th2) {
                if (inputStream != null) {
                    try {
                        inputStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
        throw new IOException("Content-Length exceeds max size of 1048576");
    }

    public static e0 m(String str) {
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        try {
            return new e0(new URL(str));
        } catch (MalformedURLException unused) {
            Log.w("FirebaseMessaging", "Not downloading image, bad URL: " + str);
            return null;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f17338e.cancel(true);
    }

    public Bitmap h() {
        if (Log.isLoggable("FirebaseMessaging", 4)) {
            Log.i("FirebaseMessaging", "Starting download of: " + this.f17337d);
        }
        byte[] i10 = i();
        Bitmap decodeByteArray = BitmapFactory.decodeByteArray(i10, 0, i10.length);
        if (decodeByteArray != null) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Successfully downloaded image: " + this.f17337d);
            }
            return decodeByteArray;
        }
        throw new IOException("Failed to decode image: " + this.f17337d);
    }

    public Task n() {
        return (Task) hf.q.l(this.f17339i);
    }

    public void p(ExecutorService executorService) {
        final zg.k kVar = new zg.k();
        this.f17338e = executorService.submit(new Runnable() { // from class: com.google.firebase.messaging.d0
            @Override // java.lang.Runnable
            public final void run() {
                e0.a(e0.this, kVar);
            }
        });
        this.f17339i = kVar.a();
    }
}
