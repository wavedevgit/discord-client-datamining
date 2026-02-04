package x9;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements b {

    /* renamed from: c  reason: collision with root package name */
    public static final C0720a f53203c = new C0720a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f53204a;

    /* renamed from: b  reason: collision with root package name */
    private long f53205b;

    /* renamed from: x9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0720a {
        public /* synthetic */ C0720a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0720a() {
        }
    }

    public a(d animationInformation) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        this.f53204a = animationInformation;
        this.f53205b = -1L;
    }

    @Override // x9.b
    public long a(long j10) {
        long d10 = d();
        long j11 = 0;
        if (d10 == 0) {
            return -1L;
        }
        if (!e() && j10 / d10 >= this.f53204a.b()) {
            return -1L;
        }
        long j12 = j10 % d10;
        int a10 = this.f53204a.a();
        for (int i10 = 0; i10 < a10 && j11 <= j12; i10++) {
            j11 += this.f53204a.l(i10);
        }
        return j10 + (j11 - j12);
    }

    @Override // x9.b
    public int b(long j10, long j11) {
        long d10 = d();
        if (d10 == 0) {
            return c(0L);
        }
        if (!e() && j10 / d10 >= this.f53204a.b()) {
            return -1;
        }
        return c(j10 % d10);
    }

    public final int c(long j10) {
        int i10 = 0;
        long j11 = 0;
        while (true) {
            j11 += this.f53204a.l(i10);
            int i11 = i10 + 1;
            if (j10 < j11) {
                return i10;
            }
            i10 = i11;
        }
    }

    public long d() {
        long j10 = this.f53205b;
        if (j10 != -1) {
            return j10;
        }
        this.f53205b = 0L;
        int a10 = this.f53204a.a();
        for (int i10 = 0; i10 < a10; i10++) {
            this.f53205b += this.f53204a.l(i10);
        }
        return this.f53205b;
    }

    public boolean e() {
        if (this.f53204a.b() == 0) {
            return true;
        }
        return false;
    }
}
