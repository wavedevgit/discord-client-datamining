package k4;

import android.net.Uri;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: i  reason: collision with root package name */
    public static final a f32057i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f32058j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f32059a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32060b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32061c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32062d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32063e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32064f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32065g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f32066h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f32067a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32068b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f32067a = uri;
            this.f32068b = z10;
        }

        public final Uri a() {
            return this.f32067a;
        }

        public final boolean b() {
            return this.f32068b;
        }

        public boolean equals(Object obj) {
            Class<?> cls;
            if (this == obj) {
                return true;
            }
            if (obj != null) {
                cls = obj.getClass();
            } else {
                cls = null;
            }
            if (!Intrinsics.areEqual(b.class, cls)) {
                return false;
            }
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type androidx.work.Constraints.ContentUriTrigger");
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f32067a, bVar.f32067a) && this.f32068b == bVar.f32068b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f32067a.hashCode() * 31) + Boolean.hashCode(this.f32068b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f32065g;
    }

    public final long b() {
        return this.f32064f;
    }

    public final Set c() {
        return this.f32066h;
    }

    public final n d() {
        return this.f32059a;
    }

    public final boolean e() {
        if (!this.f32066h.isEmpty()) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !Intrinsics.areEqual(d.class, obj.getClass())) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f32060b != dVar.f32060b || this.f32061c != dVar.f32061c || this.f32062d != dVar.f32062d || this.f32063e != dVar.f32063e || this.f32064f != dVar.f32064f || this.f32065g != dVar.f32065g || this.f32059a != dVar.f32059a) {
            return false;
        }
        return Intrinsics.areEqual(this.f32066h, dVar.f32066h);
    }

    public final boolean f() {
        return this.f32062d;
    }

    public final boolean g() {
        return this.f32060b;
    }

    public final boolean h() {
        return this.f32061c;
    }

    public int hashCode() {
        long j10 = this.f32064f;
        long j11 = this.f32065g;
        return (((((((((((((this.f32059a.hashCode() * 31) + (this.f32060b ? 1 : 0)) * 31) + (this.f32061c ? 1 : 0)) * 31) + (this.f32062d ? 1 : 0)) * 31) + (this.f32063e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f32066h.hashCode();
    }

    public final boolean i() {
        return this.f32063e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f32059a + ", requiresCharging=" + this.f32060b + ", requiresDeviceIdle=" + this.f32061c + ", requiresBatteryNotLow=" + this.f32062d + ", requiresStorageNotLow=" + this.f32063e + ", contentTriggerUpdateDelayMillis=" + this.f32064f + ", contentTriggerMaxDelayMillis=" + this.f32065g + ", contentUriTriggers=" + this.f32066h + ", }";
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(n requiredNetworkType, boolean z10, boolean z11, boolean z12) {
        this(requiredNetworkType, z10, false, z11, z12);
        Intrinsics.checkNotNullParameter(requiredNetworkType, "requiredNetworkType");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(n requiredNetworkType, boolean z10, boolean z11, boolean z12, boolean z13) {
        this(requiredNetworkType, z10, z11, z12, z13, -1L, 0L, null, 192, null);
        Intrinsics.checkNotNullParameter(requiredNetworkType, "requiredNetworkType");
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, boolean z13, long j10, long j11, Set set, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12, (i10 & 16) != 0 ? false : z13, (i10 & 32) != 0 ? -1L : j10, (i10 & 64) != 0 ? -1L : j11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? x0.d() : set);
    }

    public d(n requiredNetworkType, boolean z10, boolean z11, boolean z12, boolean z13, long j10, long j11, Set contentUriTriggers) {
        Intrinsics.checkNotNullParameter(requiredNetworkType, "requiredNetworkType");
        Intrinsics.checkNotNullParameter(contentUriTriggers, "contentUriTriggers");
        this.f32059a = requiredNetworkType;
        this.f32060b = z10;
        this.f32061c = z11;
        this.f32062d = z12;
        this.f32063e = z13;
        this.f32064f = j10;
        this.f32065g = j11;
        this.f32066h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f32060b = other.f32060b;
        this.f32061c = other.f32061c;
        this.f32059a = other.f32059a;
        this.f32062d = other.f32062d;
        this.f32063e = other.f32063e;
        this.f32066h = other.f32066h;
        this.f32064f = other.f32064f;
        this.f32065g = other.f32065g;
    }
}
