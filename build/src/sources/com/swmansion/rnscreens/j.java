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
public final class j implements androidx.core.view.v, LifecycleEventListener {

    /* renamed from: o  reason: collision with root package name */
    private static boolean f18279o;

    /* renamed from: p  reason: collision with root package name */
    private static boolean f18280p;

    /* renamed from: d  reason: collision with root package name */
    public static final j f18276d = new j();

    /* renamed from: e  reason: collision with root package name */
    private static final HashSet f18277e = new HashSet();

    /* renamed from: i  reason: collision with root package name */
    private static WeakReference f18278i = new WeakReference(null);

    /* renamed from: q  reason: collision with root package name */
    private static boolean f18281q = true;

    private j() {
    }

    private final boolean c() {
        if (f18279o && f18278i.get() != null) {
            return false;
        }
        return true;
    }

    private final View d() {
        return (View) f18278i.get();
    }

    @Override // androidx.core.view.v
    public WindowInsetsCompat a(View v10, WindowInsetsCompat insets) {
        WindowInsetsCompat windowInsetsCompat;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        if (f18281q) {
            windowInsetsCompat = androidx.core.view.h0.Z(v10, insets);
        } else {
            windowInsetsCompat = insets;
        }
        Intrinsics.checkNotNull(windowInsetsCompat);
        for (androidx.core.view.v vVar : f18277e) {
            windowInsetsCompat = vVar.a(v10, insets);
            Intrinsics.checkNotNullExpressionValue(windowInsetsCompat, "onApplyWindowInsets(...)");
        }
        return windowInsetsCompat;
    }

    public final void b(androidx.core.view.v listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        f18277e.add(listener);
    }

    public final boolean e(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (c()) {
            androidx.core.view.h0.D0(view, this);
            f18278i = new WeakReference(view);
            f18279o = true;
            return true;
        }
        return false;
    }

    public final void f(ReactApplicationContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (f18280p) {
            Log.w("[RNScreens]", "InsetObserverProxy registers on new context while it has not been invalidated on the old one. Please report this as issue at https://github.com/software-mansion/react-native-screens/issues");
        }
        f18280p = true;
        context.addLifecycleEventListener(this);
    }

    public final void g(androidx.core.view.v listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        f18277e.remove(listener);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        View d10 = d();
        if (f18279o && d10 != null) {
            androidx.core.view.h0.D0(d10, null);
            f18279o = false;
            f18278i.clear();
        }
        f18280p = false;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
    }
}
