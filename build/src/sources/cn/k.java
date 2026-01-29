package cn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    public static final k f8609a = new k();

    private k() {
    }

    public final double a(double d10) {
        return Math.cos(Math.toRadians(d10 / 2.0d));
    }

    public final float b(MotionEvent event, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(event, "event");
        if (event.getActionMasked() == 6) {
            i10 = event.getActionIndex();
        } else {
            i10 = -1;
        }
        if (z10) {
            int pointerCount = event.getPointerCount();
            float f10 = 0.0f;
            int i11 = 0;
            for (int i12 = 0; i12 < pointerCount; i12++) {
                if (i12 != i10) {
                    f10 += event.getX(i12);
                    i11++;
                }
            }
            return f10 / i11;
        }
        int pointerCount2 = event.getPointerCount();
        int i13 = pointerCount2 - 1;
        if (i13 == i10) {
            i13 = pointerCount2 - 2;
        }
        return event.getX(i13);
    }

    public final float c(MotionEvent event, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(event, "event");
        if (event.getActionMasked() == 6) {
            i10 = event.getActionIndex();
        } else {
            i10 = -1;
        }
        if (z10) {
            int pointerCount = event.getPointerCount();
            float f10 = 0.0f;
            int i11 = 0;
            for (int i12 = 0; i12 < pointerCount; i12++) {
                if (i12 != i10) {
                    f10 += event.getY(i12);
                    i11++;
                }
            }
            return f10 / i11;
        }
        int pointerCount2 = event.getPointerCount();
        int i13 = pointerCount2 - 1;
        if (i13 == i10) {
            i13 = pointerCount2 - 2;
        }
        return event.getY(i13);
    }
}
