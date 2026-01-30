package mm;

import android.app.Activity;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    public static final a f39117c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f39118a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39119b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public d(ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.f39118a = mReactContext;
        this.f39119b = f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(Activity activity, View view, boolean z10) {
        Object obj;
        InputMethodManager inputMethodManager = null;
        if (activity != null) {
            obj = activity.getSystemService("input_method");
        } else {
            obj = null;
        }
        if (obj instanceof InputMethodManager) {
            inputMethodManager = (InputMethodManager) obj;
        }
        if (inputMethodManager != null) {
            inputMethodManager.hideSoftInputFromWindow(view.getWindowToken(), 0);
        }
        if (!z10) {
            view.clearFocus();
        }
    }

    private final int f() {
        Window window;
        WindowManager.LayoutParams attributes;
        Activity currentActivity = this.f39118a.getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (attributes = window.getAttributes()) != null) {
            return attributes.softInputMode;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i() {
        nm.a.f41992a.a();
    }

    private final void k(final int i10) {
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: mm.b
            @Override // java.lang.Runnable
            public final void run() {
                d.l(d.this, i10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(d dVar, int i10) {
        Activity currentActivity;
        Window window;
        if (dVar.f() != i10 && (currentActivity = dVar.f39118a.getCurrentActivity()) != null && (window = currentActivity.getWindow()) != null) {
            window.setSoftInputMode(i10);
        }
    }

    public final void d(final boolean z10) {
        final Activity currentActivity = this.f39118a.getCurrentActivity();
        final EditText b10 = nm.a.f41992a.b();
        if (b10 != null) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: mm.c
                @Override // java.lang.Runnable
                public final void run() {
                    d.e(currentActivity, b10, z10);
                }
            });
        }
    }

    public final void g() {
        k(this.f39119b);
    }

    public final void h(String direction) {
        Intrinsics.checkNotNullParameter(direction, "direction");
        if (Intrinsics.areEqual(direction, "current")) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: mm.a
                @Override // java.lang.Runnable
                public final void run() {
                    d.i();
                }
            });
            return;
        }
        EditText b10 = nm.a.f41992a.b();
        if (b10 != null) {
            nm.c.f41995a.j(direction, b10);
        }
    }

    public final void j(int i10) {
        k(i10);
    }
}
