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
    private String f28855i;

    /* renamed from: o  reason: collision with root package name */
    private Map f28856o;

    /* renamed from: p  reason: collision with root package name */
    private Map f28857p;

    /* renamed from: q  reason: collision with root package name */
    private Map f28858q;

    public h() {
        super(c.Custom);
        this.f28856o = new HashMap();
        this.f28855i = "options";
    }

    private void g(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("tag").f(this.f28855i);
        f3Var.e("payload");
        h(f3Var, iLogger);
        Map map = this.f28858q;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28858q.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    private void h(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        Map map = this.f28856o;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28856o.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        g(f3Var, iLogger);
        Map map = this.f28857p;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28857p.get(str);
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
            this.f28856o.put("nativeSdkName", sdkVersion.f());
            this.f28856o.put("nativeSdkVersion", sdkVersion.h());
        }
        m7 sessionReplay = k7Var.getSessionReplay();
        this.f28856o.put("errorSampleRate", sessionReplay.l());
        this.f28856o.put("sessionSampleRate", sessionReplay.q());
        this.f28856o.put("maskAllImages", Boolean.valueOf(sessionReplay.e().contains("android.widget.ImageView")));
        this.f28856o.put("maskAllText", Boolean.valueOf(sessionReplay.e().contains("android.widget.TextView")));
        this.f28856o.put("quality", sessionReplay.m().serializedName());
        this.f28856o.put("maskedViewClasses", sessionReplay.e());
        this.f28856o.put("unmaskedViewClasses", sessionReplay.s());
        if (sessionReplay.n() == n4.PIXEL_COPY) {
            str = "pixelCopy";
        } else {
            str = "canvas";
        }
        this.f28856o.put("screenshotStrategy", str);
        this.f28856o.put("networkDetailHasUrls", Boolean.valueOf(sessionReplay.g().length > 0));
        if (sessionReplay.g().length > 0) {
            this.f28856o.put("networkDetailAllowUrls", sessionReplay.g());
            this.f28856o.put("networkRequestHeaders", sessionReplay.j());
            this.f28856o.put("networkResponseHeaders", sessionReplay.k());
            this.f28856o.put("networkCaptureBodies", Boolean.valueOf(sessionReplay.v()));
            if (sessionReplay.h().length > 0) {
                this.f28856o.put("networkDetailDenyUrls", sessionReplay.h());
            }
        }
    }
}
