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
    public static final a f30630i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f30631j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f30632a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f30633b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f30634c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30635d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f30636e;

    /* renamed from: f  reason: collision with root package name */
    private final long f30637f;

    /* renamed from: g  reason: collision with root package name */
    private final long f30638g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f30639h;

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
        private final Uri f30640a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f30641b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f30640a = uri;
            this.f30641b = z10;
        }

        public final Uri a() {
            return this.f30640a;
        }

        public final boolean b() {
            return this.f30641b;
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
            if (Intrinsics.areEqual(this.f30640a, bVar.f30640a) && this.f30641b == bVar.f30641b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f30640a.hashCode() * 31) + Boolean.hashCode(this.f30641b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f30638g;
    }

    public final long b() {
        return this.f30637f;
    }

    public final Set c() {
        return this.f30639h;
    }

    public final n d() {
        return this.f30632a;
    }

    public final boolean e() {
        if (!this.f30639h.isEmpty()) {
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
        if (this.f30633b != dVar.f30633b || this.f30634c != dVar.f30634c || this.f30635d != dVar.f30635d || this.f30636e != dVar.f30636e || this.f30637f != dVar.f30637f || this.f30638g != dVar.f30638g || this.f30632a != dVar.f30632a) {
            return false;
        }
        return Intrinsics.areEqual(this.f30639h, dVar.f30639h);
    }

    public final boolean f() {
        return this.f30635d;
    }

    public final boolean g() {
        return this.f30633b;
    }

    public final boolean h() {
        return this.f30634c;
    }

    public int hashCode() {
        long j10 = this.f30637f;
        long j11 = this.f30638g;
        return (((((((((((((this.f30632a.hashCode() * 31) + (this.f30633b ? 1 : 0)) * 31) + (this.f30634c ? 1 : 0)) * 31) + (this.f30635d ? 1 : 0)) * 31) + (this.f30636e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f30639h.hashCode();
    }

    public final boolean i() {
        return this.f30636e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f30632a + ", requiresCharging=" + this.f30633b + ", requiresDeviceIdle=" + this.f30634c + ", requiresBatteryNotLow=" + this.f30635d + ", requiresStorageNotLow=" + this.f30636e + ", contentTriggerUpdateDelayMillis=" + this.f30637f + ", contentTriggerMaxDelayMillis=" + this.f30638g + ", contentUriTriggers=" + this.f30639h + ", }";
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
        this.f30632a = requiredNetworkType;
        this.f30633b = z10;
        this.f30634c = z11;
        this.f30635d = z12;
        this.f30636e = z13;
        this.f30637f = j10;
        this.f30638g = j11;
        this.f30639h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f30633b = other.f30633b;
        this.f30634c = other.f30634c;
        this.f30632a = other.f30632a;
        this.f30635d = other.f30635d;
        this.f30636e = other.f30636e;
        this.f30639h = other.f30639h;
        this.f30637f = other.f30637f;
        this.f30638g = other.f30638g;
    }
}
