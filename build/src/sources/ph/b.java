package ph;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f45951a;

    /* renamed from: b  reason: collision with root package name */
    private final float f45952b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f45951a;
            f10 += ((b) cVar).f45952b;
        }
        this.f45951a = cVar;
        this.f45952b = f10;
    }

    @Override // ph.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f45951a.a(rectF) + this.f45952b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f45951a.equals(bVar.f45951a) && this.f45952b == bVar.f45952b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f45951a, Float.valueOf(this.f45952b)});
    }
}
