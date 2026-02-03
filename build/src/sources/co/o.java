package co;

import bo.c4;
import bo.e4;
import bo.g3;
import bo.n1;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import um.k;
import um.r;
import yp.b4;
import yp.c2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final sp.b f8387a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f8388a;

        static {
            int[] iArr = new int[bo.c.values().length];
            try {
                iArr[bo.c.f6632d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[bo.c.f6633e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f8388a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f8389d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.b f8390e;

        b(g3.a aVar, n1.b bVar) {
            this.f8389d = aVar;
            this.f8390e = bVar;
        }

        @Override // yp.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f8389d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // yp.c2
        public List b() {
            List<e4> s10 = this.f8390e.s();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(s10, 10));
            for (e4 e4Var : s10) {
                arrayList.add(new b4(e4Var.b(), e4Var.a()));
            }
            return arrayList;
        }

        @Override // yp.c2
        public boolean c() {
            return false;
        }

        @Override // yp.c2
        public List f() {
            Object obj;
            List e10;
            n1.b bVar = this.f8390e;
            Iterator it = this.f8390e.s().iterator();
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

        @Override // yp.c2
        public String getLabel() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f8391d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f8392e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1.b f8393i;

        c(g3.a aVar, List list, n1.b bVar) {
            this.f8391d = aVar;
            this.f8392e = list;
            this.f8393i = bVar;
        }

        @Override // yp.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f8391d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // yp.c2
        public List b() {
            return this.f8392e;
        }

        @Override // yp.c2
        public boolean c() {
            return false;
        }

        @Override // yp.c2
        public List f() {
            n1.b bVar = this.f8393i;
            ArrayList arrayList = new ArrayList();
            for (Object obj : this.f8392e) {
                if (Intrinsics.areEqual(((b4) obj).a(), bVar.u())) {
                    arrayList.add(obj);
                }
            }
            return arrayList;
        }

        @Override // yp.c2
        public String getLabel() {
            return null;
        }
    }

    public o(sp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f8387a = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(k.a aVar, final b4 it) {
        um.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: co.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B;
                B = o.B(b4.this, (r.c) obj);
                return B;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
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
            return Unit.f33074a;
        }
        action.e(n1.b.p(bVar2, null, null, null, 0, null, null, null, null, null, b4Var.a(), null, 1535, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(k.a aVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: co.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p10;
                p10 = o.p((r.c) obj);
                return p10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
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
            return Unit.f33074a;
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
        action.e(new n1.b(aVar.g(), aVar.m(), aVar.k(), aVar.j(), bo.b4.v(action, true), aVar.f(), aVar.o(), new nn.v(null, null, null, 0, 15, null), aVar.r(), str, str2));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(k.a aVar, ko.k kVar) {
        bo.b4.L(aVar, kVar);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(k.a aVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: co.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = o.s((r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0124b.f6924a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(k.a aVar, final b4 it) {
        um.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: co.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = o.v(b4.this, (r.c) obj);
                return v10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
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
            return Unit.f33074a;
        }
        action.e(n1.b.p(bVar2, null, null, null, 0, null, null, null, null, null, null, b4Var.a(), 1023, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(c4 c4Var, n1.b bVar, k.a aVar, g3.a aVar2, ko.k kVar) {
        if (c4Var == null) {
            return Unit.f33074a;
        }
        bo.b4.Q(bVar, aVar, aVar2, null, c4Var, kVar, bVar.q(), false, c4Var.b(), -1, null, bVar.t(), 1152, null);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, ko.k kVar) {
        bo.b4.L(aVar, kVar);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(k.a aVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: co.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z10;
                z10 = o.z((r.c) obj);
                return z10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0124b.f6924a);
        return Unit.f33074a;
    }

    public final w n(g3.a renderProps, n1.a renderState, final k.a context, final ko.k videoCaptureHelper) {
        String F;
        String E;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        bo.c q10 = renderState.q();
        int[] iArr = a.f8388a;
        int i10 = iArr[q10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                F = renderProps.t().d0();
            } else {
                throw new jr.p();
            }
        } else {
            F = renderProps.t().F();
        }
        int i11 = iArr[renderState.q().ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                E = renderProps.t().c0();
            } else {
                throw new jr.p();
            }
        } else {
            E = renderProps.t().E();
        }
        return new w(F, E, renderProps.u(), this.f8387a.b(), new Function0() { // from class: co.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = o.o(k.a.this);
                return o10;
            }
        }, new Function0() { // from class: co.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q11;
                q11 = o.q(k.a.this, videoCaptureHelper);
                return q11;
            }
        }, new Function0() { // from class: co.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit r10;
                r10 = o.r(k.a.this);
                return r10;
            }
        });
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
        r11 = co.p.b(r11, r21.t(), r9.x1(), "selectPage");
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final bo.f5.a t(final bo.g3.a r20, final bo.n1.b r21, final um.k.a r22, final ko.k r23) {
        /*
            Method dump skipped, instructions count: 337
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: co.o.t(bo.g3$a, bo.n1$b, um.k$a, ko.k):bo.f5$a");
    }
}
