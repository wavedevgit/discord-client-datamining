package ko;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface q extends Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements q {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0479a();

        /* renamed from: d  reason: collision with root package name */
        private final lo.a f31634d;

        /* renamed from: ko.q$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0479a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(lo.a.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public a(lo.a config) {
            Intrinsics.checkNotNullParameter(config, "config");
            this.f31634d = config;
        }

        public final lo.a a() {
            return this.f31634d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f31634d, ((a) obj).f31634d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f31634d.hashCode();
        }

        public String toString() {
            lo.a aVar = this.f31634d;
            return "AutoClassifyConfig(config=" + aVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31634d.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements q {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final c4 f31635d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new b(c4.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        public b(c4 id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f31635d = id2;
        }

        public final c4 a() {
            return this.f31635d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f31635d, ((b) obj).f31635d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f31635d.hashCode();
        }

        public String toString() {
            c4 c4Var = this.f31635d;
            return "IdCaptureConfig(id=" + c4Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f31635d.writeToParcel(dest, i10);
        }
    }
}
