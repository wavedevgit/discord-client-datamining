package vj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import gf.q;
import zj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final wj.a f52297a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f52298b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f52299c;

    public a(wj.a aVar, Matrix matrix) {
        this.f52297a = (wj.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f52298b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f52299c = d10;
    }

    public Rect a() {
        return this.f52298b;
    }

    public Point[] b() {
        return this.f52299c;
    }

    public int c() {
        int format = this.f52297a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f52297a.b();
    }

    public int e() {
        return this.f52297a.c();
    }
}
