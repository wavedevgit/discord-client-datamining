package hq;

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
    private final ViewGroup f27719a;

    /* renamed from: b  reason: collision with root package name */
    private vp.j f27720b;

    /* renamed from: c  reason: collision with root package name */
    private xp.t4 f27721c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f27719a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(xp.t4 t4Var, e1 e1Var, View view) {
        t4Var.I0(true);
        t4Var.y1(false);
        e1Var.f27719a.removeView(view);
        e1Var.f27721c = null;
        e1Var.f27720b = null;
        return Unit.f33298a;
    }

    public final xp.t4 d() {
        return this.f27721c;
    }

    public final vp.h e() {
        vp.j jVar = this.f27720b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        vp.j jVar = this.f27720b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f27721c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, hq.b1] */
    /* JADX WARN: Type inference failed for: r1v3, types: [T, hq.d1] */
    public final void g(final xp.t4 sheetComponent, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f27721c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: hq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        vp.j jVar = new vp.j(sheetComponent.h(), CollectionsKt.l(), new Function0() { // from class: hq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.J0());
        this.f27720b = jVar;
        vm.c0 a10 = jVar.a();
        Context context = this.f27719a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f27719a);
        this.f27719a.addView(a11);
        vm.g0.h(a11);
        objectRef.element = new Function0() { // from class: hq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(xp.t4.this, this, a11);
                return j10;
            }
        };
    }
}
