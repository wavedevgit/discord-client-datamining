package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements d {

    /* renamed from: a  reason: collision with root package name */
    private final float f48832a;

    public j(float f10) {
        this.f48832a = f10;
    }

    private static float b(RectF rectF) {
        return Math.min(rectF.width(), rectF.height());
    }

    @Override // th.d
    public float a(RectF rectF) {
        return this.f48832a * b(rectF);
    }

    public float c() {
        return this.f48832a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j) && this.f48832a == ((j) obj).f48832a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f48832a)});
    }

    public String toString() {
        return ((int) (c() * 100.0f)) + "%";
    }
}
