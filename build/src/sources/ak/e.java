package ak;

import android.graphics.Point;
import android.graphics.Rect;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import pg.e4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Rect a(List list) {
        Iterator it = list.iterator();
        int i10 = Integer.MIN_VALUE;
        int i11 = Integer.MAX_VALUE;
        int i12 = Integer.MAX_VALUE;
        int i13 = Integer.MIN_VALUE;
        while (it.hasNext()) {
            Point point = (Point) it.next();
            i11 = Math.min(i11, point.x);
            i10 = Math.max(i10, point.x);
            i12 = Math.min(i12, point.y);
            i13 = Math.max(i13, point.y);
        }
        return new Rect(i11, i12, i10, i13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List b(e4 e4Var) {
        double sin = Math.sin(Math.toRadians(e4Var.f45259p));
        double cos = Math.cos(Math.toRadians(e4Var.f45259p));
        double d10 = e4Var.f45257i;
        Point point = new Point((int) (e4Var.f45255d + (d10 * cos)), (int) (e4Var.f45256e + (d10 * sin)));
        int i10 = e4Var.f45258o;
        double d11 = i10 * sin;
        Point point2 = r0[0];
        int i11 = point2.x;
        Point point3 = r0[2];
        int i12 = point3.x;
        Point point4 = r0[1];
        Point[] pointArr = {new Point(e4Var.f45255d, e4Var.f45256e), point, new Point((int) (point.x - d11), (int) (pointArr[1].y + (i10 * cos))), new Point(i11 + (i12 - point4.x), point2.y + (point3.y - point4.y))};
        return Arrays.asList(pointArr);
    }
}
