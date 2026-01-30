package io.sentry.android.replay.util;

import android.os.Handler;
import android.os.Looper;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Handler f29676a;

    public g(Looper looper) {
        Intrinsics.checkNotNullParameter(looper, "looper");
        this.f29676a = new Handler(looper);
    }

    public final Handler a() {
        return this.f29676a;
    }

    public final boolean b(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        return this.f29676a.post(runnable);
    }

    public final boolean c(Runnable runnable, long j10) {
        Handler handler = this.f29676a;
        if (runnable == null) {
            return false;
        }
        return handler.postDelayed(runnable, j10);
    }

    public final void d(Runnable runnable) {
        Handler handler = this.f29676a;
        if (runnable == null) {
            return;
        }
        handler.removeCallbacks(runnable);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ g(android.os.Looper r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto Ld
            android.os.Looper r1 = android.os.Looper.getMainLooper()
            java.lang.String r2 = "getMainLooper(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
        Ld:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.util.g.<init>(android.os.Looper, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
