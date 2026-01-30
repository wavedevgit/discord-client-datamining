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
    public static final a f32963i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f32964j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f32965a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32966b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32967c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32968d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32969e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32970f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32971g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f32972h;

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
        private final Uri f32973a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32974b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f32973a = uri;
            this.f32974b = z10;
        }

        public final Uri a() {
            return this.f32973a;
        }

        public final boolean b() {
            return this.f32974b;
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
            if (Intrinsics.areEqual(this.f32973a, bVar.f32973a) && this.f32974b == bVar.f32974b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f32973a.hashCode() * 31) + Boolean.hashCode(this.f32974b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f32971g;
    }

    public final long b() {
        return this.f32970f;
    }

    public final Set c() {
        return this.f32972h;
    }

    public final n d() {
        return this.f32965a;
    }

    public final boolean e() {
        if (!this.f32972h.isEmpty()) {
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
        if (this.f32966b != dVar.f32966b || this.f32967c != dVar.f32967c || this.f32968d != dVar.f32968d || this.f32969e != dVar.f32969e || this.f32970f != dVar.f32970f || this.f32971g != dVar.f32971g || this.f32965a != dVar.f32965a) {
            return false;
        }
        return Intrinsics.areEqual(this.f32972h, dVar.f32972h);
    }

    public final boolean f() {
        return this.f32968d;
    }

    public final boolean g() {
        return this.f32966b;
    }

    public final boolean h() {
        return this.f32967c;
    }

    public int hashCode() {
        long j10 = this.f32970f;
        long j11 = this.f32971g;
        return (((((((((((((this.f32965a.hashCode() * 31) + (this.f32966b ? 1 : 0)) * 31) + (this.f32967c ? 1 : 0)) * 31) + (this.f32968d ? 1 : 0)) * 31) + (this.f32969e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f32972h.hashCode();
    }

    public final boolean i() {
        return this.f32969e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f32965a + ", requiresCharging=" + this.f32966b + ", requiresDeviceIdle=" + this.f32967c + ", requiresBatteryNotLow=" + this.f32968d + ", requiresStorageNotLow=" + this.f32969e + ", contentTriggerUpdateDelayMillis=" + this.f32970f + ", contentTriggerMaxDelayMillis=" + this.f32971g + ", contentUriTriggers=" + this.f32972h + ", }";
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
        this.f32965a = requiredNetworkType;
        this.f32966b = z10;
        this.f32967c = z11;
        this.f32968d = z12;
        this.f32969e = z13;
        this.f32970f = j10;
        this.f32971g = j11;
        this.f32972h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f32966b = other.f32966b;
        this.f32967c = other.f32967c;
        this.f32965a = other.f32965a;
        this.f32968d = other.f32968d;
        this.f32969e = other.f32969e;
        this.f32972h = other.f32972h;
        this.f32970f = other.f32970f;
        this.f32971g = other.f32971g;
    }
}
