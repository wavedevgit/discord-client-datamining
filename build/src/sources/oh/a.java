package oh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final float f43761a;

    public a(float f10) {
        this.f43761a = f10;
    }

    @Override // oh.c
    public float a(RectF rectF) {
        return this.f43761a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && this.f43761a == ((a) obj).f43761a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f43761a)});
    }
}
