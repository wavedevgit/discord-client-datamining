package xj;

import android.graphics.Point;
import android.graphics.Rect;
import mg.sl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements wj.a {

    /* renamed from: a  reason: collision with root package name */
    private final sl f53909a;

    public m(sl slVar) {
        this.f53909a = slVar;
    }

    @Override // wj.a
    public final Rect a() {
        Point[] e10 = this.f53909a.e();
        if (e10 != null) {
            int i10 = Integer.MIN_VALUE;
            int i11 = Integer.MAX_VALUE;
            int i12 = Integer.MAX_VALUE;
            int i13 = Integer.MIN_VALUE;
            for (Point point : e10) {
                i11 = Math.min(i11, point.x);
                i10 = Math.max(i10, point.x);
                i12 = Math.min(i12, point.y);
                i13 = Math.max(i13, point.y);
            }
            return new Rect(i11, i12, i10, i13);
        }
        return null;
    }

    @Override // wj.a
    public final String b() {
        return this.f53909a.d();
    }

    @Override // wj.a
    public final int c() {
        return this.f53909a.c();
    }

    @Override // wj.a
    public final Point[] d() {
        return this.f53909a.e();
    }

    @Override // wj.a
    public final int getFormat() {
        return this.f53909a.b();
    }
}
