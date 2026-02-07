package mp;

import android.content.Context;
import bn.k;
import bn.r;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import mp.a1;
import mp.x1;
import mp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m6 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f37606a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0522c.values().length];
            try {
                iArr[x5.d.c.EnumC0522c.f38225d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38226e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38227i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38228o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38229p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38230q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38231r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38232s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38233t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38234u.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38235v.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38236w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f37606a = iArr;
        }
    }

    public static final x1 i(r.c cVar, boolean z10) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        if (z10) {
            return (x1) cVar.c();
        }
        return ((x1) cVar.c()).p();
    }

    public static /* synthetic */ x1 j(r.c cVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return i(cVar, z10);
    }

    public static final Function1 k(final k.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return new Function1() { // from class: mp.f6
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = m6.l(k.a.this, (Throwable) obj);
                return l10;
            }
        };
    }

    public static final Unit l(k.a aVar, final Throwable cameraError) {
        bn.r c10;
        bn.r c11;
        bn.r c12;
        bn.r c13;
        bn.r c14;
        Intrinsics.checkNotNullParameter(cameraError, "cameraError");
        if (!(cameraError instanceof un.k)) {
            bn.h c15 = aVar.c();
            c14 = bn.b0.c(null, new Function1() { // from class: mp.h6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit m10;
                    m10 = m6.m(cameraError, (r.c) obj);
                    return m10;
                }
            }, 1, null);
            c15.d(c14);
            return Unit.f32056a;
        }
        un.k kVar = (un.k) cameraError;
        if (!(kVar instanceof un.q0)) {
            if (kVar instanceof un.s0) {
                bn.h c16 = aVar.c();
                c13 = bn.b0.c(null, new Function1() { // from class: mp.i6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit n10;
                        n10 = m6.n((r.c) obj);
                        return n10;
                    }
                }, 1, null);
                c16.d(c13);
            } else if (kVar instanceof un.v0) {
                bn.h c17 = aVar.c();
                c12 = bn.b0.c(null, new Function1() { // from class: mp.j6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit o10;
                        o10 = m6.o((r.c) obj);
                        return o10;
                    }
                }, 1, null);
                c17.d(c12);
            } else if (kVar instanceof un.e1) {
                bn.h c18 = aVar.c();
                c11 = bn.b0.c(null, new Function1() { // from class: mp.k6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit p10;
                        p10 = m6.p((r.c) obj);
                        return p10;
                    }
                }, 1, null);
                c18.d(c11);
            } else if (kVar instanceof un.u0) {
                bn.h c19 = aVar.c();
                c10 = bn.b0.c(null, new Function1() { // from class: mp.l6
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit q10;
                        q10 = m6.q((r.c) obj);
                        return q10;
                    }
                }, 1, null);
                c19.d(c10);
            } else {
                throw new qr.p();
            }
        }
        return Unit.f32056a;
    }

    public static final Unit m(Throwable th2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String canonicalName = th2.getClass().getCanonicalName();
        action.d(new x5.c.C0515c(new InternalErrorInfo.CameraErrorInfo("Unexpected camera error with type " + canonicalName)));
        return Unit.f32056a;
    }

    public static final Unit n(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new x5.c.C0515c(new InternalErrorInfo.CameraErrorInfo("Unable to find a camera that satisfies the requirements for the selfie flow.")));
        return Unit.f32056a;
    }

    public static final Unit o(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        y1.a((x1) action.c());
        action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).q(), 3, null));
        return Unit.f32056a;
    }

    public static final Unit p(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new x5.c.C0515c(new InternalErrorInfo.CameraErrorInfo("Unsupported device.")));
        return Unit.f32056a;
    }

    public static final Unit q(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        y1.a((x1) action.c());
        action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).q(), 3, null));
        return Unit.f32056a;
    }

    public static final void r(k.a aVar, tq.a aVar2) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1(aVar2) { // from class: mp.e6
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s10;
                s10 = m6.s(null, (r.c) obj);
                return s10;
            }
        }, 1, null);
        c11.d(c10);
    }

    public static final Unit s(tq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1 p10 = ((x1) action.c()).p();
        if (aVar != null) {
            aVar.c();
        }
        if (p10 == null) {
            if (((x5.b) action.b()).b()) {
                action.d(x5.c.a.f38102a);
            } else {
                action.d(x5.c.b.f38103a);
            }
        } else {
            p10.t(true);
            action.e(p10);
        }
        return Unit.f32056a;
    }

    public static final void t(Context context, k.a renderContext, x5.b renderProps, boolean z10) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(renderContext, "renderContext");
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List r10 = CollectionsKt.r(hp.d0.f26328d);
        if (z10 && rp.f.f(context) && renderProps.z().b()) {
            r10.add(hp.d0.f26329e);
        }
        final List a10 = hp.l1.a(context, r10);
        if (a10.isEmpty()) {
            return;
        }
        bn.h c11 = renderContext.c();
        c10 = bn.b0.c(null, new Function1() { // from class: mp.g6
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
            action.e(x1.o.v((x1.o) x1Var, !list.contains(hp.d0.f26328d), !list.contains(hp.d0.f26329e), null, null, null, false, null, false, 252, null));
        } else {
            y1.a((x1) action.c());
            action.e(new x1.h(false, false, i(action, false), ((x1) action.c()).q(), 3, null));
        }
        return Unit.f32056a;
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

    public static final x1 w(r.c cVar, List selfies, String str, un.v cameraProperties, long j10, x1 x1Var) {
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
            return new x1.i(selfies, arrayList, str, cameraProperties, j10, x1Var, ((x1) cVar.c()).q());
        }
        return new x1.n(selfies, str, cameraProperties, j10, x1Var, ((x1) cVar.c()).q());
    }

    public static final x5.d.a.b x(x5.d.c.EnumC0522c enumC0522c) {
        Intrinsics.checkNotNullParameter(enumC0522c, "<this>");
        switch (a.f37606a[enumC0522c.ordinal()]) {
            case 1:
                return x5.d.a.b.f38157d;
            case 2:
            case 3:
                return x5.d.a.b.f38158e;
            case 4:
            case 5:
            case 6:
                return x5.d.a.b.f38159i;
            case 7:
            case 8:
            case 9:
                return x5.d.a.b.f38160o;
            case 10:
                return x5.d.a.b.f38161p;
            case 11:
                return x5.d.a.b.f38157d;
            case 12:
                return x5.d.a.b.f38157d;
            default:
                throw new qr.p();
        }
    }
}
