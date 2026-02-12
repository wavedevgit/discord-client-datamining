package sc;

import java.util.UUID;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 implements rc.b {

    /* renamed from: d  reason: collision with root package name */
    public static final boolean f47921d;

    /* renamed from: a  reason: collision with root package name */
    public final UUID f47922a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f47923b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f47924c;

    static {
        boolean z10;
        if ("Amazon".equals(w0.f39040c)) {
            String str = w0.f39041d;
            if ("AFTM".equals(str) || "AFTB".equals(str)) {
                z10 = true;
                f47921d = z10;
            }
        }
        z10 = false;
        f47921d = z10;
    }

    public c0(UUID uuid, byte[] bArr, boolean z10) {
        this.f47922a = uuid;
        this.f47923b = bArr;
        this.f47924c = z10;
    }
}
