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
    private Promise f18255a;

    /* renamed from: b  reason: collision with root package name */
    private int f18256b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18257c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f18258d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f18259e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f18260f;

    private synchronized boolean a() {
        if (this.f18260f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f18255a == null) {
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
        this.f18255a.reject(str, str2);
        this.f18260f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f18255a.reject(str, th2);
        this.f18260f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f18257c) {
                this.f18259e.pushMap(writableMap);
                if (this.f18258d.addAndGet(1) == this.f18256b) {
                    this.f18255a.resolve(this.f18259e);
                    this.f18260f = true;
                }
            } else {
                this.f18255a.resolve(writableMap);
                this.f18260f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f18256b = i10;
        this.f18258d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f18255a = promise;
        this.f18257c = z10;
        this.f18260f = false;
        this.f18256b = 0;
        this.f18258d = new AtomicInteger(0);
        if (z10) {
            this.f18259e = new WritableNativeArray();
        }
    }
}
