package eo;

import android.content.Context;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import cp.c1;
import eo.c4;
import eo.d0;
import eo.f5;
import eo.g3;
import eo.h4;
import eo.n1;
import eo.q;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b4 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f21684a;

        /* renamed from: b */
        public static final /* synthetic */ int[] f21685b;

        static {
            int[] iArr = new int[cp.g1.values().length];
            try {
                iArr[cp.g1.f19670d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[cp.g1.f19672i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[cp.g1.f19671e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f21684a = iArr;
            int[] iArr2 = new int[c4.e.values().length];
            try {
                iArr2[c4.e.f21714o.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[c4.e.f21715p.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[c4.e.f21716q.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[c4.e.f21717r.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[c4.e.f21718s.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f21685b = iArr2;
        }
    }

    public static final Unit A(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.CameraErrorInfo("Unsupported device.")));
        return Unit.f32464a;
    }

    public static final Unit B(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        ((n1) action.c()).d();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32464a;
    }

    public static final Unit C(Throwable th2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String canonicalName = th2.getClass().getCanonicalName();
        action.d(new g3.b.c(new InternalErrorInfo.CameraErrorInfo("Unexpected camera error with type " + canonicalName)));
        return Unit.f32464a;
    }

    public static final Unit D(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.CameraErrorInfo("Unable to find a camera that satisfies the requirements for the selfie flow.")));
        return Unit.f32464a;
    }

    public static final String E(g3.a.C0293a c0293a, c4.e side, String selectedId, String str) {
        Intrinsics.checkNotNullParameter(c0293a, "<this>");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(selectedId, "selectedId");
        String a10 = c0293a.m().a(str, selectedId, side);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    public static final ho.h F(g3.a aVar, c4.e side) {
        String K;
        String J;
        String I;
        String H;
        String C;
        String B;
        String A;
        String z10;
        String e10;
        String d10;
        String c10;
        String b10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(side, "side");
        int i10 = a.f21685b[side.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return null;
                }
                if (i10 != 4) {
                    if (i10 == 5) {
                        return null;
                    }
                    throw new lr.p();
                }
                String w10 = aVar.t().w();
                if (w10 == null || (e10 = aVar.t().e()) == null || (d10 = aVar.t().d()) == null || (c10 = aVar.t().c()) == null || (b10 = aVar.t().b()) == null) {
                    return null;
                }
                return new ho.h(w10, e10, d10, c10, b10, side);
            }
            String w11 = aVar.t().w();
            if (w11 == null || (C = aVar.t().C()) == null || (B = aVar.t().B()) == null || (A = aVar.t().A()) == null || (z10 = aVar.t().z()) == null) {
                return null;
            }
            return new ho.h(w11, C, B, A, z10, side);
        }
        String w12 = aVar.t().w();
        if (w12 == null || (K = aVar.t().K()) == null || (J = aVar.t().J()) == null || (I = aVar.t().I()) == null || (H = aVar.t().H()) == null) {
            return null;
        }
        return new ho.h(w12, K, J, I, H, side);
    }

    public static final String G(g3.a.C0293a c0293a, c4.e side, String selectedId, String str) {
        Intrinsics.checkNotNullParameter(c0293a, "<this>");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(selectedId, "selectedId");
        String a10 = c0293a.t().a(str, selectedId, side);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    public static final List H(g3.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        List<c4> g10 = aVar.g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (c4 c4Var : g10) {
            g4 a10 = c4Var.a();
            String str = (String) aVar.t().G().get(c4Var.x1());
            if (str == null) {
                str = c4Var.x1();
            }
            arrayList.add(new b0(a10, c4Var, str));
        }
        return arrayList;
    }

    public static final f5.b.a I(g3.a renderProps, c4.e currentSide) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(currentSide, "currentSide");
        if (currentSide == c4.e.f21718s) {
            return f5.b.a.f21844e;
        }
        if (!Intrinsics.areEqual(renderProps.e(), "US") && currentSide == c4.e.f21715p) {
            return f5.b.a.f21844e;
        }
        return f5.b.a.f21845i;
    }

    public static final String J(g3.a.C0293a c0293a, c4.e side, String selectedId, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(c0293a, "<this>");
        Intrinsics.checkNotNullParameter(side, "side");
        Intrinsics.checkNotNullParameter(selectedId, "selectedId");
        if (z10 && c0293a.a() != null) {
            return c0293a.a();
        }
        String a10 = c0293a.a0().a(str, selectedId, side);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    public static final String K(g3.a.C0293a c0293a, ko.d dVar) {
        Intrinsics.checkNotNullParameter(c0293a, "<this>");
        if (Intrinsics.areEqual(dVar, ko.e.f32457d)) {
            return c0293a.x();
        }
        if (Intrinsics.areEqual(dVar, ko.f.f32458d)) {
            return c0293a.y();
        }
        if (dVar == null) {
            return null;
        }
        throw new lr.p();
    }

    public static final void L(k.a aVar, final mo.k kVar) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.t3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M;
                M = b4.M(mo.k.this, (r.c) obj);
                return M;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit M(mo.k kVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        if (kVar != null) {
            kVar.a();
        }
        if (e10 == null) {
            if (((g3.a) action.b()).c()) {
                action.d(g3.b.a.f21978a);
            } else {
                action.d(g3.b.C0294b.f21979a);
            }
        } else {
            e10.n(true);
            action.e(e10);
        }
        return Unit.f32464a;
    }

    public static final void N(Context context, k.a renderContext, g3.a renderProps, boolean z10) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List r10 = CollectionsKt.r(cp.d0.f19644d);
        if (z10 && mp.f.f(context)) {
            r10.add(cp.d0.f19645e);
        }
        final List a10 = cp.l1.a(context, r10);
        if (a10.isEmpty()) {
            return;
        }
        wm.h c11 = renderContext.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.v3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = b4.O(a10, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit O(List list, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.r((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, list.contains(cp.d0.f19644d), list.contains(cp.d0.f19645e), null, null, null, 29695, null));
        } else {
            ((n1) action.c()).d();
            action.e(new n1.j(null, null, null, null, 0, n1Var.f(), null, null, 223, null));
        }
        return Unit.f32464a;
    }

    public static final void P(final n1 renderState, final k.a renderContext, final g3.a renderProps, final d0 d0Var, final c4 id2, final mo.k videoCaptureHelper, final pn.v cameraProperties, final boolean z10, final List parts, final int i10, final String str, final String str2) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        Intrinsics.checkNotNullParameter(parts, "parts");
        final vn.a e10 = videoCaptureHelper.e(renderProps);
        wm.h c11 = renderContext.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.u3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R;
                R = b4.R(n1.this, d0Var, i10, parts, renderProps, videoCaptureHelper, id2, z10, str2, e10, cameraProperties, str, renderContext, (r.c) obj);
                return R;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static /* synthetic */ void Q(n1 n1Var, k.a aVar, g3.a aVar2, d0 d0Var, c4 c4Var, mo.k kVar, pn.v vVar, boolean z10, List list, int i10, String str, String str2, int i11, Object obj) {
        boolean z11;
        List list2;
        int i12;
        String str3;
        String str4;
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z11 = true;
        } else {
            z11 = z10;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            list2 = n1Var.k();
        } else {
            list2 = list;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            i12 = n1Var.j();
        } else {
            i12 = i10;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            str3 = null;
        } else {
            str3 = str;
        }
        if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            str4 = n1Var.f();
        } else {
            str4 = str2;
        }
        P(n1Var, aVar, aVar2, d0Var, c4Var, kVar, vVar, z11, list2, i12, str3, str4);
    }

    public static final Unit R(n1 n1Var, d0 d0Var, int i10, List list, g3.a aVar, final mo.k kVar, c4 c4Var, boolean z10, String str, vn.a aVar2, pn.v vVar, String str2, final k.a aVar3, r.c action) {
        List m10;
        int i11;
        Object kVar2;
        Object obj;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c().getClass() != n1Var.getClass()) {
            return Unit.f32464a;
        }
        if (d0Var != null) {
            m10 = CollectionsKt.M0(((n1) action.c()).m(), d0Var);
        } else {
            m10 = ((n1) action.c()).m();
        }
        List list2 = m10;
        if (i10 == list.size()) {
            i11 = i10;
        } else {
            i11 = i10 + 1;
        }
        h4 h4Var = (h4) CollectionsKt.q0(list, i11);
        if (h4Var instanceof h4.a) {
            if (aVar.l() && !kVar.d()) {
                obj = new n1.c((h4.a) h4Var, list2, list, i11, str, new q.b(c4Var), false, v(action, z10), null, 320, null);
            } else {
                h4.a aVar4 = (h4.a) h4Var;
                q.b bVar = new q.b(c4Var);
                f5.b.a I = I((g3.a) action.b(), aVar4.a());
                n1 v10 = v(action, z10);
                String d10 = aVar.v().d();
                if (kVar.d()) {
                    tVar = mo.t.f38933e;
                } else {
                    tVar = mo.t.f38934i;
                }
                obj = new n1.l(aVar4, list2, bVar, I, list, i11, v10, tVar, d10, null, false, false, str, null, new Function0() { // from class: eo.w3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit S;
                        S = b4.S(k.a.this, kVar);
                        return S;
                    }
                }, 11776, null);
            }
        } else if (h4Var == null) {
            if (aVar2 == vn.a.f51700d && !(action.c() instanceof n1.f) && !(action.c() instanceof n1.i)) {
                kVar2 = new n1.f((h4) CollectionsKt.z0(list), list2, list, i11, v(action, z10), str, c4Var, vVar);
            } else if (aVar2 == vn.a.f51701e && !(action.c() instanceof n1.e) && !(action.c() instanceof n1.i)) {
                kVar2 = new n1.e(c4Var, list2, (h4) CollectionsKt.z0(list), list, i11, v(action, z10), str, new lo.c(list2, aVar.h(), aVar.i()), 0L, false, 768, null);
            } else {
                kVar2 = new n1.k(c4Var, list2, null, list, i11, v(action, z10), str, new lo.c(list2, aVar.h(), aVar.i()), str2, vVar, 4, null);
            }
            obj = kVar2;
        } else {
            throw new lr.p();
        }
        action.e(obj);
        return Unit.f32464a;
    }

    public static final Unit S(k.a aVar, final mo.k kVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.a4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit T;
                T = b4.T(mo.k.this, (r.c) obj);
                return T;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    public static final Unit T(mo.k kVar, r.c action) {
        n1.l lVar;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (kVar.d()) {
                tVar = mo.t.f38933e;
            } else {
                tVar = mo.t.f38934i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32464a;
    }

    public static final void U(k.a context, final g3.b output, mo.k videoCaptureHelper) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        if ((output instanceof g3.b.d) || (output instanceof g3.b.a) || (output instanceof g3.b.c)) {
            videoCaptureHelper.a();
        }
        wm.h c11 = context.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.i3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit V;
                V = b4.V(g3.b.this, (r.c) obj);
                return V;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit V(g3.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(bVar);
        return Unit.f32464a;
    }

    public static final d0.d W(c4.e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        int i10 = a.f21685b[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return d0.d.f21739e;
                        }
                        throw new lr.p();
                    }
                    return d0.d.f21739e;
                }
                return d0.d.f21738d;
            }
            return d0.d.f21739e;
        }
        return d0.d.f21738d;
    }

    public static final zo.c X(Object obj, Context context, final k.a renderContext, g3.a renderProps, boolean z10, cp.c1 permissionRequestWorkflow) {
        Intrinsics.checkNotNullParameter(obj, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        cp.d0 d0Var = cp.d0.f19645e;
        String S = renderProps.t().S();
        if (S == null) {
            S = "";
        }
        String str = S;
        String R = renderProps.t().R();
        if (R == null) {
            R = context.getString(ep.e.M);
            Intrinsics.checkNotNullExpressionValue(R, "getString(...)");
        }
        String str2 = R;
        String string = context.getString(ep.e.L, mp.f.b(context));
        Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
        return cp.l1.e(obj, renderContext, z10, d0Var, false, str, str2, string, renderProps.t().P(), renderProps.t().Q(), null, null, null, permissionRequestWorkflow, renderProps.u(), "video_capture_mic_permission_request", new Function1() { // from class: eo.y3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                wm.r Y;
                Y = b4.Y(k.a.this, (c1.a) obj2);
                return Y;
            }
        }, 3592, null);
    }

    public static final wm.r Y(final k.a aVar, final c1.a it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = wm.b0.c(null, new Function1() { // from class: eo.j3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = b4.Z(c1.a.this, aVar, (r.c) obj);
                return Z;
            }
        }, 1, null);
        return c10;
    }

    public static final Unit Z(c1.a aVar, k.a aVar2, r.c action) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = a.f21684a[aVar.a().a().ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 3) {
                L(aVar2, null);
            } else {
                throw new lr.p();
            }
        } else {
            wm.h c11 = aVar2.c();
            c10 = wm.b0.c(null, new Function1() { // from class: eo.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a02;
                    a02 = b4.a0((r.c) obj);
                    return a02;
                }
            }, 1, null);
            c11.d(c10);
        }
        return Unit.f32464a;
    }

    public static final Unit a0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof b) {
            action.e(((b) n1Var).a(false));
        }
        return Unit.f32464a;
    }

    public static final zo.c b0(Object obj, Context context, final k.a renderContext, g3.a renderProps, boolean z10, cp.c1 permissionRequestWorkflow) {
        Intrinsics.checkNotNullParameter(obj, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        cp.d0 d0Var = cp.d0.f19644d;
        String k10 = renderProps.t().k();
        if (k10 == null) {
            k10 = "";
        }
        String str = k10;
        String j10 = renderProps.t().j();
        if (j10 == null) {
            j10 = context.getString(ep.e.f22496m);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String str2 = j10;
        String string = context.getString(ep.e.f22495l, mp.f.b(context));
        Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
        return cp.l1.e(obj, renderContext, z10, d0Var, false, str, str2, string, renderProps.t().h(), renderProps.t().i(), null, null, null, permissionRequestWorkflow, renderProps.u(), null, new Function1() { // from class: eo.x3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                wm.r c02;
                c02 = b4.c0(k.a.this, (c1.a) obj2);
                return c02;
            }
        }, 19976, null);
    }

    public static final wm.r c0(final k.a aVar, final c1.a it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = wm.b0.c(null, new Function1() { // from class: eo.k3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = b4.d0(c1.a.this, aVar, (r.c) obj);
                return d02;
            }
        }, 1, null);
        return c10;
    }

    public static final Unit d0(c1.a aVar, k.a aVar2, r.c action) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = a.f21684a[aVar.a().a().ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 3) {
                L(aVar2, null);
            } else {
                throw new lr.p();
            }
        } else {
            wm.h c11 = aVar2.c();
            c10 = wm.b0.c(null, new Function1() { // from class: eo.r3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e02;
                    e02 = b4.e0((r.c) obj);
                    return e02;
                }
            }, 1, null);
            c11.d(c10);
        }
        return Unit.f32464a;
    }

    public static final Unit e0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof d) {
            action.e(((d) n1Var).b(false));
        }
        return Unit.f32464a;
    }

    public static final void t(k.a aVar) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: eo.s3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u10;
                u10 = b4.u((r.c) obj);
                return u10;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit u(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    public static final n1 v(r.c cVar, boolean z10) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        if (z10) {
            return (n1) cVar.c();
        }
        return ((n1) cVar.c()).e();
    }

    public static /* synthetic */ n1 w(r.c cVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return v(cVar, z10);
    }

    public static final Function1 x(final k.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new Function1() { // from class: eo.z3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y10;
                y10 = b4.y(k.a.this, (Throwable) obj);
                return y10;
            }
        };
    }

    public static final Unit y(k.a aVar, final Throwable cameraError) {
        wm.r c10;
        wm.r c11;
        wm.r c12;
        wm.r c13;
        wm.r c14;
        Intrinsics.checkNotNullParameter(cameraError, "cameraError");
        if (!(cameraError instanceof pn.k)) {
            wm.h c15 = aVar.c();
            c14 = wm.b0.c(null, new Function1() { // from class: eo.l3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = b4.C(cameraError, (r.c) obj);
                    return C;
                }
            }, 1, null);
            c15.d(c14);
            return Unit.f32464a;
        }
        pn.k kVar = (pn.k) cameraError;
        if (!(kVar instanceof pn.q0)) {
            if (kVar instanceof pn.s0) {
                wm.h c16 = aVar.c();
                c13 = wm.b0.c(null, new Function1() { // from class: eo.m3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit D;
                        D = b4.D((r.c) obj);
                        return D;
                    }
                }, 1, null);
                c16.d(c13);
            } else if (kVar instanceof pn.v0) {
                wm.h c17 = aVar.c();
                c12 = wm.b0.c(null, new Function1() { // from class: eo.n3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit z10;
                        z10 = b4.z((r.c) obj);
                        return z10;
                    }
                }, 1, null);
                c17.d(c12);
            } else if (kVar instanceof pn.e1) {
                wm.h c18 = aVar.c();
                c11 = wm.b0.c(null, new Function1() { // from class: eo.o3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit A;
                        A = b4.A((r.c) obj);
                        return A;
                    }
                }, 1, null);
                c18.d(c11);
            } else if (kVar instanceof pn.u0) {
                wm.h c19 = aVar.c();
                c10 = wm.b0.c(null, new Function1() { // from class: eo.p3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit B;
                        B = b4.B((r.c) obj);
                        return B;
                    }
                }, 1, null);
                c19.d(c10);
            } else {
                throw new lr.p();
            }
        }
        return Unit.f32464a;
    }

    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        ((n1) action.c()).d();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32464a;
    }
}
