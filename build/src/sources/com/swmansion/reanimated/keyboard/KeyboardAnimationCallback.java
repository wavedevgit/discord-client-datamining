package com.swmansion.reanimated.keyboard;

import androidx.annotation.NonNull;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class KeyboardAnimationCallback extends x0.b {
    private static final int CONTENT_TYPE_MASK = WindowInsetsCompat.p.c();
    private final boolean mIsNavigationBarTranslucent;
    private final Keyboard mKeyboard;
    private final NotifyAboutKeyboardChangeFunction mNotifyAboutKeyboardChange;

    public KeyboardAnimationCallback(Keyboard keyboard, NotifyAboutKeyboardChangeFunction notifyAboutKeyboardChangeFunction, boolean z10) {
        super(1);
        this.mNotifyAboutKeyboardChange = notifyAboutKeyboardChangeFunction;
        this.mIsNavigationBarTranslucent = z10;
        this.mKeyboard = keyboard;
    }

    private static boolean isKeyboardAnimation(@NonNull x0 x0Var) {
        if ((x0Var.c() & CONTENT_TYPE_MASK) != 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(@NonNull x0 x0Var) {
        if (isKeyboardAnimation(x0Var)) {
            this.mKeyboard.onAnimationEnd();
            this.mNotifyAboutKeyboardChange.call();
        }
    }

    @Override // androidx.core.view.x0.b
    @NonNull
    public WindowInsetsCompat onProgress(@NonNull WindowInsetsCompat windowInsetsCompat, @NonNull List<x0> list) {
        Iterator<x0> it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            } else if (isKeyboardAnimation(it.next())) {
                this.mKeyboard.updateHeight(windowInsetsCompat, this.mIsNavigationBarTranslucent);
                this.mNotifyAboutKeyboardChange.call();
                break;
            }
        }
        return windowInsetsCompat;
    }

    @Override // androidx.core.view.x0.b
    @NonNull
    public x0.a onStart(@NonNull x0 x0Var, @NonNull x0.a aVar) {
        if (!isKeyboardAnimation(x0Var)) {
            return aVar;
        }
        this.mKeyboard.onAnimationStart();
        this.mNotifyAboutKeyboardChange.call();
        return super.onStart(x0Var, aVar);
    }
}
