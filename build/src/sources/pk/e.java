package pk;

import com.discord.media.engine.MediaEngine;
import hk.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: h  reason: collision with root package name */
    private static final e[] f45046h = a();

    /* renamed from: a  reason: collision with root package name */
    private final int f45047a;

    /* renamed from: b  reason: collision with root package name */
    private final int f45048b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45049c;

    /* renamed from: d  reason: collision with root package name */
    private final int f45050d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45051e;

    /* renamed from: f  reason: collision with root package name */
    private final c f45052f;

    /* renamed from: g  reason: collision with root package name */
    private final int f45053g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f45054a;

        /* renamed from: b  reason: collision with root package name */
        private final int f45055b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public int a() {
            return this.f45054a;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public int b() {
            return this.f45055b;
        }

        private b(int i10, int i11) {
            this.f45054a = i10;
            this.f45055b = i11;
        }
    }

    private e(int i10, int i11, int i12, int i13, int i14, c cVar) {
        b[] a10;
        this.f45047a = i10;
        this.f45048b = i11;
        this.f45049c = i12;
        this.f45050d = i13;
        this.f45051e = i14;
        this.f45052f = cVar;
        int b10 = cVar.b();
        int i15 = 0;
        for (b bVar : cVar.a()) {
            i15 += bVar.a() * (bVar.b() + b10);
        }
        this.f45053g = i15;
    }

    private static e[] a() {
        return new e[]{new e(1, 10, 10, 8, 8, new c(5, new b(1, 3))), new e(2, 12, 12, 10, 10, new c(7, new b(1, 5))), new e(3, 14, 14, 12, 12, new c(10, new b(1, 8))), new e(4, 16, 16, 14, 14, new c(12, new b(1, 12))), new e(5, 18, 18, 16, 16, new c(14, new b(1, 18))), new e(6, 20, 20, 18, 18, new c(18, new b(1, 22))), new e(7, 22, 22, 20, 20, new c(20, new b(1, 30))), new e(8, 24, 24, 22, 22, new c(24, new b(1, 36))), new e(9, 26, 26, 24, 24, new c(28, new b(1, 44))), new e(10, 32, 32, 14, 14, new c(36, new b(1, 62))), new e(11, 36, 36, 16, 16, new c(42, new b(1, 86))), new e(12, 40, 40, 18, 18, new c(48, new b(1, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION))), new e(13, 44, 44, 20, 20, new c(56, new b(1, 144))), new e(14, 48, 48, 22, 22, new c(68, new b(1, 174))), new e(15, 52, 52, 24, 24, new c(42, new b(2, 102))), new e(16, 64, 64, 14, 14, new c(56, new b(2, 140))), new e(17, 72, 72, 16, 16, new c(36, new b(4, 92))), new e(18, 80, 80, 18, 18, new c(48, new b(4, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION))), new e(19, 88, 88, 20, 20, new c(56, new b(4, 144))), new e(20, 96, 96, 22, 22, new c(68, new b(4, 174))), new e(21, 104, 104, 24, 24, new c(56, new b(6, 136))), new e(22, 120, 120, 18, 18, new c(68, new b(6, 175))), new e(23, 132, 132, 20, 20, new c(62, new b(8, 163))), new e(24, 144, 144, 22, 22, new c(62, new b(8, 156), new b(2, 155))), new e(25, 8, 18, 6, 16, new c(7, new b(1, 5))), new e(26, 8, 32, 6, 14, new c(11, new b(1, 10))), new e(27, 12, 26, 10, 24, new c(14, new b(1, 16))), new e(28, 12, 36, 10, 16, new c(18, new b(1, 22))), new e(29, 16, 36, 14, 16, new c(24, new b(1, 32))), new e(30, 16, 48, 14, 22, new c(28, new b(1, 49))), new e(31, 8, 48, 6, 22, new c(15, new b(1, 18))), new e(32, 8, 64, 6, 14, new c(18, new b(1, 24))), new e(33, 8, 80, 6, 18, new c(22, new b(1, 32))), new e(34, 8, 96, 6, 22, new c(28, new b(1, 38))), new e(35, 8, 120, 6, 18, new c(32, new b(1, 49))), new e(36, 8, 144, 6, 22, new c(36, new b(1, 63))), new e(37, 12, 64, 10, 14, new c(27, new b(1, 43))), new e(38, 12, 88, 10, 20, new c(36, new b(1, 64))), new e(39, 16, 64, 14, 14, new c(36, new b(1, 62))), new e(40, 20, 36, 18, 16, new c(28, new b(1, 44))), new e(41, 20, 44, 18, 20, new c(34, new b(1, 56))), new e(42, 20, 64, 18, 14, new c(42, new b(1, 84))), new e(43, 22, 48, 20, 22, new c(38, new b(1, 72))), new e(44, 24, 48, 22, 22, new c(41, new b(1, 80))), new e(45, 24, 64, 22, 14, new c(46, new b(1, 108))), new e(46, 26, 40, 24, 18, new c(38, new b(1, 70))), new e(47, 26, 48, 24, 22, new c(42, new b(1, 90))), new e(48, 26, 64, 24, 14, new c(50, new b(1, 118)))};
    }

    public static e h(int i10, int i11) {
        e[] eVarArr;
        if ((i10 & 1) == 0 && (i11 & 1) == 0) {
            for (e eVar : f45046h) {
                if (eVar.f45048b == i10 && eVar.f45049c == i11) {
                    return eVar;
                }
            }
            throw g.a();
        }
        throw g.a();
    }

    public int b() {
        return this.f45051e;
    }

    public int c() {
        return this.f45050d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return this.f45052f;
    }

    public int e() {
        return this.f45049c;
    }

    public int f() {
        return this.f45048b;
    }

    public int g() {
        return this.f45053g;
    }

    public int i() {
        return this.f45047a;
    }

    public String toString() {
        return String.valueOf(this.f45047a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f45056a;

        /* renamed from: b  reason: collision with root package name */
        private final b[] f45057b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b[] a() {
            return this.f45057b;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public int b() {
            return this.f45056a;
        }

        private c(int i10, b bVar) {
            this.f45056a = i10;
            this.f45057b = new b[]{bVar};
        }

        private c(int i10, b bVar, b bVar2) {
            this.f45056a = i10;
            this.f45057b = new b[]{bVar, bVar2};
        }
    }
}
