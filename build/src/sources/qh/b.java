package qh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f47781a;

    /* renamed from: b  reason: collision with root package name */
    private final float f47782b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f47781a;
            f10 += ((b) cVar).f47782b;
        }
        this.f47781a = cVar;
        this.f47782b = f10;
    }

    @Override // qh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f47781a.a(rectF) + this.f47782b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f47781a.equals(bVar.f47781a) && this.f47782b == bVar.f47782b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f47781a, Float.valueOf(this.f47782b)});
    }
}
