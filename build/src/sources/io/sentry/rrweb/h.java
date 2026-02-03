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
    private String f30605i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30606o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30607p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30608q;

    public h() {
        super(c.Custom);
        this.f30606o = new HashMap();
        this.f30605i = "options";
    }

    private void g(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("tag").f(this.f30605i);
        f3Var.e("payload");
        h(f3Var, iLogger);
        Map map = this.f30608q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30608q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    private void h(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        Map map = this.f30606o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30606o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0405b().a(this, f3Var, iLogger);
        f3Var.e("data");
        g(f3Var, iLogger);
        Map map = this.f30607p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30607p.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public h(k7 k7Var) {
        this();
        String str;
        r sdkVersion = k7Var.getSdkVersion();
        if (sdkVersion != null) {
            this.f30606o.put("nativeSdkName", sdkVersion.f());
            this.f30606o.put("nativeSdkVersion", sdkVersion.h());
        }
        m7 sessionReplay = k7Var.getSessionReplay();
        this.f30606o.put("errorSampleRate", sessionReplay.l());
        this.f30606o.put("sessionSampleRate", sessionReplay.q());
        this.f30606o.put("maskAllImages", Boolean.valueOf(sessionReplay.e().contains("android.widget.ImageView")));
        this.f30606o.put("maskAllText", Boolean.valueOf(sessionReplay.e().contains("android.widget.TextView")));
        this.f30606o.put("quality", sessionReplay.m().serializedName());
        this.f30606o.put("maskedViewClasses", sessionReplay.e());
        this.f30606o.put("unmaskedViewClasses", sessionReplay.s());
        if (sessionReplay.n() == n4.PIXEL_COPY) {
            str = "pixelCopy";
        } else {
            str = "canvas";
        }
        this.f30606o.put("screenshotStrategy", str);
        this.f30606o.put("networkDetailHasUrls", Boolean.valueOf(sessionReplay.g().length > 0));
        if (sessionReplay.g().length > 0) {
            this.f30606o.put("networkDetailAllowUrls", sessionReplay.g());
            this.f30606o.put("networkRequestHeaders", sessionReplay.j());
            this.f30606o.put("networkResponseHeaders", sessionReplay.k());
            this.f30606o.put("networkCaptureBodies", Boolean.valueOf(sessionReplay.v()));
            if (sessionReplay.h().length > 0) {
                this.f30606o.put("networkDetailDenyUrls", sessionReplay.h());
            }
        }
    }
}
