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
    public static final a f31462i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f31463j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f31464a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31465b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31466c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31467d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31468e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31469f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31470g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f31471h;

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
        private final Uri f31472a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31473b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f31472a = uri;
            this.f31473b = z10;
        }

        public final Uri a() {
            return this.f31472a;
        }

        public final boolean b() {
            return this.f31473b;
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
            if (Intrinsics.areEqual(this.f31472a, bVar.f31472a) && this.f31473b == bVar.f31473b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31472a.hashCode() * 31) + Boolean.hashCode(this.f31473b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f31470g;
    }

    public final long b() {
        return this.f31469f;
    }

    public final Set c() {
        return this.f31471h;
    }

    public final n d() {
        return this.f31464a;
    }

    public final boolean e() {
        if (!this.f31471h.isEmpty()) {
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
        if (this.f31465b != dVar.f31465b || this.f31466c != dVar.f31466c || this.f31467d != dVar.f31467d || this.f31468e != dVar.f31468e || this.f31469f != dVar.f31469f || this.f31470g != dVar.f31470g || this.f31464a != dVar.f31464a) {
            return false;
        }
        return Intrinsics.areEqual(this.f31471h, dVar.f31471h);
    }

    public final boolean f() {
        return this.f31467d;
    }

    public final boolean g() {
        return this.f31465b;
    }

    public final boolean h() {
        return this.f31466c;
    }

    public int hashCode() {
        long j10 = this.f31469f;
        long j11 = this.f31470g;
        return (((((((((((((this.f31464a.hashCode() * 31) + (this.f31465b ? 1 : 0)) * 31) + (this.f31466c ? 1 : 0)) * 31) + (this.f31467d ? 1 : 0)) * 31) + (this.f31468e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f31471h.hashCode();
    }

    public final boolean i() {
        return this.f31468e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f31464a + ", requiresCharging=" + this.f31465b + ", requiresDeviceIdle=" + this.f31466c + ", requiresBatteryNotLow=" + this.f31467d + ", requiresStorageNotLow=" + this.f31468e + ", contentTriggerUpdateDelayMillis=" + this.f31469f + ", contentTriggerMaxDelayMillis=" + this.f31470g + ", contentUriTriggers=" + this.f31471h + ", }";
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
        this.f31464a = requiredNetworkType;
        this.f31465b = z10;
        this.f31466c = z11;
        this.f31467d = z12;
        this.f31468e = z13;
        this.f31469f = j10;
        this.f31470g = j11;
        this.f31471h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f31465b = other.f31465b;
        this.f31466c = other.f31466c;
        this.f31464a = other.f31464a;
        this.f31467d = other.f31467d;
        this.f31468e = other.f31468e;
        this.f31471h = other.f31471h;
        this.f31469f = other.f31469f;
        this.f31470g = other.f31470g;
    }
}
