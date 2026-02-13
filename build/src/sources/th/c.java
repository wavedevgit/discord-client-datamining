package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements d {

    /* renamed from: a  reason: collision with root package name */
    private final float f49358a;

    public c(float f10) {
        this.f49358a = f10;
    }

    private static float b(RectF rectF) {
        return Math.min(rectF.width() / 2.0f, rectF.height() / 2.0f);
    }

    @Override // th.d
    public float a(RectF rectF) {
        return u1.a.a(this.f49358a, 0.0f, b(rectF));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof c) && this.f49358a == ((c) obj).f49358a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f49358a)});
    }
}
