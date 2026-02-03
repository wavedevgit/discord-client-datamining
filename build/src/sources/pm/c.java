package pm;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import gm.g;
import gm.h;
import gm.i;
import jm.k;
import jm.l;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends ReactViewGroup {

    /* renamed from: w  reason: collision with root package name */
    public static final a f46210w = new a(null);

    /* renamed from: x  reason: collision with root package name */
    private static final String f46211x = Reflection.getOrCreateKotlinClass(c.class).getSimpleName();

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f46212d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f46213e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f46214i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f46215o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f46216p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f46217q;

    /* renamed from: r  reason: collision with root package name */
    private ReactViewGroup f46218r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f46219s;

    /* renamed from: t  reason: collision with root package name */
    private k f46220t;

    /* renamed from: u  reason: collision with root package name */
    private final l f46221u;

    /* renamed from: v  reason: collision with root package name */
    private final mm.b f46222v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a() {
            return c.f46211x;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function0 {
        b(Object obj) {
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
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f46212d = reactContext;
        l lVar = new l(WindowInsetsCompat.p.h(), WindowInsetsCompat.p.c(), 1, this.f46214i);
        this.f46221u = lVar;
        this.f46222v = new mm.b(this, reactContext, lVar, new b(this));
        Activity currentActivity = reactContext.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        km.a.c(aVar, a10, "init: creating EdgeToEdgeReactViewGroup, activity=" + currentActivity + ", activityClass=" + str, null, 4, null);
        g.e(reactContext);
        setTag(f46211x);
    }

    private final void g() {
        km.a aVar = km.a.f33029a;
        km.a.c(aVar, d.a(), "disable: starting disable sequence", null, 4, null);
        o();
        k();
        this.f46222v.b();
        km.a.c(aVar, d.a(), "disable: completed", null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final k getKeyboardCallback() {
        return this.f46220t;
    }

    private final void h() {
        km.a aVar = km.a.f33029a;
        km.a.c(aVar, d.a(), "enable: starting enable sequence", null, 4, null);
        o();
        n();
        this.f46222v.c();
        km.a.c(aVar, d.a(), "enable: completed", null, 4, null);
    }

    private final void j() {
        o();
        i.c(this);
    }

    private final void k() {
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
        k kVar = this.f46220t;
        ReactViewGroup reactViewGroup = this.f46218r;
        km.a.c(aVar, a10, "removeKeyboardCallbacks: callback=" + kVar + ", eventView=" + reactViewGroup, null, 4, null);
        k kVar2 = this.f46220t;
        if (kVar2 != null) {
            kVar2.e();
        }
        final ReactViewGroup reactViewGroup2 = this.f46218r;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: pm.b
            @Override // java.lang.Runnable
            public final void run() {
                c.l(ReactViewGroup.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(ReactViewGroup reactViewGroup) {
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
        km.a.c(aVar, a10, "removeKeyboardCallbacks (posted): removing eventView=" + reactViewGroup, null, 4, null);
        h.a(reactViewGroup);
    }

    private final void n() {
        String str;
        Boolean bool;
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
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
        km.a.c(aVar, a10, "setupKeyboardCallbacks: activity=" + currentActivity + ", activityClass=" + str + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        if (currentActivity != null) {
            this.f46218r = new ReactViewGroup(getContext());
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: created eventView=" + this.f46218r, null, 4, null);
            ViewGroup b10 = gm.f.b(this.f46212d);
            if (b10 == null) {
                km.a.f(aVar, d.a(), "Can not setup keyboard animation listener, since `content` is null", null, 4, null);
                return;
            }
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: adding eventView to root", null, 4, null);
            b10.addView(this.f46218r);
            this.f46220t = new k(this, this, this.f46212d, this.f46221u);
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: created KeyboardAnimationCallback=" + this.f46220t, null, 4, null);
            ReactViewGroup reactViewGroup = this.f46218r;
            if (reactViewGroup != null) {
                km.a.c(aVar, d.a(), "setupKeyboardCallbacks: setting up WindowInsetsAnimationCallback on eventView", null, 4, null);
                h0.L0(reactViewGroup, this.f46220t);
                h0.D0(reactViewGroup, this.f46220t);
                i.c(reactViewGroup);
            }
            km.a.c(aVar, d.a(), "setupKeyboardCallbacks: completed successfully", null, 4, null);
            return;
        }
        km.a.f(aVar, d.a(), "setupKeyboardCallbacks: FAILED - currentActivity is null, cannot setup keyboard animation listener", null, 4, null);
    }

    private final void o() {
        String str;
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
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
        View c10 = gm.f.c(this.f46212d);
        if (c10 != null) {
            km.a.c(aVar, d.a(), "setupWindowInsets: rootView found, setting insets listener", null, 4, null);
            h0.D0(c10, new v() { // from class: pm.a
                @Override // androidx.core.view.v
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    WindowInsetsCompat p10;
                    p10 = c.p(c.this, view, windowInsetsCompat);
                    return p10;
                }
            });
            return;
        }
        km.a.f(aVar, d.a(), "setupWindowInsets: rootView is null, cannot set insets listener", null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat p(c cVar, View v10, WindowInsetsCompat insets) {
        String str;
        boolean z10;
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(insets, "insets");
        Activity currentActivity = cVar.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
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
        ViewGroup b10 = gm.f.b(cVar.f46212d);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        boolean z11 = cVar.f46216p;
        boolean z12 = true;
        int i12 = 0;
        if (z11 && !cVar.f46213e) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z11 && !cVar.f46214i) {
            z12 = false;
        }
        Insets f10 = insets.f(WindowInsetsCompat.p.f());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        Insets f11 = insets.f(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
        int i13 = f10.f3194a;
        if (z10) {
            i10 = 0;
        } else {
            i10 = f11.f3195b;
        }
        int i14 = f10.f3196c;
        if (z12) {
            i11 = 0;
        } else {
            i11 = f10.f3197d;
        }
        layoutParams.setMargins(i13, i10, i14, i11);
        if (b10 != null) {
            b10.setLayoutParams(layoutParams);
        }
        WindowInsetsCompat Z = h0.Z(v10, insets);
        Intrinsics.checkNotNullExpressionValue(Z, "onApplyWindowInsets(...)");
        int o10 = Z.o();
        if (!cVar.f46213e) {
            i12 = Z.q();
        }
        return Z.v(o10, i12, Z.p(), Z.n());
    }

    public final void i(boolean z10) {
        if (this.f46216p && this.f46213e != z10) {
            this.f46213e = z10;
            j();
        }
    }

    public final void m() {
        boolean z10;
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        km.a.c(aVar, d.a(), "setEdgeToEdge: active=" + this.f46216p + ", isPreservingEdgeToEdge=" + this.f46215o + ", isEdgeToEdge=" + this.f46217q + ", activity=" + currentActivity, null, 4, null);
        if (!this.f46216p && !this.f46215o) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f46217q != z10) {
            this.f46217q = z10;
            km.a.c(aVar, d.a(), "setEdgeToEdge: isEdgeToEdge changed to " + this.f46217q, null, 4, null);
            Activity currentActivity2 = this.f46212d.getCurrentActivity();
            if (currentActivity2 != null) {
                String a10 = d.a();
                StringBuilder sb2 = new StringBuilder();
                sb2.append("setEdgeToEdge: calling setDecorFitsSystemWindows with ");
                sb2.append(!this.f46217q);
                km.a.c(aVar, a10, sb2.toString(), null, 4, null);
                w0.c(currentActivity2.getWindow(), !this.f46217q);
                return;
            }
            km.a.f(aVar, d.a(), "setEdgeToEdge: FAILED - currentActivity is null, cannot set decor fits system windows", null, 4, null);
            return;
        }
        km.a.c(aVar, d.a(), "setEdgeToEdge: no change needed (isEdgeToEdge already " + this.f46217q + ")", null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        String str;
        Boolean bool;
        super.onAttachedToWindow();
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
        boolean z10 = this.f46219s;
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
        km.a.c(aVar, a10, "onAttachedToWindow: wasMounted=" + z10 + ", activity=" + currentActivity + ", activityClass=" + str + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        if (!this.f46219s) {
            this.f46219s = true;
        } else {
            n();
        }
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        j();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        String str;
        Boolean bool;
        super.onDetachedFromWindow();
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
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
        km.a.c(aVar, a10, "onDetachedFromWindow: activity=" + currentActivity + ", activityClass=" + str + ", isFinishing=" + bool + ", isDestroyed=" + bool2, null, 4, null);
        k();
    }

    public final void setActive(boolean z10) {
        String str;
        Activity currentActivity = this.f46212d.getCurrentActivity();
        km.a aVar = km.a.f33029a;
        String a10 = d.a();
        boolean z11 = this.f46216p;
        if (currentActivity != null) {
            str = currentActivity.getClass().getSimpleName();
        } else {
            str = null;
        }
        km.a.c(aVar, a10, "setActive: active=" + z10 + " (was " + z11 + "), activity=" + currentActivity + ", activityClass=" + str, null, 4, null);
        this.f46216p = z10;
        if (z10) {
            h();
        } else {
            g();
        }
    }

    public final void setNavigationBarTranslucent(boolean z10) {
        this.f46214i = z10;
        this.f46221u.e(z10);
    }

    public final void setPreserveEdgeToEdge(boolean z10) {
        this.f46215o = z10;
    }

    public final void setStatusBarTranslucent(boolean z10) {
        this.f46213e = z10;
    }
}
