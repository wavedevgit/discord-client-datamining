package com.withpersona.sdk2.inquiry.network.core.dto;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.f;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import ir.p;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class UiComponentError implements Parcelable {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion extends h {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final String getJsonType(m mVar) {
            m F = mVar.F();
            F.r();
            while (F.hasNext()) {
                if (Intrinsics.areEqual(F.l0(), "type")) {
                    return F.e1();
                }
                F.P();
            }
            return null;
        }

        private Companion() {
        }

        @Override // com.squareup.moshi.h
        @f
        public UiComponentError fromJson(@NotNull m mVar) {
            w d10 = new w.b().d();
            String jsonType = getJsonType(mVar);
            if (jsonType == null) {
                return null;
            }
            int hashCode = jsonType.hashCode();
            if (hashCode != -816959144) {
                if (hashCode != -212588636) {
                    if (hashCode == 1658531967 && jsonType.equals(InputAddress.type)) {
                        return (UiComponentError) d10.c(UiInputAddressComponentError.class).fromJson(mVar);
                    }
                } else if (jsonType.equals(InputInternationalDb.type)) {
                    return (UiComponentError) d10.c(UiInputInternationalDbComponentError.class).fromJson(mVar);
                }
            } else if (jsonType.equals("gov_id_nfc")) {
                return (UiComponentError) d10.c(UiGovernmentIdNfcScanComponentError.class).fromJson(mVar);
            }
            return (UiComponentError) d10.c(UiInputComponentError.class).fromJson(mVar);
        }

        @Override // com.squareup.moshi.h
        @z
        public void toJson(@NotNull t tVar, UiComponentError uiComponentError) {
            w d10 = new w.b().d();
            if (uiComponentError instanceof UiGovernmentIdNfcScanComponentError) {
                d10.c(UiGovernmentIdNfcScanComponentError.class).toJson(tVar, uiComponentError);
            } else if (uiComponentError instanceof UiInputAddressComponentError) {
                d10.c(UiInputAddressComponentError.class).toJson(tVar, uiComponentError);
            } else if (uiComponentError instanceof UiInputComponentError) {
                d10.c(UiInputComponentError.class).toJson(tVar, uiComponentError);
            } else if (uiComponentError instanceof UiInputInternationalDbComponentError) {
                d10.c(UiInputInternationalDbComponentError.class).toJson(tVar, uiComponentError);
            } else if (uiComponentError == null) {
                tVar.C0();
            } else {
                throw new p();
            }
        }
    }

    @i(generateAdapter = true)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UiInputAddressComponentError extends UiComponentError implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<UiInputAddressComponentError> CREATOR = new Creator();
        @NotNull
        private Map<String, String> message;
        @NotNull
        private final String name;
        @NotNull
        private final String type;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<UiInputAddressComponentError> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputAddressComponentError createFromParcel(Parcel parcel) {
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readString());
                }
                return new UiInputAddressComponentError(readString, readString2, linkedHashMap);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputAddressComponentError[] newArray(int i10) {
                return new UiInputAddressComponentError[i10];
            }
        }

        public UiInputAddressComponentError(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            super(null);
            this.name = str;
            this.type = str2;
            this.message = map;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ UiInputAddressComponentError copy$default(UiInputAddressComponentError uiInputAddressComponentError, String str, String str2, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = uiInputAddressComponentError.name;
            }
            if ((i10 & 2) != 0) {
                str2 = uiInputAddressComponentError.type;
            }
            if ((i10 & 4) != 0) {
                map = uiInputAddressComponentError.message;
            }
            return uiInputAddressComponentError.copy(str, str2, map);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final Map<String, String> component3() {
            return this.message;
        }

        @NotNull
        public final UiInputAddressComponentError copy(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            return new UiInputAddressComponentError(str, str2, map);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof UiInputAddressComponentError) {
                UiInputAddressComponentError uiInputAddressComponentError = (UiInputAddressComponentError) obj;
                return Intrinsics.areEqual(this.name, uiInputAddressComponentError.name) && Intrinsics.areEqual(this.type, uiInputAddressComponentError.type) && Intrinsics.areEqual(this.message, uiInputAddressComponentError.message);
            }
            return false;
        }

        @NotNull
        public final Map<String, String> getMessage() {
            return this.message;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getName() {
            return this.name;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getType() {
            return this.type;
        }

        public int hashCode() {
            return (((this.name.hashCode() * 31) + this.type.hashCode()) * 31) + this.message.hashCode();
        }

        public final void setMessage(@NotNull Map<String, String> map) {
            this.message = map;
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.type;
            Map<String, String> map = this.message;
            return "UiInputAddressComponentError(name=" + str + ", type=" + str2 + ", message=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel parcel, int i10) {
            parcel.writeString(this.name);
            parcel.writeString(this.type);
            Map<String, String> map = this.message;
            parcel.writeInt(map.size());
            for (Map.Entry<String, String> entry : map.entrySet()) {
                parcel.writeString(entry.getKey());
                parcel.writeString(entry.getValue());
            }
        }
    }

    @i(generateAdapter = true)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UiInputComponentError extends UiComponentError implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<UiInputComponentError> CREATOR = new Creator();
        @NotNull
        private final String message;
        @NotNull
        private final String name;
        @NotNull
        private final String type;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<UiInputComponentError> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputComponentError createFromParcel(Parcel parcel) {
                return new UiInputComponentError(parcel.readString(), parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputComponentError[] newArray(int i10) {
                return new UiInputComponentError[i10];
            }
        }

        public UiInputComponentError(@NotNull String str, @NotNull String str2, @NotNull String str3) {
            super(null);
            this.name = str;
            this.type = str2;
            this.message = str3;
        }

        public static /* synthetic */ UiInputComponentError copy$default(UiInputComponentError uiInputComponentError, String str, String str2, String str3, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = uiInputComponentError.name;
            }
            if ((i10 & 2) != 0) {
                str2 = uiInputComponentError.type;
            }
            if ((i10 & 4) != 0) {
                str3 = uiInputComponentError.message;
            }
            return uiInputComponentError.copy(str, str2, str3);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final String component3() {
            return this.message;
        }

        @NotNull
        public final UiInputComponentError copy(@NotNull String str, @NotNull String str2, @NotNull String str3) {
            return new UiInputComponentError(str, str2, str3);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof UiInputComponentError) {
                UiInputComponentError uiInputComponentError = (UiInputComponentError) obj;
                return Intrinsics.areEqual(this.name, uiInputComponentError.name) && Intrinsics.areEqual(this.type, uiInputComponentError.type) && Intrinsics.areEqual(this.message, uiInputComponentError.message);
            }
            return false;
        }

        @NotNull
        public final String getMessage() {
            return this.message;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getName() {
            return this.name;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getType() {
            return this.type;
        }

        public int hashCode() {
            return (((this.name.hashCode() * 31) + this.type.hashCode()) * 31) + this.message.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.type;
            String str3 = this.message;
            return "UiInputComponentError(name=" + str + ", type=" + str2 + ", message=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel parcel, int i10) {
            parcel.writeString(this.name);
            parcel.writeString(this.type);
            parcel.writeString(this.message);
        }
    }

    @i(generateAdapter = true)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UiInputInternationalDbComponentError extends UiComponentError implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<UiInputInternationalDbComponentError> CREATOR = new Creator();
        @NotNull
        private Map<String, String> message;
        @NotNull
        private final String name;
        @NotNull
        private final String type;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<UiInputInternationalDbComponentError> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputInternationalDbComponentError createFromParcel(Parcel parcel) {
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readString());
                }
                return new UiInputInternationalDbComponentError(readString, readString2, linkedHashMap);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiInputInternationalDbComponentError[] newArray(int i10) {
                return new UiInputInternationalDbComponentError[i10];
            }
        }

        public UiInputInternationalDbComponentError(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            super(null);
            this.name = str;
            this.type = str2;
            this.message = map;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ UiInputInternationalDbComponentError copy$default(UiInputInternationalDbComponentError uiInputInternationalDbComponentError, String str, String str2, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = uiInputInternationalDbComponentError.name;
            }
            if ((i10 & 2) != 0) {
                str2 = uiInputInternationalDbComponentError.type;
            }
            if ((i10 & 4) != 0) {
                map = uiInputInternationalDbComponentError.message;
            }
            return uiInputInternationalDbComponentError.copy(str, str2, map);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final Map<String, String> component3() {
            return this.message;
        }

        @NotNull
        public final UiInputInternationalDbComponentError copy(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            return new UiInputInternationalDbComponentError(str, str2, map);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof UiInputInternationalDbComponentError) {
                UiInputInternationalDbComponentError uiInputInternationalDbComponentError = (UiInputInternationalDbComponentError) obj;
                return Intrinsics.areEqual(this.name, uiInputInternationalDbComponentError.name) && Intrinsics.areEqual(this.type, uiInputInternationalDbComponentError.type) && Intrinsics.areEqual(this.message, uiInputInternationalDbComponentError.message);
            }
            return false;
        }

        @NotNull
        public final Map<String, String> getMessage() {
            return this.message;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getName() {
            return this.name;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getType() {
            return this.type;
        }

        public int hashCode() {
            return (((this.name.hashCode() * 31) + this.type.hashCode()) * 31) + this.message.hashCode();
        }

        public final void setMessage(@NotNull Map<String, String> map) {
            this.message = map;
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.type;
            Map<String, String> map = this.message;
            return "UiInputInternationalDbComponentError(name=" + str + ", type=" + str2 + ", message=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel parcel, int i10) {
            parcel.writeString(this.name);
            parcel.writeString(this.type);
            Map<String, String> map = this.message;
            parcel.writeInt(map.size());
            for (Map.Entry<String, String> entry : map.entrySet()) {
                parcel.writeString(entry.getKey());
                parcel.writeString(entry.getValue());
            }
        }
    }

    public /* synthetic */ UiComponentError(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public abstract String getName();

    @NotNull
    public abstract String getType();

    @i(generateAdapter = true)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UiGovernmentIdNfcScanComponentError extends UiComponentError implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<UiGovernmentIdNfcScanComponentError> CREATOR = new Creator();
        @NotNull
        private Map<String, String> message;
        @NotNull
        private final String name;
        @NotNull
        private final String type;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<UiGovernmentIdNfcScanComponentError> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiGovernmentIdNfcScanComponentError createFromParcel(Parcel parcel) {
                String readString = parcel.readString();
                String readString2 = parcel.readString();
                int readInt = parcel.readInt();
                LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    linkedHashMap.put(parcel.readString(), parcel.readString());
                }
                return new UiGovernmentIdNfcScanComponentError(readString, readString2, linkedHashMap);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final UiGovernmentIdNfcScanComponentError[] newArray(int i10) {
                return new UiGovernmentIdNfcScanComponentError[i10];
            }
        }

        public /* synthetic */ UiGovernmentIdNfcScanComponentError(String str, String str2, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? "gov_id_nfc" : str2, map);
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ UiGovernmentIdNfcScanComponentError copy$default(UiGovernmentIdNfcScanComponentError uiGovernmentIdNfcScanComponentError, String str, String str2, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = uiGovernmentIdNfcScanComponentError.name;
            }
            if ((i10 & 2) != 0) {
                str2 = uiGovernmentIdNfcScanComponentError.type;
            }
            if ((i10 & 4) != 0) {
                map = uiGovernmentIdNfcScanComponentError.message;
            }
            return uiGovernmentIdNfcScanComponentError.copy(str, str2, map);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final Map<String, String> component3() {
            return this.message;
        }

        @NotNull
        public final UiGovernmentIdNfcScanComponentError copy(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            return new UiGovernmentIdNfcScanComponentError(str, str2, map);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof UiGovernmentIdNfcScanComponentError) {
                UiGovernmentIdNfcScanComponentError uiGovernmentIdNfcScanComponentError = (UiGovernmentIdNfcScanComponentError) obj;
                return Intrinsics.areEqual(this.name, uiGovernmentIdNfcScanComponentError.name) && Intrinsics.areEqual(this.type, uiGovernmentIdNfcScanComponentError.type) && Intrinsics.areEqual(this.message, uiGovernmentIdNfcScanComponentError.message);
            }
            return false;
        }

        @NotNull
        public final Map<String, String> getMessage() {
            return this.message;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getName() {
            return this.name;
        }

        @Override // com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError
        @NotNull
        public String getType() {
            return this.type;
        }

        public int hashCode() {
            return (((this.name.hashCode() * 31) + this.type.hashCode()) * 31) + this.message.hashCode();
        }

        public final void setMessage(@NotNull Map<String, String> map) {
            this.message = map;
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.type;
            Map<String, String> map = this.message;
            return "UiGovernmentIdNfcScanComponentError(name=" + str + ", type=" + str2 + ", message=" + map + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel parcel, int i10) {
            parcel.writeString(this.name);
            parcel.writeString(this.type);
            Map<String, String> map = this.message;
            parcel.writeInt(map.size());
            for (Map.Entry<String, String> entry : map.entrySet()) {
                parcel.writeString(entry.getKey());
                parcel.writeString(entry.getValue());
            }
        }

        public UiGovernmentIdNfcScanComponentError(@NotNull String str, @NotNull String str2, @NotNull Map<String, String> map) {
            super(null);
            this.name = str;
            this.type = str2;
            this.message = map;
        }
    }

    private UiComponentError() {
    }
}
