package eo;

import android.os.Parcel;
import android.os.Parcelable;
import eo.c4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h4 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends h4 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0295a();

        /* renamed from: d  reason: collision with root package name */
        private final c4.e f22009d;

        /* renamed from: eo.h4$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0295a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(c4.e.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(c4.e side) {
            super(null);
            Intrinsics.checkNotNullParameter(side, "side");
            this.f22009d = side;
        }

        public final c4.e a() {
            return this.f22009d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f22009d == ((a) obj).f22009d) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f22009d.hashCode();
        }

        public String toString() {
            c4.e eVar = this.f22009d;
            return "SideIdPart(side=" + eVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f22009d.name());
        }
    }

    public /* synthetic */ h4(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private h4() {
    }
}
