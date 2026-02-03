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
    private final URL f16074d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Future f16075e;

    /* renamed from: i  reason: collision with root package name */
    private Task f16076i;

    private e0(URL url) {
        this.f16074d = url;
    }

    public static /* synthetic */ void a(e0 e0Var, wg.k kVar) {
        e0Var.getClass();
        try {
            kVar.c(e0Var.h());
        } catch (Exception e10) {
            kVar.b(e10);
        }
    }

    private byte[] l() {
        URLConnection openConnection = this.f16074d.openConnection();
        if (openConnection.getContentLength() <= 1048576) {
            InputStream inputStream = openConnection.getInputStream();
            try {
                byte[] d10 = b.d(b.b(inputStream, 1048577L));
                if (inputStream != null) {
                    inputStream.close();
                }
                if (Log.isLoggable("FirebaseMessaging", 2)) {
                    Log.v("FirebaseMessaging", "Downloaded " + d10.length + " bytes from " + this.f16074d);
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

    public static e0 n(String str) {
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

    public void B(ExecutorService executorService) {
        final wg.k kVar = new wg.k();
        this.f16075e = executorService.submit(new Runnable() { // from class: com.google.firebase.messaging.d0
            @Override // java.lang.Runnable
            public final void run() {
                e0.a(e0.this, kVar);
            }
        });
        this.f16076i = kVar.a();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f16075e.cancel(true);
    }

    public Bitmap h() {
        if (Log.isLoggable("FirebaseMessaging", 4)) {
            Log.i("FirebaseMessaging", "Starting download of: " + this.f16074d);
        }
        byte[] l10 = l();
        Bitmap decodeByteArray = BitmapFactory.decodeByteArray(l10, 0, l10.length);
        if (decodeByteArray != null) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Successfully downloaded image: " + this.f16074d);
            }
            return decodeByteArray;
        }
        throw new IOException("Failed to decode image: " + this.f16074d);
    }

    public Task x() {
        return (Task) gf.q.l(this.f16076i);
    }
}
