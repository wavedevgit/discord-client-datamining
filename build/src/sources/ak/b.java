package ak;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.RectF;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static int a(int i10) {
        if (i10 != 0) {
            if (i10 != 90) {
                if (i10 != 180) {
                    if (i10 == 270) {
                        return 3;
                    }
                    throw new IllegalArgumentException("Invalid rotation: " + i10);
                }
                return 2;
            }
            return 1;
        }
        return 0;
    }

    public static void b(Point[] pointArr, Matrix matrix) {
        int length = pointArr.length;
        float[] fArr = new float[length + length];
        for (int i10 = 0; i10 < pointArr.length; i10++) {
            Point point = pointArr[i10];
            int i11 = i10 + i10;
            fArr[i11] = point.x;
            fArr[i11 + 1] = point.y;
        }
        matrix.mapPoints(fArr);
        for (int i12 = 0; i12 < pointArr.length; i12++) {
            int i13 = i12 + i12;
            pointArr[i12].set((int) fArr[i13], (int) fArr[i13 + 1]);
        }
    }

    public static void c(PointF pointF, Matrix matrix) {
        float[] fArr = {pointF.x, pointF.y};
        matrix.mapPoints(fArr);
        pointF.set(fArr[0], fArr[1]);
    }

    public static void d(List list, Matrix matrix) {
        int size = list.size();
        float[] fArr = new float[size + size];
        for (int i10 = 0; i10 < list.size(); i10++) {
            int i11 = i10 + i10;
            fArr[i11] = ((PointF) list.get(i10)).x;
            fArr[i11 + 1] = ((PointF) list.get(i10)).y;
        }
        matrix.mapPoints(fArr);
        for (int i12 = 0; i12 < list.size(); i12++) {
            int i13 = i12 + i12;
            ((PointF) list.get(i12)).set(fArr[i13], fArr[i13 + 1]);
        }
    }

    public static void e(Rect rect, Matrix matrix) {
        RectF rectF = new RectF(rect);
        matrix.mapRect(rectF);
        rect.set((int) rectF.left, (int) rectF.top, (int) rectF.right, (int) rectF.bottom);
    }
}
