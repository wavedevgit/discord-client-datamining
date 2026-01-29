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
    private String f30662i;

    /* renamed from: o  reason: collision with root package name */
    private Map f30663o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30664p;

    /* renamed from: q  reason: collision with root package name */
    private Map f30665q;

    public h() {
        super(c.Custom);
        this.f30663o = new HashMap();
        this.f30662i = "options";
    }

    private void g(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("tag").f(this.f30662i);
        f3Var.e("payload");
        h(f3Var, iLogger);
        Map map = this.f30665q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30665q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    private void h(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        Map map = this.f30663o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30663o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0403b().a(this, f3Var, iLogger);
        f3Var.e("data");
        g(f3Var, iLogger);
        Map map = this.f30664p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30664p.get(str);
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
            this.f30663o.put("nativeSdkName", sdkVersion.f());
            this.f30663o.put("nativeSdkVersion", sdkVersion.h());
        }
        m7 sessionReplay = k7Var.getSessionReplay();
        this.f30663o.put("errorSampleRate", sessionReplay.l());
        this.f30663o.put("sessionSampleRate", sessionReplay.q());
        this.f30663o.put("maskAllImages", Boolean.valueOf(sessionReplay.e().contains("android.widget.ImageView")));
        this.f30663o.put("maskAllText", Boolean.valueOf(sessionReplay.e().contains("android.widget.TextView")));
        this.f30663o.put("quality", sessionReplay.m().serializedName());
        this.f30663o.put("maskedViewClasses", sessionReplay.e());
        this.f30663o.put("unmaskedViewClasses", sessionReplay.s());
        if (sessionReplay.n() == n4.PIXEL_COPY) {
            str = "pixelCopy";
        } else {
            str = "canvas";
        }
        this.f30663o.put("screenshotStrategy", str);
        this.f30663o.put("networkDetailHasUrls", Boolean.valueOf(sessionReplay.g().length > 0));
        if (sessionReplay.g().length > 0) {
            this.f30663o.put("networkDetailAllowUrls", sessionReplay.g());
            this.f30663o.put("networkRequestHeaders", sessionReplay.j());
            this.f30663o.put("networkResponseHeaders", sessionReplay.k());
            this.f30663o.put("networkCaptureBodies", Boolean.valueOf(sessionReplay.v()));
            if (sessionReplay.h().length > 0) {
                this.f30663o.put("networkDetailDenyUrls", sessionReplay.h());
            }
        }
    }
}
