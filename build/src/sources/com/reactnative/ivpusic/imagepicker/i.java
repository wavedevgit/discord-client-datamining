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
    private Promise f18012a;

    /* renamed from: b  reason: collision with root package name */
    private int f18013b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18014c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f18015d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f18016e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f18017f;

    private synchronized boolean a() {
        if (this.f18017f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f18012a == null) {
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
        this.f18012a.reject(str, str2);
        this.f18017f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f18012a.reject(str, th2);
        this.f18017f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f18014c) {
                this.f18016e.pushMap(writableMap);
                if (this.f18015d.addAndGet(1) == this.f18013b) {
                    this.f18012a.resolve(this.f18016e);
                    this.f18017f = true;
                }
            } else {
                this.f18012a.resolve(writableMap);
                this.f18017f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f18013b = i10;
        this.f18015d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f18012a = promise;
        this.f18014c = z10;
        this.f18017f = false;
        this.f18013b = 0;
        this.f18015d = new AtomicInteger(0);
        if (z10) {
            this.f18016e = new WritableNativeArray();
        }
    }
}
