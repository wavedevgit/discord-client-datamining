package com.facebook.react.devsupport;

import android.app.Activity;
import android.app.Dialog;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.FrameLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000)\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0016J\u0012\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0014¨\u0006\f"}, d2 = {"com/facebook/react/devsupport/RedBoxDialogSurfaceDelegate$show$2", "Landroid/app/Dialog;", "onKeyUp", "", "keyCode", "", "event", "Landroid/view/KeyEvent;", "onCreate", "", "savedInstanceState", "Landroid/os/Bundle;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RedBoxDialogSurfaceDelegate$show$2 extends Dialog {
    final /* synthetic */ RedBoxDialogSurfaceDelegate this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RedBoxDialogSurfaceDelegate$show$2(Activity activity, RedBoxDialogSurfaceDelegate redBoxDialogSurfaceDelegate, int i10) {
        super(activity, i10);
        this.this$0 = redBoxDialogSurfaceDelegate;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat onCreate$lambda$0(int i10, View view, WindowInsetsCompat windowInsetsCompat) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(windowInsetsCompat, "windowInsetsCompat");
        Insets f10 = windowInsetsCompat.f(i10);
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type android.widget.FrameLayout.LayoutParams");
        ((FrameLayout.LayoutParams) layoutParams).setMargins(f10.f3150a, f10.f3151b, f10.f3152c, f10.f3153d);
        return WindowInsetsCompat.f3251b;
    }

    @Override // android.app.Dialog
    protected void onCreate(Bundle bundle) {
        RedBoxContentView redBoxContentView;
        Window window = getWindow();
        if (window != null) {
            window.setBackgroundDrawable(new ColorDrawable(-16777216));
            final int h10 = WindowInsetsCompat.p.h() | WindowInsetsCompat.p.b();
            redBoxContentView = this.this$0.redBoxContentView;
            if (redBoxContentView != null) {
                androidx.core.view.h0.D0(redBoxContentView, new androidx.core.view.v() { // from class: com.facebook.react.devsupport.z0
                    @Override // androidx.core.view.v
                    public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                        WindowInsetsCompat onCreate$lambda$0;
                        onCreate$lambda$0 = RedBoxDialogSurfaceDelegate$show$2.onCreate$lambda$0(h10, view, windowInsetsCompat);
                        return onCreate$lambda$0;
                    }
                });
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // android.app.Dialog, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent event) {
        DoubleTapReloadRecognizer doubleTapReloadRecognizer;
        DevSupportManager devSupportManager;
        DevSupportManager devSupportManager2;
        Intrinsics.checkNotNullParameter(event, "event");
        if (i10 == 82) {
            devSupportManager2 = this.this$0.devSupportManager;
            devSupportManager2.showDevOptionsDialog();
            return true;
        }
        doubleTapReloadRecognizer = this.this$0.doubleTapReloadRecognizer;
        if (doubleTapReloadRecognizer.didDoubleTapR(i10, getCurrentFocus())) {
            devSupportManager = this.this$0.devSupportManager;
            devSupportManager.handleReloadJS();
        }
        return super.onKeyUp(i10, event);
    }
}
