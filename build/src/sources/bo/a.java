package bo;

import android.os.Parcel;
import android.os.Parcelable;
import ao.c4;
import ao.f5;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f7548d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f7549e;

    /* renamed from: i  reason: collision with root package name */
    private final c4.c f7550i;

    /* renamed from: o  reason: collision with root package name */
    public static final C0117a f7547o = new C0117a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: bo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0117a {
        public /* synthetic */ C0117a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final c4.c a() {
            return new c4.c("unknown", c4.e.f5836o, f5.d.b.f5985d, new c4.a(null, 1, null), new c4.d(true, 0L));
        }

        public final a b(Boolean bool, Boolean bool2, c4.c cVar) {
            boolean z10;
            boolean z11;
            if (bool != null) {
                z10 = bool.booleanValue();
            } else {
                z10 = false;
            }
            if (bool2 != null) {
                z11 = bool2.booleanValue();
            } else {
                z11 = true;
            }
            if (cVar == null) {
                cVar = a();
            }
            return new a(z10, z11, cVar);
        }

        private C0117a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final a createFromParcel(Parcel parcel) {
            boolean z10;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            boolean z11 = false;
            if (parcel.readInt() != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (parcel.readInt() != 0) {
                z11 = true;
            }
            return new a(z10, z11, c4.c.CREATOR.createFromParcel(parcel));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final a[] newArray(int i10) {
            return new a[i10];
        }
    }

    public a(boolean z10, boolean z11, c4.c idSideConfig) {
        Intrinsics.checkNotNullParameter(idSideConfig, "idSideConfig");
        this.f7548d = z10;
        this.f7549e = z11;
        this.f7550i = idSideConfig;
    }

    public final boolean a() {
        return this.f7549e;
    }

    public final c4.c b() {
        return this.f7550i;
    }

    public final boolean c() {
        return this.f7548d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f7548d ? 1 : 0);
        dest.writeInt(this.f7549e ? 1 : 0);
        this.f7550i.writeToParcel(dest, i10);
    }
}
