package b0;

import android.graphics.RectF;
import android.util.Rational;
import android.util.Size;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final Rational f6123a = new Rational(4, 3);

    /* renamed from: b  reason: collision with root package name */
    public static final Rational f6124b = new Rational(3, 4);

    /* renamed from: c  reason: collision with root package name */
    public static final Rational f6125c = new Rational(16, 9);

    /* renamed from: d  reason: collision with root package name */
    public static final Rational f6126d = new Rational(9, 16);

    /* renamed from: b0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0104a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        private final Rational f6127d;

        /* renamed from: e  reason: collision with root package name */
        private final RectF f6128e;

        /* renamed from: i  reason: collision with root package name */
        private final Rational f6129i;

        public C0104a(Rational rational, Rational rational2) {
            this.f6127d = rational;
            this.f6129i = rational2 == null ? new Rational(4, 3) : rational2;
            this.f6128e = g(rational);
        }

        private float b(RectF rectF) {
            return rectF.width() * rectF.height();
        }

        private float c(RectF rectF, RectF rectF2) {
            float width;
            float height;
            if (rectF.width() < rectF2.width()) {
                width = rectF.width();
            } else {
                width = rectF2.width();
            }
            if (rectF.height() < rectF2.height()) {
                height = rectF.height();
            } else {
                height = rectF2.height();
            }
            return width * height;
        }

        private RectF g(Rational rational) {
            if (rational.floatValue() == this.f6129i.floatValue()) {
                return new RectF(0.0f, 0.0f, this.f6129i.getNumerator(), this.f6129i.getDenominator());
            }
            if (rational.floatValue() > this.f6129i.floatValue()) {
                return new RectF(0.0f, 0.0f, this.f6129i.getNumerator(), (rational.getDenominator() * this.f6129i.getNumerator()) / rational.getNumerator());
            }
            return new RectF(0.0f, 0.0f, (rational.getNumerator() * this.f6129i.getDenominator()) / rational.getDenominator(), this.f6129i.getDenominator());
        }

        private boolean h(RectF rectF, RectF rectF2) {
            if (rectF.width() >= rectF2.width() && rectF.height() >= rectF2.height()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(Rational rational, Rational rational2) {
            if (rational.equals(rational2)) {
                return 0;
            }
            RectF g10 = g(rational);
            RectF g11 = g(rational2);
            boolean h10 = h(g10, this.f6128e);
            boolean h11 = h(g11, this.f6128e);
            if (h10 && h11) {
                return (int) Math.signum(b(g10) - b(g11));
            }
            if (h10) {
                return -1;
            }
            if (h11) {
                return 1;
            }
            return -((int) Math.signum(c(g10, this.f6128e) - c(g11, this.f6128e)));
        }
    }

    public static boolean a(Size size, Rational rational) {
        return b(size, rational, i0.d.f27986c);
    }

    public static boolean b(Size size, Rational rational, Size size2) {
        if (rational == null) {
            return false;
        }
        if (rational.equals(new Rational(size.getWidth(), size.getHeight()))) {
            return true;
        }
        if (i0.d.b(size) < i0.d.b(size2)) {
            return false;
        }
        return c(size, rational);
    }

    private static boolean c(Size size, Rational rational) {
        int width = size.getWidth();
        int height = size.getHeight();
        Rational rational2 = new Rational(rational.getDenominator(), rational.getNumerator());
        int i10 = width % 16;
        if (i10 == 0 && height % 16 == 0) {
            if (!d(Math.max(0, height - 16), width, rational) && !d(Math.max(0, width - 16), height, rational2)) {
                return false;
            }
            return true;
        } else if (i10 == 0) {
            return d(height, width, rational);
        } else {
            if (height % 16 != 0) {
                return false;
            }
            return d(width, height, rational2);
        }
    }

    private static boolean d(int i10, int i11, Rational rational) {
        boolean z10;
        if (i11 % 16 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.a(z10);
        double numerator = (i10 * rational.getNumerator()) / rational.getDenominator();
        if (numerator > Math.max(0, i11 - 16) && numerator < i11 + 16) {
            return true;
        }
        return false;
    }
}
