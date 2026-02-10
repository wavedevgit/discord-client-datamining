package lo;

import cn.k;
import cn.r;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import gq.b4;
import gq.c2;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import ko.c4;
import ko.e4;
import ko.g3;
import ko.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final aq.b f36243a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36244a;

        static {
            int[] iArr = new int[ko.c.values().length];
            try {
                iArr[ko.c.f30994d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ko.c.f30995e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f36244a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f36245d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.b f36246e;

        b(g3.a aVar, n1.b bVar) {
            this.f36245d = aVar;
            this.f36246e = bVar;
        }

        @Override // gq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f36245d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // gq.c2
        public List b() {
            List<e4> v10 = this.f36246e.v();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(v10, 10));
            for (e4 e4Var : v10) {
                arrayList.add(new b4(e4Var.b(), e4Var.a()));
            }
            return arrayList;
        }

        @Override // gq.c2
        public boolean c() {
            return false;
        }

        @Override // gq.c2
        public List f() {
            Object obj;
            List e10;
            n1.b bVar = this.f36246e;
            Iterator it = this.f36246e.v().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((e4) obj).a(), bVar.w())) {
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

        @Override // gq.c2
        public String getLabel() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f36247d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f36248e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1.b f36249i;

        c(g3.a aVar, List list, n1.b bVar) {
            this.f36247d = aVar;
            this.f36248e = list;
            this.f36249i = bVar;
        }

        @Override // gq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f36247d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // gq.c2
        public List b() {
            return this.f36248e;
        }

        @Override // gq.c2
        public boolean c() {
            return false;
        }

        @Override // gq.c2
        public List f() {
            n1.b bVar = this.f36249i;
            ArrayList arrayList = new ArrayList();
            for (Object obj : this.f36248e) {
                if (Intrinsics.areEqual(((b4) obj).a(), bVar.x())) {
                    arrayList.add(obj);
                }
            }
            return arrayList;
        }

        @Override // gq.c2
        public String getLabel() {
            return null;
        }
    }

    public o(aq.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f36243a = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(k.a aVar, final b4 it) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: lo.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B;
                B = o.B(b4.this, (r.c) obj);
                return B;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        action.e(n1.b.r(bVar2, null, null, null, 0, null, null, null, null, null, b4Var.a(), null, 1535, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(k.a aVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: lo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p10;
                p10 = o.p((r.c) obj);
                return p10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        if (aVar.u().size() == 1) {
            e4 e4Var = (e4) CollectionsKt.o0(aVar.u());
            if (e4Var.c().size() == 1) {
                str3 = ((c4) CollectionsKt.o0(e4Var.c())).r1();
            }
            str = e4Var.a();
            str2 = str3;
        } else {
            str = null;
            str2 = null;
        }
        action.e(new n1.b(aVar.h(), aVar.o(), aVar.l(), aVar.j(), ko.b4.v(action, true), aVar.f(), aVar.q(), new vn.v(null, null, null, 0, 15, null), aVar.u(), str, str2));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(k.a aVar, so.k kVar) {
        ko.b4.L(aVar, kVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(k.a aVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: lo.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = o.s((r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0475b.f31286a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(k.a aVar, final b4 it) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: lo.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = o.v(b4.this, (r.c) obj);
                return v10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        action.e(n1.b.r(bVar2, null, null, null, 0, null, null, null, null, null, null, b4Var.a(), 1023, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(c4 c4Var, n1.b bVar, k.a aVar, g3.a aVar2, so.k kVar) {
        if (c4Var == null) {
            return Unit.f31765a;
        }
        ko.b4.Q(bVar, aVar, aVar2, null, c4Var, kVar, bVar.t(), false, c4Var.b(), -1, null, bVar.w(), 1152, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, so.k kVar) {
        ko.b4.L(aVar, kVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(k.a aVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: lo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z10;
                z10 = o.z((r.c) obj);
                return z10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0475b.f31286a);
        return Unit.f31765a;
    }

    public final w n(g3.a renderProps, n1.a renderState, final k.a context, final so.k videoCaptureHelper) {
        String F;
        String E;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        ko.c t10 = renderState.t();
        int[] iArr = a.f36244a;
        int i10 = iArr[t10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                F = renderProps.t().d0();
            } else {
                throw new rr.p();
            }
        } else {
            F = renderProps.t().F();
        }
        int i11 = iArr[renderState.t().ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                E = renderProps.t().c0();
            } else {
                throw new rr.p();
            }
        } else {
            E = renderProps.t().E();
        }
        return new w(F, E, renderProps.u(), this.f36243a.b(), new Function0() { // from class: lo.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = o.o(k.a.this);
                return o10;
            }
        }, new Function0() { // from class: lo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = o.q(k.a.this, videoCaptureHelper);
                return q10;
            }
        }, new Function0() { // from class: lo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit r10;
                r10 = o.r(k.a.this);
                return r10;
            }
        });
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
        r11 = lo.p.b(r11, r21.w(), r9.r1(), "selectPage");
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final ko.f5.a t(final ko.g3.a r20, final ko.n1.b r21, final cn.k.a r22, final so.k r23) {
        /*
            Method dump skipped, instructions count: 337
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lo.o.t(ko.g3$a, ko.n1$b, cn.k$a, so.k):ko.f5$a");
    }
}
