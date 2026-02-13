package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements d {

    /* renamed from: a  reason: collision with root package name */
    private final float f49401a;

    public j(float f10) {
        this.f49401a = f10;
    }

    private static float b(RectF rectF) {
        return Math.min(rectF.width(), rectF.height());
    }

    @Override // th.d
    public float a(RectF rectF) {
        return this.f49401a * b(rectF);
    }

    public float c() {
        return this.f49401a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j) && this.f49401a == ((j) obj).f49401a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f49401a)});
    }

    public String toString() {
        return ((int) (c() * 100.0f)) + "%";
    }
}
