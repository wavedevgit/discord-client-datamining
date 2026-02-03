package kq;

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
    private final ViewGroup f35680a;

    /* renamed from: b  reason: collision with root package name */
    private yp.j f35681b;

    /* renamed from: c  reason: collision with root package name */
    private aq.t4 f35682c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f35680a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(aq.t4 t4Var, e1 e1Var, View view) {
        t4Var.I0(true);
        t4Var.y1(false);
        e1Var.f35680a.removeView(view);
        e1Var.f35682c = null;
        e1Var.f35681b = null;
        return Unit.f32464a;
    }

    public final aq.t4 d() {
        return this.f35682c;
    }

    public final yp.h e() {
        yp.j jVar = this.f35681b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        yp.j jVar = this.f35681b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f35682c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [kq.b1, T] */
    /* JADX WARN: Type inference failed for: r1v3, types: [kq.d1, T] */
    public final void g(final aq.t4 sheetComponent, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f35682c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: kq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        yp.j jVar = new yp.j(sheetComponent.h(), CollectionsKt.l(), new Function0() { // from class: kq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.J0());
        this.f35681b = jVar;
        ym.c0 a10 = jVar.a();
        Context context = this.f35680a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f35680a);
        this.f35680a.addView(a11);
        ym.g0.h(a11);
        objectRef.element = new Function0() { // from class: kq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(aq.t4.this, this, a11);
                return j10;
            }
        };
    }
}
