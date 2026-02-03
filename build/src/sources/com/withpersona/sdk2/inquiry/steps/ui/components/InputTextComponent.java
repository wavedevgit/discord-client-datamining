package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import wm.t;
import wm.w;
import yp.e0;
import yp.k5;
import yp.v;
import yp.w4;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0010\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B5\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eB\u0011\b\u0016\u0012\u0006\u0010\u0010\u001a\u00020\u000f¢\u0006\u0004\b\r\u0010\u0011J\u0017\u0010\u0013\u001a\u00020\u00002\u0006\u0010\u0012\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u001d\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0017¢\u0006\u0004\b\u001a\u0010\u001bJ\r\u0010\u001c\u001a\u00020\u0017¢\u0006\u0004\b\u001c\u0010\u001dJH\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010 \u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0017HÖ\u0001¢\u0006\u0004\b\"\u0010\u001dJ\u001a\u0010&\u001a\u00020%2\b\u0010$\u001a\u0004\u0018\u00010#HÖ\u0003¢\u0006\u0004\b&\u0010'R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b(\u0010)\u001a\u0004\b*\u0010!R\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b+\u0010)\u001a\u0004\b,\u0010!R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0013\u0010-\u001a\u0004\b.\u0010/R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b0\u0010-\u001a\u0004\b1\u0010/R\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b2\u00103\u001a\u0004\b4\u00105R&\u0010=\u001a\b\u0012\u0004\u0012\u000207068\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b8\u00109\u0012\u0004\b;\u0010<\u001a\u0004\b(\u0010:R(\u0010F\u001a\u00020>8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b?\u0010@\u0012\u0004\bE\u0010<\u001a\u0004\bA\u0010B\"\u0004\bC\u0010D¨\u0006G"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputTextComponent;", "Lyp/k5;", "Lyp/w4;", "Lyp/v;", "Lyp/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "errorTextStyle", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputText;)V", "newString", "i", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputTextComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputTextComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "f", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "", "Lgq/a;", "q", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lwm/t;", "r", "Lwm/t;", "b", "()Lwm/t;", "g", "(Lwm/t;)V", "getTextController$annotations", "textController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputTextComponent implements k5, w4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputTextComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f20314d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20315e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f20316i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20317o;

    /* renamed from: p  reason: collision with root package name */
    private final TextBasedComponentStyle f20318p;

    /* renamed from: q  reason: collision with root package name */
    private final List f20319q;

    /* renamed from: r  reason: collision with root package name */
    private t f20320r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputTextComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputTextComponent(parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(InputTextComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputTextComponent.class.getClassLoader()), (TextBasedComponentStyle) parcel.readParcelable(InputTextComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputTextComponent[] newArray(int i10) {
            return new InputTextComponent[i10];
        }
    }

    public InputTextComponent(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f20314d = name;
        this.f20315e = value;
        this.f20316i = jsonLogicBoolean;
        this.f20317o = jsonLogicBoolean2;
        this.f20318p = textBasedComponentStyle;
        this.f20319q = new ArrayList();
        this.f20320r = w.a(value);
    }

    public static /* synthetic */ InputTextComponent e(InputTextComponent inputTextComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputTextComponent.f20314d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputTextComponent.f20315e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputTextComponent.f20316i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputTextComponent.f20317o;
        }
        if ((i10 & 16) != 0) {
            textBasedComponentStyle = inputTextComponent.f20318p;
        }
        TextBasedComponentStyle textBasedComponentStyle2 = textBasedComponentStyle;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean;
        return inputTextComponent.c(str, str2, jsonLogicBoolean3, jsonLogicBoolean2, textBasedComponentStyle2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // yp.w4
    public t b() {
        return this.f20320r;
    }

    public final InputTextComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputTextComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle);
    }

    @Override // yp.e0
    public List d() {
        return this.f20319q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputTextComponent) {
            InputTextComponent inputTextComponent = (InputTextComponent) obj;
            return Intrinsics.areEqual(this.f20314d, inputTextComponent.f20314d) && Intrinsics.areEqual(this.f20315e, inputTextComponent.f20315e) && Intrinsics.areEqual(this.f20316i, inputTextComponent.f20316i) && Intrinsics.areEqual(this.f20317o, inputTextComponent.f20317o) && Intrinsics.areEqual(this.f20318p, inputTextComponent.f20318p);
        }
        return false;
    }

    public final TextBasedComponentStyle f() {
        return this.f20318p;
    }

    public void g(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f20320r = tVar;
    }

    @Override // yp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20317o;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20316i;
    }

    @Override // yp.k5
    public String getName() {
        return this.f20314d;
    }

    public int hashCode() {
        int hashCode = ((this.f20314d.hashCode() * 31) + this.f20315e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20316i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20317o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        TextBasedComponentStyle textBasedComponentStyle = this.f20318p;
        return hashCode3 + (textBasedComponentStyle != null ? textBasedComponentStyle.hashCode() : 0);
    }

    @Override // yp.w4
    /* renamed from: i */
    public InputTextComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputTextComponent e10 = e(this, null, newString, null, null, null, 29, null);
        e10.g(b());
        return e10;
    }

    public String toString() {
        String str = this.f20314d;
        String str2 = this.f20315e;
        JsonLogicBoolean jsonLogicBoolean = this.f20316i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20317o;
        TextBasedComponentStyle textBasedComponentStyle = this.f20318p;
        return "InputTextComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", errorTextStyle=" + textBasedComponentStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20314d);
        dest.writeString(this.f20315e);
        dest.writeParcelable(this.f20316i, i10);
        dest.writeParcelable(this.f20317o, i10);
        dest.writeParcelable(this.f20318p, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputTextComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText r8) {
        /*
            r7 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r2 = r8.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText$Attributes r0 = r8.getAttributes()
            if (r0 == 0) goto L18
            java.lang.String r0 = r0.getPrefill()
            if (r0 != 0) goto L16
            goto L18
        L16:
            r3 = r0
            goto L1b
        L18:
            java.lang.String r0 = ""
            goto L16
        L1b:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText$Attributes r0 = r8.getAttributes()
            r1 = 0
            if (r0 == 0) goto L28
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r4 = r0
            goto L29
        L28:
            r4 = r1
        L29:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText$Attributes r0 = r8.getAttributes()
            if (r0 == 0) goto L35
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getDisabled()
            r5 = r0
            goto L36
        L35:
            r5 = r1
        L36:
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle r8 = r8.getStyles()
            if (r8 == 0) goto L40
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle r1 = r8.getErrorTextStyle()
        L40:
            r6 = r1
            r1 = r7
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputTextComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText):void");
    }
}
