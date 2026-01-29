package io.sentry.android.core.internal.util;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.os.Handler;
import android.os.HandlerThread;
import android.view.PixelCopy;
import android.view.View;
import android.view.Window;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.x0;
import java.io.ByteArrayOutputStream;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w {
    public static /* synthetic */ void a(View view, Canvas canvas, ILogger iLogger, CountDownLatch countDownLatch) {
        try {
            view.draw(canvas);
        } catch (Throwable th2) {
            try {
                iLogger.b(SentryLevel.ERROR, "Taking screenshot failed (view.draw).", th2);
            } finally {
                countDownLatch.countDown();
            }
        }
    }

    public static /* synthetic */ void b(AtomicBoolean atomicBoolean, CountDownLatch countDownLatch, int i10) {
        boolean z10;
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        atomicBoolean.set(z10);
        countDownLatch.countDown();
    }

    public static Bitmap c(Activity activity, io.sentry.util.thread.a aVar, final ILogger iLogger, x0 x0Var) {
        boolean z10 = false;
        if (!e(activity)) {
            iLogger.c(SentryLevel.DEBUG, "Activity isn't valid, not taking screenshot.", new Object[0]);
            return null;
        }
        Window window = activity.getWindow();
        if (window == null) {
            iLogger.c(SentryLevel.DEBUG, "Activity window is null, not taking screenshot.", new Object[0]);
            return null;
        }
        View peekDecorView = window.peekDecorView();
        if (peekDecorView == null) {
            iLogger.c(SentryLevel.DEBUG, "DecorView is null, not taking screenshot.", new Object[0]);
            return null;
        }
        final View rootView = peekDecorView.getRootView();
        if (rootView == null) {
            iLogger.c(SentryLevel.DEBUG, "Root view is null, not taking screenshot.", new Object[0]);
            return null;
        } else if (rootView.getWidth() > 0 && rootView.getHeight() > 0) {
            try {
                Bitmap createBitmap = Bitmap.createBitmap(rootView.getWidth(), rootView.getHeight(), Bitmap.Config.ARGB_8888);
                final CountDownLatch countDownLatch = new CountDownLatch(1);
                if (x0Var.d() >= 26) {
                    HandlerThread handlerThread = new HandlerThread("SentryScreenshot");
                    handlerThread.start();
                    Handler handler = new Handler(handlerThread.getLooper());
                    final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
                    PixelCopy.request(window, createBitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.core.internal.util.u
                        @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                        public final void onPixelCopyFinished(int i10) {
                            w.b(atomicBoolean, countDownLatch, i10);
                        }
                    }, handler);
                    if (countDownLatch.await(1000L, TimeUnit.MILLISECONDS) && atomicBoolean.get()) {
                        z10 = true;
                    }
                    handlerThread.quit();
                    if (!z10) {
                        return null;
                    }
                } else {
                    final Canvas canvas = new Canvas(createBitmap);
                    if (aVar.a()) {
                        rootView.draw(canvas);
                        countDownLatch.countDown();
                    } else {
                        activity.runOnUiThread(new Runnable() { // from class: io.sentry.android.core.internal.util.v
                            @Override // java.lang.Runnable
                            public final void run() {
                                w.a(rootView, canvas, iLogger, countDownLatch);
                            }
                        });
                    }
                    if (!countDownLatch.await(1000L, TimeUnit.MILLISECONDS)) {
                        return null;
                    }
                }
                return createBitmap;
            } catch (Throwable th2) {
                iLogger.b(SentryLevel.ERROR, "Taking screenshot failed.", th2);
                return null;
            }
        } else {
            iLogger.c(SentryLevel.DEBUG, "View's width and height is zeroed, not taking screenshot.", new Object[0]);
            return null;
        }
    }

    public static byte[] d(Bitmap bitmap, ILogger iLogger) {
        if (bitmap != null && !bitmap.isRecycled()) {
            try {
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.PNG, 0, byteArrayOutputStream);
                bitmap.recycle();
                if (byteArrayOutputStream.size() <= 0) {
                    iLogger.c(SentryLevel.DEBUG, "Screenshot is 0 bytes, not attaching the image.", new Object[0]);
                    byteArrayOutputStream.close();
                    return null;
                }
                byte[] byteArray = byteArrayOutputStream.toByteArray();
                byteArrayOutputStream.close();
                return byteArray;
            } catch (Throwable th2) {
                iLogger.b(SentryLevel.ERROR, "Compressing bitmap failed.", th2);
            }
        }
        return null;
    }

    private static boolean e(Activity activity) {
        if (!activity.isFinishing() && !activity.isDestroyed()) {
            return true;
        }
        return false;
    }

    public static byte[] f(Activity activity, ILogger iLogger, x0 x0Var) {
        return g(activity, j.e(), iLogger, x0Var);
    }

    public static byte[] g(Activity activity, io.sentry.util.thread.a aVar, ILogger iLogger, x0 x0Var) {
        return d(c(activity, aVar, iLogger, x0Var), iLogger);
    }
}
