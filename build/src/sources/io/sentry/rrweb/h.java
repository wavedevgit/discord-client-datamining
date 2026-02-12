package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.f3;
import io.sentry.k7;
import io.sentry.m7;
import io.sentry.n4;
import io.sentry.protocol.r;
import io.sentry.rrweb.b;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b implements w1 {

    /* renamed from: i  reason: collision with root package name */
    private String f29991i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29992o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29993p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29994q;

    public h() {
        super(c.Custom);
        this.f29992o = new HashMap();
        this.f29991i = "options";
    }

    private void g(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f29991i);
        f3Var.e("payload");
        h(f3Var, iLogger);
        Map map = this.f29994q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29994q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void h(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        Map map = this.f29992o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29992o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0407b().a(this, f3Var, iLogger);
        f3Var.e("data");
        g(f3Var, iLogger);
        Map map = this.f29993p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29993p.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public h(k7 k7Var) {
        this();
        String str;
        r sdkVersion = k7Var.getSdkVersion();
        if (sdkVersion != null) {
            this.f29992o.put("nativeSdkName", sdkVersion.f());
            this.f29992o.put("nativeSdkVersion", sdkVersion.h());
        }
        m7 sessionReplay = k7Var.getSessionReplay();
        this.f29992o.put("errorSampleRate", sessionReplay.l());
        this.f29992o.put("sessionSampleRate", sessionReplay.q());
        this.f29992o.put("maskAllImages", Boolean.valueOf(sessionReplay.e().contains("android.widget.ImageView")));
        this.f29992o.put("maskAllText", Boolean.valueOf(sessionReplay.e().contains("android.widget.TextView")));
        this.f29992o.put("quality", sessionReplay.m().serializedName());
        this.f29992o.put("maskedViewClasses", sessionReplay.e());
        this.f29992o.put("unmaskedViewClasses", sessionReplay.s());
        if (sessionReplay.n() == n4.PIXEL_COPY) {
            str = "pixelCopy";
        } else {
            str = "canvas";
        }
        this.f29992o.put("screenshotStrategy", str);
        this.f29992o.put("networkDetailHasUrls", Boolean.valueOf(sessionReplay.g().length > 0));
        if (sessionReplay.g().length > 0) {
            this.f29992o.put("networkDetailAllowUrls", sessionReplay.g());
            this.f29992o.put("networkRequestHeaders", sessionReplay.j());
            this.f29992o.put("networkResponseHeaders", sessionReplay.k());
            this.f29992o.put("networkCaptureBodies", Boolean.valueOf(sessionReplay.v()));
            if (sessionReplay.h().length > 0) {
                this.f29992o.put("networkDetailDenyUrls", sessionReplay.h());
            }
        }
    }
}
