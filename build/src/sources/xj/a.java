package xj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import bk.b;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final yj.a f55043a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f55044b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f55045c;

    public a(yj.a aVar, Matrix matrix) {
        this.f55043a = (yj.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f55044b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f55045c = d10;
    }

    public Rect a() {
        return this.f55044b;
    }

    public Point[] b() {
        return this.f55045c;
    }

    public int c() {
        int format = this.f55043a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f55043a.b();
    }

    public int e() {
        return this.f55043a.c();
    }
}
