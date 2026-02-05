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
    private Promise f17386a;

    /* renamed from: b  reason: collision with root package name */
    private int f17387b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f17388c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f17389d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f17390e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f17391f;

    private synchronized boolean a() {
        if (this.f17391f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f17386a == null) {
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
        this.f17386a.reject(str, str2);
        this.f17391f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f17386a.reject(str, th2);
        this.f17391f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f17388c) {
                this.f17390e.pushMap(writableMap);
                if (this.f17389d.addAndGet(1) == this.f17387b) {
                    this.f17386a.resolve(this.f17390e);
                    this.f17391f = true;
                }
            } else {
                this.f17386a.resolve(writableMap);
                this.f17391f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f17387b = i10;
        this.f17389d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f17386a = promise;
        this.f17388c = z10;
        this.f17391f = false;
        this.f17387b = 0;
        this.f17389d = new AtomicInteger(0);
        if (z10) {
            this.f17390e = new WritableNativeArray();
        }
    }
}
