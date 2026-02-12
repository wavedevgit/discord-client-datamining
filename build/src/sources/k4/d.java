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
    public static final a f31489i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f31490j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f31491a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31492b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31493c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31494d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31495e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31496f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31497g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f31498h;

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
        private final Uri f31499a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31500b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f31499a = uri;
            this.f31500b = z10;
        }

        public final Uri a() {
            return this.f31499a;
        }

        public final boolean b() {
            return this.f31500b;
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
            if (Intrinsics.areEqual(this.f31499a, bVar.f31499a) && this.f31500b == bVar.f31500b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31499a.hashCode() * 31) + Boolean.hashCode(this.f31500b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f31497g;
    }

    public final long b() {
        return this.f31496f;
    }

    public final Set c() {
        return this.f31498h;
    }

    public final n d() {
        return this.f31491a;
    }

    public final boolean e() {
        if (!this.f31498h.isEmpty()) {
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
        if (this.f31492b != dVar.f31492b || this.f31493c != dVar.f31493c || this.f31494d != dVar.f31494d || this.f31495e != dVar.f31495e || this.f31496f != dVar.f31496f || this.f31497g != dVar.f31497g || this.f31491a != dVar.f31491a) {
            return false;
        }
        return Intrinsics.areEqual(this.f31498h, dVar.f31498h);
    }

    public final boolean f() {
        return this.f31494d;
    }

    public final boolean g() {
        return this.f31492b;
    }

    public final boolean h() {
        return this.f31493c;
    }

    public int hashCode() {
        long j10 = this.f31496f;
        long j11 = this.f31497g;
        return (((((((((((((this.f31491a.hashCode() * 31) + (this.f31492b ? 1 : 0)) * 31) + (this.f31493c ? 1 : 0)) * 31) + (this.f31494d ? 1 : 0)) * 31) + (this.f31495e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f31498h.hashCode();
    }

    public final boolean i() {
        return this.f31495e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f31491a + ", requiresCharging=" + this.f31492b + ", requiresDeviceIdle=" + this.f31493c + ", requiresBatteryNotLow=" + this.f31494d + ", requiresStorageNotLow=" + this.f31495e + ", contentTriggerUpdateDelayMillis=" + this.f31496f + ", contentTriggerMaxDelayMillis=" + this.f31497g + ", contentUriTriggers=" + this.f31498h + ", }";
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
        this.f31491a = requiredNetworkType;
        this.f31492b = z10;
        this.f31493c = z11;
        this.f31494d = z12;
        this.f31495e = z13;
        this.f31496f = j10;
        this.f31497g = j11;
        this.f31498h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f31492b = other.f31492b;
        this.f31493c = other.f31493c;
        this.f31491a = other.f31491a;
        this.f31494d = other.f31494d;
        this.f31495e = other.f31495e;
        this.f31498h = other.f31498h;
        this.f31496f = other.f31496f;
        this.f31497g = other.f31497g;
    }
}
