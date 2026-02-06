package yc;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    public final long f55233a;

    /* renamed from: b  reason: collision with root package name */
    public final List f55234b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f55235a;

        /* renamed from: b  reason: collision with root package name */
        public final String f55236b;

        /* renamed from: c  reason: collision with root package name */
        public final long f55237c;

        /* renamed from: d  reason: collision with root package name */
        public final long f55238d;

        public a(String str, String str2, long j10, long j11) {
            this.f55235a = str;
            this.f55236b = str2;
            this.f55237c = j10;
            this.f55238d = j11;
        }
    }

    public b(long j10, List list) {
        this.f55233a = j10;
        this.f55234b = list;
    }

    public md.b a(long j10) {
        long j11;
        if (this.f55234b.size() < 2) {
            return null;
        }
        long j12 = j10;
        long j13 = -1;
        long j14 = -1;
        long j15 = -1;
        long j16 = -1;
        boolean z10 = false;
        for (int size = this.f55234b.size() - 1; size >= 0; size--) {
            a aVar = (a) this.f55234b.get(size);
            boolean equals = "video/mp4".equals(aVar.f55235a) | z10;
            if (size == 0) {
                j12 -= aVar.f55238d;
                j11 = 0;
            } else {
                j11 = j12 - aVar.f55237c;
            }
            long j17 = j11;
            long j18 = j12;
            j12 = j17;
            if (equals && j12 != j18) {
                j16 = j18 - j12;
                j15 = j12;
                z10 = false;
            } else {
                z10 = equals;
            }
            if (size == 0) {
                j13 = j12;
                j14 = j18;
            }
        }
        if (j15 == -1 || j16 == -1 || j13 == -1 || j14 == -1) {
            return null;
        }
        return new md.b(j13, j14, this.f55233a, j15, j16);
    }
}
