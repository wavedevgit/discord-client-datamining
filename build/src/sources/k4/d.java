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
    public static final a f31488i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    public static final d f31489j = new d(null, false, false, false, 15, null);

    /* renamed from: a  reason: collision with root package name */
    private final n f31490a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31491b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f31492c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31493d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31494e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31495f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31496g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f31497h;

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
        private final Uri f31498a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f31499b;

        public b(Uri uri, boolean z10) {
            Intrinsics.checkNotNullParameter(uri, "uri");
            this.f31498a = uri;
            this.f31499b = z10;
        }

        public final Uri a() {
            return this.f31498a;
        }

        public final boolean b() {
            return this.f31499b;
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
            if (Intrinsics.areEqual(this.f31498a, bVar.f31498a) && this.f31499b == bVar.f31499b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31498a.hashCode() * 31) + Boolean.hashCode(this.f31499b);
        }
    }

    public /* synthetic */ d(n nVar, boolean z10, boolean z11, boolean z12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? n.NOT_REQUIRED : nVar, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? false : z11, (i10 & 8) != 0 ? false : z12);
    }

    public final long a() {
        return this.f31496g;
    }

    public final long b() {
        return this.f31495f;
    }

    public final Set c() {
        return this.f31497h;
    }

    public final n d() {
        return this.f31490a;
    }

    public final boolean e() {
        if (!this.f31497h.isEmpty()) {
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
        if (this.f31491b != dVar.f31491b || this.f31492c != dVar.f31492c || this.f31493d != dVar.f31493d || this.f31494e != dVar.f31494e || this.f31495f != dVar.f31495f || this.f31496g != dVar.f31496g || this.f31490a != dVar.f31490a) {
            return false;
        }
        return Intrinsics.areEqual(this.f31497h, dVar.f31497h);
    }

    public final boolean f() {
        return this.f31493d;
    }

    public final boolean g() {
        return this.f31491b;
    }

    public final boolean h() {
        return this.f31492c;
    }

    public int hashCode() {
        long j10 = this.f31495f;
        long j11 = this.f31496g;
        return (((((((((((((this.f31490a.hashCode() * 31) + (this.f31491b ? 1 : 0)) * 31) + (this.f31492c ? 1 : 0)) * 31) + (this.f31493d ? 1 : 0)) * 31) + (this.f31494e ? 1 : 0)) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + this.f31497h.hashCode();
    }

    public final boolean i() {
        return this.f31494e;
    }

    public String toString() {
        return "Constraints{requiredNetworkType=" + this.f31490a + ", requiresCharging=" + this.f31491b + ", requiresDeviceIdle=" + this.f31492c + ", requiresBatteryNotLow=" + this.f31493d + ", requiresStorageNotLow=" + this.f31494e + ", contentTriggerUpdateDelayMillis=" + this.f31495f + ", contentTriggerMaxDelayMillis=" + this.f31496g + ", contentUriTriggers=" + this.f31497h + ", }";
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
        this.f31490a = requiredNetworkType;
        this.f31491b = z10;
        this.f31492c = z11;
        this.f31493d = z12;
        this.f31494e = z13;
        this.f31495f = j10;
        this.f31496g = j11;
        this.f31497h = contentUriTriggers;
    }

    public d(d other) {
        Intrinsics.checkNotNullParameter(other, "other");
        this.f31491b = other.f31491b;
        this.f31492c = other.f31492c;
        this.f31490a = other.f31490a;
        this.f31493d = other.f31493d;
        this.f31494e = other.f31494e;
        this.f31497h = other.f31497h;
        this.f31495f = other.f31495f;
        this.f31496g = other.f31496g;
    }
}
