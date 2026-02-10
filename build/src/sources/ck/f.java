package ck;

import android.graphics.PointF;
import com.facebook.react.uimanager.ViewProps;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f7676a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f7677b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, PointF pointF) {
        this.f7676a = i10;
        this.f7677b = pointF;
    }

    public PointF a() {
        return this.f7677b;
    }

    public String toString() {
        xe a10 = ye.a("FaceLandmark");
        a10.b("type", this.f7676a);
        a10.c(ViewProps.POSITION, this.f7677b);
        return a10.toString();
    }
}
