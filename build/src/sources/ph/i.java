package ph;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements c {

    /* renamed from: a  reason: collision with root package name */
    private final float f45994a;

    public i(float f10) {
        this.f45994a = f10;
    }

    private static float b(RectF rectF) {
        return Math.min(rectF.width(), rectF.height());
    }

    @Override // ph.c
    public float a(RectF rectF) {
        return this.f45994a * b(rectF);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof i) && this.f45994a == ((i) obj).f45994a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f45994a)});
    }
}
