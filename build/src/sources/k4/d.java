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
    public static final a f31414i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f31415j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f31416a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31417b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31418c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31419d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31420e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31421f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31422g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f31423h;

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
        private final Uri f31424a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31425b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f31424a = uri;
            this.f31425b = z10;
        }

        public final Uri a() {
            return this.f31424a;
        }

        public final boolean b() {
            return this.f31425b;
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
            if (Intrinsics.areEqual(this.f31424a, bVar.f31424a) && this.f31425b == bVar.f31425b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31424a.hashCode() * 31) + Boolean.hashCode(this.f31425b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f31422g;
    }

    public final long b() {
        return this.f31421f;
    }

    public final Set c() {
        return this.f31423h;
    }

    public final n d() {
        return this.f31416a;
    }

    public final boolean e() {
        if (!this.f31423h.isEmpty()) {
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
        if (this.f31417b != dVar.f31417b || this.f31418c != dVar.f31418c || this.f31419d != dVar.f31419d || this.f31420e != dVar.f31420e || this.f31421f != dVar.f31421f || this.f31422g != dVar.f31422g || this.f31416a != dVar.f31416a) {
            return false;
        }
        return Intrinsics.areEqual(this.f31423h, dVar.f31423h);
    }

    public final boolean f() {
        return this.f31419d;
    }

    public final boolean g() {
        return this.f31417b;
    }

    public final boolean h() {
        return this.f31418c;
    }

    public int hashCode() {
        long j10 = this.f31421f;
        long j11 = this.f31422g;
        return (((((((((((((this.f31416a.hashCode() * 31) + (this.f31417b ? 1 : 0)) * 31) + (this.f31418c ? 1 : 0)) * 31) + (this.f31419d ? 1 : 0)) * 31) + (this.f31420e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f31423h.hashCode();
    }

    public final boolean i() {
        return this.f31420e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f31416a + ", requiresCharging=" + this.f31417b + ", requiresDeviceIdle=" + this.f31418c + ", requiresBatteryNotLow=" + this.f31419d + ", requiresStorageNotLow=" + this.f31420e + ", contentTriggerUpdateDelayMillis=" + this.f31421f + ", contentTriggerMaxDelayMillis=" + this.f31422g + ", contentUriTriggers=" + this.f31423h + ", }";
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
        this.f31416a = requiredNetworkType;
        this.f31417b = z10;
        this.f31418c = z11;
        this.f31419d = z12;
        this.f31420e = z13;
        this.f31421f = j10;
        this.f31422g = j11;
        this.f31423h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f31417b = other.f31417b;
        this.f31418c = other.f31418c;
        this.f31416a = other.f31416a;
        this.f31419d = other.f31419d;
        this.f31420e = other.f31420e;
        this.f31423h = other.f31423h;
        this.f31421f = other.f31421f;
        this.f31422g = other.f31422g;
    }
}
