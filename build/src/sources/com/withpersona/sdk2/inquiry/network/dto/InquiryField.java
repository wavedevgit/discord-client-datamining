package com.withpersona.sdk2.inquiry.network.dto;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u0000 \b2\u00020\u0001:\u000b\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012B\u0011\b\u0004\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0082\u0001\t\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "Landroid/os/Parcelable;", "type", "", "<init>", "(Ljava/lang/String;)V", "getType", "()Ljava/lang/String;", "Companion", "StringField", "IntegerField", "BooleanField", "FloatField", "DateField", "DatetimeField", "ChoicesField", "MultiChoicesField", "Unknown", "UnknownAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$BooleanField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$ChoicesField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DateField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DatetimeField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$FloatField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$IntegerField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$StringField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$Unknown;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class InquiryField implements Parcelable {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String type;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$Companion;", "", "<init>", "()V", "Lcom/squareup/moshi/h$e;", "createAdapter", "()Lcom/squareup/moshi/h$e;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final h.e createAdapter() {
            xm.b b10 = xm.b.b(InquiryField.class, "type");
            UnknownAdapter unknownAdapter = UnknownAdapter.INSTANCE;
            Intrinsics.checkNotNull(unknownAdapter, "null cannot be cast to non-null type com.squareup.moshi.JsonAdapter<kotlin.Any>");
            xm.b e10 = b10.d(unknownAdapter).e(StringField.class, StringField.TYPE).e(IntegerField.class, IntegerField.TYPE).e(BooleanField.class, BooleanField.TYPE).e(FloatField.class, FloatField.TYPE).e(FloatField.class, FloatField.TYPE2).e(DateField.class, DateField.TYPE).e(DatetimeField.class, DatetimeField.TYPE).e(ChoicesField.class, ChoicesField.TYPE).e(MultiChoicesField.class, MultiChoicesField.TYPE);
            Intrinsics.checkNotNullExpressionValue(e10, "withSubtype(...)");
            return e10;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$Unknown;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "type", "", "<init>", "(Ljava/lang/String;)V", "getType", "()Ljava/lang/String;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Unknown extends InquiryField {
        @NotNull
        public static final Parcelable.Creator<Unknown> CREATOR = new Creator();
        @NotNull
        private final String type;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Unknown> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Unknown createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Unknown(parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Unknown[] newArray(int i10) {
                return new Unknown[i10];
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Unknown(@NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.type = type;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.type);
        }
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bÂ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$UnknownAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "<init>", "()V", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class UnknownAdapter extends h {
        @NotNull
        public static final UnknownAdapter INSTANCE = new UnknownAdapter();

        private UnknownAdapter() {
        }

        @Override // com.squareup.moshi.h
        @NotNull
        public InquiryField fromJson(@NotNull m reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            reader.s();
            String str = "";
            while (reader.hasNext()) {
                if (Intrinsics.areEqual(reader.m0(), "type")) {
                    str = reader.f1();
                } else {
                    reader.P();
                }
            }
            reader.z();
            return new Unknown(str);
        }

        @Override // com.squareup.moshi.h
        public void toJson(@NotNull t writer, InquiryField inquiryField) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            writer.k();
            writer.W("type");
            writer.x1(inquiryField != null ? inquiryField.getType() : null);
            writer.E();
        }
    }

    public /* synthetic */ InquiryField(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    @NotNull
    public String getType() {
        return this.type;
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\t\u0010\u000e\u001a\u00020\u0005HÆ\u0003J$\u0010\u000f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0002\u0010\u0010J\u0006\u0010\u0011\u001a\u00020\u0012J\u0013\u0010\u0013\u001a\u00020\u00032\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0005HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0012R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$BooleanField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "", "<init>", "(Ljava/lang/Boolean;Ljava/lang/String;)V", "getValue", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getType", "()Ljava/lang/String;", "component1", "component2", "copy", "(Ljava/lang/Boolean;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$BooleanField;", "describeContents", "", "equals", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class BooleanField extends InquiryField {
        @NotNull
        public static final String TYPE = "boolean";
        @NotNull
        private final String type;
        private final Boolean value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<BooleanField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$BooleanField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<BooleanField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final BooleanField createFromParcel(Parcel parcel) {
                Boolean valueOf;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                if (parcel.readInt() == 0) {
                    valueOf = null;
                } else {
                    valueOf = Boolean.valueOf(parcel.readInt() != 0);
                }
                return new BooleanField(valueOf, parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final BooleanField[] newArray(int i10) {
                return new BooleanField[i10];
            }
        }

        public /* synthetic */ BooleanField(Boolean bool, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(bool, (i10 & 2) != 0 ? TYPE : str);
        }

        public static /* synthetic */ BooleanField copy$default(BooleanField booleanField, Boolean bool, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                bool = booleanField.value;
            }
            if ((i10 & 2) != 0) {
                str = booleanField.type;
            }
            return booleanField.copy(bool, str);
        }

        public final Boolean component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final BooleanField copy(Boolean bool, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new BooleanField(bool, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof BooleanField) {
                BooleanField booleanField = (BooleanField) obj;
                return Intrinsics.areEqual(this.value, booleanField.value) && Intrinsics.areEqual(this.type, booleanField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final Boolean getValue() {
            return this.value;
        }

        public int hashCode() {
            Boolean bool = this.value;
            return ((bool == null ? 0 : bool.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            Boolean bool = this.value;
            String str = this.type;
            return "BooleanField(value=" + bool + ", type=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            int i11;
            Intrinsics.checkNotNullParameter(dest, "dest");
            Boolean bool = this.value;
            if (bool == null) {
                i11 = 0;
            } else {
                dest.writeInt(1);
                i11 = bool.booleanValue();
            }
            dest.writeInt(i11);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public BooleanField(Boolean bool, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = bool;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001f\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$ChoicesField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getValue", "()Ljava/lang/String;", "getType", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ChoicesField extends InquiryField {
        @NotNull
        public static final String TYPE = "choices";
        @NotNull
        private final String type;
        private final String value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<ChoicesField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$ChoicesField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<ChoicesField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ChoicesField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new ChoicesField(parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ChoicesField[] newArray(int i10) {
                return new ChoicesField[i10];
            }
        }

        public /* synthetic */ ChoicesField(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? TYPE : str2);
        }

        public static /* synthetic */ ChoicesField copy$default(ChoicesField choicesField, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = choicesField.value;
            }
            if ((i10 & 2) != 0) {
                str2 = choicesField.type;
            }
            return choicesField.copy(str, str2);
        }

        public final String component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final ChoicesField copy(String str, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new ChoicesField(str, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ChoicesField) {
                ChoicesField choicesField = (ChoicesField) obj;
                return Intrinsics.areEqual(this.value, choicesField.value) && Intrinsics.areEqual(this.type, choicesField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final String getValue() {
            return this.value;
        }

        public int hashCode() {
            String str = this.value;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.value;
            String str2 = this.type;
            return "ChoicesField(value=" + str + ", type=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.value);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public ChoicesField(String str, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = str;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001f\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DateField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getValue", "()Ljava/lang/String;", "getType", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class DateField extends InquiryField {
        @NotNull
        public static final String TYPE = "date";
        @NotNull
        private final String type;
        private final String value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<DateField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DateField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<DateField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DateField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new DateField(parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DateField[] newArray(int i10) {
                return new DateField[i10];
            }
        }

        public /* synthetic */ DateField(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? TYPE : str2);
        }

        public static /* synthetic */ DateField copy$default(DateField dateField, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = dateField.value;
            }
            if ((i10 & 2) != 0) {
                str2 = dateField.type;
            }
            return dateField.copy(str, str2);
        }

        public final String component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final DateField copy(String str, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new DateField(str, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof DateField) {
                DateField dateField = (DateField) obj;
                return Intrinsics.areEqual(this.value, dateField.value) && Intrinsics.areEqual(this.type, dateField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final String getValue() {
            return this.value;
        }

        public int hashCode() {
            String str = this.value;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.value;
            String str2 = this.type;
            return "DateField(value=" + str + ", type=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.value);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public DateField(String str, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = str;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001f\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DatetimeField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getValue", "()Ljava/lang/String;", "getType", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class DatetimeField extends InquiryField {
        @NotNull
        public static final String TYPE = "datetime";
        @NotNull
        private final String type;
        private final String value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<DatetimeField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$DatetimeField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<DatetimeField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DatetimeField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new DatetimeField(parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DatetimeField[] newArray(int i10) {
                return new DatetimeField[i10];
            }
        }

        public /* synthetic */ DatetimeField(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? TYPE : str2);
        }

        public static /* synthetic */ DatetimeField copy$default(DatetimeField datetimeField, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = datetimeField.value;
            }
            if ((i10 & 2) != 0) {
                str2 = datetimeField.type;
            }
            return datetimeField.copy(str, str2);
        }

        public final String component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final DatetimeField copy(String str, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new DatetimeField(str, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof DatetimeField) {
                DatetimeField datetimeField = (DatetimeField) obj;
                return Intrinsics.areEqual(this.value, datetimeField.value) && Intrinsics.areEqual(this.type, datetimeField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final String getValue() {
            return this.value;
        }

        public int hashCode() {
            String str = this.value;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.value;
            String str2 = this.type;
            return "DatetimeField(value=" + str + ", type=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.value);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public DatetimeField(String str, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = str;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001e2\u00020\u0001:\u0001\u001eB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\t\u0010\u000e\u001a\u00020\u0005HÆ\u0003J$\u0010\u000f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0002\u0010\u0010J\u0006\u0010\u0011\u001a\u00020\u0012J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0005HÖ\u0001J\u0016\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0012R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$FloatField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "", "<init>", "(Ljava/lang/Float;Ljava/lang/String;)V", "getValue", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getType", "()Ljava/lang/String;", "component1", "component2", "copy", "(Ljava/lang/Float;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$FloatField;", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class FloatField extends InquiryField {
        @NotNull
        public static final String TYPE = "float";
        @NotNull
        public static final String TYPE2 = "number";
        @NotNull
        private final String type;
        private final Float value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<FloatField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$FloatField$Companion;", "", "<init>", "()V", "TYPE", "", "TYPE2", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<FloatField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FloatField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new FloatField(parcel.readInt() == 0 ? null : Float.valueOf(parcel.readFloat()), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FloatField[] newArray(int i10) {
                return new FloatField[i10];
            }
        }

        public /* synthetic */ FloatField(Float f10, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(f10, (i10 & 2) != 0 ? TYPE : str);
        }

        public static /* synthetic */ FloatField copy$default(FloatField floatField, Float f10, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                f10 = floatField.value;
            }
            if ((i10 & 2) != 0) {
                str = floatField.type;
            }
            return floatField.copy(f10, str);
        }

        public final Float component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final FloatField copy(Float f10, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new FloatField(f10, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof FloatField) {
                FloatField floatField = (FloatField) obj;
                return Intrinsics.areEqual((Object) this.value, (Object) floatField.value) && Intrinsics.areEqual(this.type, floatField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final Float getValue() {
            return this.value;
        }

        public int hashCode() {
            Float f10 = this.value;
            return ((f10 == null ? 0 : f10.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            Float f10 = this.value;
            String str = this.type;
            return "FloatField(value=" + f10 + ", type=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Float f10 = this.value;
            if (f10 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeFloat(f10.floatValue());
            }
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public FloatField(Float f10, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = f10;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\r\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\t\u0010\u000e\u001a\u00020\u0005HÆ\u0003J$\u0010\u000f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0002\u0010\u0010J\u0006\u0010\u0011\u001a\u00020\u0003J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0005HÖ\u0001J\u0016\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0003R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$IntegerField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "", "<init>", "(Ljava/lang/Integer;Ljava/lang/String;)V", "getValue", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getType", "()Ljava/lang/String;", "component1", "component2", "copy", "(Ljava/lang/Integer;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$IntegerField;", "describeContents", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IntegerField extends InquiryField {
        @NotNull
        public static final String TYPE = "integer";
        @NotNull
        private final String type;
        private final Integer value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<IntegerField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$IntegerField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<IntegerField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final IntegerField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new IntegerField(parcel.readInt() == 0 ? null : Integer.valueOf(parcel.readInt()), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final IntegerField[] newArray(int i10) {
                return new IntegerField[i10];
            }
        }

        public /* synthetic */ IntegerField(Integer num, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(num, (i10 & 2) != 0 ? TYPE : str);
        }

        public static /* synthetic */ IntegerField copy$default(IntegerField integerField, Integer num, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                num = integerField.value;
            }
            if ((i10 & 2) != 0) {
                str = integerField.type;
            }
            return integerField.copy(num, str);
        }

        public final Integer component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final IntegerField copy(Integer num, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new IntegerField(num, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof IntegerField) {
                IntegerField integerField = (IntegerField) obj;
                return Intrinsics.areEqual(this.value, integerField.value) && Intrinsics.areEqual(this.type, integerField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final Integer getValue() {
            return this.value;
        }

        public int hashCode() {
            Integer num = this.value;
            return ((num == null ? 0 : num.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            Integer num = this.value;
            String str = this.type;
            return "IntegerField(value=" + num + ", type=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            int intValue;
            Intrinsics.checkNotNullParameter(dest, "dest");
            Integer num = this.value;
            if (num == null) {
                intValue = 0;
            } else {
                dest.writeInt(1);
                intValue = num.intValue();
            }
            dest.writeInt(intValue);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public IntegerField(Integer num, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = num;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001e2\u00020\u0001:\u0001\u001eB!\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0096\u0002J\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u0016\u0010\u0013\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\tJ\t\u0010\u0014\u001a\u00020\u0004HÆ\u0003J*\u0010\u0015\u001a\u00020\u00002\u0010\b\u0002\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0004HÆ\u0001¢\u0006\u0002\u0010\u0016J\u0006\u0010\u0017\u001a\u00020\u0012J\t\u0010\u0018\u001a\u00020\u0004HÖ\u0001J\u0016\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0012R\u001b\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\n\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0005\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "", "type", "<init>", "([Ljava/lang/String;Ljava/lang/String;)V", "getValue", "()[Ljava/lang/String;", "[Ljava/lang/String;", "getType", "()Ljava/lang/String;", "equals", "", "other", "", "hashCode", "", "component1", "component2", "copy", "([Ljava/lang/String;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField;", "describeContents", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class MultiChoicesField extends InquiryField {
        @NotNull
        public static final String TYPE = "multi_choices";
        @NotNull
        private final String type;
        private final String[] value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<MultiChoicesField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$MultiChoicesField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<MultiChoicesField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final MultiChoicesField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new MultiChoicesField(parcel.createStringArray(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final MultiChoicesField[] newArray(int i10) {
                return new MultiChoicesField[i10];
            }
        }

        public /* synthetic */ MultiChoicesField(String[] strArr, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(strArr, (i10 & 2) != 0 ? TYPE : str);
        }

        public static /* synthetic */ MultiChoicesField copy$default(MultiChoicesField multiChoicesField, String[] strArr, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                strArr = multiChoicesField.value;
            }
            if ((i10 & 2) != 0) {
                str = multiChoicesField.type;
            }
            return multiChoicesField.copy(strArr, str);
        }

        public final String[] component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final MultiChoicesField copy(String[] strArr, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new MultiChoicesField(strArr, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
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
            if (!Intrinsics.areEqual(MultiChoicesField.class, cls)) {
                return false;
            }
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.InquiryField.MultiChoicesField");
            MultiChoicesField multiChoicesField = (MultiChoicesField) obj;
            String[] strArr = this.value;
            if (strArr != null) {
                String[] strArr2 = multiChoicesField.value;
                if (strArr2 == null || !Arrays.equals(strArr, strArr2)) {
                    return false;
                }
            } else if (multiChoicesField.value != null) {
                return false;
            }
            return true;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final String[] getValue() {
            return this.value;
        }

        public int hashCode() {
            String[] strArr = this.value;
            if (strArr != null) {
                return Arrays.hashCode(strArr);
            }
            return 0;
        }

        @NotNull
        public String toString() {
            String arrays = Arrays.toString(this.value);
            String str = this.type;
            return "MultiChoicesField(value=" + arrays + ", type=" + str + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeStringArray(this.value);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public MultiChoicesField(String[] strArr, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = strArr;
            this.type = type;
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000b\u0010\n\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001f\u0010\f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0006\u0010\r\u001a\u00020\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u000eHÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u000eR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$StringField;", "Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField;", "value", "", "type", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getValue", "()Ljava/lang/String;", "getType", "component1", "component2", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class StringField extends InquiryField {
        @NotNull
        public static final String TYPE = "string";
        @NotNull
        private final String type;
        private final String value;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<StringField> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/InquiryField$StringField$Companion;", "", "<init>", "()V", "TYPE", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<StringField> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final StringField createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new StringField(parcel.readString(), parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final StringField[] newArray(int i10) {
                return new StringField[i10];
            }
        }

        public /* synthetic */ StringField(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? TYPE : str2);
        }

        public static /* synthetic */ StringField copy$default(StringField stringField, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = stringField.value;
            }
            if ((i10 & 2) != 0) {
                str2 = stringField.type;
            }
            return stringField.copy(str, str2);
        }

        public final String component1() {
            return this.value;
        }

        @NotNull
        public final String component2() {
            return this.type;
        }

        @NotNull
        public final StringField copy(String str, @NotNull String type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new StringField(str, type);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof StringField) {
                StringField stringField = (StringField) obj;
                return Intrinsics.areEqual(this.value, stringField.value) && Intrinsics.areEqual(this.type, stringField.type);
            }
            return false;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.InquiryField
        @NotNull
        public String getType() {
            return this.type;
        }

        public final String getValue() {
            return this.value;
        }

        public int hashCode() {
            String str = this.value;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.type.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.value;
            String str2 = this.type;
            return "StringField(value=" + str + ", type=" + str2 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.value);
            dest.writeString(this.type);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public StringField(String str, @NotNull String type) {
            super(type, null);
            Intrinsics.checkNotNullParameter(type, "type");
            this.value = str;
            this.type = type;
        }
    }

    private InquiryField(String str) {
        this.type = str;
    }
}
