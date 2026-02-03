package l5;

import com.airbnb.lottie.LottieAnimationView;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i0 {

    /* renamed from: b  reason: collision with root package name */
    private final LottieAnimationView f36539b;

    /* renamed from: a  reason: collision with root package name */
    private final Map f36538a = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private boolean f36541d = true;

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f36540c = null;

    public i0(LottieAnimationView lottieAnimationView) {
        this.f36539b = lottieAnimationView;
    }

    private void d() {
        LottieAnimationView lottieAnimationView = this.f36539b;
        if (lottieAnimationView != null) {
            lottieAnimationView.invalidate();
        }
        com.airbnb.lottie.n nVar = this.f36540c;
        if (nVar != null) {
            nVar.invalidateSelf();
        }
    }

    public String b(String str, String str2) {
        return a(str2);
    }

    public final String c(String str, String str2) {
        if (this.f36541d && this.f36538a.containsKey(str2)) {
            return (String) this.f36538a.get(str2);
        }
        String b10 = b(str, str2);
        if (this.f36541d) {
            this.f36538a.put(str2, b10);
        }
        return b10;
    }

    public void e(String str, String str2) {
        this.f36538a.put(str, str2);
        d();
    }

    public String a(String str) {
        return str;
    }
}
