package rh;

import android.graphics.RectF;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f48947a;

    /* renamed from: b  reason: collision with root package name */
    private final float f48948b;

    public b(float f10, c cVar) {
        while (cVar instanceof b) {
            cVar = ((b) cVar).f48947a;
            f10 += ((b) cVar).f48948b;
        }
        this.f48947a = cVar;
        this.f48948b = f10;
    }

    @Override // rh.c
    public float a(RectF rectF) {
        return Math.max(0.0f, this.f48947a.a(rectF) + this.f48948b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48947a.equals(bVar.f48947a) && this.f48948b == bVar.f48948b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{this.f48947a, Float.valueOf(this.f48948b)});
    }
}
