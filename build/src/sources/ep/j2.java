package ep;

import com.facebook.react.uimanager.events.PointerEventHelper;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import ep.a1;
import ep.x1;
import ep.x5;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import mn.v;
import mn.z;
import on.g;
import tm.k;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f23181a;

        /* renamed from: b */
        public static final /* synthetic */ int[] f23182b;

        static {
            int[] iArr = new int[b0.values().length];
            try {
                iArr[b0.f23030d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b0.f23031e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f23181a = iArr;
            int[] iArr2 = new int[a1.b.values().length];
            try {
                iArr2[a1.b.f23013e.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[a1.b.f23014i.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a1.b.f23012d.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            f23182b = iArr2;
        }
    }

    public static final x5.d e(x5.b renderProps, final k.a context, a1.b bVar, String str, String str2, String str3, boolean z10, x5.d.c.b mode, x5.d.c.a assetOverrides, boolean z11, rp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, sn.a videoCaptureMethod, lq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, float f10, qn.a aVar2, v.b facingMode, boolean z13, boolean z14, boolean z15) {
        String b10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(assetOverrides, "assetOverrides");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
        Intrinsics.checkNotNullParameter(onPermissionChanged, "onPermissionChanged");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        int i10 = a.f23181a[renderProps.h().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (!(mode instanceof x5.d.c.b.g) && !(mode instanceof x5.d.c.b.i)) {
                    b10 = l(renderProps, bVar);
                } else {
                    b10 = renderProps.x().b();
                }
                return new x5.d.a(str, b10, k(renderProps, bVar), z10 ? renderProps.x().a() : null, renderProps.x().d(), str3, z10, m(mode), renderProps.y(), z11, navigationState, onBack, onCancel, onCameraError, onPermissionChanged, videoCaptureMethod, aVar, z12, cameraXControllerFactory, camera2ManagerFactoryFactory, new Function1() { // from class: ep.f2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit g10;
                        g10 = j2.g(k.a.this, (v.b) obj);
                        return g10;
                    }
                }, f10, aVar2, facingMode, z13, z14, new Function1() { // from class: ep.g2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit i11;
                        i11 = j2.i(k.a.this, ((Boolean) obj).booleanValue());
                        return i11;
                    }
                }, bVar, z15);
            }
            throw new ir.p();
        }
        return new x5.d.c(str, str2, mode, renderProps.y(), assetOverrides, z11, navigationState, onBack, onCancel, onCameraError, onPermissionChanged, videoCaptureMethod, aVar, z12, cameraXControllerFactory, camera2ManagerFactoryFactory);
    }

    public static /* synthetic */ x5.d f(x5.b bVar, k.a aVar, a1.b bVar2, String str, String str2, String str3, boolean z10, x5.d.c.b bVar3, x5.d.c.a aVar2, boolean z11, rp.a aVar3, Function0 function0, Function0 function02, Function1 function1, Function0 function03, sn.a aVar4, lq.a aVar5, boolean z12, z.a aVar6, g.a aVar7, float f10, qn.a aVar8, v.b bVar4, boolean z13, boolean z14, boolean z15, int i10, Object obj) {
        boolean z16;
        x5.b bVar5;
        k.a aVar9;
        a1.b bVar6;
        String str4;
        String str5;
        boolean z17;
        x5.d.c.b bVar7;
        x5.d.c.a aVar10;
        boolean z18;
        rp.a aVar11;
        Function0 function04;
        Function0 function05;
        Function1 function12;
        Function0 function06;
        sn.a aVar12;
        lq.a aVar13;
        boolean z19;
        z.a aVar14;
        g.a aVar15;
        float f11;
        qn.a aVar16;
        v.b bVar8;
        boolean z20;
        String str6 = (i10 & 16) != 0 ? null : str2;
        boolean z21 = (i10 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? false : z14;
        if ((i10 & 33554432) != 0) {
            z16 = false;
            aVar9 = aVar;
            bVar6 = bVar2;
            str4 = str;
            str5 = str3;
            z17 = z10;
            bVar7 = bVar3;
            aVar10 = aVar2;
            z18 = z11;
            aVar11 = aVar3;
            function04 = function0;
            function05 = function02;
            function12 = function1;
            function06 = function03;
            aVar12 = aVar4;
            aVar13 = aVar5;
            z19 = z12;
            aVar14 = aVar6;
            aVar15 = aVar7;
            f11 = f10;
            aVar16 = aVar8;
            bVar8 = bVar4;
            z20 = z13;
            bVar5 = bVar;
        } else {
            z16 = z15;
            bVar5 = bVar;
            aVar9 = aVar;
            bVar6 = bVar2;
            str4 = str;
            str5 = str3;
            z17 = z10;
            bVar7 = bVar3;
            aVar10 = aVar2;
            z18 = z11;
            aVar11 = aVar3;
            function04 = function0;
            function05 = function02;
            function12 = function1;
            function06 = function03;
            aVar12 = aVar4;
            aVar13 = aVar5;
            z19 = z12;
            aVar14 = aVar6;
            aVar15 = aVar7;
            f11 = f10;
            aVar16 = aVar8;
            bVar8 = bVar4;
            z20 = z13;
        }
        return e(bVar5, aVar9, bVar6, str4, str6, str5, z17, bVar7, aVar10, z18, aVar11, function04, function05, function12, function06, aVar12, aVar13, z19, aVar14, aVar15, f11, aVar16, bVar8, z20, z21, z16);
    }

    public static final Unit g(k.a aVar, final v.b it) {
        tm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        tm.h c11 = aVar.c();
        c10 = tm.b0.c(null, new Function1() { // from class: ep.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h10;
                h10 = j2.h(v.b.this, (r.c) obj);
                return h10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33282a;
    }

    public static final Unit h(v.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.h(false, false, m6.i(action, false), bVar, 3, null));
        return Unit.f33282a;
    }

    public static final Unit i(k.a aVar, final boolean z10) {
        tm.r c10;
        tm.h c11 = aVar.c();
        c10 = tm.b0.c(null, new Function1() { // from class: ep.h2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = j2.j(z10, (r.c) obj);
                return j10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33282a;
    }

    public static final Unit j(boolean z10, r.c action) {
        Object s10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1 x1Var = (x1) action.c();
        if (x1Var instanceof z) {
            if (x1Var instanceof x1.a) {
                s10 = x1.a.s((x1.a) x1Var, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, z10, null, 12287, null);
            } else if (x1Var instanceof x1.d) {
                s10 = x1.d.s((x1.d) x1Var, 0, null, null, null, 0L, false, 0L, null, null, null, z10, 1023, null);
            } else if (x1Var instanceof x1.l) {
                s10 = x1.l.s((x1.l) x1Var, false, null, 0.0f, null, null, 0L, false, 0L, null, null, null, null, z10, 4095, null);
            } else if (x1Var instanceof x1.c) {
                s10 = x1.c.s((x1.c) x1Var, 0, null, 0L, null, 0L, 0.0f, null, null, null, null, false, null, z10, 4095, null);
            } else if (x1Var instanceof x1.k) {
                s10 = x1.k.s((x1.k) x1Var, null, null, false, null, 0L, null, null, null, z10, SetSpanOperation.SPAN_MAX_PRIORITY, null);
            } else if (x1Var instanceof x1.m) {
                s10 = x1.m.s((x1.m) x1Var, 0L, null, 0L, 0.0f, null, null, null, null, false, null, z10, 1023, null);
            } else if (x1Var instanceof x1.o) {
                s10 = x1.o.s((x1.o) x1Var, false, false, null, null, null, false, null, z10, 127, null);
            } else if (x1Var instanceof x1.p) {
                s10 = x1.p.s((x1.p) x1Var, null, null, 0L, null, null, null, false, null, z10, SetSpanOperation.SPAN_MAX_PRIORITY, null);
            } else {
                throw new ir.p();
            }
            action.e(s10);
            return Unit.f33282a;
        }
        return Unit.f33282a;
    }

    private static final String k(x5.b bVar, a1.b bVar2) {
        int i10;
        if (bVar2 == null) {
            i10 = -1;
        } else {
            i10 = a.f23182b[bVar2.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return bVar.x().p();
                    }
                    throw new ir.p();
                }
                return bVar.x().x();
            }
            return bVar.x().v();
        }
        return null;
    }

    private static final String l(x5.b bVar, a1.b bVar2) {
        int i10;
        if (bVar2 == null) {
            i10 = -1;
        } else {
            i10 = a.f23182b[bVar2.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return bVar.x().z();
                    }
                    throw new ir.p();
                }
                return bVar.x().w();
            }
            return bVar.x().u();
        }
        return null;
    }

    private static final x5.d.a.AbstractC0308a m(x5.d.c.b bVar) {
        if (bVar instanceof x5.d.c.b.a) {
            return new x5.d.a.AbstractC0308a.C0309a(m6.x(((x5.d.c.b.a) bVar).a()));
        }
        if (bVar instanceof x5.d.c.b.C0311b) {
            x5.d.c.b.C0311b c0311b = (x5.d.c.b.C0311b) bVar;
            return new x5.d.a.AbstractC0308a.b(m6.x(c0311b.a()), c0311b.b(), c0311b.e(), c0311b.c(), c0311b.d());
        } else if (bVar instanceof x5.d.c.b.C0312c) {
            x5.d.c.b.C0312c c0312c = (x5.d.c.b.C0312c) bVar;
            return new x5.d.a.AbstractC0308a.c(m6.x(c0312c.a()), c0312c.b(), c0312c.c(), c0312c.e());
        } else if (bVar instanceof x5.d.c.b.C0313d) {
            x5.d.c.b.C0313d c0313d = (x5.d.c.b.C0313d) bVar;
            return new x5.d.a.AbstractC0308a.C0310d(m6.x(c0313d.a()), c0313d.d(), c0313d.c(), c0313d.b());
        } else if (bVar instanceof x5.d.c.b.e) {
            x5.d.c.b.e eVar = (x5.d.c.b.e) bVar;
            return new x5.d.a.AbstractC0308a.e(m6.x(eVar.a()), eVar.b());
        } else if (bVar instanceof x5.d.c.b.f) {
            x5.d.c.b.f fVar = (x5.d.c.b.f) bVar;
            return new x5.d.a.AbstractC0308a.f(m6.x(fVar.a()), fVar.b());
        } else if (bVar instanceof x5.d.c.b.g) {
            x5.d.c.b.g gVar = (x5.d.c.b.g) bVar;
            return new x5.d.a.AbstractC0308a.g(m6.x(gVar.a()), gVar.b());
        } else if (bVar instanceof x5.d.c.b.h) {
            x5.d.c.b.h hVar = (x5.d.c.b.h) bVar;
            return new x5.d.a.AbstractC0308a.h(m6.x(hVar.a()), hVar.c(), hVar.b());
        } else if (bVar instanceof x5.d.c.b.i) {
            x5.d.c.b.i iVar = (x5.d.c.b.i) bVar;
            return new x5.d.a.AbstractC0308a.i(m6.x(iVar.a()), iVar.b());
        } else {
            throw new ir.p();
        }
    }
}
