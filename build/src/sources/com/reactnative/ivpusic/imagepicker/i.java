package com.reactnative.ivpusic.imagepicker;

import android.util.Log;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private Promise f17506a;

    /* renamed from: b  reason: collision with root package name */
    private int f17507b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f17508c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f17509d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f17510e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f17511f;

    private synchronized boolean a() {
        if (this.f17511f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f17506a == null) {
            Log.w("image-crop-picker", "Trying to notify success but promise is not set");
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void b(String str, String str2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + str2);
        this.f17506a.reject(str, str2);
        this.f17511f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f17506a.reject(str, th2);
        this.f17511f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f17508c) {
                this.f17510e.pushMap(writableMap);
                if (this.f17509d.addAndGet(1) == this.f17507b) {
                    this.f17506a.resolve(this.f17510e);
                    this.f17511f = true;
                }
            } else {
                this.f17506a.resolve(writableMap);
                this.f17511f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f17507b = i10;
        this.f17509d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f17506a = promise;
        this.f17508c = z10;
        this.f17511f = false;
        this.f17507b = 0;
        this.f17509d = new AtomicInteger(0);
        if (z10) {
            this.f17510e = new WritableNativeArray();
        }
    }
}
