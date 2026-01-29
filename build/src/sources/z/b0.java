package z;

import androidx.camera.core.ImageProcessingUtil;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b0 implements j0.y {
    @Override // j0.y
    /* renamed from: a */
    public j0.z apply(j0.z zVar) {
        androidx.camera.core.q qVar = new androidx.camera.core.q(androidx.camera.core.o.a(zVar.h().getWidth(), zVar.h().getHeight(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 2));
        androidx.camera.core.n e10 = ImageProcessingUtil.e(qVar, (byte[]) zVar.c());
        qVar.j();
        Objects.requireNonNull(e10);
        b0.f d10 = zVar.d();
        Objects.requireNonNull(d10);
        return j0.z.k(e10, d10, zVar.b(), zVar.f(), zVar.g(), zVar.a());
    }
}
