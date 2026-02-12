package com.swmansion.rnscreens.gamma.stack.host;

import android.util.Log;
import android.view.ViewGroup;
import as.p;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UIManagerListener;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.swmansion.rnscreens.gamma.stack.screen.a;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends ViewGroup implements UIManagerListener, i {

    /* renamed from: p  reason: collision with root package name */
    public static final a f19186p = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f19187d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f19188e;

    /* renamed from: i  reason: collision with root package name */
    private final h f19189i;

    /* renamed from: o  reason: collision with root package name */
    private final j f19190o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19191a;

        static {
            int[] iArr = new int[a.EnumC0229a.values().length];
            try {
                iArr[a.EnumC0229a.f19199d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a.EnumC0229a.f19200e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f19191a = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19187d = reactContext;
        this.f19188e = new ArrayList();
        h hVar = new h(reactContext, new WeakReference(this));
        this.f19189i = hVar;
        this.f19190o = new j();
        addView(hVar);
        UIManager uIManager = UIManagerHelper.getUIManager(reactContext, 2);
        if (uIManager != null) {
            uIManager.addUIManagerEventListener(this);
            return;
        }
        throw new IllegalStateException("[RNScreens] UIManager must not be null.");
    }

    private final void b(com.swmansion.rnscreens.gamma.stack.screen.a aVar) {
        if (aVar.getActivityMode() == a.EnumC0229a.f19200e && !aVar.b()) {
            this.f19190o.a(aVar);
            return;
        }
        String screenKey = aVar.getScreenKey();
        Log.d("StackHost", "Ignoring pop operation of " + screenKey + ", already not attached or natively dismissed");
    }

    private final void c(com.swmansion.rnscreens.gamma.stack.screen.a aVar) {
        if (aVar.getActivityMode() == a.EnumC0229a.f19200e) {
            this.f19190o.b(aVar);
        }
    }

    @Override // com.swmansion.rnscreens.gamma.stack.host.i
    public void a(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        if (stackScreen.getActivityMode() == a.EnumC0229a.f19200e) {
            stackScreen.setNativelyDismissed$react_native_screens_release(true);
        }
    }

    public final void d(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen, int i10) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.f19188e.add(i10, stackScreen);
        stackScreen.setStackHost$react_native_screens_release(new WeakReference<>(this));
        c(stackScreen);
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didDispatchMountItems(UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didMountItems(UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
        this.f19190o.c(this.f19189i, this.f19188e);
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void didScheduleMountItems(UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }

    public final void e(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        int i10 = b.f19191a[stackScreen.getActivityMode().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                this.f19190o.b(stackScreen);
                return;
            }
            throw new p();
        }
        this.f19190o.a(stackScreen);
    }

    public final void f() {
        for (com.swmansion.rnscreens.gamma.stack.screen.a aVar : CollectionsKt.T(this.f19188e)) {
            b(aVar);
        }
        this.f19188e.clear();
    }

    public final void g(com.swmansion.rnscreens.gamma.stack.screen.a reactSubview) {
        Intrinsics.checkNotNullParameter(reactSubview, "reactSubview");
        this.f19188e.remove(reactSubview);
        b(reactSubview);
    }

    @NotNull
    public final ArrayList<com.swmansion.rnscreens.gamma.stack.screen.a> getRenderedScreens$react_native_screens_release() {
        return this.f19188e;
    }

    public final void h(int i10) {
        Object remove = this.f19188e.remove(i10);
        Intrinsics.checkNotNullExpressionValue(remove, "removeAt(...)");
        b((com.swmansion.rnscreens.gamma.stack.screen.a) remove);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        co.e eVar = co.e.f8378a;
        int id2 = getId();
        eVar.a("StackHost", "StackHost [" + id2 + "] attached to window");
        super.onAttachedToWindow();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        this.f19189i.layout(i10, i11, i12, i13);
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        this.f19189i.measure(i10, i11);
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void willDispatchViewUpdates(UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }

    @Override // com.facebook.react.bridge.UIManagerListener
    public void willMountItems(UIManager uiManager) {
        Intrinsics.checkNotNullParameter(uiManager, "uiManager");
    }
}
