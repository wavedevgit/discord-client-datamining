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
    public static final a f32947i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f32948j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f32949a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32950b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32951c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32952d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32953e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32954f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32955g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f32956h;

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
        private final Uri f32957a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32958b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f32957a = uri;
            this.f32958b = z10;
        }

        public final Uri a() {
            return this.f32957a;
        }

        public final boolean b() {
            return this.f32958b;
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
            if (Intrinsics.areEqual(this.f32957a, bVar.f32957a) && this.f32958b == bVar.f32958b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f32957a.hashCode() * 31) + Boolean.hashCode(this.f32958b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f32955g;
    }

    public final long b() {
        return this.f32954f;
    }

    public final Set c() {
        return this.f32956h;
    }

    public final n d() {
        return this.f32949a;
    }

    public final boolean e() {
        if (!this.f32956h.isEmpty()) {
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
        if (this.f32950b != dVar.f32950b || this.f32951c != dVar.f32951c || this.f32952d != dVar.f32952d || this.f32953e != dVar.f32953e || this.f32954f != dVar.f32954f || this.f32955g != dVar.f32955g || this.f32949a != dVar.f32949a) {
            return false;
        }
        return Intrinsics.areEqual(this.f32956h, dVar.f32956h);
    }

    public final boolean f() {
        return this.f32952d;
    }

    public final boolean g() {
        return this.f32950b;
    }

    public final boolean h() {
        return this.f32951c;
    }

    public int hashCode() {
        long j10 = this.f32954f;
        long j11 = this.f32955g;
        return (((((((((((((this.f32949a.hashCode() * 31) + (this.f32950b ? 1 : 0)) * 31) + (this.f32951c ? 1 : 0)) * 31) + (this.f32952d ? 1 : 0)) * 31) + (this.f32953e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f32956h.hashCode();
    }

    public final boolean i() {
        return this.f32953e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f32949a + ", requiresCharging=" + this.f32950b + ", requiresDeviceIdle=" + this.f32951c + ", requiresBatteryNotLow=" + this.f32952d + ", requiresStorageNotLow=" + this.f32953e + ", contentTriggerUpdateDelayMillis=" + this.f32954f + ", contentTriggerMaxDelayMillis=" + this.f32955g + ", contentUriTriggers=" + this.f32956h + ", }";
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
        this.f32949a = requiredNetworkType;
        this.f32950b = z10;
        this.f32951c = z11;
        this.f32952d = z12;
        this.f32953e = z13;
        this.f32954f = j10;
        this.f32955g = j11;
        this.f32956h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f32950b = other.f32950b;
        this.f32951c = other.f32951c;
        this.f32949a = other.f32949a;
        this.f32952d = other.f32952d;
        this.f32953e = other.f32953e;
        this.f32956h = other.f32956h;
        this.f32954f = other.f32954f;
        this.f32955g = other.f32955g;
    }
}
