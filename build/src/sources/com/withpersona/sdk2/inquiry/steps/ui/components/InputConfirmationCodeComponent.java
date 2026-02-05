package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import bn.t;
import bn.w;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import dq.e0;
import dq.k5;
import dq.v;
import dq.w4;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B+\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\u000b\u0010\fB\u0011\b\u0016\u0012\u0006\u0010\u000e\u001a\u00020\r¢\u0006\u0004\b\u000b\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0010\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u001d\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u0015¢\u0006\u0004\b\u0018\u0010\u0019J\r\u0010\u001a\u001a\u00020\u0015¢\u0006\u0004\b\u001a\u0010\u001bJ<\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0010\u0010\u001e\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010 \u001a\u00020\u0015HÖ\u0001¢\u0006\u0004\b \u0010\u001bJ\u001a\u0010$\u001a\u00020#2\b\u0010\"\u001a\u0004\u0018\u00010!HÖ\u0003¢\u0006\u0004\b$\u0010%R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b&\u0010'\u001a\u0004\b(\u0010\u001fR\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b)\u0010'\u001a\u0004\b*\u0010\u001fR\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0011\u0010+\u001a\u0004\b,\u0010-R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b.\u0010+\u001a\u0004\b/\u0010-R&\u00107\u001a\b\u0012\u0004\u0012\u000201008\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b2\u00103\u0012\u0004\b5\u00106\u001a\u0004\b&\u00104R(\u0010@\u001a\u0002088\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b9\u0010:\u0012\u0004\b?\u00106\u001a\u0004\b;\u0010<\"\u0004\b=\u0010>R\u001d\u0010G\u001a\u00020A8\u0006¢\u0006\u0012\n\u0004\bB\u0010C\u0012\u0004\bF\u00106\u001a\u0004\bD\u0010E¨\u0006H"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputConfirmationCodeComponent;", "Ldq/k5;", "Ldq/w4;", "Ldq/v;", "Ldq/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputConfirmationCode;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputConfirmationCode;)V", "newString", "i", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputConfirmationCodeComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputConfirmationCodeComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "", "Llq/a;", "p", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lbn/t;", "q", "Lbn/t;", "b", "()Lbn/t;", "g", "(Lbn/t;)V", "getTextController$annotations", "textController", "Lfq/c;", "r", "Lfq/c;", "f", "()Lfq/c;", "getSubmitCodeHelper$annotations", "submitCodeHelper", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputConfirmationCodeComponent implements k5, w4, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputConfirmationCodeComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19641d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19642e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19643i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19644o;

    /* renamed from: p  reason: collision with root package name */
    private final List f19645p;

    /* renamed from: q  reason: collision with root package name */
    private t f19646q;

    /* renamed from: r  reason: collision with root package name */
    private final fq.c f19647r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputConfirmationCodeComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputConfirmationCodeComponent(parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(InputConfirmationCodeComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputConfirmationCodeComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputConfirmationCodeComponent[] newArray(int i10) {
            return new InputConfirmationCodeComponent[i10];
        }
    }

    public InputConfirmationCodeComponent(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f19641d = name;
        this.f19642e = value;
        this.f19643i = jsonLogicBoolean;
        this.f19644o = jsonLogicBoolean2;
        this.f19645p = new ArrayList();
        this.f19646q = w.a(value);
        this.f19647r = new fq.c();
    }

    public static /* synthetic */ InputConfirmationCodeComponent e(InputConfirmationCodeComponent inputConfirmationCodeComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputConfirmationCodeComponent.f19641d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputConfirmationCodeComponent.f19642e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputConfirmationCodeComponent.f19643i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputConfirmationCodeComponent.f19644o;
        }
        return inputConfirmationCodeComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // dq.w4
    public t b() {
        return this.f19646q;
    }

    public final InputConfirmationCodeComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputConfirmationCodeComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // dq.e0
    public List d() {
        return this.f19645p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputConfirmationCodeComponent) {
            InputConfirmationCodeComponent inputConfirmationCodeComponent = (InputConfirmationCodeComponent) obj;
            return Intrinsics.areEqual(this.f19641d, inputConfirmationCodeComponent.f19641d) && Intrinsics.areEqual(this.f19642e, inputConfirmationCodeComponent.f19642e) && Intrinsics.areEqual(this.f19643i, inputConfirmationCodeComponent.f19643i) && Intrinsics.areEqual(this.f19644o, inputConfirmationCodeComponent.f19644o);
        }
        return false;
    }

    public final fq.c f() {
        return this.f19647r;
    }

    public void g(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f19646q = tVar;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19644o;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19643i;
    }

    @Override // dq.k5
    public String getName() {
        return this.f19641d;
    }

    public int hashCode() {
        int hashCode = ((this.f19641d.hashCode() * 31) + this.f19642e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19643i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19644o;
        return hashCode2 + (jsonLogicBoolean2 != null ? jsonLogicBoolean2.hashCode() : 0);
    }

    @Override // dq.w4
    /* renamed from: i */
    public InputConfirmationCodeComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputConfirmationCodeComponent e10 = e(this, null, newString, null, null, 13, null);
        e10.g(b());
        return e10;
    }

    public String toString() {
        String str = this.f19641d;
        String str2 = this.f19642e;
        JsonLogicBoolean jsonLogicBoolean = this.f19643i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19644o;
        return "InputConfirmationCodeComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19641d);
        dest.writeString(this.f19642e);
        dest.writeParcelable(this.f19643i, i10);
        dest.writeParcelable(this.f19644o, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputConfirmationCodeComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode$Attributes r1 = r5.getAttributes()
            if (r1 == 0) goto L15
            java.lang.String r1 = r1.getPrefill()
            if (r1 != 0) goto L17
        L15:
            java.lang.String r1 = ""
        L17:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode$Attributes r2 = r5.getAttributes()
            r3 = 0
            if (r2 == 0) goto L23
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r2.getHidden()
            goto L24
        L23:
            r2 = r3
        L24:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode$Attributes r5 = r5.getAttributes()
            if (r5 == 0) goto L2e
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r3 = r5.getDisabled()
        L2e:
            r4.<init>(r0, r1, r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputConfirmationCodeComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode):void");
    }
}
