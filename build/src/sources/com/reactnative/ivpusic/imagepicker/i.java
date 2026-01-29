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
    private Promise f18379a;

    /* renamed from: b  reason: collision with root package name */
    private int f18380b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18381c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f18382d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f18383e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f18384f;

    private synchronized boolean a() {
        if (this.f18384f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f18379a == null) {
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
        this.f18379a.reject(str, str2);
        this.f18384f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f18379a.reject(str, th2);
        this.f18384f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f18381c) {
                this.f18383e.pushMap(writableMap);
                if (this.f18382d.addAndGet(1) == this.f18380b) {
                    this.f18379a.resolve(this.f18383e);
                    this.f18384f = true;
                }
            } else {
                this.f18379a.resolve(writableMap);
                this.f18384f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f18380b = i10;
        this.f18382d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f18379a = promise;
        this.f18381c = z10;
        this.f18384f = false;
        this.f18380b = 0;
        this.f18382d = new AtomicInteger(0);
        if (z10) {
            this.f18383e = new WritableNativeArray();
        }
    }
}
