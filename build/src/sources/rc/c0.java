package rc;

import java.util.UUID;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements qc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f48331d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f48332a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f48333b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f48334c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f40160c)) {
            String str = w0.f40161d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f48331d = z10;
            }
        }
        z10 = false;
        f48331d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f48332a = uuid;
        this.f48333b = bArr;
        this.f48334c = z10;
    }
}
