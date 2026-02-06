package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends j {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f39192a;

        a(int i10) {
            this.f39192a = i10;
        }

        @Override // net.time4j.calendar.j
        public int d() {
            return pt.c.e(this.f39192a, 2636);
        }
    }

    public static j a(int i10) {
        if (i10 >= 1) {
            return b(pt.c.e(i10, -2333));
        }
        throw new IllegalArgumentException("Dangi year must not be smaller than 1: " + i10);
    }

    public static j b(int i10) {
        return new a(i10);
    }

    public final int c() {
        return pt.c.a(d(), 60) + 1;
    }

    public abstract int d();

    public final c e() {
        int i10 = 60;
        int c10 = pt.c.c(d() + 1, 60);
        if (c10 != 0) {
            i10 = c10;
        }
        return c.r(i10);
    }
}
