package b0;

import android.graphics.RectF;
import android.util.Rational;
import android.util.Size;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final Rational f6016a = new Rational(4, 3);

    /* renamed from: b  reason: collision with root package name */
    public static final Rational f6017b = new Rational(3, 4);

    /* renamed from: c  reason: collision with root package name */
    public static final Rational f6018c = new Rational(16, 9);

    /* renamed from: d  reason: collision with root package name */
    public static final Rational f6019d = new Rational(9, 16);

    /* renamed from: b0.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0092a implements Comparator {

        /* renamed from: d  reason: collision with root package name */
        private final Rational f6020d;

        /* renamed from: e  reason: collision with root package name */
        private final RectF f6021e;

        /* renamed from: i  reason: collision with root package name */
        private final Rational f6022i;

        public C0092a(Rational rational, Rational rational2) {
            this.f6020d = rational;
            this.f6022i = rational2 == null ? new Rational(4, 3) : rational2;
            this.f6021e = h(rational);
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

        private RectF h(Rational rational) {
            if (rational.floatValue() == this.f6022i.floatValue()) {
                return new RectF(0.0f, 0.0f, this.f6022i.getNumerator(), this.f6022i.getDenominator());
            }
            if (rational.floatValue() > this.f6022i.floatValue()) {
                return new RectF(0.0f, 0.0f, this.f6022i.getNumerator(), (rational.getDenominator() * this.f6022i.getNumerator()) / rational.getNumerator());
            }
            return new RectF(0.0f, 0.0f, (rational.getNumerator() * this.f6022i.getDenominator()) / rational.getDenominator(), this.f6022i.getDenominator());
        }

        private boolean j(RectF rectF, RectF rectF2) {
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
            RectF h10 = h(rational);
            RectF h11 = h(rational2);
            boolean j10 = j(h10, this.f6021e);
            boolean j11 = j(h11, this.f6021e);
            if (j10 && j11) {
                return (int) Math.signum(b(h10) - b(h11));
            }
            if (j10) {
                return -1;
            }
            if (j11) {
                return 1;
            }
            return -((int) Math.signum(c(h10, this.f6021e) - c(h11, this.f6021e)));
        }
    }

    public static boolean a(Size size, Rational rational) {
        return b(size, rational, i0.d.f27198c);
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
