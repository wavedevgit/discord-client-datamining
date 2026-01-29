package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import xp.e0;
import xp.k5;
import xp.u4;
import xp.v;
import yp.m;
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0010\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\b\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B+\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\f\u0010\rB\u001b\b\u0016\u0012\u0006\u0010\u000f\u001a\u00020\u000e\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\f\u0010\u0010J\u0017\u0010\u0012\u001a\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u001d\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\r\u0010\u001b\u001a\u00020\u0016¢\u0006\u0004\b\u001b\u0010\u001cJ<\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001d\u0010\u001eJ\u0010\u0010\u001f\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0016HÖ\u0001¢\u0006\u0004\b!\u0010\u001cJ\u001a\u0010$\u001a\u00020\u00072\b\u0010#\u001a\u0004\u0018\u00010\"HÖ\u0003¢\u0006\u0004\b$\u0010%R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b&\u0010'\u001a\u0004\b(\u0010 R\u0017\u0010\b\u001a\u00020\u00078\u0006¢\u0006\f\n\u0004\b)\u0010*\u001a\u0004\b+\u0010,R\u001c\u0010\n\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b-\u0010.\u001a\u0004\b/\u00100R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b1\u0010.\u001a\u0004\b2\u00100R&\u0010:\u001a\b\u0012\u0004\u0012\u000204038\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b5\u00106\u0012\u0004\b8\u00109\u001a\u0004\b&\u00107R(\u0010B\u001a\u00020;8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b<\u0010=\u0012\u0004\bA\u00109\u001a\u0004\b>\u0010?\"\u0004\b)\u0010@¨\u0006C"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxComponent;", "Lxp/k5;", "Lxp/u4;", "Lxp/v;", "Lxp/e0;", "", StackTraceHelper.NAME_KEY, "", "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "<init>", "(Ljava/lang/String;ZLcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckbox;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckbox;Z)V", "newValue", "f", "(Z)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "b", "(Ljava/lang/String;ZLcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Z", "getValue", "()Z", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "", "Lfq/a;", "p", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lyp/m;", "q", "Lyp/m;", "a", "()Lyp/m;", "(Lyp/m;)V", "getTwoStateViewController$annotations", "twoStateViewController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputCheckboxComponent implements k5, u4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputCheckboxComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f20608d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f20609e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f20610i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20611o;

    /* renamed from: p  reason: collision with root package name */
    private final List f20612p;

    /* renamed from: q  reason: collision with root package name */
    private m f20613q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputCheckboxComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputCheckboxComponent(parcel.readString(), parcel.readInt() != 0, (JsonLogicBoolean) parcel.readParcelable(InputCheckboxComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputCheckboxComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputCheckboxComponent[] newArray(int i10) {
            return new InputCheckboxComponent[i10];
        }
    }

    public InputCheckboxComponent(String name, boolean z10, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20608d = name;
        this.f20609e = z10;
        this.f20610i = jsonLogicBoolean;
        this.f20611o = jsonLogicBoolean2;
        this.f20612p = new ArrayList();
        this.f20613q = new m(z10);
    }

    public static /* synthetic */ InputCheckboxComponent c(InputCheckboxComponent inputCheckboxComponent, String str, boolean z10, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputCheckboxComponent.f20608d;
        }
        if ((i10 & 2) != 0) {
            z10 = inputCheckboxComponent.f20609e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputCheckboxComponent.f20610i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputCheckboxComponent.f20611o;
        }
        return inputCheckboxComponent.b(str, z10, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTwoStateViewController$annotations() {
    }

    @Override // xp.u4
    public m a() {
        return this.f20613q;
    }

    public final InputCheckboxComponent b(String name, boolean z10, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new InputCheckboxComponent(name, z10, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // xp.e0
    public List d() {
        return this.f20612p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public void e(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.f20613q = mVar;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputCheckboxComponent) {
            InputCheckboxComponent inputCheckboxComponent = (InputCheckboxComponent) obj;
            return Intrinsics.areEqual(this.f20608d, inputCheckboxComponent.f20608d) && this.f20609e == inputCheckboxComponent.f20609e && Intrinsics.areEqual(this.f20610i, inputCheckboxComponent.f20610i) && Intrinsics.areEqual(this.f20611o, inputCheckboxComponent.f20611o);
        }
        return false;
    }

    @Override // xp.u4
    /* renamed from: f */
    public InputCheckboxComponent update(boolean z10) {
        InputCheckboxComponent c10 = c(this, null, z10, null, null, 13, null);
        c10.e(a());
        return c10;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20611o;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20610i;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20608d;
    }

    public int hashCode() {
        int hashCode = ((this.f20608d.hashCode() * 31) + Boolean.hashCode(this.f20609e)) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20610i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20611o;
        return hashCode2 + (jsonLogicBoolean2 != null ? jsonLogicBoolean2.hashCode() : 0);
    }

    public String toString() {
        String str = this.f20608d;
        boolean z10 = this.f20609e;
        JsonLogicBoolean jsonLogicBoolean = this.f20610i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20611o;
        return "InputCheckboxComponent(name=" + str + ", value=" + z10 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20608d);
        dest.writeInt(this.f20609e ? 1 : 0);
        dest.writeParcelable(this.f20610i, i10);
        dest.writeParcelable(this.f20611o, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ InputCheckboxComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox r1, boolean r2, int r3, kotlin.jvm.internal.DefaultConstructorMarker r4) {
        /*
            r0 = this;
            r3 = r3 & 2
            if (r3 == 0) goto L16
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox$Attributes r2 = r1.getAttributes()
            if (r2 == 0) goto L15
            java.lang.Boolean r2 = r2.getPrefill()
            if (r2 == 0) goto L15
            boolean r2 = r2.booleanValue()
            goto L16
        L15:
            r2 = 0
        L16:
            r0.<init>(r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox, boolean, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputCheckboxComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox r4, boolean r5) {
        /*
            r3 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = r4.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox$Attributes r1 = r4.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox$Attributes r4 = r4.getAttributes()
            if (r4 == 0) goto L20
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r4.getDisabled()
        L20:
            r3.<init>(r0, r5, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox, boolean):void");
    }
}
