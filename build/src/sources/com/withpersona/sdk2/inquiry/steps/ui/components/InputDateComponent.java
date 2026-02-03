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
import yp.e0;
import yp.k5;
import yp.s;
import yp.v;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004BE\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\f¢\u0006\u0004\b\u000e\u0010\u000fB\u0011\b\u0016\u0012\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u000e\u0010\u0012J\u0019\u0010\u0014\u001a\u00020\u00002\b\u0010\u0013\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u001d\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u0018¢\u0006\u0004\b\u001b\u0010\u001cJ\r\u0010\u001d\u001a\u00020\u0018¢\u0006\u0004\b\u001d\u0010\u001eJZ\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00052\u000e\b\u0002\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\fHÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u0010\u0010#\u001a\u00020\u0018HÖ\u0001¢\u0006\u0004\b#\u0010\u001eJ\u001a\u0010'\u001a\u00020&2\b\u0010%\u001a\u0004\u0018\u00010$HÖ\u0003¢\u0006\u0004\b'\u0010(R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b)\u0010*\u001a\u0004\b+\u0010\"R\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b,\u0010*\u001a\u0004\b-\u0010\"R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b.\u0010/\u001a\u0004\b0\u00101R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b2\u0010/\u001a\u0004\b3\u00101R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b4\u0010*\u001a\u0004\b5\u0010\"R\u001d\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\f8\u0006¢\u0006\f\n\u0004\b6\u00107\u001a\u0004\b8\u00109R&\u0010?\u001a\b\u0012\u0004\u0012\u00020;0:8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b<\u00107\u0012\u0004\b=\u0010>\u001a\u0004\b)\u00109R(\u0010H\u001a\u00020@8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bA\u0010B\u0012\u0004\bG\u0010>\u001a\u0004\bC\u0010D\"\u0004\bE\u0010F¨\u0006I"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "Lyp/k5;", "Lyp/s;", "Lyp/v;", "Lyp/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "monthPlaceholder", "", "monthList", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate;)V", "newDate", "g", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "getMonthPlaceholder", "q", "Ljava/util/List;", "getMonthList", "()Ljava/util/List;", "", "Lgq/a;", "r", "getAssociatedViews$annotations", "()V", "associatedViews", "Lzp/e;", "s", "Lzp/e;", "b", "()Lzp/e;", "f", "(Lzp/e;)V", "getDateController$annotations", "dateController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputDateComponent implements k5, s, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputDateComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f20267d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20268e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f20269i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20270o;

    /* renamed from: p  reason: collision with root package name */
    private final String f20271p;

    /* renamed from: q  reason: collision with root package name */
    private final List f20272q;

    /* renamed from: r  reason: collision with root package name */
    private final List f20273r;

    /* renamed from: s  reason: collision with root package name */
    private zp.e f20274s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputDateComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputDateComponent(parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(InputDateComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputDateComponent.class.getClassLoader()), parcel.readString(), parcel.createStringArrayList());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputDateComponent[] newArray(int i10) {
            return new InputDateComponent[i10];
        }
    }

    public InputDateComponent(String name, String str, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, List monthList) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(monthList, "monthList");
        this.f20267d = name;
        this.f20268e = str;
        this.f20269i = jsonLogicBoolean;
        this.f20270o = jsonLogicBoolean2;
        this.f20271p = str2;
        this.f20272q = monthList;
        this.f20273r = new ArrayList();
        this.f20274s = new zp.e(str, str2, monthList);
    }

    public static /* synthetic */ InputDateComponent e(InputDateComponent inputDateComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str3, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputDateComponent.f20267d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputDateComponent.f20268e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputDateComponent.f20269i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputDateComponent.f20270o;
        }
        if ((i10 & 16) != 0) {
            str3 = inputDateComponent.f20271p;
        }
        if ((i10 & 32) != 0) {
            list = inputDateComponent.f20272q;
        }
        String str4 = str3;
        List list2 = list;
        return inputDateComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2, str4, list2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getDateController$annotations() {
    }

    @Override // yp.s
    public zp.e b() {
        return this.f20274s;
    }

    public final InputDateComponent c(String name, String str, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, List monthList) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(monthList, "monthList");
        return new InputDateComponent(name, str, jsonLogicBoolean, jsonLogicBoolean2, str2, monthList);
    }

    @Override // yp.e0
    public List d() {
        return this.f20273r;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputDateComponent) {
            InputDateComponent inputDateComponent = (InputDateComponent) obj;
            return Intrinsics.areEqual(this.f20267d, inputDateComponent.f20267d) && Intrinsics.areEqual(this.f20268e, inputDateComponent.f20268e) && Intrinsics.areEqual(this.f20269i, inputDateComponent.f20269i) && Intrinsics.areEqual(this.f20270o, inputDateComponent.f20270o) && Intrinsics.areEqual(this.f20271p, inputDateComponent.f20271p) && Intrinsics.areEqual(this.f20272q, inputDateComponent.f20272q);
        }
        return false;
    }

    public void f(zp.e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<set-?>");
        this.f20274s = eVar;
    }

    @Override // yp.s
    /* renamed from: g */
    public InputDateComponent a(String str) {
        InputDateComponent e10 = e(this, null, str, null, null, null, null, 61, null);
        e10.f(b());
        return e10;
    }

    @Override // yp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20270o;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20269i;
    }

    @Override // yp.k5
    public String getName() {
        return this.f20267d;
    }

    public int hashCode() {
        int hashCode = this.f20267d.hashCode() * 31;
        String str = this.f20268e;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20269i;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20270o;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str2 = this.f20271p;
        return ((hashCode4 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f20272q.hashCode();
    }

    public String toString() {
        String str = this.f20267d;
        String str2 = this.f20268e;
        JsonLogicBoolean jsonLogicBoolean = this.f20269i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20270o;
        String str3 = this.f20271p;
        List list = this.f20272q;
        return "InputDateComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", monthPlaceholder=" + str3 + ", monthList=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20267d);
        dest.writeString(this.f20268e);
        dest.writeParcelable(this.f20269i, i10);
        dest.writeParcelable(this.f20270o, i10);
        dest.writeString(this.f20271p);
        dest.writeStringList(this.f20272q);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputDateComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate r9) {
        /*
            r8 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            java.lang.String r2 = r9.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate$Attributes r0 = r9.getAttributes()
            r1 = 0
            if (r0 == 0) goto L16
            java.lang.String r0 = r0.getPrefill()
            r3 = r0
            goto L17
        L16:
            r3 = r1
        L17:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L23
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r4 = r0
            goto L24
        L23:
            r4 = r1
        L24:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L30
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getDisabled()
            r5 = r0
            goto L31
        L30:
            r5 = r1
        L31:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate$Attributes r0 = r9.getAttributes()
            if (r0 == 0) goto L3b
            java.lang.String r1 = r0.getPlaceholderMonth()
        L3b:
            r6 = r1
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate$Attributes r9 = r9.getAttributes()
            if (r9 == 0) goto L4c
            java.util.List r9 = r9.getTextMonths()
            if (r9 != 0) goto L49
            goto L4c
        L49:
            r1 = r8
            r7 = r9
            goto L51
        L4c:
            java.util.List r9 = kotlin.collections.CollectionsKt.l()
            goto L49
        L51:
            r1.<init>(r2, r3, r4, r5, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputDateComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate):void");
    }
}
