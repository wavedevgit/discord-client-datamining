package vn;

import android.graphics.Rect;
import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import sn.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static final void a(a aVar, i cameraController, View pointOfInterestView) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(pointOfInterestView, "pointOfInterestView");
        int[] iArr = new int[2];
        pointOfInterestView.getLocationOnScreen(iArr);
        int i10 = iArr[0];
        Rect rect = new Rect(i10, iArr[1], pointOfInterestView.getWidth() + i10, iArr[1] + pointOfInterestView.getHeight());
        View e10 = cameraController.e();
        e10.getLocationOnScreen(iArr);
        int i11 = iArr[0];
        aVar.a(rect, new Rect(i11, iArr[1], e10.getWidth() + i11, iArr[1] + e10.getHeight()));
    }
}
