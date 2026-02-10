package com.swmansion.rnscreens;

import android.util.Log;
import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import java.lang.ref.WeakReference;
import java.util.HashSet;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements androidx.core.view.w, LifecycleEventListener {

    /* renamed from: o  reason: collision with root package name */
    private static boolean f19293o;

    /* renamed from: p  reason: collision with root package name */
    private static boolean f19294p;

    /* renamed from: d  reason: collision with root package name */
    public static final k f19290d = new k();

    /* renamed from: e  reason: collision with root package name */
    private static final HashSet f19291e = new HashSet();

    /* renamed from: i  reason: collision with root package name */
    private static WeakReference f19292i = new WeakReference(null);

    /* renamed from: q  reason: collision with root package name */
    private static boolean f19295q = true;

    private k() {
    }

    private final boolean c() {
        if (f19293o && f19292i.get() != null) {
            return false;
        }
        return true;
    }

    private final View d() {
        return (View) f19292i.get();
    }

    @Override // androidx.core.view.w
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        WindowInsetsCompat windowInsetsCompat;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        if (f19295q) {
            windowInsetsCompat = androidx.core.view.i0.W(v10, insets);
        } else {
            windowInsetsCompat = insets;
        }
        Intrinsics.checkNotNull(windowInsetsCompat);
        for (androidx.core.view.w wVar : f19291e) {
            windowInsetsCompat = wVar.a(v10, insets);
            Intrinsics.checkNotNullExpressionValue(windowInsetsCompat, "onApplyWindowInsets(...)");
        }
        return windowInsetsCompat;
    }

    public final void b(androidx.core.view.w listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        f19291e.add(listener);
    }

    public final boolean e(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (c()) {
            androidx.core.view.i0.x0(view, this);
            f19292i = new WeakReference(view);
            f19293o = true;
            return true;
        }
        return false;
    }

    public final void f(ReactApplicationContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (f19294p) {
            Log.w("[RNScreens]", "InsetObserverProxy registers on new context while it has not been invalidated on the old one. Please report this as issue at https://github.com/software-mansion/react-native-screens/issues");
        }
        f19294p = true;
        context.addLifecycleEventListener(this);
    }

    public final void g(androidx.core.view.w listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        f19291e.remove(listener);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        View d10 = d();
        if (f19293o && d10 != null) {
            androidx.core.view.i0.x0(d10, null);
            f19293o = false;
            f19292i.clear();
        }
        f19294p = false;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
    }
}
