package ao;

import ao.c4;
import ao.f5;
import ao.g3;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import mn.z;
import on.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m1 {
    public static final f5.b f(g3.a renderProps, String title, String message, f5.b.a captureButtonState, f5.d overlay, io.e idClass, c4.e captureSide, rp.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, sn.a videoCaptureMethod, boolean z11, boolean z12, boolean z13, Function2 onLocalVideoFinalized, Function0 manualCaptureClicked, Function0 checkPermissions, int i11, String str, eo.h hVar, lq.a aVar) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(captureButtonState, "captureButtonState");
        Intrinsics.checkNotNullParameter(overlay, "overlay");
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(captureSide, "captureSide");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(manuallyCapture, "manuallyCapture");
        Intrinsics.checkNotNullParameter(close, "close");
        Intrinsics.checkNotNullParameter(back, "back");
        Intrinsics.checkNotNullParameter(autoCaptureRules, "autoCaptureRules");
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(autoCapture, "autoCapture");
        Intrinsics.checkNotNullParameter(onCaptureError, "onCaptureError");
        Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        Intrinsics.checkNotNullParameter(onLocalVideoFinalized, "onLocalVideoFinalized");
        Intrinsics.checkNotNullParameter(manualCaptureClicked, "manualCaptureClicked");
        Intrinsics.checkNotNullParameter(checkPermissions, "checkPermissions");
        return new f5.b(title, message, renderProps.t().l(), captureButtonState, overlay, idClass, captureSide, navigationState, manuallyCapture, close, back, z10, autoCaptureRules, state, i10, renderProps.u(), autoCapture, onCaptureError, onCameraError, i11, manualCaptureClicked, checkPermissions, videoCaptureMethod, z13, onLocalVideoFinalized, z11, renderProps.v().a(), z12, str, hVar, aVar, renderProps.a().getCapturePage(), renderProps.w(), renderProps.v().b(), cameraXControllerFactory, camera2ManagerFactoryFactory);
    }

    public static /* synthetic */ f5.b g(g3.a aVar, String str, String str2, f5.b.a aVar2, f5.d dVar, io.e eVar, c4.e eVar2, rp.a aVar3, Function2 function2, Function0 function0, Function0 function02, boolean z10, List list, n1 n1Var, int i10, z.a aVar4, g.a aVar5, Function2 function22, Function1 function1, Function1 function12, sn.a aVar6, boolean z11, boolean z12, boolean z13, Function2 function23, Function0 function03, Function0 function04, int i11, String str3, eo.h hVar, lq.a aVar7, int i12, Object obj) {
        lq.a aVar8;
        g3.a aVar9;
        String str4;
        String str5;
        f5.b.a aVar10;
        f5.d dVar2;
        io.e eVar3;
        c4.e eVar4;
        rp.a aVar11;
        Function0 function05;
        Function0 function06;
        boolean z14;
        List list2;
        n1 n1Var2;
        int i13;
        z.a aVar12;
        g.a aVar13;
        Function1 function13;
        Function0 function07;
        Function2 function24 = (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new Function2() { // from class: ao.h1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit h10;
                h10 = m1.h((List) obj2, (mn.v) obj3);
                return h10;
            }
        } : function2;
        Function2 function25 = (131072 & i12) != 0 ? new Function2() { // from class: ao.i1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit i14;
                i14 = m1.i((List) obj2, (mn.v) obj3);
                return i14;
            }
        } : function22;
        Function1 function14 = (262144 & i12) != 0 ? new Function1() { // from class: ao.j1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit j10;
                j10 = m1.j((Throwable) obj2);
                return j10;
            }
        } : function1;
        sn.a aVar14 = (1048576 & i12) != 0 ? sn.a.f49092i : aVar6;
        boolean z15 = (2097152 & i12) != 0 ? true : z11;
        boolean z16 = (4194304 & i12) != 0 ? false : z12;
        boolean z17 = (8388608 & i12) != 0 ? false : z13;
        Function2 function26 = (16777216 & i12) != 0 ? new Function2() { // from class: ao.k1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit k10;
                k10 = m1.k((File) obj2, (mn.v) obj3);
                return k10;
            }
        } : function23;
        Function0 function08 = (33554432 & i12) != 0 ? new Function0() { // from class: ao.l1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = m1.l();
                return l10;
            }
        } : function03;
        int m10 = (134217728 & i12) != 0 ? aVar.m() : i11;
        String str6 = (268435456 & i12) != 0 ? null : str3;
        eo.h hVar2 = (536870912 & i12) != 0 ? null : hVar;
        if ((i12 & 1073741824) != 0) {
            aVar8 = null;
            str4 = str;
            str5 = str2;
            aVar10 = aVar2;
            dVar2 = dVar;
            eVar3 = eVar;
            eVar4 = eVar2;
            aVar11 = aVar3;
            function05 = function0;
            function06 = function02;
            z14 = z10;
            list2 = list;
            n1Var2 = n1Var;
            i13 = i10;
            aVar12 = aVar4;
            aVar13 = aVar5;
            function13 = function12;
            function07 = function04;
            aVar9 = aVar;
        } else {
            aVar8 = aVar7;
            aVar9 = aVar;
            str4 = str;
            str5 = str2;
            aVar10 = aVar2;
            dVar2 = dVar;
            eVar3 = eVar;
            eVar4 = eVar2;
            aVar11 = aVar3;
            function05 = function0;
            function06 = function02;
            z14 = z10;
            list2 = list;
            n1Var2 = n1Var;
            i13 = i10;
            aVar12 = aVar4;
            aVar13 = aVar5;
            function13 = function12;
            function07 = function04;
        }
        return f(aVar9, str4, str5, aVar10, dVar2, eVar3, eVar4, aVar11, function24, function05, function06, z14, list2, n1Var2, i13, aVar12, aVar13, function25, function14, function13, aVar14, z15, z16, z17, function26, function08, function07, m10, str6, hVar2, aVar8);
    }

    public static final Unit h(List list, mn.v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f33282a;
    }

    public static final Unit i(List list, mn.v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f33282a;
    }

    public static final Unit j(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33282a;
    }

    public static final Unit k(File file, mn.v vVar) {
        Intrinsics.checkNotNullParameter(file, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f33282a;
    }

    public static final Unit l() {
        return Unit.f33282a;
    }
}
