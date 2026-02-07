package qh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final float f47828a;

    public a(float f10) {
        this.f47828a = f10;
    }

    @Override // qh.c
    public float a(RectF rectF) {
        return this.f47828a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && this.f47828a == ((a) obj).f47828a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f47828a)});
    }
}
