package q;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f2 implements a0.a1 {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f45890a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45891b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45892c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f45893d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final a0.d2 f45894e;

    public f2(String str, a0.d2 d2Var) {
        boolean z10;
        int i10;
        this.f45891b = str;
        try {
            i10 = Integer.parseInt(str);
            z10 = true;
        } catch (NumberFormatException unused) {
            x.y0.l("Camera2EncoderProfilesProvider", "Camera id is not an integer: " + str + ", unable to create Camera2EncoderProfilesProvider");
            z10 = false;
            i10 = -1;
        }
        this.f45890a = z10;
        this.f45892c = i10;
        this.f45894e = d2Var;
    }
}
