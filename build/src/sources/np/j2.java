package np;

import cn.k;
import cn.r;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import np.a1;
import np.x1;
import np.x5;
import vn.v;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a */
        public static final /* synthetic */ int[] f39189a;

        /* renamed from: b */
        public static final /* synthetic */ int[] f39190b;

        static {
            int[] iArr = new int[b0.values().length];
            try {
                iArr[b0.f39038d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b0.f39039e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f39189a = iArr;
            int[] iArr2 = new int[a1.b.values().length];
            try {
                iArr2[a1.b.f39021e.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[a1.b.f39022i.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a1.b.f39020d.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            f39190b = iArr2;
        }
    }

    public static final x5.d e(x5.b renderProps, final k.a context, a1.b bVar, String str, String str2, String str3, boolean z10, x5.d.c.b mode, x5.d.c.a assetOverrides, boolean z11, aq.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, bo.a videoCaptureMethod, uq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, float f10, zn.a aVar2, v.b facingMode, boolean z13, boolean z14, boolean z15) {
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
        int i10 = a.f39189a[renderProps.h().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (!(mode instanceof x5.d.c.b.g) && !(mode instanceof x5.d.c.b.i)) {
                    b10 = l(renderProps, bVar);
                } else {
                    b10 = renderProps.x().b();
                }
                return new x5.d.a(str, b10, k(renderProps, bVar), z10 ? renderProps.x().a() : null, renderProps.x().d(), str3, z10, m(mode), renderProps.y(), z11, navigationState, onBack, onCancel, onCameraError, onPermissionChanged, videoCaptureMethod, aVar, z12, cameraXControllerFactory, camera2ManagerFactoryFactory, new Function1() { // from class: np.f2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit g10;
                        g10 = j2.g(k.a.this, (v.b) obj);
                        return g10;
                    }
                }, f10, aVar2, facingMode, z13, z14, new Function1() { // from class: np.g2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit i11;
                        i11 = j2.i(k.a.this, ((Boolean) obj).booleanValue());
                        return i11;
                    }
                }, bVar, z15);
            }
            throw new rr.p();
        }
        return new x5.d.c(str, str2, mode, renderProps.y(), assetOverrides, z11, navigationState, onBack, onCancel, onCameraError, onPermissionChanged, videoCaptureMethod, aVar, z12, cameraXControllerFactory, camera2ManagerFactoryFactory);
    }

    public static /* synthetic */ x5.d f(x5.b bVar, k.a aVar, a1.b bVar2, String str, String str2, String str3, boolean z10, x5.d.c.b bVar3, x5.d.c.a aVar2, boolean z11, aq.a aVar3, Function0 function0, Function0 function02, Function1 function1, Function0 function03, bo.a aVar4, uq.a aVar5, boolean z12, z.a aVar6, g.a aVar7, float f10, zn.a aVar8, v.b bVar4, boolean z13, boolean z14, boolean z15, int i10, Object obj) {
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
        aq.a aVar11;
        Function0 function04;
        Function0 function05;
        Function1 function12;
        Function0 function06;
        bo.a aVar12;
        uq.a aVar13;
        boolean z19;
        z.a aVar14;
        g.a aVar15;
        float f11;
        zn.a aVar16;
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
        cn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: np.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h10;
                h10 = j2.h(v.b.this, (r.c) obj);
                return h10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    public static final Unit h(v.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.h(false, false, m6.i(action, false), bVar, 3, null));
        return Unit.f31765a;
    }

    public static final Unit i(k.a aVar, final boolean z10) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: np.h2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = j2.j(z10, (r.c) obj);
                return j10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    public static final Unit j(boolean z10, r.c action) {
        Object v10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1 x1Var = (x1) action.c();
        if (x1Var instanceof z) {
            if (x1Var instanceof x1.a) {
                v10 = x1.a.v((x1.a) x1Var, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, z10, null, 12287, null);
            } else if (x1Var instanceof x1.d) {
                v10 = x1.d.v((x1.d) x1Var, 0, null, null, null, 0L, false, 0L, null, null, null, z10, 1023, null);
            } else if (x1Var instanceof x1.l) {
                v10 = x1.l.v((x1.l) x1Var, false, null, 0.0f, null, null, 0L, false, 0L, null, null, null, null, z10, 4095, null);
            } else if (x1Var instanceof x1.c) {
                v10 = x1.c.v((x1.c) x1Var, 0, null, 0L, null, 0L, 0.0f, null, null, null, null, false, null, z10, 4095, null);
            } else if (x1Var instanceof x1.k) {
                v10 = x1.k.v((x1.k) x1Var, null, null, false, null, 0L, null, null, null, z10, SetSpanOperation.SPAN_MAX_PRIORITY, null);
            } else if (x1Var instanceof x1.m) {
                v10 = x1.m.v((x1.m) x1Var, 0L, null, 0L, 0.0f, null, null, null, null, false, null, z10, 1023, null);
            } else if (x1Var instanceof x1.o) {
                v10 = x1.o.v((x1.o) x1Var, false, false, null, null, null, false, null, z10, 127, null);
            } else if (x1Var instanceof x1.p) {
                v10 = x1.p.v((x1.p) x1Var, null, null, 0L, null, null, null, false, null, z10, SetSpanOperation.SPAN_MAX_PRIORITY, null);
            } else {
                throw new rr.p();
            }
            action.e(v10);
            return Unit.f31765a;
        }
        return Unit.f31765a;
    }

    private static final String k(x5.b bVar, a1.b bVar2) {
        int i10;
        if (bVar2 == null) {
            i10 = -1;
        } else {
            i10 = a.f39190b[bVar2.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return bVar.x().p();
                    }
                    throw new rr.p();
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
            i10 = a.f39190b[bVar2.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return bVar.x().z();
                    }
                    throw new rr.p();
                }
                return bVar.x().w();
            }
            return bVar.x().u();
        }
        return null;
    }

    private static final x5.d.a.AbstractC0570a m(x5.d.c.b bVar) {
        if (bVar instanceof x5.d.c.b.a) {
            return new x5.d.a.AbstractC0570a.C0571a(m6.x(((x5.d.c.b.a) bVar).a()));
        }
        if (bVar instanceof x5.d.c.b.C0573b) {
            x5.d.c.b.C0573b c0573b = (x5.d.c.b.C0573b) bVar;
            return new x5.d.a.AbstractC0570a.b(m6.x(c0573b.a()), c0573b.b(), c0573b.e(), c0573b.c(), c0573b.d());
        } else if (bVar instanceof x5.d.c.b.C0574c) {
            x5.d.c.b.C0574c c0574c = (x5.d.c.b.C0574c) bVar;
            return new x5.d.a.AbstractC0570a.c(m6.x(c0574c.a()), c0574c.b(), c0574c.c(), c0574c.e());
        } else if (bVar instanceof x5.d.c.b.C0575d) {
            x5.d.c.b.C0575d c0575d = (x5.d.c.b.C0575d) bVar;
            return new x5.d.a.AbstractC0570a.C0572d(m6.x(c0575d.a()), c0575d.d(), c0575d.c(), c0575d.b());
        } else if (bVar instanceof x5.d.c.b.e) {
            x5.d.c.b.e eVar = (x5.d.c.b.e) bVar;
            return new x5.d.a.AbstractC0570a.e(m6.x(eVar.a()), eVar.b());
        } else if (bVar instanceof x5.d.c.b.f) {
            x5.d.c.b.f fVar = (x5.d.c.b.f) bVar;
            return new x5.d.a.AbstractC0570a.f(m6.x(fVar.a()), fVar.b());
        } else if (bVar instanceof x5.d.c.b.g) {
            x5.d.c.b.g gVar = (x5.d.c.b.g) bVar;
            return new x5.d.a.AbstractC0570a.g(m6.x(gVar.a()), gVar.b());
        } else if (bVar instanceof x5.d.c.b.h) {
            x5.d.c.b.h hVar = (x5.d.c.b.h) bVar;
            return new x5.d.a.AbstractC0570a.h(m6.x(hVar.a()), hVar.c(), hVar.b());
        } else if (bVar instanceof x5.d.c.b.i) {
            x5.d.c.b.i iVar = (x5.d.c.b.i) bVar;
            return new x5.d.a.AbstractC0570a.i(m6.x(iVar.a()), iVar.b());
        } else {
            throw new rr.p();
        }
    }
}
