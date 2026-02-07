package r;

import android.hardware.camera2.params.StreamConfigurationMap;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t0 extends u0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public t0(StreamConfigurationMap streamConfigurationMap) {
        super(streamConfigurationMap);
    }

    @Override // r.s0.a
    public Size[] b(int i10) {
        return this.f48437a.getOutputSizes(i10);
    }
}
