package eightbitlab.com.blurview;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    private final float f21577a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f21578a;

        /* renamed from: b  reason: collision with root package name */
        final int f21579b;

        /* renamed from: c  reason: collision with root package name */
        final float f21580c;

        a(int i10, int i11, float f10) {
            this.f21578a = i10;
            this.f21579b = i11;
            this.f21580c = f10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && getClass() == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f21578a == aVar.f21578a && this.f21579b == aVar.f21579b && Float.compare(aVar.f21580c, this.f21580c) == 0) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int i11 = ((this.f21578a * 31) + this.f21579b) * 31;
            float f10 = this.f21580c;
            if (f10 != 0.0f) {
                i10 = Float.floatToIntBits(f10);
            } else {
                i10 = 0;
            }
            return i11 + i10;
        }

        public String toString() {
            return "Size{width=" + this.f21578a + ", height=" + this.f21579b + ", scaleFactor=" + this.f21580c + '}';
        }
    }

    public g(float f10) {
        this.f21577a = f10;
    }

    private int a(float f10) {
        return (int) Math.ceil(f10 / this.f21577a);
    }

    private int c(int i10) {
        int i11 = i10 % 64;
        if (i11 == 0) {
            return i10;
        }
        return (i10 - i11) + 64;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b(int i10, int i11) {
        if (a(i11) != 0 && a(i10) != 0) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a d(int i10, int i11) {
        float f10;
        float f11 = i10;
        int c10 = c(a(f11));
        return new a(c10, (int) Math.ceil(i11 / f10), f11 / c10);
    }
}
