package xj;

import android.graphics.PointF;
import com.facebook.react.uimanager.ViewProps;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f53397a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f53398b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, PointF pointF) {
        this.f53397a = i10;
        this.f53398b = pointF;
    }

    public PointF a() {
        return this.f53398b;
    }

    public String toString() {
        xe a10 = ye.a("FaceLandmark");
        a10.b("type", this.f53397a);
        a10.c(ViewProps.POSITION, this.f53398b);
        return a10.toString();
    }
}
