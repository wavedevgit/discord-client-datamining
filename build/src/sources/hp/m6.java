package hp;

import android.content.Context;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import hp.a1;
import hp.x1;
import hp.x5;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m6 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f27409a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0366c.values().length];
            try {
                iArr[x5.d.c.EnumC0366c.f28028d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28029e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28030i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28031o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28032p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28033q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28034r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28035s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28036t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28037u.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28038v.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28039w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f27409a = iArr;
        }
    }

    public static final x1 i(r.c cVar, boolean z10) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        if (z10) {
            return (x1) cVar.c();
        }
        return ((x1) cVar.c()).n();
    }

    public static /* synthetic */ x1 j(r.c cVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return i(cVar, z10);
    }

    public static final Function1 k(final k.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new Function1() { // from class: hp.f6
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = m6.l(k.a.this, (Throwable) obj);
                return l10;
            }
        };
    }

    public static final Unit l(k.a aVar, final Throwable cameraError) {
        wm.r c10;
        wm.r c11;
        wm.r c12;
        wm.r c13;
        wm.r c14;
        Intrinsics.checkNotNullParameter(cameraError, "cameraError");
        if (!(cameraError instanceof pn.k)) {
            wm.h c15 = aVar.c();
            c14 = wm.b0.c(null, new Function1() { // from class: hp.h6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit m10;
                    m10 = m6.m(cameraError, (r.c) obj);
                    return m10;
                }
            }, 1, null);
            c15.d(c14);
            return Unit.f32464a;
        }
        pn.k kVar = (pn.k) cameraError;
        if (!(kVar instanceof pn.q0)) {
            if (kVar instanceof pn.s0) {
                wm.h c16 = aVar.c();
                c13 = wm.b0.c(null, new Function1() { // from class: hp.i6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit n10;
                        n10 = m6.n((r.c) obj);
                        return n10;
                    }
                }, 1, null);
                c16.d(c13);
            } else if (kVar instanceof pn.v0) {
                wm.h c17 = aVar.c();
                c12 = wm.b0.c(null, new Function1() { // from class: hp.j6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit o10;
                        o10 = m6.o((r.c) obj);
                        return o10;
                    }
                }, 1, null);
                c17.d(c12);
            } else if (kVar instanceof pn.e1) {
                wm.h c18 = aVar.c();
                c11 = wm.b0.c(null, new Function1() { // from class: hp.k6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit p10;
                        p10 = m6.p((r.c) obj);
                        return p10;
                    }
                }, 1, null);
                c18.d(c11);
            } else if (kVar instanceof pn.u0) {
                wm.h c19 = aVar.c();
                c10 = wm.b0.c(null, new Function1() { // from class: hp.l6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit q10;
                        q10 = m6.q((r.c) obj);
                        return q10;
                    }
                }, 1, null);
                c19.d(c10);
            } else {
                throw new lr.p();
            }
        }
        return Unit.f32464a;
    }

    public static final Unit m(Throwable th2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String canonicalName = th2.getClass().getCanonicalName();
        action.d(new x5.c.C0359c(new InternalErrorInfo.CameraErrorInfo("Unexpected camera error with type " + canonicalName)));
        return Unit.f32464a;
    }

    public static final Unit n(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new x5.c.C0359c(new InternalErrorInfo.CameraErrorInfo("Unable to find a camera that satisfies the requirements for the selfie flow.")));
        return Unit.f32464a;
    }

    public static final Unit o(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        y1.a((x1) action.c());
        action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).o(), 3, null));
        return Unit.f32464a;
    }

    public static final Unit p(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new x5.c.C0359c(new InternalErrorInfo.CameraErrorInfo("Unsupported device.")));
        return Unit.f32464a;
    }

    public static final Unit q(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        y1.a((x1) action.c());
        action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).o(), 3, null));
        return Unit.f32464a;
    }

    public static final void r(k.a aVar, oq.a aVar2) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1(aVar2) { // from class: hp.e6
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = m6.s(null, (r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit s(oq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1 n10 = ((x1) action.c()).n();
        if (aVar != null) {
            aVar.b();
        }
        if (n10 == null) {
            if (((x5.b) action.b()).b()) {
                action.d(x5.c.a.f27905a);
            } else {
                action.d(x5.c.b.f27906a);
            }
        } else {
            n10.q(true);
            action.e(n10);
        }
        return Unit.f32464a;
    }

    public static final void t(Context context, k.a renderContext, x5.b renderProps, boolean z10) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List r10 = CollectionsKt.r(cp.d0.f19644d);
        if (z10 && mp.f.f(context) && renderProps.z().b()) {
            r10.add(cp.d0.f19645e);
        }
        final List a10 = cp.l1.a(context, r10);
        if (a10.isEmpty()) {
            return;
        }
        wm.h c11 = renderContext.c();
        c10 = wm.b0.c(null, new Function1() { // from class: hp.g6
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u10;
                u10 = m6.u(a10, (r.c) obj);
                return u10;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit u(List list, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1 x1Var = (x1) action.c();
        if (x1Var instanceof x1.o) {
            action.e(x1.o.s((x1.o) x1Var, !list.contains(cp.d0.f19644d), !list.contains(cp.d0.f19645e), null, null, null, false, null, false, 252, null));
        } else {
            y1.a((x1) action.c());
            action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).o(), 3, null));
        }
        return Unit.f32464a;
    }

    public static final x5.d.c.a v(x5.b bVar) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        NextStep.Selfie.AssetConfig.RecordPage recordPage = bVar.a().getRecordPage();
        RemoteImage remoteImage2 = null;
        if (recordPage != null) {
            remoteImage = recordPage.getSelfieLeftPictograph();
        } else {
            remoteImage = null;
        }
        NextStep.Selfie.AssetConfig.RecordPage recordPage2 = bVar.a().getRecordPage();
        if (recordPage2 != null) {
            remoteImage2 = recordPage2.getSelfieRightPictograph();
        }
        return new x5.d.c.a(remoteImage, remoteImage2);
    }

    public static final x1 w(r.c cVar, List selfies, String str, pn.v cameraProperties, long j10, x1 x1Var) {
        boolean z10;
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        Intrinsics.checkNotNullParameter(selfies, "selfies");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        ArrayList arrayList = new ArrayList();
        for (Object obj : selfies) {
            a1 a1Var = (a1) obj;
            if (a1Var instanceof a1.c) {
                z10 = ((x5.b) cVar.b()).s().a(((a1.c) a1Var).d()).b();
            } else {
                z10 = false;
            }
            if (z10) {
                arrayList.add(obj);
            }
        }
        if (!arrayList.isEmpty()) {
            return new x1.i(selfies, arrayList, str, cameraProperties, j10, x1Var, ((x1) cVar.c()).o());
        }
        return new x1.n(selfies, str, cameraProperties, j10, x1Var, ((x1) cVar.c()).o());
    }

    public static final x5.d.a.b x(x5.d.c.EnumC0366c enumC0366c) {
        Intrinsics.checkNotNullParameter(enumC0366c, "<this>");
        switch (a.f27409a[enumC0366c.ordinal()]) {
            case 1:
                return x5.d.a.b.f27960d;
            case 2:
            case 3:
                return x5.d.a.b.f27961e;
            case 4:
            case 5:
            case 6:
                return x5.d.a.b.f27962i;
            case 7:
            case 8:
            case 9:
                return x5.d.a.b.f27963o;
            case 10:
                return x5.d.a.b.f27964p;
            case 11:
                return x5.d.a.b.f27960d;
            case 12:
                return x5.d.a.b.f27960d;
            default:
                throw new lr.p();
        }
    }
}
