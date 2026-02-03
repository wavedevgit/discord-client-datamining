package fo;

import aq.b4;
import aq.c2;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import eo.c4;
import eo.e4;
import eo.g3;
import eo.n1;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final up.b f24293a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f24294a;

        static {
            int[] iArr = new int[eo.c.values().length];
            try {
                iArr[eo.c.f21687d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[eo.c.f21688e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f24294a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f24295d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.b f24296e;

        b(g3.a aVar, n1.b bVar) {
            this.f24295d = aVar;
            this.f24296e = bVar;
        }

        @Override // aq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f24295d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // aq.c2
        public List b() {
            List<e4> s10 = this.f24296e.s();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(s10, 10));
            for (e4 e4Var : s10) {
                arrayList.add(new b4(e4Var.b(), e4Var.a()));
            }
            return arrayList;
        }

        @Override // aq.c2
        public boolean c() {
            return false;
        }

        @Override // aq.c2
        public List f() {
            Object obj;
            List e10;
            n1.b bVar = this.f24296e;
            Iterator it = this.f24296e.s().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((e4) obj).a(), bVar.t())) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            e4 e4Var = (e4) obj;
            if (e4Var != null && (e10 = CollectionsKt.e(new b4(e4Var.b(), e4Var.a()))) != null) {
                return e10;
            }
            return CollectionsKt.l();
        }

        @Override // aq.c2
        public String getLabel() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f24297d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f24298e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1.b f24299i;

        c(g3.a aVar, List list, n1.b bVar) {
            this.f24297d = aVar;
            this.f24298e = list;
            this.f24299i = bVar;
        }

        @Override // aq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f24297d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // aq.c2
        public List b() {
            return this.f24298e;
        }

        @Override // aq.c2
        public boolean c() {
            return false;
        }

        @Override // aq.c2
        public List f() {
            n1.b bVar = this.f24299i;
            ArrayList arrayList = new ArrayList();
            for (Object obj : this.f24298e) {
                if (Intrinsics.areEqual(((b4) obj).a(), bVar.u())) {
                    arrayList.add(obj);
                }
            }
            return arrayList;
        }

        @Override // aq.c2
        public String getLabel() {
            return null;
        }
    }

    public o(up.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f24293a = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(k.a aVar, final b4 it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: fo.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B;
                B = o.B(b4.this, (r.c) obj);
                return B;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(b4 b4Var, r.c action) {
        n1.b bVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.b) {
            bVar = (n1.b) c10;
        } else {
            bVar = null;
        }
        n1.b bVar2 = bVar;
        if (bVar2 == null) {
            return Unit.f32464a;
        }
        action.e(n1.b.p(bVar2, null, null, null, 0, null, null, null, null, null, b4Var.a(), null, 1535, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(k.a aVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: fo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p10;
                p10 = o.p((r.c) obj);
                return p10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(r.c action) {
        n1.a aVar;
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        String str3 = null;
        if (c10 instanceof n1.a) {
            aVar = (n1.a) c10;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return Unit.f32464a;
        }
        if (aVar.r().size() == 1) {
            e4 e4Var = (e4) CollectionsKt.o0(aVar.r());
            if (e4Var.c().size() == 1) {
                str3 = ((c4) CollectionsKt.o0(e4Var.c())).x1();
            }
            str = e4Var.a();
            str2 = str3;
        } else {
            str = null;
            str2 = null;
        }
        action.e(new n1.b(aVar.g(), aVar.m(), aVar.k(), aVar.j(), eo.b4.v(action, true), aVar.f(), aVar.o(), new pn.v(null, null, null, 0, 15, null), aVar.r(), str, str2));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(k.a aVar, mo.k kVar) {
        eo.b4.L(aVar, kVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(k.a aVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: fo.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = o.s((r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(k.a aVar, final b4 it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: fo.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = o.v(b4.this, (r.c) obj);
                return v10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(b4 b4Var, r.c action) {
        n1.b bVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.b) {
            bVar = (n1.b) c10;
        } else {
            bVar = null;
        }
        n1.b bVar2 = bVar;
        if (bVar2 == null) {
            return Unit.f32464a;
        }
        action.e(n1.b.p(bVar2, null, null, null, 0, null, null, null, null, null, null, b4Var.a(), 1023, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(c4 c4Var, n1.b bVar, k.a aVar, g3.a aVar2, mo.k kVar) {
        if (c4Var == null) {
            return Unit.f32464a;
        }
        eo.b4.Q(bVar, aVar, aVar2, null, c4Var, kVar, bVar.q(), false, c4Var.b(), -1, null, bVar.t(), 1152, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, mo.k kVar) {
        eo.b4.L(aVar, kVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(k.a aVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: fo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z10;
                z10 = o.z((r.c) obj);
                return z10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    public final w n(g3.a renderProps, n1.a renderState, final k.a context, final mo.k videoCaptureHelper) {
        String F;
        String E;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        eo.c q10 = renderState.q();
        int[] iArr = a.f24294a;
        int i10 = iArr[q10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                F = renderProps.t().d0();
            } else {
                throw new lr.p();
            }
        } else {
            F = renderProps.t().F();
        }
        int i11 = iArr[renderState.q().ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                E = renderProps.t().c0();
            } else {
                throw new lr.p();
            }
        } else {
            E = renderProps.t().E();
        }
        return new w(F, E, renderProps.u(), this.f24293a.b(), new Function0() { // from class: fo.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = o.o(k.a.this);
                return o10;
            }
        }, new Function0() { // from class: fo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q11;
                q11 = o.q(k.a.this, videoCaptureHelper);
                return q11;
            }
        }, new Function0() { // from class: fo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit r10;
                r10 = o.r(k.a.this);
                return r10;
            }
        });
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
        r11 = fo.p.b(r11, r21.t(), r9.x1(), "selectPage");
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final eo.f5.a t(final eo.g3.a r20, final eo.n1.b r21, final wm.k.a r22, final mo.k r23) {
        /*
            Method dump skipped, instructions count: 337
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: fo.o.t(eo.g3$a, eo.n1$b, wm.k$a, mo.k):eo.f5$a");
    }
}
