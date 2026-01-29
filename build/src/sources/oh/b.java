package oh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f43818a;

    /* renamed from: b  reason: collision with root package name */
    private final float f43819b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f43818a;
            f10 += ((b) cVar).f43819b;
        }
        this.f43818a = cVar;
        this.f43819b = f10;
    }

    @Override // oh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f43818a.a(rectF) + this.f43819b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f43818a.equals(bVar.f43818a) && this.f43819b == bVar.f43819b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f43818a, Float.valueOf(this.f43819b)});
    }
}
