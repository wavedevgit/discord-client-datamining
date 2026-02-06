package pq;

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
    private final ViewGroup f45173a;

    /* renamed from: b  reason: collision with root package name */
    private dq.j f45174b;

    /* renamed from: c  reason: collision with root package name */
    private fq.t4 f45175c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f45173a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(fq.t4 t4Var, e1 e1Var, View view) {
        t4Var.I0(true);
        t4Var.x1(false);
        e1Var.f45173a.removeView(view);
        e1Var.f45175c = null;
        e1Var.f45174b = null;
        return Unit.f32008a;
    }

    public final fq.t4 d() {
        return this.f45175c;
    }

    public final dq.h e() {
        dq.j jVar = this.f45174b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        dq.j jVar = this.f45174b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f45175c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [pq.b1, T] */
    /* JADX WARN: Type inference failed for: r1v3, types: [pq.d1, T] */
    public final void g(final fq.t4 sheetComponent, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f45175c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: pq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        dq.j jVar = new dq.j(sheetComponent.g(), CollectionsKt.l(), new Function0() { // from class: pq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.J0());
        this.f45174b = jVar;
        dn.c0 a10 = jVar.a();
        Context context = this.f45173a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f45173a);
        this.f45173a.addView(a11);
        dn.g0.h(a11);
        objectRef.element = new Function0() { // from class: pq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(fq.t4.this, this, a11);
                return j10;
            }
        };
    }
}
