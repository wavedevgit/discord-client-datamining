package io.sentry.android.core;

import android.util.Log;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements ILogger {

    /* renamed from: a  reason: collision with root package name */
    private final String f28304a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28305a;

        static {
            int[] iArr = new int[SentryLevel.values().length];
            f28305a = iArr;
            try {
                iArr[SentryLevel.INFO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28305a[SentryLevel.WARNING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28305a[SentryLevel.ERROR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28305a[SentryLevel.FATAL.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f28305a[SentryLevel.DEBUG.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public z() {
        this("Sentry");
    }

    private int e(SentryLevel sentryLevel) {
        int i10 = a.f28305a[sentryLevel.ordinal()];
        if (i10 == 1) {
            return 4;
        }
        if (i10 != 2) {
            if (i10 != 4) {
                return 3;
            }
            return 7;
        }
        return 5;
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
        int i10 = a.f28305a[sentryLevel.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        Log.d(this.f28304a, str, th2);
                        return;
                    } else {
                        Log.wtf(this.f28304a, str, th2);
                        return;
                    }
                }
                Log.e(this.f28304a, str, th2);
                return;
            }
            Log.w(this.f28304a, str, th2);
            return;
        }
        Log.i(this.f28304a, str, th2);
    }

    @Override // io.sentry.ILogger
    public void c(SentryLevel sentryLevel, String str, Object... objArr) {
        if (objArr != null && objArr.length != 0) {
            Log.println(e(sentryLevel), this.f28304a, String.format(str, objArr));
        } else {
            Log.println(e(sentryLevel), this.f28304a, str);
        }
    }

    @Override // io.sentry.ILogger
    public boolean d(SentryLevel sentryLevel) {
        return true;
    }

    public z(String str) {
        this.f28304a = str;
    }
}
