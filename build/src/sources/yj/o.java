package yj;

import android.graphics.Point;
import android.graphics.Rect;
import ng.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements xj.a {

    /* renamed from: a  reason: collision with root package name */
    private final zh f55470a;

    public o(zh zhVar) {
        this.f55470a = zhVar;
    }

    @Override // xj.a
    public final Rect a() {
        zh zhVar = this.f55470a;
        if (zhVar.f40712p != null) {
            int i10 = 0;
            int i11 = Integer.MIN_VALUE;
            int i12 = Integer.MAX_VALUE;
            int i13 = Integer.MAX_VALUE;
            int i14 = Integer.MIN_VALUE;
            while (true) {
                Point[] pointArr = zhVar.f40712p;
                if (i10 < pointArr.length) {
                    Point point = pointArr[i10];
                    i12 = Math.min(i12, point.x);
                    i11 = Math.max(i11, point.x);
                    i13 = Math.min(i13, point.y);
                    i14 = Math.max(i14, point.y);
                    i10++;
                } else {
                    return new Rect(i12, i13, i11, i14);
                }
            }
        } else {
            return null;
        }
    }

    @Override // xj.a
    public final String b() {
        return this.f55470a.f40709e;
    }

    @Override // xj.a
    public final int c() {
        return this.f55470a.f40711o;
    }

    @Override // xj.a
    public final Point[] d() {
        return this.f55470a.f40712p;
    }

    @Override // xj.a
    public final int getFormat() {
        return this.f55470a.f40708d;
    }
}
