package zq;

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
    private final ViewGroup f56638a;

    /* renamed from: b  reason: collision with root package name */
    private nq.j f56639b;

    /* renamed from: c  reason: collision with root package name */
    private pq.t4 f56640c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f56638a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(pq.t4 t4Var, e1 e1Var, View view) {
        t4Var.L0(true);
        t4Var.x1(false);
        e1Var.f56638a.removeView(view);
        e1Var.f56640c = null;
        e1Var.f56639b = null;
        return Unit.f31987a;
    }

    public final pq.t4 d() {
        return this.f56640c;
    }

    public final nq.h e() {
        nq.j jVar = this.f56639b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        nq.j jVar = this.f56639b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.c1(5);
        }
        this.f56640c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, zq.b1] */
    /* JADX WARN: Type inference failed for: r1v3, types: [T, zq.d1] */
    public final void g(final pq.t4 sheetComponent, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f56640c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: zq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        nq.j jVar = new nq.j(sheetComponent.h(), CollectionsKt.l(), new Function0() { // from class: zq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.N0());
        this.f56639b = jVar;
        gn.c0 a10 = jVar.a();
        Context context = this.f56638a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f56638a);
        this.f56638a.addView(a11);
        gn.g0.h(a11);
        objectRef.element = new Function0() { // from class: zq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(pq.t4.this, this, a11);
                return j10;
            }
        };
    }
}
