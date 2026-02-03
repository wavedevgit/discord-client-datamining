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
    public static final a f32107i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f32108j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f32109a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32110b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32111c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32112d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32113e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32114f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32115g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f32116h;

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
        private final Uri f32117a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32118b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f32117a = uri;
            this.f32118b = z10;
        }

        public final Uri a() {
            return this.f32117a;
        }

        public final boolean b() {
            return this.f32118b;
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
            if (Intrinsics.areEqual(this.f32117a, bVar.f32117a) && this.f32118b == bVar.f32118b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f32117a.hashCode() * 31) + Boolean.hashCode(this.f32118b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f32115g;
    }

    public final long b() {
        return this.f32114f;
    }

    public final Set c() {
        return this.f32116h;
    }

    public final n d() {
        return this.f32109a;
    }

    public final boolean e() {
        if (!this.f32116h.isEmpty()) {
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
        if (this.f32110b != dVar.f32110b || this.f32111c != dVar.f32111c || this.f32112d != dVar.f32112d || this.f32113e != dVar.f32113e || this.f32114f != dVar.f32114f || this.f32115g != dVar.f32115g || this.f32109a != dVar.f32109a) {
            return false;
        }
        return Intrinsics.areEqual(this.f32116h, dVar.f32116h);
    }

    public final boolean f() {
        return this.f32112d;
    }

    public final boolean g() {
        return this.f32110b;
    }

    public final boolean h() {
        return this.f32111c;
    }

    public int hashCode() {
        long j10 = this.f32114f;
        long j11 = this.f32115g;
        return (((((((((((((this.f32109a.hashCode() * 31) + (this.f32110b ? 1 : 0)) * 31) + (this.f32111c ? 1 : 0)) * 31) + (this.f32112d ? 1 : 0)) * 31) + (this.f32113e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f32116h.hashCode();
    }

    public final boolean i() {
        return this.f32113e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f32109a + ", requiresCharging=" + this.f32110b + ", requiresDeviceIdle=" + this.f32111c + ", requiresBatteryNotLow=" + this.f32112d + ", requiresStorageNotLow=" + this.f32113e + ", contentTriggerUpdateDelayMillis=" + this.f32114f + ", contentTriggerMaxDelayMillis=" + this.f32115g + ", contentUriTriggers=" + this.f32116h + ", }";
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
        this.f32109a = requiredNetworkType;
        this.f32110b = z10;
        this.f32111c = z11;
        this.f32112d = z12;
        this.f32113e = z13;
        this.f32114f = j10;
        this.f32115g = j11;
        this.f32116h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f32110b = other.f32110b;
        this.f32111c = other.f32111c;
        this.f32109a = other.f32109a;
        this.f32112d = other.f32112d;
        this.f32113e = other.f32113e;
        this.f32116h = other.f32116h;
        this.f32114f = other.f32114f;
        this.f32115g = other.f32115g;
    }
}
