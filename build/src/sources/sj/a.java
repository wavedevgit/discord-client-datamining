package sj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import gf.q;
import wj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final tj.a f49122a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f49123b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f49124c;

    public a(tj.a aVar, Matrix matrix) {
        this.f49122a = (tj.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f49123b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f49124c = d10;
    }

    public Rect a() {
        return this.f49123b;
    }

    public Point[] b() {
        return this.f49124c;
    }

    public int c() {
        int format = this.f49122a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f49122a.b();
    }

    public int e() {
        return this.f49122a.c();
    }
}
