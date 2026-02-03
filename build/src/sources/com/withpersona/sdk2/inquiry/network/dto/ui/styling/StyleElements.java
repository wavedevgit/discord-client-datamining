package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import android.content.res.Resources;
import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.f;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.dto.RgbaHexColor;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import sr.a;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0014\u0018\u0000 \u00042\u00020\u0001:\u0011\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014B\u0007¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0015"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements;", "", "<init>", "()V", "Companion", "Size", "Measurement", "MeasurementSet", "Position", "DPSize", "SizeSet", "SimpleElementColor", "SimpleElementColorValue", "ComplexElementColor", "PositionType", "FontName", "FontWeightContainer", "FontWeight", "ChildSizes", "AxisContainer", "Axis", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StyleElements {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "", "<init>", "(Ljava/lang/String;I)V", "HORIZONTAL", "VERTICAL", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Axis {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Axis[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final Axis HORIZONTAL = new Axis("HORIZONTAL", 0);
        public static final Axis VERTICAL = new Axis("VERTICAL", 1);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, Axis axis) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public Axis fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                return Intrinsics.areEqual(V, "horizontal") ? Axis.HORIZONTAL : Intrinsics.areEqual(V, "vertical") ? Axis.VERTICAL : Axis.HORIZONTAL;
            }
        }

        private static final /* synthetic */ Axis[] $values() {
            return new Axis[]{HORIZONTAL, VERTICAL};
        }

        static {
            Axis[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
            Companion = new Companion(null);
        }

        private Axis(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Axis valueOf(String str) {
            return (Axis) Enum.valueOf(Axis.class, str);
        }

        public static Axis[] values() {
            return (Axis[]) $VALUES.clone();
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$AxisContainer;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class AxisContainer implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<AxisContainer> CREATOR = new Creator();
        private final Axis base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<AxisContainer> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final AxisContainer createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new AxisContainer(parcel.readInt() == 0 ? null : Axis.valueOf(parcel.readString()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final AxisContainer[] newArray(int i10) {
                return new AxisContainer[i10];
            }
        }

        public AxisContainer(Axis axis) {
            this.base = axis;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Axis getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Axis axis = this.base;
            if (axis == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeString(axis.name());
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0015\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$ChildSizes;", "Landroid/os/Parcelable;", "base", "", "<init>", "([I)V", "getBase", "()[I", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ChildSizes implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<ChildSizes> CREATOR = new Creator();
        private final int[] base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<ChildSizes> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ChildSizes createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new ChildSizes(parcel.createIntArray());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ChildSizes[] newArray(int i10) {
                return new ChildSizes[i10];
            }
        }

        public ChildSizes(int[] iArr) {
            this.base = iArr;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final int[] getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeIntArray(this.base);
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u0019\u0010\n\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Companion;", "", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "", "getStringFromJsonReader", "(Lcom/squareup/moshi/m;)Ljava/lang/String;", "", "getDoubleFromJsonReader", "(Lcom/squareup/moshi/m;)Ljava/lang/Double;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Double getDoubleFromJsonReader(m mVar) {
            if (mVar.E() != m.c.NULL) {
                return Double.valueOf(mVar.nextDouble());
            }
            mVar.P();
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String getStringFromJsonReader(m mVar) {
            if (mVar.E() != m.c.NULL) {
                return mVar.f1();
            }
            mVar.P();
            return null;
        }

        private Companion() {
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001BC\u0012\n\b\u0001\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\b\u0010\tJ\u0006\u0010\u001c\u001a\u00020\u0011J\u0016\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u0011R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000bR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000bR\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u0015\u0010\u0013R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0013R\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u0013R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u00118F¢\u0006\u0006\u001a\u0004\b\u001b\u0010\u0013¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$ComplexElementColor;", "Landroid/os/Parcelable;", "_base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;", "_focused", "_active", "_disabled", "_errored", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;)V", "get_base", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;", "get_focused", "get_active", "get_disabled", "get_errored", "base", "", "getBase", "()Ljava/lang/Integer;", "focused", "getFocused", AppStateModule.APP_STATE_ACTIVE, "getActive", "disabled", "getDisabled", "errored", "getErrored", "describeContents", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ComplexElementColor implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<ComplexElementColor> CREATOR = new Creator();
        private final SimpleElementColorValue _active;
        private final SimpleElementColorValue _base;
        private final SimpleElementColorValue _disabled;
        private final SimpleElementColorValue _errored;
        private final SimpleElementColorValue _focused;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<ComplexElementColor> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ComplexElementColor createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new ComplexElementColor(parcel.readInt() == 0 ? null : SimpleElementColorValue.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : SimpleElementColorValue.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : SimpleElementColorValue.CREATOR.createFromParcel(parcel), parcel.readInt() == 0 ? null : SimpleElementColorValue.CREATOR.createFromParcel(parcel), parcel.readInt() != 0 ? SimpleElementColorValue.CREATOR.createFromParcel(parcel) : null);
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final ComplexElementColor[] newArray(int i10) {
                return new ComplexElementColor[i10];
            }
        }

        public ComplexElementColor(@g(name = "base") SimpleElementColorValue simpleElementColorValue, @g(name = "focused") SimpleElementColorValue simpleElementColorValue2, @g(name = "active") SimpleElementColorValue simpleElementColorValue3, @g(name = "disabled") SimpleElementColorValue simpleElementColorValue4, @g(name = "errored") SimpleElementColorValue simpleElementColorValue5) {
            this._base = simpleElementColorValue;
            this._focused = simpleElementColorValue2;
            this._active = simpleElementColorValue3;
            this._disabled = simpleElementColorValue4;
            this._errored = simpleElementColorValue5;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Integer getActive() {
            SimpleElementColorValue simpleElementColorValue = this._active;
            if (simpleElementColorValue != null) {
                return simpleElementColorValue.getValue();
            }
            return null;
        }

        public final Integer getBase() {
            SimpleElementColorValue simpleElementColorValue = this._base;
            if (simpleElementColorValue != null) {
                return simpleElementColorValue.getValue();
            }
            return null;
        }

        public final Integer getDisabled() {
            SimpleElementColorValue simpleElementColorValue = this._disabled;
            if (simpleElementColorValue != null) {
                return simpleElementColorValue.getValue();
            }
            return null;
        }

        public final Integer getErrored() {
            SimpleElementColorValue simpleElementColorValue = this._errored;
            if (simpleElementColorValue != null) {
                return simpleElementColorValue.getValue();
            }
            return null;
        }

        public final Integer getFocused() {
            SimpleElementColorValue simpleElementColorValue = this._focused;
            if (simpleElementColorValue != null) {
                return simpleElementColorValue.getValue();
            }
            return null;
        }

        public final SimpleElementColorValue get_active() {
            return this._active;
        }

        public final SimpleElementColorValue get_base() {
            return this._base;
        }

        public final SimpleElementColorValue get_disabled() {
            return this._disabled;
        }

        public final SimpleElementColorValue get_errored() {
            return this._errored;
        }

        public final SimpleElementColorValue get_focused() {
            return this._focused;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            SimpleElementColorValue simpleElementColorValue = this._base;
            if (simpleElementColorValue == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                simpleElementColorValue.writeToParcel(dest, i10);
            }
            SimpleElementColorValue simpleElementColorValue2 = this._focused;
            if (simpleElementColorValue2 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                simpleElementColorValue2.writeToParcel(dest, i10);
            }
            SimpleElementColorValue simpleElementColorValue3 = this._active;
            if (simpleElementColorValue3 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                simpleElementColorValue3.writeToParcel(dest, i10);
            }
            SimpleElementColorValue simpleElementColorValue4 = this._disabled;
            if (simpleElementColorValue4 == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                simpleElementColorValue4.writeToParcel(dest, i10);
            }
            SimpleElementColorValue simpleElementColorValue5 = this._errored;
            if (simpleElementColorValue5 == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            simpleElementColorValue5.writeToParcel(dest, i10);
        }
    }

    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00112\u00020\u00012\u00020\u0002:\u0001\u0011B\u0011\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\n\u001a\u00020\u000bJ\u0016\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000bR\u0018\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010\t\u001a\u0004\b\u0007\u0010\b¨\u0006\u0012"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize;", "Landroid/os/Parcelable;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "dp", "", "<init>", "(Ljava/lang/Double;)V", "getDp", "()Ljava/lang/Double;", "Ljava/lang/Double;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class DPSize implements Parcelable, Size {

        /* renamed from: dp  reason: collision with root package name */
        private final Double f19022dp;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<DPSize> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000bH\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize;", "<init>", "()V", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, DPSize dPSize) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            /* JADX WARN: Multi-variable type inference failed */
            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public DPSize fromJson(@NotNull m reader) {
                Double d10;
                double pxToDp;
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object obj = null;
                if (reader.E() == m.c.BEGIN_OBJECT) {
                    reader.r();
                    String str = null;
                    while (reader.hasNext()) {
                        String l02 = reader.l0();
                        if (Intrinsics.areEqual(l02, "unit")) {
                            str = StyleElements.Companion.getStringFromJsonReader(reader);
                        } else if (Intrinsics.areEqual(l02, "value")) {
                            obj = StyleElements.Companion.getDoubleFromJsonReader(reader);
                        } else {
                            reader.P();
                        }
                    }
                    reader.y();
                    d10 = obj;
                    obj = str;
                } else {
                    reader.P();
                    d10 = null;
                }
                Double d11 = d10;
                d11 = d10;
                if (Intrinsics.areEqual(obj, "%") && d10 != null) {
                    pxToDp = StyleElementsKt.getPxToDp(Resources.getSystem().getDisplayMetrics().widthPixels);
                    d11 = Double.valueOf(pxToDp * (d10.doubleValue() / 100.0d));
                }
                return new DPSize(d11);
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<DPSize> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DPSize createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new DPSize(parcel.readInt() == 0 ? null : Double.valueOf(parcel.readDouble()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final DPSize[] newArray(int i10) {
                return new DPSize[i10];
            }
        }

        public DPSize(Double d10) {
            this.f19022dp = d10;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        @Override // com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements.Size
        public Double getDp() {
            return this.f19022dp;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Double d10 = this.f19022dp;
            if (d10 == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeDouble(d10.doubleValue());
        }
    }

    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u000f2\u00020\u0001:\u0001\u000fB\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0010"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontName;", "Landroid/os/Parcelable;", "fontName", "", "<init>", "(Ljava/lang/String;)V", "getFontName", "()Ljava/lang/String;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class FontName implements Parcelable {
        private final String fontName;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        public static final Parcelable.Creator<FontName> CREATOR = new Creator();

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000bH\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontName$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontName;", "<init>", "()V", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontName;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontName;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, FontName fontName) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public FontName fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                String str = null;
                if (reader.E() == m.c.BEGIN_OBJECT) {
                    reader.r();
                    while (reader.hasNext()) {
                        if (Intrinsics.areEqual(reader.l0(), "base")) {
                            str = StyleElements.Companion.getStringFromJsonReader(reader);
                        } else {
                            reader.P();
                        }
                    }
                    reader.y();
                } else {
                    reader.P();
                }
                return new FontName(str);
            }
        }

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<FontName> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FontName createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new FontName(parcel.readString());
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FontName[] newArray(int i10) {
                return new FontName[i10];
            }
        }

        public FontName() {
            this(null, 1, null);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final String getFontName() {
            return this.fontName;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeString(this.fontName);
        }

        public FontName(String str) {
            this.fontName = str;
        }

        public /* synthetic */ FontName(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : str);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\t\b\u0087\u0081\u0002\u0018\u0000 \t2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\tB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\b¨\u0006\n"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;", "", "<init>", "(Ljava/lang/String;I)V", "LIGHT", "NORMAL", "MEDIUM", "BOLD", "HEAVY", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class FontWeight {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ FontWeight[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final FontWeight LIGHT = new FontWeight("LIGHT", 0);
        public static final FontWeight NORMAL = new FontWeight("NORMAL", 1);
        public static final FontWeight MEDIUM = new FontWeight("MEDIUM", 2);
        public static final FontWeight BOLD = new FontWeight("BOLD", 3);
        public static final FontWeight HEAVY = new FontWeight("HEAVY", 4);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, FontWeight fontWeight) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public FontWeight fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                return Intrinsics.areEqual(V, "light") ? FontWeight.LIGHT : Intrinsics.areEqual(V, "normal") ? FontWeight.NORMAL : Intrinsics.areEqual(V, "medium") ? FontWeight.MEDIUM : Intrinsics.areEqual(V, "bold") ? FontWeight.BOLD : Intrinsics.areEqual(V, "heavy") ? FontWeight.HEAVY : FontWeight.NORMAL;
            }
        }

        private static final /* synthetic */ FontWeight[] $values() {
            return new FontWeight[]{LIGHT, NORMAL, MEDIUM, BOLD, HEAVY};
        }

        static {
            FontWeight[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
            Companion = new Companion(null);
        }

        private FontWeight(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static FontWeight valueOf(String str) {
            return (FontWeight) Enum.valueOf(FontWeight.class, str);
        }

        public static FontWeight[] values() {
            return (FontWeight[]) $VALUES.clone();
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeightContainer;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$FontWeight;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class FontWeightContainer implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<FontWeightContainer> CREATOR = new Creator();
        private final FontWeight base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<FontWeightContainer> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FontWeightContainer createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new FontWeightContainer(parcel.readInt() == 0 ? null : FontWeight.valueOf(parcel.readString()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final FontWeightContainer[] newArray(int i10) {
                return new FontWeightContainer[i10];
            }
        }

        public FontWeightContainer(FontWeight fontWeight) {
            this.base = fontWeight;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final FontWeight getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            FontWeight fontWeight = this.base;
            if (fontWeight == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeString(fontWeight.name());
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Measurement;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Measurement implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<Measurement> CREATOR = new Creator();
        private final Size base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Measurement> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Measurement createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Measurement((Size) parcel.readParcelable(Measurement.class.getClassLoader()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Measurement[] newArray(int i10) {
                return new Measurement[i10];
            }
        }

        public Measurement(Size size) {
            this.base = size;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Size getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.base, i10);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$MeasurementSet;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class MeasurementSet implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<MeasurementSet> CREATOR = new Creator();
        private final SizeSet base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<MeasurementSet> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final MeasurementSet createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new MeasurementSet(parcel.readInt() == 0 ? null : SizeSet.CREATOR.createFromParcel(parcel));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final MeasurementSet[] newArray(int i10) {
                return new MeasurementSet[i10];
            }
        }

        public MeasurementSet(SizeSet sizeSet) {
            this.base = sizeSet;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final SizeSet getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            SizeSet sizeSet = this.base;
            if (sizeSet == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            sizeSet.writeToParcel(dest, i10);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Position;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Position implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<Position> CREATOR = new Creator();
        private final PositionType base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<Position> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Position createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new Position(parcel.readInt() == 0 ? null : PositionType.valueOf(parcel.readString()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final Position[] newArray(int i10) {
                return new Position[i10];
            }
        }

        public Position(PositionType positionType) {
            this.base = positionType;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final PositionType getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            PositionType positionType = this.base;
            if (positionType == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeString(positionType.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;", "", "<init>", "(Ljava/lang/String;I)V", "START", "CENTER", "END", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class PositionType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ PositionType[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final PositionType START = new PositionType("START", 0);
        public static final PositionType CENTER = new PositionType("CENTER", 1);
        public static final PositionType END = new PositionType("END", 2);

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\n\u0012\u0006\u0012\u0004\u0018\u00010\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$PositionType;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, PositionType positionType) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @f
            public PositionType fromJson(@NotNull m reader) {
                Intrinsics.checkNotNullParameter(reader, "reader");
                Object V = reader.V();
                if (Intrinsics.areEqual(V, ViewProps.START)) {
                    return PositionType.START;
                }
                if (Intrinsics.areEqual(V, "center")) {
                    return PositionType.CENTER;
                }
                if (Intrinsics.areEqual(V, ViewProps.END)) {
                    return PositionType.END;
                }
                return null;
            }
        }

        private static final /* synthetic */ PositionType[] $values() {
            return new PositionType[]{START, CENTER, END};
        }

        static {
            PositionType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
            Companion = new Companion(null);
        }

        private PositionType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static PositionType valueOf(String str) {
            return (PositionType) Enum.valueOf(PositionType.class, str);
        }

        public static PositionType[] values() {
            return (PositionType[]) $VALUES.clone();
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\tR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColor;", "Landroid/os/Parcelable;", "base", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;)V", "getBase", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SimpleElementColor implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<SimpleElementColor> CREATOR = new Creator();
        private final SimpleElementColorValue base;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<SimpleElementColor> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SimpleElementColor createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new SimpleElementColor(parcel.readInt() == 0 ? null : SimpleElementColorValue.CREATOR.createFromParcel(parcel));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SimpleElementColor[] newArray(int i10) {
                return new SimpleElementColor[i10];
            }
        }

        public SimpleElementColor(SimpleElementColorValue simpleElementColorValue) {
            this.base = simpleElementColorValue;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final SimpleElementColorValue getBase() {
            return this.base;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            SimpleElementColorValue simpleElementColorValue = this.base;
            if (simpleElementColorValue == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            simpleElementColorValue.writeToParcel(dest, i10);
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0013\u0012\n\b\u0001\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\t\u001a\u00020\u0003J\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u0003R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColorValue;", "Landroid/os/Parcelable;", "value", "", "<init>", "(Ljava/lang/Integer;)V", "getValue", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "describeContents", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SimpleElementColorValue implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<SimpleElementColorValue> CREATOR = new Creator();
        private final Integer value;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<SimpleElementColorValue> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SimpleElementColorValue createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new SimpleElementColorValue(parcel.readInt() == 0 ? null : Integer.valueOf(parcel.readInt()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SimpleElementColorValue[] newArray(int i10) {
                return new SimpleElementColorValue[i10];
            }
        }

        public SimpleElementColorValue(@RgbaHexColor Integer num) {
            this.value = num;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Integer getValue() {
            return this.value;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            Integer num = this.value;
            if (num == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeInt(num.intValue());
        }
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u0000 \u00072\u00020\u0001:\u0002\u0006\u0007R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005\u0082\u0001\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "Landroid/os/Parcelable;", "dp", "", "getDp", "()Ljava/lang/Double;", "PercentSize", "Companion", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$DPSize;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size$PercentSize;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface Size extends Parcelable {
        @NotNull
        public static final Companion Companion = Companion.$$INSTANCE;

        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\t\u001a\u00020\b2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000bH\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "<init>", "()V", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;)V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Companion extends h {
            static final /* synthetic */ Companion $$INSTANCE = new Companion();

            private Companion() {
            }

            @Override // com.squareup.moshi.h
            @z
            public void toJson(@NotNull t writer, Size size) {
                Intrinsics.checkNotNullParameter(writer, "writer");
            }

            /* JADX WARN: Multi-variable type inference failed */
            @Override // com.squareup.moshi.h
            @f
            @NotNull
            public Size fromJson(@NotNull m reader) {
                Double d10;
                Intrinsics.checkNotNullParameter(reader, "reader");
                String str = null;
                if (reader.E() == m.c.BEGIN_OBJECT) {
                    reader.r();
                    String str2 = null;
                    while (reader.hasNext()) {
                        String l02 = reader.l0();
                        if (Intrinsics.areEqual(l02, "unit")) {
                            str2 = StyleElements.Companion.getStringFromJsonReader(reader);
                        } else if (Intrinsics.areEqual(l02, "value")) {
                            str = StyleElements.Companion.getDoubleFromJsonReader(reader);
                        } else {
                            reader.P();
                        }
                    }
                    reader.y();
                    d10 = str;
                    str = str2;
                } else {
                    reader.P();
                    d10 = 0;
                }
                if (Intrinsics.areEqual(str, "%") && d10 != 0) {
                    return new PercentSize(d10.doubleValue() / 100.0d);
                }
                return new DPSize(d10);
            }
        }

        @i(generateAdapter = true)
        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\u000b\u001a\u00020\fJ\u0016\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0016\u0010\b\u001a\u0004\u0018\u00010\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\n¨\u0006\u0012"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size$PercentSize;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "percent", "", "<init>", "(D)V", "getPercent", "()D", "dp", "getDp", "()Ljava/lang/Double;", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PercentSize implements Size {
            @NotNull
            public static final Parcelable.Creator<PercentSize> CREATOR = new Creator();
            private final double percent;

            @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PercentSize> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PercentSize createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new PercentSize(parcel.readDouble());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PercentSize[] newArray(int i10) {
                    return new PercentSize[i10];
                }
            }

            public PercentSize(double d10) {
                this.percent = d10;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements.Size
            public Double getDp() {
                return null;
            }

            public final double getPercent() {
                return this.percent;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeDouble(this.percent);
            }
        }

        Double getDp();
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B/\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bJ\u0006\u0010\u000e\u001a\u00020\u000fJ\u0016\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u000fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u0015"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "Landroid/os/Parcelable;", ViewProps.TOP, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", ViewProps.BOTTOM, ViewProps.LEFT, ViewProps.RIGHT, "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;)V", "getTop", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "getBottom", "getLeft", "getRight", "describeContents", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SizeSet implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<SizeSet> CREATOR = new Creator();
        private final Size bottom;
        private final Size left;
        private final Size right;
        private final Size top;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<SizeSet> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SizeSet createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new SizeSet((Size) parcel.readParcelable(SizeSet.class.getClassLoader()), (Size) parcel.readParcelable(SizeSet.class.getClassLoader()), (Size) parcel.readParcelable(SizeSet.class.getClassLoader()), (Size) parcel.readParcelable(SizeSet.class.getClassLoader()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final SizeSet[] newArray(int i10) {
                return new SizeSet[i10];
            }
        }

        public SizeSet(Size size, Size size2, Size size3, Size size4) {
            this.top = size;
            this.bottom = size2;
            this.left = size3;
            this.right = size4;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Size getBottom() {
            return this.bottom;
        }

        public final Size getLeft() {
            return this.left;
        }

        public final Size getRight() {
            return this.right;
        }

        public final Size getTop() {
            return this.top;
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            dest.writeParcelable(this.top, i10);
            dest.writeParcelable(this.bottom, i10);
            dest.writeParcelable(this.left, i10);
            dest.writeParcelable(this.right, i10);
        }
    }
}
