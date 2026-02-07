package qt;

import java.io.ObjectInputStream;
import java.io.Serializable;
import java.io.StreamCorruptedException;
import net.time4j.a0;
import net.time4j.f0;
import yt.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements Serializable {
    private static final long serialVersionUID = 486345450973062467L;
    private final f scale;
    private final double value;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48202a;

        static {
            int[] iArr = new int[f.values().length];
            f48202a = iArr;
            try {
                iArr[f.UT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48202a[f.TT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f48202a[f.POSIX.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private c(double d10, f fVar) {
        a(d10, fVar);
        this.value = d10;
        this.scale = fVar;
    }

    private static void a(double d10, f fVar) {
        if (!Double.isNaN(d10) && !Double.isInfinite(d10)) {
            int i10 = a.f48202a[fVar.ordinal()];
            if (i10 != 1 && i10 != 2 && i10 != 3) {
                throw new IllegalArgumentException("Unsupported time scale: " + fVar);
            } else if (Double.compare(990575.0d, d10) <= 0 && Double.compare(d10, 2817152.0d) <= 0) {
                return;
            } else {
                throw new IllegalArgumentException("Out of range: " + d10);
            }
        }
        throw new IllegalArgumentException("Value is not finite: " + d10);
    }

    static double d(a0 a0Var, f fVar) {
        return ((a0Var.o(fVar) + e(fVar)) + (a0Var.j(fVar) / 1.0E9d)) / 86400.0d;
    }

    private static long e(f fVar) {
        int i10 = a.f48202a[fVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 3) {
                return 210866760000L;
            }
            throw new UnsupportedOperationException(fVar.name());
        }
        return 210929832000L;
    }

    public static c f(double d10) {
        return new c(d10, f.TT);
    }

    public static c g(a0 a0Var) {
        f fVar = f.TT;
        return new c(d(a0Var, fVar), fVar);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        try {
            objectInputStream.defaultReadObject();
            a(this.value, this.scale);
        } catch (ClassNotFoundException unused) {
            throw new StreamCorruptedException();
        } catch (IllegalArgumentException unused2) {
            throw new StreamCorruptedException();
        }
    }

    public double b() {
        return this.value - 2400000.5d;
    }

    public double c() {
        return this.value;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.value == cVar.value && this.scale == cVar.scale) {
                return true;
            }
        }
        return false;
    }

    public a0 h() {
        f fVar;
        double d10 = this.value * 86400.0d;
        f fVar2 = this.scale;
        if (!yt.d.u().G() && fVar2 != (fVar = f.POSIX)) {
            if (fVar2 == f.TT) {
                f0 M0 = f0.M0((long) Math.floor(b()), rt.a0.MODIFIED_JULIAN_DATE);
                d10 -= f.d(M0.f(), M0.r());
            }
            d10 += 6.3072E7d;
            fVar2 = fVar;
        }
        return a0.l0(pt.c.m((long) d10, e(fVar2)), (int) ((d10 - Math.floor(d10)) * 1.0E9d), fVar2);
    }

    public int hashCode() {
        return qt.a.a(this.value) ^ this.scale.hashCode();
    }

    public String toString() {
        return "JD(" + this.scale.name() + ')' + this.value;
    }
}
