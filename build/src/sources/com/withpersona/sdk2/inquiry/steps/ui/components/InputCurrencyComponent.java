package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import dq.e0;
import dq.k5;
import dq.v;
import dq.v4;
import eq.i;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0004\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\b\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B7\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u000e\u0010\u000fB\u0011\b\u0016\u0012\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u000e\u0010\u0012J\u0019\u0010\u0014\u001a\u00020\u00002\b\u0010\u0013\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u001d\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u0018¢\u0006\u0004\b\u001b\u0010\u001cJ\r\u0010\u001d\u001a\u00020\u0018¢\u0006\u0004\b\u001d\u0010\u001eJJ\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\fHÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u0010\u0010#\u001a\u00020\u0018HÖ\u0001¢\u0006\u0004\b#\u0010\u001eJ\u001a\u0010'\u001a\u00020&2\b\u0010%\u001a\u0004\u0018\u00010$HÖ\u0003¢\u0006\u0004\b'\u0010(R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b)\u0010*\u001a\u0004\b+\u0010\"R\u0019\u0010\b\u001a\u0004\u0018\u00010\u00078\u0006¢\u0006\f\n\u0004\b,\u0010-\u001a\u0004\b.\u0010/R\u001c\u0010\n\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b0\u00101\u001a\u0004\b2\u00103R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b4\u00101\u001a\u0004\b5\u00103R\u0019\u0010\r\u001a\u0004\u0018\u00010\f8\u0006¢\u0006\f\n\u0004\b6\u00107\u001a\u0004\b8\u00109R&\u0010A\u001a\b\u0012\u0004\u0012\u00020;0:8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b<\u0010=\u0012\u0004\b?\u0010@\u001a\u0004\b)\u0010>R(\u0010I\u001a\u00020B8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bC\u0010D\u0012\u0004\bH\u0010@\u001a\u0004\bE\u0010F\"\u0004\b0\u0010G¨\u0006J"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCurrencyComponent;", "Ldq/k5;", "Ldq/v4;", "Ldq/v;", "Ldq/e0;", "", StackTraceHelper.NAME_KEY, "", "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "errorTextStyle", "<init>", "(Ljava/lang/String;Ljava/lang/Number;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCurrency;)V", "newValue", "j", "(Ljava/lang/Number;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCurrencyComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/Number;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCurrencyComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Ljava/lang/Number;", "g", "()Ljava/lang/Number;", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "f", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "", "Llq/a;", "q", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Leq/i;", "r", "Leq/i;", "b", "()Leq/i;", "(Leq/i;)V", "getNumberController$annotations", "numberController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputCurrencyComponent implements k5, v4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputCurrencyComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19648d;

    /* renamed from: e  reason: collision with root package name */
    private final Number f19649e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19650i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19651o;

    /* renamed from: p  reason: collision with root package name */
    private final TextBasedComponentStyle f19652p;

    /* renamed from: q  reason: collision with root package name */
    private final List f19653q;

    /* renamed from: r  reason: collision with root package name */
    private i f19654r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputCurrencyComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputCurrencyComponent(parcel.readString(), (Number) parcel.readSerializable(), (JsonLogicBoolean) parcel.readParcelable(InputCurrencyComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputCurrencyComponent.class.getClassLoader()), (TextBasedComponentStyle) parcel.readParcelable(InputCurrencyComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputCurrencyComponent[] newArray(int i10) {
            return new InputCurrencyComponent[i10];
        }
    }

    public InputCurrencyComponent(String name, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f19648d = name;
        this.f19649e = number;
        this.f19650i = jsonLogicBoolean;
        this.f19651o = jsonLogicBoolean2;
        this.f19652p = textBasedComponentStyle;
        this.f19653q = new ArrayList();
        this.f19654r = new i(number);
    }

    public static /* synthetic */ InputCurrencyComponent e(InputCurrencyComponent inputCurrencyComponent, String str, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputCurrencyComponent.f19648d;
        }
        if ((i10 & 2) != 0) {
            number = inputCurrencyComponent.f19649e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputCurrencyComponent.f19650i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputCurrencyComponent.f19651o;
        }
        if ((i10 & 16) != 0) {
            textBasedComponentStyle = inputCurrencyComponent.f19652p;
        }
        TextBasedComponentStyle textBasedComponentStyle2 = textBasedComponentStyle;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean;
        return inputCurrencyComponent.c(str, number, jsonLogicBoolean3, jsonLogicBoolean2, textBasedComponentStyle2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getNumberController$annotations() {
    }

    @Override // dq.v4
    public i b() {
        return this.f19654r;
    }

    public final InputCurrencyComponent c(String name, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new InputCurrencyComponent(name, number, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle);
    }

    @Override // dq.e0
    public List d() {
        return this.f19653q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputCurrencyComponent) {
            InputCurrencyComponent inputCurrencyComponent = (InputCurrencyComponent) obj;
            return Intrinsics.areEqual(this.f19648d, inputCurrencyComponent.f19648d) && Intrinsics.areEqual(this.f19649e, inputCurrencyComponent.f19649e) && Intrinsics.areEqual(this.f19650i, inputCurrencyComponent.f19650i) && Intrinsics.areEqual(this.f19651o, inputCurrencyComponent.f19651o) && Intrinsics.areEqual(this.f19652p, inputCurrencyComponent.f19652p);
        }
        return false;
    }

    public final TextBasedComponentStyle f() {
        return this.f19652p;
    }

    public final Number g() {
        return this.f19649e;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19651o;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19650i;
    }

    @Override // dq.k5
    public String getName() {
        return this.f19648d;
    }

    public int hashCode() {
        int hashCode = this.f19648d.hashCode() * 31;
        Number number = this.f19649e;
        int hashCode2 = (hashCode + (number == null ? 0 : number.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19650i;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19651o;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        TextBasedComponentStyle textBasedComponentStyle = this.f19652p;
        return hashCode4 + (textBasedComponentStyle != null ? textBasedComponentStyle.hashCode() : 0);
    }

    public void i(i iVar) {
        Intrinsics.checkNotNullParameter(iVar, "<set-?>");
        this.f19654r = iVar;
    }

    @Override // dq.v4
    /* renamed from: j */
    public InputCurrencyComponent a(Number number) {
        InputCurrencyComponent e10 = e(this, null, number, null, null, null, 29, null);
        e10.i(b());
        return e10;
    }

    public String toString() {
        String str = this.f19648d;
        Number number = this.f19649e;
        JsonLogicBoolean jsonLogicBoolean = this.f19650i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19651o;
        TextBasedComponentStyle textBasedComponentStyle = this.f19652p;
        return "InputCurrencyComponent(name=" + str + ", value=" + number + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", errorTextStyle=" + textBasedComponentStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19648d);
        dest.writeSerializable(this.f19649e);
        dest.writeParcelable(this.f19650i, i10);
        dest.writeParcelable(this.f19651o, i10);
        dest.writeParcelable(this.f19652p, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputCurrencyComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency r8) {
        /*
            r7 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r2 = r8.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency$Attributes r0 = r8.getAttributes()
            r1 = 0
            if (r0 == 0) goto L16
            java.lang.Number r0 = r0.getPrefill()
            r3 = r0
            goto L17
        L16:
            r3 = r1
        L17:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency$Attributes r0 = r8.getAttributes()
            if (r0 == 0) goto L23
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r4 = r0
            goto L24
        L23:
            r4 = r1
        L24:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency$Attributes r0 = r8.getAttributes()
            if (r0 == 0) goto L30
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getDisabled()
            r5 = r0
            goto L31
        L30:
            r5 = r1
        L31:
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle r8 = r8.getStyles()
            if (r8 == 0) goto L3b
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle r1 = r8.getErrorTextStyle()
        L3b:
            r6 = r1
            r1 = r7
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputCurrencyComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency):void");
    }
}
