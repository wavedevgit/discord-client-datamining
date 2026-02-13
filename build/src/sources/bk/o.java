package bk;

import android.graphics.Point;
import android.graphics.Rect;
import og.zh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements ak.a {

    /* renamed from: a  reason: collision with root package name */
    private final zh f7249a;

    public o(zh zhVar) {
        this.f7249a = zhVar;
    }

    @Override // ak.a
    public final Rect a() {
        zh zhVar = this.f7249a;
        if (zhVar.f40632p != null) {
            int i10 = 0;
            int i11 = Integer.MIN_VALUE;
            int i12 = Integer.MAX_VALUE;
            int i13 = Integer.MAX_VALUE;
            int i14 = Integer.MIN_VALUE;
            while (true) {
                Point[] pointArr = zhVar.f40632p;
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

    @Override // ak.a
    public final String b() {
        return this.f7249a.f40629e;
    }

    @Override // ak.a
    public final int c() {
        return this.f7249a.f40631o;
    }

    @Override // ak.a
    public final Point[] d() {
        return this.f7249a.f40632p;
    }

    @Override // ak.a
    public final int getFormat() {
        return this.f7249a.f40628d;
    }
}
