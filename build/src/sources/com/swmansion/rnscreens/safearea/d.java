package com.swmansion.rnscreens.safearea;

import android.os.Build;
import android.view.View;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.view.ReactViewGroup;
import com.swmansion.rnscreens.safearea.a;
import java.lang.ref.WeakReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends ReactViewGroup implements w, ViewTreeObserver.OnPreDrawListener {

    /* renamed from: t  reason: collision with root package name */
    public static final a f19357t = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f19358d;

    /* renamed from: e  reason: collision with root package name */
    private WeakReference f19359e;

    /* renamed from: i  reason: collision with root package name */
    private com.swmansion.rnscreens.safearea.a f19360i;

    /* renamed from: o  reason: collision with root package name */
    private com.swmansion.rnscreens.safearea.a f19361o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f19362p;

    /* renamed from: q  reason: collision with root package name */
    private StateWrapper f19363q;

    /* renamed from: r  reason: collision with root package name */
    private yn.a f19364r;

    /* renamed from: s  reason: collision with root package name */
    private b f19365s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19358d = reactContext;
        this.f19359e = new WeakReference(null);
        a.C0232a c0232a = com.swmansion.rnscreens.safearea.a.f19346e;
        this.f19360i = c0232a.b();
        this.f19361o = c0232a.b();
        this.f19365s = b.f19352d;
        i0.x0(this, this);
    }

    private final c d() {
        ViewParent parent = getParent();
        while (parent != null && !(parent instanceof c)) {
            parent = parent.getParent();
        }
        if (parent instanceof c) {
            return (c) parent;
        }
        return null;
    }

    private final Insets e(Insets insets) {
        boolean z10;
        int i10;
        boolean z11;
        int i11;
        boolean z12;
        int i12;
        boolean z13;
        yn.a aVar = this.f19364r;
        int i13 = 0;
        if (aVar != null) {
            z10 = aVar.b();
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 0;
        } else {
            i10 = insets.f3304a;
        }
        yn.a aVar2 = this.f19364r;
        if (aVar2 != null) {
            z11 = aVar2.d();
        } else {
            z11 = false;
        }
        if (z11) {
            i11 = 0;
        } else {
            i11 = insets.f3305b;
        }
        yn.a aVar3 = this.f19364r;
        if (aVar3 != null) {
            z12 = aVar3.c();
        } else {
            z12 = false;
        }
        if (z12) {
            i12 = 0;
        } else {
            i12 = insets.f3306c;
        }
        yn.a aVar4 = this.f19364r;
        if (aVar4 != null) {
            z13 = aVar4.a();
        } else {
            z13 = false;
        }
        if (!z13) {
            i13 = insets.f3307d;
        }
        Insets c10 = Insets.c(i10, i11, i12, i13);
        Intrinsics.checkNotNullExpressionValue(c10, "of(...)");
        return c10;
    }

    private final void g() {
        com.swmansion.rnscreens.safearea.a b10;
        com.swmansion.rnscreens.safearea.a b11;
        a.C0232a c0232a = com.swmansion.rnscreens.safearea.a.f19346e;
        if (this.f19365s.d()) {
            b10 = this.f19360i;
        } else {
            b10 = c0232a.b();
        }
        if (this.f19365s.e()) {
            b11 = this.f19361o;
        } else {
            b11 = c0232a.b();
        }
        com.swmansion.rnscreens.safearea.a c10 = c0232a.c(b10, b11);
        StateWrapper stateWrapper = getStateWrapper();
        if (stateWrapper != null) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putDouble(ViewProps.LEFT, PixelUtil.toDIPFromPixel(c10.c()));
            createMap.putDouble(ViewProps.TOP, PixelUtil.toDIPFromPixel(c10.e()));
            createMap.putDouble(ViewProps.RIGHT, PixelUtil.toDIPFromPixel(c10.d()));
            createMap.putDouble(ViewProps.BOTTOM, PixelUtil.toDIPFromPixel(c10.b()));
            WritableMap createMap2 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
            createMap2.putMap("insets", createMap);
            stateWrapper.updateState(createMap2);
        }
    }

    private final boolean h() {
        if (!this.f19362p) {
            return false;
        }
        this.f19362p = false;
        g();
        return true;
    }

    @Override // androidx.core.view.w
    public WindowInsetsCompat a(View view, WindowInsetsCompat insets) {
        boolean z10;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets f10 = insets.f(WindowInsetsCompat.p.h() | WindowInsetsCompat.p.b());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        if (!Intrinsics.areEqual(f10, this.f19361o)) {
            this.f19361o = com.swmansion.rnscreens.safearea.a.f19346e.a(f10);
            if (this.f19365s.e()) {
                this.f19362p = true;
            }
        }
        WindowInsetsCompat.a aVar = new WindowInsetsCompat.a(insets);
        if (this.f19365s.e()) {
            Insets f11 = insets.f(WindowInsetsCompat.p.h());
            Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
            Insets e10 = e(f11);
            Insets f12 = insets.f(WindowInsetsCompat.p.b());
            Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
            Insets e11 = e(f12);
            z10 = Intrinsics.areEqual(e11, Insets.f3303e);
            aVar.b(WindowInsetsCompat.p.h(), e10);
            aVar.b(WindowInsetsCompat.p.b(), e11);
        } else {
            z10 = false;
        }
        WindowInsetsCompat a10 = aVar.a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        if (Build.VERSION.SDK_INT < 30 && z10) {
            WindowInsetsCompat a11 = a10.a();
            Intrinsics.checkNotNullExpressionValue(a11, "consumeDisplayCutout(...)");
            return a11;
        }
        return a10;
    }

    public final void f(com.swmansion.rnscreens.safearea.a newInterfaceInsets) {
        Intrinsics.checkNotNullParameter(newInterfaceInsets, "newInterfaceInsets");
        if (!Intrinsics.areEqual(newInterfaceInsets, this.f19360i)) {
            this.f19360i = newInterfaceInsets;
            if (this.f19365s.d()) {
                this.f19362p = true;
            }
        }
    }

    public final StateWrapper getStateWrapper() {
        return this.f19363q;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        getViewTreeObserver().addOnPreDrawListener(this);
        c d10 = d();
        if (d10 == null) {
            super.onAttachedToWindow();
            return;
        }
        d10.setOnInterfaceInsetsChangeListener(this);
        this.f19359e = new WeakReference(d10);
        this.f19360i = d10.getInterfaceInsets();
        g();
        super.onAttachedToWindow();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        c cVar = (c) this.f19359e.get();
        if (cVar != null) {
            cVar.e(this);
        }
        getViewTreeObserver().removeOnPreDrawListener(this);
        super.onDetachedFromWindow();
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        boolean h10 = h();
        if (h10) {
            requestLayout();
        }
        return !h10;
    }

    public final void setEdges(@NotNull yn.a edges) {
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19364r = edges;
        requestApplyInsets();
        this.f19362p = true;
    }

    public final void setInsetType(@NotNull b insetType) {
        Intrinsics.checkNotNullParameter(insetType, "insetType");
        this.f19365s = insetType;
        requestApplyInsets();
        this.f19362p = true;
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f19363q = stateWrapper;
    }
}
