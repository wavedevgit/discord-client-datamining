package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import fq.e0;
import fq.k5;
import fq.v;
import fq.v4;
import gq.i;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0004\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000f\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B-\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\f\u0010\rB\u0011\b\u0016\u0012\u0006\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\f\u0010\u0010J\u0019\u0010\u0012\u001a\u00020\u00002\b\u0010\u0011\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u001d\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\r\u0010\u001b\u001a\u00020\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ>\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001d\u0010\u001eJ\u0010\u0010\u001f\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0016HÖ\u0001¢\u0006\u0004\b!\u0010\u001cJ\u001a\u0010%\u001a\u00020$2\b\u0010#\u001a\u0004\u0018\u00010\"HÖ\u0003¢\u0006\u0004\b%\u0010&R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b'\u0010(\u001a\u0004\b)\u0010 R\u0019\u0010\b\u001a\u0004\u0018\u00010\u00078\u0006¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010-R\u001c\u0010\n\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b.\u0010/\u001a\u0004\b0\u00101R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b2\u0010/\u001a\u0004\b3\u00101R&\u0010;\u001a\b\u0012\u0004\u0012\u000205048\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b6\u00107\u0012\u0004\b9\u0010:\u001a\u0004\b'\u00108R(\u0010D\u001a\u00020<8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b=\u0010>\u0012\u0004\bC\u0010:\u001a\u0004\b?\u0010@\"\u0004\bA\u0010B¨\u0006E"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputNumberComponent;", "Lfq/k5;", "Lfq/v4;", "Lfq/v;", "Lfq/e0;", "", StackTraceHelper.NAME_KEY, "", "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "<init>", "(Ljava/lang/String;Ljava/lang/Number;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputNumber;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputNumber;)V", "newValue", "h", "(Ljava/lang/Number;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputNumberComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/Number;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputNumberComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Ljava/lang/Number;", "getValue", "()Ljava/lang/Number;", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "", "Lnq/a;", "p", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lgq/i;", "q", "Lgq/i;", "b", "()Lgq/i;", "f", "(Lgq/i;)V", "getNumberController$annotations", "numberController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputNumberComponent implements k5, v4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputNumberComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19650d;

    /* renamed from: e  reason: collision with root package name */
    private final Number f19651e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19652i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19653o;

    /* renamed from: p  reason: collision with root package name */
    private final List f19654p;

    /* renamed from: q  reason: collision with root package name */
    private i f19655q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputNumberComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputNumberComponent(parcel.readString(), (Number) parcel.readSerializable(), (JsonLogicBoolean) parcel.readParcelable(InputNumberComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputNumberComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputNumberComponent[] newArray(int i10) {
            return new InputNumberComponent[i10];
        }
    }

    public InputNumberComponent(String name, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f19650d = name;
        this.f19651e = number;
        this.f19652i = jsonLogicBoolean;
        this.f19653o = jsonLogicBoolean2;
        this.f19654p = new ArrayList();
        this.f19655q = new i(number);
    }

    public static /* synthetic */ InputNumberComponent e(InputNumberComponent inputNumberComponent, String str, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputNumberComponent.f19650d;
        }
        if ((i10 & 2) != 0) {
            number = inputNumberComponent.f19651e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputNumberComponent.f19652i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputNumberComponent.f19653o;
        }
        return inputNumberComponent.c(str, number, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getNumberController$annotations() {
    }

    @Override // fq.v4
    public i b() {
        return this.f19655q;
    }

    public final InputNumberComponent c(String name, Number number, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new InputNumberComponent(name, number, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // fq.e0
    public List d() {
        return this.f19654p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputNumberComponent) {
            InputNumberComponent inputNumberComponent = (InputNumberComponent) obj;
            return Intrinsics.areEqual(this.f19650d, inputNumberComponent.f19650d) && Intrinsics.areEqual(this.f19651e, inputNumberComponent.f19651e) && Intrinsics.areEqual(this.f19652i, inputNumberComponent.f19652i) && Intrinsics.areEqual(this.f19653o, inputNumberComponent.f19653o);
        }
        return false;
    }

    public void f(i iVar) {
        Intrinsics.checkNotNullParameter(iVar, "<set-?>");
        this.f19655q = iVar;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19653o;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19652i;
    }

    @Override // fq.k5
    public String getName() {
        return this.f19650d;
    }

    @Override // fq.v4
    /* renamed from: h */
    public InputNumberComponent a(Number number) {
        InputNumberComponent e10 = e(this, null, number, null, null, 13, null);
        e10.f(b());
        return e10;
    }

    public int hashCode() {
        int hashCode = this.f19650d.hashCode() * 31;
        Number number = this.f19651e;
        int hashCode2 = (hashCode + (number == null ? 0 : number.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19652i;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19653o;
        return hashCode3 + (jsonLogicBoolean2 != null ? jsonLogicBoolean2.hashCode() : 0);
    }

    public String toString() {
        String str = this.f19650d;
        Number number = this.f19651e;
        JsonLogicBoolean jsonLogicBoolean = this.f19652i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19653o;
        return "InputNumberComponent(name=" + str + ", value=" + number + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19650d);
        dest.writeSerializable(this.f19651e);
        dest.writeParcelable(this.f19652i, i10);
        dest.writeParcelable(this.f19653o, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputNumberComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber$Attributes r1 = r5.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            java.lang.Number r1 = r1.getPrefill()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber$Attributes r3 = r5.getAttributes()
            if (r3 == 0) goto L21
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r3 = r3.getHidden()
            goto L22
        L21:
            r3 = r2
        L22:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber$Attributes r5 = r5.getAttributes()
            if (r5 == 0) goto L2c
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r5.getDisabled()
        L2c:
            r4.<init>(r0, r1, r3, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputNumberComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber):void");
    }
}
