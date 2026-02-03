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
    private Promise f16980a;

    /* renamed from: b  reason: collision with root package name */
    private int f16981b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f16982c;

    /* renamed from: d  reason: collision with root package name */
    private AtomicInteger f16983d;

    /* renamed from: e  reason: collision with root package name */
    private WritableArray f16984e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f16985f;

    private synchronized boolean a() {
        if (this.f16985f) {
            Log.w("image-crop-picker", "Skipping result, already sent...");
            return false;
        } else if (this.f16980a == null) {
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
        this.f16980a.reject(str, str2);
        this.f16985f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void c(String str, Throwable th2) {
        if (!a()) {
            return;
        }
        Log.e("image-crop-picker", "Promise rejected. " + th2.getMessage());
        this.f16980a.reject(str, th2);
        this.f16985f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void d(WritableMap writableMap) {
        try {
            if (!a()) {
                return;
            }
            if (this.f16982c) {
                this.f16984e.pushMap(writableMap);
                if (this.f16983d.addAndGet(1) == this.f16981b) {
                    this.f16980a.resolve(this.f16984e);
                    this.f16985f = true;
                }
            } else {
                this.f16980a.resolve(writableMap);
                this.f16985f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void e(int i10) {
        this.f16981b = i10;
        this.f16983d = new AtomicInteger(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void f(Promise promise, boolean z10) {
        this.f16980a = promise;
        this.f16982c = z10;
        this.f16985f = false;
        this.f16981b = 0;
        this.f16983d = new AtomicInteger(0);
        if (z10) {
            this.f16984e = new WritableNativeArray();
        }
    }
}
