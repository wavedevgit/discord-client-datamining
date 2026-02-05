package nq;

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
    private final ViewGroup f41485a;

    /* renamed from: b  reason: collision with root package name */
    private bq.j f41486b;

    /* renamed from: c  reason: collision with root package name */
    private dq.t4 f41487c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f41485a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(dq.t4 t4Var, e1 e1Var, View view) {
        t4Var.I0(true);
        t4Var.y1(false);
        e1Var.f41485a.removeView(view);
        e1Var.f41487c = null;
        e1Var.f41486b = null;
        return Unit.f31988a;
    }

    public final dq.t4 d() {
        return this.f41487c;
    }

    public final bq.h e() {
        bq.j jVar = this.f41486b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        bq.j jVar = this.f41486b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f41487c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, nq.b1] */
    /* JADX WARN: Type inference failed for: r1v3, types: [T, nq.d1] */
    public final void g(final dq.t4 sheetComponent, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f41487c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: nq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        bq.j jVar = new bq.j(sheetComponent.h(), CollectionsKt.l(), new Function0() { // from class: nq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.K0());
        this.f41486b = jVar;
        bn.c0 a10 = jVar.a();
        Context context = this.f41485a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f41485a);
        this.f41485a.addView(a11);
        bn.g0.h(a11);
        objectRef.element = new Function0() { // from class: nq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(dq.t4.this, this, a11);
                return j10;
            }
        };
    }
}
