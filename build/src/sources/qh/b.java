package qh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f47829a;

    /* renamed from: b  reason: collision with root package name */
    private final float f47830b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f47829a;
            f10 += ((b) cVar).f47830b;
        }
        this.f47829a = cVar;
        this.f47830b = f10;
    }

    @Override // qh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f47829a.a(rectF) + this.f47830b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f47829a.equals(bVar.f47829a) && this.f47830b == bVar.f47830b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f47829a, Float.valueOf(this.f47830b)});
    }
}
