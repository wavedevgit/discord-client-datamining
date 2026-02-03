package androidx.emoji2.text;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private static final ThreadLocal f4061d = new ThreadLocal();

    /* renamed from: a  reason: collision with root package name */
    private final int f4062a;

    /* renamed from: b  reason: collision with root package name */
    private final m f4063b;

    /* renamed from: c  reason: collision with root package name */
    private volatile int f4064c = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(m mVar, int i10) {
        this.f4063b = mVar;
        this.f4062a = i10;
    }

    private c3.a g() {
        ThreadLocal threadLocal = f4061d;
        c3.a aVar = (c3.a) threadLocal.get();
        if (aVar == null) {
            aVar = new c3.a();
            threadLocal.set(aVar);
        }
        this.f4063b.d().j(aVar, this.f4062a);
        return aVar;
    }

    public void a(Canvas canvas, float f10, float f11, Paint paint) {
        Typeface g10 = this.f4063b.g();
        Typeface typeface = paint.getTypeface();
        paint.setTypeface(g10);
        canvas.drawText(this.f4063b.c(), this.f4062a * 2, 2, f10, f11, paint);
        paint.setTypeface(typeface);
    }

    public int b(int i10) {
        return g().h(i10);
    }

    public int c() {
        return g().i();
    }

    public int d() {
        return this.f4064c & 3;
    }

    public int e() {
        return g().k();
    }

    public int f() {
        return g().l();
    }

    public short h() {
        return g().m();
    }

    public int i() {
        return g().n();
    }

    public boolean j() {
        return g().j();
    }

    public boolean k() {
        if ((this.f4064c & 4) > 0) {
            return true;
        }
        return false;
    }

    public void l(boolean z10) {
        int d10 = d();
        if (z10) {
            this.f4064c = d10 | 4;
        } else {
            this.f4064c = d10;
        }
    }

    public void m(boolean z10) {
        int i10;
        int i11 = this.f4064c & 4;
        if (z10) {
            i10 = i11 | 2;
        } else {
            i10 = i11 | 1;
        }
        this.f4064c = i10;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(super.toString());
        sb2.append(", id:");
        sb2.append(Integer.toHexString(f()));
        sb2.append(", codepoints:");
        int c10 = c();
        for (int i10 = 0; i10 < c10; i10++) {
            sb2.append(Integer.toHexString(b(i10)));
            sb2.append(" ");
        }
        return sb2.toString();
    }
}
