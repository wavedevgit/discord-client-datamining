package ko;

import bn.k;
import bn.r;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import fq.b4;
import fq.c2;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import jo.c4;
import jo.e4;
import jo.g3;
import jo.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final zp.b f31975a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31976a;

        static {
            int[] iArr = new int[jo.c.values().length];
            try {
                iArr[jo.c.f29995d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[jo.c.f29996e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f31976a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f31977d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.b f31978e;

        b(g3.a aVar, n1.b bVar) {
            this.f31977d = aVar;
            this.f31978e = bVar;
        }

        @Override // fq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f31977d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // fq.c2
        public List b() {
            List<e4> v10 = this.f31978e.v();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(v10, 10));
            for (e4 e4Var : v10) {
                arrayList.add(new b4(e4Var.b(), e4Var.a()));
            }
            return arrayList;
        }

        @Override // fq.c2
        public boolean c() {
            return false;
        }

        @Override // fq.c2
        public List f() {
            Object obj;
            List e10;
            n1.b bVar = this.f31978e;
            Iterator it = this.f31978e.v().iterator();
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

        @Override // fq.c2
        public String getLabel() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements c2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g3.a f31979d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f31980e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1.b f31981i;

        c(g3.a aVar, List list, n1.b bVar) {
            this.f31979d = aVar;
            this.f31980e = list;
            this.f31981i = bVar;
        }

        @Override // fq.c2
        /* renamed from: a */
        public InputSelectComponentStyle getStyles() {
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle;
            StepStyles.InputSelectStyleContainer base;
            StepStyles.GovernmentIdStepStyle u10 = this.f31979d.u();
            if (u10 != null && (inputSelectStyle = u10.getInputSelectStyle()) != null && (base = inputSelectStyle.getBase()) != null) {
                return base.getBase();
            }
            return null;
        }

        @Override // fq.c2
        public List b() {
            return this.f31980e;
        }

        @Override // fq.c2
        public boolean c() {
            return false;
        }

        @Override // fq.c2
        public List f() {
            n1.b bVar = this.f31981i;
            ArrayList arrayList = new ArrayList();
            for (Object obj : this.f31980e) {
                if (Intrinsics.areEqual(((b4) obj).a(), bVar.x())) {
                    arrayList.add(obj);
                }
            }
            return arrayList;
        }

        @Override // fq.c2
        public String getLabel() {
            return null;
        }
    }

    public o(zp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f31975a = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(k.a aVar, final b4 it) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: ko.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B;
                B = o.B(b4.this, (r.c) obj);
                return B;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32008a;
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
            return Unit.f32008a;
        }
        action.e(n1.b.r(bVar2, null, null, null, 0, null, null, null, null, null, b4Var.a(), null, 1535, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(k.a aVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: ko.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p10;
                p10 = o.p((r.c) obj);
                return p10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32008a;
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
            return Unit.f32008a;
        }
        if (aVar.u().size() == 1) {
            e4 e4Var = (e4) CollectionsKt.o0(aVar.u());
            if (e4Var.c().size() == 1) {
                str3 = ((c4) CollectionsKt.o0(e4Var.c())).w1();
            }
            str = e4Var.a();
            str2 = str3;
        } else {
            str = null;
            str2 = null;
        }
        action.e(new n1.b(aVar.h(), aVar.o(), aVar.l(), aVar.j(), jo.b4.v(action, true), aVar.f(), aVar.q(), new un.v(null, null, null, 0, 15, null), aVar.u(), str, str2));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(k.a aVar, ro.k kVar) {
        jo.b4.L(aVar, kVar);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(k.a aVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: ko.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = o.s((r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0429b.f30287a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(k.a aVar, final b4 it) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: ko.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = o.v(b4.this, (r.c) obj);
                return v10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32008a;
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
            return Unit.f32008a;
        }
        action.e(n1.b.r(bVar2, null, null, null, 0, null, null, null, null, null, null, b4Var.a(), 1023, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(c4 c4Var, n1.b bVar, k.a aVar, g3.a aVar2, ro.k kVar) {
        if (c4Var == null) {
            return Unit.f32008a;
        }
        jo.b4.Q(bVar, aVar, aVar2, null, c4Var, kVar, bVar.t(), false, c4Var.b(), -1, null, bVar.w(), 1152, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, ro.k kVar) {
        jo.b4.L(aVar, kVar);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(k.a aVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: ko.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z10;
                z10 = o.z((r.c) obj);
                return z10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0429b.f30287a);
        return Unit.f32008a;
    }

    public final w n(g3.a renderProps, n1.a renderState, final k.a context, final ro.k videoCaptureHelper) {
        String F;
        String E;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        jo.c t10 = renderState.t();
        int[] iArr = a.f31976a;
        int i10 = iArr[t10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                F = renderProps.t().d0();
            } else {
                throw new qr.p();
            }
        } else {
            F = renderProps.t().F();
        }
        int i11 = iArr[renderState.t().ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                E = renderProps.t().c0();
            } else {
                throw new qr.p();
            }
        } else {
            E = renderProps.t().E();
        }
        return new w(F, E, renderProps.u(), this.f31975a.b(), new Function0() { // from class: ko.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = o.o(k.a.this);
                return o10;
            }
        }, new Function0() { // from class: ko.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = o.q(k.a.this, videoCaptureHelper);
                return q10;
            }
        }, new Function0() { // from class: ko.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit r10;
                r10 = o.r(k.a.this);
                return r10;
            }
        });
    }

    /* JADX WARN: Code restructure failed: missing block: B:23:0x008c, code lost:
        r11 = ko.p.b(r11, r21.w(), r9.w1(), "selectPage");
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final jo.f5.a t(final jo.g3.a r20, final jo.n1.b r21, final bn.k.a r22, final ro.k r23) {
        /*
            Method dump skipped, instructions count: 337
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ko.o.t(jo.g3$a, jo.n1$b, bn.k$a, ro.k):jo.f5$a");
    }
}
