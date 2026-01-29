package r;

import android.hardware.camera2.params.StreamConfigurationMap;
import android.util.Size;
import r.s0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class u0 implements s0.a {

    /* renamed from: a  reason: collision with root package name */
    final StreamConfigurationMap f47771a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static Size[] a(StreamConfigurationMap streamConfigurationMap, int i10) {
            return streamConfigurationMap.getHighResolutionOutputSizes(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(StreamConfigurationMap streamConfigurationMap) {
        this.f47771a = streamConfigurationMap;
    }

    @Override // r.s0.a
    public StreamConfigurationMap a() {
        return this.f47771a;
    }

    @Override // r.s0.a
    public int[] c() {
        try {
            return this.f47771a.getOutputFormats();
        } catch (IllegalArgumentException | NullPointerException e10) {
            y0.m("StreamConfigurationMapCompatBaseImpl", "Failed to get output formats from StreamConfigurationMap", e10);
            return null;
        }
    }

    @Override // r.s0.a
    public Size[] d(int i10) {
        return a.a(this.f47771a, i10);
    }
}
