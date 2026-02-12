package zj;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.Rect;
import dk.b;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final ak.a f56490a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f56491b;

    /* renamed from: c  reason: collision with root package name */
    private final Point[] f56492c;

    public a(ak.a aVar, Matrix matrix) {
        this.f56490a = (ak.a) q.l(aVar);
        Rect a10 = aVar.a();
        if (a10 != null && matrix != null) {
            b.e(a10, matrix);
        }
        this.f56491b = a10;
        Point[] d10 = aVar.d();
        if (d10 != null && matrix != null) {
            b.b(d10, matrix);
        }
        this.f56492c = d10;
    }

    public Rect a() {
        return this.f56491b;
    }

    public Point[] b() {
        return this.f56492c;
    }

    public int c() {
        int format = this.f56490a.getFormat();
        if (format > 4096 || format == 0) {
            return -1;
        }
        return format;
    }

    public String d() {
        return this.f56490a.b();
    }

    public int e() {
        return this.f56490a.c();
    }
}
