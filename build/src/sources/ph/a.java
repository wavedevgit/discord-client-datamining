package ph;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final float f45950a;

    public a(float f10) {
        this.f45950a = f10;
    }

    @Override // ph.c
    public float a(RectF rectF) {
        return this.f45950a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && this.f45950a == ((a) obj).f45950a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f45950a)});
    }
}
