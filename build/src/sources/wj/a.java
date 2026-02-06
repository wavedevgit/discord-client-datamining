package wj;

import ak.b;
import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final xj.a f53832a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f53833b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f53834c;

    public a(xj.a aVar, Matrix matrix) {
        this.f53832a = (xj.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f53833b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f53834c = d10;
    }

    public Rect a() {
        return this.f53833b;
    }

    public Point[] b() {
        return this.f53834c;
    }

    public int c() {
        int format = this.f53832a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f53832a.b();
    }

    public int e() {
        return this.f53832a.c();
    }
}
