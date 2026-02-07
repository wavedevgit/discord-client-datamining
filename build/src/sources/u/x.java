package u;

import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.RepeatingStreamConstraintForVideoRecordingQuirk;
import java.util.ArrayList;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: b  reason: collision with root package name */
    private static final Size f51191b = new Size(320, 240);

    /* renamed from: c  reason: collision with root package name */
    private static final Comparator f51192c = new b0.d();

    /* renamed from: a  reason: collision with root package name */
    private final RepeatingStreamConstraintForVideoRecordingQuirk f51193a = (RepeatingStreamConstraintForVideoRecordingQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(RepeatingStreamConstraintForVideoRecordingQuirk.class);

    public Size[] a(Size[] sizeArr) {
        if (this.f51193a != null && RepeatingStreamConstraintForVideoRecordingQuirk.c()) {
            ArrayList arrayList = new ArrayList();
            for (Size size : sizeArr) {
                if (f51192c.compare(size, f51191b) >= 0) {
                    arrayList.add(size);
                }
            }
            return (Size[]) arrayList.toArray(new Size[0]);
        }
        return sizeArr;
    }
}
