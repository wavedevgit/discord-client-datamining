package iq;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f30682a;

    /* renamed from: b  reason: collision with root package name */
    private wp.j f30683b;

    /* renamed from: c  reason: collision with root package name */
    private yp.t4 f30684c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f30682a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(yp.t4 t4Var, e1 e1Var, View view) {
        t4Var.J0(true);
        t4Var.y1(false);
        e1Var.f30682a.removeView(view);
        e1Var.f30684c = null;
        e1Var.f30683b = null;
        return Unit.f33074a;
    }

    public final yp.t4 d() {
        return this.f30684c;
    }

    public final wp.h e() {
        wp.j jVar = this.f30683b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        wp.j jVar = this.f30683b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f30684c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, iq.b1] */
    /* JADX WARN: Type inference failed for: r1v3, types: [T, iq.d1] */
    public final void g(final yp.t4 sheetComponent, wm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f30684c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: iq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        wp.j jVar = new wp.j(sheetComponent.h(), CollectionsKt.l(), new Function0() { // from class: iq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.K0());
        this.f30683b = jVar;
        wm.c0 a10 = jVar.a();
        Context context = this.f30682a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f30682a);
        this.f30682a.addView(a11);
        wm.g0.h(a11);
        objectRef.element = new Function0() { // from class: iq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(yp.t4.this, this, a11);
                return j10;
            }
        };
    }
}
