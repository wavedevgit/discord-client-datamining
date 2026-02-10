package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final d f48787a;

    /* renamed from: b  reason: collision with root package name */
    private final float f48788b;

    public b(float f10, d dVar) {
        while (dVar instanceof b) {
            dVar = ((b) dVar).f48787a;
            f10 += ((b) dVar).f48788b;
        }
        this.f48787a = dVar;
        this.f48788b = f10;
    }

    @Override // th.d
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f48787a.a(rectF) + this.f48788b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48787a.equals(bVar.f48787a) && this.f48788b == bVar.f48788b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f48787a, Float.valueOf(this.f48788b)});
    }
}
