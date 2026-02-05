package ak;

import android.graphics.PointF;
import com.facebook.react.uimanager.ViewProps;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f706a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f707b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, PointF pointF) {
        this.f706a = i10;
        this.f707b = pointF;
    }

    public PointF a() {
        return this.f707b;
    }

    public String toString() {
        xe a10 = ye.a("FaceLandmark");
        a10.b("type", this.f706a);
        a10.c(ViewProps.POSITION, this.f707b);
        return a10.toString();
    }
}
