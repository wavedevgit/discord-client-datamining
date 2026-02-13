package sc;

import java.util.UUID;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements rc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f48489d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f48490a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f48491b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f48492c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f39608c)) {
            String str = w0.f39609d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f48489d = z10;
            }
        }
        z10 = false;
        f48489d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f48490a = uuid;
        this.f48491b = bArr;
        this.f48492c = z10;
    }
}
