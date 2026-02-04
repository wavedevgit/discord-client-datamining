package rc;

import java.util.UUID;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements qc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f48637d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f48638a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f48639b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f48640c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f40199c)) {
            String str = w0.f40200d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f48637d = z10;
            }
        }
        z10 = false;
        f48637d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f48638a = uuid;
        this.f48639b = bArr;
        this.f48640c = z10;
    }
}
