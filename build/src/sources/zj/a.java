package zj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import dk.b;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final ak.a f57058a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f57059b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f57060c;

    public a(ak.a aVar, Matrix matrix) {
        this.f57058a = (ak.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f57059b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f57060c = d10;
    }

    public Rect a() {
        return this.f57059b;
    }

    public Point[] b() {
        return this.f57060c;
    }

    public int c() {
        int format = this.f57058a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f57058a.b();
    }

    public int e() {
        return this.f57058a.c();
    }
}
