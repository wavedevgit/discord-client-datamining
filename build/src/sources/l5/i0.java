package l5;

import com.airbnb.lottie.LottieAnimationView;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i0 {

    /* renamed from: b  reason: collision with root package name */
    private final LottieAnimationView f35859b;

    /* renamed from: a  reason: collision with root package name */
    private final Map f35858a = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private boolean f35861d = true;

    /* renamed from: c  reason: collision with root package name */
    private final com.airbnb.lottie.n f35860c = null;

    public i0(LottieAnimationView lottieAnimationView) {
        this.f35859b = lottieAnimationView;
    }

    private void d() {
        LottieAnimationView lottieAnimationView = this.f35859b;
        if (lottieAnimationView != null) {
            lottieAnimationView.invalidate();
        }
        com.airbnb.lottie.n nVar = this.f35860c;
        if (nVar != null) {
            nVar.invalidateSelf();
        }
    }

    public String b(String str, String str2) {
        return a(str2);
    }

    public final String c(String str, String str2) {
        if (this.f35861d && this.f35858a.containsKey(str2)) {
            return (String) this.f35858a.get(str2);
        }
        String b10 = b(str, str2);
        if (this.f35861d) {
            this.f35858a.put(str2, b10);
        }
        return b10;
    }

    public void e(String str, String str2) {
        this.f35858a.put(str, str2);
        d();
    }

    public String a(String str) {
        return str;
    }
}
