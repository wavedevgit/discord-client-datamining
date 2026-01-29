package com.dooboolab.rniap;

import android.util.Log;
import com.facebook.react.bridge.Promise;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {
    public static final void a(Promise promise, String message) {
        Intrinsics.checkNotNullParameter(promise, "<this>");
        Intrinsics.checkNotNullParameter(message, "message");
        c(promise, message, null, null);
    }

    public static final void b(Promise promise, String code, String str) {
        Intrinsics.checkNotNullParameter(promise, "<this>");
        Intrinsics.checkNotNullParameter(code, "code");
        c(promise, code, str, null);
    }

    public static final void c(Promise promise, String code, String str, Throwable th2) {
        Intrinsics.checkNotNullParameter(promise, "<this>");
        Intrinsics.checkNotNullParameter(code, "code");
        try {
            promise.reject(code, str, th2);
        } catch (RuntimeException e10) {
            String message = e10.getMessage();
            Log.d("IapPromises", "Already consumed " + message);
        }
    }

    public static final void d(Promise promise, Object obj) {
        Intrinsics.checkNotNullParameter(promise, "<this>");
        try {
            promise.resolve(obj);
        } catch (RuntimeException e10) {
            String message = e10.getMessage();
            Log.d("IapPromises", "Already consumed " + message);
        }
    }
}
