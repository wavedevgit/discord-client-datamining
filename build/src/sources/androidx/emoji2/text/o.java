package androidx.emoji2.text;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Typeface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private static final ThreadLocal f4178d = new ThreadLocal();

    /* renamed from: a  reason: collision with root package name */
    private final int f4179a;

    /* renamed from: b  reason: collision with root package name */
    private final m f4180b;

    /* renamed from: c  reason: collision with root package name */
    private volatile int f4181c = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(m mVar, int i10) {
        this.f4180b = mVar;
        this.f4179a = i10;
    }

    private c3.a g() {
        ThreadLocal threadLocal = f4178d;
        c3.a aVar = (c3.a) threadLocal.get();
        if (aVar == null) {
            aVar = new c3.a();
            threadLocal.set(aVar);
        }
        this.f4180b.d().j(aVar, this.f4179a);
        return aVar;
    }

    public void a(Canvas canvas, float f10, float f11, Paint paint) {
        Typeface g10 = this.f4180b.g();
        Typeface typeface = paint.getTypeface();
        paint.setTypeface(g10);
        canvas.drawText(this.f4180b.c(), this.f4179a * 2, 2, f10, f11, paint);
        paint.setTypeface(typeface);
    }

    public int b(int i10) {
        return g().h(i10);
    }

    public int c() {
        return g().i();
    }

    public int d() {
        return this.f4181c & 3;
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
        if ((this.f4181c & 4) > 0) {
            return true;
        }
        return false;
    }

    public void l(boolean z10) {
        int d10 = d();
        if (z10) {
            this.f4181c = d10 | 4;
        } else {
            this.f4181c = d10;
        }
    }

    public void m(boolean z10) {
        int i10;
        int i11 = this.f4181c & 4;
        if (z10) {
            i10 = i11 | 2;
        } else {
            i10 = i11 | 1;
        }
        this.f4181c = i10;
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
