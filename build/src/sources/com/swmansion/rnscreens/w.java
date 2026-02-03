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
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010!\n\u0002\b\u0012\b\u0016\u0018\u0000 T2\u00020\u00012\u00020\u0002:\u0003\u0018Q\u0015B\t\b\u0016¢\u0006\u0004\b\u0003\u0010\u0004B\u0011\b\u0017\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0003\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\t\u0010\u0004J-\u0010\u0011\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\r\u001a\u0004\u0018\u00010\f2\b\u0010\u000f\u001a\u0004\u0018\u00010\u000eH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\bH\u0016¢\u0006\u0004\b\u0013\u0010\u0004J\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0011\u0010\u0018\u001a\u0004\u0018\u00010\u0017H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u0011\u0010\u001b\u001a\u0004\u0018\u00010\u001aH\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ\u0017\u0010\u001f\u001a\u00020\u00142\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010!\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b!\u0010\"J\u001f\u0010$\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010#\u001a\u00020\u0002H\u0016¢\u0006\u0004\b$\u0010%J\u0017\u0010&\u001a\u00020\b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b&\u0010\"J\u000f\u0010'\u001a\u00020\bH\u0016¢\u0006\u0004\b'\u0010\u0004J\u001f\u0010+\u001a\u00020\b2\u0006\u0010)\u001a\u00020(2\u0006\u0010*\u001a\u00020\u0014H\u0016¢\u0006\u0004\b+\u0010,J\u0017\u0010.\u001a\u00020\b2\u0006\u0010\r\u001a\u00020-H\u0016¢\u0006\u0004\b.\u0010/J\u0017\u00100\u001a\u00020\b2\u0006\u0010\r\u001a\u00020-H\u0016¢\u0006\u0004\b0\u0010/J\u000f\u00101\u001a\u00020\bH\u0016¢\u0006\u0004\b1\u0010\u0004J\u000f\u00102\u001a\u00020\bH\u0016¢\u0006\u0004\b2\u0010\u0004J\u000f\u00103\u001a\u00020\bH\u0016¢\u0006\u0004\b3\u0010\u0004J\u000f\u00104\u001a\u00020\bH\u0002¢\u0006\u0004\b4\u0010\u0004J\u000f\u00105\u001a\u00020\bH\u0002¢\u0006\u0004\b5\u0010\u0004J\u000f\u00106\u001a\u00020\bH\u0002¢\u0006\u0004\b6\u0010\u0004J\u000f\u00107\u001a\u00020\bH\u0002¢\u0006\u0004\b7\u0010\u0004J\u000f\u00108\u001a\u00020\bH\u0002¢\u0006\u0004\b8\u0010\u0004J\u0017\u0010:\u001a\u00020\b2\u0006\u00109\u001a\u00020\u0014H\u0002¢\u0006\u0004\b:\u0010;R(\u0010B\u001a\u00020\u00058\u0016@\u0016X\u0096.¢\u0006\u0018\n\u0004\b<\u0010=\u0012\u0004\bA\u0010\u0004\u001a\u0004\b>\u0010?\"\u0004\b@\u0010\u0007R \u0010G\u001a\b\u0012\u0004\u0012\u00020-0C8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b&\u0010D\u001a\u0004\bE\u0010FR\u0016\u0010I\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010HR\u0016\u0010J\u001a\u00020(8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010+R\u0016\u0010L\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bK\u0010HR\u0016\u0010N\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bM\u0010HR\u0016\u0010P\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bO\u0010HR\u0014\u0010S\u001a\u00020\u00018VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bQ\u0010R¨\u0006U"}, d2 = {"Lcom/swmansion/rnscreens/w;", "Landroidx/fragment/app/Fragment;", "Lcom/swmansion/rnscreens/ScreenFragmentWrapper;", "<init>", "()V", "Lcom/swmansion/rnscreens/Screen;", "screenView", "(Lcom/swmansion/rnscreens/Screen;)V", "", "onResume", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "Landroid/os/Bundle;", "savedInstanceState", "Landroid/view/View;", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "i", "", "a", "()Z", "Landroid/app/Activity;", "b", "()Landroid/app/Activity;", "Lcom/facebook/react/bridge/ReactContext;", "o", "()Lcom/facebook/react/bridge/ReactContext;", "Lcom/swmansion/rnscreens/w$b;", "event", "y", "(Lcom/swmansion/rnscreens/w$b;)Z", "m", "(Lcom/swmansion/rnscreens/w$b;)V", "fragmentWrapper", "A", "(Lcom/swmansion/rnscreens/w$b;Lcom/swmansion/rnscreens/ScreenFragmentWrapper;)V", "e", "z", "", "alpha", "closing", "F", "(FZ)V", "Lcom/swmansion/rnscreens/ScreenContainer;", "g", "(Lcom/swmansion/rnscreens/ScreenContainer;)V", "l", "J", "I", "onDestroy", "L", "D", "B", "E", "C", "animationEnd", "G", "(Z)V", "d", "Lcom/swmansion/rnscreens/Screen;", "h", "()Lcom/swmansion/rnscreens/Screen;", "K", "getScreen$annotations", "screen", "", "Ljava/util/List;", "f", "()Ljava/util/List;", "childScreenContainers", "Z", "shouldUpdateOnResume", "transitionProgress", "p", "canDispatchWillAppear", "q", "canDispatchAppear", "r", "isTransitioning", "c", "()Landroidx/fragment/app/Fragment;", "fragment", "s", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenFragment.kt\ncom/swmansion/rnscreens/ScreenFragment\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,353:1\n1#2:354\n774#3:355\n865#3,2:356\n1869#3,2:358\n*S KotlinDebug\n*F\n+ 1 ScreenFragment.kt\ncom/swmansion/rnscreens/ScreenFragment\n*L\n233#1:355\n233#1:356,2\n233#1:358,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w extends Fragment implements ScreenFragmentWrapper {

    /* renamed from: s  reason: collision with root package name */
    public static final a f17991s = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public Screen f17992d;

    /* renamed from: e  reason: collision with root package name */
    private final List f17993e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f17994i;

    /* renamed from: o  reason: collision with root package name */
    private float f17995o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f17996p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f17997q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f17998r;

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
        public static final b f17999d = new b("DID_APPEAR", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f18000e = new b("WILL_APPEAR", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final b f18001i = new b("DID_DISAPPEAR", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final b f18002o = new b("WILL_DISAPPEAR", 3);

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ b[] f18003p;

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18004q;

        static {
            b[] a10 = a();
            f18003p = a10;
            f18004q = sr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f17999d, f18000e, f18001i, f18002o};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f18003p.clone();
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
        public static final /* synthetic */ int[] f18005a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f18000e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f17999d.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[b.f18002o.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[b.f18001i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f18005a = iArr;
        }
    }

    public w() {
        this.f17993e = new ArrayList();
        this.f17995o = -1.0f;
        this.f17996p = true;
        this.f17997q = true;
        throw new IllegalStateException("Screen fragments should never be restored. Follow instructions from https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-424704067 to properly configure your main activity.");
    }

    private final void B() {
        A(b.f17999d, this);
        F(1.0f, false);
    }

    private final void C() {
        A(b.f18001i, this);
        F(1.0f, true);
    }

    private final void D() {
        A(b.f18000e, this);
        F(0.0f, false);
    }

    private final void E() {
        A(b.f18002o, this);
        F(0.0f, true);
    }

    private final void G(final boolean z10) {
        this.f17998r = !z10;
        Fragment parentFragment = getParentFragment();
        if (parentFragment != null && (!(parentFragment instanceof w) || ((w) parentFragment).f17998r)) {
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
            this.f17994i = true;
        } else {
            v0.f17979a.x(h(), activity, o());
        }
    }

    public void A(b event, ScreenFragmentWrapper fragmentWrapper) {
        Event<?> kVar;
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(fragmentWrapper, "fragmentWrapper");
        Fragment c10 = fragmentWrapper.c();
        if (c10 instanceof n0) {
            n0 n0Var = (n0) c10;
            if (n0Var.y(event)) {
                Screen h10 = n0Var.h();
                fragmentWrapper.m(event);
                int surfaceId = UIManagerHelper.getSurfaceId(h10);
                int i10 = d.f18005a[event.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 == 4) {
                                kVar = new in.g(surfaceId, h10.getId());
                            } else {
                                throw new lr.p();
                            }
                        } else {
                            kVar = new in.l(surfaceId, h10.getId());
                        }
                    } else {
                        kVar = new in.f(surfaceId, h10.getId());
                    }
                } else {
                    kVar = new in.k(surfaceId, h10.getId());
                }
                Context context = h().getContext();
                Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, h().getId());
                if (eventDispatcherForReactTag != null) {
                    eventDispatcherForReactTag.dispatchEvent(kVar);
                }
                fragmentWrapper.e(event);
            }
        }
    }

    public void F(float f10, boolean z10) {
        boolean z11;
        if (!(this instanceof n0) || this.f17995o == f10) {
            return;
        }
        float max = Math.max(0.0f, Math.min(1.0f, f10));
        this.f17995o = max;
        short a10 = f17991s.a(max);
        n0 n0Var = (n0) this;
        ScreenContainer container = n0Var.h().getContainer();
        if (container instanceof ScreenStack) {
            z11 = ((ScreenStack) container).getGoingForward();
        } else {
            z11 = false;
        }
        boolean z12 = z11;
        Context context = n0Var.h().getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, n0Var.h().getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new in.j(UIManagerHelper.getSurfaceId(reactContext), n0Var.h().getId(), this.f17995o, z10, z12, a10));
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
        this.f17992d = screen;
    }

    public boolean a() {
        return false;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public Activity b() {
        Fragment fragment;
        FragmentActivity activity;
        FragmentActivity activity2 = getActivity();
        if (activity2 != null) {
            return activity2;
        }
        Context context = h().getContext();
        if (context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            if (reactContext.getCurrentActivity() != null) {
                return reactContext.getCurrentActivity();
            }
        }
        for (ViewParent container = h().getContainer(); container != null; container = container.getParent()) {
            if ((container instanceof Screen) && (fragment = ((Screen) container).getFragment()) != null && (activity = fragment.getActivity()) != null) {
                return activity;
            }
        }
        return null;
    }

    @Override // com.swmansion.rnscreens.i
    public Fragment c() {
        return this;
    }

    @Override // com.swmansion.rnscreens.u
    public void e(b event) {
        ScreenFragmentWrapper fragmentWrapper;
        Intrinsics.checkNotNullParameter(event, "event");
        ArrayList<ScreenContainer> arrayList = new ArrayList();
        for (Object obj : f()) {
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

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public List f() {
        return this.f17993e;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public void g(ScreenContainer container) {
        Intrinsics.checkNotNullParameter(container, "container");
        f().add(container);
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public Screen h() {
        Screen screen = this.f17992d;
        if (screen != null) {
            return screen;
        }
        Intrinsics.throwUninitializedPropertyAccessException("screen");
        return null;
    }

    public void i() {
        L();
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public void l(ScreenContainer container) {
        Intrinsics.checkNotNullParameter(container, "container");
        f().remove(container);
    }

    @Override // com.swmansion.rnscreens.u
    public void m(b event) {
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f18005a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        this.f17997q = true;
                        return;
                    }
                    throw new lr.p();
                }
                this.f17996p = true;
                return;
            }
            this.f17997q = false;
            return;
        }
        this.f17996p = false;
    }

    @Override // com.swmansion.rnscreens.ScreenFragmentWrapper
    public ReactContext o() {
        if (getContext() instanceof ReactContext) {
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            return (ReactContext) context;
        } else if (h().getContext() instanceof ReactContext) {
            Context context2 = h().getContext();
            Intrinsics.checkNotNull(context2, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            return (ReactContext) context2;
        } else {
            for (ViewParent container = h().getContainer(); container != null; container = container.getParent()) {
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
        h().setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        Context context = getContext();
        if (context != null) {
            c cVar = new c(context);
            cVar.addView(jn.c.b(h()));
            return cVar;
        }
        return null;
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroy() {
        super.onDestroy();
        ScreenContainer container = h().getContainer();
        if (container == null || !container.hasScreen(h().getFragmentWrapper())) {
            Context context = h().getContext();
            if (context instanceof ReactContext) {
                int surfaceId = UIManagerHelper.getSurfaceId(context);
                EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, h().getId());
                if (eventDispatcherForReactTag != null) {
                    eventDispatcherForReactTag.dispatchEvent(new in.h(surfaceId, h().getId()));
                }
            }
        }
        f().clear();
    }

    @Override // androidx.fragment.app.Fragment
    public void onResume() {
        super.onResume();
        if (this.f17994i) {
            this.f17994i = false;
            v0.f17979a.x(h(), b(), o());
        }
    }

    public boolean y(b event) {
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = d.f18005a[event.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        if (!this.f17997q) {
                            return true;
                        }
                        return false;
                    }
                    throw new lr.p();
                } else if (!this.f17996p) {
                    return true;
                } else {
                    return false;
                }
            }
            return this.f17997q;
        }
        return this.f17996p;
    }

    public void z() {
        Context context = h().getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        ReactContext reactContext = (ReactContext) context;
        int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, h().getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new in.b(surfaceId, h().getId()));
        }
    }

    public w(Screen screenView) {
        Intrinsics.checkNotNullParameter(screenView, "screenView");
        this.f17993e = new ArrayList();
        this.f17995o = -1.0f;
        this.f17996p = true;
        this.f17997q = true;
        K(screenView);
    }
}
