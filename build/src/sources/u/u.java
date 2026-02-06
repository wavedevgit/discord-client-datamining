package u;

import a0.o2;
import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.ExtraCroppingQuirk;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u {

    /* renamed from: a  reason: collision with root package name */
    private final ExtraCroppingQuirk f51140a;

    public u() {
        this((ExtraCroppingQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(ExtraCroppingQuirk.class));
    }

    public List a(o2.b bVar, List list) {
        Size c10;
        ExtraCroppingQuirk extraCroppingQuirk = this.f51140a;
        if (extraCroppingQuirk == null || (c10 = extraCroppingQuirk.c(bVar)) == null) {
            return list;
        }
        ArrayList arrayList = new ArrayList();
        arrayList.add(c10);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Size size = (Size) it.next();
            if (!size.equals(c10)) {
                arrayList.add(size);
            }
        }
        return arrayList;
    }

    u(ExtraCroppingQuirk extraCroppingQuirk) {
        this.f51140a = extraCroppingQuirk;
    }
}
