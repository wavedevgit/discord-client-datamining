package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import gn.t;
import gn.w;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import pq.e0;
import pq.k5;
import pq.v;
import pq.w4;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0010\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B5\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eB\u0011\b\u0016\u0012\u0006\u0010\u0010\u001a\u00020\u000f¢\u0006\u0004\b\r\u0010\u0011J\u0017\u0010\u0013\u001a\u00020\u00002\u0006\u0010\u0012\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u001d\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0017¢\u0006\u0004\b\u001a\u0010\u001bJ\r\u0010\u001c\u001a\u00020\u0017¢\u0006\u0004\b\u001c\u0010\u001dJH\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010 \u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0017HÖ\u0001¢\u0006\u0004\b\"\u0010\u001dJ\u001a\u0010&\u001a\u00020%2\b\u0010$\u001a\u0004\u0018\u00010#HÖ\u0003¢\u0006\u0004\b&\u0010'R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b(\u0010)\u001a\u0004\b*\u0010!R\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b+\u0010)\u001a\u0004\b,\u0010!R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0013\u0010-\u001a\u0004\b.\u0010/R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b0\u0010-\u001a\u0004\b1\u0010/R\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b2\u00103\u001a\u0004\b4\u00105R&\u0010=\u001a\b\u0012\u0004\u0012\u000207068\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b8\u00109\u0012\u0004\b;\u0010<\u001a\u0004\b(\u0010:R(\u0010F\u001a\u00020>8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b?\u0010@\u0012\u0004\bE\u0010<\u001a\u0004\bA\u0010B\"\u0004\bC\u0010D¨\u0006G"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputMaskedTextComponent;", "Lpq/k5;", "Lpq/w4;", "Lpq/v;", "Lpq/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "styles", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputMaskedText;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputMaskedText;)V", "newString", "i", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputMaskedTextComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputMaskedTextComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "f", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputTextBasedComponentStyle;", "", "Lxq/a;", "q", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lgn/t;", "r", "Lgn/t;", "b", "()Lgn/t;", "g", "(Lgn/t;)V", "getTextController$annotations", "textController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputMaskedTextComponent implements k5, w4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputMaskedTextComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f20664d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20665e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f20666i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20667o;

    /* renamed from: p  reason: collision with root package name */
    private final InputTextBasedComponentStyle f20668p;

    /* renamed from: q  reason: collision with root package name */
    private final List f20669q;

    /* renamed from: r  reason: collision with root package name */
    private t f20670r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputMaskedTextComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputMaskedTextComponent(parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(InputMaskedTextComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputMaskedTextComponent.class.getClassLoader()), (InputTextBasedComponentStyle) parcel.readParcelable(InputMaskedTextComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputMaskedTextComponent[] newArray(int i10) {
            return new InputMaskedTextComponent[i10];
        }
    }

    public InputMaskedTextComponent(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, InputTextBasedComponentStyle inputTextBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f20664d = name;
        this.f20665e = value;
        this.f20666i = jsonLogicBoolean;
        this.f20667o = jsonLogicBoolean2;
        this.f20668p = inputTextBasedComponentStyle;
        this.f20669q = new ArrayList();
        this.f20670r = w.a(value);
    }

    public static /* synthetic */ InputMaskedTextComponent e(InputMaskedTextComponent inputMaskedTextComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, InputTextBasedComponentStyle inputTextBasedComponentStyle, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputMaskedTextComponent.f20664d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputMaskedTextComponent.f20665e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputMaskedTextComponent.f20666i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputMaskedTextComponent.f20667o;
        }
        if ((i10 & 16) != 0) {
            inputTextBasedComponentStyle = inputMaskedTextComponent.f20668p;
        }
        InputTextBasedComponentStyle inputTextBasedComponentStyle2 = inputTextBasedComponentStyle;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean;
        return inputMaskedTextComponent.c(str, str2, jsonLogicBoolean3, jsonLogicBoolean2, inputTextBasedComponentStyle2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // pq.w4
    public t b() {
        return this.f20670r;
    }

    public final InputMaskedTextComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, InputTextBasedComponentStyle inputTextBasedComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputMaskedTextComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2, inputTextBasedComponentStyle);
    }

    @Override // pq.e0
    public List d() {
        return this.f20669q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputMaskedTextComponent) {
            InputMaskedTextComponent inputMaskedTextComponent = (InputMaskedTextComponent) obj;
            return Intrinsics.areEqual(this.f20664d, inputMaskedTextComponent.f20664d) && Intrinsics.areEqual(this.f20665e, inputMaskedTextComponent.f20665e) && Intrinsics.areEqual(this.f20666i, inputMaskedTextComponent.f20666i) && Intrinsics.areEqual(this.f20667o, inputMaskedTextComponent.f20667o) && Intrinsics.areEqual(this.f20668p, inputMaskedTextComponent.f20668p);
        }
        return false;
    }

    public final InputTextBasedComponentStyle f() {
        return this.f20668p;
    }

    public void g(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f20670r = tVar;
    }

    @Override // pq.v
    public JsonLogicBoolean getDisabled() {
        return this.f20667o;
    }

    @Override // pq.e0
    public JsonLogicBoolean getHidden() {
        return this.f20666i;
    }

    @Override // pq.k5
    public String getName() {
        return this.f20664d;
    }

    public int hashCode() {
        int hashCode = ((this.f20664d.hashCode() * 31) + this.f20665e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20666i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20667o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        InputTextBasedComponentStyle inputTextBasedComponentStyle = this.f20668p;
        return hashCode3 + (inputTextBasedComponentStyle != null ? inputTextBasedComponentStyle.hashCode() : 0);
    }

    @Override // pq.w4
    /* renamed from: i */
    public InputMaskedTextComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputMaskedTextComponent e10 = e(this, null, newString, null, null, null, 29, null);
        e10.g(b());
        return e10;
    }

    public String toString() {
        String str = this.f20664d;
        String str2 = this.f20665e;
        JsonLogicBoolean jsonLogicBoolean = this.f20666i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20667o;
        InputTextBasedComponentStyle inputTextBasedComponentStyle = this.f20668p;
        return "InputMaskedTextComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", styles=" + inputTextBasedComponentStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20664d);
        dest.writeString(this.f20665e);
        dest.writeParcelable(this.f20666i, i10);
        dest.writeParcelable(this.f20667o, i10);
        dest.writeParcelable(this.f20668p, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputMaskedTextComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText r8) {
        /*
            r7 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r2 = r8.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText$Attributes r0 = r8.getAttributes()
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
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText$Attributes r0 = r8.getAttributes()
            r1 = 0
            if (r0 == 0) goto L28
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r4 = r0
            goto L29
        L28:
            r4 = r1
        L29:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText$Attributes r0 = r8.getAttributes()
            if (r0 == 0) goto L33
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r0.getDisabled()
        L33:
            r5 = r1
            com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle r6 = r8.getStyles()
            r1 = r7
            r1.<init>(r2, r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputMaskedTextComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText):void");
    }
}
