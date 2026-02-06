package bk;

import android.graphics.PointF;
import com.facebook.react.uimanager.ViewProps;
import pg.xe;
import pg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f6835a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f6836b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, PointF pointF) {
        this.f6835a = i10;
        this.f6836b = pointF;
    }

    public PointF a() {
        return this.f6836b;
    }

    public String toString() {
        xe a10 = ye.a("FaceLandmark");
        a10.b("type", this.f6835a);
        a10.c(ViewProps.POSITION, this.f6836b);
        return a10.toString();
    }
}
