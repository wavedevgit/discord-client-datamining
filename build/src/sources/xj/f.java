package xj;

import android.graphics.PointF;
import com.facebook.react.uimanager.ViewProps;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f53621a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f53622b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, PointF pointF) {
        this.f53621a = i10;
        this.f53622b = pointF;
    }

    public PointF a() {
        return this.f53622b;
    }

    public String toString() {
        xe a10 = ye.a("FaceLandmark");
        a10.b("type", this.f53621a);
        a10.c(ViewProps.POSITION, this.f53622b);
        return a10.toString();
    }
}
