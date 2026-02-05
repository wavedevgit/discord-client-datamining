package com.withpersona.sdk2.inquiry.governmentid.network;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface AutoClassifyResponse extends Parcelable {

    /* renamed from: b  reason: collision with root package name */
    public static final a f18622b = a.f18631a;

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002¢\u0006\u0004\b\u0005\u0010\u0006J\u001d\u0010\f\u001a\u00020\u000b2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\f\u0010\rJ\r\u0010\u000e\u001a\u00020\t¢\u0006\u0004\b\u000e\u0010\u000fR\u001d\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u001a\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$ClassificationFailedResponse;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse;", "", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "idClassesByCountries", "<init>", "(Ljava/util/List;)V", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "d", "Ljava/util/List;", "a", "()Ljava/util/List;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ClassificationFailedResponse implements AutoClassifyResponse {
        @NotNull
        public static final Parcelable.Creator<ClassificationFailedResponse> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f18623d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final ClassificationFailedResponse createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(IdClassesForCountry.CREATOR.createFromParcel(parcel));
                }
                return new ClassificationFailedResponse(arrayList);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final ClassificationFailedResponse[] newArray(int i10) {
                return new ClassificationFailedResponse[i10];
            }
        }

        public ClassificationFailedResponse(List idClassesByCountries) {
            Intrinsics.checkNotNullParameter(idClassesByCountries, "idClassesByCountries");
            this.f18623d = idClassesByCountries;
        }

        public final List a() {
            return this.f18623d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<IdClassesForCountry> list = this.f18623d;
            dest.writeInt(list.size());
            for (IdClassesForCountry idClassesForCountry : list) {
                idClassesForCountry.writeToParcel(dest, i10);
            }
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u001d\u0010\u000e\u001a\u00020\r2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\u000e\u0010\u000fJ\r\u0010\u0010\u001a\u00020\u000b¢\u0006\u0004\b\u0010\u0010\u0011R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0014\u0010\u0015R\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0016\u0010\u0013\u001a\u0004\b\u0017\u0010\u0015R\u0017\u0010\u0006\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b\u0018\u0010\u0019\u001a\u0004\b\u001a\u0010\u001b¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdAcceptedResponse;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse;", "", "countryCode", "idClass", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "idConfig", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;)V", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "d", "Ljava/lang/String;", "a", "()Ljava/lang/String;", "e", "b", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "c", "()Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IdAcceptedResponse implements AutoClassifyResponse {
        @NotNull
        public static final Parcelable.Creator<IdAcceptedResponse> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f18624d;

        /* renamed from: e  reason: collision with root package name */
        private final String f18625e;

        /* renamed from: i  reason: collision with root package name */
        private final Id f18626i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final IdAcceptedResponse createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new IdAcceptedResponse(parcel.readString(), parcel.readString(), (Id) parcel.readParcelable(IdAcceptedResponse.class.getClassLoader()));
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final IdAcceptedResponse[] newArray(int i10) {
                return new IdAcceptedResponse[i10];
            }
        }

        public IdAcceptedResponse(String countryCode, String idClass, Id idConfig) {
            Intrinsics.checkNotNullParameter(countryCode, "countryCode");
            Intrinsics.checkNotNullParameter(idClass, "idClass");
            Intrinsics.checkNotNullParameter(idConfig, "idConfig");
            this.f18624d = countryCode;
            this.f18625e = idClass;
            this.f18626i = idConfig;
        }

        public final String a() {
            return this.f18624d;
        }

        public final String b() {
            return this.f18625e;
        }

        public final Id c() {
            return this.f18626i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f18624d);
            dest.writeString(this.f18625e);
            dest.writeParcelable(this.f18626i, i10);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u000f\b\u0007\u0018\u00002\u00020\u0001B%\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0004\b\b\u0010\tJ\u001d\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000f\u0010\u0010J\r\u0010\u0011\u001a\u00020\f¢\u0006\u0004\b\u0011\u0010\u0012R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0015\u0010\u0016R\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0017\u0010\u0014\u001a\u0004\b\u0018\u0010\u0016R\u001d\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u00058\u0006¢\u0006\f\n\u0004\b\u0019\u0010\u001a\u001a\u0004\b\u001b\u0010\u001c¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "Landroid/os/Parcelable;", "", "countryName", "countryCode", "", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "idConfigs", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "d", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "e", "a", "i", "Ljava/util/List;", "c", "()Ljava/util/List;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IdClassesForCountry implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<IdClassesForCountry> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f18627d;

        /* renamed from: e  reason: collision with root package name */
        private final String f18628e;

        /* renamed from: i  reason: collision with root package name */
        private final List f18629i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final IdClassesForCountry createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(parcel.readParcelable(IdClassesForCountry.class.getClassLoader()));
                }
                return new IdClassesForCountry(readString, readString2, arrayList);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final IdClassesForCountry[] newArray(int i10) {
                return new IdClassesForCountry[i10];
            }
        }

        public IdClassesForCountry(String countryName, String countryCode, List idConfigs) {
            Intrinsics.checkNotNullParameter(countryName, "countryName");
            Intrinsics.checkNotNullParameter(countryCode, "countryCode");
            Intrinsics.checkNotNullParameter(idConfigs, "idConfigs");
            this.f18627d = countryName;
            this.f18628e = countryCode;
            this.f18629i = idConfigs;
        }

        public final String a() {
            return this.f18628e;
        }

        public final String b() {
            return this.f18627d;
        }

        public final List c() {
            return this.f18629i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.f18627d);
            dest.writeString(this.f18628e);
            List<Parcelable> list = this.f18629i;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0002¢\u0006\u0004\b\u0005\u0010\u0006J\u001d\u0010\f\u001a\u00020\u000b2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\f\u0010\rJ\r\u0010\u000e\u001a\u00020\t¢\u0006\u0004\b\u000e\u0010\u000fR\u001d\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00028\u0006¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u001a\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdRejectedResponse;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse;", "", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "idClassesByCountries", "<init>", "(Ljava/util/List;)V", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "d", "Ljava/util/List;", "a", "()Ljava/util/List;", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IdRejectedResponse implements AutoClassifyResponse {
        @NotNull
        public static final Parcelable.Creator<IdRejectedResponse> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final List f18630d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final IdRejectedResponse createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(IdClassesForCountry.CREATOR.createFromParcel(parcel));
                }
                return new IdRejectedResponse(arrayList);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final IdRejectedResponse[] newArray(int i10) {
                return new IdRejectedResponse[i10];
            }
        }

        public IdRejectedResponse(List idClassesByCountries) {
            Intrinsics.checkNotNullParameter(idClassesByCountries, "idClassesByCountries");
            this.f18630d = idClassesByCountries;
        }

        public final List a() {
            return this.f18630d;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<IdClassesForCountry> list = this.f18630d;
            dest.writeInt(list.size());
            for (IdClassesForCountry idClassesForCountry : list) {
                idClassesForCountry.writeToParcel(dest, i10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f18631a = new a();

        private a() {
        }

        public final h.e a() {
            xm.b e10 = xm.b.b(AutoClassifyResponse.class, "responseType").c(b.f18632d).e(IdAcceptedResponse.class, "id_accepted").e(ClassificationFailedResponse.class, "classification_failed").e(IdRejectedResponse.class, "id_rejected");
            Intrinsics.checkNotNullExpressionValue(e10, "withSubtype(...)");
            return e10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements AutoClassifyResponse {

        /* renamed from: d  reason: collision with root package name */
        public static final b f18632d = new b();
        @NotNull
        public static final Parcelable.Creator<b> CREATOR = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                parcel.readInt();
                return b.f18632d;
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final b[] newArray(int i10) {
                return new b[i10];
            }
        }

        private b() {
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof b);
        }

        public int hashCode() {
            return -402570646;
        }

        public String toString() {
            return "Unknown";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeInt(1);
        }
    }
}
