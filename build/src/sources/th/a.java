package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final float f48787a;

    public a(float f10) {
        this.f48787a = f10;
    }

    @Override // th.d
    public float a(RectF rectF) {
        return this.f48787a;
    }

    public float b() {
        return this.f48787a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && this.f48787a == ((a) obj).f48787a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{Float.valueOf(this.f48787a)});
    }

    public String toString() {
        return b() + "px";
    }
}
