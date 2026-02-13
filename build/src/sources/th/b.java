package th;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final d f49356a;

    /* renamed from: b  reason: collision with root package name */
    private final float f49357b;

    public b(float f10, d dVar) {
        while (dVar instanceof b) {
            dVar = ((b) dVar).f49356a;
            f10 += ((b) dVar).f49357b;
        }
        this.f49356a = dVar;
        this.f49357b = f10;
    }

    @Override // th.d
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f49356a.a(rectF) + this.f49357b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f49356a.equals(bVar.f49356a) && this.f49357b == bVar.f49357b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f49356a, Float.valueOf(this.f49357b)});
    }
}
