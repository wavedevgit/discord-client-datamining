package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.appsflyer.AdRevenueScheme;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import com.squareup.moshi.f;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.UiComponentAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u0000 \u001a2\u00020\u0001:\u0004\u0017\u0018\u0019\u001aB#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u0010\u001a\u00020\u0011J\u0016\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0011R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/UiComponentConfig;", StackTraceHelper.NAME_KEY, "", "attributes", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$Attributes;", "styles", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$Attributes;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;)V", "getName", "()Ljava/lang/String;", "getAttributes", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$Attributes;", "getStyles", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Attributes", "InputType", "AutofillHint", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputText implements UiComponentConfig {
    @NotNull
    public static final String type = "input_text";
    private final Attributes attributes;
    @NotNull
    private final String name;
    private final InputTextBasedComponentStyle styles;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<InputText> CREATOR = new Creator();

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BK\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0006\u0010\u001a\u001a\u00020\u001bJ\u0016\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u001bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0013\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018¨\u0006!"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$Attributes;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/UiComponentAttributes;", "prefill", "", "label", ReactTextInputShadowNode.PROP_PLACEHOLDER, "inputType", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;", "autofillHint", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;", ViewProps.HIDDEN, "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "disabled", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "getPrefill", "()Ljava/lang/String;", "getLabel", "getPlaceholder", "getInputType", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;", "getAutofillHint", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getDisabled", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Attributes implements UiComponentAttributes {
        @NotNull
        public static final Parcelable.Creator<Attributes> CREATOR = new Creator();
        private final AutofillHint autofillHint;
        private final JsonLogicBoolean disabled;
        private final JsonLogicBoolean hidden;
        @NotNull
        private final InputType inputType;
        private final String label;
        private final String placeholder;
        private final String prefill;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Attributes> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Attributes(parcel.readString(), parcel.readString(), parcel.readString(), InputType.valueOf(parcel.readString()), parcel.readInt() == 0 ? null : AutofillHint.valueOf(parcel.readString()), parcel.readInt() == 0 ? null : JsonLogicBoolean.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? JsonLogicBoolean.CREATOR.createFromParcel(parcel) : null);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Attributes[] newArray(int i10) {
                return new Attributes[i10];
            }
        }

        public Attributes(String str, String str2, String str3, @NotNull InputType inputType, AutofillHint autofillHint, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
            Intrinsics.checkNotNullParameter(inputType, "inputType");
            this.prefill = str;
            this.label = str2;
            this.placeholder = str3;
            this.inputType = inputType;
            this.autofillHint = autofillHint;
            this.hidden = jsonLogicBoolean;
            this.disabled = jsonLogicBoolean2;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final AutofillHint getAutofillHint() {
            return this.autofillHint;
        }

        public final JsonLogicBoolean getDisabled() {
            return this.disabled;
        }

        public final JsonLogicBoolean getHidden() {
            return this.hidden;
        }

        @NotNull
        public final InputType getInputType() {
            return this.inputType;
        }

        public final String getLabel() {
            return this.label;
        }

        public final String getPlaceholder() {
            return this.placeholder;
        }

        public final String getPrefill() {
            return this.prefill;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.prefill);
            dest.writeString(this.label);
            dest.writeString(this.placeholder);
            dest.writeString(this.inputType.name());
            AutofillHint autofillHint = this.autofillHint;
            if (autofillHint == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeString(autofillHint.name());
            }
            JsonLogicBoolean jsonLogicBoolean = this.hidden;
            if (jsonLogicBoolean == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                jsonLogicBoolean.writeToParcel(dest, i10);
            }
            JsonLogicBoolean jsonLogicBoolean2 = this.disabled;
            if (jsonLogicBoolean2 == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            jsonLogicBoolean2.writeToParcel(dest, i10);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u000e\b\u0087\u0081\u0002\u0018\u0000 \u000e2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u000eB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\r¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;", "", "<init>", "(Ljava/lang/String;I)V", "NAME", "NAME_FIRST", "NAME_MIDDLE", "NAME_LAST", "EMAIL", "ADDRESS_LINE_1", "ADDRESS_LINE_2", "CITY", "COUNTRY", "POSTAL_CODE", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class AutofillHint {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ AutofillHint[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final AutofillHint NAME = new AutofillHint("NAME", 0);
        public static final AutofillHint NAME_FIRST = new AutofillHint("NAME_FIRST", 1);
        public static final AutofillHint NAME_MIDDLE = new AutofillHint("NAME_MIDDLE", 2);
        public static final AutofillHint NAME_LAST = new AutofillHint("NAME_LAST", 3);
        public static final AutofillHint EMAIL = new AutofillHint("EMAIL", 4);
        public static final AutofillHint ADDRESS_LINE_1 = new AutofillHint("ADDRESS_LINE_1", 5);
        public static final AutofillHint ADDRESS_LINE_2 = new AutofillHint("ADDRESS_LINE_2", 6);
        public static final AutofillHint CITY = new AutofillHint("CITY", 7);
        public static final AutofillHint COUNTRY = new AutofillHint("COUNTRY", 8);
        public static final AutofillHint POSTAL_CODE = new AutofillHint("POSTAL_CODE", 9);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$AutofillHint;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, AutofillHint autofillHint) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            public AutofillHint fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                if (Intrinsics.areEqual(V, StackTraceHelper.NAME_KEY)) {
                    return AutofillHint.NAME;
                }
                if (Intrinsics.areEqual(V, "name_first")) {
                    return AutofillHint.NAME_FIRST;
                }
                if (Intrinsics.areEqual(V, "name_middle")) {
                    return AutofillHint.NAME_MIDDLE;
                }
                if (Intrinsics.areEqual(V, "name_last")) {
                    return AutofillHint.NAME_LAST;
                }
                if (Intrinsics.areEqual(V, "email")) {
                    return AutofillHint.EMAIL;
                }
                if (Intrinsics.areEqual(V, "address_line_1")) {
                    return AutofillHint.ADDRESS_LINE_1;
                }
                if (Intrinsics.areEqual(V, "address_line_2")) {
                    return AutofillHint.ADDRESS_LINE_2;
                }
                if (Intrinsics.areEqual(V, "city")) {
                    return AutofillHint.CITY;
                }
                if (Intrinsics.areEqual(V, AdRevenueScheme.COUNTRY)) {
                    return AutofillHint.COUNTRY;
                }
                if (Intrinsics.areEqual(V, "postal_code")) {
                    return AutofillHint.POSTAL_CODE;
                }
                return null;
            }
        }

        private static final /* synthetic */ AutofillHint[] $values() {
            return new AutofillHint[]{NAME, NAME_FIRST, NAME_MIDDLE, NAME_LAST, EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2, CITY, COUNTRY, POSTAL_CODE};
        }

        static {
            AutofillHint[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
            Companion = new Companion(null);
        }

        private AutofillHint(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static AutofillHint valueOf(String str) {
            return (AutofillHint) Enum.valueOf(AutofillHint.class, str);
        }

        public static AutofillHint[] values() {
            return (AutofillHint[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$Companion;", "", "<init>", "()V", "type", "", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
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
    public static final class Creator implements Parcelable.Creator<InputText> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final InputText createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputText(parcel.readString(), parcel.readInt() == 0 ? null : Attributes.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? InputTextBasedComponentStyle.CREATOR.createFromParcel(parcel) : null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final InputText[] newArray(int i10) {
            return new InputText[i10];
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;", "", "<init>", "(Ljava/lang/String;I)V", "TEXT", "EMAIL", "NUMBER_PAD", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class InputType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ InputType[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final InputType TEXT = new InputType("TEXT", 0);
        public static final InputType EMAIL = new InputType("EMAIL", 1);
        public static final InputType NUMBER_PAD = new InputType("NUMBER_PAD", 2);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText$InputType;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, InputType inputType) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public InputType fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                return Intrinsics.areEqual(V, "text") ? InputType.TEXT : Intrinsics.areEqual(V, "email") ? InputType.EMAIL : Intrinsics.areEqual(V, "number_pad") ? InputType.NUMBER_PAD : InputType.TEXT;
            }
        }

        private static final /* synthetic */ InputType[] $values() {
            return new InputType[]{TEXT, EMAIL, NUMBER_PAD};
        }

        static {
            InputType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
            Companion = new Companion(null);
        }

        private InputType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static InputType valueOf(String str) {
            return (InputType) Enum.valueOf(InputType.class, str);
        }

        public static InputType[] values() {
            return (InputType[]) $VALUES.clone();
        }
    }

    public InputText(@NotNull String name, Attributes attributes, InputTextBasedComponentStyle inputTextBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.name = name;
        this.attributes = attributes;
        this.styles = inputTextBasedComponentStyle;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig
    @NotNull
    public String getName() {
        return this.name;
    }

    public final InputTextBasedComponentStyle getStyles() {
        return this.styles;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.name);
        Attributes attributes = this.attributes;
        if (attributes == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            attributes.writeToParcel(dest, i10);
        }
        InputTextBasedComponentStyle inputTextBasedComponentStyle = this.styles;
        if (inputTextBasedComponentStyle == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        inputTextBasedComponentStyle.writeToParcel(dest, i10);
    }

    @Override // com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig
    public Attributes getAttributes() {
        return this.attributes;
    }
}
