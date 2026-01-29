package q;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f2 implements a0.a1 {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f46309a;

    /* renamed from: b  reason: collision with root package name */
    private final String f46310b;

    /* renamed from: c  reason: collision with root package name */
    private final int f46311c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f46312d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final a0.d2 f46313e;

    public f2(String str, a0.d2 d2Var) {
        boolean z10;
        int i10;
        this.f46310b = str;
        try {
            i10 = Integer.parseInt(str);
            z10 = true;
        } catch (NumberFormatException unused) {
            x.y0.l("Camera2EncoderProfilesProvider", "Camera id is not an integer: " + str + ", unable to create Camera2EncoderProfilesProvider");
            z10 = false;
            i10 = -1;
        }
        this.f46309a = z10;
        this.f46311c = i10;
        this.f46313e = d2Var;
    }
}
