package r;

import android.hardware.camera2.params.StreamConfigurationMap;
import android.util.Size;
import java.util.HashMap;
import java.util.Map;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f48289a;

    /* renamed from: b  reason: collision with root package name */
    private final u.n f48290b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f48291c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f48292d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final Map f48293e = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        StreamConfigurationMap a();

        Size[] b(int i10);

        int[] c();

        Size[] d(int i10);
    }

    private s0(StreamConfigurationMap streamConfigurationMap, u.n nVar) {
        this.f48289a = new t0(streamConfigurationMap);
        this.f48290b = nVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s0 e(StreamConfigurationMap streamConfigurationMap, u.n nVar) {
        return new s0(streamConfigurationMap, nVar);
    }

    public Size[] a(int i10) {
        if (this.f48292d.containsKey(Integer.valueOf(i10))) {
            if (((Size[]) this.f48292d.get(Integer.valueOf(i10))) == null) {
                return null;
            }
            return (Size[]) ((Size[]) this.f48292d.get(Integer.valueOf(i10))).clone();
        }
        Size[] d10 = this.f48289a.d(i10);
        if (d10 != null && d10.length > 0) {
            d10 = this.f48290b.b(d10, i10);
        }
        this.f48292d.put(Integer.valueOf(i10), d10);
        if (d10 == null) {
            return null;
        }
        return (Size[]) d10.clone();
    }

    public int[] b() {
        int[] c10 = this.f48289a.c();
        if (c10 == null) {
            return null;
        }
        return (int[]) c10.clone();
    }

    public Size[] c(int i10) {
        if (this.f48291c.containsKey(Integer.valueOf(i10))) {
            if (((Size[]) this.f48291c.get(Integer.valueOf(i10))) == null) {
                return null;
            }
            return (Size[]) ((Size[]) this.f48291c.get(Integer.valueOf(i10))).clone();
        }
        Size[] b10 = this.f48289a.b(i10);
        if (b10 != null && b10.length != 0) {
            Size[] b11 = this.f48290b.b(b10, i10);
            this.f48291c.put(Integer.valueOf(i10), b11);
            return (Size[]) b11.clone();
        }
        y0.l("StreamConfigurationMapCompat", "Retrieved output sizes array is null or empty for format " + i10);
        return b10;
    }

    public StreamConfigurationMap d() {
        return this.f48289a.a();
    }
}
