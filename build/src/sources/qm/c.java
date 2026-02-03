package qm;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.Configuration;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.Window;
import android.widget.FrameLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import gm.h;
import gm.i;
import jm.k;
import jm.l;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f47945d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47946e;

    /* renamed from: i  reason: collision with root package name */
    private final int f47947i;

    /* renamed from: o  reason: collision with root package name */
    private final int f47948o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f47949p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f47950q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f47951r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f47952s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f47953t;

    /* renamed from: u  reason: collision with root package name */
    private ReactViewGroup f47954u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f47955v;

    /* renamed from: w  reason: collision with root package name */
    private k f47956w;

    /* renamed from: x  reason: collision with root package name */
    private final l f47957x;

    /* renamed from: y  reason: collision with root package name */
    private final mm.b f47958y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {
        a(Object obj) {
            super(0, obj, c.class, "getKeyboardCallback", "getKeyboardCallback()Lcom/reactnativekeyboardcontroller/listeners/KeyboardAnimationCallback;", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final k invoke() {
            return ((c) this.receiver).getKeyboardCallback();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ThemedReactContext reactContext) {
        super(reactContext);
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f47945d = reactContext;
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        this.f47946e = str;
        this.f47947i = System.identityHashCode(reactContext.getCurrentActivity());
        int identityHashCode = System.identityHashCode(this);
        this.f47948o = identityHashCode;
        l lVar = new l(WindowInsetsCompat.p.h(), WindowInsetsCompat.p.c(), 1, this.f47950q);
        this.f47957x = lVar;
        this.f47958y = new mm.b(this, reactContext, lVar, new a(this));
        Activity currentActivity2 = reactContext.getCurrentActivity();
        Activity activityFromContext = getActivityFromContext();
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        if (currentActivity2 != null) {
            str2 = currentActivity2.getClass().getSimpleName();
        } else {
            str2 = null;
        }
        km.a.c(aVar, a10, "init: creating EdgeToEdgeReactViewGroup, instanceId=" + identityHashCode + ", currentActivity=" + str2 + ", owningActivity=" + (activityFromContext != null ? activityFromContext.getClass().getSimpleName() : null), null, 4, null);
        e.f47960a.b(this);
    }

    private final void f() {
        o();
        this.f47958y.c();
    }

    private final void g() {
        l();
        this.f47958y.b();
    }

    private final Activity getActivityFromContext() {
        ContextWrapper contextWrapper;
        Context context = getContext();
        while (context != null) {
            if (context instanceof Activity) {
                return (Activity) context;
            }
            if (context instanceof ContextWrapper) {
                contextWrapper = (ContextWrapper) context;
            } else {
                contextWrapper = null;
            }
            if (contextWrapper != null) {
                context = contextWrapper.getBaseContext();
            } else {
                context = null;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final k getKeyboardCallback() {
        return this.f47956w;
    }

    private final void h() {
        km.a aVar = km.a.f32427a;
        km.a.c(aVar, d.a(), "disable: starting disable sequence", null, 4, null);
        p();
        g();
        km.a.c(aVar, d.a(), "disable: completed", null, 4, null);
    }

    private final void i() {
        km.a aVar = km.a.f32427a;
        km.a.c(aVar, d.a(), "enable: starting enable sequence", null, 4, null);
        p();
        f();
        km.a.c(aVar, d.a(), "enable: completed", null, 4, null);
    }

    private final void k() {
        p();
        i.d(this);
    }

    private final void l() {
        ViewParent viewParent;
        String str;
        Activity currentActivity = this.f47945d.getCurrentActivity();
        int identityHashCode = System.identityHashCode(currentActivity);
        ReactViewGroup reactViewGroup = this.f47954u;
        final ViewParent viewParent2 = null;
        if (reactViewGroup != null) {
            viewParent = reactViewGroup.getParent();
        } else {
            viewParent = null;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = this.f47948o;
        String str2 = this.f47946e;
        int i11 = this.f47947i;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        km.a.c(aVar, a10, "removeKeyboardCallbacks: instanceId=" + i10 + ", creationActivity=" + str2 + "@" + i11 + ", currentActivity=" + str + "@" + identityHashCode + ", callback=" + this.f47956w + ", eventView=" + this.f47954u + ", eventViewParent=" + viewParent + " (parentId=" + System.identityHashCode(viewParent) + ")", null, 4, null);
        k kVar = this.f47956w;
        if (kVar != null) {
            kVar.e();
        }
        final ReactViewGroup reactViewGroup2 = this.f47954u;
        if (reactViewGroup2 != null) {
            viewParent2 = reactViewGroup2.getParent();
        }
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: qm.b
            @Override // java.lang.Runnable
            public final void run() {
                c.m(ReactViewGroup.this, this, viewParent2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(ReactViewGroup reactViewGroup, c cVar, ViewParent viewParent) {
        ViewParent viewParent2;
        if (reactViewGroup != null) {
            viewParent2 = reactViewGroup.getParent();
        } else {
            viewParent2 = null;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = cVar.f47948o;
        int identityHashCode = System.identityHashCode(viewParent);
        int identityHashCode2 = System.identityHashCode(viewParent2);
        km.a.c(aVar, a10, "removeKeyboardCallbacks (posted): instanceId=" + i10 + ", removing eventView=" + reactViewGroup + ", parentAtCapture=" + viewParent + " (id=" + identityHashCode + "), parentAtRemoval=" + viewParent2 + " (id=" + identityHashCode2 + ")", null, 4, null);
        h.a(reactViewGroup);
    }

    private final void o() {
        boolean z10;
        String str;
        String str2;
        Boolean bool;
        Boolean bool2;
        ViewParent viewParent;
        String str3;
        String str4;
        String str5;
        Activity currentActivity = this.f47945d.getCurrentActivity();
        int identityHashCode = System.identityHashCode(currentActivity);
        Activity activityFromContext = getActivityFromContext();
        int identityHashCode2 = System.identityHashCode(activityFromContext);
        boolean z11 = false;
        if (identityHashCode != this.f47947i) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (identityHashCode != identityHashCode2) {
            z11 = true;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = this.f47948o;
        if (activityFromContext != null) {
            str = activityFromContext.getClass().getSimpleName();
        } else {
            str = null;
        }
        String str6 = this.f47946e;
        int i11 = this.f47947i;
        if (currentActivity != null) {
            str2 = currentActivity.getClass().getSimpleName();
        } else {
            str2 = null;
        }
        if (currentActivity != null) {
            bool = Boolean.valueOf(currentActivity.isFinishing());
        } else {
            bool = null;
        }
        if (currentActivity != null) {
            bool2 = Boolean.valueOf(currentActivity.isDestroyed());
        } else {
            bool2 = null;
        }
        km.a.c(aVar, a10, "setupKeyboardCallbacks: instanceId=" + i10 + ", owningActivity=" + str + "@" + identityHashCode2 + ", creationActivity=" + str6 + "@" + i11 + ", currentActivity=" + str2 + "@" + identityHashCode + ", activityMismatch=" + z10 + ", owningMismatch=" + z11 + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        if (z10) {
            String a11 = d.a();
            String str7 = this.f47946e;
            int i12 = this.f47947i;
            if (currentActivity != null) {
                str5 = currentActivity.getClass().getSimpleName();
            } else {
                str5 = null;
            }
            km.a.f(aVar, a11, "setupKeyboardCallbacks: WARNING - Activity mismatch detected! creationActivity=" + str7 + "@" + i12 + ", currentActivity=" + str5 + "@" + identityHashCode + ". eventView may be added to wrong root!", null, 4, null);
        }
        if (z11) {
            String a12 = d.a();
            if (activityFromContext != null) {
                str3 = activityFromContext.getClass().getSimpleName();
            } else {
                str3 = null;
            }
            if (currentActivity != null) {
                str4 = currentActivity.getClass().getSimpleName();
            } else {
                str4 = null;
            }
            km.a.f(aVar, a12, "setupKeyboardCallbacks: PROPOSED FIX - owningActivity=" + str3 + "@" + identityHashCode2 + " differs from currentActivity=" + str4 + "@" + identityHashCode + ". Using owningActivity would have prevented this!", null, 4, null);
        }
        if (currentActivity != null) {
            this.f47954u = new ReactViewGroup(getContext());
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: created eventView=" + this.f47954u, null, 4, null);
            ViewGroup b10 = gm.f.b(this.f47945d);
            if (b10 == null) {
                km.a.f(aVar, d.a(), "Can not setup keyboard animation listener, since `content` is null", null, 4, null);
                return;
            }
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: adding eventView to root=" + b10 + " (rootId=" + System.identityHashCode(b10) + "), activityMismatch=" + z10, null, 4, null);
            b10.addView(this.f47954u);
            ReactViewGroup reactViewGroup = this.f47954u;
            if (reactViewGroup != null) {
                viewParent = reactViewGroup.getParent();
            } else {
                viewParent = null;
            }
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: eventView added, parent=" + viewParent + " (parentId=" + System.identityHashCode(viewParent) + ")", null, 4, null);
            this.f47956w = new k(this, this, this.f47945d, this.f47957x);
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: created KeyboardAnimationCallback=" + this.f47956w, null, 4, null);
            ReactViewGroup reactViewGroup2 = this.f47954u;
            if (reactViewGroup2 != null) {
                km.a.c(aVar, d.a(), "setupKeyboardCallbacks: setting up WindowInsetsAnimationCallback on eventView", null, 4, null);
                h0.L0(reactViewGroup2, this.f47956w);
                h0.D0(reactViewGroup2, this.f47956w);
                i.d(reactViewGroup2);
            }
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: completed successfully, activityMismatch=" + z10, null, 4, null);
            return;
        }
        km.a.f(aVar, d.a(), "setupKeyboardCallbacks: FAILED - currentActivity is null, cannot setup keyboard animation listener", null, 4, null);
    }

    private final void p() {
        String str;
        Activity currentActivity = this.f47945d.getCurrentActivity();
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        Boolean bool = null;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        if (currentActivity != null) {
            bool = Boolean.valueOf(currentActivity.isFinishing());
        }
        km.a.c(aVar, a10, "setupWindowInsets: activity=" + currentActivity + ", activityClass=" + str + ", isFinishing=" + bool, null, 4, null);
        View c10 = gm.f.c(this.f47945d);
        if (c10 != null) {
            km.a.c(aVar, d.a(), "setupWindowInsets: rootView found, setting insets listener", null, 4, null);
            h0.D0(c10, new v() { // from class: qm.a
                @Override // androidx.core.view.v
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    WindowInsetsCompat q10;
                    q10 = c.q(c.this, view, windowInsetsCompat);
                    return q10;
                }
            });
            return;
        }
        km.a.f(aVar, d.a(), "setupWindowInsets: rootView is null, cannot set insets listener", null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat q(c cVar, View v10, WindowInsetsCompat insets) {
        String str;
        boolean z10;
        int i10;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        Activity currentActivity = cVar.f47945d.getCurrentActivity();
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        Boolean bool = null;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        if (currentActivity != null) {
            bool = Boolean.valueOf(currentActivity.isFinishing());
        }
        km.a.c(aVar, a10, "onApplyWindowInsets callback: activity=" + currentActivity + ", activityClass=" + str + ", isFinishing=" + bool, null, 4, null);
        ViewGroup b10 = gm.f.b(cVar.f47945d);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        boolean z11 = cVar.f47953t;
        boolean z12 = true;
        int i11 = 0;
        if (z11 && !cVar.f47949p) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z11 && !cVar.f47950q) {
            z12 = false;
        }
        Insets f10 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        int i12 = f10.f3163a;
        if (z10) {
            i10 = 0;
        } else {
            i10 = f11.f3164b;
        }
        int i13 = f10.f3165c;
        if (!z12) {
            i11 = f10.f3166d;
        }
        layoutParams.setMargins(i12, i10, i13, i11);
        if (b10 != null) {
            b10.setLayoutParams(layoutParams);
        }
        return i.c(v10, insets, cVar.f47949p, cVar.f47953t);
    }

    public final boolean getActive() {
        return this.f47953t;
    }

    public final k getCallback$react_native_keyboard_controller_release() {
        return this.f47956w;
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.f47945d;
    }

    public final void j(boolean z10) {
        if (this.f47953t && this.f47949p != z10) {
            this.f47949p = z10;
            k();
        }
    }

    public final void n() {
        boolean z10;
        Window window;
        Activity currentActivity = this.f47945d.getCurrentActivity();
        km.a aVar = km.a.f32427a;
        km.a.c(aVar, d.a(), "setEdgeToEdge: active=" + this.f47953t + ", isPreservingEdgeToEdge=" + this.f47951r + ", isEdgeToEdge=" + this.f47952s + ", activity=" + currentActivity, null, 4, null);
        if (!this.f47953t && !this.f47951r) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f47952s != z10) {
            this.f47952s = z10;
            km.a.c(aVar, d.a(), "setEdgeToEdge: isEdgeToEdge changed to " + this.f47952s, null, 4, null);
            Activity currentActivity2 = this.f47945d.getCurrentActivity();
            if (currentActivity2 != null) {
                String a10 = d.a();
                StringBuilder sb2 = new StringBuilder();
                sb2.append("setEdgeToEdge: calling setDecorFitsSystemWindows with ");
                sb2.append(!this.f47952s);
                km.a.c(aVar, a10, sb2.toString(), null, 4, null);
                w0.c(currentActivity2.getWindow(), !this.f47952s);
            } else {
                km.a.f(aVar, d.a(), "setEdgeToEdge: FAILED - currentActivity is null, cannot set decor fits system windows", null, 4, null);
            }
            Activity currentActivity3 = this.f47945d.getCurrentActivity();
            if (currentActivity3 != null && (window = currentActivity3.getWindow()) != null) {
                window.clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
                return;
            }
            return;
        }
        km.a.c(aVar, d.a(), "setEdgeToEdge: no change needed (isEdgeToEdge already " + this.f47952s + ")", null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        boolean z10;
        String str;
        String str2;
        Boolean bool;
        Boolean bool2;
        super.onAttachedToWindow();
        Activity currentActivity = this.f47945d.getCurrentActivity();
        int identityHashCode = System.identityHashCode(currentActivity);
        Activity activityFromContext = getActivityFromContext();
        int identityHashCode2 = System.identityHashCode(activityFromContext);
        boolean z11 = false;
        if (identityHashCode != this.f47947i) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (identityHashCode != identityHashCode2) {
            z11 = true;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = this.f47948o;
        if (activityFromContext != null) {
            str = activityFromContext.getClass().getSimpleName();
        } else {
            str = null;
        }
        String str3 = this.f47946e;
        int i11 = this.f47947i;
        boolean z12 = this.f47955v;
        if (currentActivity != null) {
            str2 = currentActivity.getClass().getSimpleName();
        } else {
            str2 = null;
        }
        if (currentActivity != null) {
            bool = Boolean.valueOf(currentActivity.isFinishing());
        } else {
            bool = null;
        }
        if (currentActivity != null) {
            bool2 = Boolean.valueOf(currentActivity.isDestroyed());
        } else {
            bool2 = null;
        }
        km.a.c(aVar, a10, "onAttachedToWindow: instanceId=" + i10 + ", owningActivity=" + str + "@" + identityHashCode2 + ", creationActivity=" + str3 + "@" + i11 + ", wasMounted=" + z12 + ", currentActivity=" + str2 + "@" + identityHashCode + ", activityMismatch=" + z10 + ", owningMismatch=" + z11 + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        if (!this.f47955v) {
            this.f47955v = true;
        } else {
            f();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        k();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        boolean z10;
        String str;
        Boolean bool;
        super.onDetachedFromWindow();
        Activity currentActivity = this.f47945d.getCurrentActivity();
        int identityHashCode = System.identityHashCode(currentActivity);
        if (identityHashCode != this.f47947i) {
            z10 = true;
        } else {
            z10 = false;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = this.f47948o;
        String str2 = this.f47946e;
        int i11 = this.f47947i;
        Boolean bool2 = null;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        if (currentActivity != null) {
            bool = Boolean.valueOf(currentActivity.isFinishing());
        } else {
            bool = null;
        }
        if (currentActivity != null) {
            bool2 = Boolean.valueOf(currentActivity.isDestroyed());
        }
        km.a.c(aVar, a10, "onDetachedFromWindow: instanceId=" + i10 + ", creationActivity=" + str2 + "@" + i11 + ", currentActivity=" + str + "@" + identityHashCode + ", activityMismatch=" + z10 + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        g();
    }

    public final void setActive(boolean z10) {
        boolean z11;
        String str;
        Activity currentActivity = this.f47945d.getCurrentActivity();
        int identityHashCode = System.identityHashCode(currentActivity);
        if (identityHashCode != this.f47947i) {
            z11 = true;
        } else {
            z11 = false;
        }
        km.a aVar = km.a.f32427a;
        String a10 = d.a();
        int i10 = this.f47948o;
        boolean z12 = this.f47953t;
        String str2 = this.f47946e;
        int i11 = this.f47947i;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        km.a.c(aVar, a10, "setActive: instanceId=" + i10 + ", active=" + z10 + " (was " + z12 + "), creationActivity=" + str2 + "@" + i11 + ", currentActivity=" + str + "@" + identityHashCode + ", activityMismatch=" + z11, null, 4, null);
        this.f47953t = z10;
        if (z10) {
            i();
        } else {
            h();
        }
    }

    public final void setCallback$react_native_keyboard_controller_release(k kVar) {
        this.f47956w = kVar;
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        this.f47950q = z10;
        this.f47957x.e(z10);
    }

    public final void setPreserveEdgeToEdge(boolean z10) {
        this.f47951r = z10;
    }

    public final void setStatusBarTranslucent(boolean z10) {
        this.f47949p = z10;
    }
}
