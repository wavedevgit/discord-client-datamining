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
    public static final a f31570i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f31571j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f31572a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31573b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31574c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31575d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31576e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31577f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31578g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f31579h;

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
        private final Uri f31580a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31581b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f31580a = uri;
            this.f31581b = z10;
        }

        public final Uri a() {
            return this.f31580a;
        }

        public final boolean b() {
            return this.f31581b;
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
            if (Intrinsics.areEqual(this.f31580a, bVar.f31580a) && this.f31581b == bVar.f31581b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31580a.hashCode() * 31) + Boolean.hashCode(this.f31581b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f31578g;
    }

    public final long b() {
        return this.f31577f;
    }

    public final Set c() {
        return this.f31579h;
    }

    public final n d() {
        return this.f31572a;
    }

    public final boolean e() {
        if (!this.f31579h.isEmpty()) {
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
        if (this.f31573b != dVar.f31573b || this.f31574c != dVar.f31574c || this.f31575d != dVar.f31575d || this.f31576e != dVar.f31576e || this.f31577f != dVar.f31577f || this.f31578g != dVar.f31578g || this.f31572a != dVar.f31572a) {
            return false;
        }
        return Intrinsics.areEqual(this.f31579h, dVar.f31579h);
    }

    public final boolean f() {
        return this.f31575d;
    }

    public final boolean g() {
        return this.f31573b;
    }

    public final boolean h() {
        return this.f31574c;
    }

    public int hashCode() {
        long j10 = this.f31577f;
        long j11 = this.f31578g;
        return (((((((((((((this.f31572a.hashCode() * 31) + (this.f31573b ? 1 : 0)) * 31) + (this.f31574c ? 1 : 0)) * 31) + (this.f31575d ? 1 : 0)) * 31) + (this.f31576e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f31579h.hashCode();
    }

    public final boolean i() {
        return this.f31576e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f31572a + ", requiresCharging=" + this.f31573b + ", requiresDeviceIdle=" + this.f31574c + ", requiresBatteryNotLow=" + this.f31575d + ", requiresStorageNotLow=" + this.f31576e + ", contentTriggerUpdateDelayMillis=" + this.f31577f + ", contentTriggerMaxDelayMillis=" + this.f31578g + ", contentUriTriggers=" + this.f31579h + ", }";
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
        this.f31572a = requiredNetworkType;
        this.f31573b = z10;
        this.f31574c = z11;
        this.f31575d = z12;
        this.f31576e = z13;
        this.f31577f = j10;
        this.f31578g = j11;
        this.f31579h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f31573b = other.f31573b;
        this.f31574c = other.f31574c;
        this.f31572a = other.f31572a;
        this.f31575d = other.f31575d;
        this.f31576e = other.f31576e;
        this.f31579h = other.f31579h;
        this.f31577f = other.f31577f;
        this.f31578g = other.f31578g;
    }
}
