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
    public static final a f32709i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f32710j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f32711a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32712b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32713c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32714d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32715e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32716f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32717g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f32718h;

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
        private final Uri f32719a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32720b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f32719a = uri;
            this.f32720b = z10;
        }

        public final Uri a() {
            return this.f32719a;
        }

        public final boolean b() {
            return this.f32720b;
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
            if (Intrinsics.areEqual(this.f32719a, bVar.f32719a) && this.f32720b == bVar.f32720b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f32719a.hashCode() * 31) + Boolean.hashCode(this.f32720b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f32717g;
    }

    public final long b() {
        return this.f32716f;
    }

    public final Set c() {
        return this.f32718h;
    }

    public final n d() {
        return this.f32711a;
    }

    public final boolean e() {
        if (!this.f32718h.isEmpty()) {
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
        if (this.f32712b != dVar.f32712b || this.f32713c != dVar.f32713c || this.f32714d != dVar.f32714d || this.f32715e != dVar.f32715e || this.f32716f != dVar.f32716f || this.f32717g != dVar.f32717g || this.f32711a != dVar.f32711a) {
            return false;
        }
        return Intrinsics.areEqual(this.f32718h, dVar.f32718h);
    }

    public final boolean f() {
        return this.f32714d;
    }

    public final boolean g() {
        return this.f32712b;
    }

    public final boolean h() {
        return this.f32713c;
    }

    public int hashCode() {
        long j10 = this.f32716f;
        long j11 = this.f32717g;
        return (((((((((((((this.f32711a.hashCode() * 31) + (this.f32712b ? 1 : 0)) * 31) + (this.f32713c ? 1 : 0)) * 31) + (this.f32714d ? 1 : 0)) * 31) + (this.f32715e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f32718h.hashCode();
    }

    public final boolean i() {
        return this.f32715e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f32711a + ", requiresCharging=" + this.f32712b + ", requiresDeviceIdle=" + this.f32713c + ", requiresBatteryNotLow=" + this.f32714d + ", requiresStorageNotLow=" + this.f32715e + ", contentTriggerUpdateDelayMillis=" + this.f32716f + ", contentTriggerMaxDelayMillis=" + this.f32717g + ", contentUriTriggers=" + this.f32718h + ", }";
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
        this.f32711a = requiredNetworkType;
        this.f32712b = z10;
        this.f32713c = z11;
        this.f32714d = z12;
        this.f32715e = z13;
        this.f32716f = j10;
        this.f32717g = j11;
        this.f32718h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f32712b = other.f32712b;
        this.f32713c = other.f32713c;
        this.f32711a = other.f32711a;
        this.f32714d = other.f32714d;
        this.f32715e = other.f32715e;
        this.f32718h = other.f32718h;
        this.f32716f = other.f32716f;
        this.f32717g = other.f32717g;
    }
}
