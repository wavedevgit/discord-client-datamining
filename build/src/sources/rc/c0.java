package rc;

import java.util.UUID;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements qc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f48731d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f48732a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f48733b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f48734c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f39014c)) {
            String str = w0.f39015d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f48731d = z10;
            }
        }
        z10 = false;
        f48731d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f48732a = uuid;
        this.f48733b = bArr;
        this.f48734c = z10;
    }
}
