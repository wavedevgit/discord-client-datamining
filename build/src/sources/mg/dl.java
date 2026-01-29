package mg;

import android.graphics.Point;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class dl {
    public static dl f(Iterable iterable, int i10, int i11, float f10) {
        Iterator it = iterable.iterator();
        int i12 = 0;
        int i13 = i10;
        int i14 = i11;
        int i15 = 0;
        while (it.hasNext()) {
            Point point = (Point) it.next();
            i13 = Math.min(i13, point.x);
            i14 = Math.min(i14, point.y);
            i12 = Math.max(i12, point.x);
            i15 = Math.max(i15, point.y);
        }
        float f11 = i10;
        float f12 = i11;
        return new bl((i13 + 0.0f) / f11, (i14 + 0.0f) / f12, (i12 + 0.0f) / f11, (i15 + 0.0f) / f12, 0.0f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float e();
}
