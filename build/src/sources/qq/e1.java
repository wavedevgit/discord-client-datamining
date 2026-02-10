package qq;

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
    private final ViewGroup f46735a;

    /* renamed from: b  reason: collision with root package name */
    private eq.j f46736b;

    /* renamed from: c  reason: collision with root package name */
    private gq.t4 f46737c;

    public e1(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f46735a = contentView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h() {
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(Ref.ObjectRef objectRef) {
        ((Function0) objectRef.element).invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(gq.t4 t4Var, e1 e1Var, View view) {
        t4Var.G0(true);
        t4Var.s1(false);
        e1Var.f46735a.removeView(view);
        e1Var.f46737c = null;
        e1Var.f46736b = null;
        return Unit.f31765a;
    }

    public final gq.t4 d() {
        return this.f46737c;
    }

    public final eq.h e() {
        eq.j jVar = this.f46736b;
        if (jVar != null) {
            return jVar.h();
        }
        return null;
    }

    public final void f() {
        BottomSheetBehavior g10;
        eq.j jVar = this.f46736b;
        if (jVar != null && (g10 = jVar.g()) != null) {
            g10.Y0(5);
        }
        this.f46737c = null;
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [qq.b1, T] */
    /* JADX WARN: Type inference failed for: r1v3, types: [T, qq.d1] */
    public final void g(final gq.t4 sheetComponent, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(sheetComponent, "sheetComponent");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f46737c = sheetComponent;
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new Function0() { // from class: qq.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = e1.h();
                return h10;
            }
        };
        eq.j jVar = new eq.j(sheetComponent.g(), CollectionsKt.l(), new Function0() { // from class: qq.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = e1.i(Ref.ObjectRef.this);
                return i10;
            }
        }, null, sheetComponent.H0());
        this.f46736b = jVar;
        en.c0 a10 = jVar.a();
        Context context = this.f46735a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final View a11 = a10.a(jVar, viewEnvironment, context, this.f46735a);
        this.f46735a.addView(a11);
        en.g0.h(a11);
        objectRef.element = new Function0() { // from class: qq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = e1.j(gq.t4.this, this, a11);
                return j10;
            }
        };
    }
}
