package x9;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements b {

    /* renamed from: c  reason: collision with root package name */
    public static final C0730a f54566c = new C0730a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f54567a;

    /* renamed from: b  reason: collision with root package name */
    private long f54568b;

    /* renamed from: x9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0730a {
        public /* synthetic */ C0730a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0730a() {
        }
    }

    public a(d animationInformation) {
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        this.f54567a = animationInformation;
        this.f54568b = -1L;
    }

    @Override // x9.b
    public long a(long j10) {
        long d10 = d();
        long j11 = 0;
        if (d10 == 0) {
            return -1L;
        }
        if (!e() && j10 / d10 >= this.f54567a.b()) {
            return -1L;
        }
        long j12 = j10 % d10;
        int a10 = this.f54567a.a();
        for (int i10 = 0; i10 < a10 && j11 <= j12; i10++) {
            j11 += this.f54567a.l(i10);
        }
        return j10 + (j11 - j12);
    }

    @Override // x9.b
    public int b(long j10, long j11) {
        long d10 = d();
        if (d10 == 0) {
            return c(0L);
        }
        if (!e() && j10 / d10 >= this.f54567a.b()) {
            return -1;
        }
        return c(j10 % d10);
    }

    public final int c(long j10) {
        int i10 = 0;
        long j11 = 0;
        while (true) {
            j11 += this.f54567a.l(i10);
            int i11 = i10 + 1;
            if (j10 < j11) {
                return i10;
            }
            i10 = i11;
        }
    }

    public long d() {
        long j10 = this.f54568b;
        if (j10 != -1) {
            return j10;
        }
        this.f54568b = 0L;
        int a10 = this.f54567a.a();
        for (int i10 = 0; i10 < a10; i10++) {
            this.f54568b += this.f54567a.l(i10);
        }
        return this.f54568b;
    }

    public boolean e() {
        if (this.f54567a.b() == 0) {
            return true;
        }
        return false;
    }
}
