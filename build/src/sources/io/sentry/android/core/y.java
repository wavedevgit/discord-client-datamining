package io.sentry.android.core;

import android.util.Log;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements ILogger {

    /* renamed from: a  reason: collision with root package name */
    private final String f28883a;

    public y() {
        this("Sentry");
    }

    private int e(SentryLevel sentryLevel) {
        return 7;
    }

    @Override // io.sentry.ILogger
    public void a(SentryLevel sentryLevel, Throwable th2, String str, Object... objArr) {
        if (objArr != null && objArr.length != 0) {
            b(sentryLevel, String.format(str, objArr), th2);
        } else {
            b(sentryLevel, str, th2);
        }
    }

    @Override // io.sentry.ILogger
    public void b(SentryLevel sentryLevel, String str, Throwable th2) {
        Log.wtf(this.f28883a, str, th2);
    }

    @Override // io.sentry.ILogger
    public void c(SentryLevel sentryLevel, String str, Object... objArr) {
        if (objArr != null && objArr.length != 0) {
            Log.println(e(sentryLevel), this.f28883a, String.format(str, objArr));
        } else {
            Log.println(e(sentryLevel), this.f28883a, str);
        }
    }

    @Override // io.sentry.ILogger
    public boolean d(SentryLevel sentryLevel) {
        return true;
    }

    public y(String str) {
        this.f28883a = str;
    }
}
