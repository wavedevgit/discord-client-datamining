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
    private String f29663i;

    /* renamed from: o  reason: collision with root package name */
    private Map f29664o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29665p;

    /* renamed from: q  reason: collision with root package name */
    private Map f29666q;

    public h() {
        super(c.Custom);
        this.f29664o = new HashMap();
        this.f29663i = "options";
    }

    private void g(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("tag").f(this.f29663i);
        f3Var.e("payload");
        h(f3Var, iLogger);
        Map map = this.f29666q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29666q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    private void h(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        Map map = this.f29664o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29664o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        g(f3Var, iLogger);
        Map map = this.f29665p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29665p.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public h(k7 k7Var) {
        this();
        String str;
        r sdkVersion = k7Var.getSdkVersion();
        if (sdkVersion != null) {
            this.f29664o.put("nativeSdkName", sdkVersion.f());
            this.f29664o.put("nativeSdkVersion", sdkVersion.h());
        }
        m7 sessionReplay = k7Var.getSessionReplay();
        this.f29664o.put("errorSampleRate", sessionReplay.l());
        this.f29664o.put("sessionSampleRate", sessionReplay.q());
        this.f29664o.put("maskAllImages", Boolean.valueOf(sessionReplay.e().contains("android.widget.ImageView")));
        this.f29664o.put("maskAllText", Boolean.valueOf(sessionReplay.e().contains("android.widget.TextView")));
        this.f29664o.put("quality", sessionReplay.m().serializedName());
        this.f29664o.put("maskedViewClasses", sessionReplay.e());
        this.f29664o.put("unmaskedViewClasses", sessionReplay.s());
        if (sessionReplay.n() == n4.PIXEL_COPY) {
            str = "pixelCopy";
        } else {
            str = "canvas";
        }
        this.f29664o.put("screenshotStrategy", str);
        this.f29664o.put("networkDetailHasUrls", Boolean.valueOf(sessionReplay.g().length > 0));
        if (sessionReplay.g().length > 0) {
            this.f29664o.put("networkDetailAllowUrls", sessionReplay.g());
            this.f29664o.put("networkRequestHeaders", sessionReplay.j());
            this.f29664o.put("networkResponseHeaders", sessionReplay.k());
            this.f29664o.put("networkCaptureBodies", Boolean.valueOf(sessionReplay.v()));
            if (sessionReplay.h().length > 0) {
                this.f29664o.put("networkDetailDenyUrls", sessionReplay.h());
            }
        }
    }
}
