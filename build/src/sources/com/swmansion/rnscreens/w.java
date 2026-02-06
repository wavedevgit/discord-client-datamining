package com.swmansion.rnscreens;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.FrameLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010!\n\u0002\b\u0014\b\u0016\u0018\u0000 U2\u00020\u00012\u00020\u0002:\u0003V&RB\t\b\u0016¢\u0006\u0004\b\u0003\u0010\u0004B\u0011\b\u0017\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0003\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\t\u0010\u0004J-\u0010\u0011\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\r\u001a\u0004\u0018\u00010\f2\b\u0010\u000f\u001a\u0004\u0018\u00010\u000eH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\bH\u0016¢\u0006\u0004\b\u0013\u0010\u0004J\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0011\u0010\u0018\u001a\u0004\u0018\u00010\u0017H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u0011\u0010\u001b\u001a\u0004\u0018\u00010\u001aH\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ\u0017\u0010\u001f\u001a\u00020\u00142\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010!\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b!\u0010\"J\u001f\u0010$\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010#\u001a\u00020\u0002H\u0016¢\u0006\u0004\b$\u0010%J\u0017\u0010&\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b&\u0010\"J\u000f\u0010'\u001a\u00020\bH\u0016¢\u0006\u0004\b'\u0010\u0004J\u001f\u0010+\u001a\u00020\b2\u0006\u0010)\u001a\u00020(2\u0006\u0010*\u001a\u00020\u0014H\u0016¢\u0006\u0004\b+\u0010,J\u0017\u0010.\u001a\u00020\b2\u0006\u0010\r\u001a\u00020-H\u0016¢\u0006\u0004\b.\u0010/J\u0017\u00100\u001a\u00020\b2\u0006\u0010\r\u001a\u00020-H\u0016¢\u0006\u0004\b0\u0010/J\u000f\u00101\u001a\u00020\bH\u0016¢\u0006\u0004\b1\u0010\u0004J\u000f\u00102\u001a\u00020\bH\u0016¢\u0006\u0004\b2\u0010\u0004J\u000f\u00103\u001a\u00020\bH\u0016¢\u0006\u0004\b3\u0010\u0004J\u000f\u00104\u001a\u00020\bH\u0002¢\u0006\u0004\b4\u0010\u0004J\u000f\u00105\u001a\u00020\bH\u0002¢\u0006\u0004\b5\u0010\u0004J\u000f\u00106\u001a\u00020\bH\u0002¢\u0006\u0004\b6\u0010\u0004J\u000f\u00107\u001a\u00020\bH\u0002¢\u0006\u0004\b7\u0010\u0004J\u000f\u00108\u001a\u00020\bH\u0002¢\u0006\u0004\b8\u0010\u0004J\u0017\u0010:\u001a\u00020\b2\u0006\u00109\u001a\u00020\u0014H\u0002¢\u0006\u0004\b:\u0010;R(\u0010B\u001a\u00020\u00058\u0016@\u0016X\u0096.¢\u0006\u0018\n\u0004\b<\u0010=\u0012\u0004\bA\u0010\u0004\u001a\u0004\b>\u0010?\"\u0004\b@\u0010\u0007R \u0010H\u001a\b\u0012\u0004\u0012\u00020-0C8\u0016X\u0096\u0004¢\u0006\f\n\u0004\bD\u0010E\u001a\u0004\bF\u0010GR\u0016\u0010J\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010IR\u0016\u0010K\u001a\u00020(8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010+R\u0016\u0010M\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bL\u0010IR\u0016\u0010O\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bN\u0010IR\u0016\u0010Q\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bP\u0010IR\u0014\u0010T\u001a\u00020\u00018VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bR\u0010S¨\u0006W"}, d2 = {"Lcom/swmansion/rnscreens/w;", "Landroidx/fragment/app/Fragment;", "Lcom/swmansion/rnscreens/ScreenFragmentWrapper;", "<init>", "()V", "Lcom/swmansion/rnscreens/Screen;", "screenView", "(Lcom/swmansion/rnscreens/Screen;)V", "", "onResume", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "Landroid/os/Bundle;", "savedInstanceState", "Landroid/view/View;", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "l", "", "h", "()Z", "Landroid/app/Activity;", "i", "()Landroid/app/Activity;", "Lcom/facebook/react/bridge/ReactContext;", "o", "()Lcom/facebook/react/bridge/ReactContext;", "Lcom/swmansion/rnscreens/w$b;", "event", "y", "(Lcom/swmansion/rnscreens/w$b;)Z", "f", "(Lcom/swmansion/rnscreens/w$b;)V", "fragmentWrapper", "A", "(Lcom/swmansion/rnscreens/w$b;Lcom/swmansion/rnscreens/ScreenFragmentWrapper;)V", "c", "z", "", "alpha", "closing", "F", "(FZ)V", "Lcom/swmansion/rnscreens/ScreenContainer;", "k", "(Lcom/swmansion/rnscreens/ScreenContainer;)V", "m", "J", "I", "onDestroy", "L", "D", "B", "E", "C", "animationEnd", "G", "(Z)V", "d", "Lcom/swmansion/rnscreens/Screen;", "g", "()Lcom/swmansion/rnscreens/Screen;", "K", "getScreen$annotations", "screen", "", "e", "Ljava/util/List;", "j", "()Ljava/util/List;", "childScreenContainers", "Z", "shouldUpdateOnResume", "transitionProgress", "p", "canDispatchWillAppear", "q", "canDispatchAppear", "r", "isTransitioning", "a", "()Landroidx/fragment/app/Fragment;", "fragment", "s", "b", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenFragment.kt\ncom/swmansion/rnscreens/ScreenFragment\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,353:1\n1#2:354\n774#3:355\n865#3,2:356\n1869#3,2:358\n*S KotlinDebug\n*F\n+ 1 ScreenFragment.kt\ncom/swmansion/rnscreens/ScreenFragment\n*L\n233#1:355\n233#1:356,2\n233#1:358,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w extends Fragment implements ScreenFragmentWrapper {

    /* renamed from: s  reason: collision with root package name */
    public static final a f18377s = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public Screen f18378d;

    /* renamed from: e  reason: collision with root package name */
    private final List f18379e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f18380i;

    /* renamed from: o  reason: collision with root package name */
    private float f18381o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f18382p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f18383q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f18384r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final short a(float f10) {
            return (short) (f10 == 0.0f ? 1 : f10 == 1.0f ? 2 : 3);
        }

        private a() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f18385d = new b("DID_APPEAR", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f18386e = new b("WILL_APPEAR", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f18387i = new b("DID_DISAPPEAR", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f18388o = new b("WILL_DISAPPEAR", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ b[] f18389p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18390q;

        static {
            b[] a10 = a();
            f18389p = a10;
            f18390q = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f18385d, f18386e, f18387i, f18388o};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f18389p.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c extends FrameLayout {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Context context) {
            super(context);
            Intrinsics.checkNotNullParameter(context, "context");
        }

        @Override // android.view.ViewGroup, android.view.View
        public void clearFocus() {
            if (getVisibility() != 4) {
                super.clearFocus();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f18391a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f18386e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f18385d.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[b.f18388o.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[b.f18387i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f18391a = iArr;
        }
    }

    public w() {
        this.f18379e = new ArrayList();
        this.f18381o = -1.0f;
        this.f18382p = true;
        this.f18383q = true;
        throw new IllegalStateException("Screen fragments should never be restored. Follow instructions from https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-424704067 to properly configure your main activity.");
    }

    private final void B() {
        A(b.f18385d, this);
        F(1.0f, false);
    }

    private final void C() {
        A(b.f18387i, this);
        F(1.0f, true);
    }

    private final void D() {
        A(b.f18386e, this);
        F(0.0f, false);
    }

    private final void E() {
        A(b.f18388o, this);
        F(0.0f, true);
    }

    private final void G(final boolean z10) {
        this.f18384r = !z10;
        Fragment parentFragment = getParentFragment();
        if (parentFragment != null && (!(parentFragment instanceof w) || ((w) parentFragment).f18384r)) {
            return;
        }
        if (isResumed()) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.rnscreens.v
                @Override // java.lang.Runnable
                public final void run() {
                    w.H(z10, this);
                }
            });
        } else if (z10) {
            C();
        } else {
            E();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void H(boolean z10, w wVar) {
        if (z10) {
            wVar.B();
        } else {
            wVar.D();
        }
    }

    private final void L() {
        FragmentActivity activity = getActivity();
        if (activity == null) {
            this.f18380i = true;
        } else {
            v0.f18365a.x(g(), activity, o());
        }
    }

    public void A(b event, ScreenFragmentWrapper fragmentWrapper) {
        Event<?> kVar;
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(fragmentWrapper, "fragmentWrapper");
        Fragment a10 = fragmentWrapper.a();
        if (a10 instanceof n0) {
            n0 n0Var = (n0) a10;
            if (n0Var.y(event)) {
                Screen g10 = n0Var.g();
                fragmentWrapper.f(event);
                int surfaceId = UIManagerHelper.getSurfaceId(g10);
                int i10 = d.f18391a[event.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 == 4) {
                                kVar = new nn.g(surfaceId, g10.getId());
                            } else {
                                throw new qr.p();
                            }
                        } else {
                            kVar = new nn.l(surfaceId, g10.getId());
                        }
                    } else {
                        kVar = new nn.f(surfaceId, g10.getId());
                    }
                } else {
                    kVar = new nn.k(surfaceId, g10.getId());
                }
                Context context = g().getContext();
                Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, g().getId());
                if (eventDispatcherForReactTag != null) {
                    eventDispatcherForReactTag.dispatchEvent(kVar);
                }
                fragmentWrapper.c(event);
            }
        }
    }

    public void F(float f10, boolean z10) {
        boolean z11;
        if (!(this instanceof n0) || this.f18381o == f10) {
            return;
        }
        float max = Math.max(0.0f, Math.min(1.0f, f10));
        this.f18381o = max;
        short a10 = f18377s.a(max);
        n0 n0Var = (n0) this;
        ScreenContainer container = n0Var.g().getContainer();
        if (container instanceof ScreenStack) {
            z11 = ((ScreenStack) container).getGoingForward();
        } else {
            z11 = false;
        }
        boolean z12 = z11;
        Context context = n0Var.g().getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, n0Var.g().getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new nn.j(UIManagerHelper.getSurfaceId(reactContext), n0Var.g().getId(), this.f18381o, z10, z12, a10));
        }
    }

    public void I() {
        G(true);
    }

    public void J() {
        G(false);
    }

    public void K(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "<set-?>");
        this.f18378d = screen;
    }

    @Override // com.swmansion.rnscreens.i
    public Fragment a() {
        return this;
    }

    @Override // com.swmansion.rnscreens.u
    public void c(b event) {
        ScreenFragmentWrapper fragmentWrapper;
        Intrinsics.checkNotNullParameter(event, "event");
        ArrayList<ScreenContainer> arrayList = new ArrayList();
        for (Object obj : j()) {
            if (((ScreenContainer) obj).getScreenCount() > 0) {
                arrayList.add(obj);
            }
        }
        for (ScreenContainer screenContainer : arrayList) {
            Screen topScreen = screenContainer.getTopScreen();
            if (topScreen != null && (fragmentWrapper = topScreen.getFragmentWrapper()) != null) {
                A(event, fragmentWrapper);
            }
        }
    }

    @Override // com.swmansion.rnscreens.u
    public void f(b event) {
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f18391a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        this.f18383q = true;
                        return;
                    }
                    throw new qr.p();
                }
                this.f18382p = true;
                return;
            }
            this.f18383q = false;
            return;
        }
        this.f18382p = false;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public Screen g() {
        Screen screen = this.f18378d;
        if (screen != null) {
            return screen;
        }
        Intrinsics.throwUninitializedPropertyAccessException("screen");
        return null;
    }

    public boolean h() {
        return false;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public Activity i() {
        Fragment fragment;
        FragmentActivity activity;
        FragmentActivity activity2 = getActivity();
        if (activity2 != null) {
            return activity2;
        }
        Context context = g().getContext();
        if (context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            if (reactContext.getCurrentActivity() != null) {
                return reactContext.getCurrentActivity();
            }
        }
        for (ViewParent container = g().getContainer(); container != null; container = container.getParent()) {
            if ((container instanceof Screen) && (fragment = ((Screen) container).getFragment()) != null && (activity = fragment.getActivity()) != null) {
                return activity;
            }
        }
        return null;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public List j() {
        return this.f18379e;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public void k(ScreenContainer container) {
        Intrinsics.checkNotNullParameter(container, "container");
        j().add(container);
    }

    public void l() {
        L();
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public void m(ScreenContainer container) {
        Intrinsics.checkNotNullParameter(container, "container");
        j().remove(container);
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public ReactContext o() {
        if (getContext() instanceof ReactContext) {
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            return (ReactContext) context;
        } else if (g().getContext() instanceof ReactContext) {
            Context context2 = g().getContext();
            Intrinsics.checkNotNull(context2, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            return (ReactContext) context2;
        } else {
            for (ViewParent container = g().getContainer(); container != null; container = container.getParent()) {
                if (container instanceof Screen) {
                    Screen screen = (Screen) container;
                    if (screen.getContext() instanceof ReactContext) {
                        Context context3 = screen.getContext();
                        Intrinsics.checkNotNull(context3, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                        return (ReactContext) context3;
                    }
                }
            }
            return null;
        }
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        g().setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        Context context = getContext();
        if (context != null) {
            c cVar = new c(context);
            cVar.addView(on.c.b(g()));
            return cVar;
        }
        return null;
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroy() {
        super.onDestroy();
        ScreenContainer container = g().getContainer();
        if (container == null || !container.hasScreen(g().getFragmentWrapper())) {
            Context context = g().getContext();
            if (context instanceof ReactContext) {
                int surfaceId = UIManagerHelper.getSurfaceId(context);
                EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, g().getId());
                if (eventDispatcherForReactTag != null) {
                    eventDispatcherForReactTag.dispatchEvent(new nn.h(surfaceId, g().getId()));
                }
            }
        }
        j().clear();
    }

    @Override // androidx.fragment.app.Fragment
    public void onResume() {
        super.onResume();
        if (this.f18380i) {
            this.f18380i = false;
            v0.f18365a.x(g(), i(), o());
        }
    }

    public boolean y(b event) {
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f18391a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        if (!this.f18383q) {
                            return true;
                        }
                        return false;
                    }
                    throw new qr.p();
                } else if (!this.f18382p) {
                    return true;
                } else {
                    return false;
                }
            }
            return this.f18383q;
        }
        return this.f18382p;
    }

    public void z() {
        Context context = g().getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, g().getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new nn.b(surfaceId, g().getId()));
        }
    }

    public w(Screen screenView) {
        Intrinsics.checkNotNullParameter(screenView, "screenView");
        this.f18379e = new ArrayList();
        this.f18381o = -1.0f;
        this.f18382p = true;
        this.f18383q = true;
        K(screenView);
    }
}
