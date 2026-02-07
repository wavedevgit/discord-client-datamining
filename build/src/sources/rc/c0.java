package rc;

import java.util.UUID;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements qc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f48779d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f48780a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f48781b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f48782c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f39062c)) {
            String str = w0.f39063d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f48779d = z10;
            }
        }
        z10 = false;
        f48779d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f48780a = uuid;
        this.f48781b = bArr;
        this.f48782c = z10;
    }
}
