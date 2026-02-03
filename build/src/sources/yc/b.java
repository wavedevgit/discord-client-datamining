package yc;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    public final long f53996a;

    /* renamed from: b  reason: collision with root package name */
    public final List f53997b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f53998a;

        /* renamed from: b  reason: collision with root package name */
        public final String f53999b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54000c;

        /* renamed from: d  reason: collision with root package name */
        public final long f54001d;

        public a(String str, String str2, long j10, long j11) {
            this.f53998a = str;
            this.f53999b = str2;
            this.f54000c = j10;
            this.f54001d = j11;
        }
    }

    public b(long j10, List list) {
        this.f53996a = j10;
        this.f53997b = list;
    }

    public md.b a(long j10) {
        long j11;
        if (this.f53997b.size() < 2) {
            return null;
        }
        long j12 = j10;
        long j13 = -1;
        long j14 = -1;
        long j15 = -1;
        long j16 = -1;
        boolean z10 = false;
        for (int size = this.f53997b.size() - 1; size >= 0; size--) {
            a aVar = (a) this.f53997b.get(size);
            boolean equals = "video/mp4".equals(aVar.f53998a) | z10;
            if (size == 0) {
                j12 -= aVar.f54001d;
                j11 = 0;
            } else {
                j11 = j12 - aVar.f54000c;
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
        return new md.b(j13, j14, this.f53996a, j15, j16);
    }
}
