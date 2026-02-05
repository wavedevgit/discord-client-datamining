package io;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import dq.b4;
import dq.c2;
import ho.c4;
import ho.e4;
import ho.g3;
import ho.n1;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final xp.b f27685a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27686a;

        static {
            int[] iArr = new int[ho.c.values().length];
            try {
                iArr[ho.c.f25999d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ho.c.f26000e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f27686a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f27687d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.b f27688e;

        b(g3.a aVar, n1.b bVar) {
            this.f27687d = aVar;
            this.f27688e = bVar;
        }

        @Override // dq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f27687d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // dq.c2
        public List b() {
            List<e4> t10 = this.f27688e.t();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(t10, 10));
            for (e4 e4Var : t10) {
                arrayList.add(new b4(e4Var.b(), e4Var.a()));
            }
            return arrayList;
        }

        @Override // dq.c2
        public boolean c() {
            return false;
        }

        @Override // dq.c2
        public List f() {
            Object obj;
            List e10;
            n1.b bVar = this.f27688e;
            Iterator it = this.f27688e.t().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((e4) obj).a(), bVar.u())) {
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

        @Override // dq.c2
        public String getLabel() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f27689d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f27690e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1.b f27691i;

        c(g3.a aVar, List list, n1.b bVar) {
            this.f27689d = aVar;
            this.f27690e = list;
            this.f27691i = bVar;
        }

        @Override // dq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f27689d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // dq.c2
        public List b() {
            return this.f27690e;
        }

        @Override // dq.c2
        public boolean c() {
            return false;
        }

        @Override // dq.c2
        public List f() {
            n1.b bVar = this.f27691i;
            ArrayList arrayList = new ArrayList();
            for (Object obj : this.f27690e) {
                if (Intrinsics.areEqual(((b4) obj).a(), bVar.v())) {
                    arrayList.add(obj);
                }
            }
            return arrayList;
        }

        @Override // dq.c2
        public String getLabel() {
            return null;
        }
    }

    public o(xp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f27685a = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(k.a aVar, final b4 it) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: io.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B;
                B = o.B(b4.this, (r.c) obj);
                return B;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        action.e(n1.b.q(bVar2, null, null, null, 0, null, null, null, null, null, b4Var.a(), null, 1535, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(k.a aVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: io.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p10;
                p10 = o.p((r.c) obj);
                return p10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        if (aVar.s().size() == 1) {
            e4 e4Var = (e4) CollectionsKt.o0(aVar.s());
            if (e4Var.c().size() == 1) {
                str3 = ((c4) CollectionsKt.o0(e4Var.c())).x1();
            }
            str = e4Var.a();
            str2 = str3;
        } else {
            str = null;
            str2 = null;
        }
        action.e(new n1.b(aVar.g(), aVar.n(), aVar.l(), aVar.j(), ho.b4.v(action, true), aVar.f(), aVar.p(), new sn.v(null, null, null, 0, 15, null), aVar.s(), str, str2));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(k.a aVar, po.k kVar) {
        ho.b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(k.a aVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: io.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = o.s((r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0362b.f26291a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(k.a aVar, final b4 it) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: io.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = o.v(b4.this, (r.c) obj);
                return v10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        action.e(n1.b.q(bVar2, null, null, null, 0, null, null, null, null, null, null, b4Var.a(), 1023, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(c4 c4Var, n1.b bVar, k.a aVar, g3.a aVar2, po.k kVar) {
        if (c4Var == null) {
            return Unit.f31988a;
        }
        ho.b4.Q(bVar, aVar, aVar2, null, c4Var, kVar, bVar.r(), false, c4Var.b(), -1, null, bVar.u(), 1152, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, po.k kVar) {
        ho.b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(k.a aVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: io.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z10;
                z10 = o.z((r.c) obj);
                return z10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0362b.f26291a);
        return Unit.f31988a;
    }

    public final w n(g3.a renderProps, n1.a renderState, final k.a context, final po.k videoCaptureHelper) {
        String F;
        String E;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        ho.c r10 = renderState.r();
        int[] iArr = a.f27686a;
        int i10 = iArr[r10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                F = renderProps.t().d0();
            } else {
                throw new or.p();
            }
        } else {
            F = renderProps.t().F();
        }
        int i11 = iArr[renderState.r().ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                E = renderProps.t().c0();
            } else {
                throw new or.p();
            }
        } else {
            E = renderProps.t().E();
        }
        return new w(F, E, renderProps.u(), this.f27685a.b(), new Function0() { // from class: io.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = o.o(k.a.this);
                return o10;
            }
        }, new Function0() { // from class: io.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = o.q(k.a.this, videoCaptureHelper);
                return q10;
            }
        }, new Function0() { // from class: io.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit r11;
                r11 = o.r(k.a.this);
                return r11;
            }
        });
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
        r11 = io.p.b(r11, r21.u(), r9.x1(), "selectPage");
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final ho.f5.a t(final ho.g3.a r20, final ho.n1.b r21, final zm.k.a r22, final po.k r23) {
        /*
            Method dump skipped, instructions count: 337
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.o.t(ho.g3$a, ho.n1$b, zm.k$a, po.k):ho.f5$a");
    }
}
