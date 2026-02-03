package u;

import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.ExtraSupportedOutputSizeQuirk;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f50029a;

    /* renamed from: b  reason: collision with root package name */
    private final ExtraSupportedOutputSizeQuirk f50030b = (ExtraSupportedOutputSizeQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(ExtraSupportedOutputSizeQuirk.class);

    /* renamed from: c  reason: collision with root package name */
    private final e f50031c;

    public n(String str) {
        this.f50029a = str;
        this.f50031c = new e(str);
    }

    private void a(List list, int i10) {
        ExtraSupportedOutputSizeQuirk extraSupportedOutputSizeQuirk = this.f50030b;
        if (extraSupportedOutputSizeQuirk != null) {
            Size[] c10 = extraSupportedOutputSizeQuirk.c(i10);
            if (c10.length > 0) {
                list.addAll(Arrays.asList(c10));
            }
        }
    }

    private void c(List list, int i10) {
        List a10 = this.f50031c.a(i10);
        if (a10.isEmpty()) {
            return;
        }
        list.removeAll(a10);
    }

    public Size[] b(Size[] sizeArr, int i10) {
        ArrayList arrayList = new ArrayList(Arrays.asList(sizeArr));
        a(arrayList, i10);
        c(arrayList, i10);
        if (arrayList.isEmpty()) {
            y0.l("OutputSizesCorrector", "Sizes array becomes empty after excluding problematic output sizes.");
        }
        return (Size[]) arrayList.toArray(new Size[0]);
    }
}
