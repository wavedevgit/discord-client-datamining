package uj;

import android.graphics.Point;
import android.graphics.Rect;
import mg.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements tj.a {

    /* renamed from: a  reason: collision with root package name */
    private final zh f50339a;

    public o(zh zhVar) {
        this.f50339a = zhVar;
    }

    @Override // tj.a
    public final Rect a() {
        zh zhVar = this.f50339a;
        if (zhVar.f39062p != null) {
            int i10 = 0;
            int i11 = Integer.MIN_VALUE;
            int i12 = Integer.MAX_VALUE;
            int i13 = Integer.MAX_VALUE;
            int i14 = Integer.MIN_VALUE;
            while (true) {
                Point[] pointArr = zhVar.f39062p;
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

    @Override // tj.a
    public final String b() {
        return this.f50339a.f39059e;
    }

    @Override // tj.a
    public final int c() {
        return this.f50339a.f39061o;
    }

    @Override // tj.a
    public final Point[] d() {
        return this.f50339a.f39062p;
    }

    @Override // tj.a
    public final int getFormat() {
        return this.f50339a.f39058d;
    }
}
