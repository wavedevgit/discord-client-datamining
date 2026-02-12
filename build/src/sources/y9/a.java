package y9;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements b {

    /* renamed from: c  reason: collision with root package name */
    public static final C0774a f55481c = new C0774a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f55482a;

    /* renamed from: b  reason: collision with root package name */
    private long f55483b;

    /* renamed from: y9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0774a {
        public /* synthetic */ C0774a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0774a() {
        }
    }

    public a(d animationInformation) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        this.f55482a = animationInformation;
        this.f55483b = -1L;
    }

    @Override // y9.b
    public long a(long j10) {
        long d10 = d();
        long j11 = 0;
        if (d10 == 0) {
            return -1L;
        }
        if (!e() && j10 / d10 >= this.f55482a.b()) {
            return -1L;
        }
        long j12 = j10 % d10;
        int a10 = this.f55482a.a();
        for (int i10 = 0; i10 < a10 && j11 <= j12; i10++) {
            j11 += this.f55482a.k(i10);
        }
        return j10 + (j11 - j12);
    }

    @Override // y9.b
    public int b(long j10, long j11) {
        long d10 = d();
        if (d10 == 0) {
            return c(0L);
        }
        if (!e() && j10 / d10 >= this.f55482a.b()) {
            return -1;
        }
        return c(j10 % d10);
    }

    public final int c(long j10) {
        int i10 = 0;
        long j11 = 0;
        while (true) {
            j11 += this.f55482a.k(i10);
            int i11 = i10 + 1;
            if (j10 < j11) {
                return i10;
            }
            i10 = i11;
        }
    }

    public long d() {
        long j10 = this.f55483b;
        if (j10 != -1) {
            return j10;
        }
        this.f55483b = 0L;
        int a10 = this.f55482a.a();
        for (int i10 = 0; i10 < a10; i10++) {
            this.f55483b += this.f55482a.k(i10);
        }
        return this.f55483b;
    }

    public boolean e() {
        if (this.f55482a.b() == 0) {
            return true;
        }
        return false;
    }
}
