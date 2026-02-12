package com.swmansion.reanimated.keyboard;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
import androidx.core.view.x0;
import com.facebook.react.bridge.ReactApplicationContext;
import f.f;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class WindowsInsetsManager {
    private final Keyboard mKeyboard;
    private final NotifyAboutKeyboardChangeFunction mNotifyAboutKeyboardChange;
    private final WeakReference<ReactApplicationContext> mReactContext;
    private boolean mIsStatusBarTranslucent = false;
    private boolean mIsNavigationBarTranslucent = false;
    private final String MissingContextErrorMsg = "Unable to get reference to react activity";

    public WindowsInsetsManager(WeakReference<ReactApplicationContext> weakReference, Keyboard keyboard, NotifyAboutKeyboardChangeFunction notifyAboutKeyboardChangeFunction) {
        this.mReactContext = weakReference;
        this.mKeyboard = keyboard;
        this.mNotifyAboutKeyboardChange = notifyAboutKeyboardChangeFunction;
    }

    private Activity getCurrentActivity() {
        return this.mReactContext.get().getCurrentActivity();
    }

    private FrameLayout.LayoutParams getLayoutParams(int i10, int i11) {
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        if (this.mIsStatusBarTranslucent) {
            i10 = 0;
        }
        if (this.mIsNavigationBarTranslucent) {
            i11 = 0;
        }
        layoutParams.setMargins(0, i10, 0, i11);
        return layoutParams;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$updateInsets$1(int i10, int i11) {
        FrameLayout.LayoutParams layoutParams = getLayoutParams(i10, i11);
        int i12 = f.f23354d;
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Log.e("Reanimated", "Unable to get reference to react activity");
        } else {
            currentActivity.getWindow().getDecorView().findViewById(i12).setLayoutParams(layoutParams);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$updateWindowDecor$0(boolean z10) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Log.e("Reanimated", "Unable to get reference to react activity");
        } else {
            x0.c(currentActivity.getWindow(), z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public WindowInsetsCompat onApplyWindowInsetsListener(View view, WindowInsetsCompat windowInsetsCompat) {
        WindowInsetsCompat W = i0.W(view, windowInsetsCompat);
        if (this.mKeyboard.getState() == KeyboardState.OPEN) {
            this.mKeyboard.updateHeight(windowInsetsCompat, this.mIsNavigationBarTranslucent);
            this.mNotifyAboutKeyboardChange.call();
        }
        setWindowInsets(W);
        return W;
    }

    private void setWindowInsets(WindowInsetsCompat windowInsetsCompat) {
        int h10 = WindowInsetsCompat.p.h();
        updateInsets(windowInsetsCompat.f(h10).f3305b, windowInsetsCompat.f(h10).f3307d);
    }

    private void updateInsets(final int i10, final int i11) {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.swmansion.reanimated.keyboard.d
            @Override // java.lang.Runnable
            public final void run() {
                WindowsInsetsManager.this.lambda$updateInsets$1(i10, i11);
            }
        });
    }

    private void updateWindowDecor(final boolean z10) {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.swmansion.reanimated.keyboard.c
            @Override // java.lang.Runnable
            public final void run() {
                WindowsInsetsManager.this.lambda$updateWindowDecor$0(z10);
            }
        });
    }

    public void startObservingChanges(KeyboardAnimationCallback keyboardAnimationCallback, boolean z10, boolean z11) {
        this.mIsStatusBarTranslucent = z10;
        this.mIsNavigationBarTranslucent = z11;
        updateWindowDecor(false);
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Log.e("Reanimated", "Unable to get reference to react activity");
            return;
        }
        View decorView = currentActivity.getWindow().getDecorView();
        i0.x0(decorView, new w() { // from class: com.swmansion.reanimated.keyboard.b
            @Override // androidx.core.view.w
            public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                WindowInsetsCompat onApplyWindowInsetsListener;
                onApplyWindowInsetsListener = WindowsInsetsManager.this.onApplyWindowInsetsListener(view, windowInsetsCompat);
                return onApplyWindowInsetsListener;
            }
        });
        i0.E0(decorView, keyboardAnimationCallback);
    }

    public void stopObservingChanges() {
        boolean z10;
        if (!this.mIsStatusBarTranslucent && !this.mIsNavigationBarTranslucent) {
            z10 = true;
        } else {
            z10 = false;
        }
        updateWindowDecor(z10);
        updateInsets(0, 0);
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            Log.e("Reanimated", "Unable to get reference to react activity");
            return;
        }
        View decorView = currentActivity.getWindow().getDecorView();
        i0.E0(decorView, null);
        i0.x0(decorView, null);
    }
}
