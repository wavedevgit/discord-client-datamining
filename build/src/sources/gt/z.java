package gt;

import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z {

    /* renamed from: e  reason: collision with root package name */
    private static final a f25370e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final long[] f25371f = new long[0];

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f25372a;

    /* renamed from: b  reason: collision with root package name */
    private final Function2 f25373b;

    /* renamed from: c  reason: collision with root package name */
    private long f25374c;

    /* renamed from: d  reason: collision with root package name */
    private final long[] f25375d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public z(SerialDescriptor descriptor, Function2 readIfAbsent) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(readIfAbsent, "readIfAbsent");
        this.f25372a = descriptor;
        this.f25373b = readIfAbsent;
        int d10 = descriptor.d();
        if (d10 <= 64) {
            this.f25374c = d10 != 64 ? (-1) << d10 : 0L;
            this.f25375d = f25371f;
            return;
        }
        this.f25374c = 0L;
        this.f25375d = e(d10);
    }

    private final void b(int i10) {
        int i11 = (i10 >>> 6) - 1;
        long[] jArr = this.f25375d;
        jArr[i11] = jArr[i11] | (1 << (i10 & 63));
    }

    private final int c() {
        int length = this.f25375d.length;
        int i10 = 0;
        while (i10 < length) {
            int i11 = i10 + 1;
            int i12 = i11 * 64;
            long j10 = this.f25375d[i10];
            while (j10 != -1) {
                int numberOfTrailingZeros = Long.numberOfTrailingZeros(~j10);
                j10 |= 1 << numberOfTrailingZeros;
                int i13 = numberOfTrailingZeros + i12;
                if (((Boolean) this.f25373b.invoke(this.f25372a, Integer.valueOf(i13))).booleanValue()) {
                    this.f25375d[i10] = j10;
                    return i13;
                }
            }
            this.f25375d[i10] = j10;
            i10 = i11;
        }
        return -1;
    }

    private final long[] e(int i10) {
        long[] jArr = new long[(i10 - 1) >>> 6];
        if ((i10 & 63) != 0) {
            jArr[kotlin.collections.i.Z(jArr)] = (-1) << i10;
        }
        return jArr;
    }

    public final void a(int i10) {
        if (i10 < 64) {
            this.f25374c |= 1 << i10;
        } else {
            b(i10);
        }
    }

    public final int d() {
        int numberOfTrailingZeros;
        int d10 = this.f25372a.d();
        do {
            long j10 = this.f25374c;
            if (j10 != -1) {
                numberOfTrailingZeros = Long.numberOfTrailingZeros(~j10);
                this.f25374c |= 1 << numberOfTrailingZeros;
            } else if (d10 > 64) {
                return c();
            } else {
                return -1;
            }
        } while (!((Boolean) this.f25373b.invoke(this.f25372a, Integer.valueOf(numberOfTrailingZeros))).booleanValue());
        return numberOfTrailingZeros;
    }
}
