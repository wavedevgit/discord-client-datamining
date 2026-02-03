package oh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f43762a;

    /* renamed from: b  reason: collision with root package name */
    private final float f43763b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f43762a;
            f10 += ((b) cVar).f43763b;
        }
        this.f43762a = cVar;
        this.f43763b = f10;
    }

    @Override // oh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f43762a.a(rectF) + this.f43763b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f43762a.equals(bVar.f43762a) && this.f43763b == bVar.f43763b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f43762a, Float.valueOf(this.f43763b)});
    }
}
