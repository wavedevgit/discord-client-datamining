package oh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f43962a;

    /* renamed from: b  reason: collision with root package name */
    private final float f43963b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f43962a;
            f10 += ((b) cVar).f43963b;
        }
        this.f43962a = cVar;
        this.f43963b = f10;
    }

    @Override // oh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f43962a.a(rectF) + this.f43963b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f43962a.equals(bVar.f43962a) && this.f43963b == bVar.f43963b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f43962a, Float.valueOf(this.f43963b)});
    }
}
