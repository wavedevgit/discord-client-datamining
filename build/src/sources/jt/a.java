package jt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(double d10) {
        long doubleToLongBits = Double.doubleToLongBits(d10);
        return (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static double b(double d10) {
        while (Double.compare(0.0d, d10) > 0) {
            d10 += 360.0d;
        }
        while (Double.compare(d10, 360.0d) >= 0) {
            d10 -= 360.0d;
        }
        return d10;
    }
}
