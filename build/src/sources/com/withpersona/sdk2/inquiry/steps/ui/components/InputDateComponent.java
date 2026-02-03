package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import aq.e0;
import aq.k5;
import aq.s;
import aq.v;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004BE\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\f¢\u0006\u0004\b\u000e\u0010\u000fB\u0011\b\u0016\u0012\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u000e\u0010\u0012J\u0019\u0010\u0014\u001a\u00020\u00002\b\u0010\u0013\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u001d\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\u0018¢\u0006\u0004\b\u001b\u0010\u001cJ\r\u0010\u001d\u001a\u00020\u0018¢\u0006\u0004\b\u001d\u0010\u001eJZ\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00052\u000e\b\u0002\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\fHÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u0010\u0010#\u001a\u00020\u0018HÖ\u0001¢\u0006\u0004\b#\u0010\u001eJ\u001a\u0010'\u001a\u00020&2\b\u0010%\u001a\u0004\u0018\u00010$HÖ\u0003¢\u0006\u0004\b'\u0010(R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b)\u0010*\u001a\u0004\b+\u0010\"R\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b,\u0010*\u001a\u0004\b-\u0010\"R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b.\u0010/\u001a\u0004\b0\u00101R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b2\u0010/\u001a\u0004\b3\u00101R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b4\u0010*\u001a\u0004\b5\u0010\"R\u001d\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00050\f8\u0006¢\u0006\f\n\u0004\b6\u00107\u001a\u0004\b8\u00109R&\u0010?\u001a\b\u0012\u0004\u0012\u00020;0:8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b<\u00107\u0012\u0004\b=\u0010>\u001a\u0004\b)\u00109R(\u0010H\u001a\u00020@8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bA\u0010B\u0012\u0004\bG\u0010>\u001a\u0004\bC\u0010D\"\u0004\bE\u0010F¨\u0006I"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "Laq/k5;", "Laq/s;", "Laq/v;", "Laq/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "monthPlaceholder", "", "monthList", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate;)V", "newDate", "g", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputDateComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "getMonthPlaceholder", "q", "Ljava/util/List;", "getMonthList", "()Ljava/util/List;", "", "Liq/a;", "r", "getAssociatedViews$annotations", "()V", "associatedViews", "Lbq/e;", "s", "Lbq/e;", "b", "()Lbq/e;", "f", "(Lbq/e;)V", "getDateController$annotations", "dateController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputDateComponent implements k5, s, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputDateComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19249d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19250e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19251i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19252o;

    /* renamed from: p  reason: collision with root package name */
    private final String f19253p;

    /* renamed from: q  reason: collision with root package name */
    private final List f19254q;

    /* renamed from: r  reason: collision with root package name */
    private final List f19255r;

    /* renamed from: s  reason: collision with root package name */
    private bq.e f19256s;

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
        this.f19249d = name;
        this.f19250e = str;
        this.f19251i = jsonLogicBoolean;
        this.f19252o = jsonLogicBoolean2;
        this.f19253p = str2;
        this.f19254q = monthList;
        this.f19255r = new ArrayList();
        this.f19256s = new bq.e(str, str2, monthList);
    }

    public static /* synthetic */ InputDateComponent e(InputDateComponent inputDateComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str3, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputDateComponent.f19249d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputDateComponent.f19250e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputDateComponent.f19251i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputDateComponent.f19252o;
        }
        if ((i10 & 16) != 0) {
            str3 = inputDateComponent.f19253p;
        }
        if ((i10 & 32) != 0) {
            list = inputDateComponent.f19254q;
        }
        String str4 = str3;
        List list2 = list;
        return inputDateComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2, str4, list2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getDateController$annotations() {
    }

    @Override // aq.s
    public bq.e b() {
        return this.f19256s;
    }

    public final InputDateComponent c(String name, String str, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, List monthList) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(monthList, "monthList");
        return new InputDateComponent(name, str, jsonLogicBoolean, jsonLogicBoolean2, str2, monthList);
    }

    @Override // aq.e0
    public List d() {
        return this.f19255r;
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
            return Intrinsics.areEqual(this.f19249d, inputDateComponent.f19249d) && Intrinsics.areEqual(this.f19250e, inputDateComponent.f19250e) && Intrinsics.areEqual(this.f19251i, inputDateComponent.f19251i) && Intrinsics.areEqual(this.f19252o, inputDateComponent.f19252o) && Intrinsics.areEqual(this.f19253p, inputDateComponent.f19253p) && Intrinsics.areEqual(this.f19254q, inputDateComponent.f19254q);
        }
        return false;
    }

    public void f(bq.e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<set-?>");
        this.f19256s = eVar;
    }

    @Override // aq.s
    /* renamed from: g */
    public InputDateComponent a(String str) {
        InputDateComponent e10 = e(this, null, str, null, null, null, null, 61, null);
        e10.f(b());
        return e10;
    }

    @Override // aq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19252o;
    }

    @Override // aq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19251i;
    }

    @Override // aq.k5
    public String getName() {
        return this.f19249d;
    }

    public int hashCode() {
        int hashCode = this.f19249d.hashCode() * 31;
        String str = this.f19250e;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19251i;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19252o;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str2 = this.f19253p;
        return ((hashCode4 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f19254q.hashCode();
    }

    public String toString() {
        String str = this.f19249d;
        String str2 = this.f19250e;
        JsonLogicBoolean jsonLogicBoolean = this.f19251i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19252o;
        String str3 = this.f19253p;
        List list = this.f19254q;
        return "InputDateComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", monthPlaceholder=" + str3 + ", monthList=" + list + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19249d);
        dest.writeString(this.f19250e);
        dest.writeParcelable(this.f19251i, i10);
        dest.writeParcelable(this.f19252o, i10);
        dest.writeString(this.f19253p);
        dest.writeStringList(this.f19254q);
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
