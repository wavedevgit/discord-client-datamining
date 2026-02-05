package com.withpersona.sdk2.inquiry.internal;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.internal.x;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import so.b2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends w {
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final x.c f19389d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new b(x.c.CREATOR.createFromParcel(parcel));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(x.c transitionData) {
            super(null);
            Intrinsics.checkNotNullParameter(transitionData, "transitionData");
            this.f19389d = transitionData;
        }

        public final x.c a() {
            return this.f19389d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof b) && Intrinsics.areEqual(this.f19389d, ((b) obj).f19389d);
        }

        public int hashCode() {
            return this.f19389d.hashCode();
        }

        public String toString() {
            x.c cVar = this.f19389d;
            return "Transitioning(transitionData=" + cVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            this.f19389d.writeToParcel(dest, i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends w {

        /* renamed from: d  reason: collision with root package name */
        public static final c f19390d = new c();
        @NotNull
        public static final Parcelable.Creator<c> CREATOR = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final c createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                parcel.readInt();
                return c.f19390d;
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final c[] newArray(int i10) {
                return new c[i10];
            }
        }

        private c() {
            super(null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof c);
        }

        public int hashCode() {
            return -593165066;
        }

        public String toString() {
            return "TransitioningBack";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(1);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends w {
        @NotNull
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final l f19391d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final d createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new d((l) parcel.readParcelable(d.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public d(l lVar) {
            super(null);
            this.f19391d = lVar;
        }

        public final l a() {
            return this.f19391d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof d) && Intrinsics.areEqual(this.f19391d, ((d) obj).f19391d);
        }

        public int hashCode() {
            l lVar = this.f19391d;
            if (lVar == null) {
                return 0;
            }
            return lVar.hashCode();
        }

        public String toString() {
            l lVar = this.f19391d;
            return "UpdateInquirySession(nextStep=" + lVar + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.f19391d, i10);
        }
    }

    public /* synthetic */ w(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends w {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new C0258a();

        /* renamed from: d  reason: collision with root package name */
        private final b2 f19388d;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0258a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new a(b2.valueOf(parcel.readString()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        public /* synthetic */ a(b2 b2Var, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? b2.f50036e : b2Var);
        }

        public final b2 a() {
            return this.f19388d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof a) && this.f19388d == ((a) obj).f19388d;
        }

        public int hashCode() {
            return this.f19388d.hashCode();
        }

        public String toString() {
            b2 b2Var = this.f19388d;
            return "CheckingForNextState(pollingMode=" + b2Var + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f19388d.name());
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(b2 pollingMode) {
            super(null);
            Intrinsics.checkNotNullParameter(pollingMode, "pollingMode");
            this.f19388d = pollingMode;
        }
    }

    private w() {
    }
}
